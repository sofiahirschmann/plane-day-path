# Plane Day Path

Pick an aircraft and watch its entire day replay on a map — where it flew, when it sat on the ground, and the honest gaps where no receiver heard it.

Built with Vite + React + Leaflet, styled in a Delta-inspired light palette. The demo loads instantly with a bundled sample day (a Cessna 208B cargo feeder hopping around Idaho and Montana); add OpenSky API credentials to replay real aircraft.

## Run it

```bash
npm install
npm run dev
```

Open the printed URL. The app starts on a bundled sample day and begins playing immediately — no setup needed.

```bash
npm test        # unit tests for the interpolation library
npm run build   # production build
```

## Using it

**Playback.** Press **space** (or the round button) to play/pause, **←/→** to jump 5 minutes, and pick a speed — 30×, 120×, or 600× real time. Drag anywhere on the 24-hour strip at the bottom to scrub through the day; the red triangle is the playhead.

**Reading the display.** The clock shows UTC first (all data is UTC internally) with your local time labeled underneath, plus the aircraft's altitude while airborne. The chip under the clock tells you how trustworthy the current position is:

- **tracking** — the plane is between two closely spaced real pings
- **estimated** — position is interpolated between sparse pings (the marker turns hollow)
- **no coverage** — no receiver heard the aircraft here; the position is a guess across a gap
- **on ground / parked** — sitting at an airport

The same honesty shows on the map (solid white = measured, dashed blue = interpolated, faint dots = coverage gap) and on the day strip (navy blocks = flying, thin gray bar = on the ground, hatching = no coverage).

**Loading a real aircraft.** Add OpenSky credentials (next section), then enter an aircraft in the top-right box and pick a date:

- Use the **ICAO24 hex** (e.g. `ac4963`) — every tracker site shows it on an aircraft's page — or a **US registration** like `N714CB`, which is resolved to hex automatically.
- Pick a UTC date **2+ days in the past** (OpenSky processes history with a lag) and within the last ~30 days.
- Airliners make good demos: overnight red-eyes show real coverage gaps, and same-airport turnarounds render as ground time.

## The interpolation story

ADS-B coverage is crowd-sourced: volunteers run ground receivers, and OpenSky stitches their reports into tracks. That means pings arrive irregularly — every few seconds near a city, minutes apart over mountains, not at all over oceans or remote terrain. Rendering that raw data as one smooth line would be a lie.

So [src/lib/interpolate.js](src/lib/interpolate.js) classifies every stretch between consecutive pings by its spacing, and the whole UI keeps the distinction visible:

| ping spacing | class | on the map | on the day strip |
|---|---|---|---|
| ≤ 60 s | **real** | solid white line | navy flight block |
| 60 s – 10 min | **interpolated** | dashed light-blue line | blue overlay (if ≥ 5 min) |
| > 10 min | **coverage gap** | faint dotted line | hatched block |
| both pings on ground | **ground** | airport dot | thin gray bar |

Positions between pings are great-circle interpolated for smooth playback, and the aircraft marker itself confesses: it's a solid red triangle on measured track, and turns hollow whenever its position is an estimate. Interpolation is never presented as ground truth.

The gaps are a feature, not a bug — a hatched block over the Bitterroots tells you exactly where the receiver network can't see.

## Getting OpenSky API credentials

You need a free [OpenSky Network](https://opensky-network.org) account. OpenSky switched to OAuth2 in 2025, so a username/password isn't enough — you create an **API client**:

1. Log in at [opensky-network.org](https://opensky-network.org).
2. Open your **Account** page and find the **API Clients** section.
3. Create a new API client and download its **credentials.json**.
4. Drop that `credentials.json` into this project's root folder — that's it. (It's gitignored. Alternatively, `cp .env.example .env` and paste the client id/secret there; env vars win when both exist, and they're what a Vercel deployment uses.)
5. Search any aircraft by ICAO24 hex (or a registration like `N714CB` — resolved to hex via hexdb.io) and a past UTC date.

Notes on the free tier:

- Historical `/flights` and `/tracks` data reaches back roughly **30 days**, and the most recent day or two may not be processed yet — if a day comes back empty, try one a bit further back.
- It's heavily rate-limited. The backend caches every fetched day on disk (keyed `{icao24}-{date}`) and never re-fetches — historical tracks are immutable — but expect 429s if you browse aggressively.
- Some aircraft transmit no callsign or a rotating one; the ICAO24 hex is the stable identifier and everything resolves to it internally.

## Architecture

- [api/track.js](api/track.js) — the only backend: a Vercel-convention serverless function that holds the OpenSky credentials, exchanges them for an OAuth2 token, fetches the day's flights + per-flight tracks, stitches and caches them. Without credentials it answers `503 NO_CREDENTIALS` and the frontend falls back to the sample day.
- [vite.config.js](vite.config.js) — mounts that same function on the dev server, so local dev matches the deployed layout with no second process.
- [src/lib/interpolate.js](src/lib/interpolate.js) — segment classification + great-circle position math (unit-tested).
- [src/lib/sampleDay.js](src/lib/sampleDay.js) — the deterministic synthesized demo day, deliberately sparsified so all four segment classes appear. Always labeled **SAMPLE DATA** in the UI.
- [src/Map.jsx](src/Map.jsx) — Leaflet map; the full day renders dimmed, and flown track fills in at full strength as playback advances.
- [src/DayStrip.jsx](src/DayStrip.jsx) — the 24-hour scrubber; the day's structure *is* the rendering.

Timestamps are UTC internally everywhere; the clock shows UTC first and your local time labeled.

## Deploying

The repo is Vercel-ready as-is: `api/track.js` becomes a serverless function, Vite is auto-detected. Install the [Vercel CLI](https://vercel.com/docs/cli), then:

```bash
vercel
vercel env add OPENSKY_CLIENT_ID
vercel env add OPENSKY_CLIENT_SECRET
vercel --prod
```

(Without the env vars the deployed site still works — it just stays on the sample day.)
