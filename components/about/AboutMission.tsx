"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const grain: React.CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat",
  backgroundSize: "128px 128px",
};

export default function AboutMission() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* ── Left: copy ── */}
        <motion.div {...fadeUp(0.08)}>

          {/* Badge — exact HeroSection pattern */}
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            Our Mission
          </span>

          {/* Heading — same weight rhythm */}
          <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl mb-6">
            Smarter planning,{" "}
            <span className="font-bold text-5xl lg:text-5xl text-cyan-500">
              from day one.
            </span>
          </h2>

          {/* Tagline — same font-mono + border-l treatment */}
          <p className="max-w-lg mb-6">
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                We don&apos;t link plans to schedules.
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                We generate them.
              </span>
            </span>
          </p>

          {/* Single concise body paragraph */}
          <p className="text-sm text-neutral-500 leading-relaxed max-w-md">
            SpaceLean turns project data into an intelligent plan — inferring
            dependencies, optimising sequences, and adapting in real time so your
            team can focus on building, not firefighting.
          </p>
        </motion.div>

        {/* ── Right: code block ── */}
        <motion.div
          {...fadeUp(0.14)}
          className="hidden lg:block"
        >
          <div
            className="rounded-2xl border border-black/[0.08] overflow-hidden shadow-md"
            style={{ ...grain, backgroundColor: "#0d1b2a" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.08]">
              <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
              <span className="ml-3 text-[10px] text-white/25 tracking-widest">
                planning_engine.py
              </span>
            </div>

            {/* Code */}
            <div className="p-6 text-sm space-y-1 text-gray-400">
              <p>
                <span className="text-purple-400">from</span>{" "}
                <span className="text-cyan-300">spacelean</span>{" "}
                <span className="text-purple-400">import</span> PlanningEngine
              </p>
              <p className="text-gray-600">...</p>
              <p className="mt-3 text-green-400/80"># Detect dependencies automatically</p>
              <p>
                <span className="text-cyan-300">engine</span>.
                <span className="text-white/70">infer_dependencies</span>(project)
              </p>
              <p>
                <span className="text-cyan-300">engine</span>.
                <span className="text-white/70">assign_zones</span>(project)
              </p>
              <p className="mt-3 text-green-400/80"># Generate optimised schedule</p>
              <p>
                <span className="text-orange-300">plan</span> ={" "}
                <span className="text-cyan-300">engine</span>.
                <span className="text-white/70">optimise</span>(project)
              </p>
            </div>

            {/* Status bar */}
            <div className="px-6 py-3 border-t border-white/[0.08] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[11px] text-green-400">
                Ready — plan generated in 4.2s
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}