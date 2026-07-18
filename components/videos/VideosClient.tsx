"use client";

import { useState, useMemo } from "react";
import { videos } from "@/lib/videos-data";
import { Sparkles, Search } from "lucide-react";

export default function VideosClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = useMemo(() => {
    const cats = new Set(videos.map((v) => v.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredVideos = useMemo(() => {
    let result = videos;
    if (selectedCategory !== "All") {
      result = result.filter((v) => v.category === selectedCategory);
    }
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter((v) => v.title.toLowerCase().includes(query));
    }
    return result;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 border-b border-black/[0.06]">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(34,211,238,0.3) 1px,transparent 1px),linear-gradient(90deg,rgba(34,211,238,0.3) 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          <div className="absolute -top-40 right-0 w-[600px] h-[400px] rounded-full bg-cyan-100 blur-3xl opacity-40" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full bg-blue-100 blur-3xl opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-600 bg-cyan-50 border border-cyan-100 rounded-full px-3 py-1 mb-5 tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-cyan-500" />
            Media Library
          </div>

          <h1 className="text-4xl sm:text-6xl font-normal tracking-tight leading-tight text-gray-900 max-w-3xl mb-4">
            SpaceLean <span className="font-bold text-cyan-500">Videos</span>
          </h1>

          <p className="max-w-3xl border-l-4 border-cyan-400 pl-4">
            <span className="block text-base sm:text-lg font-mono text-neutral-500 leading-relaxed">
              Watch official SpaceLean product demos, AI-powered construction workflows, BIM walkthroughs, tutorials, and feature demonstrations to discover how SpaceLean simplifies modern construction project management.
            </span>
          </p>
        </div>
      </section>

      {/* Category Tabs & Search Bar */}
      <div className="sticky top-[72px] z-20 bg-white/90 backdrop-blur-md border-b border-black/[0.06] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Category filter chips */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 scroll-smooth">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                      : "bg-black/[0.04] text-neutral-600 hover:bg-black/[0.08]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search Bar */}
            <div className="relative w-full sm:w-80">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-neutral-400" />
              </span>
              <input
                type="text"
                placeholder="Search videos by title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-black/10 bg-black/[0.02] text-xs font-medium focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all duration-200 placeholder-neutral-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div
                key={video.id}
                className="group flex flex-col rounded-2xl bg-white border border-black/[0.06] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* 16:9 Aspect Ratio Responsive Embedded Player */}
                <div className="relative aspect-video w-full bg-neutral-900 overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    loading="lazy"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    className="absolute inset-0 w-full h-full border-0"
                  ></iframe>
                </div>

                {/* Text Info */}
                <div className="p-6 flex flex-col flex-1">
                  {/* Category Badge */}
                  <div className="mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-cyan-100 text-cyan-700 text-[9px] font-bold uppercase tracking-wider">
                      {video.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-neutral-900 text-base leading-snug transition-colors duration-200 mb-2">
                    {video.title}
                  </h3>
                  <p className="text-neutral-500 text-xs leading-relaxed flex-1">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-500 font-mono text-sm">
              No videos found matching your search query.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
