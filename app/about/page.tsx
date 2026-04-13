import { Metadata } from "next";
import AboutClient from "@/components/AboutClient";

export const metadata: Metadata = {
  title: "About Us | SpaceLean - AI-Powered Task Management",
  description:
    "Learn how SpaceLean is revolutionizing team productivity through AI-first innovation, user-centric design, and intelligent task orchestration.",
  keywords: [
    "AI productivity mission",
    "SpaceLean story",
    "team productivity experts",
    "intelligent task management founders",
    "future of agile work",
  ],
  alternates: {
    canonical: "/about",
    languages: {
      "en-US": "/about",
      "en-GB": "/about",
      "en-IN": "/about",
      "x-default": "/about",
    },
  },
  openGraph: {
    title: "About SpaceLean | Shaping the Future of Work",
    description:
      "Discover the philosophy and team behind the world's most intelligent task management platform.",
    images: ["/marketing.jpg"],
  },
};

export default function AboutPage() {
  const values = [
    {
      title: "AI-First Innovation",
      description:
        "We leverage cutting-edge AI to solve real-world productivity challenges and empower teams to work smarter.",
      icon: "🤖",
    },
    {
      title: "User-Centric Design",
      description:
        "Every feature is built with your workflow in mind. Simplicity and elegance guide our product decisions.",
      icon: "👥",
    },
    {
      title: "Team Collaboration",
      description:
        "We believe the best work happens when teams are connected, transparent, and aligned on priorities.",
      icon: "🤝",
    },
    {
      title: "Continuous Learning",
      description:
        "Our AI adapts to your patterns and improves over time, making your team increasingly productive.",
      icon: "📈",
    },
  ];

  const stats = [
    { number: "40%", label: "Productivity Boost" },
    { number: "10K+", label: "Active Users" },
    { number: "50M+", label: "Tasks Managed" },
    { number: "99.9%", label: "Uptime" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About SpaceLean",
    description:
      "Learn about SpaceLean mission to revolutionize productivity using AI.",
    publisher: {
      "@type": "Organization",
      name: "SpaceLean",
      logo: {
        "@type": "ImageObject",
        url: "https://spaceaiapp.com/icononly_transparent_nobuffer.png",
      },
    },
    mainEntity: {
      "@type": "Organization",
      name: "SpaceLean",
      foundingDate: "2024",
      knowsAbout: ["AI productivity", "Task Management", "Agile Workflows"],
    },
  };

  return (
    <main className="min-h-screen ">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      

      <AboutClient values={values} stats={stats} />
    </main>
  );
}