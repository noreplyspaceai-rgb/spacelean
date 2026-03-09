"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const grain: React.CSSProperties = {
  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E")`,
  backgroundRepeat: "repeat",
  backgroundSize: "128px 128px",
};

interface Props {
  values: { title: string; description: string; icon: string }[];
}

export default function AboutValues({ values }: Props) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-5 tracking-wide">
        <Sparkles className="w-3.5 h-3.5 text-cyan-500" /> What We Stand For
      </span>
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-800 mb-7">Core Values</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {values.map((v, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: i * 0.07, ease: EASE }}
            className="p-5 rounded-2xl border border-black/8 shadow-md hover:border-cyan-500/25 hover:-translate-y-1 transition-all duration-300"
            style={{ ...grain, backgroundColor: "#f8fafc" }}
          >
            <div className="text-2xl mb-3">{v.icon}</div>
            <h3 className="text-neutral-800 font-semibold text-sm mb-1.5">{v.title}</h3>
            <p className="text-neutral-500 text-xs leading-relaxed">{v.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}