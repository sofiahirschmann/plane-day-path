import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Line styles per segment kind — must stay in sync with the legend in
// App.jsx. Seatback-display palette: white measured track over satellite
// imagery. Interpolation is never drawn as solid track.
const STYLE = {
  real: { color: '#ffffff', weight: 3, opacity: 1 },
  interp: { color: '#8fbcec', weight: 2.5, opacity: 1, dashArray: '7 7' },
  gap: { color: '#b9c7d6', weight: 1.6, opacity: 0.85, dashArray: '2 9' },
};
const DIM = 0.35; // opacity factor for not-yet-flown track

const MARKER_HTML =
  '<div class="plane-marker"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true"><path d="M12 2 21 21 12 16.6 3 21z"/></svg></div>';

export default function MapView({ segments, pos }) {
  const elRef = useRef(null);
  const mapRef = useRef(null);
  const stateRef = useRef({ group: null, entries: [], marker: null });

  useEffect(() => {
    if (mapRef.current) return;
    const map = L.map(elRef.current, { zoomControl: false, worldCopyJump: true });
    map.setView([44, -114], 6);
    // Seatback moving-map look: satellite terrain with place labels on top.
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      {
        attribution:
          'Imagery &copy; <a href="https://www.esri.com">Esri</a>, Maxar, Earthstar Geographics, and the GIS User Community',
        maxZoom: 19,
      }
    ).addTo(map);
    L.tileLayer(
      'https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}',
      { maxZoom: 19, zIndex: 2 }
    ).addTo(map);
    L.control.zoom({ position: 'bottomright' }).addTo(map);
    mapRef.current = map;
    if (import.meta.env.DEV) window.__pdpMap = map;
    return () => {
      map.remove();
      mapRef.current = null;
      stateRef.current = { group: null, entries: [], marker: null };
    };
  }, []);

  // Static layers: dim full-day path, plus an empty "flown" polyline per
  // segment that the playback effect fills in.
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const state = stateRef.current;
    state.group?.remove();
    state.entries = [];
    const group = L.layerGroup().addTo(map);
    state.group = group;

    const boundsPts = [];
    for (const seg of segments) {
      if (seg.kind === 'ground') {
        const mid = seg.points[Math.floor(seg.points.length / 2)];
        L.circleMarker([mid.lat, mid.lon], {
          radius: 4.5,
          color: '#ffffff',
          weight: 2,
          fillColor: '#003366',
          fillOpacity: 0.9,
          interactive: false,
        }).addTo(group);
        boundsPts.push([mid.lat, mid.lon]);
        continue;
      }
      const latlngs = seg.points.map((p) => [p.lat, p.lon]);
      boundsPts.push(...latlngs);
      const style = STYLE[seg.kind];
      L.polyline(latlngs, { ...style, opacity: style.opacity * DIM, interactive: false }).addTo(group);
      const flown = L.polyline([], { ...style, interactive: false }).addTo(group);
      state.entries.push({ seg, flown, fill: 'empty' });
    }
    if (boundsPts.length) {
      // animate: false — an animated fit issued while a previous zoom
      // animation is still in flight gets swallowed by Leaflet, leaving the
      // viewport on the old day's area.
      map.fitBounds(L.latLngBounds(boundsPts), { padding: [56, 56], animate: false });
    }
  }, [segments]);

  // Per-frame: move/rotate the marker and reveal flown track up to pos.t.
  // Only the segment containing t rebuilds its points on a given frame.
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !pos) return;
    const state = stateRef.current;

    if (!state.marker) {
      const icon = L.divIcon({ className: '', html: MARKER_HTML, iconSize: [26, 26], iconAnchor: [13, 13] });
      state.marker = L.marker([pos.lat, pos.lon], { icon, interactive: false, keyboard: false }).addTo(map);
    }
    state.marker.setLatLng([pos.lat, pos.lon]);
    const el = state.marker.getElement()?.firstChild;
    if (el) {
      el.style.transform = `rotate(${pos.hdg ?? 0}deg)`;
      el.classList.toggle('estimated', pos.kind === 'interp' || pos.kind === 'gap');
      el.classList.toggle('parked', pos.kind === 'parked' || pos.onGround);
    }

    for (const entry of state.entries) {
      const { seg, flown } = entry;
      if (seg.t1 <= pos.t) {
        if (entry.fill !== 'full') {
          flown.setLatLngs(seg.points.map((p) => [p.lat, p.lon]));
          entry.fill = 'full';
        }
      } else if (seg.t0 >= pos.t) {
        if (entry.fill !== 'empty') {
          flown.setLatLngs([]);
          entry.fill = 'empty';
        }
      } else {
        const pts = seg.points.filter((p) => p.t <= pos.t).map((p) => [p.lat, p.lon]);
        pts.push([pos.lat, pos.lon]);
        flown.setLatLngs(pts);
        entry.fill = 'partial';
      }
    }
  }, [pos]);

  return <div className="map" ref={elRef} />;
}
