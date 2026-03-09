"use client";

import { useState, useRef, useEffect } from "react";
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

// ── Main hero ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modelReady, setModelReady] = useState(false);
  const modelRef = useRef<any>(null);

  useEffect(() => {
    const existing = document.querySelector('script[src*="model-viewer.min.js"]');
    if (existing) return;
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js";
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    const modelViewer = modelRef.current;
    if (!modelViewer) return;
    const colorize = async () => {
      await modelViewer.loaded;
      const model = modelViewer.model;
      if (!model) return;
      for (const material of model.materials) {
        material.pbrMetallicRoughness.setBaseColorFactor([0.1, 0.1, 0.1, 1]);
        material.pbrMetallicRoughness.setMetallicFactor(0.9);
        material.pbrMetallicRoughness.setRoughnessFactor(0.4);
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
    <section className="relative   overflow-hidden">

      {/* Modals */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
      />

      <div className="relative z-10  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-15 pb-5 flex flex-col lg:flex-row items-center gap-12">

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

            {/* 3-D model */}
            <div
              className="absolute inset-0 transition-opacity duration-500"
              style={{ opacity: modelReady ? 1 : 0 }}
            >
              {/* @ts-ignore */}
              <model-viewer
                ref={modelRef}
                src="/ImageToStl.com_building-1.glb"
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
                              ${shape} shadow-md border border-black/5`}
                  animate={keyframes}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
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
