"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { FEATURES, getCoreFeatureBySlug } from "./data";
import { FEATURE_MOCKUPS } from "./feature-mockups";
import { useRef, useState, useEffect } from "react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay = 0) => ({
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.7, delay, ease: EASE },
});

interface CoreFeatureDetailClientProps {
  slug: string;
}

export default function CoreFeatureDetailClient({
  slug,
}: CoreFeatureDetailClientProps) {
  const feature = getCoreFeatureBySlug(slug);
  const mockupRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  if (!feature) {
    return null;
  }

  const otherFeatures = FEATURES.filter((item) => item.slug !== slug);
  const Icon = feature.icon;
  const mockup = FEATURE_MOCKUPS[feature.id];

  // Magnetic 3D mouse effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mockupRef.current) return;

      const rect = mockupRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = e.clientX - centerX;
      const y = e.clientY - centerY;

      // Calculate rotation based on distance from center
      const rotateX = (y / rect.height) * 10; // Max 10 degrees
      const rotateY = (x / rect.width) * -10; // Max 10 degrees

      setRotation({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
      setRotation({ x: 0, y: 0 });
    };

    const element = mockupRef.current;
    if (element) {
      element.addEventListener("mousemove", handleMouseMove);
      element.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        element.removeEventListener("mousemove", handleMouseMove);
        element.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <>
      {/* -- Hero -- */}
      <section className="relative z-10 py-0 pb-8 px-4 border-b border-black/[0.06]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div {...fadeUp(0.06)} className="mb-8">
            <Link
              href="/space-lean-core"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group"
            >
              <span className="w-9 h-9 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-black/[0.08] transition-colors">
                <ArrowLeft className="w-3.5 h-3.5 text-neutral-900 group-hover:-translate-x-0.5 transition-transform" />
              </span>
              All Core Capabilities
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0.1)}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-black/[0.04] border border-black/10 rounded-2xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-cyan-500" />
                </div>
                <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 tracking-wide">
                  <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
                  {feature.subtitle}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl mb-4">
                <span className="font-bold text-5xl lg:text-5xl">{feature.title}</span>
              </h1>

              <p className="mt-4 max-w-lg mb-6">
                <span className="block border-l-4 border-cyan-400 pl-4">
                  <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
                    {feature.description}
                  </span>
                </span>
              </p>

              <div className="grid gap-3">
                {feature.keyPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-cyan-50 border border-cyan-200/60 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-cyan-600" />
                    </span>
                    <span className="text-sm text-neutral-600 leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/request-a-demo"
                  className="inline-flex items-center justify-center gap-2.5 text-sm font-medium bg-neutral-900 text-white px-7 py-2.5 rounded-full hover:bg-neutral-700 transition-colors shadow-lg shadow-black/10"
                >
                  Request a Demo
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/space-lean-core"
                  className="inline-flex items-center justify-center gap-2 text-sm font-medium text-neutral-600 border border-black/10 px-7 py-2.5 rounded-full hover:bg-black/[0.04] hover:text-neutral-900 transition-colors"
                >
                  View all core capabilities
                </Link>
              </div>
            </motion.div>

            {/* 3D Mockup with Magnetic Mouse Effect */}
            <motion.div
              ref={mockupRef}
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: EASE }}
              className="relative"
              style={{
                perspective: "1200px",
              }}
            >
              <motion.div
                animate={{
                  rotateX: rotation.x,
                  rotateY: rotation.y,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                }}
                style={{
                  transformStyle: "preserve-3d" as const,
                }}
              >
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-black/[0.07] shadow-[0_2px_24px_rgba(0,0,0,0.08)] bg-white shadow-[0_0_24px_rgba(14,179,233,0.3)] shadow-cyan-500/80">
                  <div
                    className="absolute inset-0 opacity-[0.07] pointer-events-none"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />
                  {mockup ? (
                    <div className="absolute inset-0">{mockup}</div>
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                        <Icon className="w-10 h-10 text-cyan-400" />
                      </div>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -- Benefits -- */}
      <section className="py-16 sm:py-20 px-4 border-b border-black/[0.06] bg-[#fafafa]">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div {...fadeUp(0.08)} className="mb-10">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              Measurable impact
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl">
              Outcomes that{" "}
              <span className="font-bold text-5xl lg:text-5xl">move the schedule.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {feature.benefits.map((benefit, index) => {
                const BenefitIcon = benefit.icon;
                return (
                  <div key={benefit.label} className="group rounded-lg border border-transparent hover:border-black/[0.06] hover:bg-black/[0.015] transition-all duration-200 p-4">
                    <div className="w-9 h-9 bg-black/[0.04] border border-black/10 rounded-xl flex items-center justify-center mb-3 group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
                      <BenefitIcon className="w-4 h-4 text-cyan-500 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-2xl font-bold text-cyan-500 mb-1 tracking-tight">{benefit.metric}</p>
                    <p className="text-sm font-medium text-neutral-600">{benefit.label}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "60%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: EASE }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- Other core capabilities -- */}
      <section className="py-16 sm:py-20 px-4">
        <div className="max-w-7xl px-4 mx-auto">
          <motion.div {...fadeUp(0.08)} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
                Explore more
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal lg:text-4xl tracking-tight leading-tight text-cyan-500 max-w-xl">
                Other <span className="font-bold text-5xl lg:text-5xl">core capabilities.</span>
              </h2>
            </div>
            <Link
              href="/space-lean-core"
              className="inline-flex items-center gap-2.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors group shrink-0"
            >
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
            transition={{ duration: 0.6, delay: 0.12, ease: EASE }}
            className="rounded-2xl border border-black/[0.07] bg-white p-6 sm:p-8 shadow-[0_2px_24px_rgba(0,0,0,0.04)]"
          >
            <div className="grid md:grid-cols-3 gap-1">
              {otherFeatures.slice(0, 3).map((other, i) => {
                const OtherIcon = other.icon;
                return (
                  <motion.div
                    key={other.slug}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.45, delay: 0.05 + i * 0.06, ease: EASE }}
                  >
                    <Link href={`/space-lean-core/${other.slug}`} className="flex items-center gap-4 rounded-lg border border-transparent hover:border-black/[0.06] hover:bg-black/[0.015] transition-all duration-200 px-4 py-4 group">
                      <span className="w-9 h-9 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300 shrink-0">
                        <OtherIcon className="w-4 h-4 text-cyan-500 group-hover:text-white transition-colors" />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold text-neutral-900 tracking-tight">{other.title}</p>
                        <p className="text-xs text-neutral-400 font-mono mt-0.5 truncate">{other.subtitle}</p>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-black/[0.04] border border-black/10 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300 shrink-0">
                        <ArrowRight className="w-3 h-3 text-neutral-600 group-hover:text-white transition-colors" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-4 h-px bg-black/[0.05] relative overflow-hidden rounded-full">
              <motion.div
                className="absolute inset-y-0 left-0 bg-cyan-400 rounded-full"
                initial={{ width: "0%" }}
                whileInView={{ width: "25%" }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3, ease: EASE }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}