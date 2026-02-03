import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getSolutionBySlug,
  getAllSolutionSlugs,
  solutions,
} from "@/lib/solutions-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found | Space Lean",
    };
  }

  return {
    title: `${solution.title} | Space Lean`,
    description: solution.metaDescription,
    keywords: solution.keywords,
    openGraph: {
      title: solution.title,
      description: solution.metaDescription,
      type: "website",
      images: [solution.heroImage],
    },
    twitter: {
      card: "summary_large_image",
      title: solution.title,
      description: solution.metaDescription,
    },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  // Get other solutions for cross-linking
  const otherSolutions = solutions.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-purple-50 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-6 group"
              >
                <svg
                  className="w-4 h-4 group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>All Solutions</span>
              </Link>

              <div className="flex items-center gap-3 mb-4">
                <span className="text-4xl">{solution.icon}</span>
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  {solution.title.replace("Space Lean for ", "")}
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {solution.tagline}
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {solution.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/request-a-demo"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-200 transition-all"
                >
                  <span>{solution.cta.primary}</span>
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
                  className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-200 hover:text-purple-600 transition-all"
                >
                  <span>{solution.cta.secondary}</span>
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/20">
                <Image
                  src={solution.heroImage}
                  alt={solution.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Measurable Impact for Your Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of teams who have transformed their workflow with
              Space Lean
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {solution.benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features Built for{" "}
              {solution.title.replace("Space Lean for ", "")}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to supercharge your team&apos;s productivity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-purple-200 hover:shadow-xl hover:shadow-purple-50 transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Built for Your Workflow
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Space Lean seamlessly integrates with how your team already
                works. Here are some common use cases:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {solution.useCases.map((useCase, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-100"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 text-sm">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Dashboard Mockup */}
            <div className="relative">
              <div className="aspect-[4/3] bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-white rounded-md px-3 py-1.5 text-xs text-gray-400 border border-gray-200">
                      spacelean.app/dashboard
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-4 bg-gray-50 h-full">
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {/* Stat Cards */}
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <p className="text-[10px] text-gray-400 mb-1">
                        Active Tasks
                      </p>
                      <p className="text-lg font-bold text-purple-600">24</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <p className="text-[10px] text-gray-400 mb-1">
                        Completed
                      </p>
                      <p className="text-lg font-bold text-blue-600">156</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                      <p className="text-[10px] text-gray-400 mb-1">
                        Productivity
                      </p>
                      <p className="text-lg font-bold text-green-600">92%</p>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <p className="text-[10px] text-gray-500 font-medium">
                        Weekly Progress
                      </p>
                      <div className="flex items-center gap-1 bg-green-50 px-1.5 py-0.5 rounded">
                        <span className="text-[9px] text-green-600 font-medium">
                          ↑ 12%
                        </span>
                      </div>
                    </div>
                    <div className="flex items-end justify-between h-20 gap-2 px-1">
                      <div className="flex flex-col items-center justify-end flex-1 h-full">
                        <div className="w-full h-8 bg-gradient-to-t from-indigo-500 to-indigo-400 rounded-md shadow-sm" />
                        <span className="text-[8px] text-gray-500 font-medium mt-1">
                          Mon
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-end flex-1 h-full">
                        <div className="w-full h-12 bg-gradient-to-t from-violet-500 to-violet-400 rounded-md shadow-sm" />
                        <span className="text-[8px] text-gray-500 font-medium mt-1">
                          Tue
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-end flex-1 h-full">
                        <div className="w-full h-9 bg-gradient-to-t from-purple-500 to-purple-400 rounded-md shadow-sm" />
                        <span className="text-[8px] text-gray-500 font-medium mt-1">
                          Wed
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-end flex-1 h-full">
                        <div className="w-full h-14 bg-gradient-to-t from-fuchsia-500 to-fuchsia-400 rounded-md shadow-sm" />
                        <span className="text-[8px] text-gray-500 font-medium mt-1">
                          Thu
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-end flex-1 h-full">
                        <div className="w-full h-10 bg-gradient-to-t from-pink-500 to-pink-400 rounded-md shadow-sm" />
                        <span className="text-[8px] text-gray-500 font-medium mt-1">
                          Fri
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-end flex-1 h-full">
                        <div className="w-full h-16 bg-gradient-to-t from-rose-500 to-rose-400 rounded-md shadow-sm" />
                        <span className="text-[8px] text-gray-500 font-medium mt-1">
                          Sat
                        </span>
                      </div>
                      <div className="flex flex-col items-center justify-end flex-1 h-full">
                        <div className="w-full h-12 bg-gradient-to-t from-orange-500 to-orange-400 rounded-md shadow-sm" />
                        <span className="text-[8px] text-gray-500 font-medium mt-1">
                          Sun
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Task List */}
                  <div className="bg-white rounded-lg p-3 shadow-sm border border-gray-100">
                    <p className="text-[10px] text-gray-500 font-medium mb-2">
                      Today&apos;s Tasks
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2 border-purple-500 bg-purple-500 flex items-center justify-center">
                          <svg
                            className="w-2.5 h-2.5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <span className="text-[10px] text-gray-400 line-through">
                          Review Q4 reports
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2 border-gray-300" />
                        <span className="text-[10px] text-gray-600">
                          Update project timeline
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded border-2 border-gray-300" />
                        <span className="text-[10px] text-gray-600">
                          Team sync meeting
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      {solution.testimonial && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden">
              {/* Background decorations */}
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10">
                <svg
                  className="w-12 h-12 text-white/30 mx-auto mb-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed">
                  &quot;{solution.testimonial.quote}&quot;
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Other Solutions Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Other Solutions
            </h2>
            <p className="text-gray-600">
              Discover how Space Lean helps other teams succeed
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherSolutions.map((otherSolution) => (
              <Link
                key={otherSolution.slug}
                href={`/solutions/${otherSolution.slug}`}
                className="group bg-white rounded-2xl border border-gray-100 p-6 hover:border-purple-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{otherSolution.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                    {otherSolution.title.replace("Space Lean for ", "")}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {otherSolution.tagline}
                </p>
                <div className="flex items-center text-purple-600 font-medium text-sm">
                  <span>Learn more</span>
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
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
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700"
            >
              <span>View All Solutions</span>
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
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your{" "}
            {solution.title.replace("Space Lean for ", "")}?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who have already made the switch. Start your
            free trial today and see the difference Space Lean can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/request-a-demo"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-200 transition-all"
            >
              <span>{solution.cta.primary}</span>
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
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-purple-200 hover:text-purple-600 transition-all"
            >
              <span>Talk to Sales</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
