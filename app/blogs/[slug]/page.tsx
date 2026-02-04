import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/lib/blog-data";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found - SPACE LEAN",
    };
  }

  return {
    title: `${post.title} | SPACE LEAN Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      siteName: "SPACE LEAN",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

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

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32 pb-20">
      <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="hover:text-purple-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li>
              <Link
                href="/blogs"
                className="hover:text-purple-600 transition-colors"
              >
                Blog
              </Link>
            </li>
            <li>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
            <li className="text-gray-900 font-medium truncate max-w-[200px]">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                categoryColors[post.category] || "bg-gray-100 text-gray-700"
              }`}
            >
              {post.category}
            </span>
            <span className="text-sm text-gray-500">{post.readTime}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            {post.description}
          </p>
          <p className="text-sm text-gray-500 pb-8 border-b border-gray-200">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline">
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(
                  /^## (.*$)/gm,
                  '<h2 class="text-2xl mt-12 mb-4">$1</h2>',
                )
                .replace(
                  /^### (.*$)/gm,
                  '<h3 class="text-xl mt-8 mb-3">$1</h3>',
                )
                .replace(
                  /^- \*\*(.*?)\*\*: (.*$)/gm,
                  '<li class="mb-2"><strong>$1</strong>: $2</li>',
                )
                .replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>')
                .replace(
                  /^\d+\. \*\*(.*?)\*\*: (.*$)/gm,
                  '<li class="mb-2"><strong>$1</strong>: $2</li>',
                )
                .replace(/^\d+\. (.*$)/gm, '<li class="mb-2">$1</li>')
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\n\n/g, '</p><p class="mb-4">')
                .replace(/^(?!<[hl])/gm, '<p class="mb-4">'),
            }}
          />
        </div>

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl border border-purple-100">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to boost your productivity?
            </h3>
            <p className="text-gray-600 mb-6">
              Try SPACE LEAN free and experience AI-powered task management.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/request-a-demo"
                className="px-6 py-3 bg-white text-gray-900 font-medium rounded-full border border-gray-200 hover:shadow-lg transition-all"
              >
                Request a Demo
              </Link>
              <Link
                href="/request-a-demo"
                className="px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white font-medium rounded-full hover:from-gray-800 hover:to-gray-700 shadow-lg transition-all"
              >
                Try for free
              </Link>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blogs/${relatedPost.slug}`}
                  className="group bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all"
                >
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full mb-3 ${
                      categoryColors[relatedPost.category] ||
                      "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {relatedPost.category}
                  </span>
                  <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-sm text-gray-500 mt-2">
                    {relatedPost.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
