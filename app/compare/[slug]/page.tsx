import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ComparisonDetail from "@/components/ComparisonDetail";
import { getAllComparisonSlugs, getComparisonBySlug } from "@/lib/compare-data";

interface CompareDetailPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllComparisonSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: CompareDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    return {
      title: "Comparison Not Found | SpaceLean",
    };
  }

  return {
    title: comparison.title,
    description: comparison.description,
    alternates: {
      canonical: `https://spacelean.ai/compare/${comparison.slug}`,
      languages: {
        "en-US": `https://spacelean.ai/compare/${comparison.slug}`,
        "en-GB": `https://spacelean.ai/compare/${comparison.slug}`,
        "en-IN": `https://spacelean.ai/compare/${comparison.slug}`,
        "x-default": `https://spacelean.ai/compare/${comparison.slug}`,
      },
    },
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      type: "article",
      url: `https://spacelean.ai/compare/${comparison.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: comparison.title,
      description: comparison.description,
    },
  };
}

export default async function CompareDetailPage({ params }: CompareDetailPageProps) {
  const { slug } = await params;
  const comparison = getComparisonBySlug(slug);

  if (!comparison) {
    notFound();
  }

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
        "name": "Compare",
        "item": "https://spacelean.ai/compare",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": comparison.title,
        "item": `https://spacelean.ai/compare/${comparison.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `What is the difference between SpaceLean and ${comparison.competitorName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `SpaceLean is an AI-powered construction scheduling platform designed for BIM-to-4D automation, Monte Carlo risk simulation, and self-healing schedules. In contrast, ${comparison.competitorName} is a traditional project controls tool that relies on manual logic linking and static Critical Path Method (CPM) networks.`
        }
      },
      {
        "@type": "Question",
        "name": `What are the key advantages of SpaceLean over ${comparison.competitorName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `SpaceLean's key advantages over ${comparison.competitorName} include automated BIM-to-schedule sequence generation, real-time Monte Carlo risk simulation running 1,000 iterations per save, and zone-based crew flow solvers that prevent site trade stacking and subcontractor coordination conflicts.`
        }
      },
      {
        "@type": "Question",
        "name": `When should teams choose ${comparison.competitorName} instead of SpaceLean?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Organizations should choose ${comparison.competitorName} if legacy contract specifications mandate raw file delivery formats, or if the project controls team requires traditional, static Critical Path Method tracking without AI scheduling intelligence or BIM integration.`
        }
      }
    ]
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ComparisonDetail data={comparison} />

      {/* Server-rendered internal links for SEO */}
      <div className="sr-only" aria-hidden="true">
        <nav aria-label="Related pages">
          <h2>Explore SpaceLean</h2>
          <ul>
            <li><a href="/features">SpaceLean Features</a></li>
            <li><a href="/pricing">View Pricing</a></li>
            <li><a href="/solutions">Solutions for Every Team</a></li>
            <li><a href="/tool">Free AI Task Generator</a></li>
            <li><a href="/request-a-demo">Request a Demo</a></li>
            <li><a href="/blogs/lean-project-management-software">Lean Project Management Software Guide</a></li>
            <li><a href="/blogs/spacelean-vs-excel-trello-intelligent-planning">SpaceLean vs Excel & Trello</a></li>
            <li><a href="/compare">View All Comparisons</a></li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
