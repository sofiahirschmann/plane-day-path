// Vercel-style serverless function: GET /api/track?icao24=<hex|registration>&date=YYYY-MM-DD
//
// The only backend in the project. It exists to (1) keep OpenSky credentials
// off the client and (2) cache aggressively — historical tracks are
// immutable, so a cache hit never re-fetches. Without credentials it answers
// 503 NO_CREDENTIALS and the frontend falls back to the bundled sample day.

import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

const AUTH_URL =
  'https://auth.opensky-network.org/auth/realms/opensky-network/protocol/openid-connect/token';
const API = 'https://opensky-network.org/api';
const CACHE_DIR = path.join(os.tmpdir(), 'plane-day-path-cache');

// OAuth2 access tokens last ~30 min; keep one per warm instance.
let cachedToken = { value: null, expiresAt: 0 };

// Env vars win (that's what Vercel uses); locally, the credentials.json
// downloaded from OpenSky's "API Client" page can be dropped into the
// project root as-is. The file is gitignored.
async function getCredentials() {
  if (process.env.OPENSKY_CLIENT_ID && process.env.OPENSKY_CLIENT_SECRET) {
    return {
      clientId: process.env.OPENSKY_CLIENT_ID,
      clientSecret: process.env.OPENSKY_CLIENT_SECRET,
    };
  }
  try {
    const raw = await fs.readFile(path.join(process.cwd(), 'credentials.json'), 'utf8');
    const { clientId, clientSecret } = JSON.parse(raw);
    if (clientId && clientSecret) return { clientId, clientSecret };
  } catch {
    // no file — fall through
  }
  return null;
}

async function getToken(clientId, clientSecret) {
  if (cachedToken.value && Date.now() < cachedToken.expiresAt - 60_000) {
    return cachedToken.value;
  }
  const resp = await fetch(AUTH_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    }),
  });
  if (!resp.ok) {
    throw Object.assign(new Error(`OpenSky auth failed (${resp.status})`), {
      code: 'AUTH_FAILED',
    });
  }
  const data = await resp.json();
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + (data.expires_in ?? 1800) * 1000,
  };
  return cachedToken.value;
}

async function openskyGet(pathAndQuery, token) {
  const resp = await fetch(`${API}${pathAndQuery}`, {
    headers: { authorization: `Bearer ${token}` },
  });
  if (resp.status === 404) return null; // OpenSky's "no data" answer
  if (resp.status === 429) {
    throw Object.assign(new Error('OpenSky rate limit reached — try again in a few minutes.'), {
      code: 'RATE_LIMITED',
    });
  }
  if (!resp.ok) {
    throw Object.assign(new Error(`OpenSky responded ${resp.status}`), { code: 'UPSTREAM' });
  }
  return resp.json();
}

// Registrations (e.g. N714CB) resolve to ICAO24 hex via hexdb.io — a free
// lookup that needs no key. Callsigns that aren't registrations can't be
// resolved historically; the UI explains that.
async function resolveIcao24(input) {
  const id = input.trim().toLowerCase();
  if (/^[0-9a-f]{6}$/.test(id)) return id;
  const resp = await fetch(`https://hexdb.io/reg-hex?reg=${encodeURIComponent(input.trim())}`);
  if (resp.ok) {
    const hex = (await resp.text()).trim().toLowerCase();
    if (/^[0-9a-f]{6}$/.test(hex)) return hex;
  }
  throw Object.assign(
    new Error(
      `Could not resolve "${input}" to an ICAO24 hex. Enter the 6-character hex (find it on any tracker's aircraft page).`
    ),
    { code: 'UNRESOLVED_ID' }
  );
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export default async function handler(req, res) {
  const { icao24: rawId = '', date = '' } = req.query;

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res.status(400).json({ code: 'BAD_DATE', message: 'date must be YYYY-MM-DD (UTC day)' });
  }
  const begin = Math.floor(Date.parse(`${date}T00:00:00Z`) / 1000);
  const end = begin + 86400;
  if (begin >= Math.floor(Date.now() / 1000)) {
    return res.status(400).json({ code: 'FUTURE_DATE', message: 'Pick a past UTC day.' });
  }
  if (!rawId.trim()) {
    return res.status(400).json({ code: 'BAD_ID', message: 'icao24 is required' });
  }

  try {
    const icao24 = await resolveIcao24(rawId);

    // Historical tracks are immutable: a cache hit never re-fetches.
    const cacheFile = path.join(CACHE_DIR, `${icao24}-${date}.json`);
    try {
      const hit = await fs.readFile(cacheFile, 'utf8');
      res.setHeader('cache-control', 's-maxage=86400, stale-while-revalidate');
      return res.status(200).json(JSON.parse(hit));
    } catch {
      // cache miss — fall through to fetch
    }

    const creds = await getCredentials();
    if (!creds) {
      return res.status(503).json({
        code: 'NO_CREDENTIALS',
        message:
          'OpenSky credentials are not configured. Drop your downloaded credentials.json into the project root, or set OPENSKY_CLIENT_ID / OPENSKY_CLIENT_SECRET (see README).',
      });
    }

    const token = await getToken(creds.clientId, creds.clientSecret);
    const flightsRaw =
      (await openskyGet(`/flights/aircraft?icao24=${icao24}&begin=${begin}&end=${end}`, token)) ?? [];

    const waypoints = [];
    const flights = [];
    for (const f of flightsRaw) {
      flights.push({
        callsign: f.callsign?.trim() || null,
        from: f.estDepartureAirport || null,
        to: f.estArrivalAirport || null,
        dep: f.firstSeen,
        arr: f.lastSeen,
      });
      const track = await openskyGet(`/tracks/all?icao24=${icao24}&time=${f.firstSeen}`, token);
      for (const [t, lat, lon, baroAlt, trueTrack, onGround] of track?.path ?? []) {
        if (lat == null || lon == null) continue;
        waypoints.push({ t, lat, lon, alt: baroAlt ?? null, hdg: trueTrack ?? null, onGround: !!onGround });
      }
      await sleep(300); // be polite to the rate limiter
    }

    flights.sort((a, b) => a.dep - b.dep); // OpenSky returns newest-first
    waypoints.sort((a, b) => a.t - b.t);
    const deduped = waypoints.filter((w, i) => i === 0 || w.t !== waypoints[i - 1].t);

    const result = {
      icao24,
      date,
      callsign: flights.find((f) => f.callsign)?.callsign ?? null,
      registration: null,
      aircraftType: null,
      source: 'opensky',
      note:
        flights.length === 0
          ? 'OpenSky has no flights for this aircraft on this day. Recent days can take a day or two to be processed — try an earlier date.'
          : null,
      flights,
      waypoints: deduped,
    };

    // Only cache days with data: an empty answer for a recent day may fill
    // in once OpenSky's batch processing catches up.
    if (deduped.length > 0) {
      await fs.mkdir(CACHE_DIR, { recursive: true });
      await fs.writeFile(cacheFile, JSON.stringify(result));
    }

    res.setHeader('cache-control', 's-maxage=86400, stale-while-revalidate');
    return res.status(200).json(result);
  } catch (err) {
    const code = err.code ?? 'INTERNAL';
    const status =
      code === 'UNRESOLVED_ID' ? 404 : code === 'RATE_LIMITED' ? 503 : code === 'AUTH_FAILED' ? 502 : 502;
    return res.status(status).json({ code, message: err.message });
  }
}
