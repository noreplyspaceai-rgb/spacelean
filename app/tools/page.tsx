import type { Metadata } from "next";
import Link from "next/link";
import { Network, ArrowRight, FileText, ClipboardCheck, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Construction Planning Tools | SpaceLean",
  description: "Free online construction planning tools built for planners, project managers, and scheduling professionals. Calculate critical path, float, conversion tools, and more.",
  keywords: [
    "construction planning tools",
    "free construction tools",
    "critical path calculator",
    "CPM calculator online",
    "XER converter",
    "BIM IFC checker",
    "crew productivity calculator",
    "Monte Carlo schedule simulation",
  ],
  alternates: {
    canonical: "https://spacelean.ai/tools",
    languages: {
      "en-US": "https://spacelean.ai/tools",
      "en-GB": "https://spacelean.ai/tools",
      "en-IN": "https://spacelean.ai/tools",
      "x-default": "https://spacelean.ai/tools",
    },
  },
  openGraph: {
    title: "Construction Planning Tools | SpaceLean",
    description: "Free online construction planning tools built for planners, project managers, and scheduling professionals.",
    type: "website",
    url: "https://spacelean.ai/tools",
  },
};

interface ToolCard {
  title: string;
  description: string;
  badge: "FREE" | "COMING SOON";
  icon: any;
  href?: string;
  comingSoon?: boolean;
}

const TOOLS_LIST: ToolCard[] = [
  {
    title: "Construction Critical Path Method (CPM) Calculator",
    description: "Calculate your construction project's critical path, project duration, float, and activity dates using the Critical Path Method.",
    badge: "FREE",
    icon: Network,
    href: "/tools/critical-path-calculator",
    comingSoon: false,
  },
  {
    title: "Construction Daily Site Report Generator",
    description: "Create a structured daily construction site report by recording manpower, work completed, materials, equipment, issues, safety information, and project progress.",
    badge: "FREE",
    icon: FileText,
    href: "/tools/daily-site-report",
    comingSoon: false,
  },
  {
    title: "Construction Handover Checklist Generator",
    description: "Generate and manage a construction project handover checklist covering inspections, defects, documentation, systems, and final client handover.",
    badge: "FREE",
    icon: ClipboardCheck,
    href: "/tools/handover-checklist",
    comingSoon: false,
  },
  {
    title: "Construction Cost Calculator",
    description: "Estimate construction costs by adding materials or work items, quantities, units, and unit rates.",
    badge: "FREE",
    icon: Calculator,
    href: "/tools/construction-cost-calculator",
    comingSoon: false,
  },
];

export default function ToolsLandingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Construction Planning Tools | SpaceLean",
    "description": "Free tools built for construction planners, project managers, and scheduling professionals.",
    "url": "https://spacelean.ai/tools",
    "publisher": {
      "@type": "Organization",
      "name": "SpaceLean",
      "logo": {
        "@type": "ImageObject",
        "url": "https://spacelean.ai/icononly_transparent_nobuffer.png",
      },
    },
  };

  return (
    <main className="min-h-screen bg-white text-primary-text pt-32 pb-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative background grid and gradients to match SpaceLean style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header section matching WhyUs & Features style */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-150 rounded-full px-3 py-1 mb-4">
              Resources
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight leading-none text-neutral-900 mb-6">
              Construction <br />
              <span className="font-bold text-cyan-500">Planning Tools</span>
            </h1>
            <p className="text-lg text-neutral-500 font-light leading-relaxed max-w-xl">
              Free tools built for construction planners, project managers, and scheduling professionals.
            </p>
          </div>
          
          <div className="border-l-4 border-cyan-400 pl-4 max-w-xs md:mb-2">
            <span className="block text-sm font-mono text-neutral-500 leading-relaxed">
              No registration or credit card required.
            </span>
            <span className="block text-sm font-mono font-semibold text-cyan-500 leading-relaxed">
              Professional tools running fully in your browser.
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/5 mb-16" />

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {TOOLS_LIST.map((tool, idx) => {
            const Icon = tool.icon;
            
            if (tool.comingSoon) {
              return (
                <div
                  key={idx}
                  className="relative flex flex-col bg-white border border-neutral-200/60 rounded-3xl p-8 hover:border-neutral-300 transition-all duration-300 group select-none opacity-80"
                >
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-neutral-400" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-neutral-100 text-neutral-500 px-3 py-1 rounded-full border border-neutral-200">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-neutral-800 mb-3 group-hover:text-cyan-500 transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-sm font-mono text-neutral-500 leading-relaxed mb-6 flex-grow">
                    {tool.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-semibold tracking-wider uppercase">
                    <span>Available soon</span>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={idx}
                href={tool.href || "#"}
                className="relative flex flex-col bg-white border border-neutral-200/60 rounded-3xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_24px_rgba(6,182,212,0.06)] hover:border-cyan-500/30 transition-all duration-300 group"
              >
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-500/[0.02] to-transparent pointer-events-none" />
                
                <div className="relative flex flex-col h-full z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all duration-300">
                      <Icon className="w-6 h-6 text-cyan-500 group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-100">
                      {tool.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight text-neutral-800 mb-3 group-hover:text-cyan-500 transition-colors">
                    {tool.title}
                  </h3>

                  <p className="text-sm font-mono text-neutral-500 leading-relaxed mb-6 flex-grow">
                    {tool.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-cyan-500 font-semibold tracking-wider uppercase group-hover:text-cyan-600 transition-colors">
                    <span>Launch Tool</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
