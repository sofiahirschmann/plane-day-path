// Bundled demo day: a Cessna 208B cargo feeder flying five short hops
// around Idaho and Montana. Synthesized along great circles with realistic
// speeds, altitudes and ping spacing, then deliberately sparsified so the
// track shows everything real OpenSky data shows: dense ADS-B runs, thin
// stretches that need interpolation, and dead zones over mountain terrain
// where no receiver heard the aircraft. Always labeled as sample data in
// the UI — never passed off as a real archive.

const AIRPORTS = {
  KBOI: { name: 'Boise', lat: 43.5644, lon: -116.2228, elev: 875 },
  KSUN: { name: 'Hailey / Sun Valley', lat: 43.5044, lon: -114.2966, elev: 1622 },
  KIDA: { name: 'Idaho Falls', lat: 43.5146, lon: -112.0708, elev: 1445 },
  KMSO: { name: 'Missoula', lat: 46.9163, lon: -114.0906, elev: 972 },
  KLWS: { name: 'Lewiston', lat: 46.3745, lon: -117.0154, elev: 438 },
};

const DATE = '2026-07-01';
const H = 3600;
const M = 60;

// [from, to, departure, arrival, cruise altitude m, receiver dead zones,
// optional en-route via point]
const LEGS = [
  ['KBOI', 'KSUN', 12 * H + 10 * M, 12 * H + 55 * M, 3800, [[12 * H + 26 * M, 12 * H + 38 * M]]],
  ['KSUN', 'KIDA', 13 * H + 40 * M, 14 * H + 30 * M, 3400, []],
  ['KIDA', 'KMSO', 15 * H + 15 * M, 16 * H + 20 * M, 3800, [[15 * H + 40 * M, 15 * H + 52 * M]], { lat: 45.15, lon: -113.55 }],
  ['KMSO', 'KLWS', 18 * H + 5 * M, 19 * H + 10 * M, 3200, []],
  ['KLWS', 'KBOI', 20 * H + 0 * M, 21 * H + 5 * M, 3600, []],
];

// Deterministic PRNG so the sample day is identical on every load.
function mulberry32(seed) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const toRad = (d) => (d * Math.PI) / 180;

function haversineKm(a, b) {
  const s =
    Math.sin(toRad(b.lat - a.lat) / 2) ** 2 +
    Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(toRad(b.lon - a.lon) / 2) ** 2;
  return 12742 * Math.asin(Math.sqrt(s));
}

function pointAlongRoute(controls, f) {
  const dists = [];
  let total = 0;
  for (let i = 1; i < controls.length; i++) {
    const d = haversineKm(controls[i - 1], controls[i]);
    dists.push(d);
    total += d;
  }
  let target = f * total;
  for (let i = 0; i < dists.length; i++) {
    if (target <= dists[i] || i === dists.length - 1) {
      const g = dists[i] === 0 ? 0 : target / dists[i];
      const a = controls[i];
      const b = controls[i + 1];
      // Linear blend is fine at these leg lengths (< 500 km).
      return { lat: a.lat + (b.lat - a.lat) * g, lon: a.lon + (b.lon - a.lon) * g };
    }
    target -= dists[i];
  }
  return controls[controls.length - 1];
}

function altitudeAt(f, fromElev, toElev, cruise) {
  const climbEnd = 0.18;
  const descentStart = 0.75;
  if (f < climbEnd) return fromElev + (cruise - fromElev) * (f / climbEnd);
  if (f > descentStart) return cruise + (toElev - cruise) * ((f - descentStart) / (1 - descentStart));
  return cruise;
}

function taxiPoints(airport, times, rng) {
  return times.map((t) => ({
    t,
    lat: airport.lat + (rng() - 0.5) * 0.003,
    lon: airport.lon + (rng() - 0.5) * 0.003,
    alt: airport.elev,
    hdg: null,
    onGround: true,
  }));
}

export function buildSampleDay() {
  const rng = mulberry32(20260701);
  const dayStart = Math.floor(Date.parse(`${DATE}T00:00:00Z`) / 1000);
  const waypoints = [];
  const flights = [];

  for (const [fromId, toId, dep, arr, cruise, deadZones, via] of LEGS) {
    const from = AIRPORTS[fromId];
    const to = AIRPORTS[toId];
    const depT = dayStart + dep;
    const arrT = dayStart + arr;
    const controls = via ? [from, via, to] : [from, to];

    waypoints.push(...taxiPoints(from, [depT - 300, depT - 180, depT - 70], rng));

    let t = depT;
    while (t <= arrT) {
      const f = (t - depT) / (arrT - depT);
      const inDeadZone = deadZones.some(([g0, g1]) => {
        const abs = t - dayStart;
        return abs >= g0 && abs <= g1;
      });
      if (!inDeadZone) {
        const { lat, lon } = pointAlongRoute(controls, f);
        waypoints.push({
          t: Math.round(t),
          lat: lat + (rng() - 0.5) * 0.0008,
          lon: lon + (rng() - 0.5) * 0.0008,
          alt: Math.round(altitudeAt(f, from.elev, to.elev, cruise) + (rng() - 0.5) * 40),
          hdg: null,
          onGround: false,
        });
      }
      // Normal ADS-B cadence, with occasional thin stretches where only a
      // distant receiver caught the aircraft (these become dashed
      // interpolated segments).
      t += rng() < 0.055 ? 75 + rng() * 130 : 8 + rng() * 9;
    }

    waypoints.push(...taxiPoints(to, [arrT + 80, arrT + 200, arrT + 320], rng));
    flights.push({
      from: fromId,
      fromName: from.name,
      to: toId,
      toName: to.name,
      dep: depT,
      arr: arrT,
    });
  }

  return {
    icao24: 'a642d1',
    callsign: 'MTN714',
    registration: 'N714CB',
    aircraftType: 'Cessna 208B Grand Caravan',
    date: DATE,
    source: 'sample',
    note: 'Synthesized demo day — add OpenSky API credentials to load real aircraft.',
    flights,
    waypoints,
  };
}

export const SAMPLE_ICAO24 = 'a642d1';
export const SAMPLE_DATE = DATE;
