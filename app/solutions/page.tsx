import type { Metadata } from "next";
import Link from "next/link";
import {
  stakeholderSolutions,
  projectTypeSolutions,
  solutionsSolutions,
  solutionsNav,
  solutions,
} from "@/lib/solutions-data";
import { SolutionsIndexClient } from "@/components/SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions | SpaceLean — AI Scheduling for Every Team & Project Type",
  description:
    "SpaceLean delivers AI-powered construction scheduling solutions for General Contractors, Owners, and Consultants across Industrial, Infrastructure, and Commercial projects. Reduce planning time by 80%.",
  keywords: [
    "AI construction scheduling software",
    "construction project management AI",
    "lean project management solutions",
    "4D BIM scheduling platform",
    "construction sequencing automation",
    "general contractor scheduling AI",
    "owner project intelligence platform",
    "construction consultant tools",
    "industrial construction planning AI",
    "infrastructure project scheduling",
    "commercial construction sequencing",
    "construction technology partner program",
  ],
  alternates: {
    canonical: "/solutions",
    languages: {
      "en-US": "/solutions",
      "en-GB": "/solutions",
      "en-IN": "/solutions",
      "x-default": "/solutions",
    },
  },
  openGraph: {
    title: "Solutions | SpaceLean — AI Scheduling for Every Team & Project Type",
    description:
      "AI-generated construction sequences, probabilistic scheduling, and real-time intelligence for GCs, Owners, and Consultants across every project type.",
    type: "website",
    images: ["/marketing.jpg"],
  },
};

export default function SolutionsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SpaceLean Solutions",
    description:
      "AI-powered construction scheduling solutions for General Contractors, Owners, Consultants, and every project type.",
    url: "https://spacelean.ai/solutions",
    publisher: {
      "@type": "Organization",
      name: "SpaceLean",
      url: "https://spacelean.ai",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: solutions.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: s.title,
        description: s.metaDescription,
        url: `https://spacelean.ai/solutions/${s.slug}`,
      })),
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "SpaceLean",
    "url": "https://spacelean.ai/solutions",
    "description": "AI-powered construction scheduling solutions for every team type and project category — from General Contractors and Project Owners to Industrial, Infrastructure, and Commercial projects.",
    "applicationCategory": "ConstructionManagementSoftware",
    "operatingSystem": "Web",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1",
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "url": "https://spacelean.ai/pricing",
      "description": "Free plan available",
    },
    "publisher": {
      "@type": "Organization",
      "name": "SpaceLean Inc.",
      "url": "https://spacelean.ai",
      "logo": "https://spacelean.ai/icononly_transparent_nobuffer.png",
    },
  };

  return (
    <main className="min-h-screen bg-[#fafafa] text-primary-text pt-32 pb-20 overflow-hidden relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Server-rendered content for SEO crawlers */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h1 className="sr-only">SpaceLean Solutions — AI Scheduling for Every Team</h1>

        <nav aria-label="Solutions overview" className="sr-only">
          <h2>Solutions by Stakeholder</h2>
          <ul>
            {stakeholderSolutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`}>{s.title}</Link>
                <p>{s.tagline} — {s.metaDescription}</p>
              </li>
            ))}
          </ul>

          <h2>Solutions by Project Type</h2>
          <ul>
            {projectTypeSolutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`}>{s.title}</Link>
                <p>{s.tagline} — {s.metaDescription}</p>
              </li>
            ))}
          </ul>

          <h2>Programs & Partnerships</h2>
          <ul>
            {solutionsSolutions.map((s) => (
              <li key={s.slug}>
                <Link href={`/solutions/${s.slug}`}>{s.title}</Link>
                <p>{s.tagline} — {s.metaDescription}</p>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <SolutionsIndexClient
        nav={solutionsNav}
        stakeholderSolutions={stakeholderSolutions}
        projectTypeSolutions={projectTypeSolutions}
        solutionsSolutions={solutionsSolutions}
      />
    </main>
  );
}