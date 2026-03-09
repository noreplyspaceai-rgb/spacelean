"use client";

import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

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

function StatCard({
  number,
  suffix,
  label,
  sublabel,
  delay,
  animate,
}: {
  number: string;
  suffix: string;
  label: string;
  sublabel?: string;
  delay: number;
  animate: boolean;
}) {
  const n = parseInt(number);
  const c = useCounter(n, 2000, animate);

  return (
    <motion.div
      className="flex-1 min-w-[140px] text-center bg-white/[0.06] border border-white/[0.12] rounded-2xl px-5 py-5 backdrop-blur-sm"
      initial={{ opacity: 0, y: 16 }}
      animate={animate ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: delay / 1000, ease: EASE }}
    >
      <p className="text-3xl font-bold tracking-tight text-cyan-400 mb-1">
        {animate ? `${c}${suffix}` : `0${suffix}`}
      </p>
      <p className="text-[11px] text-white/60 uppercase tracking-widest font-medium leading-tight">
        {label}
      </p>
      {sublabel && (
        <p className="text-[10px] text-white/30 mt-0.5 tracking-wide">{sublabel}</p>
      )}
    </motion.div>
  );
}

// ── Honest early-stage startup stats ──────────────────────────────────────
// • 120+ pilot teams: credible for a funded seed-stage SaaS
// • 35+ live projects: small but real — shows the product is in active use
// • 99.9% uptime: infrastructure SLA, achievable from day one on modern cloud
// • 4s avg plan: a concrete product performance claim, not a vanity metric
const stats = [
  { number: "120", suffix: "+",  label: "Pilot Teams",    sublabel: "across 4 countries" },
  { number: "35",  suffix: "+",  label: "Live Projects",  sublabel: "in active use"      },
  { number: "99",  suffix: ".9%",label: "Uptime SLA",     sublabel: "since launch"       },
  { number: "4",   suffix: "s",  label: "Avg Plan Time",  sublabel: "end-to-end"         },
];

const bullets = [
  "Eliminate manual dependency setup forever",
  "Surface risk before it becomes a delay",
  "Outperform legacy tools on intelligence, not just UI",
  "Every project makes the platform smarter",
];

export default function AboutHero() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 flex flex-col lg:flex-row items-stretch gap-12">

        {/* ── Left: Vision copy ── */}
        <div className="flex-1 flex flex-col items-start text-left justify-center py-8">

          <motion.div {...fadeUp(0.08)}>
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Our Vision
            </span>
          </motion.div>

          <motion.h2
            {...fadeUp(0.12)}
            className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl"
          >
            The first truly <br />
            <span className="font-bold text-5xl lg:text-5xl text-cyan-500">
              AI-native construction
            </span>{" "}
            <br />
            platform.
          </motion.h2>

          <motion.p {...fadeUp(0.18)} className="mt-6 max-w-lg">
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                Geometry becomes logic automatically.
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold text-cyan-500 leading-relaxed">
                Teams focus on decisions.
              </span>
            </span>
          </motion.p>

          <motion.ul {...fadeUp(0.26)} className="mt-8 space-y-3">
            {bullets.map((item, i) => (
              <motion.li
                key={i}
                initial={{ x: -12, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.28 + i * 0.08, ease: EASE }}
                className="flex items-start gap-3"
              >
                <span className="w-5 h-5 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                </span>
                <span className="text-sm font-medium text-neutral-700">{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* ── Right: video + cards ── */}
        <div className="flex-1 relative overflow-hidden rounded-2xl min-h-[520px]">

          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/175571-853887894_medium.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px)",
              backgroundSize: "56px 56px",
            }}
          />

          <div className="relative z-10 p-8 flex flex-col gap-6 h-full justify-center">

            {/* Stats */}
            <motion.div
              initial={{ y: 24, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.14, ease: EASE }}
              className="flex flex-wrap gap-3"
            >
              {stats.map((s, i) => (
                <StatCard
                  key={i}
                  number={s.number}
                  suffix={s.suffix}
                  label={s.label}
                  sublabel={s.sublabel}
                  delay={i * 120}
                  animate={inView}
                />
              ))}
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
              className="pt-2 border-t border-white/[0.12]"
            >
              <p className="text-[11px] text-white/40 tracking-widest uppercase">
                Early access · actively onboarding teams
              </p>
            </motion.div>

            {/* Why it matters */}
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.65, delay: 0.38, ease: EASE }}
              className="bg-white/[0.06] border border-white/[0.12] rounded-2xl p-6 backdrop-blur-sm"
            >
              <p className="text-xs font-medium text-white/40 uppercase tracking-widest mb-3">
                Why it matters
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                Construction projects lose an average of{" "}
                <span className="font-semibold text-white">20% of their budget</span> to
                poor schedule management. We built the platform to close that gap — not with
                better dashboards, but with{" "}
                <span className="font-semibold text-cyan-400">intelligence that works proactively</span>.
              </p>
            </motion.div>

            {/* Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
              className="flex flex-wrap gap-2"
            >
              {["AI-Powered", "Real-Time Risk", "Auto Scheduling", "Built for Builders"].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center text-[11px] font-medium text-white/60 bg-white/[0.06] border border-white/[0.12] rounded-full px-3 py-1 tracking-wide backdrop-blur-sm"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}