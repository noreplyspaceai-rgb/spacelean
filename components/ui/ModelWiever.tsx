"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { TargetAndTransition } from "framer-motion";
import { ZoomIn, ZoomOut, Maximize2 } from "lucide-react";
import {
  Brain, HardHat, Cpu, Layers, Ruler, Zap, BarChart2, Shield,
} from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────
type OrbitKeyframes = TargetAndTransition & {
  x: number[];
  y: number[];
};

interface OrbIcon {
  Icon: React.ElementType;
  shape: string;
  size: string;
  keyframes: OrbitKeyframes;
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function circleOrbit(R: number, startDeg: number, steps = 60): OrbitKeyframes {
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const a = ((startDeg + (i / steps) * 360) * Math.PI) / 180;
    xs.push(parseFloat((R * Math.cos(a)).toFixed(2)));
    ys.push(parseFloat((R * Math.sin(a)).toFixed(2)));
  }
  return { x: xs, y: ys };
}

// ── Config ───────────────────────────────────────────────────────────────────
const ORBIT_RADIUS = 250;

const FOV_MIN  = 15;
const FOV_MAX  = 75;
const FOV_DEF  = 45;
const FOV_STEP = 8;

const ORBIT_ICONS: OrbIcon[] = [
  { Icon: Brain,     shape: "rounded-2xl",  size: "w-12 h-12" },
  { Icon: HardHat,   shape: "rounded-full", size: "w-12 h-12" },
  { Icon: BarChart2, shape: "rounded-2xl",  size: "w-11 h-11" },
  { Icon: Shield,    shape: "rounded-full", size: "w-11 h-11" },
  { Icon: Zap,       shape: "rounded-2xl",  size: "w-10 h-10" },
  { Icon: Cpu,       shape: "rounded-full", size: "w-10 h-10" },
  { Icon: Layers,    shape: "rounded-2xl",  size: "w-10 h-10" },
  { Icon: Ruler,     shape: "rounded-full", size: "w-10 h-10" },
].map((icon, i) => ({
  ...icon,
  keyframes: circleOrbit(ORBIT_RADIUS, i * 45),
}));

// ── Cloudy Background ─────────────────────────────────────────────────────────
function CloudyBackground() {
  return (
    <>
    
    </>
  );
}

// ── Orbit ring ────────────────────────────────────────────────────────────────
function OrbitRing({ R }: { R: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }} aria-hidden>
      <defs>
        <filter id="orbit-glow"      x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"   /></filter>
        <filter id="orbit-dash-blur" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="1.8" /></filter>
      </defs>
      <circle cx="50%" cy="50%" r={R} fill="none" stroke="rgba(100,160,220,0.12)" strokeWidth="8"   filter="url(#orbit-glow)"      />
      <circle cx="50%" cy="50%" r={R} fill="none" stroke="rgba(80,140,210,0.25)"  strokeWidth="1.5" strokeDasharray="4 24" strokeLinecap="round" filter="url(#orbit-dash-blur)" />
    </svg>
  );
}

// ── Orbit icon ────────────────────────────────────────────────────────────────
function OrbitIcon({ Icon, shape, size, keyframes }: OrbIcon) {
  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${size} ${shape} bg-white/80 backdrop-blur-sm shadow-md border border-sky-100`}
      animate={keyframes}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
    >
      <Icon className="w-[55%] h-[55%] text-cyan-500" />
    </motion.div>
  );
}

// ── Zoom button ───────────────────────────────────────────────────────────────
function ZoomBtn({
  onClick, disabled, label, children,
}: { onClick: () => void; disabled?: boolean; label: string; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      suppressHydrationWarning
      className={`
        w-8 h-8 flex items-center justify-center rounded-lg
        border border-black/10 bg-white/80 backdrop-blur-sm shadow-sm
        transition-all duration-150
        ${disabled
          ? "opacity-30 cursor-not-allowed"
          : "hover:bg-white hover:shadow-md hover:border-cyan-300 active:scale-95 cursor-pointer"
        }
      `}
    >
      {children}
    </button>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
interface ModelViewer3DProps {
  src?: string;
  alt?: string;
  onReady?: () => void;
}

export default function ModelViewer3D({
  src = "/ImageToStl.com_building-1.glb",
  alt = "3D building model",
  onReady,
}: ModelViewer3DProps) {
  const [modelReady, setModelReady] = useState(false);
  const [fov, setFov] = useState(FOV_DEF);
  const modelRef = useRef<any>(null);

  // Sync FOV to model-viewer on every change
  useEffect(() => {
    const mv = modelRef.current;
    if (!mv) return;
    mv.fieldOfView = `${fov}deg`;
  }, [fov]);

  const zoomIn  = useCallback(() => setFov(f => Math.max(FOV_MIN, f - FOV_STEP)), []);
  const zoomOut = useCallback(() => setFov(f => Math.min(FOV_MAX, f + FOV_STEP)), []);
  const reset   = useCallback(() => setFov(FOV_DEF), []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    setFov(f => Math.min(FOV_MAX, Math.max(FOV_MIN, f + (e.deltaY > 0 ? FOV_STEP / 2 : -FOV_STEP / 2))));
  }, []);

  // Inject model-viewer script once
  useEffect(() => {
    if (document.querySelector('script[src*="model-viewer.min.js"]')) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);
  }, []);

  // ✅ Fixed: use original model materials — no dark override
  // Just signal ready once loaded
  useEffect(() => {
    const mv = modelRef.current;
    if (!mv) return;

    const onLoad = () => {
      setModelReady(true);
      onReady?.();
    };

    mv.addEventListener("load", onLoad);
    const fallback = setTimeout(() => { setModelReady(true); onReady?.(); }, 6000);

    return () => {
      mv.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, [onReady]);

  const zoomPct = Math.round(((FOV_MAX - fov) / (FOV_MAX - FOV_MIN)) * 100);

  return (
    <div className="relative aspect-square w-full overflow-hidden rounded-3xl">

      {/* ── Cloudy sky background ── */}
      <CloudyBackground />

      {/* ── 3-D model ── */}
      <div
        className="absolute inset-0 transition-opacity duration-700"
        style={{ opacity: modelReady ? 1 : 0 }}
        onWheel={handleWheel}
      >
        {/* @ts-ignore — custom element */}
        <model-viewer
          ref={modelRef}
          src={src}
          alt={alt}
          camera-controls
          auto-rotate
          auto-rotate-delay="0"
          rotation-per-second="20deg"
          field-of-view={`${fov}deg`}
          environment-image="neutral"   /* ✅ key fix: IBL lighting so model isn't black */
          exposure="1.1"                /* ✅ brightens the scene */
          shadow-intensity="0.8"
          shadow-softness="1"
          loading="eager"
          style={{ width: "100%", height: "100%", background: "transparent" }}
        />
      </div>

      {/* Loading skeleton */}
      {!modelReady && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-16 h-16 rounded-full border-2 border-cyan-300 border-t-transparent"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}

      {/* ── Orbit ring + icons ── */}
      <div aria-hidden className="hidden sm:block absolute inset-0 pointer-events-none">
        <OrbitRing R={ORBIT_RADIUS} />
        {ORBIT_ICONS.map((props, i) => <OrbitIcon key={i} {...props} />)}
      </div>

      {/* ── Zoom controls — bottom-right ── */}
      {modelReady && (
        <div className="absolute bottom-4 right-4 z-20 flex flex-col items-center gap-1.5">
          <ZoomBtn onClick={zoomIn} disabled={fov <= FOV_MIN} label="Zoom in">
            <ZoomIn className="w-4 h-4 text-neutral-600" />
          </ZoomBtn>

          {/* Animated level bar */}
          <div className="relative w-1.5 h-16 rounded-full overflow-hidden bg-black/[0.07]">
            <motion.div
              className="absolute bottom-0 left-0 right-0 rounded-full bg-cyan-400"
              animate={{ height: `${zoomPct}%` }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            />
          </div>

          <ZoomBtn onClick={zoomOut} disabled={fov >= FOV_MAX} label="Zoom out">
            <ZoomOut className="w-4 h-4 text-neutral-600" />
          </ZoomBtn>

          <ZoomBtn onClick={reset} label="Reset zoom">
            <Maximize2 className="w-3.5 h-3.5 text-neutral-500" />
          </ZoomBtn>
        </div>
      )}

      {/* ── Zoom % badge — bottom-left ── */}
      {modelReady && (
        <motion.div
          key={zoomPct}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.18 }}
          className="absolute bottom-4 left-4 z-20 px-2 py-0.5 rounded-md bg-white/70 backdrop-blur-sm border border-black/8 shadow-sm select-none"
          style={{ fontFamily: "monospace", fontSize: "0.7rem", color: "#555" }}
        >
          {zoomPct}%
        </motion.div>
      )}

    </div>
  );
}
