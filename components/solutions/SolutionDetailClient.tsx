"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Star, Sparkles } from "lucide-react";
import type { Solution } from "@/lib/solutions-data";
import { EASE } from "./motion";

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

interface SolutionDetailClientProps {
  solution: Solution;
  otherSolutions: Solution[];
}

export function SolutionDetailClient({ solution, otherSolutions }: SolutionDetailClientProps) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative z-10 py-0 pb-4 px-4 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4">

          {/* Back */}
          <motion.div {...fadeUp(0.06)} className="mb-8">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group"
              prefetch={false}
            >
              <span className="w-9 h-9 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-black/[0.08] transition-colors">
                <ArrowLeft className="w-3.5 h-3.5 text-neutral-900 group-hover:-translate-x-0.5 transition-transform" />
              </span>
              All Solutions
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0.1)}>

              {/* Badge row */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black/[0.04] border border-black/10 rounded-2xl flex items-center justify-center text-xl">
                  {solution.icon}
                </div>
                <div className="h-px w-6 bg-black/10" />
                <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
                  {solution.title.replace("Space AI for ", "")}
                </span>
              </div>

              {/* H1 */}
              <h1 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl mb-4">
                <span className="font-bold text-5xl lg:text-5xl">{solution.tagline}</span>
              </h1>

              {/* Mono description */}
              <p className="mt-4 max-w-lg mb-8">
                <span className="block border-l-4 border-cyan-400 pl-4">
                  <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                    {solution.description}
                  </span>
                </span>
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/request-a-demo" className="inline-flex items-center justify-center gap-2.5 text-sm font-medium bg-neutral-900 text-white px-7 py-2.5 rounded-full hover:bg-neutral-700 transition-colors shadow-lg shadow-black/10">
                  <span>{solution.cta.primary}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/request-a-demo" className="inline-flex items-center justify-center gap-2 text-sm font-medium text-neutral-600 border border-black/10 px-7 py-2.5 rounded-full hover:bg-black/[0.04] hover:text-neutral-900 transition-colors">
                  <span>{solution.cta.secondary}</span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-black/[0.07] shadow-[0_2px_24px_rgba(0,0,0,0.08)]">
                <Image src={solution.heroImage} alt={solution.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" priority />
              </div>
              {solution.benefits[0]?.stat && (
                <div className="absolute -bottom-4 -left-4 bg-white px-5 py-4 rounded-2xl shadow-xl border border-black/5">
                  <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wide mb-0.5">{solution.benefits[0].title}</p>
                  <p className="text-xl font-bold text-cyan-500">{solution.benefits[0].stat}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Use Cases ── */}
      <section className="py-4 sm:py-20 px-4 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Built for your workflow
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl">
              Integrates with the tools{" "}
              <span className="font-bold text-5xl lg:text-5xl">your team already uses.</span>
            </h2>
            <p className="mt-4 max-w-lg">
              <span className="block border-l-4 border-cyan-400 pl-4">
                <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                  Space AI adapts to your process —
                </span>
                <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                  not the other way around.
                </span>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {solution.useCases.map((useCase, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg border border-transparent hover:border-black/[0.06] hover:bg-black/[0.015] transition-all duration-200 px-4 py-3 group">
                  <div className="w-7 h-7 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-colors shrink-0">
                    <Check className="w-3.5 h-3.5 text-cyan-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-mono text-neutral-600 group-hover:text-neutral-900 transition-colors">{useCase}</span>
                </div>
              ))}
            </div>

            {/* Cyan accent bar — ComparisonSection pattern */}
            <div className="mt-6 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "35%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="py-16 sm:py-20 px-4 border-b border-black/[0.06]">
        <div className="max-w-7xl px-4 mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Measurable impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl">
              Results that{" "}
              <span className="font-bold text-5xl lg:text-5xl">speak for themselves.</span>
            </h2>
            <p className="mt-4 max-w-lg">
              <span className="block border-l-4 border-cyan-400 pl-4">
                <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">No guesswork.</span>
                <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">Just outcomes.</span>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.benefits.map((benefit, index) => (
                <div key={index} className="group rounded-lg border border-transparent hover:border-black/[0.06] hover:bg-black/[0.015] transition-all duration-200 p-4">
                  {benefit.stat && (
                    <p className="text-3xl font-bold text-cyan-500 mb-2 tracking-tight">{benefit.stat}</p>
                  )}
                  <div className="text-sm font-bold text-neutral-900 mb-1.5 flex items-baseline gap-1.5">
                    <span className="text-neutral-300 text-xs font-mono">0{index + 1}</span>
                    {benefit.title}
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-16 sm:py-20 px-4 border-b border-black/[0.06]">
        <div className="max-w-7xl px-4 mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Powerful features
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl">
              Everything you need to{" "}
              <span className="font-bold text-5xl lg:text-5xl">deliver with confidence.</span>
            </h2>
            <p className="mt-4 max-w-lg">
              <span className="block border-l-4 border-cyan-400 pl-4">
                <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">Plan faster. Reduce risk.</span>
                <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">Deliver on time.</span>
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
              {solution.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: 0.05 + index * 0.055, ease: EASE }}
                  className="group rounded-lg border border-transparent hover:border-black/[0.06] hover:bg-black/[0.015] transition-all duration-200 p-5"
                >
                  <div className="w-10 h-10 bg-black/[0.04] border border-black/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
                    <span className="text-xl group-hover:grayscale transition-all">{feature.icon}</span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-900 mb-1.5 tracking-tight">{feature.title}</h3>
                  <p className="text-neutral-500 text-xs leading-relaxed font-mono">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "45%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonial ── */}
      {solution.testimonial && (
        <section className="py-16 sm:py-20 px-4 border-b border-black/[0.06]">
          <div className="max-w-7xl px-4 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
              className="rounded-2xl border border-black/[0.07] bg-white p-8 sm:p-12 shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
            >
              <div className="max-w-3xl mx-auto text-center">
                <div className="flex justify-center gap-1 mb-6">
                  {[1,2,3,4,5].map((i) => <Star key={i} className="w-4 h-4 fill-cyan-500 text-cyan-500" />)}
                </div>
                <blockquote className="text-xl sm:text-2xl font-bold text-neutral-900 leading-tight mb-8 tracking-tight">
                  &quot;{solution.testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="h-px w-10 bg-black/10" />
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <div className="h-px w-10 bg-black/10" />
                </div>
                <p className="font-bold text-neutral-900 text-sm">{solution.testimonial.author}</p>
                <p className="text-neutral-400 text-xs mt-1 font-mono">{solution.testimonial.role} · {solution.testimonial.company}</p>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Other Solutions ── */}
      <section className="py-16 sm:py-20 px-4 border-b border-black/[0.06]">
        <div className="max-w-7xl px-4 mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
                Explore more
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl">
                Other <span className="font-bold text-5xl lg:text-5xl">solutions.</span>
              </h2>
            </div>
            <Link href="/solutions" className="inline-flex items-center gap-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group shrink-0">
              <span className="w-9 h-9 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-black/[0.08] transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-neutral-900 group-hover:translate-x-0.5 transition-transform" />
              </span>
              View all
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="grid md:grid-cols-3 gap-1">
              {otherSolutions.slice(0, 3).map((other, i) => (
                <motion.div
                  key={other.slug}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: 0.05 + i * 0.055, ease: EASE }}
                >
                  <Link href={`/solutions/${other.slug}`} className="flex items-center gap-4 rounded-lg border border-transparent hover:border-black/[0.06] hover:bg-black/[0.015] transition-all duration-200 px-4 py-4 group">
                    <span className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-500 shrink-0">{other.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-neutral-900 tracking-tight">{other.title.replace("Space AI for ", "")}</p>
                      <p className="text-xs text-neutral-400 font-mono mt-0.5 truncate">{other.tagline}</p>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300 shrink-0">
                      <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-4 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "25%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4, ease: EASE }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
            className="rounded-2xl border border-black/[0.07] bg-white p-8 sm:p-12 shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
                  Ready to build smarter?
                </span>
                <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl mb-4">
                  Build smarter with{" "}
                  <span className="font-bold text-5xl lg:text-5xl">{solution.title.replace("Space AI for ", "")}.</span>
                </h2>
                <p className="max-w-lg">
                  <span className="block border-l-4 border-cyan-400 pl-4">
                    <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">Join leading contractors and owners using Space AI.</span>
                    <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">Plan faster, reduce risk, deliver on time.</span>
                  </span>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
                <Link href="/request-a-demo" className="inline-flex items-center justify-center gap-2.5 text-sm font-medium bg-neutral-900 text-white px-8 py-3 rounded-full hover:bg-neutral-700 transition-colors shadow-lg shadow-black/10 whitespace-nowrap">
                  <span>{solution.cta.primary}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/request-a-demo" className="inline-flex items-center justify-center gap-2 text-sm font-medium text-neutral-600 border border-black/10 px-8 py-3 rounded-full hover:bg-black/[0.04] hover:text-neutral-900 transition-colors whitespace-nowrap">
                  Talk to Sales
                </Link>
              </div>
            </div>

            <div className="mt-8 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3, ease: EASE }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}