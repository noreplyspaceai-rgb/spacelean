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
  title: "Solutions | SpaceLean — Construction Intelligence Across Every Stage",
  description:
    "Connect planning, scheduling, risk, field operations, and project controls in one construction intelligence platform. Discover SpaceLean's available and upcoming solutions.",
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
    canonical: "https://spacelean.ai/solutions",
    languages: {
      "en-US": "https://spacelean.ai/solutions",
      "en-GB": "https://spacelean.ai/solutions",
      "en-IN": "https://spacelean.ai/solutions",
      "x-default": "https://spacelean.ai/solutions",
    },
  },
  openGraph: {
    title: "Solutions | SpaceLean — Construction Intelligence Across Every Stage",
    description:
      "Connect planning, scheduling, risk, field operations, and project controls in one construction intelligence platform.",
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
    "description": "AI-powered construction scheduling platform delivering targeted planning solutions for General Contractors, Owners, and Consultants across Industrial, Infrastructure, and Commercial projects.",
    "applicationCategory": "ConstructionManagementApplication",
    "operatingSystem": "Web",
    "featureList": [
      "Stakeholder-specific scheduling platforms",
      "Linear and chainage-based infrastructure scheduling",
      "MEP process and turnaround optimization",
      "Takt floor-by-floor commercial sequencing",
      "Bi-directional Primavera P6 integration",
      "AI-driven delay analysis and forensic audits"
    ],
    "publisher": {
      "@type": "Organization",
      "name": "SpaceLean",
      "url": "https://spacelean.ai"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://spacelean.ai"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Solutions",
        "item": "https://spacelean.ai/solutions"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://spacelean.ai",
    "name": "SpaceLean",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://spacelean.ai/solutions?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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