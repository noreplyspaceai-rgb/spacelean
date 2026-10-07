"use client";

import { motion } from "framer-motion";
import { Sparkles, Target, Cpu, Users, Zap } from "lucide-react";
import Link from "next/link";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function CareersClient() {
  return (
    <div className="relative overflow-hidden">
      {/* ─── Hero Section ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-20 border-b border-black/[0.06]">
        {/* Background graphic */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6,182,212,0.4) 1px,transparent 1px),linear-gradient(90deg,rgba(6,182,212,0.4) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute -top-40 right-0 w-[600px] h-[400px] rounded-full bg-cyan-100 blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-indigo-100 blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp(0.05)}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-5 tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" aria-hidden />
              CAREERS
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.1)}
            className="text-4xl sm:text-6xl font-normal tracking-tight leading-tight text-cyan-500 max-w-3xl mb-4"
          >
            Build The{" "}
            <span className="font-bold text-5xl sm:text-7xl text-cyan-500">
              Future
            </span>{" "}
            With SpaceLean
          </motion.h1>

          <motion.p
            {...fadeUp(0.16)}
            className="mt-4 max-w-2xl"
          >
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                Join a team building AI-powered technology for the future of construction.
              </span>
            </span>
          </motion.p>
        </div>
      </section>

      {/* ─── Introduction ─────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-black/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-neutral-900 leading-tight">
              Build Something{" "}
              <span className="font-bold text-cyan-500">
                That Matters
              </span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6">
            <p className="text-base text-neutral-600 leading-relaxed">
              At SpaceLean, we're building intelligent technology to transform the way construction projects are planned, scheduled, and delivered. We bring together construction expertise, artificial intelligence, and modern technology to solve real-world challenges.
            </p>
            <p className="text-base text-neutral-600 leading-relaxed">
              Join us in creating products that help construction teams plan smarter, work more efficiently, and build with greater confidence.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Why Join SpaceLean ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-black/[0.06]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight mb-4">
            Why Join{" "}
            <span className="font-bold text-cyan-500">
              SpaceLean?
            </span>
          </h2>
          <p className="text-base text-neutral-500 leading-relaxed">
            Be part of a team working at the intersection of construction, artificial intelligence, and technology.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="group rounded-2xl bg-white border border-black/[0.08] p-6 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-5 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Build With Purpose</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Work on technology designed to solve real challenges in the construction industry.
            </p>
          </div>
          {/* Card 2 */}
          <div className="group rounded-2xl bg-white border border-black/[0.08] p-6 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-5 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Innovate With AI</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Explore practical applications of AI, automation, and intelligent project planning.
            </p>
          </div>
          {/* Card 3 */}
          <div className="group rounded-2xl bg-white border border-black/[0.08] p-6 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-5 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Grow Together</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Learn, collaborate, and grow with a team focused on building meaningful products.
            </p>
          </div>
          {/* Card 4 */}
          <div className="group rounded-2xl bg-white border border-black/[0.08] p-6 shadow-sm hover:shadow-md hover:border-cyan-500/30 transition-all duration-300">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center text-cyan-600 mb-5 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Make An Impact</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              Your ideas and contributions can help shape the future of SpaceLean.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Life At SpaceLean ────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-black/[0.06]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-normal text-neutral-900 tracking-tight mb-6">
              Life At{" "}
              <span className="font-bold text-cyan-500">
                SpaceLean
              </span>
            </h2>
            <div className="space-y-6">
              <p className="text-base text-neutral-600 leading-relaxed">
                Great products are built by great teams. At SpaceLean, we value collaboration, curiosity, ownership, and a passion for solving difficult problems.
              </p>
              <p className="text-base text-neutral-600 leading-relaxed">
                We believe in sharing ideas, learning from each other, and creating an environment where people can do their best work.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-square">
                <img
                  src="/about-team-2.jpg"
                  alt="SpaceLean collaborative meeting session"
                  className="w-full h-full object-cover object-top hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[3/2]">
                <img
                  src="/about-team-celebration.jpg"
                  alt="SpaceLean team celebrating milestone"
                  className="w-full h-full object-cover object-top hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="rounded-2xl overflow-hidden shadow-md aspect-[2/3] w-full">
                <img
                  src="/about-team-3.jpg"
                  alt="SpaceLean full team gathering"
                  className="w-full h-full object-cover object-center hover:scale-[1.04] transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ─── Final CTA ────────────────────────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="max-w-2xl mx-auto bg-gradient-to-tr from-cyan-900 to-neutral-900 text-white rounded-3xl p-10 shadow-xl relative overflow-hidden">
          {/* Subtle decoration */}
          <div aria-hidden className="absolute -top-16 -right-16 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
          <div aria-hidden className="absolute -bottom-16 -left-16 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl" />
          
          <h2 className="text-3xl font-bold !text-white mb-4 relative z-10" style={{ color: "#ffffff" }}>Ready To Build The Future?</h2>
          <p className="text-sm text-neutral-300 leading-relaxed mb-8 max-w-md mx-auto relative z-10">
            Explore opportunities to be part of SpaceLean and help shape the future of construction technology.
          </p>
          <div className="relative z-10">
            <Link
              href="/request-a-demo"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-neutral-900 text-sm font-semibold px-6 py-3 hover:bg-cyan-100 transition-colors duration-200"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
