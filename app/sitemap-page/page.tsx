import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { solutions } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: "Sitemap | SpaceLean — All Pages & Resources",
  description:
    "Browse every page on SpaceLean — AI-powered task management platform. Find solutions for construction, engineering, and commercial teams, blog posts, comparison guides, free tools, and more.",
  keywords: [
    "SpaceLean sitemap",
    "SpaceLean pages",
    "site navigation",
    "SpaceLean resources",
  ],
  alternates: {
    canonical: "/sitemap-page",
  },
  openGraph: {
    title: "Sitemap | SpaceLean",
    description:
      "A complete directory of all pages, solutions, blog posts, and resources on SpaceLean.",
    type: "website",
  },
};

export default function SitemapPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "SpaceLean Sitemap",
    description:
      "A complete directory of all pages on SpaceLean — solutions, blog posts, tools, and resources.",
    publisher: {
      "@type": "Organization",
      name: "SpaceLean",
      url: "https://spacelean.ai",
    },
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">
            A complete directory of all pages on SpaceLean. Find AI-powered task management solutions, in-depth blog posts, competitor comparisons, free tools, and more.
          </p>
        </header>

        <div className="space-y-12">
          {/* Main Pages */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Main Pages
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/space-lean-core"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Space Lean Core
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/tool"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  AI Task Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/okr-templates-every-team"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Free OKR Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/okr-management-complete-guide"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  OKR Management Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs/strategic-goal-prioritization-okrs"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Strategic Goal Prioritization with OKRs
                </Link>
              </li>
              <li>
                <Link
                  href="/compare"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Comparisons
                </Link>
              </li>
              <li>
                <Link
                  href="/request-a-demo"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Request a Demo
                </Link>
              </li>
            </ul>
          </section>

          {/* Solutions */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Solutions
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/solutions"
                  className="text-purple-600 hover:text-purple-700 hover:underline font-medium"
                >
                  All Solutions
                </Link>
              </li>
              {solutions.map((solution) => (
                <li key={solution.slug} className="ml-4">
                  <Link
                    href={`/solutions/${solution.slug}`}
                    className="text-purple-600 hover:text-purple-700 hover:underline"
                  >
                    {solution.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          {/* Blog */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Blog
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/blogs"
                  className="text-purple-600 hover:text-purple-700 hover:underline font-medium"
                >
                  All Blog Posts
                </Link>
              </li>
              {blogPosts.map((post) => (
                <li key={post.slug} className="ml-4">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="text-purple-600 hover:text-purple-700 hover:underline"
                  >
                    {post.title}
                  </Link>
                  <span className="text-gray-400 text-sm ml-2">
                    ({post.category})
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technical */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Technical
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sitemap.xml"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  XML Sitemap
                </Link>
                <span className="text-gray-400 text-sm ml-2">
                  (For search engines)
                </span>
              </li>
              <li>
                <Link
                  href="/robots.txt"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Robots.txt
                </Link>
                <span className="text-gray-400 text-sm ml-2">
                  (Crawler instructions)
                </span>
              </li>
            </ul>
          </section>

          {/* Legal */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
              Legal &amp; Security
            </h2>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/security"
                  className="text-purple-600 hover:text-purple-700 hover:underline"
                >
                  Security Standards
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
