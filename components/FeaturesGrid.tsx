"use client";
import { useState } from "react";
import { Layout, Clock, Zap, Users, Shield, Globe, Sparkles } from "lucide-react";

const features = [
  {
    title: "Smart Kanban Boards",
    description:
      "Visual project management optimized for agile workflows. Our AI automatically categorizes and moves tasks based on progress updates, significantly reducing manual board maintenance.",
    icon: Layout,
    tag: "Planning",
  },
  {
    title: "Intelligent Auto-Scheduling",
    description:
      "Never manually reschedule again. SpaceLean analyzes your team's velocity and calendar availability to automatically detect conflicts and propose realistic deadlines.",
    icon: Clock,
    tag: "Automation",
  },
  {
    title: "AI Project Planning",
    description:
      "Turn a simple project brief into a comprehensive roadmap. Our AI understands context, dependencies, and resource requirements — delivering a structured plan instantly.",
    icon: Zap,
    tag: "AI",
  },
  {
    title: "Real-Time Team Sync",
    description:
      "Seamless collaboration for remote and hybrid teams. Live updates, threaded comments, and integrated video huddles keep everyone aligned without notification fatigue.",
    icon: Users,
    tag: "Collaboration",
  },
  {
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption (AES-256) for all data at rest and in transit. We are SOC2 Type II compliant and offer on-premise deployment options for strict data governance.",
    icon: Shield,
    tag: "Security",
  },
  {
    title: "4D Visualization",
    description:
      "Visualize your project timeline in a dynamic 4D environment — combining 3D models with time-based scheduling. Monitor progress, detect clashes early, and simulate outcomes before work begins.",
    icon: Globe,
    tag: "Visualization",
  },
];

export default function FeaturesGrid() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="features" className="py-5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            {/* Badge pill — matches HeroSection */}
            <span className="inline-flex items-center gap-2 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-4 tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
              Capabilities
            </span>

            <h2 className="text-3xl md:text-5xl font-normal tracking-tight leading-tight">
              Built for the way <br />
              <span className="font-bold text-cyan-500">teams actually work.</span>
            </h2>
          </div>

          {/* Pullquote — matches HeroSection/WhyUs style */}
          <span className="block border-l-4 border-cyan-400 pl-4 max-w-xs">
            <span className="block text-sm font-mono text-neutral-500 leading-relaxed">
              We removed the bloat and added intelligence.
            </span>
            <span className="block text-sm font-mono font-semibold text-cyan-500 leading-relaxed">
              SpaceLean replaces your disjointed stack with one cohesive, AI-native platform.
            </span>
          </span>
        </div>

        {/* Two-column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8 border border-black/8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isActive = activeIdx === idx;
            const isHovered = hoveredIdx === idx;
            const isHighlighted = isActive || isHovered;

            return (
              <div
                key={idx}
                className={`
                  relative flex flex-col overflow-hidden cursor-pointer
                  transition-colors duration-[250ms] p-6
                  ${isActive ? "bg-cyan-50/60" : isHovered ? "bg-cyan-50/30" : "bg-white"}
                `}
                onClick={() => setActiveIdx(isActive ? null : idx)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Top row: index + icon + tag */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-cyan-400/70">
                    {String(idx + 1).padStart(2, "0")}
                  </span>

                  <div
                    className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center transition-all duration-300"
                    style={{
                      transform: isHighlighted ? "rotate(-18deg) scale(1.6)" : "none",
                      background: isHighlighted ? "#06b6d4" : undefined,
                      borderColor: isHighlighted ? "#06b6d4" : undefined,
                    }}
                  >
                    <Icon
                      className="w-5 h-5 transition-colors duration-300"
                      strokeWidth={1.25}
                      style={{ color: isHighlighted ? "white" : "#06b6d4" }}
                    />
                  </div>

                  <span
                    className={`text-sm tracking-[0.18em] uppercase font-medium transition-colors duration-250 ${
                      isHighlighted ? "text-cyan-500" : "text-black/20"
                    }`}
                  >
                    {feature.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-normal tracking-tight text-neutral-800 leading-snug mb-2">
                  {feature.title}
                </h3>

                {/* Description — toggled on hover/click */}
                <div
                  className="overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    maxHeight: isHighlighted ? "200px" : "0",
                    opacity: isHighlighted ? 1 : 0,
                    marginTop: isHighlighted ? "12px" : "0",
                  }}
                >
                  <p className="text-sm font-mono text-neutral-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Animated bottom border — cyan instead of black */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-cyan-500 transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ width: isHighlighted ? "100%" : "0" }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center gap-4">
          <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-neutral-400">
            Hover to explore
          </span>
          <div className="h-px flex-1 bg-black/8" />
          <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-neutral-400">
            {features.length} capabilities
          </span>
        </div>

      </div>
    </section>
  );
}