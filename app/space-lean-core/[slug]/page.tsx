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

  return (
    <main className="min-h-screen bg-white text-primary-text pt-28 pb-16 overflow-hidden">
      <CoreFeatureDetailClient slug={slug} />
    </main>
  );
}
