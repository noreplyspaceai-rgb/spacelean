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
    "about": [
      { "@type": "Thing", "name": "Building Information Modeling", "sameAs": "https://www.wikidata.org/wiki/Q852174" },
      { "@type": "Thing", "name": "Critical Path Method", "sameAs": "https://www.wikidata.org/wiki/Q217997" },
      { "@type": "Thing", "name": "Industry Foundation Classes", "sameAs": "https://www.wikidata.org/wiki/Q1661642" },
      { "@type": "Thing", "name": "Lean Construction", "sameAs": "https://www.wikidata.org/wiki/Q6509514" },
      { "@type": "Thing", "name": "Monte Carlo method", "sameAs": "https://www.wikidata.org/wiki/Q231574" },
      { "@type": "Thing", "name": "Knowledge Graph", "sameAs": "https://www.wikidata.org/wiki/Q33002955" }
    ],
    "publisher": {
      "@type": "Organization",
      "name": "SpaceLean",
      "url": "https://spacelean.ai"
    }
  };

  const coreServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://spacelean.ai/space-lean-core#service",
    "name": "SpaceLean Core AI Scheduling Services",
    "serviceType": "AI-Powered Construction Project Controls Software Service",
    "description":
      "Comprehensive suite of AI construction scheduling services including 4D BIM sequencing, Monte Carlo probabilistic simulation, real-time replanning, and predictive risk analysis.",
    "provider": {
      "@type": "Organization",
      "@id": "https://spacelean.ai/#organization",
      "name": "SpaceLean",
      "url": "https://spacelean.ai",
      "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
    },
    "areaServed": "Global",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SpaceLean Core Platform Capabilities",
      "itemListElement": FEATURES.map((f) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": f.title,
          "description": f.description,
          "url": `https://spacelean.ai/space-lean-core/${f.slug}`,
        },
      })),
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "General Contractors, Project Owners, VDC Managers, Construction Schedulers",
    },
    "termsOfService": "https://spacelean.ai/terms",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://spacelean.ai",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "SpaceLean Core",
        "item": "https://spacelean.ai/space-lean-core",
      },
    ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coreServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
