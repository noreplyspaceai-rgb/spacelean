"use client";

import { ComparisonData } from '@/lib/compare-data';
import { Check, X, ArrowRight, Star, HelpCircle, Lightbulb, ShieldCheck, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';
import { span } from 'framer-motion/client';

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

interface ComparisonDetailProps {
  data: ComparisonData;
}

export default function ComparisonDetail({ data }: ComparisonDetailProps) {
  const tableRef = useRef(null);
  const deepRef = useRef(null);
  const useCaseRef = useRef(null);
  const faqRef = useRef(null);
  const verdictRef = useRef(null);

  const tableView = useInView(tableRef, { once: true, margin: "-60px" });
  const deepView = useInView(deepRef, { once: true, margin: "-60px" });
  const useCaseView = useInView(useCaseRef, { once: true, margin: "-60px" });
  const faqView = useInView(faqRef, { once: true, margin: "-60px" });

  return (
    <div className="bg-white">

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col items-start text-left">

          {/* Badge */}
          <motion.div {...fadeUp(0.08)}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Head-to-Head Comparison
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            {...fadeUp(0.12)}
            className="text-3xl sm:text-5xl font-normal lg:text-5xl tracking-tight leading-tight text-cyan-500 max-w-3xl"
          >
            SpaceLean <br />
            <span className="font-bold text-5xl sm:text-6xl lg:text-6xl text-cyan-500">
              vs {data.competitorName}
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p {...fadeUp(0.18)} className="mt-6 max-w-lg">
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                Not just a better UI.
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                A fundamentally smarter platform.
              </span>
            </span>
          </motion.p>

          {/* Summary */}
          <motion.p
            {...fadeUp(0.22)}
            className="mt-5 text-sm text-neutral-500 leading-relaxed max-w-xl"
          >
            {data.summary}
          </motion.p>
        </div>
      </section>

      {/* ── Comparison Table ─────────────────────────────────────────── */}
      <section ref={tableRef} className="py-20 border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Section label */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={tableView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Feature Breakdown
            </span>
          </motion.div>

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={tableView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="rounded-2xl border border-black/[0.07] overflow-hidden shadow-sm"
          >
            <div className="overflow-x-auto">
              {/* Table header */}
              <div className="grid grid-cols-3 bg-black/[0.02] px-4 sm:px-8 py-5 border-b border-black/[0.06] min-w-[480px]">
                <div className="col-span-1 text-[10px] font-bold text-neutral-400 uppercase tracking-widest self-center">
                  Feature Capability
                </div>
                <div className="col-span-1 text-center">
                  <span className="text-sm font-semibold text-cyan-500">SpaceLean</span>
                </div>
                <div className="col-span-1 text-center">
                  <span className="text-sm font-semibold text-neutral-400">{data.competitorName}</span>
                </div>
              </div>

              <div className="divide-y divide-black/[0.04] min-w-[480px]">
                {data.features.map((category) => (
                  <div key={category.category}>
                    {/* Category row */}
                    <div className="px-4 sm:px-8 py-3 bg-black/[0.015] text-[10px] font-bold text-neutral-400 uppercase tracking-[0.2em] border-y border-black/[0.04]">
                      {category.category}
                    </div>

                    {category.items.map((item) => (
                      <div
                        key={item.name}
                        className="grid grid-cols-3 px-4 sm:px-8 py-5 hover:bg-black/[0.015] transition-colors"
                      >
                        <div className="col-span-1 text-sm font-medium text-neutral-800 flex items-center">
                          {item.name}
                        </div>

                        {/* SpaceLean cell */}
                        <div className="col-span-1 flex justify-center items-center">
                          {item.spacelean === true ? (
                            <span className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-white" />
                            </span>
                          ) : (
                            <span className="text-cyan-500 font-semibold text-xs tracking-wide">
                              {item.spacelean}
                            </span>
                          )}
                        </div>

                        {/* Competitor cell */}
                        <div className="col-span-1 flex justify-center items-center">
                          {item.competitor === true ? (
                            <span className="w-7 h-7 rounded-full bg-black/[0.04] border border-black/[0.08] flex items-center justify-center">
                              <Check className="w-3.5 h-3.5 text-neutral-400" />
                            </span>
                          ) : item.competitor === false ? (
                            <span className="w-7 h-7 rounded-full bg-black/[0.04] border border-black/[0.08] flex items-center justify-center">
                              <X className="w-3.5 h-3.5 text-neutral-300" />
                            </span>
                          ) : (
                            <span className="text-neutral-400 text-xs tracking-wide">{item.competitor}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Deep Dive ────────────────────────────────────────────────── */}
      <section ref={deepRef} className="py-20 border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <motion.div
                initial={{ y: 24, opacity: 0 }}
                animate={deepView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
                  The AI Differentiator
                </span>

                <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 mb-6">
                  What makes us{" "}
                  <span className="font-bold text-5xl lg:text-5xl text-cyan-500">
                    fundamentally different.
                  </span>
                </h2>

                <p className="mb-5 max-w-lg">
                  <span className="block border-l-4 border-cyan-400 pl-4">
                    <span className="block text-base font-mono text-neutral-500 leading-relaxed">
                      Legacy tools manage tasks.
                    </span>
                    <span className="block text-base font-mono font-semibold text-cyan-500 leading-relaxed">
                      SpaceLean manages outcomes.
                    </span>
                  </span>
                </p>
              </motion.div>

              <div className="mt-8 space-y-8">
                {data.featuresDeepDive.map((dive, i) => (
                  <motion.div
                    key={dive.title}
                    initial={{ x: -12, opacity: 0 }}
                    animate={deepView ? { x: 0, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}
                    className="flex items-start gap-3"
                  >
                    {/* Dot — HeroSection two-layer bullet */}
                    <span className="w-5 h-5 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-800 mb-1">{dive.title}</p>
                      <p className="text-sm text-neutral-500 leading-relaxed">{dive.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — when to stick with competitor */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={deepView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.14, ease: EASE }}
              className="bg-black/[0.02] border border-black/[0.07] rounded-2xl p-8"
            >
              <p className="text-[11px] font-medium text-neutral-400 uppercase tracking-widest mb-4">
                When to stick with {data.competitorName}
              </p>
              <ul className="pros-cons space-y-4 mb-8">
                {data.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300" />
                    </span>
                    <span className="text-sm text-neutral-600 leading-relaxed">{pro}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-black/[0.06]">
                <p className="text-[10px] font-bold uppercase text-neutral-400 tracking-widest mb-4">
                  Known Limitations
                </p>
                <ul className="pros-cons space-y-3">
                  {data.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <X className="w-2.5 h-2.5 text-neutral-400" />
                      </span>
                      <span className="text-xs text-neutral-500 leading-relaxed">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Use Cases ────────────────────────────────────────────────── */}
      <section ref={useCaseRef} className="py-20 border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={useCaseView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Best Applied In
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500">
              Where SpaceLean{" "}
              <span className="font-bold text-cyan-500">wins the most.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {data.useCases.map((useCase, i) => (
              <motion.div
                key={useCase.title}
                initial={{ y: 20, opacity: 0 }}
                animate={useCaseView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.1 + i * 0.08, ease: EASE }}
                className="bg-black/[0.02] border border-black/[0.07] rounded-2xl p-7 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                {/* Icon dot — HeroSection two-layer circle */}
                <span className="w-9 h-9 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-4 h-4 text-cyan-500" />
                </span>
                <h3 className="text-sm font-semibold text-neutral-800 mb-2">{useCase.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ─────────────────────────────────────────────────────── */}
      <section ref={faqRef} className="py-20 border-t border-black/[0.06]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={faqView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Common Questions
            </span>
            <h2 className="text-3xl font-normal tracking-tight leading-tight text-cyan-500">
              Things people{" "}
              <span className="font-bold text-cyan-500">always ask.</span>
            </h2>
          </motion.div>

          <div className="space-y-6">
            {data.faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                initial={{ y: 16, opacity: 0 }}
                animate={faqView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: EASE }}
                className="border-b border-black/[0.06] pb-6"
              >
                <h3 className="text-sm font-semibold text-neutral-800 mb-3 flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <HelpCircle className="w-2.5 h-2.5 text-cyan-500" />
                  </span>
                  {faq.question}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Verdict ──────────────────────────────────────────────────── */}
      <section ref={verdictRef} className="py-32 border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="flex flex-col lg:flex-row items-start gap-16"
          >
            {/* Left: verdict copy */}
            <div className="flex-1">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
                The Verdict
              </span>

              <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl mt-2">
                The clearer choice{" "}
                <span className="font-bold text-5xl lg:text-5xl text-cyan-500">
                  for AI-native teams.
                </span>
              </h2>

              <p className="mt-6 max-w-lg">
                <span className="block border-l-4 border-cyan-400 pl-4">
                  <span className="block text-base font-mono text-neutral-500 leading-relaxed">
                    {data.verdict}
                  </span>
                </span>
              </p>
            </div>

            {/* Right: CTAs */}
            <div className="flex-1 flex flex-col items-start gap-4 lg:pt-16">
              <Link
                href="https://cad.spaceaiapp.com/lean"
                className="inline-flex items-center gap-2.5 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-semibold px-8 py-3.5 rounded-full transition-colors"
              >
                Experience the AI Advantage
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/request-a-demo"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group"
              >
                <span className="w-9 h-9 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-black/[0.08] transition-colors">
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-900" />
                </span>
                Request a personalised demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}