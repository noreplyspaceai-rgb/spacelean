import type { Metadata } from "next";
import ConstructionCostCalculatorClient from "./ConstructionCostCalculatorClient";

export const metadata: Metadata = {
  title: "Construction Cost Calculator | SpaceLean",
  description: "Estimate construction costs using quantities, units, unit rates, contingency, and optional tax with SpaceLean's construction cost calculator.",
  keywords: [
    "construction cost calculator",
    "free construction cost estimator",
    "calculate construction cost online",
    "building material cost calculator",
    "labor cost estimator",
    "construction project cost planning",
  ],
  alternates: {
    canonical: "https://spacelean.ai/tools/construction-cost-calculator",
    languages: {
      "en-US": "https://spacelean.ai/tools/construction-cost-calculator",
      "en-GB": "https://spacelean.ai/tools/construction-cost-calculator",
      "en-IN": "https://spacelean.ai/tools/construction-cost-calculator",
      "x-default": "https://spacelean.ai/tools/construction-cost-calculator",
    },
  },
  openGraph: {
    title: "Construction Cost Calculator | SpaceLean",
    description: "Estimate construction costs using quantities, units, unit rates, contingency, and optional tax with SpaceLean's construction cost calculator.",
    type: "website",
    url: "https://spacelean.ai/tools/construction-cost-calculator",
  },
};

export default function ConstructionCostCalculatorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpaceLean Construction Cost Calculator",
    "alternateName": "Construction Cost Calculator",
    "operatingSystem": "Web",
    "applicationCategory": "BusinessApplication",
    "url": "https://spacelean.ai/tools/construction-cost-calculator",
    "description": "Estimate construction costs using quantities, units, unit rates, contingency, and optional tax with SpaceLean's construction cost calculator.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "description": "Free online construction cost calculator — no account required",
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
            <span className="font-bold text-cyan-500">Cost Calculator</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-500 font-light leading-relaxed">
            Estimate construction costs by entering quantities and unit rates for materials or work items.
          </p>
        </div>

        {/* Interactive Cost Calculator UI */}
        <ConstructionCostCalculatorClient />
      </div>
    </main>
  );
}
