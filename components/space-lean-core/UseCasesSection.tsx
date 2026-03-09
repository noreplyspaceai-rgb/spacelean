"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { USE_CASES, type UseCase } from "./data";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

// ── Card ──────────────────────────────────────────────────────────────────────
function UseCaseCard({ useCase, index }: { useCase: UseCase; index: number }) {
  const Icon = useCase.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.09, ease: EASE }}
      className="group flex flex-col rounded-2xl border border-black/[0.07] bg-white
                 p-6 sm:p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      {/* Icon badge */}
      <div className="w-10 h-10 rounded-full bg-black/[0.04] border border-black/[0.08]
                      flex items-center justify-center mb-5
                      group-hover:bg-cyan-50 group-hover:border-cyan-200/60 transition-colors duration-300">
        <Icon className="w-4.5 h-4.5 text-neutral-500 group-hover:text-cyan-500 transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-base font-semibold text-neutral-900 tracking-tight mb-2">
        {useCase.title}
      </h3>

      {/* Description */}
      <p className="text-base text-neutral-500 leading-relaxed flex-1 font-mono">
        {useCase.description}
      </p>

      {/* Bottom accent line — matches FeatureCard / ComparisonSection */}
      <div className="mt-6 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
        <motion.div
          className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
          initial={{ width: "0%" }}
          whileInView={{ width: "30%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.09, ease: EASE }}
        />
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────
export default function UseCasesSection() {
  return (
    <section className="py-20 sm:py-32 bg-white border-t border-black/[0.06] px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading — identical pattern to Hero / Features / Comparison */}
        <motion.div className="mb-14 flex flex-col items-start" {...fadeUp(0.08)}>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700
                           bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            Who Benefits Most
          </span>

          <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight
                         text-cyan-500 max-w-xl">
            Built for teams that{" "}
            <span className="font-bold text-5xl lg:text-5xl text-cyan-500">
              demand more.
            </span>
          </h2>

          <p className="mt-6 max-w-lg">
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                Better visibility, faster planning,
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                and schedules that adapt.
              </span>
            </span>
          </p>
        </motion.div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {USE_CASES.map((useCase, i) => (
            <UseCaseCard key={i} useCase={useCase} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}