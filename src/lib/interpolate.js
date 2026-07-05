// Core track math. OpenSky pings are irregular and sparse; everything here
// exists to interpolate between them for smooth playback while never letting
// an inferred position masquerade as a measured one.
//
// A waypoint is { t (unix seconds), lat, lon, alt (m or null), hdg (deg or
// null), onGround (bool) }.

// Ping spacing at or below this is treated as continuous measured track.
export const INTERP_GAP = 60;
// Spacing beyond this means coverage was lost (no receivers heard the
// aircraft); we still connect the dots, but as a coverage gap.
export const COVERAGE_GAP = 600;

const toRad = (d) => (d * Math.PI) / 180;
const toDeg = (r) => (r * 180) / Math.PI;

// Initial great-circle bearing from a to b, degrees clockwise from north.
export function bearing(a, b) {
  const phi1 = toRad(a.lat);
  const phi2 = toRad(b.lat);
  const dLon = toRad(b.lon - a.lon);
  const y = Math.sin(dLon) * Math.cos(phi2);
  const x =
    Math.cos(phi1) * Math.sin(phi2) -
    Math.sin(phi1) * Math.cos(phi2) * Math.cos(dLon);
  return (toDeg(Math.atan2(y, x)) + 360) % 360;
}

// Point at fraction f (0..1) along the great circle from a to b.
export function greatCirclePoint(a, b, f) {
  const phi1 = toRad(a.lat);
  const lam1 = toRad(a.lon);
  const phi2 = toRad(b.lat);
  const lam2 = toRad(b.lon);

  const sinHalf =
    Math.sin((phi2 - phi1) / 2) ** 2 +
    Math.cos(phi1) * Math.cos(phi2) * Math.sin((lam2 - lam1) / 2) ** 2;
  const delta = 2 * Math.asin(Math.min(1, Math.sqrt(sinHalf)));
  if (delta < 1e-9) return { lat: a.lat, lon: a.lon };

  const A = Math.sin((1 - f) * delta) / Math.sin(delta);
  const B = Math.sin(f * delta) / Math.sin(delta);
  const x = A * Math.cos(phi1) * Math.cos(lam1) + B * Math.cos(phi2) * Math.cos(lam2);
  const y = A * Math.cos(phi1) * Math.sin(lam1) + B * Math.cos(phi2) * Math.sin(lam2);
  const z = A * Math.sin(phi1) + B * Math.sin(phi2);
  return {
    lat: toDeg(Math.atan2(z, Math.hypot(x, y))),
    lon: toDeg(Math.atan2(y, x)),
  };
}

// Sort by time and drop duplicate timestamps / unusable points.
export function normalizeTrack(waypoints) {
  const usable = waypoints.filter(
    (w) => Number.isFinite(w.t) && Number.isFinite(w.lat) && Number.isFinite(w.lon)
  );
  usable.sort((a, b) => a.t - b.t);
  return usable.filter((w, i) => i === 0 || w.t !== usable[i - 1].t);
}

function pairKind(a, b) {
  if (a.onGround && b.onGround) return 'ground';
  const dt = b.t - a.t;
  if (dt > COVERAGE_GAP) return 'gap';
  if (dt > INTERP_GAP) return 'interp';
  return 'real';
}

// Split a normalized track into runs of consecutive same-kind pairs.
// Adjacent segments share their boundary waypoint, so drawing every
// segment's points yields a continuous path. kinds: real | interp | gap |
// ground.
export function buildSegments(waypoints) {
  if (waypoints.length < 2) return [];
  const segments = [];
  let current = null;
  for (let i = 1; i < waypoints.length; i++) {
    const kind = pairKind(waypoints[i - 1], waypoints[i]);
    if (current && current.kind === kind) {
      current.points.push(waypoints[i]);
      current.t1 = waypoints[i].t;
    } else {
      current = {
        kind,
        points: [waypoints[i - 1], waypoints[i]],
        t0: waypoints[i - 1].t,
        t1: waypoints[i].t,
      };
      segments.push(current);
    }
  }
  return segments;
}

const lerp = (a, b, f) =>
  a == null || b == null ? a ?? b ?? null : a + (b - a) * f;

// Position at time t. Before the first ping / after the last, the aircraft
// is treated as parked at that ping (kind 'parked'). Between pings the
// position is great-circle interpolated and tagged with the pair's kind so
// callers can keep inferred positions visually honest.
export function positionAt(waypoints, t) {
  if (waypoints.length === 0) return null;
  const first = waypoints[0];
  const last = waypoints[waypoints.length - 1];
  if (t <= first.t) return { ...pointOf(first), t, kind: 'parked' };
  if (t >= last.t) return { ...pointOf(last), t, kind: 'parked' };

  // Binary search for the bracketing pair (a.t <= t < b.t).
  let lo = 0;
  let hi = waypoints.length - 1;
  while (hi - lo > 1) {
    const mid = (lo + hi) >> 1;
    if (waypoints[mid].t <= t) lo = mid;
    else hi = mid;
  }
  const a = waypoints[lo];
  const b = waypoints[hi];
  const f = (t - a.t) / (b.t - a.t);
  const { lat, lon } = greatCirclePoint(a, b, f);
  const moving = Math.abs(a.lat - b.lat) > 1e-7 || Math.abs(a.lon - b.lon) > 1e-7;
  return {
    lat,
    lon,
    alt: lerp(a.alt, b.alt, f),
    hdg: moving ? bearing(a, b) : a.hdg ?? b.hdg ?? null,
    onGround: a.onGround && b.onGround,
    t,
    kind: pairKind(a, b),
  };
}

function pointOf(w) {
  return { lat: w.lat, lon: w.lon, alt: w.alt, hdg: w.hdg ?? null, onGround: true };
}

// Tracks usually stop at landing and restart at takeoff, so a parked
// aircraft looks identical to lost coverage. But when the flight list says
// it arrived and later departed from the same airport, the hours between
// are known ground time — inject a pair of on-ground waypoints so they
// classify as 'ground', not 'gap'. flights: [{ from, to, dep, arr }].
export function injectParkedTime(waypoints, flights = []) {
  if (!flights || flights.length < 2 || waypoints.length === 0) return waypoints;
  const sorted = [...flights].sort((a, b) => a.dep - b.dep);
  const out = [...waypoints];
  for (let i = 1; i < sorted.length; i++) {
    const prev = sorted[i - 1];
    const next = sorted[i];
    if (!prev.to || !next.from || prev.to !== next.from) continue;
    if (next.dep - prev.arr < 2 * COVERAGE_GAP) continue;
    let before = null;
    for (const w of waypoints) {
      if (w.t <= prev.arr + COVERAGE_GAP) before = w;
      else break;
    }
    const after = waypoints.find((w) => w.t >= next.dep - COVERAGE_GAP);
    if (!before || !after) continue;
    out.push(
      { t: prev.arr + 60, lat: before.lat, lon: before.lon, alt: null, hdg: null, onGround: true },
      { t: next.dep - 60, lat: after.lat, lon: after.lon, alt: null, hdg: null, onGround: true }
    );
  }
  return out; // normalizeTrack re-sorts
}
