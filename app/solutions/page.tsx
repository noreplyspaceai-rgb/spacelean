import type { Metadata } from "next";
import {
  stakeholderSolutions,
  projectTypeSolutions,
  solutionsSolutions,
  solutionsNav,
} from "@/lib/solutions-data";
import { SolutionsIndexClient } from "@/components/SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions | Space AI — AI-Powered Construction Scheduling & Intelligence",
  description:
    "Discover how Space AI serves General Contractors, Owners, and Consultants across Industrial, Infrastructure, and Commercial projects — with AI-generated sequencing, probabilistic scheduling, and real-time construction intelligence.",
  keywords: [
    "AI construction scheduling software",
    "construction project management AI",
    "4D BIM scheduling platform",
    "construction sequencing automation",
    "probabilistic construction scheduling",
    "general contractor scheduling AI",
    "owner project intelligence platform",
    "construction consultant tools",
    "industrial construction planning AI",
    "infrastructure project scheduling",
    "commercial construction sequencing",
    "construction knowledge graph",
    "real-time schedule resequencing",
    "Monte Carlo construction simulation",
    "construction technology partner program",
  ],
  openGraph: {
    title: "Solutions | Space AI — AI-Powered Construction Scheduling",
    description:
      "AI-generated construction sequences, probabilistic critical path, and real-time schedule intelligence for GCs, Owners, and Consultants across every project type.",
    type: "website",
  },
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-primary-text pt-32 pb-20 overflow-hidden relative">
      <SolutionsIndexClient
        nav={solutionsNav}
        stakeholderSolutions={stakeholderSolutions}
        projectTypeSolutions={projectTypeSolutions}
        solutionsSolutions={solutionsSolutions}
      />
    </main>
  );
}