"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles, Users, Lightbulb, Trophy } from "lucide-react";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const grain: React.CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat",
  backgroundSize: "128px 128px",
};

export default function AboutTeam() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

      {/* ── Section Header ── */}
      <motion.div
        className="mb-10"
        initial={{ y: 28, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.06, ease: EASE }}
      >
        <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
          Our People
        </span>

        <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-2xl">
          The team behind{" "}
          <span className="font-bold text-5xl lg:text-5xl text-cyan-500">
            every breakthrough.
          </span>
        </h2>

        <p className="mt-5 max-w-lg">
          <span className="block border-l-4 border-cyan-400 pl-4">
            <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
              Engineers, planners, and builders — united.
            </span>
            <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
              Building what the industry truly needs.
            </span>
          </span>
        </p>
      </motion.div>

      {/* ── 3-column square photo cards ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">

        {/* Card 1 — Team offsite lounge */}
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
          className="rounded-2xl border border-black/[0.08] overflow-hidden shadow-md hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 group"
          style={{ ...grain, backgroundColor: "#f8fafc" }}
        >
          {/* Square image */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src="/about-team-3.jpg"
              alt="SpaceLean team members relaxing together during a company offsite retreat."
              className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-white/70 bg-white/[0.12] border border-white/[0.18] rounded-full px-2.5 py-0.5 tracking-widest backdrop-blur-sm uppercase mb-1.5">
                <Users className="w-2.5 h-2.5" /> Full Team
              </span>
              <p className="text-white font-semibold text-sm leading-snug drop-shadow">
                Where great ideas find great people.
              </p>
            </div>
          </div>
          {/* Card text */}
          <div className="px-4 py-4 flex items-start gap-3">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center mt-0.5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-colors">
              <Users className="w-3.5 h-3.5 text-neutral-500 group-hover:text-cyan-500 transition-colors" />
            </div>
            <div>
              <h3 className="text-neutral-800 font-semibold text-sm mb-1">Together Beyond the Screen</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Our team gathers, unwinds, and builds together —
                because the best breakthroughs happen when people truly connect.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 2 — Team meeting */}
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.20, ease: EASE }}
          className="rounded-2xl border border-black/[0.08] overflow-hidden shadow-md hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 group"
          style={{ ...grain, backgroundColor: "#f8fafc" }}
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src="/about-team-2.jpg"
              alt="SpaceLean team members gathered around a table in a collaborative planning session."
              className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-white/70 bg-white/[0.12] border border-white/[0.18] rounded-full px-2.5 py-0.5 tracking-widest backdrop-blur-sm uppercase mb-1.5">
                <Lightbulb className="w-2.5 h-2.5" /> Collaboration
              </span>
              <p className="text-white font-semibold text-sm leading-snug drop-shadow">
                Aligned on mission. Every single day.
              </p>
            </div>
          </div>
          <div className="px-4 py-4 flex items-start gap-3">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center mt-0.5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-colors">
              <Lightbulb className="w-3.5 h-3.5 text-neutral-500 group-hover:text-cyan-500 transition-colors" />
            </div>
            <div>
              <h3 className="text-neutral-800 font-semibold text-sm mb-1">Built in the Open</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                Every sprint starts with clarity. Engineers and construction experts
                plan together so every feature reflects real workflows.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Card 3 — Founders celebration */}
        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
          className="rounded-2xl border border-black/[0.08] overflow-hidden shadow-md hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300 group"
          style={{ ...grain, backgroundColor: "#f8fafc" }}
        >
          <div className="relative aspect-square overflow-hidden">
            <img
              src="/about-team-celebration.jpg"
              alt="SpaceLean team members celebrating a company milestone with a celebration cake."
              className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-4">
              <span className="inline-flex items-center gap-1 text-[10px] font-medium text-white/70 bg-white/[0.12] border border-white/[0.18] rounded-full px-2.5 py-0.5 tracking-widest backdrop-blur-sm uppercase mb-1.5">
                <Trophy className="w-2.5 h-2.5" /> Milestone
              </span>
              <p className="text-white font-semibold text-sm leading-snug drop-shadow">
                Every win is a team win.
              </p>
            </div>
          </div>
          <div className="px-4 py-4 flex items-start gap-3">
            <div className="flex-shrink-0 w-7 h-7 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center mt-0.5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-colors">
              <Trophy className="w-3.5 h-3.5 text-neutral-500 group-hover:text-cyan-500 transition-colors" />
            </div>
            <div>
              <h3 className="text-neutral-800 font-semibold text-sm mb-1">Celebrating Progress</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">
                From proof-of-concept to live deployments across four continents —
                every milestone is celebrated with the people who built it.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

    </section>
  );
}
