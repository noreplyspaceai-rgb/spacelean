import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { solutions } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: "Sitemap | Space Lean",
  description:
    "Browse all pages on Space Lean - your AI-powered productivity platform. Find solutions, blog posts, and resources.",
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
          <p className="text-xl text-gray-600">
            A complete list of all pages on Space Lean
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
        </div>
      </div>
    </main>
  );
}
