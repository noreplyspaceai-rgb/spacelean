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
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
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

  const dynamicFaqItems = comparison.faqs && comparison.faqs.length > 0
    ? comparison.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      }))
    : [
        {
          "@type": "Question",
          "name": `What is the difference between SpaceLean and ${comparison.competitorName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `SpaceLean is an AI-powered construction and technical scheduling platform designed for automated task generation, Monte Carlo risk simulation, and self-healing schedules. In contrast, ${comparison.competitorName} relies on manual project setup and static timeline views.`,
          },
        },
        {
          "@type": "Question",
          "name": `What are the key advantages of SpaceLean over ${comparison.competitorName}?`,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": `SpaceLean's key advantages over ${comparison.competitorName} include automated AI task breakdown, real-time Monte Carlo risk simulation, flat $19/mo pricing, and native OKR alignment.`,
          },
        },
      ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": dynamicFaqItems,
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `SpaceLean (${comparison.title})`,
    "image": "https://spacelean.ai/mockuper.png",
    "description": comparison.description,
    "datePublished": "2026-01-01T00:00:00Z",
    "dateModified": "2026-03-01T00:00:00Z",
    "brand": {
      "@type": "Brand",
      "name": "SpaceLean",
    },
    "offers": {
      "@type": "Offer",
      "price": "19.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://spacelean.ai/compare/${comparison.slug}`,
      "priceValidUntil": "2027-12-31",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "340",
    },
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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
