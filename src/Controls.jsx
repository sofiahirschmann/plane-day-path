const SPEEDS = [30, 120, 600];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M8 5v14l11-7z" fill="currentColor" />
  </svg>
);

const PauseIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" fill="currentColor" />
  </svg>
);

export function Controls({ playing, onToggle, speed, onSpeed, disabled }) {
  return (
    <div className="controls">
      <button
        type="button"
        className={`play${playing ? ' is-playing' : ''}`}
        onClick={onToggle}
        disabled={disabled}
        aria-label={playing ? 'Pause playback' : 'Play the day'}
      >
        {playing ? <PauseIcon /> : <PlayIcon />}
      </button>
      <div className="speeds" role="group" aria-label="Playback speed">
        {SPEEDS.map((s) => (
          <button
            type="button"
            key={s}
            className={s === speed ? 'active' : ''}
            onClick={() => onSpeed(s)}
            aria-pressed={s === speed}
          >
            {s}×
          </button>
        ))}
      </div>
    </div>
  );
}

const KIND_LABEL = {
  real: 'tracking',
  interp: 'estimated',
  gap: 'no coverage',
  ground: 'on ground',
  parked: 'parked',
};

export function Clock({ t, pos }) {
  const d = new Date(t * 1000);
  const utc = d.toISOString().slice(11, 19);
  const local = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZoneName: 'short' });
  const kind = pos?.onGround && pos.kind !== 'parked' ? 'ground' : pos?.kind;
  const showAlt = pos?.alt != null && !pos.onGround && pos.kind !== 'parked';

  return (
    <div className="clock">
      <div className="clock-utc mono">
        {utc}
        <span className="clock-utc-label"> UTC</span>
      </div>
      <div className="clock-sub mono">
        {local} local{showAlt ? ` · ${Math.round(pos.alt).toLocaleString()} m` : ''}
      </div>
      {kind && <span className={`status-chip kind-${kind}`}>{KIND_LABEL[kind]}</span>}
    </div>
  );
}
