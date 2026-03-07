"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Check, Star, Sparkles } from "lucide-react";
import { useState } from "react";
import { Solution, SolutionsNav } from "@/lib/solutions-data";

// ─────────────────────────────────────────────
// EXPANDING PANEL CARD  (Alice-style)
// ─────────────────────────────────────────────

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
  const shortTitle = solution.title.replace("Space AI for ", "");

  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: 0.06 * idx }}
      onClick={onActivate}
      className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] text-left
        ${isActive ? "flex-[5]" : "flex-[1] hover:flex-[1.4]"}
      `}
      style={{ minWidth: 0 }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={solution.heroImage}
          alt={shortTitle}
          fill
          className={`object-cover transition-all duration-700 ${
            isActive ? "scale-105 grayscale-0" : "scale-100 grayscale"
          }`}
        />
        {/* Dark gradient overlay */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isActive
              ? "bg-gradient-to-t from-black/80 via-black/40 to-black/10"
              : "bg-black/55"
          }`}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-7 min-h-[340px]">
        {/* Vertical label — shown when collapsed */}
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
                className="text-white/70 text-xs font-bold tracking-[0.22em] uppercase whitespace-nowrap"
                style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              >
                {shortTitle}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Expanded content */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="space-y-3"
            >
              <span className="text-2xl">{solution.icon}</span>
              <h3 className="text-2xl sm:text-3xl font-bold !text-white leading-tight tracking-tight">
                For<br />{shortTitle}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed max-w-xs">
                {solution.tagline}
              </p>
              <div className="pt-2">
                <Link
                  href={`/solutions/${solution.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 border border-white/40 text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
                >
                  Learn more
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.button>
  );
}

// ─────────────────────────────────────────────
// SOLUTION GROUP  (horizontal panel row)
// ─────────────────────────────────────────────

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
        <span className="text-[10px] font-bold tracking-[0.18em] uppercase text-gray-400">
          {label}
        </span>
        <div className="flex-1 h-px bg-black/6" />
      </div>

      {/* Horizontal expanding panel strip */}
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

// ─────────────────────────────────────────────
// SOLUTIONS INDEX CLIENT
// ─────────────────────────────────────────────

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
    <div className="max-w-7xl mx-auto px-8">

      {/* Hero */}
      <section className="pt-10 pb-8 border-b border-black/8">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400 mb-2">
              AI-Native Construction Intelligence
            </p>
            <h1 className="text-2xl sm:text-3xl text-black tracking-tight leading-snug">
              Solutions for Every Stakeholder
              <span className="text-gray-300"> & Project.</span>
            </h1>
          </div>
          <p className="text-xs text-gray-400 max-w-xs leading-relaxed sm:text-right">
            From GCs to owners, industrial to commercial —<br className="hidden sm:block" />
            Space AI adapts to how your project is delivered.
          </p>
        </motion.div>

     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4, delay: 0.15 }}
  className="flex gap-3 mt-5"
>
  {[
    { href: "#stakeholder", label: "Stakeholder" },
    { href: "#project-type", label: "Project Type" },
    { href: "#solutions", label: "Partners" },
  ].map((item) => (
    <a
      key={item.href}
      href={item.href}
      className="text-[11px] font-bold tracking-wide uppercase text-gray-100 
      bg-gray-800 hover:bg-gray-400 
      px-3 py-3 rounded-full 
      transition-all duration-200"
    >
      {item.label}
    </a>
  ))}
</motion.div>
      </section>

      {/* Groups */}
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

      {/* Bottom CTA */}
      {/* <section className="border-t border-black/8 py-8 mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm font-bold text-black">Ready to build smarter?</p>
          <p className="text-xs text-gray-400 mt-0.5">
            Convert your BIM model into an AI-generated schedule — in hours.
          </p>
        </div>
        <div className="flex gap-2.5 shrink-0">
          <Link
            href="/request-a-demo"
            className="inline-flex items-center gap-1.5 bg-black text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
          >
            Request a Demo <ArrowRight className="w-3 h-3" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center text-xs font-bold text-gray-500 hover:text-black transition-colors border border-black/10 px-4 py-2 rounded-full hover:border-black/25"
          >
            Talk to Sales
          </Link>
        </div>
      </section> */}

    </div>
  );
}

// ─────────────────────────────────────────────
// SOLUTION DETAIL CLIENT (unchanged)
// ─────────────────────────────────────────────

export function SolutionDetailClient({
  solution,
  otherSolutions,
}: {
  solution: Solution;
  otherSolutions: Solution[];
}) {
  return (
    <>
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] border border-black/5 rounded-full translate-x-1/4 -translate-y-1/4 pointer-events-none" />

      <section className="relative z-10 pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
              <Link href="/solutions" className="inline-flex items-center gap-2 text-gray-400 hover:text-black mb-10 group transition-colors" prefetch={false}>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span className="text-sm font-bold tracking-wide uppercase">All Solutions</span>
              </Link>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-white border border-black/10 rounded-2xl flex items-center justify-center text-3xl shadow-sm">{solution.icon}</div>
                <div className="h-px w-8 bg-black/10" />
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">{solution.title.replace("Space AI for ", "")}</span>
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold text-black mb-8 tracking-tighter leading-[1.1]">{solution.tagline}</h1>
              <p className="text-xl sm:text-2xl text-gray-500 mb-12 leading-relaxed font-light">{solution.description}</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/request-a-demo" className="inline-flex items-center justify-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-xl shadow-black/20">
                  <span>{solution.cta.primary}</span><ArrowRight className="w-5 h-5" />
                </Link>
                <Link href="/request-a-demo" className="inline-flex items-center justify-center gap-2 border border-black/10 text-black px-10 py-4 rounded-full font-bold hover:bg-black/5 transition-all">
                  <span>{solution.cta.secondary}</span>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl shadow-black/10 border border-black/5">
                <Image src={solution.heroImage} alt={solution.title} fill className="object-cover grayscale hover:grayscale-0 transition-all duration-1000" priority />
              </div>
              {solution.benefits[0]?.stat && (
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-black/5">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">{solution.benefits[0].title}</p>
                  <p className="text-2xl font-bold text-black">{solution.benefits[0].stat}</p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4 bg-black text-white rounded-[4rem] my-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center p-10 sm:p-20">
            <div>
              <h2 className="text-4xl sm:text-6xl font-bold mb-8 tracking-tighter">Built for your <br /><span className="text-gray-500">workflow.</span></h2>
              <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed">Space AI integrates with the tools and processes your team already depends on.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {solution.useCases.map((useCase, index) => (
                  <div key={index} className="flex items-center gap-4 bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors group">
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors shrink-0"><Check className="w-4 h-4" /></div>
                    <span className="text-gray-300 font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group/mockup">
              <div className="absolute -inset-20 bg-blue-500/10 rounded-full blur-[100px] opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden border border-white/10 bg-[#0a0a0a] p-1 shadow-2xl">
                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/5 bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/20 border border-red-400/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/20 border border-yellow-400/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/20 border border-green-400/40" />
                  </div>
                  <div className="ml-4 px-4 py-1 bg-white/5 rounded-full text-[8px] font-bold text-gray-500 uppercase tracking-widest border border-white/5">app.spaceai.com / dashboard</div>
                </div>
                <div className="p-8 h-full flex flex-col gap-6">
                  <div className="flex-1 rounded-2xl border border-white/5 bg-white/[0.01] p-6 relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                      <div className="space-y-2"><div className="w-24 h-2 bg-white/10 rounded" /><div className="w-48 h-4 bg-white/20 rounded" /></div>
                      <div className="w-8 h-8 rounded-full bg-white/10" />
                    </div>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-white/[0.02] bg-white/[0.02]">
                          <div className="w-4 h-4 rounded border border-white/20" /><div className="w-full h-2 bg-white/10 rounded" />
                        </div>
                      ))}
                    </div>
                    <motion.div animate={{ y: [-20, -30, -20] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute top-12 right-12 w-48 bg-white p-6 rounded-2xl shadow-2xl shadow-black/50 border border-black/5">
                      <div className="flex items-center gap-3 mb-4"><div className="w-2 h-2 rounded-full bg-green-500" /><span className="text-[10px] font-bold text-black uppercase tracking-widest leading-none">Critical Path</span></div>
                      <div className="flex items-end gap-1.5 h-16">
                        {[40, 70, 45, 90, 65, 80].map((h, i) => (
                          <div key={i} className="flex-1 bg-gray-100 rounded-sm overflow-hidden relative">
                            <motion.div initial={{ height: 0 }} whileInView={{ height: `${h}%` }} className="absolute bottom-0 left-0 right-0 bg-black" />
                          </div>
                        ))}
                      </div>
                    </motion.div>
                    <motion.div animate={{ y: [80, 90, 80] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-12 left-12 w-64 bg-black text-white p-6 rounded-2xl shadow-2xl border border-white/10">
                      <div className="flex items-center gap-3 mb-4 text-blue-400"><Sparkles className="w-4 h-4" /><span className="text-[10px] font-bold uppercase tracking-widest">AI Insight</span></div>
                      <div className="text-sm font-medium leading-relaxed text-gray-300">Zone B has <span className="text-white">87% delay probability</span> — resequencing trades recommended.</div>
                      <div className="mt-4 flex gap-2">
                        <div className="px-3 py-1 bg-white/10 rounded-full text-[9px] font-bold uppercase tracking-tight">Resequence</div>
                        <div className="px-3 py-1 text-gray-500 rounded-full text-[9px] font-bold uppercase tracking-tight">Dismiss</div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="w-12 h-1 bg-black mb-6" />
            <h2 className="text-4xl sm:text-5xl font-bold text-black tracking-tighter mb-6">Measurable impact. <br className="hidden sm:block" /><span className="text-gray-300">No guesswork.</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {solution.benefits.map((benefit, index) => (
              <div key={index} className="group bg-[#fafafa] rounded-3xl p-8 border border-black/5 hover:border-black/20 transition-all duration-500">
                {benefit.stat && <p className="text-4xl font-bold text-black mb-3 tracking-tighter">{benefit.stat}</p>}
                <div className="text-lg font-bold text-black mb-4 flex items-baseline gap-2"><span className="text-gray-300 text-sm font-mono">0{index + 1}</span>{benefit.title}</div>
                <p className="text-gray-500 text-base leading-relaxed font-light">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {solution.seoContent && (
        <section className="relative z-10 py-24 px-4 bg-white border-b border-black/5">
          <div className="max-w-4xl mx-auto">
            {solution.seoContent.split("\n\n").map((p, i) => (
              <p key={i} className="mb-6 text-gray-600 text-lg leading-relaxed">{p}</p>
            ))}
          </div>
        </section>
      )}

      <section className="relative z-10 py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-6xl font-bold text-black mb-8 tracking-tighter">Powerful features built for your team.</h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed">Everything you need to plan, execute, and deliver with confidence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {solution.features.map((feature, index) => (
              <div key={index} className="group bg-white rounded-3xl border border-black/5 p-10 hover:border-black/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                <div className="w-16 h-16 bg-gray-50 border border-black/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all duration-500"><span className="text-3xl">{feature.icon}</span></div>
                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {solution.testimonial && (
        <section className="relative z-10 py-32 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-black/5 rounded-[3rem] p-12 sm:p-20 text-center shadow-2xl shadow-black/5">
              <div className="mb-12 flex justify-center">
                <div className="flex gap-1 text-black">{[1,2,3,4,5].map((i) => <Star key={i} className="w-6 h-6 fill-black" />)}</div>
              </div>
              <blockquote className="text-2xl sm:text-4xl text-black font-bold leading-tight mb-12 tracking-tight">&quot;{solution.testimonial.quote}&quot;</blockquote>
              <div className="h-px w-20 bg-black/10 mx-auto mb-8" />
              <p className="font-bold text-black">{solution.testimonial.author}</p>
              <p className="text-gray-400 text-sm mt-1">{solution.testimonial.role} · {solution.testimonial.company}</p>
            </div>
          </div>
        </section>
      )}

      <section className="relative z-10 py-32 px-4 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-black tracking-tighter mb-4">Explore other solutions.</h2>
              <p className="text-xl text-gray-500 font-light">AI-powered intelligence for every project type and stakeholder.</p>
            </div>
            <Link href="/solutions" className="inline-flex items-center gap-3 text-black font-bold text-lg border-b-2 border-black pb-1 hover:text-gray-500 hover:border-black/20 transition-all">
              <span>View all solutions</span><ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {otherSolutions.slice(0, 3).map((other) => (
              <Link key={other.slug} href={`/solutions/${other.slug}`} className="group bg-white rounded-3xl border border-black/5 p-10 hover:border-black/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-4xl grayscale group-hover:grayscale-0 transition-all duration-500">{other.icon}</span>
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-500">
                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">{other.title.replace("Space AI for ", "")}</h3>
                <p className="text-gray-500 text-lg font-light leading-relaxed">{other.tagline}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-32 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl sm:text-7xl font-bold text-black mb-10 tracking-tighter leading-tight">
            Ready to build smarter with <br /><span className="text-gray-300">{solution.title.replace("Space AI for ", "")}?</span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Join leading contractors and owners using Space AI to plan faster, reduce risk, and deliver on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/request-a-demo" className="inline-flex items-center justify-center gap-3 bg-black text-white px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl shadow-black/20">
              <span>{solution.cta.primary}</span><ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/request-a-demo" className="inline-flex items-center justify-center gap-2 border border-black/10 text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-black/5 transition-all">
              <span>Talk to Sales</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}