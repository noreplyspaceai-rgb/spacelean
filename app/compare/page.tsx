import type { Metadata } from "next";
import CompareClient from "@/components/CompareClient";

export const metadata: Metadata = {
  title: "SpaceLean vs Competitors: Comparison Hub | SpaceLean",
  description:
    "Compare SpaceLean vs Asana, Monday.com, Notion, ClickUp, and more. Side-by-side feature tables, pricing, and honest verdicts for construction AI tools.",
  keywords: [
    "SpaceLean vs Asana",
    "SpaceLean vs Monday",
    "SpaceLean vs Notion",
    "SpaceLean vs ClickUp",
    "SpaceLean vs Linear",
    "SpaceLean vs competitors",
    "AI project management comparison",
    "construction scheduling comparison",
    "best project management software 2026",
  ],
  alternates: {
    canonical: "https://spacelean.ai/compare",
    languages: {
      "en-US": "https://spacelean.ai/compare",
      "en-GB": "https://spacelean.ai/compare",
      "en-IN": "https://spacelean.ai/compare",
      "x-default": "https://spacelean.ai/compare",
    },
  },
  openGraph: {
    title: "SpaceLean vs Competitors — Full Comparison Hub",
    description:
      "Side-by-side comparisons of SpaceLean vs Asana, Monday.com, Notion, ClickUp, Linear, and construction scheduling tools.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceLean vs Competitors — Full Comparison Hub",
    description:
      "See how SpaceLean's AI-native project management compares to every major tool.",
  },
};

export default function ComparePage() {
  return (
    <>
      <CompareClient />

      {/* Server-rendered internal links for SEO */}
      <div className="sr-only" aria-hidden="true">
        <nav aria-label="Related pages">
          <h2>SpaceLean Comparisons</h2>
          <ul>
            <li><a href="/compare/spacelean-vs-asana">SpaceLean vs Asana</a></li>
            <li><a href="/compare/spacelean-vs-monday">SpaceLean vs Monday.com</a></li>
            <li><a href="/compare/spacelean-vs-notion">SpaceLean vs Notion</a></li>
            <li><a href="/compare/spacelean-vs-clickup">SpaceLean vs ClickUp</a></li>
            <li><a href="/compare/spacelean-vs-linear">SpaceLean vs Linear</a></li>
            <li><a href="/compare/spacelean-vs-alice-technologies">SpaceLean vs Alice Technologies</a></li>
            <li><a href="/compare/spacelean-vs-autodesk-construction-cloud">SpaceLean vs Autodesk Construction Cloud</a></li>
            <li><a href="/features">SpaceLean Features</a></li>
            <li><a href="/pricing">View Pricing Plans</a></li>
            <li><a href="/solutions">Solutions for Every Team</a></li>
            <li><a href="/tool">Free AI Task Generator</a></li>
            <li><a href="/request-a-demo">Request a Demo</a></li>
            <li><a href="/blogs/okr-software-comparison">Best OKR Software Comparison</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}