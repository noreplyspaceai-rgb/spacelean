import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug } from "@/lib/blog-data";
import { Sparkles, ArrowRight, Clock, ChevronRight } from "lucide-react";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

function extractFaqFromContent(content: string): { question: string; answer: string }[] {
  const faqSectionMatch = content.split(/##\s*Frequently Asked Questions/i);
  if (faqSectionMatch.length < 2) return [];

  const faqSection = faqSectionMatch[1];
  const faqBlocks = faqSection.split(/###\s+/).filter(Boolean);
  return faqBlocks.map((block) => {
    const lines = block.trim().split("\n").filter(Boolean);
    const question = lines[0].trim();
    const answer = lines.slice(1).join(" ").trim();
    return { question, answer };
  }).filter((faq) => faq.question && faq.answer);
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
    return { title: "Blog Not Found - SPACE LEAN" };
  }

  return {
    title: `${post.title} | SPACE LEAN Blog`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blogs/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [post.image],
      siteName: "SPACE LEAN",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const faqs = extractFaqFromContent(post.content);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: post.image,
    author: { "@type": "Person", name: post.author },
    datePublished: post.date,
    publisher: { "@type": "Organization", name: "SpaceLean" },
  };

  const faqJsonLd = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  } : null;

  return (
    <main className="min-h-screen text-[#0a0a0a] pt-28 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <article className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

        {/* ── Breadcrumb ── */}
        <nav className="mb-10">
          <ol className="flex items-center gap-1.5 text-xs text-neutral-400">
            <li>
              <Link href="/" className="hover:text-neutral-700 transition-colors">
                Home
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li>
              <Link href="/blogs" className="hover:text-neutral-700 transition-colors">
                Blog
              </Link>
            </li>
            <li><ChevronRight className="w-3 h-3" /></li>
            <li className="text-neutral-600 font-medium truncate max-w-[200px]">
              {post.title}
            </li>
          </ol>
        </nav>

        {/* ── Header ── */}
        <header className="mb-14">
          {/* Meta row */}
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-flex items-center text-xs font-medium text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1 tracking-wide">
              {post.category}
            </span>
            {post.readTime && (
              <span className="flex items-center gap-1 text-xs text-neutral-400">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-normal tracking-tight leading-tight text-[#0a0a0a] mb-5">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-lg text-neutral-500 leading-relaxed mb-8">
            {post.description}
          </p>

          {/* Author + Date */}
          <div className="flex items-center justify-between pb-8 border-b border-black/8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-black/8 border border-black/10 overflow-hidden flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-[#0a0a0a]">{post.author}</p>
                <p className="text-xs text-neutral-400">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* ── Content ── */}
        <div className="prose prose-lg max-w-none
          prose-headings:font-normal prose-headings:tracking-tight prose-headings:text-[#0a0a0a]
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-neutral-600 prose-p:leading-relaxed
          prose-li:text-neutral-600
          prose-strong:text-[#0a0a0a] prose-strong:font-semibold
          prose-a:text-cyan-500 prose-a:no-underline hover:prose-a:underline
          prose-hr:border-black/8"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(/^## (.*$)/gm, '<h2 class="text-2xl mt-12 mb-4">$1</h2>')
                .replace(/^### (.*$)/gm, '<h3 class="text-xl mt-8 mb-3">$1</h3>')
                .replace(/^- \*\*(.*?)\*\*: (.*$)/gm, '<li class="mb-2"><strong>$1</strong>: $2</li>')
                .replace(/^- (.*$)/gm, '<li class="mb-2">$1</li>')
                .replace(/^\d+\. \*\*(.*?)\*\*: (.*$)/gm, '<li class="mb-2"><strong>$1</strong>: $2</li>')
                .replace(/^\d+\. (.*$)/gm, '<li class="mb-2">$1</li>')
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\n\n/g, '</p><p class="mb-4">')
                .replace(/^(?!<[hl])/gm, '<p class="mb-4">'),
            }}
          />
        </div>

        {/* ── Tags ── */}
        <div className="mt-14 pt-8 border-t border-black/8">
          <p className="text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">Tags</p>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-black/[0.04] border border-black/8 text-neutral-600 text-xs rounded-full hover:bg-black/[0.07] transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-14 p-8 rounded-2xl border border-black/8 bg-black/[0.02]">
          <div className="flex items-start gap-3 mb-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1">
              <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
              AI-Native Construction Intelligence
            </span>
          </div>
          <h3 className="text-2xl font-normal tracking-tight text-[#0a0a0a] mb-2">
            Ready to build smarter?
          </h3>
          <p className="text-neutral-500 text-sm leading-relaxed mb-7 max-w-md">
            Experience AI-powered project management built for construction — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-3">
            <Link
              href="/request-a-demo"
              className="group inline-flex items-center gap-2 bg-black text-white font-medium text-sm px-6 py-3 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Start free trial
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/request-a-demo"
              className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-neutral-900 px-4 py-3 rounded-full border border-black/10 hover:border-black/20 transition-colors"
            >
              Request a demo
            </Link>
          </div>
        </div>

        {/* ── Related Posts ── */}
        {relatedPosts.length > 0 && (
          <section className="mt-20">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Related articles</span>
              <div className="flex-1 h-px bg-black/8" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blogs/${relatedPost.slug}`}
                  className="group block p-5 rounded-xl border border-black/8 hover:border-black/16 bg-white hover:shadow-sm transition-all duration-300"
                >
                  <span className="inline-flex items-center text-[11px] font-medium text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full px-2.5 py-0.5 mb-3 tracking-wide">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-sm font-normal tracking-tight text-[#0a0a0a] group-hover:text-cyan-500 transition-colors duration-300 line-clamp-2 mb-2">
                    {relatedPost.title}
                  </h3>
                  {relatedPost.readTime && (
                    <span className="flex items-center gap-1 text-xs text-neutral-400">
                      <Clock className="w-3 h-3" />
                      {relatedPost.readTime}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </section>
        )}

      </article>
    </main>
  );
}