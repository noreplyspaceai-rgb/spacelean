"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { FEATURES } from "./data";
import { FEATURE_MOCKUPS } from "./feature-mockups";


const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});


// ─────────────────────────────────────────────────────────────────────────────
// Feature card — Minimalistic with grained background + Enhanced Hover Effects
// ─────────────────────────────────────────────────────────────────────────────
function FeatureCard({
  feature,
  index,
  inView,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
  inView: boolean;
}) {
  const { icon: Icon, title, subtitle, description, image, id, slug } = feature;
  const mockup = FEATURE_MOCKUPS[id];

  return (
    <Link href={`/space-lean-core/${slug}`} className="block h-full">
      <motion.div
        initial={{ y: 24, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.55, delay: 0.12 + index * 0.07, ease: EASE }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
        className="group flex h-full flex-col rounded-xl overflow-hidden border border-gray-200 hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(59,130,246,0.12)]"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%)",
          backgroundImage: `
            linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(248,250,252,1) 100%),
            url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" seed="2"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100" height="100" fill="black" filter="url(%23noise)" opacity="0.015"/></svg>')
          `,
          backgroundSize: "cover, 200px 200px",
        }}
      >
        {/* Screenshot / mockup area */}
        <div className="relative w-full aspect-[16/9] bg-gradient-to-b from-gray-100 to-gray-50 border-b border-gray-100 overflow-hidden">
          {/* Subtle vignette */}
          <div className="absolute inset-0 bg-radial-gradient opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-300" />

          {/* Render real image if clean path exists */}
          {image && !image.includes(" ") && mockup === undefined ? (
            <img
              src={image}
              alt={`${title} screenshot`}
              className="absolute inset-0 w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-500"
            />
          ) : (
            <div className="absolute inset-0 opacity-80 group-hover:opacity-90 transition-opacity duration-300">{mockup}</div>
          )}

          {/* Animated glow overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-t from-blue-400/[0.04] via-transparent to-transparent" />

          {/* Subtle bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white via-white/60 to-transparent group-hover:h-16 transition-all duration-300" />
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 p-5 gap-4">
          {/* Icon + subtitle */}
          <div className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.15, rotate: 12 }}
              transition={{ duration: 0.3 }}
            >
              <Icon className="w-4 h-4 text-blue-500/80 group-hover:text-blue-600 transition-colors duration-300" />
            </motion.div>
            <span className="text-[9px] font-medium text-gray-400 group-hover:text-gray-500 uppercase tracking-wider transition-colors duration-300">
              {subtitle}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-medium text-gray-900 leading-snug group-hover:text-blue-700 transition-colors duration-300">
            {title}
          </h3>

          {/* CTA */}
          <div className="mt-auto inline-flex items-center gap-1.5 text-xs font-medium text-blue-500/80 group-hover:text-blue-600 transition-all duration-300">
            Explore
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.3 }}
            >
              <ArrowRight className="w-3 h-3" />
            </motion.div>
          </div>
        </div>

        {/* Bottom accent line animation */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400/0 via-blue-400/50 to-blue-400/0 opacity-0 group-hover:opacity-100"
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          style={{ originX: 0 }}
        />
      </motion.div>
    </Link>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Main section
// ─────────────────────────────────────────────────────────────────────────────
export default function FeaturesSection() {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="features"
      ref={ref}
      className="py-20 sm:py-32 border-t border-black/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div className="mb-14 flex flex-col items-start" {...fadeUp(0.08)}>
          <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            Core Capabilities
          </span>

          <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight !text-cyan-500 max-w-xl">
            Seven pillars of{" "}
            <span className="font-bold text-5xl lg:text-5xl !text-cyan-500">
              scheduling intelligence.
            </span>
          </h2>

          <p className="mt-6 max-w-lg">
            <span className="block border-l-4 border-cyan-400 pl-4">
              <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                Working in harmony.
              </span>
              <span className="block text-base sm:text-lg font-mono font-semibold !text-cyan-500 leading-relaxed">
                Built for how construction actually works.
              </span>
            </span>
          </p>
        </motion.div>

        {/* Card grid — 3 columns on lg, 2 on md, 1 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.slice(0, 6).map((feature, i) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* 7th card — centred */}
        <div className="mt-4 flex justify-center">
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]">
            <FeatureCard
              feature={FEATURES[6]}
              index={6}
              inView={inView}
            />
          </div>
        </div>

      </div>
    </section>
  );
}