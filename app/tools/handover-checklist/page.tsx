import type { Metadata } from "next";
import HandoverChecklistClient from "./HandoverChecklistClient";

export const metadata: Metadata = {
  title: "Construction Handover Checklist Generator | SpaceLean",
  description: "Create and manage a construction project handover checklist covering inspections, defects, documentation, systems, and final handover requirements.",
  keywords: [
    "construction handover checklist",
    "project handover tool",
    "construction punch list generator",
    "building handover checklist online",
    "commissioning checklist tool",
    "free construction checklist generator",
  ],
  alternates: {
    canonical: "https://spacelean.ai/tools/handover-checklist",
    languages: {
      "en-US": "https://spacelean.ai/tools/handover-checklist",
      "en-GB": "https://spacelean.ai/tools/handover-checklist",
      "en-IN": "https://spacelean.ai/tools/handover-checklist",
      "x-default": "https://spacelean.ai/tools/handover-checklist",
    },
  },
  openGraph: {
    title: "Construction Handover Checklist Generator | SpaceLean",
    description: "Generate and manage a construction project handover checklist covering inspections, defects, documentation, systems, and final handover requirements.",
    type: "website",
    url: "https://spacelean.ai/tools/handover-checklist",
  },
};

export default function HandoverChecklistPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpaceLean Construction Handover Checklist Generator",
    "alternateName": "Construction Handover Checklist Generator",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "url": "https://spacelean.ai/tools/handover-checklist",
    "description": "Create and manage a construction project handover checklist covering inspections, defects, documentation, systems, and final handover requirements.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free online handover checklist generator — no account required",
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

      {/* Decorative background grid and gradients to match SpaceLean style */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-cyan-500/5 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-purple-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-600 bg-cyan-50 border border-cyan-150 rounded-full px-3 py-1 mb-4">
            Free Online Tool
          </span>
          <h1 className="text-3xl sm:text-5xl font-normal tracking-tight leading-tight text-neutral-900 mb-6">
            Construction <br />
            <span className="font-bold text-cyan-500">Handover Checklist Generator</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-500 font-light leading-relaxed">
            Create and manage a construction project handover checklist covering inspections, defects, documentation, systems, and final handover requirements.
          </p>
        </div>

        {/* Interactive Checklist UI */}
        <HandoverChecklistClient />
      </div>
    </main>
  );
}
