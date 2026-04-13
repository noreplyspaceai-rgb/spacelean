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
    "Space Lean Core | AI Construction Scheduling Engine — SpaceLean",
  description:
    "Discover SpaceLean Core — the AI engine behind intelligent construction scheduling. BIM-driven sequencing, Monte Carlo simulation, real-time replanning, Kanban boards, and predictive risk analysis.",
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
    canonical: "/space-lean-core",
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

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
