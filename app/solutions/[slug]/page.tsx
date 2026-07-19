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
    alternates: {
      canonical: `https://spacelean.ai/solutions/${slug}`,
      languages: {
        "en-US": `https://spacelean.ai/solutions/${slug}`,
        "en-GB": `https://spacelean.ai/solutions/${slug}`,
        "en-IN": `https://spacelean.ai/solutions/${slug}`,
        "x-default": `https://spacelean.ai/solutions/${slug}`,
      },
    },
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

  // Map solutions to relevant blog posts for internal linking
  const relatedResources: Record<string, { label: string; href: string }[]> = {
    "for-gcs": [
      { label: "Lean Project Management Software Guide", href: "/blogs/lean-project-management-software" },
      { label: "How to Stop Missing Deadlines", href: "/blogs/stop-missing-deadlines-intelligent-scheduling" },
    ],
    "for-owners": [
      { label: "OKR Management: The Complete Guide", href: "/blogs/okr-management-complete-guide" },
      { label: "Decision-Making Frameworks for Leaders", href: "/blogs/decision-making-frameworks-leaders" },
    ],
    "for-consultants": [
      { label: "Remote Team Collaboration Tools", href: "/blogs/remote-team-collaboration-tools-2026" },
      { label: "Productivity Hacks for Busy Professionals", href: "/blogs/productivity-hacks-busy-professionals" },
    ],
    "industrial": [
      { label: "Lean Project Management Software Guide", href: "/blogs/lean-project-management-software" },
      { label: "Kanban Board Best Practices", href: "/blogs/kanban-board-best-practices-teams" },
    ],
    "infrastructure": [
      { label: "Lean Project Management Software Guide", href: "/blogs/lean-project-management-software" },
      { label: "Strategic Goal Prioritization with OKRs", href: "/blogs/strategic-goal-prioritization-okrs" },
    ],
    "commercial": [
      { label: "How to Stop Missing Deadlines", href: "/blogs/stop-missing-deadlines-intelligent-scheduling" },
      { label: "AI Task Management: The Future", href: "/blogs/ai-task-management-future-productivity" },
    ],
    "ideal-projects": [
      { label: "Agile Methodology: A Beginner's Guide", href: "/blogs/agile-methodology-beginners-guide" },
      { label: "SpaceLean vs Excel & Trello", href: "/blogs/spacelean-vs-excel-trello-intelligent-planning" },
    ],
    "engineering-teams": [
      { label: "Sprint Planning for Engineering Teams", href: "/blogs/sprint-planning-engineering-teams" },
      { label: "SpaceLean vs Linear", href: "/compare/spacelean-vs-linear" },
      { label: "SpaceLean vs Asana", href: "/compare/spacelean-vs-asana" },
      { label: "OKR Management: The Complete Guide", href: "/blogs/okr-management-complete-guide" },
    ],
    "remote-teams": [
      { label: "Remote Team Collaboration Tools 2026", href: "/blogs/remote-team-collaboration-tools-2026" },
      { label: "Team Communication: Async vs Sync", href: "/blogs/team-communication-async-sync" },
      { label: "SpaceLean vs Asana", href: "/compare/spacelean-vs-asana" },
      { label: "OKR Management: The Complete Guide", href: "/blogs/okr-management-complete-guide" },
    ],
    "startups": [
      { label: "OKR Management: The Complete Guide", href: "/blogs/okr-management-complete-guide" },
      { label: "AI Task Management: The Future of Productivity", href: "/blogs/ai-task-management-future-productivity" },
      { label: "SpaceLean vs Notion", href: "/compare/spacelean-vs-notion" },
      { label: "Goal Setting with OKRs for Teams", href: "/blogs/goal-setting-okrs-teams" },
    ],
    "product-teams": [
      { label: "Sprint Planning for Engineering Teams", href: "/blogs/sprint-planning-engineering-teams" },
      { label: "Agile Methodology: A Complete Beginner's Guide", href: "/blogs/agile-methodology-beginners-guide" },
      { label: "SpaceLean vs ClickUp", href: "/compare/spacelean-vs-clickup" },
      { label: "Strategic Goal Prioritization with OKRs", href: "/blogs/strategic-goal-prioritization-okrs" },
    ],
  };

  const resources = relatedResources[slug] || [];

  return (
    <main className="min-h-screen bg-[#fafafa] text-primary-text pt-32 pb-20 overflow-hidden relative">
      <SolutionDetailClient solution={solution} otherSolutions={otherSolutions} />

      {/* Server-rendered internal links for SEO */}
      <div className="sr-only" aria-hidden="true">
        <nav aria-label="Related resources">
          <h2>Related Resources</h2>
          <ul>
            <li><a href="/features">Explore SpaceLean Features</a></li>
            <li><a href="/pricing">View Pricing Plans</a></li>
            <li><a href="/tool">Try the Free AI Task Generator</a></li>
            <li><a href="/compare">Compare SpaceLean to Alternatives</a></li>
            {resources.map((r) => (
              <li key={r.href}><a href={r.href}>{r.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
    </main>
  );
}
