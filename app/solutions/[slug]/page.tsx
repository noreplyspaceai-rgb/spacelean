import { notFound } from "next/navigation";
import {
  getSolutionBySlug,
  getAllSolutionSlugs,
  solutions,
} from "@/lib/solutions-data";
import { SolutionDetailClient } from "@/components/SolutionsClient";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found | SpaceLean",
    };
  }

  return {
    title: `${solution.title} | SpaceLean`,
    description: solution.metaDescription,
    keywords: solution.keywords,
    openGraph: {
      title: solution.title,
      description: solution.metaDescription,
      type: "website",
      images: [solution.heroImage],
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.metaDescription,
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  // Get other solutions for cross-linking
  const otherSolutions = solutions.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#fafafa] text-primary-text pt-32 pb-20 overflow-hidden relative">
      <SolutionDetailClient solution={solution} otherSolutions={otherSolutions} />
    </main>
  );
}
