import { Metadata } from "next";
import CareersClient from "@/components/CareersClient";

export const metadata: Metadata = {
  title: "Careers | SpaceLean",
  description:
    "Explore career opportunities at SpaceLean and join our team building AI-powered construction technology.",
  keywords: [
    "SpaceLean careers",
    "construction tech jobs",
    "AI construction software careers",
    "work at SpaceLean",
    "AI scheduling software developer roles",
  ],
  alternates: {
    canonical: "https://spacelean.ai/careers",
    languages: {
      "en-US": "https://spacelean.ai/careers",
      "en-GB": "https://spacelean.ai/careers",
      "en-IN": "https://spacelean.ai/careers",
      "x-default": "https://spacelean.ai/careers",
    },
  },
  openGraph: {
    title: "Careers | SpaceLean",
    description:
      "Explore career opportunities at SpaceLean and join our team building AI-powered construction technology.",
    images: ["/marketing.jpg"],
  },
};

export default function CareersPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Careers at SpaceLean",
    "description":
      "Explore career opportunities at SpaceLean and join our team building AI-powered construction technology.",
    "publisher": {
      "@type": "Organization",
      "name": "SpaceLean",
      "logo": {
        "@type": "ImageObject",
        "url": "https://spacelean.ai/icononly_transparent_nobuffer.png",
      },
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "SpaceLean",
      "foundingDate": "2023",
      "knowsAbout": [
        "AI project management",
        "Construction Scheduling",
        "BIM automation",
      ],
    },
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareersClient />
    </main>
  );
}
