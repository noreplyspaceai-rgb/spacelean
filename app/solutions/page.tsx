import type { Metadata } from "next";
import { solutions } from "@/lib/solutions-data";
import { SolutionsIndexClient } from "@/components/SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions | SpaceLean - AI-Powered Productivity for Every Team",
  description:
    "Discover how SpaceLean empowers Marketing, Product, Engineering, Design, Startup, and Remote teams with AI-powered productivity solutions tailored to your workflow.",
  keywords: [
    "team productivity solutions",
    "AI-powered team management",
    "enterprise collaboration software",
    "team workflow automation",
    "business productivity platform",
  ],
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-primary-text pt-32 pb-20 overflow-hidden relative">
      <SolutionsIndexClient solutions={solutions} />
    </main>
  );
}
