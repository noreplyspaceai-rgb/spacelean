"use client";

import Link from "next/link";
import { ArrowRight, Check, Zap, Sparkles, Brain, BarChart2, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { comparisons } from "@/lib/compare-data";
import StartFreeTrialButton from "@/components/StartFreeTrialButton";
import Image from "next/image";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

const containerVariants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

// 4 floating icons — position offsets relative to the image container
const FLOAT_ICONS = [
  {
    Icon: Brain,
    label: "AI Planning",
    // top-left
    className: "top-[8%] left-[-6%]",
    delay: 0,
    duration: 3.8,
    yRange: [-6, -14, -6],
  },
  {
    Icon: BarChart2,
    label: "Analytics",
    // top-right
    className: "top-[6%] right-[-4%]",
    delay: 0.6,
    duration: 4.4,
    yRange: [-8, -16, -8],
  },
  {
    Icon: Shield,
    label: "Risk Guard",
    // bottom-left
    className: "bottom-[12%] left-[-5%]",
    delay: 1.1,
    duration: 5.0,
    yRange: [6, 14, 6],
  },
  {
    Icon: Cpu,
    label: "Automation",
    // bottom-right
    className: "bottom-[10%] right-[-3%]",
    delay: 0.3,
    duration: 4.2,
    yRange: [8, 16, 8],
  },
];

export default function ComparePage() {
  return (
    <main className="relative min-h-screen bg-white text-primary-text overflow-hidden">

      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-cyan-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-cyan-500/3 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">

        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 items-center mb-5">

          {/* LEFT TEXT */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <motion.div {...fadeUp(0.08)}>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-8 tracking-wide hover:bg-black/10 transition-colors">
                <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
                Comparison Guide
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.12)}
              className="text-3xl sm:text-6xl lg:text-5xl font-normal tracking-tight leading-tight mb-8"
            >
              <span className="text-cyan-500">Why Teams Switch </span>
              <span className="text-neutral-900">to SpaceLean.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.18)} className="text-lg sm:text-xl text-neutral-600 leading-relaxed font-light max-w-3xl">
              Don't just manage tasks.{" "}
              <span className="text-cyan-500 font-semibold">Automate them.</span>{" "}
              See how our AI-native approach compares to traditional tools.
            </motion.p>
          </motion.div>

          {/* RIGHT — laptop image + 4 floating icons */}
          <motion.div
            {...fadeUp(0.22)}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Image wrapper — icons positioned relative to this */}
            <div className="relative w-full max-w-sm">

              {/* Laptop image */}
              <Image
                src="/mockuper.png"
                alt="SpaceLean Dashboard"
                width={900}
                height={600}
                priority
                sizes="(max-width: 768px) 50vw, 50vw"
                className="w-full h-auto"
              />

              {/* 4 floating icon pills */}
              {FLOAT_ICONS.map(({ Icon, label, className, delay, duration, yRange }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1, y: yRange }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.4 + delay, ease: EASE },
                    scale:   { duration: 0.5, delay: 0.4 + delay, ease: EASE },
                    y: {
                      duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: delay,
                    },
                  }}
                  className={`absolute ${className} z-20`}
                >
                  {/* Pill card — matches hero orbit icon container */}
                  <div className="flex items-center gap-2.5 bg-white border border-black/[0.08] rounded-2xl px-4 py-3 shadow-[0_4px_20px_rgba(0,0,0,0.10)] backdrop-blur-sm">
                    {/* Icon circle — hero spec: bg-black/[0.04] border border-black/10 */}
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-200/60 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-cyan-500" />
                    </div>
                    <span className="text-xs font-bold text-neutral-700 tracking-wide whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                </motion.div>
              ))}

            </div>
          </motion.div>

        </div>

        {/* COMPARISON CARDS */}
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid md:grid-cols-2 gap-8 mb-24"
        >
          {comparisons.map((comp) => (
            <motion.div key={comp.slug} variants={itemVariants}>
              <Link href={`/compare/${comp.slug}`} className="group relative h-full block">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-sm border border-black/5 rounded-3xl group-hover:border-cyan-500/30 group-hover:bg-white/80 transition-all duration-500" />
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-transparent pointer-events-none" />

                <div className="relative p-10 h-full flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="text-xs font-bold uppercase tracking-widest text-neutral-600 bg-neutral-100 px-3 py-1.5 rounded-full group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500">
                      vs {comp.competitorName}
                    </div>
                    <div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-normal tracking-tight mb-6 text-neutral-900">
                    SpaceLean <span className="text-cyan-500">vs</span> {comp.competitorName}
                  </h2>

                  <p className="text-neutral-600 mb-8 line-clamp-3 leading-relaxed text-sm sm:text-base flex-grow">
                    {comp.summary}
                  </p>

                  <div className="border-t border-black/5 pt-6 mt-auto space-y-3">
                    <div className="flex items-center gap-3 text-neutral-700 group-hover:text-cyan-500 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Check className="w-3 h-3 text-cyan-500" />
                      </div>
                      <span className="text-sm font-medium">AI-First Planning</span>
                    </div>
                    <div className="flex items-center gap-3 text-neutral-700 group-hover:text-cyan-500 transition-colors">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                        <Zap className="w-3 h-3 text-cyan-500" />
                      </div>
                      <span className="text-sm font-medium">Real-Time Adaptation</span>
                    </div>
                    <div className="mt-6 inline-flex items-center gap-2 text-cyan-500 font-medium text-sm group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* STATS SECTION */}
        <motion.div {...fadeUp(0.24)} className="max-w-4xl mx-auto mb-24">
          <div className="bg-white/60 backdrop-blur border border-black/5 rounded-3xl p-12">
            <div className="grid sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold text-cyan-500 mb-2">4x</div>
                <p className="text-neutral-600 text-sm">Faster Setup Time</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-500 mb-2">60%</div>
                <p className="text-neutral-600 text-sm">Less Manual Planning</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-cyan-500 mb-2">92%</div>
                <p className="text-neutral-600 text-sm">On-Time Delivery Rate</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp(0.32)} className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-normal tracking-tight mb-8 text-neutral-900">
            Ready to <span className="text-cyan-500">upgrade</span> your workflow?
          </h2>
          <p className="text-neutral-600 text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of construction teams using SpaceLean to ship projects on time and under budget.
          </p>
          <StartFreeTrialButton />
          <div className="mt-10 flex items-center justify-center gap-2 text-xs text-neutral-500">
            ✓ No credit card required • 14-day free trial • Cancel anytime
          </div>
        </motion.div>

      </div>
    </main>
  );
}