import type { Metadata } from "next";
import SafetyInspectionClient from "./SafetyInspectionClient";

export const metadata: Metadata = {
  title: "Construction Safety Inspection Checklist | SpaceLean",
  description: "Create, manage, and export construction site safety inspections. Audit PPE, scaffolding, electrical, fire safety, housekeeping, working at height, and equipment hazards with instant PDF reports.",
  keywords: [
    "construction safety inspection checklist",
    "site safety audit tool",
    "OSHA construction checklist",
    "free construction safety checklist",
    "daily safety inspection construction",
    "PPE inspection checklist",
    "scaffolding safety checklist",
    "construction hazard report generator",
    "site safety inspection pdf",
  ],
  alternates: {
    canonical: "https://spacelean.ai/tools/safety-inspection-checklist",
    languages: {
      "en-US": "https://spacelean.ai/tools/safety-inspection-checklist",
      "en-GB": "https://spacelean.ai/tools/safety-inspection-checklist",
      "en-IN": "https://spacelean.ai/tools/safety-inspection-checklist",
      "x-default": "https://spacelean.ai/tools/safety-inspection-checklist",
    },
  },
  openGraph: {
    title: "Construction Safety Inspection Checklist | SpaceLean",
    description: "Free online construction site safety inspection tool with structured checklists, real-time hazard tracking, and downloadable PDF reports.",
    type: "website",
    url: "https://spacelean.ai/tools/safety-inspection-checklist",
  },
};

export default function SafetyInspectionChecklistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpaceLean Construction Safety Inspection Checklist",
    "alternateName": "Construction Safety Inspection Checklist Tool",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "url": "https://spacelean.ai/tools/safety-inspection-checklist",
    "description": "Create and manage construction site safety inspections with structured checklists covering PPE, scaffolding, electrical safety, fire safety, housekeeping, and workplace hazards.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free online construction safety inspection checklist — no account or credit card required",
      "availability": "https://schema.org/InStock",
    },
    "publisher": {
      "@type": "Organization",
      "name": "SpaceLean",
      "url": "https://spacelean.ai",
      "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
    },
  };

  return (
    <main className="min-h-screen bg-white text-primary-text pt-32 pb-24 relative overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Decorative background grid and gradients matching SpaceLean style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 print:hidden">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-150 rounded-full px-3 py-1 mb-4">
            Free Online Tool
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight leading-tight text-neutral-900 mb-4 sm:mb-6">
            Construction <br />
            <span className="font-bold text-cyan-500">Safety Inspection Checklist</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-500 font-light leading-relaxed">
            Create, manage, and export professional site safety inspections covering PPE, scaffolding, electrical, fire hazards, and emergency readiness with instant PDF reports.
          </p>
        </div>

        {/* Interactive Safety Inspection Checklist UI */}
        <SafetyInspectionClient />
      </div>
    </main>
  );
}

