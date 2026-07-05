import test from 'node:test';
import assert from 'node:assert/strict';
import {
  normalizeTrack,
  buildSegments,
  positionAt,
  bearing,
  greatCirclePoint,
  injectParkedTime,
  INTERP_GAP,
  COVERAGE_GAP,
} from './interpolate.js';

const wp = (t, lat, lon, extra = {}) => ({
  t,
  lat,
  lon,
  alt: null,
  hdg: null,
  onGround: false,
  ...extra,
});

test('normalizeTrack sorts, dedupes timestamps, drops unusable points', () => {
  const track = normalizeTrack([
    wp(30, 1, 1),
    wp(10, 0, 0),
    wp(10, 0.5, 0.5),
    { t: 20, lat: null, lon: 5 },
    wp(20, 0.7, 0.7),
  ]);
  assert.deepEqual(
    track.map((w) => w.t),
    [10, 20, 30]
  );
});

test('buildSegments classifies real / interp / gap / ground runs', () => {
  const track = [
    wp(0, 43.0, -116.0, { onGround: true }),
    wp(20, 43.001, -116.001, { onGround: true }),
    wp(40, 43.01, -116.01),
    wp(50, 43.02, -116.02),
    wp(50 + INTERP_GAP + 30, 43.1, -116.1),
    wp(50 + INTERP_GAP + 30 + COVERAGE_GAP + 60, 43.5, -116.5),
  ];
  const kinds = buildSegments(track).map((s) => s.kind);
  assert.deepEqual(kinds, ['ground', 'real', 'interp', 'gap']);
});

test('segments share boundary points so the path is continuous', () => {
  const track = [wp(0, 0, 0), wp(30, 0.1, 0.1), wp(30 + COVERAGE_GAP + 1, 1, 1)];
  const segs = buildSegments(track);
  assert.equal(segs.length, 2);
  assert.deepEqual(segs[0].points.at(-1), segs[1].points[0]);
});

test('positionAt handles empty and single-point tracks', () => {
  assert.equal(positionAt([], 100), null);
  const only = wp(50, 10, 20);
  const pos = positionAt([only], 999);
  assert.equal(pos.lat, 10);
  assert.equal(pos.kind, 'parked');
});

test('positionAt clamps outside the tracked range as parked', () => {
  const track = [wp(100, 40, -100), wp(200, 41, -101)];
  assert.equal(positionAt(track, 0).kind, 'parked');
  assert.equal(positionAt(track, 0).lat, 40);
  assert.equal(positionAt(track, 999).lat, 41);
});

test('positionAt interpolates along the great circle with the pair kind', () => {
  const track = [wp(0, 40, -100), wp(50, 41, -100)];
  const mid = positionAt(track, 25);
  assert.ok(Math.abs(mid.lat - 40.5) < 0.01);
  assert.equal(mid.kind, 'real');
  assert.ok(Math.abs(mid.hdg - 0) < 1, `heading ~north, got ${mid.hdg}`);

  const sparse = [wp(0, 40, -100), wp(COVERAGE_GAP + 100, 41, -100)];
  assert.equal(positionAt(sparse, 50).kind, 'gap');
});

test('positionAt lerps altitude and keeps null altitudes null', () => {
  const track = [wp(0, 40, -100, { alt: 1000 }), wp(100, 41, -100, { alt: 2000 })];
  assert.equal(positionAt(track, 50).alt, 1500);
  const noAlt = [wp(0, 40, -100), wp(100, 41, -100)];
  assert.equal(positionAt(noAlt, 50).alt, null);
});

test('bearing and greatCirclePoint agree on cardinal directions', () => {
  const a = { lat: 0, lon: 0 };
  const east = { lat: 0, lon: 10 };
  assert.ok(Math.abs(bearing(a, east) - 90) < 1e-6);
  const mid = greatCirclePoint(a, east, 0.5);
  assert.ok(Math.abs(mid.lon - 5) < 1e-6);
  assert.ok(Math.abs(mid.lat) < 1e-6);
});

test('injectParkedTime turns same-airport turnarounds into ground, keeps ferry gaps honest', () => {
  const arr1 = 10000;
  const dep2 = arr1 + 8 * 3600; // 8h overnight at the same airport
  const track = [
    wp(0, 33.9, -118.4),
    wp(arr1, 33.94, -118.41),
    wp(dep2, 33.94, -118.4),
    wp(dep2 + 9000, 36.1, -86.7),
  ];
  const flights = [
    { from: 'KORD', to: 'KLAX', dep: 0, arr: arr1 },
    { from: 'KLAX', to: 'KBNA', dep: dep2, arr: dep2 + 9000 },
  ];
  const kinds = buildSegments(normalizeTrack(injectParkedTime(track, flights))).map((s) => s.kind);
  assert.ok(kinds.includes('ground'), `expected a ground run, got ${kinds}`);

  // different airports → stays a coverage gap
  const ferry = injectParkedTime(track, [
    { from: 'KORD', to: 'KLAX', dep: 0, arr: arr1 },
    { from: 'KSFO', to: 'KBNA', dep: dep2, arr: dep2 + 9000 },
  ]);
  const ferryKinds = buildSegments(normalizeTrack(ferry)).map((s) => s.kind);
  assert.ok(!ferryKinds.includes('ground'), `expected no ground run, got ${ferryKinds}`);
});

test('greatCirclePoint is stable for near-identical points', () => {
  const a = { lat: 43.5, lon: -116.2 };
  const p = greatCirclePoint(a, { lat: 43.5, lon: -116.2 }, 0.5);
  assert.equal(p.lat, a.lat);
  assert.equal(p.lon, a.lon);
});
