"use client";

import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";
import { COMPARISON_FEATURES } from "./data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

// ── Table ─────────────────────────────────────────────────────────────────────
function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      {/* Column headers */}
      <div className="grid grid-cols-[1fr_140px_140px] mb-1">
        <div />
        {/* SpaceLean header pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium tracking-wide
                           text-cyan-600 bg-cyan-50 border border-cyan-200 rounded-full px-3 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Space Lean
          </span>
        </div>
        {/* Traditional header pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium tracking-wide
                           text-neutral-500 bg-black/[0.03] border border-black/[0.07] rounded-full px-3 py-1">
            Traditional
          </span>
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-1 mt-3">
        {COMPARISON_FEATURES.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: 0.05 + i * 0.055, ease: EASE }}
            className="grid grid-cols-[1fr_140px_140px] items-center
                       rounded-lg border border-transparent
                       hover:border-black/[0.06] hover:bg-black/[0.015]
                       transition-all duration-200 group px-4 py-4"
          >
            {/* Feature label */}
            <span className="text-base text-neutral-600 group-hover:text-neutral-900 transition-colors font-mono">
              {item.feature}
            </span>

            {/* Space Lean cell */}
            <div className="flex justify-center">
              {item.spaceLean ? (
                <span className="inline-flex items-center justify-center
                                 w-8 h-8 rounded-full bg-cyan-50 border border-cyan-200/60">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                </span>
              ) : (
                <span className="inline-flex items-center justify-center
                                 w-8 h-8 rounded-full bg-black/[0.03] border border-black/[0.06]">
                  <XCircle className="w-5 h-5 text-neutral-300" />
                </span>
              )}
            </div>

            {/* Traditional cell */}
            <div className="flex justify-center">
              {item.traditional ? (
                <span className="inline-flex items-center justify-center
                                 w-8 h-8 rounded-full bg-black/[0.03] border border-black/[0.06]">
                  <CheckCircle2 className="w-5 h-5 text-neutral-400" />
                </span>
              ) : (
                <span className="inline-flex items-center justify-center
                                 w-8 h-8 rounded-full bg-black/[0.03] border border-black/[0.06]">
                  <XCircle className="w-5 h-5 text-neutral-200" />
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function ComparisonSection() {
  return (
    <section className="py-20 sm:py-32  border-t border-black/[0.06] px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading — matches FeaturesSection heading pattern */}
        <motion.div className="mb-14 flex flex-col items-start" {...fadeUp(0.08)}>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700
                           bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            Why SpaceLean
          </span>

          <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight
                         text-cyan-500 max-w-xl">
            Space Lean vs{" "}
            <span className="font-bold text-5xl lg:text-5xl text-cyan-500">
              Traditional Tools
            </span>
          </h2>

          <p className="mt-6 max-w-lg">
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                See how AI-driven scheduling compares
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                to conventional methods.
              </span>
            </span>
          </p>
        </motion.div>

        {/* Table card — matches FeaturesSection card style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
          className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-8
                     shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
        >
          <ComparisonTable />

          {/* Bottom accent line — matches FeatureCard bottom line */}
          <div className="mt-8 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
            <motion.div
              className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "40%" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4, ease: EASE }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}