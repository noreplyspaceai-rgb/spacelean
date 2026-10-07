"use client";

import { useRef } from "react";
import Link from "next/link";
import { Layers, Brain, Shield, Users, Sparkles, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const capabilities = [
  {
    icon: Layers,
    number: "01",
    title: "BIM → Schedule",
    description: "Generate structured construction schedules from BIM and project information.",
  },
  {
    icon: Brain,
    number: "02",
    title: "Schedule Intelligence",
    description: "Optimize project schedules, dependencies, and construction workflows.",
  },
  {
    icon: Shield,
    number: "03",
    title: "Risk Prediction",
    description: "Identify potential schedule and project risks before they impact delivery.",
  },
  {
    icon: Users,
    number: "04",
    title: "Crew Optimization",
    description: "Detect resource conflicts and improve construction crew utilization.",
  },
];

function CapabilityCard({
  capability,
  index,
}: {
  capability: (typeof capabilities)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = capability.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.55,
        delay: index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative bg-white border border-black/8 rounded-2xl p-6 hover:border-cyan-400/60 hover:shadow-[0_4px_24px_rgba(6,182,212,0.08)] transition-all duration-300 flex flex-col justify-between min-h-[200px]"
    >
      <div>
        {/* Number + Icon in same row */}
        <div className="mb-5 flex items-center justify-between">
          <span className="text-[0.6rem] font-bold tracking-[0.22em] text-cyan-400/60 uppercase">
            {capability.number}
          </span>
          <div className="w-9 h-9 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors duration-300">
            <Icon className="w-4 h-4 text-cyan-500 group-hover:text-white transition-colors duration-300" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-sm font-bold uppercase tracking-[0.1em] mb-2 text-neutral-800">
          {capability.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-neutral-500 leading-relaxed font-mono">
          {capability.description}
        </p>
      </div>

      {/* Decorative line indicator on hover */}
      <div className="mt-4 h-[2px] w-0 bg-cyan-500 transition-all duration-300 group-hover:w-full" />
    </motion.div>
  );
}

export default function ProductCapabilities() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section className="py-20 relative overflow-hidden bg-white border-t border-black/5">
      {/* Subtle radial background glow to match the site's aesthetic */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-50/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-50/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Header ── */}
        <div
          ref={headingRef}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge pill */}
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              What Is SpaceLean?
            </span>

            <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-tight">
              AI-Powered <br />
              <span className="font-bold text-cyan-500">Construction Planning</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md"
          >
            {/* Description pullquote */}
            <p className="text-sm sm:text-base font-mono text-neutral-500 leading-relaxed border-l-4 border-cyan-400 pl-4">
              SpaceLean helps construction teams plan, schedule, analyze, and optimize projects using{" "}
              <span className="font-semibold text-cyan-500">
                AI-powered construction intelligence.
              </span>
            </p>
          </motion.div>
        </div>

        {/* ── Capabilities Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((capability, idx) => (
            <CapabilityCard
              key={capability.number}
              capability={capability}
              index={idx}
            />
          ))}
        </div>

        {/* ── CTA Button ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex justify-center"
        >
          <Link
            href="/space-lean-core"
            className="inline-flex items-center gap-2 bg-black/[0.04] border border-black/10 text-neutral-800 font-medium px-8 py-4 rounded-full text-sm hover:bg-cyan-500 hover:border-cyan-500 hover:text-white active:bg-cyan-600 active:border-cyan-600 active:text-white transition-all duration-300 group"
          >
            Explore SpaceLean
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
