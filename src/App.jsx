import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import MapView from './Map.jsx';
import DayStrip from './DayStrip.jsx';
import { Controls, Clock } from './Controls.jsx';
import { normalizeTrack, buildSegments, positionAt, injectParkedTime } from './lib/interpolate.js';
import { BUNDLED_DAY, BUNDLED_DAYS, BUNDLED_DATE } from './lib/bundledDay.js';

const REDUCED_MOTION =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

// For the route line: US airports are ICAO K### where dropping the K gives
// the familiar IATA code, but elsewhere ICAO and IATA differ, so map the
// hubs the app is likely to show. Unknown codes fall back to the raw code.
const IATA = {
  EGLL: 'LHR', EGKK: 'LGW', EGCC: 'MAN', EHAM: 'AMS', LFPG: 'CDG',
  LFPO: 'ORY', EDDF: 'FRA', EDDM: 'MUC', LIRF: 'FCO', LIMC: 'MXP',
  LEMD: 'MAD', LEBL: 'BCN', LPPT: 'LIS', LGAV: 'ATH', EIDW: 'DUB',
  LSZH: 'ZRH', LOWW: 'VIE', EKCH: 'CPH', ESSA: 'ARN', ENGM: 'OSL',
};
const airportLabel = (c) => (c ? IATA[c] ?? c.replace(/^K(?=[A-Z]{3}$)/, '') : '——');

const Widget = ({ size = 10 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true">
    <path d="M12 2 22 21H2z" fill="var(--red)" />
  </svg>
);

// Swatches sit on a dark chip because the map lines are drawn over
// satellite imagery; colors must match STYLE in Map.jsx.
const chip = <rect width="26" height="12" rx="3" fill="#0d2440" />;
const LEGEND = [
  {
    label: 'Measured ADS-B pings',
    swatch: (
      <>
        {chip}
        <line x1="3" y1="6" x2="23" y2="6" stroke="#ffffff" strokeWidth="3" />
      </>
    ),
  },
  {
    label: 'Interpolated between pings',
    swatch: (
      <>
        {chip}
        <line x1="3" y1="6" x2="23" y2="6" stroke="#8fbcec" strokeWidth="2.5" strokeDasharray="5 4" />
      </>
    ),
  },
  {
    label: 'No receiver coverage',
    swatch: (
      <>
        {chip}
        <line x1="3" y1="6" x2="23" y2="6" stroke="#b9c7d6" strokeWidth="1.6" strokeDasharray="1.5 4" />
      </>
    ),
  },
];

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [idInput, setIdInput] = useState('');
  const [dateInput, setDateInput] = useState(BUNDLED_DATE);
  const [t, setT] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [speed, setSpeed] = useState(120);

  const track = useMemo(
    () => (data ? normalizeTrack(injectParkedTime(data.waypoints, data.flights)) : []),
    [data]
  );
  const segments = useMemo(() => buildSegments(track), [track]);
  const dayStart = useMemo(
    () => (data ? Math.floor(Date.parse(`${data.date}T00:00:00Z`) / 1000) : 0),
    [data]
  );
  const trackStart = track[0]?.t ?? dayStart;
  const trackEnd = track[track.length - 1]?.t ?? dayStart + 86400;
  const pos = useMemo(() => positionAt(track, t), [track, t]);

  // The playback loop reads the end time through a ref: a queued animation
  // frame can fire between a data swap and the effect re-subscribing, and a
  // captured trackEnd from the old day would clamp the fresh t and stop
  // playback (symptom: new day loads already "finished" at the old day's
  // last second).
  const trackEndRef = useRef(trackEnd);
  useEffect(() => {
    trackEndRef.current = trackEnd;
  }, [trackEnd]);

  const applyData = useCallback((payload) => {
    const wps = payload.waypoints;
    if (wps.length) trackEndRef.current = wps[wps.length - 1].t;
    setData(payload);
    const first = wps[0]?.t ?? Math.floor(Date.parse(`${payload.date}T00:00:00Z`) / 1000);
    setT(first);
    setPlaying(!REDUCED_MOTION && wps.length > 1);
  }, []);

  // A real saved flight-day is the instant default; live searches go to
  // the API (which only reaches OpenSky when running locally).
  useEffect(() => {
    applyData(BUNDLED_DAY);
  }, [applyData]);

  const selectBundled = useCallback(
    (day) => {
      setError(null);
      setIdInput('');
      setDateInput(day.date);
      applyData(day);
    },
    [applyData]
  );

  const loadDay = useCallback(
    async (icao24, date) => {
      setLoading(true);
      setError(null);
      try {
        const resp = await fetch(
          `/api/track?icao24=${encodeURIComponent(icao24)}&date=${encodeURIComponent(date)}`
        );
        const body = await resp.json();
        if (!resp.ok) {
          throw Object.assign(new Error(body.message ?? 'Request failed'), { code: body.code });
        }
        if (body.waypoints.length === 0) {
          throw new Error(body.note ?? 'OpenSky has no flights for this aircraft on this day.');
        }
        applyData(body);
      } catch (err) {
        const messages = {
          NO_CREDENTIALS:
            'Live lookups need OpenSky API credentials. Create an API client on opensky-network.org, add credentials.json (walkthrough in the README), and restart. Showing the saved flight meanwhile.',
          UPSTREAM_UNREACHABLE:
            'Live search isn’t available on the hosted demo — OpenSky blocks cloud servers, so lookups only work when you run the app locally (see the README). Showing the saved flight.',
        };
        setError(messages[err.code] ?? err.message);
      } finally {
        setLoading(false);
      }
    },
    [applyData]
  );

  // Playback clock: t advances speed× real time while playing.
  useEffect(() => {
    if (!playing || track.length < 2) return;
    let raf;
    let last = performance.now();
    const step = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      setT((prev) => {
        const end = trackEndRef.current;
        const next = prev + dt * speed;
        if (next >= end) {
          setPlaying(false);
          return end;
        }
        return next;
      });
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [playing, speed, track.length]);

  const togglePlay = useCallback(() => {
    if (!playing && t >= trackEnd - 1) setT(trackStart);
    setPlaying((p) => !p);
  }, [playing, t, trackEnd, trackStart]);

  const scrubTo = useCallback(
    (next) => setT(Math.min(trackEnd, Math.max(dayStart, next))),
    [dayStart, trackEnd]
  );

  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target.tagName;
      if (/INPUT|SELECT|TEXTAREA|BUTTON/.test(tag)) return;
      const isSlider = e.target.getAttribute?.('role') === 'slider'; // DayStrip owns arrow keys
      if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
      } else if (isSlider) {
        return;
      } else if (e.key === 'ArrowLeft') {
        setT((v) => Math.max(trackStart, v - 300));
      } else if (e.key === 'ArrowRight') {
        setT((v) => Math.min(trackEnd, v + 300));
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [togglePlay, trackStart, trackEnd]);

  const route = useMemo(() => {
    if (!data?.flights?.length) return null;
    const codes = [data.flights[0].from, ...data.flights.map((f) => f.to)].map(airportLabel);
    return codes.join(' → ');
  }, [data]);

  const subline = [data?.registration, data?.aircraftType].filter(Boolean).join(' · ');
  const today = new Date().toISOString().slice(0, 10);

  return (
    <div className="app">
      <MapView segments={segments} pos={pos} />

      <aside className="panel ident-card">
        <div className="eyebrow">
          <Widget /> Plane day path
        </div>
        <h1 className="callsign">{data?.callsign ?? data?.icao24?.toUpperCase() ?? '——'}</h1>
        {subline && <p className="ident-sub">{subline}</p>}
        <p className="meta mono">
          {data?.date} · ICAO24 {data?.icao24?.toUpperCase()}
        </p>
        {route && <p className="route mono">{route}</p>}
        {data && data.source !== 'opensky' && (
          <>
            <span className="badge">
              {data.source === 'bundled' ? 'Saved flight' : 'Sample data'}
            </span>
            <p className="note">{data.note}</p>
          </>
        )}
        {BUNDLED_DAYS.length > 1 && (
          <div className="examples">
            <span className="examples-label">Example flights</span>
            <div className="examples-chips">
              {BUNDLED_DAYS.map((day) => {
                const active = data?.source === 'bundled' && data.icao24 === day.icao24;
                return (
                  <button
                    key={day.icao24}
                    type="button"
                    className={active ? 'active' : ''}
                    aria-pressed={active}
                    onClick={() => selectBundled(day)}
                  >
                    {day.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
        <ul className="legend">
          {LEGEND.map(({ label, swatch }) => (
            <li key={label}>
              <svg width="26" height="12" aria-hidden="true">
                {swatch}
              </svg>
              {label}
            </li>
          ))}
        </ul>
      </aside>

      <form
        className="panel picker"
        onSubmit={(e) => {
          e.preventDefault();
          if (idInput.trim()) loadDay(idInput.trim(), dateInput);
        }}
      >
        <input
          aria-label="Aircraft ICAO24 hex or registration"
          placeholder="ICAO24 hex or N-number"
          value={idInput}
          onChange={(e) => setIdInput(e.target.value)}
          spellCheck={false}
        />
        <input
          aria-label="UTC day"
          type="date"
          value={dateInput}
          max={today}
          onChange={(e) => setDateInput(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading…' : 'Load day'}
        </button>
        {error && (
          <p className="form-error" role="alert">
            {error}
          </p>
        )}
      </form>

      <div className="panel dock">
        <Controls
          playing={playing}
          onToggle={togglePlay}
          speed={speed}
          onSpeed={setSpeed}
          disabled={track.length < 2}
        />
        <DayStrip segments={segments} dayStart={dayStart} t={t} onScrub={scrubTo} />
        <Clock t={t} pos={pos} />
      </div>
    </div>
  );
}
