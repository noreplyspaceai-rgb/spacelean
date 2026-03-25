"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import type { Solution, SolutionsNav } from "@/lib/solutions-data";
import { fadeUp } from "./motion";

function SolutionPanelCard({
  solution,
  isActive,
  onActivate,
  idx,
}: {
  solution: Solution;
  isActive: boolean;
  onActivate: () => void;
  idx: number;
}) {
  const shortTitle = solution.title.replace("Space Lean for ", "");

  return (
    <motion.button
      {...fadeUp(0.06 * idx)}
      onClick={onActivate}
      className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] text-left
        ${isActive ? "flex-[5]" : "flex-[1] hover:flex-[1.4]"}
      `}
      style={{ minWidth: 0 }}
    >
      <div className="absolute inset-0">
        <Image
          src={solution.heroImage}
          alt={shortTitle}
          fill
          className={`object-cover transition-all duration-700 ${
            isActive ? "scale-105 grayscale-0" : "scale-100 grayscale"
          }`}
        />
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isActive
              ? "bg-gradient-to-t from-black/85 via-black/40 to-cyan-950/10"
              : "bg-black/55"
          }`}
        />
      </div>

      <div className="relative z-10 flex flex-col justify-end h-full p-7 min-h-[340px]">
        <AnimatePresence>
          {!isActive && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <p
                className="text-white/60 text-[10px] font-bold tracking-[0.22em] uppercase whitespace-nowrap"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {shortTitle}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white/10 border border-white/10">
                <span className="text-lg">{solution.icon}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight tracking-tight">
                <span className="font-normal text-white/60 text-sm block mb-0.5 font-mono">
                  For
                </span>
                <span className="text-cyan-400">{shortTitle}</span>
              </h3>

              <div className="border-l-4 border-cyan-400 pl-3">
                <p className="text-sm font-mono text-white/60 leading-relaxed">
                  {solution.tagline}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={`/solutions/${solution.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 text-xs font-medium text-white
                    bg-white/5 border border-white/20 rounded-full px-4 py-2
                    hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}

function SolutionGroup({
  label,
  solutions,
  startIdx,
}: {
  label: string;
  description: string;
  solutions: Solution[];
  startIdx: number;
}) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div>
      <div className="flex items-center gap-3 mb-5">
        <span
          className="inline-flex items-center gap-1.5 text-[10px] font-medium text-neutral-700
          bg-black/5 border border-black/10 rounded-full px-2.5 py-1 tracking-wide uppercase"
        >
          <Sparkles className="w-3 h-3 text-cyan-500" />
          {label}
        </span>
        <div className="flex-1 h-px bg-black/8" />
      </div>

      <div className="flex gap-3 h-[340px]">
        {solutions.map((solution, idx) => (
          <SolutionPanelCard
            key={solution.slug}
            solution={solution}
            isActive={activeIdx === idx}
            onActivate={() => setActiveIdx(idx)}
            idx={startIdx + idx}
          />
        ))}
      </div>
    </div>
  );
}

interface SolutionsIndexClientProps {
  nav: SolutionsNav;
  stakeholderSolutions: Solution[];
  projectTypeSolutions: Solution[];
  solutionsSolutions: Solution[];
}

export function SolutionsIndexClient({
  stakeholderSolutions,
  projectTypeSolutions,
  solutionsSolutions,
}: SolutionsIndexClientProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="pt-10 pb-8 border-b border-black/8">
        <motion.div {...fadeUp(0.08)}>
          <span
            className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700
            bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide"
          >
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            AI-Native Construction Intelligence
          </span>
        </motion.div>

        <motion.div
          {...fadeUp(0.12)}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl font-normal tracking-tight leading-tight text-cyan-500">
              Solutions for Every{" "}
              <span className="font-bold text-4xl sm:text-5xl text-cyan-500">
                Stakeholder
              </span>
              <br />
              <span className="font-normal text-neutral-400">&amp; Project.</span>
            </h1>
          </div>

          <motion.div {...fadeUp(0.18)}>
            <span className="block border-l-4 border-cyan-400 pl-4 sm:text-right">
              <span className="block text-sm font-mono text-neutral-500 leading-relaxed">
                From GCs to owners, industrial to commercial —
              </span>
              <span className="block text-sm font-mono font-semibold text-cyan-500 leading-relaxed">
                Space Lean adapts to how your project is delivered.
              </span>
            </span>
          </motion.div>
        </motion.div>

        <motion.div {...fadeUp(0.24)} className="flex gap-3 mt-6">
          {[
            { href: "#stakeholder", label: "Stakeholder" },
            { href: "#project-type", label: "Project Type" },
            { href: "#solutions", label: "Partners" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-600
                bg-black/[0.04] border border-black/10 rounded-full px-3 py-1.5
                hover:bg-black/[0.08] hover:text-neutral-900 transition-colors tracking-wide"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      </section>

      <section className="py-8 space-y-10">
        <div id="stakeholder">
          <SolutionGroup
            label="By Stakeholder"
            description="Tailored for the way you work."
            solutions={stakeholderSolutions}
            startIdx={0}
          />
        </div>
        <div id="project-type">
          <SolutionGroup
            label="By Project Type"
            description="Purpose-built for your project's complexity."
            solutions={projectTypeSolutions}
            startIdx={stakeholderSolutions.length}
          />
        </div>
        <div id="solutions">
          <SolutionGroup
            label="Solutions"
            description="Extend. Integrate. Grow together."
            solutions={solutionsSolutions}
            startIdx={stakeholderSolutions.length + projectTypeSolutions.length}
          />
        </div>
      </section>
    </div>
  );
}
