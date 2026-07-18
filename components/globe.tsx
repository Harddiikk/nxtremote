"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import dynamic from "next/dynamic";
import * as THREE from "three";

// react-globe.gl touches window/WebGL, so it must stay client-only.
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

// India deploy origin (Bengaluru) → client hubs around the world.
const INDIA = { lat: 12.97, lng: 77.59, label: "India (Talent Hub)" };
const HUBS = [
  { lat: 40.71, lng: -74.0, label: "New York" },
  { lat: 51.5, lng: -0.12, label: "London" },
  { lat: -33.86, lng: 151.2, label: "Sydney" },
  { lat: 25.2, lng: 55.27, label: "Dubai" },
  { lat: 43.65, lng: -79.38, label: "Toronto" },
  { lat: 52.52, lng: 13.4, label: "Berlin" },
  { lat: 1.35, lng: 103.8, label: "Singapore" },
];

const ARCS = HUBS.map((h) => ({
  startLat: INDIA.lat,
  startLng: INDIA.lng,
  endLat: h.lat,
  endLng: h.lng,
}));

const POINTS = [
  { lat: INDIA.lat, lng: INDIA.lng, size: 0.9, color: "#4F2FE5" },
  ...HUBS.map((h) => ({ lat: h.lat, lng: h.lng, size: 0.5, color: "#09B4E4" })),
];

const RINGS = [{ lat: INDIA.lat, lng: INDIA.lng }];

export function GlobeViz() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<any>(null);
  const [size, setSize] = useState(520);

  // Solid indigo ocean sphere passed as a prop (no external texture).
  const globeMaterial = useMemo(
    () =>
      new THREE.MeshPhongMaterial({
        color: new THREE.Color("#1b1656"),
        emissive: new THREE.Color("#0b0930"),
        emissiveIntensity: 0.5,
        shininess: 6,
      }),
    []
  );

  // Keep the canvas square and responsive to its container.
  useEffect(() => {
    if (!wrapRef.current) return;
    const el = wrapRef.current;
    const ro = new ResizeObserver(() => {
      setSize(Math.min(Math.max(el.clientWidth, 280), 600));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const handleReady = () => {
    const g = globeRef.current;
    if (!g) return;
    try {
      const controls = g.controls();
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.55;
      controls.enableZoom = false;
      controls.enablePan = false;
      g.pointOfView({ lat: 18, lng: 40, altitude: 2.4 }, 0);
    } catch {
      /* controls not ready yet, safe to ignore */
    }
  };

  return (
    <div ref={wrapRef} className="flex w-full items-center justify-center">
      <div style={{ width: size, height: size }}>
        <Globe
          ref={globeRef}
          onGlobeReady={handleReady}
          width={size}
          height={size}
          backgroundColor="rgba(0,0,0,0)"
          globeMaterial={globeMaterial}
          showAtmosphere
          atmosphereColor="#4F2FE5"
          atmosphereAltitude={0.22}
          showGraticules
          arcsData={ARCS}
          arcColor={() => ["rgba(79,47,229,0.9)", "rgba(9,180,228,0.9)"]}
          arcAltitudeAutoScale={0.45}
          arcStroke={0.6}
          arcDashLength={0.45}
          arcDashGap={0.18}
          arcDashInitialGap={() => Math.random()}
          arcDashAnimateTime={2600}
          pointsData={POINTS}
          pointLat="lat"
          pointLng="lng"
          pointColor="color"
          pointAltitude={0.01}
          pointRadius="size"
          ringsData={RINGS}
          ringColor={() => (t: number) => `rgba(79,47,229,${1 - t})`}
          ringMaxRadius={5}
          ringPropagationSpeed={2.4}
          ringRepeatPeriod={900}
        />
      </div>
    </div>
  );
}
