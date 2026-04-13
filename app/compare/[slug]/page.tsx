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
