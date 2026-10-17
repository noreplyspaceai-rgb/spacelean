# About Page Speed Fix & Performance Optimization Plan

Based on the **sitespeed.io** performance audit of the [SpaceLean About](https://spacelean.ai/about) page, here is a detailed breakdown of the bottlenecks and an actionable plan to resolve them.

---

## 📊 Performance Diagnostics Summary

According to the sitespeed.io report for the `/about` page, the page has the following performance characteristics:

| Metric | Measured Value | Target Value | Status | Impact & Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Fully Loaded Time** | **4.894 s** | **< 2.000 s** | 🔴 Critical | Total time to load all assets and finish executing scripts. |
| **Total Transfer Size** | **4.5 MB** | **< 1.0 MB** | 🔴 Critical | Extremely heavy payload, mostly caused by the background video. |
| **Total Requests** | **59** | **< 35** | 🟡 Needs Work | Request count is moderate but payload per request is very high. |
| **Largest Contentful Paint (LCP)**| **4.332 s** | **< 1.500 s** | 🔴 Critical | Time to render the primary visual element (Hero Section text/video). |
| **First Contentful Paint (FCP)** | **1.512 s** | **< 1.000 s** | 🟡 Needs Work | Initial paint is delayed by render-blocking resources. |
| **LCP Paint Delay (FCP → LCP)**  | **2.820 s** | **< 0.500 s** | 🔴 Critical | A massive **2.8-second delay** between FCP and LCP. |
| **CPU longest task duration** | **2.128 s** | **< 0.050 s** | 🔴 Critical | The main thread is frozen for over 2 seconds during initialization! |
| **Cumulative Layout Shift (CLS)** | **0.0001** | **< 0.100** | 🟢 Excellent | The layout is visually stable. |

---

## 🔍 Root Cause Analysis

1. **CPU-Freezing Dotted Map Calculations (2.128 s thread lock)**
   - **The Problem**: In [components/ui/world-map.tsx](file:///home/user/Documents/spacelearn/components/ui/world-map.tsx), the component instantiates `new DottedMap(...)` and calls `map.getSVG(...)` **synchronously** inside the React render function. 
   - **The Impact**: Calculating thousands of coordinates for a dotted SVG world map at runtime blocks the JavaScript execution thread during page hydration. This locks up the browser for over 2 seconds, delaying the visual paint of the LCP elements.
   - **Bundle Bloat**: Importing the `dotted-map` package includes a large internal coordinate database, significantly bloating the bundle.

2. **Eager 3.85 MB Background Video Load**
   - **The Problem**: In [components/about/AboutHero.tsx](file:///home/user/Documents/spacelearn/components/about/AboutHero.tsx), a background video `/videos/175571-853887894_medium.mp4` is loaded eagerly using a standard `<video autoPlay ...>` element.
   - **The Impact**: The browser starts downloading this 3.85 MB video file immediately on startup, consuming network bandwidth and delaying critical scripts needed for layout.

3. **Global Layout Header Blocking (Un-tree-shaked Flags)**
   - **The Problem**: The globally shared [Header.tsx](file:///home/user/Documents/spacelearn/components/Header.tsx) bundles SVG definitions for **every country in the world** into the layout bundle, adding 921 ms of render-blocking time.

---

## 🛠️ Step-by-Step Optimization Plan

---

### Step 1: Replace Dynamic Dotted Map with Static Theme-Specific SVGs

Since the map coordinates are completely static, we do not need to calculate them at runtime. We have already generated two pre-computed SVG assets:
* `/world-map-light.svg` (optimized for light theme, styled with transparent background and light gray dots)
* `/world-map-dark.svg` (optimized for dark theme, styled with dark background and white/gray dots)

By using these static files, we can remove the `dotted-map` dependency entirely from `package.json`, saving hundreds of KB of JS and reducing CPU execution time from **2.128 seconds to 0 ms**.

#### Code Modifications:
Update [components/ui/world-map.tsx](file:///home/user/Documents/spacelearn/components/ui/world-map.tsx) to read static SVGs instead of calculating them:

```tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import Image from "next/image";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export default function WorldMap({
  dots = [],
  lineColor = "#06b6d4", // Set to cyan-500 brand color
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatches when reading theme
  useEffect(() => {
    setMounted(true);
  }, []);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  // Default to light map before mount, then swap based on theme
  const mapSrc = mounted && theme === "dark" ? "/world-map-dark.svg" : "/world-map-light.svg";

  return (
    <div className="w-full aspect-[2/1] dark:bg-black rounded-lg relative font-sans">
      {/* Load static pre-computed SVG map */}
      <div className="h-full w-full relative">
        <Image
          src={mapSrc}
          alt="World Map"
          fill
          priority={false}
          loading="lazy"
          className="object-cover [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none"
          draggable={false}
        />
      </div>

      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  delay: 0.3 * i,
                  ease: "easeOut",
                }}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate attributeName="r" from="2" to="8" dur="1.5s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.5" to="0" dur="1.5s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
```

---

### Step 2: Defer Background Video Hydration in AboutHero

We must defer loading the background video sources until **after the page mounts** and rendering is complete. This avoids early connection contention and keeps page weight tiny on startup.

#### Code Modifications:
Update [components/about/AboutHero.tsx](file:///home/user/Documents/spacelearn/components/about/AboutHero.tsx#L149-L154):

```tsx
// Inside AboutHero component definition:
const [videoMounted, setVideoMounted] = useState(false);

useEffect(() => {
  // Only mount the video element source once page is interactive
  setVideoMounted(true);
}, []);

// In the JSX (replace the video section):
<div className="flex-1 relative overflow-hidden rounded-2xl min-h-[520px]">
  <video 
    autoPlay 
    muted 
    loop 
    playsInline 
    preload="none" // Prevent early metadata fetch
    poster="/design.webp" // Fast static placeholder image
    className="absolute inset-0 w-full h-full object-cover"
  >
    {videoMounted && (
      <source src="/videos/175571-853887894_medium.mp4" type="video/mp4" />
    )}
  </video>
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
  ...
```

---

### Step 3: Remove `dotted-map` Dependency

Once the code changes in `world-map.tsx` are done, remove the unused library from project dependencies:

```bash
npm uninstall dotted-map
```

---

## 📈 Post-Optimization Performance Projections

By executing these changes, we target the following metrics on the next sitespeed.io run:

* **Total Transfer Size**: Drops from **4.5 MB** to **< 900 KB** (~80% reduction).
* **CPU longest task duration**: Speeds up from **2.128 s** to **< 50 ms** (~97.6% reduction).
* **Largest Contentful Paint (LCP)**: Speeds up from **4.332 s** to **< 1.500 s**.
* **Fully Loaded time**: Speeds up from **4.894 s** to **< 1.800 s**.
