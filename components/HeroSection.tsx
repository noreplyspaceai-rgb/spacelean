"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import VideoModal from "./VideoModal";
import StartFreeTrialButton from "./StartFreeTrialButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});




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

// ── Glassmorphism AI task panel ──
const TASKS = [
  { label: "Schedule foundation inspection — Phase 2", priority: "high" as const },
  { label: "Update resource allocation for Block C", priority: "medium" as const },
  { label: "Generate weekly progress report", priority: "low" as const },
  { label: "Flag delay risk: concrete delivery", priority: "high" as const },
  { label: "Assign QA checklist to Site B team", priority: "medium" as const },
];

const PRIORITY_DOT: Record<"high" | "medium" | "low", string> = {
  high: "bg-red-400",
  medium: "bg-amber-400",
  low: "bg-emerald-400",
};

const PRIORITY_LABEL: Record<"high" | "medium" | "low", string> = {
  high: "High",
  medium: "Med",
  low: "Low",
};

const GlassTaskPanel = () => {
  const [phase, setPhase] = useState<"generating" | "listing">("generating");
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const run = () => {
      setPhase("generating");
      setVisibleCount(0);
      const t1 = setTimeout(() => {
        setPhase("listing");
        TASKS.forEach((_, i) => {
          const t = setTimeout(() => setVisibleCount(i + 1), i * 480);
          timeouts.push(t);
        });
        const reset = setTimeout(() => run(), TASKS.length * 480 + 3200);
        timeouts.push(reset);
      }, 1400);
      timeouts.push(t1);
    };
    run();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute bottom-5 left-6 w-[58%] h-[260px] z-10 pointer-events-none flex flex-col">

      {/* ── Laptop screen lid — glass frame ── */}
      <div className="flex-1 rounded-t-[14px] backdrop-blur-2xl bg-black/90 border border-white/20 p-[5px] pt-[10px] shadow-[0_28px_72px_rgba(0,0,0,0.35)] relative">

        {/* Camera dot */}
        <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-white/15 border border-white/20" />

        {/* Screen glass surface */}
        <div className="w-full h-full rounded-[8px] overflow-hidden flex flex-col backdrop-blur-xl bg-white/8 border border-white/10">

          {/* Title bar */}
          <div className="flex items-center gap-1.5 px-2.5 py-[5px] bg-white/10 border-b border-white/10 flex-shrink-0 backdrop-blur-sm">
            <div className="w-[7px] h-[7px] rounded-full bg-[#ff5f57]" />
            <div className="w-[7px] h-[7px] rounded-full bg-[#febc2e]" />
            <div className="w-[7px] h-[7px] rounded-full bg-[#28c840]" />
            <span className="mx-auto text-[7.5px] font-medium text-white/50 tracking-wide select-none">
              SpaceLean · AI Dashboard
            </span>
          </div>

          {/* App shell */}
          <div className="flex flex-1 overflow-hidden">

            {/* ── Sidebar ── */}
            <div className="w-[48px] bg-black/20 backdrop-blur-sm flex flex-col items-center py-2 gap-1.5 flex-shrink-0 border-r border-white/8">
              {/* Logo mark */}
              <div className="w-7 h-7 rounded-lg bg-cyan-400/20 border border-cyan-400/40 flex items-center justify-center mb-1">
                <span className="text-[7px] font-black text-cyan-400 tracking-tighter leading-none">SL</span>
              </div>
              {/* Nav items */}
              {[
                { icon: "⊞", active: false },
                { icon: "≡", active: true  },
                { icon: "◈", active: false },
                { icon: "⊕", active: false },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-[11px] ${
                    item.active ? "bg-cyan-400/25 text-cyan-300" : "text-white/30"
                  }`}
                >
                  {item.icon}
                </div>
              ))}
              {/* Avatar */}
              <div className="mt-auto w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                <span className="text-[6px] font-bold text-white leading-none">JD</span>
              </div>
            </div>

            {/* ── Main content ── */}
            <div className="flex-1 flex flex-col overflow-hidden bg-white/5">

              {/* Top bar */}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/10 border-b border-white/8 flex-shrink-0">
                <span className="text-[9px] font-semibold text-white/80">AI Task Generator</span>
                <div className="ml-auto flex items-center gap-1.5">
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                    animate={{ opacity: [1, 0.2, 1] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  />
                  <span className="text-[7px] font-mono text-cyan-300">
                    {phase === "generating" ? (
                      <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 0.8, repeat: Infinity }}>
                        generating…
                      </motion.span>
                    ) : `${visibleCount} / ${TASKS.length} tasks`}
                  </span>
                </div>
              </div>

              {/* Metric cards */}
              <div className="grid grid-cols-3 gap-1.5 px-2.5 pt-2 pb-1.5 flex-shrink-0">
                {[
                  { label: "Active",        val: "14",  color: "text-cyan-300"    },
                  { label: "High Priority", val: "3",   color: "text-red-300"     },
                  { label: "On Track",      val: "87%", color: "text-emerald-300" },
                ].map((s) => (
                  <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-lg p-1.5 border border-white/15">
                    <div className={`text-[11px] font-bold ${s.color} leading-none`}>{s.val}</div>
                    <div className="text-[6.5px] text-white/40 mt-0.5 leading-tight">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Section label */}
              <div className="px-2.5 pb-1 flex-shrink-0">
                {phase === "generating" ? (
                  <motion.span
                    className="text-[6.5px] font-semibold uppercase tracking-wider text-cyan-300"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 0.9, repeat: Infinity }}
                  >
                    ✦ AI is generating tasks…
                  </motion.span>
                ) : (
                  <span className="text-[6.5px] font-semibold uppercase tracking-wider text-white/35">
                    Generated Tasks
                  </span>
                )}
              </div>

              {/* Task rows */}
              <div className="flex-1 px-2.5 pb-2 space-y-1 overflow-hidden">
                {phase === "generating" ? (
                  [...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-[20px] rounded-md bg-white/8"
                      animate={{ opacity: [0.3, 0.65, 0.3] }}
                      transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.18 }}
                      style={{ width: i === 3 ? "55%" : "100%" }}
                    />
                  ))
                ) : (
                  TASKS.slice(0, visibleCount).map((task, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.28, ease: EASE }}
                      className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-md px-2 py-[4px] border border-white/10"
                    >
                      <div className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${PRIORITY_DOT[task.priority]}`} />
                      <span className="flex-1 text-[7.5px] text-white/75 font-medium truncate leading-none">
                        {task.label}
                      </span>
                      <span className={`text-[6px] font-semibold px-1 py-[2px] rounded-full flex-shrink-0 ${
                        task.priority === "high"
                          ? "text-red-300 bg-red-400/15"
                          : task.priority === "medium"
                          ? "text-amber-300 bg-amber-400/15"
                          : "text-emerald-300 bg-emerald-400/15"
                      }`}>
                        {PRIORITY_LABEL[task.priority]}
                      </span>
                    </motion.div>
                  ))
                )}
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Laptop base — glass ── */}
      <div className="h-[16px] backdrop-blur-xl bg-white/8 border border-t-0 border-white/15 rounded-b-[14px] relative shadow-[0_10px_32px_rgba(0,0,0,0.2)]">
        <div className="absolute top-0 inset-x-0 h-[1px] bg-white/10" />
        <div className="absolute bottom-[3px] left-1/2 -translate-x-1/2 w-16 h-[4px] rounded-sm bg-white/10" />
      </div>
      {/* Ground glow */}
      <div className="h-[6px] bg-gradient-to-b from-cyan-400/10 to-transparent mx-8 blur-[3px] rounded-full" />

    </div>
  );
};

// ── Main hero ────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [modelReady, setModelReady] = useState(false);
  const [fov, setFov] = useState(15);
  const modelRef = useRef<any>(null);

  const handleZoom = (dir: "in" | "out") => {
    setFov((prev) => Math.min(80, Math.max(15, dir === "in" ? prev - 8 : prev + 8)));
  };

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
      model.materials.forEach((material: any, i: number) => {
        // Blueprint style: alternate deep navy and bright blueprint blue
        const isDeep = i % 2 === 0;
        material.pbrMetallicRoughness.setBaseColorFactor(
          isDeep ? [0.04, 0.14, 0.42, 1] : [0.18, 0.52, 0.95, 1]
        );
        material.pbrMetallicRoughness.setMetallicFactor(0.1);
        material.pbrMetallicRoughness.setRoughnessFactor(0.25);
      });
      modelViewer.fieldOfView = "-50deg";
      setModelReady(true);
    };
    modelViewer.addEventListener("load", colorize);
    const fallback = setTimeout(() => setModelReady(true), 5000);
    return () => {
      modelViewer.removeEventListener("load", colorize);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    if (modelRef.current) modelRef.current.fieldOfView = `${fov}deg`;
  }, [fov]);

  return (
    <section className="relative overflow-hidden">

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
              suppressHydrationWarning
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

            {/* Radial glow effect */}
            <RadialGlow />

            {/* 3-D model */}
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={modelReady ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
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
            </motion.div>

            {/* Zoom controls */}
            <div className="absolute top-4 right-4 z-20 flex flex-col gap-1.5">
              <button
                onClick={() => handleZoom("out")}
                className="w-8 h-8 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all text-base font-light shadow-lg"
                aria-label="Reduce"
                title="Reduce"
                suppressHydrationWarning
              >
                −
              </button>
              <button
                onClick={() => handleZoom("in")}
                className="w-8 h-8 rounded-full backdrop-blur-md bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all text-base font-light shadow-lg"
                aria-label="Expand"
                title="Expand"
                suppressHydrationWarning
              >
                +
              </button>
            </div>

            {/* Glassmorphism AI task panel — rendered after model to layer on top */}
            <GlassTaskPanel />

          </div>
        </motion.div>

      </div>
    </section>
  );
}
