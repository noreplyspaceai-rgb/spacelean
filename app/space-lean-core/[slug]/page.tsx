import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CoreFeatureDetailClient from "@/components/space-lean-core/CoreFeatureDetailClient";
import {
  getAllCoreFeatureSlugs,
  getCoreFeatureBySlug,
} from "@/components/space-lean-core/data";

interface CoreFeaturePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCoreFeatureSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CoreFeaturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getCoreFeatureBySlug(slug);

  if (!feature) {
    return {
      title: "Core Capability Not Found | SpaceLean",
    };
  }

  const isBimVisualisation = slug === "bim-selection";
  const title = isBimVisualisation
    ? "BIM Model Visualisation | Spacelean"
    : `${feature.title} | SpaceLean Core`;
  const description = isBimVisualisation
    ? "Explore BIM models in interactive 3D. Inspect building elements, review model properties, understand quantities and connect BIM data with construction schedules using Spacelean."
    : feature.description;

  return {
    title,
    description,
    alternates: {
      canonical: `https://spacelean.ai/space-lean-core/${feature.slug}`,
      languages: {
        "en-US": `https://spacelean.ai/space-lean-core/${feature.slug}`,
        "en-GB": `https://spacelean.ai/space-lean-core/${feature.slug}`,
        "en-IN": `https://spacelean.ai/space-lean-core/${feature.slug}`,
        "x-default": `https://spacelean.ai/space-lean-core/${feature.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://spacelean.ai/space-lean-core/${feature.slug}`,
      images: isBimVisualisation ? ["/bim-model-visualisation.jpg"] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: isBimVisualisation ? ["/bim-model-visualisation.jpg"] : undefined,
    },
  };
}

export default async function CoreFeaturePage({
  params,
}: CoreFeaturePageProps) {
  const { slug } = await params;
  const feature = getCoreFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  const FEATURE_WIKIDATA_ENTITIES: Record<string, Array<{ name: string; sameAs: string }>> = {
    "bim-selection": [
      { name: "Building Information Modeling", sameAs: "https://www.wikidata.org/wiki/Q852174" },
      { name: "Industry Foundation Classes", sameAs: "https://www.wikidata.org/wiki/Q1661642" },
      { name: "4D BIM", sameAs: "https://www.wikidata.org/wiki/Q852174" },
    ],
    "monte-carlo": [
      { name: "Monte Carlo method", sameAs: "https://www.wikidata.org/wiki/Q231574" },
      { name: "Critical Path Method", sameAs: "https://www.wikidata.org/wiki/Q217997" },
      { name: "Risk analysis", sameAs: "https://www.wikidata.org/wiki/Q3595460" },
    ],
    "kanban": [
      { name: "Kanban", sameAs: "https://www.wikidata.org/wiki/Q486483" },
      { name: "Lean Construction", sameAs: "https://www.wikidata.org/wiki/Q6509514" },
      { name: "Work in process", sameAs: "https://www.wikidata.org/wiki/Q1414441" },
    ],
    "ai-sequencing": [
      { name: "Critical Path Method", sameAs: "https://www.wikidata.org/wiki/Q217997" },
      { name: "Automated planning and scheduling", sameAs: "https://www.wikidata.org/wiki/Q3775086" },
      { name: "Building Information Modeling", sameAs: "https://www.wikidata.org/wiki/Q852174" },
    ],
    "resequencing": [
      { name: "Critical Path Method", sameAs: "https://www.wikidata.org/wiki/Q217997" },
      { name: "Schedule", sameAs: "https://www.wikidata.org/wiki/Q1424606" },
      { name: "Dynamic programming", sameAs: "https://www.wikidata.org/wiki/Q852445" },
    ],
    "risk-analysis": [
      { name: "Risk management", sameAs: "https://www.wikidata.org/wiki/Q189447" },
      { name: "Monte Carlo method", sameAs: "https://www.wikidata.org/wiki/Q231574" },
      { name: "Predictive analytics", sameAs: "https://www.wikidata.org/wiki/Q377398" },
    ],
    "task-management": [
      { name: "Project management software", sameAs: "https://www.wikidata.org/wiki/Q21074704" },
      { name: "Work breakdown structure", sameAs: "https://www.wikidata.org/wiki/Q1129994" },
      { name: "Task management", sameAs: "https://www.wikidata.org/wiki/Q3032515" },
    ],
  };

  const capabilityEntities = FEATURE_WIKIDATA_ENTITIES[slug] || [
    { name: "Building Information Modeling", sameAs: "https://www.wikidata.org/wiki/Q852174" },
    { name: "Critical Path Method", sameAs: "https://www.wikidata.org/wiki/Q217997" },
  ];

  const entityThings = capabilityEntities.map((e) => ({
    "@type": "Thing",
    "name": e.name,
    "sameAs": e.sameAs,
  }));

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
      {
        "@type": "ListItem",
        "position": 3,
        "name": feature.title,
        "item": `https://spacelean.ai/space-lean-core/${feature.slug}`,
      },
    ],
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://spacelean.ai/space-lean-core/${feature.slug}#software`,
    "name": `SpaceLean - ${feature.title}`,
    "headline": feature.subtitle,
    "description": feature.description,
    "url": `https://spacelean.ai/space-lean-core/${feature.slug}`,
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Construction Scheduling & BIM Management Software",
    "operatingSystem": "Web, Cloud, SaaS",
    "featureList": feature.keyPoints,
    "about": entityThings,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://spacelean.ai/request-a-demo",
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://spacelean.ai/#organization",
      "name": "SpaceLean",
      "url": "https://spacelean.ai",
      "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://spacelean.ai/space-lean-core/${feature.slug}#service`,
    "name": `${feature.title} - SpaceLean Core Capability`,
    "serviceType": "AI-Powered Construction Project Management Service",
    "description": feature.description,
    "url": `https://spacelean.ai/space-lean-core/${feature.slug}`,
    "about": entityThings,
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
      "name": `${feature.title} Capabilities`,
      "itemListElement": feature.keyPoints.map((point) => {
        const cleanName = point.split("–")[0].trim().split("—")[0].trim();
        return {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": cleanName,
            "description": point,
          },
        };
      }),
    },
    "termsOfService": "https://spacelean.ai/terms",
    "audience": {
      "@type": "Audience",
      "audienceType": "General Contractors, Project Owners, VDC Managers, Construction Schedulers",
    },
  };

  return (
    <main className="min-h-screen bg-white text-primary-text pt-28 pb-16 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* HTML Breadcrumbs for visual nav & crawlability */}
      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-2 text-xs font-mono text-neutral-500">
        <ol className="flex items-center space-x-2">
          <li><a href="/" className="hover:text-cyan-600 transition-colors">Home</a></li>
          <li><span>/</span></li>
          <li><a href="/space-lean-core" className="hover:text-cyan-600 transition-colors">SpaceLean Core</a></li>
          <li><span>/</span></li>
          <li className="text-neutral-900 font-semibold" aria-current="page">{feature.title}</li>
        </ol>
      </nav>

      <CoreFeatureDetailClient slug={slug} />
    </main>
  );
}
