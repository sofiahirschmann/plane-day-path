import { useEffect, useMemo, useRef, useState } from 'react';

// The signature element: a 24-hour strip where the day's structure is the
// rendering — solid navy blocks while airborne, hatching where coverage
// dropped, a thin bar while the aircraft sat on the ground. Doubles as the
// scrubber; the red widget triangle is the playhead.

const HEIGHT = 52;
const BAND_Y = 14;
const BAND_H = 16;

// Interpolated stretches shorter than this are invisible at day scale
// (~3px on a wide screen); the map stays the fine-grained honest view.
const MIN_INTERP_OVERLAY = 300;

// Merge consecutive airborne runs (real + interp) into single flight
// blocks so the strip reads as the day's structure, not a barcode of ping
// density. Long interpolated stretches come back as overlays.
function summarize(segments) {
  const blocks = [];
  const overlays = [];
  for (const seg of segments) {
    const airborne = seg.kind === 'real' || seg.kind === 'interp';
    const kind = airborne ? 'flight' : seg.kind;
    const last = blocks[blocks.length - 1];
    if (last && last.kind === kind && last.t1 >= seg.t0) last.t1 = seg.t1;
    else blocks.push({ kind, t0: seg.t0, t1: seg.t1 });
    if (seg.kind === 'interp' && seg.t1 - seg.t0 >= MIN_INTERP_OVERLAY) {
      overlays.push({ t0: seg.t0, t1: seg.t1 });
    }
  }
  return { blocks, overlays };
}

export default function DayStrip({ segments, dayStart, t, onScrub }) {
  const wrapRef = useRef(null);
  const dragging = useRef(false);
  const [width, setWidth] = useState(600);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => setWidth(entries[0].contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const x = (unix) => ((unix - dayStart) / 86400) * width;
  const timeAt = (clientX) => {
    const rect = wrapRef.current.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    return dayStart + f * 86400;
  };

  const { blocks, overlays } = useMemo(() => summarize(segments), [segments]);
  const px = Math.min(width, Math.max(0, x(t)));
  const utcLabel = new Date(t * 1000).toISOString().slice(11, 16) + ' UTC';

  return (
    <div className="strip-wrap" ref={wrapRef}>
      <svg
        width={width}
        height={HEIGHT}
        className="strip"
        role="slider"
        tabIndex={0}
        aria-label="Time of day scrubber"
        aria-valuemin={dayStart}
        aria-valuemax={dayStart + 86400}
        aria-valuenow={Math.round(t)}
        aria-valuetext={utcLabel}
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          onScrub(timeAt(e.clientX));
        }}
        onPointerMove={(e) => {
          if (dragging.current) onScrub(timeAt(e.clientX));
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') {
            e.preventDefault();
            onScrub(t - 300);
          } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            onScrub(t + 300);
          }
        }}
      >
        <defs>
          <pattern id="hatch" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="5" stroke="var(--slate)" strokeWidth="1.4" />
          </pattern>
        </defs>

        {/* baseline across the whole day */}
        <line x1="0" y1={BAND_Y + BAND_H / 2} x2={width} y2={BAND_Y + BAND_H / 2} stroke="var(--hairline)" strokeWidth="1" />

        {/* hour ticks, labels every 3h */}
        {Array.from({ length: 25 }, (_, h) => {
          const hx = (h / 24) * width;
          return (
            <g key={h}>
              <line x1={hx} y1={BAND_Y + BAND_H + 4} x2={hx} y2={BAND_Y + BAND_H + (h % 3 === 0 ? 9 : 7)} stroke="var(--hairline)" strokeWidth="1" />
              {h % 3 === 0 && h < 24 && (
                <text x={hx + (h === 0 ? 2 : 0)} y={HEIGHT - 3} textAnchor={h === 0 ? 'start' : 'middle'} className="strip-hour">
                  {String(h).padStart(2, '0')}
                </text>
              )}
            </g>
          );
        })}
        <text x={width - 1} y={HEIGHT - 3} textAnchor="end" className="strip-hour">
          UTC
        </text>

        {/* the day itself */}
        {blocks.map((blk, i) => {
          const sx = x(blk.t0);
          const w = Math.max(1.5, x(blk.t1) - sx);
          if (blk.kind === 'ground') {
            return <rect key={i} x={sx} y={BAND_Y + BAND_H / 2 - 2} width={w} height="4" rx="2" fill="var(--slate)" opacity="0.55" />;
          }
          if (blk.kind === 'gap') {
            return (
              <g key={i}>
                <rect x={sx} y={BAND_Y} width={w} height={BAND_H} fill="url(#hatch)" />
                <rect x={sx} y={BAND_Y} width={w} height={BAND_H} fill="none" stroke="var(--hairline)" strokeWidth="1" />
              </g>
            );
          }
          return <rect key={i} x={sx} y={BAND_Y} width={w} height={BAND_H} rx="2" fill="var(--navy)" />;
        })}
        {overlays.map((o, i) => (
          <rect key={i} x={x(o.t0)} y={BAND_Y} width={Math.max(1.5, x(o.t1) - x(o.t0))} height={BAND_H} fill="var(--flight-blue)" />
        ))}

        {/* playhead: red widget triangle + hairline */}
        <line x1={px} y1="9" x2={px} y2={BAND_Y + BAND_H + 4} stroke="var(--red)" strokeWidth="1.5" />
        <path d={`M ${px - 5} 1 L ${px + 5} 1 L ${px} 9 Z`} fill="var(--red)" />
      </svg>
    </div>
  );
}
