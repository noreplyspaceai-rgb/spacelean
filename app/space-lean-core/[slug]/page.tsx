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

  return {
    title: `${feature.title} | SpaceLean Core`,
    description: feature.description,
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
      title: feature.title,
      description: feature.description,
      type: "article",
      url: `https://spacelean.ai/space-lean-core/${feature.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: feature.title,
      description: feature.description,
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

  return (
    <main className="min-h-screen bg-white text-primary-text pt-28 pb-16 overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
