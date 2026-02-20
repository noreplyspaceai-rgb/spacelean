import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { blogPosts } from '@/lib/blog-data';
import { Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | SpaceLean',
  description: 'Insights on productivity, AI, and project management.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#fafafa] text-primary-text pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-20 border-b border-black/10 pb-12">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-tight mb-6">
            The Journal
          </h1>
          <p className="text-xl text-gray-500 font-light max-w-2xl">
            Thoughts on the future of work, AI, and designing chaos out of your day.
          </p>
        </div>

        {/* Featured Post (First one) */}
        {blogPosts.length > 0 && (
          <div className="mb-24">
            <Link href={`/blogs/${blogPosts[0].slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-none border border-black/5">
                  <div className="absolute inset-0 bg-gray-200" /> {/* Placeholder if image fails */}
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                    <span>{blogPosts[0].category}</span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 group-hover:underline decoration-1 underline-offset-8">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-xl text-gray-500 mb-8 line-clamp-3 font-light">
                    {blogPosts[0].description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative grayscale">
                      {/* Author Image Placeholder */}
                    </div>
                    <span className="text-sm font-medium">{blogPosts[0].author}</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid of remaining posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.slug} href={`/blogs/${post.slug}`} className="group block">
              <div className="mb-6 relative aspect-[3/2] overflow-hidden border border-black/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
              </div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 group-hover:underline decoration-1 underline-offset-4">
                {post.title}
              </h3>
              <p className="text-gray-500 line-clamp-2 leading-relaxed">
                {post.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
