"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import StartFreeTrialButton from "@/components/StartFreeTrialButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col items-start text-start">

        {/* Badge — exact homepage pattern */}
        <motion.div {...fadeUp(0.08)}>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            Space Lean Core
          </span>
        </motion.div>

        {/* Heading — same font-normal / font-bold weight contrast */}
        <motion.h1
          {...fadeUp(0.12)}
          className="text-3xl sm:text-5xl font-normal lg:text-5xl tracking-tight leading-tight text-cyan-500 max-w-3xl"
        >
          AI-Powered <br />
          <span className="font-bold text-5xl sm:text-6xl lg:text-6xl text-cyan-500">
            Construction Scheduling
          </span>{" "}
          <br />
          for 2026
        </motion.h1>

        {/* Tagline — same font-mono + border-l treatment */}
        <motion.p {...fadeUp(0.18)} className="mt-6 max-w-lg">
          <span className="block border-l-4 border-cyan-400 pl-4 text-left">
            <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
              BIM models don&apos;t become schedules on their own.
            </span>
            <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
              We make them.
            </span>
          </span>
        </motion.p>

        {/* Body — concise, trimmed */}
        <motion.p
          {...fadeUp(0.22)}
          className="mt-5 text-sm text-neutral-500 leading-relaxed max-w-xl"
        >
          Geometric intelligence, predictive risk analysis, and adaptive
          replanning — built into one platform that keeps your projects on track
          from day one.
        </motion.p>

        {/* CTAs — same layout as homepage */}
        <motion.div
          {...fadeUp(0.28)}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <StartFreeTrialButton />

          <Link
            href="#features"
            className="inline-flex items-center gap-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group"
          >
            <span className="w-9 h-9 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-black/[0.08] transition-colors">
              <ArrowRight className="w-3.5 h-3.5 text-neutral-900" />
            </span>
            Explore Features
          </Link>
        </motion.div>

      </div>
    </section>
  );
}