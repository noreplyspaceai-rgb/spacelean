import type { Metadata } from "next";
import HeroSection from "@/components/space-lean-core/HeroSection";
import FeaturesSection from "@/components/space-lean-core/FeaturesSection";
import ComparisonSection from "@/components/space-lean-core/ComparisonSection";
import UseCasesSection from "@/components/space-lean-core/UseCasesSection";
import WorkflowSection from "@/components/space-lean-core/WorkflowSection";
import MetricsSection from "@/components/space-lean-core/MetricsSection";
import CtaSection from "@/components/space-lean-core/CtaSection";
import { FEATURES } from "@/components/space-lean-core/data";

export const metadata: Metadata = {
  title:
    "AI Project Management & Scheduling Software | SpaceLean Core",
  description:
    "SpaceLean Core: AI-powered construction scheduling with BIM-driven sequencing, Monte Carlo simulation, real-time replanning, and predictive risk analysis.",
  keywords: [
    "SpaceLean Core features",
    "AI construction scheduling engine",
    "BIM sequencing automation",
    "Monte Carlo construction simulation",
    "construction AI platform",
    "4D BIM scheduling engine",
    "real-time schedule resequencing",
    "construction risk prediction AI",
    "construction Kanban board",
    "automated construction planning",
  ],
  alternates: {
    canonical: "https://spacelean.ai/space-lean-core",
    languages: {
      "en-US": "https://spacelean.ai/space-lean-core",
      "en-GB": "https://spacelean.ai/space-lean-core",
      "en-IN": "https://spacelean.ai/space-lean-core",
      "x-default": "https://spacelean.ai/space-lean-core",
    },
  },
  openGraph: {
    title: "Space Lean Core | AI Construction Scheduling Engine",
    description:
      "The AI engine powering intelligent construction schedules — BIM sequencing, Monte Carlo simulation, and real-time replanning.",
    type: "website",
  },
};

export default function SpaceLeanCorePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SpaceLean Core Capabilities",
    description:
      "Complete overview of SpaceLean's core AI construction scheduling capabilities.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: FEATURES.map((f, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: f.title,
        description: f.description,
        url: `https://spacelean.ai/space-lean-core/${f.slug}`,
      })),
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpaceLean Core",
    "url": "https://spacelean.ai/space-lean-core",
    "description": "AI-powered construction scheduling engine providing BIM-driven sequencing, Monte Carlo risk simulation, real-time replanning, and predictive project controls.",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "featureList": [
      "AI-Generated Construction Sequences",
      "BIM-Driven Dependency Inference",
      "Monte Carlo Schedule Simulations",
      "Self-Healing Project Timelines",
      "Zone Congestion and Crew Flow Optimization",
      "Integrated Agile Sprint Planning",
      "Construction Scheduling Software",
      "Lean Project Management Software"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "SpaceLean",
      "url": "https://spacelean.ai"
    }
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <HeroSection />
      <FeaturesSection />
      <ComparisonSection />
      <UseCasesSection />
      <WorkflowSection />
      <MetricsSection />
      <CtaSection />
    </div>
  );
}
