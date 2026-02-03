import { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog - SPACE LEAN | AI Task Management Insights",
  description:
    "Explore the latest insights on AI-powered task management, productivity tips, Kanban best practices, and team collaboration strategies. Stay ahead with SPACE LEAN blog.",
  keywords: [
    "task management blog",
    "productivity tips",
    "Kanban best practices",
    "AI productivity",
    "team collaboration",
    "project management insights",
    "agile methodology",
    "remote work tips",
  ],
  openGraph: {
    title: "Blog - SPACE LEAN | AI Task Management Insights",
    description:
      "Explore the latest insights on AI-powered task management, productivity tips, and team collaboration strategies.",
    type: "website",
    siteName: "SPACE LEAN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - SPACE LEAN",
    description:
      "AI Task Management insights, productivity tips, and collaboration strategies.",
  },
};

const categoryColors: Record<string, string> = {
  "AI & Productivity": "bg-purple-100 text-purple-700",
  "Project Management": "bg-blue-100 text-blue-700",
  "Remote Work": "bg-green-100 text-green-700",
  Productivity: "bg-orange-100 text-orange-700",
  Agile: "bg-cyan-100 text-cyan-700",
  Leadership: "bg-pink-100 text-pink-700",
  Technology: "bg-indigo-100 text-indigo-700",
  "Team Building": "bg-amber-100 text-amber-700",
};

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 text-sm font-semibold rounded-full mb-4 uppercase tracking-wider">
            Our Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Insights & Resources
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the latest trends in AI task management, productivity
            strategies, and team collaboration. Learn from experts and level up
            your workflow.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blogs/${post.slug}`}
              className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-gray-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-gray-300 group-hover:text-purple-300 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      categoryColors[post.category] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {post.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
