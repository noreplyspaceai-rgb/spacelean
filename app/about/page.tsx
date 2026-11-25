import { Metadata } from "next";
import AboutClient from "@/components/AboutClient";
import { authors } from "@/lib/authors-data";

export const metadata: Metadata = {
  title: "About Us | SpaceLean - AI-Powered Task Management",
  description:
    "SpaceLean is built by construction and AI experts to eliminate schedule overruns. Discover our mission to make every project deliver on time and on budget.",
  keywords: [
    "AI productivity mission",
    "SpaceLean story",
    "team productivity experts",
    "intelligent task management founders",
    "future of agile work",
  ],
  alternates: {
    canonical: "https://spacelean.ai/about",
    languages: {
      "en-US": "https://spacelean.ai/about",
      "en-GB": "https://spacelean.ai/about",
      "en-IN": "https://spacelean.ai/about",
      "x-default": "https://spacelean.ai/about",
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

  const founder = authors.find((a) => a.slug === "bibin-prathap");
  const teamMembers = authors.filter(
    (a) => a.slug !== "spacelean-team" && a.slug !== "bibin-prathap"
  );

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About SpaceLean",
    description:
      "SpaceLean is an AI-powered construction scheduling and project controls platform built to eliminate schedule delays and project overruns.",
    url: "https://spacelean.ai/about",
    publisher: {
      "@type": "Organization",
      "@id": "https://spacelean.ai/#organization",
      name: "SpaceLean",
      url: "https://spacelean.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://spacelean.ai/icononly_transparent_nobuffer.png",
      },
      sameAs: [
        "https://twitter.com/spacelean_",
        "https://linkedin.com/company/spacelean",
        "https://github.com/bibinprathap/VeritasGraph",
      ],
    },
    mainEntity: {
      "@type": "Organization",
      "@id": "https://spacelean.ai/#organization",
      name: "SpaceLean",
      url: "https://spacelean.ai",
      foundingDate: "2023",
      sameAs: [
        "https://twitter.com/spacelean_",
        "https://linkedin.com/company/spacelean",
        "https://github.com/bibinprathap/VeritasGraph",
      ],
      founder: founder ? {
        "@type": "Person",
        "@id": `https://spacelean.ai/authors/${founder.slug}#person`,
        name: founder.name,
        jobTitle: founder.role,
        description: founder.bio,
        knowsAbout: founder.knowsAbout,
        sameAs: founder.sameAs,
      } : undefined,
      employee: teamMembers.map((member) => ({
        "@type": "Person",
        "@id": `https://spacelean.ai/authors/${member.slug}#person`,
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        knowsAbout: member.knowsAbout,
        sameAs: member.sameAs,
        worksFor: {
          "@type": "Organization",
          name: "SpaceLean",
          url: "https://spacelean.ai",
        },
      })),
      knowsAbout: [
        "Building Information Modeling",
        "4D Construction Scheduling",
        "Critical Path Method",
        "Lean Construction",
        "AI Task Management",
      ],
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