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
      canonical: `/compare/${comparison.slug}`,
    },
    openGraph: {
      title: comparison.title,
      description: comparison.description,
      type: "article",
      url: `/compare/${comparison.slug}`,
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

  return (
    <main className="min-h-screen">
      <ComparisonDetail data={comparison} />
    </main>
  );
}
