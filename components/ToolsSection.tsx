"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2, Play, RotateCcw } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const exampleTasks = [
  "Parse structural geometry across floors 2–8 from uploaded IFC file",
  "Generate MEP coordination milestones for mechanical and electrical teams",
  "List foundation inspection checkpoints with acceptance criteria",
  "Assign cladding installation tasks by zone and elevation",
  "Create punch-list items for site handover readiness review",
];

const promptText = "Generate tasks from uploaded building_structure_v3.ifc for Phase 2 construction...";

export default function ToolsSection() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [currentTasks, setCurrentTasks] = useState<string[]>([]);
  const [displayText, setDisplayText] = useState("");
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });

  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setIsDone(false);
    setCurrentTasks([]);
    setDisplayText("");

    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayText(promptText.slice(0, i));
      i++;
      if (i > promptText.length) {
        clearInterval(typingInterval);
        setTimeout(() => {
          let taskIdx = 0;
          const taskInterval = setInterval(() => {
            setCurrentTasks((prev) => [...prev, exampleTasks[taskIdx]]);
            taskIdx++;
            if (taskIdx === exampleTasks.length) {
              clearInterval(taskInterval);
              setIsGenerating(false);
              setIsDone(true);
            }
          }, 550);
        }, 400);
      }
    }, 22);
  };

  const handleReset = () => {
    setIsGenerating(false);
    setIsDone(false);
    setCurrentTasks([]);
    setDisplayText("");
  };

  return (
    <section ref={sectionRef} className="py-32  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-black/30 mb-4">
              Featured Tool
            </p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-black tracking-tighter leading-[1.02] text-black">
              Prompt your CAD.<br />
              <span className="text-black/20">Get tasks instantly.</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-neutral-500 font-light max-w-xs lg:text-right leading-relaxed"
          >
            Describe your project in plain English. SpaceLean reads your 3D model and builds a fully scoped execution plan in seconds.
          </motion.p>
        </div>

        {/* ── Divider ── */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="origin-left h-px bg-black/10 mb-16"
        />

        {/* ── Main layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* ── Left: copy + CTA ── */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-32"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-black/10 rounded-full mb-8">
              <Sparkles className="w-3 h-3 text-black" />
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/60">
                AI Task Generator
              </span>
            </div>

            <p className="text-lg text-neutral-500 leading-relaxed font-light mb-10 max-w-md">
              Upload any{" "}
              <strong className="text-black font-semibold">.IFC, .RVT, or .DWG</strong> file and
              describe what you need. SpaceLean parses your model's geometry,
              layers, and metadata — then generates precise, discipline-scoped tasks.
            </p>

            {/* Stats row */}
            <div className="flex items-center gap-8 mb-12">
              {[
                { value: "< 5s", label: "task generation" },
                { value: "50k+", label: "teams onboarded" },
                { value: "10×", label: "faster kickoff" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-black tracking-tight">{stat.value}</p>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-widest text-black/35 mt-0.5">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/tool"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-black text-white text-sm font-bold rounded-full hover:bg-neutral-800 transition-colors shadow-lg shadow-black/15"
            >
              Open Generator
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* ── Right: interactive terminal ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative border border-black/10 rounded-3xl overflow-hidden bg-[#F5F4F0]">

              {/* Terminal chrome bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-black/8 bg-white/60 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  </div>
                  <span className="text-[10px] font-bold text-black/30 uppercase tracking-widest ml-2">
                    SpaceLean · AI Engine
                  </span>
                </div>
                {isDone && (
                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-black/30 hover:text-black transition-colors"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                )}
              </div>

              {/* Prompt input area */}
              <div className="p-6 border-b border-black/8">
                <p className="text-[10px] font-bold uppercase tracking-widest text-black/30 mb-3">
                  Prompt
                </p>
                <div className="min-h-[56px] text-sm font-medium text-black leading-relaxed">
                  {displayText ? (
                    <>
                      {displayText}
                      {isGenerating && displayText.length < promptText.length && (
                        <span className="inline-block w-1.5 h-4 bg-black/50 ml-0.5 animate-pulse align-middle rounded-sm" />
                      )}
                    </>
                  ) : (
                    <span className="text-black/25 italic">
                      e.g. "Generate tasks for Phase 2 from uploaded CAD file…"
                    </span>
                  )}
                </div>
              </div>

              {/* Tasks output area */}
              <div className="p-6 min-h-[280px]">
                {!isGenerating && !isDone && currentTasks.length === 0 && (
                  <div className="flex flex-col items-center justify-center h-48 gap-4">
                    <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white shadow-sm">
                      <Sparkles className="w-5 h-5 text-black/40" />
                    </div>
                    <p className="text-xs text-black/30 font-semibold uppercase tracking-widest">
                      Tasks will appear here
                    </p>
                    <button
                      onClick={handleGenerate}
                      className="flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs font-bold rounded-full hover:bg-neutral-800 transition-colors uppercase tracking-widest group"
                    >
                      <Play className="w-3 h-3 fill-white group-hover:scale-110 transition-transform" />
                      Run Demo
                    </button>
                  </div>
                )}

                {/* Loading dots */}
                {isGenerating && currentTasks.length === 0 && displayText.length === promptText.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-3 py-8"
                  >
                    {[0, 0.15, 0.3].map((delay, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 0.9, delay }}
                        className="w-1.5 h-1.5 rounded-full bg-black"
                      />
                    ))}
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/30 ml-1">
                      Parsing model…
                    </span>
                  </motion.div>
                )}

                {/* Task list */}
                <div className="space-y-2">
                  <AnimatePresence>
                    {currentTasks.map((task, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -16, filter: "blur(4px)" }}
                        animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                        className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-black/6 hover:border-black/15 hover:shadow-sm transition-all group cursor-default"
                      >
                        <CheckCircle2 className="w-4 h-4 text-black shrink-0 mt-0.5" />
                        <span className="text-sm font-medium text-black/80 leading-snug">
                          {task}
                        </span>
                        <span className="ml-auto text-[9px] font-bold uppercase tracking-widest text-black/20 shrink-0 pt-0.5">
                          #{String(idx + 1).padStart(2, "0")}
                        </span>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Done state */}
                {isDone && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-4 flex items-center justify-between px-4 py-3 bg-black rounded-2xl"
                  >
                    <span className="text-xs font-bold text-white/80 uppercase tracking-widest">
                      {exampleTasks.length} tasks generated
                    </span>
                    <span className="text-xs font-black text-white">
                      Ready to assign ✦
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Footer: avatars */}
              <div className="px-6 py-4 border-t border-black/8 bg-white/40 flex items-center justify-between">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white bg-neutral-200 overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?u=user${i}`}
                        alt=""
                        className="w-full h-full object-cover grayscale"
                      />
                    </div>
                  ))}
                  <div className="w-6 h-6 rounded-full border-2 border-white bg-black flex items-center justify-center text-[7px] font-black text-white">
                    50k
                  </div>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-widest text-black/25">
                  SpaceLean AI v4.2
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}