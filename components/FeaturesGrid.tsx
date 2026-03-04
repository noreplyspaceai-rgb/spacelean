"use client";
import { useState } from "react";
import { Layout, Clock, Zap, Users, Shield, Globe } from "lucide-react";

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
  const [activeIdx, setActiveIdx] = useState(null);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section id="features" className="py-5 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div>
            <p className="font-mono text-sm font-bold tracking-[0.25em] uppercase text-black/40 mb-4">
              Capabilities
            </p>
            <h2 className="font-serif text-[clamp(36px,5vw,58px)] text-[#0a0a0a] leading-[1.1]">
              Built for the way<br />
              <span>teams actually work.</span>
            </h2>
          </div>
          <p className="font-mono text-[14px] text-[#555] leading-[1.85] font-light max-w-[420px]">
            We removed the bloat and added intelligence. SpaceLean replaces your
            disjointed stack with one cohesive, AI-native platform.
          </p>
        </div>

        {/* Two-column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#d8d8d8] border border-[#d8d8d8]">
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
                  transition-colors duration-[250ms] p-10
                  ${isActive ? "bg-[#f0f0f0]" : isHovered ? "bg-[#f7f7f7]" : "bg-white"}
                `}
                onClick={() => setActiveIdx(isActive ? null : idx)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Top row: index + tag */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#bbb] font-medium">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`font-mono text-[10px] tracking-[0.18em] uppercase font-medium transition-colors duration-250 ${
                      isHighlighted ? "text-[#0a0a0a]" : "text-[#ccc]"
                    }`}
                  >
                    {feature.tag}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="mb-6 w-10 h-10 flex items-center justify-center transition-transform duration-300"
                  style={{
                    transform: isHighlighted
                      ? "rotate(-18deg) scale(1.6)"
                      : "none",
                  }}
                >
                  <Icon className="w-6 h-6 text-black" strokeWidth={1.25} />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[26px] text-[#0a0a0a] leading-[1.2] mb-4">
                  {feature.title}
                </h3>

                {/* Description — toggled on hover/click */}
                <div
                  className="overflow-hidden transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    maxHeight: isHighlighted ? "200px" : "0",
                    opacity: isHighlighted ? 1 : 0,
                    marginTop: isHighlighted ? "16px" : "0",
                  }}
                >
                  <p className="font-mono text-[13px] leading-[1.9] text-[#555] font-light m-0">
                    {feature.description}
                  </p>
                </div>

                {/* Animated bottom border */}
                <div
                  className="absolute bottom-0 left-0 h-[2px] bg-[#0a0a0a] transition-all duration-[450ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ width: isHighlighted ? "100%" : "0" }}
                />
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="mt-10 flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#888] font-medium">
            Hover to explore
          </span>
          <div className="h-px flex-1 bg-[#d8d8d8]" />
          <span className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#888] font-medium">
            {features.length} capabilities
          </span>
        </div>

      </div>
    </section>
  );
}