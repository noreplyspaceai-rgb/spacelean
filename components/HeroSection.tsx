"use client";

import { useState, useRef, useEffect } from "react";
import Script from "next/script";
import {
  Play, Sparkles,
  Brain, HardHat, Cpu, Layers, Ruler, Zap, BarChart2, Shield,
} from "lucide-react";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import StartFreeTrialButton from "./StartFreeTrialButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

function circleOrbit(R: number, startDeg: number, steps = 60) {
  const xs: number[] = [];
  const ys: number[] = [];
  for (let i = 0; i <= steps; i++) {
    const a = ((startDeg + (i / steps) * 360) * Math.PI) / 180;
    xs.push(parseFloat((R * Math.cos(a)).toFixed(2)));
    ys.push(parseFloat((R * Math.sin(a)).toFixed(2)));
  }
  return { x: xs, y: ys };
}

const R = 250;

const icons = [
  { Icon: Brain,     shape: "rounded-2xl",  size: "w-12 h-12" },
  { Icon: HardHat,   shape: "rounded-full", size: "w-12 h-12" },
  { Icon: BarChart2, shape: "rounded-2xl",  size: "w-11 h-11" },
  { Icon: Shield,    shape: "rounded-full", size: "w-11 h-11" },
  { Icon: Zap,       shape: "rounded-2xl",  size: "w-10 h-10" },
  { Icon: Cpu,       shape: "rounded-full", size: "w-10 h-10" },
  { Icon: Layers,    shape: "rounded-2xl",  size: "w-10 h-10" },
  { Icon: Ruler,     shape: "rounded-full", size: "w-10 h-10" },
].map((icon, i) => ({ ...icon, keyframes: circleOrbit(R, i * 45) }));

// ── Seeded random for deterministic positions ──
const seededRandom = (seed: number) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

// ── Floating particles animation ──
const FloatingParticles = () => {
  // Generate deterministic positions based on index
  const particles = [...Array(8)].map((_, i) => ({
    top: Number((seededRandom(i * 2.1) * 100).toFixed(4)),
    left: Number((seededRandom(i * 3.7) * 100).toFixed(4)),
    yOffset: seededRandom(i * 5.3) * 100 - 50,
    xOffset: seededRandom(i * 7.9) * 100 - 50,
    duration: 4 + seededRandom(i * 11.1) * 4,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating orb - top left */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-cyan-400/40 to-blue-500/20 rounded-full blur-3xl"
        style={{
          top: "-10%",
          left: "-5%",
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Large floating orb - bottom right */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-tl from-cyan-400/30 to-emerald-400/10 rounded-full blur-3xl"
        style={{
          bottom: "-10%",
          right: "-5%",
        }}
        animate={{
          y: [0, -40, 0],
          x: [0, -20, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Medium floating orb - center */}
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-br from-cyan-300/20 to-cyan-400/10 rounded-full blur-2xl"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full blur-sm"
          style={{
            top: `${p.top}%`,
            left: `${p.left}%`,
          }}
          animate={{
            y: [0, p.yOffset, 0],
            x: [0, p.xOffset, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// ── Animated ring layers ──
const AnimatedRings = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Ring 1 - rotating clockwise */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" style={{ overflow: "visible" }}>
          <circle
            cx="50%"
            cy="50%"
            r={R * 0.8}
            fill="none"
            stroke="rgba(34, 211, 238, 0.1)"
            strokeWidth="1"
            strokeDasharray="8 12"
          />
        </svg>
      </motion.div>

      {/* Ring 2 - rotating counter-clockwise */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <svg className="w-full h-full" style={{ overflow: "visible" }}>
          <circle
            cx="50%"
            cy="50%"
            r={R * 1.2}
            fill="none"
            stroke="rgba(34, 211, 238, 0.08)"
            strokeWidth="1"
            strokeDasharray="6 14"
          />
        </svg>
      </motion.div>

      {/* Ring 3 - pulsing */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        style={{ overflow: "visible" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle
          cx="50%"
          cy="50%"
          r={R * 1.05}
          fill="none"
          stroke="rgba(34, 211, 238, 0.15)"
          strokeWidth="2"
        />
      </motion.svg>
    </div>
  );
};

// ── Radial glow effect ──
const RadialGlow = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(circle at 50% 50%, rgba(34, 211, 238, 0.15) 0%, transparent 70%)",
      }}
      animate={{
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

// ── Main hero ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modelReady, setModelReady] = useState(false);
  const modelRef = useRef<any>(null);

  useEffect(() => {
    // Model-viewer script loaded via Next.js Script component below
  }, []);

  useEffect(() => {
    const modelViewer = modelRef.current;
    if (!modelViewer) return;
    const colorize = async () => {
      await modelViewer.loaded;
      const model = modelViewer.model;
      if (!model) return;
      for (const material of model.materials) {
        material.pbrMetallicRoughness.setBaseColorFactor([0, 0, 0, 1]);
        material.pbrMetallicRoughness.setMetallicFactor(0.95);
        material.pbrMetallicRoughness.setRoughnessFactor(0.3);
      }
      setModelReady(true);
    };
    modelViewer.addEventListener("load", colorize);
    const fallback = setTimeout(() => setModelReady(true), 5000);
    return () => {
      modelViewer.removeEventListener("load", colorize);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <section className="relative overflow-hidden">

      {/* Model Viewer Script - loaded after page interactive */}
      <Script
        src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
        type="module"
        strategy="lazyOnload"
      />

      {/* Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-15 pb-2 flex flex-col lg:flex-row items-center gap-12">

        {/* ── Left: content ── */}
        <div className="flex-1 flex flex-col items-start text-left">

          <motion.div {...fadeUp(0.08)}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              AI-Native Construction Intelligence.
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.12)}
            className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl"
          >
            Leading <br />
            <span className="font-bold text-6xl sm:text-5xl font-normal lg:text-5xl tracking-tight leading-tight text-cyan-500 max-w-2xl">AI Project Management</span>  <br /> Software   for 2026
          </motion.h1>

          <motion.p
            {...fadeUp(0.18)}
            className="mt-6 max-w-lg"
          >
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                We don&apos;t animate schedules.
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                We build them.
              </span>
            </span>
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-12 flex flex-col sm:flex-row items-start gap-3"
          >
            {/* ── Trial button → opens email modal ── */}
            <StartFreeTrialButton />

            {/* ── How it works ── */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="inline-flex items-center gap-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group"
            >
              <span className="w-9 h-9 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-black/[0.08] transition-colors">
                <Play className="w-3.5 h-3.5 ml-0.5 text-neutral-900" />
              </span>
              How it works
            </button>
          </motion.div>
        </div>

        {/* ── Right: 3-D model + circular orbit ── */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="flex-1 w-full max-w-xl lg:max-w-none"
        >
          <div className="relative aspect-square">

            {/* Background animated blur layers */}
            <FloatingParticles />

            {/* Animated rings */}
            <AnimatedRings />

            {/* Radial glow effect */}
            <RadialGlow />

            {/* 3-D model */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: modelReady ? 1 : 0 }}
            >
              {/* @ts-ignore */}
              <model-viewer
                ref={modelRef}
                src="/city_pack_8.glb"
                alt="3D building model"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                disable-zoom
                loading="eager"
                style={{ width: "100%", height: "100%", background: "transparent" }}
              />
            </div>

            {/* Circular orbit layer */}
            <div aria-hidden className="hidden sm:block absolute inset-0 pointer-events-none">
              <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
                <defs>
                  <filter id="orbit-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="4" />
                  </filter>
                  <filter id="orbit-dash-blur" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.8" />
                  </filter>
                </defs>
                <circle cx="50%" cy="50%" r={R} fill="none" stroke="rgba(0,0,0,0.07)" strokeWidth="8" filter="url(#orbit-glow)" />
                <circle cx="50%" cy="50%" r={R} fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1.5" strokeDasharray="4 24" strokeLinecap="round" filter="url(#orbit-dash-blur)" />
              </svg>

              {icons.map(({ Icon, shape, size, keyframes }, i) => (
                <motion.div
                  key={i}
                  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                              flex items-center justify-center ${size}
                              ${shape} shadow-md border border-black/5 bg-white/80 backdrop-blur-sm`}
                  animate={keyframes}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  whileHover={{
                    scale: 1.2,
                    boxShadow: "0 0 25px rgba(34, 211, 238, 0.6)",
                  }}
                >
                  <Icon className="w-[55%] h-[55%] text-cyan-500" />
                </motion.div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
