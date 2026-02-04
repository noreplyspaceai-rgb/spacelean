import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { solutions } from "@/lib/solutions-data";

export const metadata: Metadata = {
  title: "Solutions | Space Lean - AI-Powered Productivity for Every Team",
  description:
    "Discover how Space Lean empowers Marketing, Product, Engineering, Design, Startup, and Remote teams with AI-powered productivity solutions tailored to your workflow.",
  keywords: [
    "team productivity solutions",
    "AI-powered team management",
    "enterprise collaboration software",
    "team workflow automation",
    "business productivity platform",
  ],
};

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-purple-50/30 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="text-lg">💡</span>
            <span>Solutions for Every Team</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            One Platform,{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Endless Possibilities
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Space Lean adapts to your team&apos;s unique workflow. Whether
            you&apos;re in marketing, engineering, design, or leading a startup,
            our AI-powered platform helps you work smarter and achieve more.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="pb-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="group relative bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-purple-200 transition-all duration-300 hover:shadow-xl hover:shadow-purple-100/50"
              >
                {/* Image */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={solution.heroImage}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{solution.icon}</span>
                    <h2 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {solution.title.replace("Space Lean for ", "")}
                    </h2>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {solution.tagline}
                  </p>

                  {/* Features preview */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {solution.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {feature.title}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-purple-600 font-medium group-hover:gap-3 gap-2 transition-all">
                    <span>Learn more</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                Not Sure Which Solution Fits Your Team?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Let our team help you find the perfect setup. Schedule a
                personalized demo and discover how Space Lean can transform your
                workflow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/request-a-demo"
                  className="inline-flex items-center justify-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <span>Request a Demo</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
                <Link
                  href="/request-a-demo"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  <span>Compare Solutions</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
