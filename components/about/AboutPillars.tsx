"use client";

import { motion, useInView } from "framer-motion";
import { Zap, Shield, Target, Brain } from "lucide-react";
import { useRef } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const grain: React.CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat",
  backgroundSize: "128px 128px",
};

const pillars = [
  { Icon: Zap,    title: "Intelligent Automation",  desc: "From upload to optimised plan in minutes — no manual setup required." },
  { Icon: Shield, title: "Risk-Aware Planning",      desc: "Probabilistic forecasting surfaces hidden risks before they become delays." },
  { Icon: Target, title: "Adaptive Scheduling",      desc: "Plans that self-correct in real time as site conditions change." },
  { Icon: Brain,  title: "Multi-Trade Coordination", desc: "Every crew and trade knows exactly what to do and when." },
];

export default function AboutPillars() {
  const pillarsRef  = useRef<HTMLDivElement>(null);
  const pillarsView = useInView(pillarsRef, { once: true, margin: "-60px" });

  return (
    <section ref={pillarsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map(({ Icon, title, desc }, i) => (
          <motion.div
            key={i}
            initial={{ y: 24, opacity: 0 }}
            animate={pillarsView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            className="p-5 rounded-2xl border border-black/8 shadow-md group hover:border-cyan-500/25 hover:-translate-y-1 transition-all duration-300"
            style={{ ...grain, backgroundColor: "#f8fafc" }}
          >
            <div className="w-8 h-8 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/20 transition-colors">
              <Icon className="w-4 h-4 text-neutral-700 group-hover:text-cyan-500 transition-colors" />
            </div>
            <h3 className="text-neutral-800 font-semibold text-sm mb-1.5 leading-snug">{title}</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}