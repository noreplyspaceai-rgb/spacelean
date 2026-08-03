'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const audiences = [
  {
    id: "owners",
    label: "For",
    title: "Project Owners",
    body: "Drive your projects faster with improved transparency, increased efficiency and reduced risk.",
    cta: "Learn more",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
  },
  {
    id: "contractors",
    label: "For",
    title: "Contractors",
    body: "Win more work and keep projects on track by optimizing schedules, resources, and recovery strategies.",
    cta: "Learn more",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "consultants",
    label: "For",
    title: "Consultants",
    body: "Empower clients with scenario-based insights that minimize risk and maximize project outcomes.",
    cta: "Partner Program",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  },
];

export default function AudienceSection() {
  const [active, setActive] = useState("owners");

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto font-sans">

      {/* Header */}
      <div className="mb-12">
        <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
          AI Construction Project Planning and Scheduling Software
        </span>

        <h2 className="text-3xl md:text-4xl font-normal tracking-tight">
          For Owners, Contractors{" "}
          <span className="font-bold text-cyan-500">and Consultants</span>
        </h2>
      </div>

      {/* Accordion Cards */}
      <div className="flex flex-col md:flex-row w-full gap-4 md:h-[380px] items-stretch mb-8">
        {audiences.map((a) => {
          const isActive = active === a.id;

          return (
            <div
              key={a.id}
              onMouseEnter={() => setActive(a.id)}
              onClick={() => setActive(a.id)}
              className="relative rounded-2xl overflow-hidden cursor-pointer bg-[#1e2a4a] transition-all duration-500 ease-in-out flex-shrink-0 min-h-[120px] md:min-h-0"
              style={{ flex: isActive ? "2.2" : "0.7" }}
            >
              <Image
                src={a.image}
                alt={a.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500"
                style={{ opacity: isActive ? 0.45 : 0.25 }}
              />

              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,57,255,0)] to-[rgba(0,13,116,0.81)]" />

              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <p
                    className="!text-white font-bold text-sm tracking-widest uppercase whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", textOrientation: "mixed", transform: "rotate(180deg)" }}
                  >
                    {a.label} {a.title}
                  </p>
                </div>
              )}

              <div
                className="absolute bottom-0 left-0 right-0 z-10 p-8 transition-all duration-500"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(12px)",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <p className="text-white/60 text-lg mb-1">{a.label}</p>
                <h3 className="!text-white text-3xl font-bold mb-4">{a.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-7 max-w-xs">{a.body}</p>
                <button suppressHydrationWarning className="inline-flex items-center gap-3 border border-white/40 hover:border-white/80 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200">
                  {a.cta}
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/15 text-xs">›</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* See all solutions */}
      <div className="flex justify-start">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 bg-black/[0.04] border border-black/10 text-neutral-800 font-medium px-6 py-3 rounded-full text-sm hover:bg-cyan-500 hover:border-cyan-500 hover:text-white active:bg-cyan-600 active:border-cyan-600 active:text-white transition-all duration-300"
        >
          See all solutions
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}