import type { Metadata } from "next";
import CompareClient from "@/components/CompareClient";

export const metadata: Metadata = {
  title: "Compare SpaceLean vs Construction Scheduling Tools | SpaceLean",
  description:
    "See how SpaceLean's AI-native construction scheduling compares to Alice Technologies, Autodesk Construction Cloud, Aconex, and VisiLean. Side-by-side feature comparisons, pricing, and real results.",
  keywords: [
    "construction scheduling comparison",
    "SpaceLean vs competitors",
    "AI construction planning tools",
    "4D BIM scheduling software comparison",
    "construction project management comparison",
    "SpaceLean vs Alice Technologies",
    "SpaceLean vs Autodesk",
    "schedule optimization software",
  ],
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Compare SpaceLean vs Construction Scheduling Tools",
    description:
      "Side-by-side comparisons of SpaceLean's AI scheduling vs traditional construction management platforms.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Compare SpaceLean vs Construction Scheduling Tools",
    description:
      "See why teams are switching to SpaceLean's AI-native scheduling platform.",
  },
};

export default function ComparePage() {
  return (
    <>
      <CompareClient />

      {/* Server-rendered internal links for SEO */}
      <div className="sr-only" aria-hidden="true">
        <nav aria-label="Related pages">
          <h2>Explore More</h2>
          <ul>
            <li><a href="/features">SpaceLean Features</a></li>
            <li><a href="/pricing">View Pricing Plans</a></li>
            <li><a href="/solutions">Solutions for Every Team</a></li>
            <li><a href="/tool">Free AI Task Generator</a></li>
            <li><a href="/request-a-demo">Request a Demo</a></li>
            <li><a href="/blogs/lean-project-management-software">Lean Project Management Software Guide</a></li>
            <li><a href="/blogs">Read the Blog</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}