"use client";

import { motion, useInView } from "framer-motion";
import {
   Globe,
   Sparkles,
  Zap, Shield, Target, Brain, MapPin, ExternalLink, CheckCircle2, XCircle,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import WorldMapDemo from "./world-map-demo";

interface AboutClientProps {
  values: { title: string; description: string; icon: string }[];
  stats:  { number: string; label: string }[];
}

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let t0: number | null = null;
    const tick = (ts: number) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [target, duration, start]);
  return count;
}

function StatCard({ number, suffix, label, delay, animate }: {
  number: string; suffix: string; label: string; delay: number; animate: boolean;
}) {
  const n = parseInt(number);
  const c = useCounter(n, 2000, animate);
  return (
    <motion.div
      className="text-center border backdrop-blur-sm border-white/20 bg-white/10 p-3"
      initial={{ opacity: 0, y: 16 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000, ease: EASE }}
    >
      <p className="text-3xl font-bold tracking-tight text-cyan-500 mb-0.5">
        {animate ? `${c}${suffix}` : `0${suffix}`}
      </p>
      <p className="text-xs text-white uppercase tracking-widest font-medium">{label}</p>
    </motion.div>
  );
}

const pillars = [
  { Icon: Zap,    title: "Intelligent Automation",  desc: "From upload to optimised plan in minutes — no manual setup required." },
  { Icon: Shield, title: "Risk-Aware Planning",      desc: "Probabilistic forecasting surfaces hidden risks before they become delays." },
  { Icon: Target, title: "Adaptive Scheduling",      desc: "Plans that self-correct in real time as site conditions change." },
  { Icon: Brain,  title: "Multi-Trade Coordination", desc: "Every crew and trade knows exactly what to do and when." },
];

const parsedStats = [
  { number: "40", suffix: "%",   label: "Productivity Boost" },
  { number: "10", suffix: "K+",  label: "Active Users" },
  { number: "50", suffix: "M+",  label: "Tasks Managed" },
  { number: "99", suffix: ".9%", label: "Uptime" },
];

const comparisonRows = [
  { feature: "Schedule creation",  traditional: "Manual",   ai: "Automatic"    },
  { feature: "Delay detection",    traditional: "Reactive", ai: "Predictive"   },
  { feature: "Logic building",     traditional: "Manual",   ai: "AI-generated" },
  { feature: "Resource planning",  traditional: "Manual",   ai: "Optimized"    },
  { feature: "Schedule updates",   traditional: "Weekly",   ai: "Real-time"    },
];

const grain: React.CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat",
  backgroundSize: "128px 128px",
};

// ── presence data ──────────────────────────────────────────────────────────────
const presenceLocations = [
  {
    country: "USA",
    role: "Headquarters",
    address: "2500 Marconi Ave, STE 101,\nSacramento, CA 95821 USA",
    lat: 38.62, lng: -121.38,
    color: "#7c3aed",
    mapsUrl: "https://maps.google.com/?q=2500+Marconi+Ave+Sacramento+CA",
  },
  {
    country: "Singapore",
    role: "Regional Headquarters",
    address: "iSpace Building #04-39,\n7 Soon Lee Street,\nSingapore 627608",
    lat: 1.34, lng: 103.7,
    color: "#0891b2",
    mapsUrl: "https://maps.google.com/?q=7+Soon+Lee+Street+Singapore",
  },
  {
    country: "Dubai",
    role: "Middle East – Regional Office",
    address: "25.28°, 55.31°",
    lat: 25.28, lng: 55.31,
    color: "#d97706",
    mapsUrl: "https://maps.google.com/?q=25.28,55.31",
  },
  {
    country: "India",
    role: "Technology and R&D",
    address: "8.91°, 76.69°",
    lat: 8.91, lng: 76.69,
    color: "#059669",
    mapsUrl: "https://maps.google.com/?q=8.91,76.69",
  },
  {
    country: "Kuwait",
    role: "Strategic Partner for Gulf Region",
    address: "29.08°, 48.13°",
    lat: 29.08, lng: 48.13,
    color: "#0891b2",
    mapsUrl: "https://maps.google.com/?q=29.08,48.13",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
export default function AboutClient({ values }: AboutClientProps) {
  const missionRef    = useRef<HTMLDivElement>(null);
  const missionView   = useInView(missionRef,    { once: true, margin: "-60px" });
  const visionRef     = useRef<HTMLDivElement>(null);
  const visionView    = useInView(visionRef,     { once: true, margin: "-60px" });
  const pillarsRef    = useRef<HTMLDivElement>(null);
  const pillarsView   = useInView(pillarsRef,    { once: true, margin: "-60px" });
  const presenceRef   = useRef<HTMLDivElement>(null);
  const presenceView  = useInView(presenceRef,   { once: true, margin: "-60px" });
  const comparisonRef = useRef<HTMLDivElement>(null);
  const comparisonView= useInView(comparisonRef, { once: true, margin: "-60px" });

  return (
    <div className="relative overflow-hidden">

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden">
        <div className="relative w-full mt-20 overflow-hidden rounded-2xl max-w-7xl mx-auto px-6" style={{ height: "88vh", minHeight: 560 }}>
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/175571-853887894_medium.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)", backgroundSize: "56px 56px" }} />
          <section ref={visionRef} className="relative z-10 px-4 flex items-center h-full">
            <div className="w-full shadow-md">
              <div className="px-8 md:px-14 py-14 w-full">
                <motion.div initial={{ y: 24, opacity: 0 }} animate={visionView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7, ease: EASE }}>
                  <span className="inline-flex items-center gap-2 text-xs font-medium text-white bg-black/20 border border-white/20 rounded-full px-3 py-1 mb-5 tracking-wide">
                    <Sparkles className="w-3.5 h-3.5 text-gray-100" />Our Vision
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-normal tracking-tight leading-tight !text-cyan-500 mb-5">
                    The first truly <br /><span className="text-white font-semibold">AI-native construction platform.</span>
                  </h2>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-6">Every project improves the platform. Geometry becomes logic automatically. Teams focus on decisions while AI manages the complexity.</p>
                  <ul className="space-y-3 text-white mb-10">
                    {["Eliminate manual dependency setup forever","Surface risk before it becomes a delay","Outperform legacy tools on intelligence, not just UI","Every project makes the platform smarter"].map((item, i) => (
                      <motion.li key={i} initial={{ x: -12, opacity: 0 }} animate={visionView ? { x: 0, opacity: 1 } : {}} transition={{ duration: 0.45, delay: 0.15 + i * 0.08, ease: EASE }} className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-black/20 border border-white/20 flex items-center justify-center flex-shrink-0 mt-0.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500" /></span>
                        <span className="text-lg font-bold">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div initial={{ y: 24, opacity: 0 }} animate={visionView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.12, ease: EASE }} className="w-full flex flex-wrap justify-between gap-8 rounded-2xl shadow-md">
                  {parsedStats.map((s, i) => (
                    <div key={i} className="flex-1 min-w-[160px]">
                      <StatCard number={s.number} suffix={s.suffix} label={s.label} delay={i * 120} animate={visionView} />
                    </div>
                  ))}
                  <div className="w-full pt-4 border-t border-white/20 text-center">
                    <p className="text-xs text-neutral-300 tracking-widest">Powering the next generation of construction teams</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ══ MISSION ══ */}
      <section ref={missionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ y: 28, opacity: 0 }} animate={missionView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7, ease: EASE }}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-5 tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />Our Mission
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight leading-tight text-cyan-500 max-w-xl mb-5">
              Smarter planning, <br /><span className="text-neutral-800 font-semibold">from day one.</span>
            </h2>
            <p className="text-base text-neutral-500 leading-relaxed mb-4">Construction projects fall behind not because of bad materials — but because of poor sequencing, misaligned teams, and reactive planning. We exist to fix that.</p>
            <p className="text-base text-neutral-500 leading-relaxed">SpaceLean turns your project data into an intelligent plan that understands dependencies, optimises sequences automatically, and adapts in real time.</p>
            <div className="mt-8 relative max-w-lg">
              <span className="absolute -top-4 -left-3 text-7xl leading-none text-cyan-200 font-serif select-none">&ldquo;</span>
              <p className="relative font-mono z-10 pl-6 text-sm text-neutral-600 font-semibold leading-relaxed">We don&apos;t link plans to schedules.<span className="text-cyan-500"> We generate them.</span></p>
              <span className="absolute -bottom-8 -right-4 text-7xl leading-none text-cyan-200 font-serif select-none">&rdquo;</span>
            </div>
          </motion.div>
          <motion.div initial={{ y: 28, opacity: 0 }} animate={missionView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7, delay: 0.12, ease: EASE }} className="hidden lg:block">
            <div className="rounded-2xl border border-black/8 overflow-hidden shadow-md" style={{ ...grain, backgroundColor: "#0d1b2a" }}>
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/8">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" /><span className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" /><span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                <span className="ml-3 text-[10px] text-white/25 font-mono tracking-widest">planning_engine.py</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-1 text-gray-400">
                <p><span className="text-purple-400">from</span> <span className="text-cyan-300">spacelean</span> <span className="text-purple-400">import</span> PlanningEngine</p>
                <p className="text-gray-600">...</p>
                <p className="mt-3 text-green-400/80"># Detect dependencies automatically</p>
                <p><span className="text-cyan-300">engine</span>.<span className="text-white/70">infer_dependencies</span>(project)</p>
                <p><span className="text-cyan-300">engine</span>.<span className="text-white/70">assign_zones</span>(project)</p>
                <p className="mt-3 text-green-400/80"># Generate optimised schedule</p>
                <p><span className="text-orange-300">plan</span> = <span className="text-cyan-300">engine</span>.<span className="text-white/70">optimise</span>(project)</p>
              </div>
              <div className="px-6 py-3 border-t border-white/8 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] text-green-400 font-mono">Ready — plan generated in 4.2s</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══ PILLARS ══ */}
      <section ref={pillarsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map(({ Icon, title, desc }, i) => (
            <motion.div key={i} initial={{ y: 24, opacity: 0 }} animate={pillarsView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              className="p-5 rounded-2xl border border-black/8 shadow-md group hover:border-cyan-500/25 hover:-translate-y-1 transition-all duration-300"
              style={{ ...grain, backgroundColor: "#f8fafc" }}>
              <div className="w-8 h-8 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-colors">
                <Icon className="w-4 h-4 text-neutral-700 group-hover:text-cyan-500 transition-colors" />
              </div>
              <h3 className="text-neutral-800 font-semibold text-sm mb-1.5 leading-snug">{title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ IMPACT COMPARISON ══ */}
      <section ref={comparisonRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={comparisonView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-5 tracking-wide">
            <Zap className="w-3.5 h-3.5 text-cyan-500" />Why It Matters
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-800">
            Impact on Construction Planning
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 28, opacity: 0 }}
          animate={comparisonView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="rounded-2xl border border-black/8 shadow-md overflow-hidden"
          style={{ ...grain, backgroundColor: "#f8fafc" }}
        >
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-black/8">
            <div className="px-6 py-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Feature</span>
            </div>
            <div className="px-6 py-4 border-l border-black/8 bg-black/[0.02]">
              <span className="text-xs font-semibold uppercase tracking-widest text-neutral-400">Traditional CPM</span>
            </div>
            <div className="px-6 py-4 border-l border-black/8 bg-cyan-500/5">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span className="text-xs font-semibold uppercase tracking-widest text-cyan-600">AI Scheduling</span>
              </div>
            </div>
          </div>

          {/* Table rows */}
          {comparisonRows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -12 }}
              animate={comparisonView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.2 + i * 0.07, ease: EASE }}
              className={`grid grid-cols-3 ${i < comparisonRows.length - 1 ? "border-b border-black/[0.06]" : ""} group hover:bg-cyan-500/[0.02] transition-colors duration-200`}
            >
              <div className="px-6 py-4 flex items-center">
                <span className="text-sm text-neutral-700 font-medium">{row.feature}</span>
              </div>
              <div className="px-6 py-4 border-l border-black/[0.06] bg-black/[0.01] flex items-center gap-2">
                <XCircle className="w-3.5 h-3.5 text-neutral-300 flex-shrink-0" />
                <span className="text-sm text-neutral-400">{row.traditional}</span>
              </div>
              <div className="px-6 py-4 border-l border-black/[0.06] bg-cyan-500/[0.03] flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 flex-shrink-0" />
                <span className="text-sm text-cyan-700 font-medium">{row.ai}</span>
              </div>
            </motion.div>
          ))}

          {/* Footer callout */}
          <div className="px-6 py-4 border-t border-black/8 bg-gradient-to-r from-cyan-500/5 to-transparent flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse flex-shrink-0" />
            <p className="text-xs text-neutral-500 leading-relaxed">
              SpaceLean replaces every manual step with intelligence — so your team spends time building, not planning.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ══ VALUES ══ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-5 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-neutral-900" />What We Stand For
        </span>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-800 mb-7">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
            <motion.div key={i} initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, margin: "-40px" }} transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
              className="p-5 rounded-2xl border border-black/8 shadow-md hover:border-cyan-500/25 hover:-translate-y-1 transition-all duration-300"
              style={{ ...grain, backgroundColor: "#f8fafc" }}>
              <div className="text-2xl mb-3">{v.icon}</div>
              <h3 className="text-neutral-800 font-semibold text-sm mb-1.5">{v.title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GLOBAL PRESENCE  — white theme with Aceternity WorldMap
      ══════════════════════════════════════════════════════ */}
      <section ref={presenceRef} className="w-full bg-white py-20 border-t border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* heading */}
          <motion.div
            className="text-center mb-10"
            initial={{ y: 24, opacity: 0 }}
            animate={presenceView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium text-cyan-700 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1 mb-5 tracking-wide">
              <Globe className="w-3.5 h-3.5" />
              Where We Operate
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-neutral-900 tracking-tight mb-3">
              Global Presence
            </h2>
            <p className="text-neutral-500 text-sm max-w-lg mx-auto leading-relaxed">
              Leverage our expertise in various locations to deliver tailored construction solutions for your unique needs.
            </p>
          </motion.div>

          <WorldMapDemo/>

          {/* location cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {presenceLocations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                animate={presenceView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: EASE }}
                className="relative p-5 rounded-2xl border border-black/[0.07] bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                style={{ borderLeftWidth: 3, borderLeftColor: loc.color }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: loc.color }} />
                  <span className="text-neutral-900 font-semibold text-sm">{loc.country}</span>
                </div>
                <p className="text-neutral-500 text-xs leading-relaxed mb-2">{loc.role}</p>
                <p className="text-neutral-400 text-[11px] leading-relaxed whitespace-pre-line mb-3">{loc.address}</p>
                <p className="text-neutral-300 text-[10px] font-mono mb-3">
                  {loc.lat.toFixed(2)}°, {loc.lng.toFixed(2)}°
                </p>
                <a
                  href={loc.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-medium transition-opacity hover:opacity-70"
                  style={{ color: loc.color }}
                >
                  <ExternalLink className="w-3 h-3" />
                  View in Google Maps
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}   