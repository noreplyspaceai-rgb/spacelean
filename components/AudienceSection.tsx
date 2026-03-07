'use client';
import Link from "next/link";
import { useState } from "react";

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
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto font-sans">
      
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm tracking-[0.14em] font-mono text-gray-800 mb-3">
          AI Construction Project Planning and Scheduling Software
        </p>
        <h2 className="text-3xl md:text-4xl  tracking-tight">
          For Owners, Contractors and Consultants
        </h2>
      </div>

      {/* Accordion Cards */}
      <div className="flex w-full gap-4 h-[380px] items-stretch mb-8">
        {audiences.map((a) => {
          const isActive = active === a.id;

          return (
            <div
              key={a.id}
              onMouseEnter={() => setActive(a.id)}
              className="relative rounded-2xl overflow-hidden cursor-pointer bg-[#1e2a4a] transition-all duration-500 ease-in-out flex-shrink-0"
              style={{ flex: isActive ? "2.2" : "0.7" }}
            >
              {/* Background image */}
              <img
                src={a.image}
                alt={a.title}
                className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500"
                style={{ opacity: isActive ? 0.45 : 0.25 }}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8, 57, 255, 0)] to-[rgba(0, 13, 116, 0.81)]" />

              {/* Collapsed label */}
              {!isActive && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <p
                    className="!text-white font-bold text-sm tracking-widest uppercase whitespace-nowrap"
                    style={{
                      writingMode: "vertical-rl",
                      textOrientation: "mixed",
                      transform: "rotate(180deg)",
                    }}
                  >
                    {a.label} {a.title}
                  </p>
                </div>
              )}

              {/* Expanded content */}
              <div
                className="absolute bottom-0 left-0 right-0 z-10 p-8 transition-all duration-500"
                style={{
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(12px)",
                  pointerEvents: isActive ? "auto" : "none",
                }}
              >
                <p className="text-white/60 text-lg mb-1">{a.label}</p>

                <h3 className="!text-white text-3xl font-bold mb-4">
                  {a.title}
                </h3>

                <p className="text-white/70 text-sm leading-relaxed mb-7 max-w-xs">
                  {a.body}
                </p>

                <button className="inline-flex items-center gap-3 border border-white/40 hover:border-white/80 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200">
                  {a.cta}
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/15 text-xs">
                    ›
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* See all solutions button */}
  <div className="flex justify-start">
  <Link
    href="/solutions"
    className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-600 to-blue-700 hover:from-blue-700 hover:to-gray-800 text-white font-semibold px-6 py-3 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
  >
    See all solutions
    <span className="inline-flex items-center justify-center text-lg">
      ›
    </span>
  </Link>
</div>
    </section>
  );
}