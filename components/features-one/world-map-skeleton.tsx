"use client";
import React, { useMemo } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { createMap } from "svg-dotted-map";

interface Pin {
  id: string;
  image: string;
  name?: string;
  location: {
    lat: number;
    lng: number;
  };
}

const DEFAULT_PINS: Pin[] = [
  {
    id: "1",
    image: "https://assets.aceternity.com/avatars/manu.webp",
    name: "Alex",
    location: { lat: 40.7128, lng: -99.006 },
  },
  {
    id: "2",
    image: "https://assets.aceternity.com/avatars/4.webp",
    name: "Sarah",
    location: { lat: 51.5074, lng: -0.1278 },
  },
  {
    id: "3",
    image: "https://assets.aceternity.com/avatars/1.webp",
    name: "James",
    location: { lat: 35.6762, lng: 80.6503 },
  },
];

export function WorldMapSkeleton({
  pins = DEFAULT_PINS,
  className,
  dotRadius = 0.22,
  width = 120,
  height = 60,
  mapSamples = 6000,
}: {
  pins?: Pin[];
  className?: string;
  dotRadius?: number;
  width?: number;
  height?: number;
  mapSamples?: number;
}) {
  const { points, xStep, yToRowIndex, addMarkers } = useMemo(() => {
    const { points, addMarkers } = createMap({
      width,
      height,
      mapSamples,
    });

    const sorted = [...points].sort((a, b) => a.y - b.y || a.x - b.x);
    const rowMap = new Map<number, number>();
    let step = 0;
    let prevY = Number.NaN;
    let prevXInRow = Number.NaN;

    for (const p of sorted) {
      if (p.y !== prevY) {
        prevY = p.y;
        prevXInRow = Number.NaN;
        if (!rowMap.has(p.y)) rowMap.set(p.y, rowMap.size);
      }
      if (!Number.isNaN(prevXInRow)) {
        const delta = p.x - prevXInRow;
        if (delta > 0) step = step === 0 ? delta : Math.min(step, delta);
      }
      prevXInRow = p.x;
    }

    return { points, xStep: step || 1, yToRowIndex: rowMap, addMarkers };
  }, [width, height, mapSamples]);

  // Project pins with the map's OWN projection (via addMarkers) so avatars
  // land on land, not in the ocean.
  const pinPositions = useMemo(() => {
    const projected = addMarkers(
      pins.map((pin) => ({
        lat: pin.location.lat,
        lng: pin.location.lng,
        id: pin.id,
        image: pin.image,
        name: pin.name,
      }))
    );
    return projected as Array<{
      x: number;
      y: number;
      id: string;
      image: string;
      name?: string;
    }>;
  }, [pins, addMarkers]);

  return (
    <div
      className={cn(
        "relative mx-auto w-full max-w-2xl mask-t-from-90% mask-radial-from-50%",
        className
      )}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full text-neutral-300 dark:text-neutral-600"
        style={{ width: "100%", height: "100%" }}
      >
        {points.map((point, index) => {
          const rowIndex = yToRowIndex.get(point.y) ?? 0;
          const offsetX = rowIndex % 2 === 1 ? xStep / 2 : 0;
          return (
            <circle
              cx={point.x + offsetX}
              cy={point.y}
              r={dotRadius}
              fill="currentColor"
              key={`${point.x}-${point.y}-${index}`}
            />
          );
        })}
      </svg>

      {pinPositions.map((pin, index) => (
        <MapPin
          key={pin.id}
          x={Number(((pin.x / width) * 100).toFixed(4))}
          y={Number(((pin.y / height) * 100).toFixed(4))}
          image={pin.image}
          name={pin.name}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
}

function MapPin({
  x,
  y,
  image,
  name,
  delay = 0,
}: {
  x: number;
  y: number;
  image: string;
  name?: string;
  delay?: number;
}) {
  const pinId = React.useId();

  return (
    <motion.div
      className="absolute z-10"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -100%)",
      }}
      initial={{ opacity: 0, y: 10, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: 0.3 + delay,
        ease: [0.23, 1, 0.32, 1],
      }}
    >
      <motion.div
        className="relative cursor-pointer"
        whileHover={{ scale: 1.1, y: -2 }}
        transition={{ duration: 0.2 }}
      >
        <svg
          width="40"
          height="50"
          viewBox="0 0 40 50"
          fill="none"
          className="size-12 shadow-black/10 drop-shadow-sm dark:shadow-white/10"
        >
          <defs>
            <clipPath id={`avatar-clip-${pinId}`}>
              <circle cx="20" cy="18" r="14" />
            </clipPath>
          </defs>
          <path
            d="M20 49C20 49 38 30 38 18C38 8.059 29.941 0 20 0C10.059 0 2 8.059 2 18C2 30 20 49 20 49Z"
            className="fill-white stroke-black/10 dark:fill-neutral-800 dark:stroke-white/20"
            strokeWidth="1"
          />
          <circle
            cx="20"
            cy="18"
            r="15"
            className="fill-white dark:fill-neutral-800"
          />
          <image
            href={image}
            x="6"
            y="4"
            width="28"
            height="28"
            clipPath={`url(#avatar-clip-${pinId})`}
            preserveAspectRatio="xMidYMid slice"
          />
        </svg>

        {name && (
          <motion.div
            className="pointer-events-none absolute top-full left-1/2 mt-1 -translate-x-1/2 rounded-md bg-neutral-900 px-2 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-lg dark:bg-white dark:text-neutral-900"
            initial={false}
            whileHover={{ opacity: 1 }}
          >
            {name}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
