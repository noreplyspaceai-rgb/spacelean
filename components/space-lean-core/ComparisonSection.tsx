"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, X } from "lucide-react";
import { COMPARISON_FEATURES, type ComparisonFeature } from "./data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

function StatusCell({ value }: { value: boolean }) {
  return (
    <div className="flex items-center justify-center">
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full border ${
          value
            ? "border-emerald-200 bg-emerald-50 text-emerald-600"
            : "border-neutral-200 bg-neutral-50 text-neutral-400"
        }`}
      >
        {value ? <Check className="h-4 w-4" /> : <X className="h-4 w-4" />}
      </span>
    </div>
  );
}

function ComparisonRow({
  item,
  index,
}: {
  item: ComparisonFeature;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: 0.08 + index * 0.04, ease: EASE }}
      className="grid grid-cols-[minmax(0,1fr)_96px_96px] sm:grid-cols-[minmax(0,1fr)_140px_140px] items-center gap-2 sm:gap-4 px-4 sm:px-6 py-4 border-b border-black/[0.06]"
    >
      <p className="text-sm sm:text-base text-neutral-800 leading-snug">{item.feature}</p>
      <StatusCell value={item.spaceLean} />
      <StatusCell value={item.traditional} />
    </motion.div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-20 sm:py-32 bg-[#fafafa] border-t border-black/[0.06] px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div className="mb-14 flex flex-col items-start" {...fadeUp(0.08)}>
          <span
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700
            bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            Space Lean vs Traditional Planning
          </span>

          <h2
            className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight
            text-cyan-500 max-w-3xl"
          >
            What changes when scheduling is{" "}
            <span className="font-bold text-cyan-500">AI-native.</span>
          </h2>

          <p className="mt-6 max-w-2xl">
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                Less manual effort. More predictability.
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                Built to handle real construction dependencies.
              </span>
            </span>
          </p>
        </motion.div>

        <div className="rounded-3xl border border-black/[0.08] bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-[minmax(0,1fr)_96px_96px] sm:grid-cols-[minmax(0,1fr)_140px_140px] gap-2 sm:gap-4 px-4 sm:px-6 py-4 bg-black/[0.02] border-b border-black/[0.06]">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">Capability</p>
            <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-cyan-600">
              Space Lean
            </p>
            <p className="text-center text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
              Traditional
            </p>
          </div>

          {COMPARISON_FEATURES.map((item, index) => (
            <ComparisonRow key={item.feature} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
