"use client";

import { useRef } from "react";
import { Zap, Shield, Layout, Target, Clock, Users } from "lucide-react";
import { motion, useInView } from "framer-motion";

const reasons = [
  {
    icon: Zap,
    number: "01",
    title: "Zero Manual Sequencing",
    description: "Upload your model. The build order is figured out for you.",
  },
  {
    icon: Target,
    number: "02",
    title: "Site-True Schedules",
    description: "Schedules built around real site conditions, not assumptions.",
  },
  {
    icon: Layout,
    number: "03",
    title: "Three Strategies, One Click",
    description: "Fast, safe, or balanced — pick the plan that fits the job.",
  },
  {
    icon: Clock,
    number: "04",
    title: "Self-Healing Plans",
    description: "One slip on site and the schedule adjusts itself downstream.",
  },
  {
    icon: Shield,
    number: "05",
    title: "Delays Caught Early",
    description: "Risk zones surface before they become problems.",
  },
  {
    icon: Users,
    number: "06",
    title: "Crew Conflicts Resolved",
    description: "Crew clashes are caught and fixed before work begins.",
  },
];

function ReasonCard({
  reason,
  index,
}: {
  reason: (typeof reasons)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = reason.icon;

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
      className="group relative bg-white border border-black/8 rounded-2xl p-6 hover:border-black/20 hover:shadow-md transition-all duration-300"
    >
      {/* Number + Icon in same row */}
      <div className="mb-5 flex items-center justify-between">
        <span className="text-[0.6rem] font-bold tracking-[0.22em] text-black/25 uppercase">
          {reason.number}
        </span>
        <div className="w-9 h-9 rounded-xl bg-black/5 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
          <Icon className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-sm font-bold uppercase tracking-[0.1em] mb-2">
        {reason.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-neutral-500 leading-relaxed">
        {reason.description}
      </p>
    </motion.div>
  );
}

export default function WhyUs() {
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });
  const imageRef = useRef(null);
  const imageInView = useInView(imageRef, { once: true, margin: "-60px" });

  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* ── Header ── */}
        <div ref={headingRef} className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-bold tracking-[0.25em] uppercase text-black/40 mb-4">
              Why SPACE AI
            </p>
            <h2 className="text-[clamp(2.4rem,5vw,4rem)] font-normal tracking-tighter leading-[1.02]">
              Built for planners who are done<br />
              losing days to manual work.
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-neutral-500 font-light max-w-xs lg:text-right leading-relaxed"
          >
            Every delay has a root cause. SPACE AI finds it before it finds you.
          </motion.p>
        </div>

        {/* ── Body: image + grid ── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

          {/* ── Left: image panel ── */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: -40 }}
            animate={imageInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:w-[36%] shrink-0"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/4dmodel.gif"
                alt="Construction site planning"
                className="absolute inset-0 w-full h-full object-cover  transition-all duration-700"
              />

              {/* Bottom caption */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
                <div className="h-px bg-white/40 mb-5 w-10" />
                <p className="bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl text-sm text-black leading-snug tracking-tight">
                  From model to build-ready plan — in minutes, not days.
                </p>
              </div>

              {/* Floating stat badge */}
              <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 shadow-lg">
                <p className="text-2xl font-black text-black leading-none">10×</p>
                <p className="text-[0.65rem] font-semibold text-black/50 uppercase tracking-wide mt-0.5">
                  faster planning
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── Right: cards grid ── */}
          <div className="flex-1 grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, idx) => (
              <ReasonCard key={reason.number} reason={reason} index={idx} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}