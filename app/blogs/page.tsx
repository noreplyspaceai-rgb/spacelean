import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { Sparkles, ArrowRight, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | SpaceLean — AI Construction Scheduling & Productivity Insights',
  description:
    'Insights on AI-powered construction scheduling, lean project management, team productivity, and the future of construction technology.',
  alternates: {
    canonical: 'https://spacelean.ai/blogs',
  },
};

const POSTS_PER_PAGE = 9;

interface PageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: PageProps) {
  const resolvedParams = await searchParams;
  const currentPage = Number(resolvedParams.page) || 1;

  // Split out the featured post (which always remains at the top on page 1)
  const featuredPost = blogPosts[0];
  const remainingPosts = blogPosts.slice(1);

  const totalPages = Math.ceil(remainingPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = remainingPosts.slice(startIndex, endIndex);

  return (
    <main className="min-h-screen text-[#0a0a0a] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-20">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-700 bg-black/5 border border-black/10 rounded-full px-3 py-1 mb-6 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-neutral-900" />
            Insights &amp; Perspectives
          </span>

          <div className="flex items-center gap-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-none text-[#0a0a0a] mb-5">
              The Journal
            </h1>
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex-shrink-0 -mt-4">
              <Image
                src="/ekkant-feather-13992_512.gif"
                alt="Feather animation"
                fill
                unoptimized
                priority
                className="object-contain"
              />
            </div>
          </div>

          <p className="text-base sm:text-lg text-neutral-500 leading-relaxed max-w-xl">
            Thoughts on the future of construction, AI-native workflows, and designing complexity out of your projects.
          </p>
          <div className="mt-8 h-px bg-black/8 w-full" />
        </div>

        {/* ── Featured Post (Only show on page 1) ── */}
        {currentPage === 1 && featuredPost && (
          <div className="mb-24">
            <Link href={`/blogs/${featuredPost.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
                <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-2xl border border-black/8 bg-neutral-100">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    priority // Elevates FCP/LCP priority
                    fetchPriority="high" // Informs browser parser to fetch first
                    sizes="(max-width: 768px) 100vw, 50vw" // Prevents downloading huge desktop sizes
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-5">
                    <span className="inline-flex items-center text-xs font-medium text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1 tracking-wide">
                      {featuredPost.category}
                    </span>
                    <span className="text-xs text-neutral-400">{featuredPost.date}</span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-normal tracking-tight leading-tight text-[#0a0a0a] mb-4 group-hover:text-cyan-500 transition-colors duration-300">
                    {featuredPost.title}
                  </h2>

                  <p className="text-base text-neutral-500 leading-relaxed mb-8 line-clamp-3">
                    {featuredPost.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-black/8 border border-black/10 overflow-hidden" />
                      <span className="text-sm font-medium text-neutral-700">{featuredPost.author}</span>
                    </div>
                    <span className="group/arrow inline-flex items-center gap-1.5 text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors">
                      Read article.
                      <ArrowRight className="w-4 h-4 group-hover/arrow:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* ── Section divider ── */}
        <div className="flex items-center gap-4 mb-14">
          <span className="text-xs font-medium text-neutral-400 uppercase tracking-widest">
            {currentPage === 1 ? 'More articles' : `Articles — Page ${currentPage}`}
          </span>
          <div className="flex-1 h-px bg-black/8" />
        </div>

        {/* ── Grid of remaining posts ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {paginatedPosts.map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block">
              <div className="mb-5 relative aspect-[3/2] overflow-hidden rounded-xl border border-black/8 bg-neutral-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" // Instructs browser on actual render width
                  className="object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center text-[11px] font-medium text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full px-2.5 py-0.5 tracking-wide">
                  {post.category}
                </span>
                {post.readTime && (
                  <span className="flex items-center gap-1 text-xs text-neutral-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-normal tracking-tight leading-snug text-[#0a0a0a] mb-2.5 group-hover:text-cyan-500 transition-colors duration-300">
                {post.title}
              </h3>

              <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed mb-4">
                {post.description}
              </p>

              <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 group-hover:text-neutral-900 transition-colors">
                Read more
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>

        {/* ── Pagination controls ── */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-20 pt-10 border-t border-black/5">
            {currentPage > 1 ? (
              <Link
                href={`/blogs?page=${currentPage - 1}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/10 rounded-full text-sm font-medium hover:bg-black/[0.04] transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Previous
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/5 text-neutral-300 rounded-full text-sm font-medium cursor-not-allowed">
                <ChevronLeft className="w-4 h-4" />
                Previous
              </span>
            )}

            <span className="text-sm font-medium text-neutral-500">
              Page {currentPage} of {totalPages}
            </span>

            {currentPage < totalPages ? (
              <Link
                href={`/blogs?page=${currentPage + 1}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/10 rounded-full text-sm font-medium hover:bg-black/[0.04] transition-colors"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </Link>
            ) : (
              <span className="inline-flex items-center gap-2 px-5 py-2.5 border border-black/5 text-neutral-300 rounded-full text-sm font-medium cursor-not-allowed">
                Next
                <ChevronRight className="w-4 h-4" />
              </span>
            )}
          </div>
        )}

      </div>
    </main>
  );
}