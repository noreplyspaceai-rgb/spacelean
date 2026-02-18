import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check, Zap } from 'lucide-react';
import { comparisons } from '@/lib/compare-data';

export const metadata: Metadata = {
    title: 'Compare SpaceLean',
    description: 'See how SpaceLean compares to other project management tools.',
};

export default function ComparePage() {
    return (
        <main className="min-h-screen bg-[#fafafa] text-black pt-32 pb-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-[60vw] h-[60vw] border border-black/5 rounded-full -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-black/10 bg-white mb-8 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-black" />
                        <span className="text-xs font-bold tracking-wide uppercase">Comparison Guide</span>
                    </div>
                    <h1 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tighter text-black">
                        Why Teams Switch <br className="hidden sm:block" />
                        <span className="text-gray-300">to SpaceLean.</span>
                    </h1>
                    <p className="text-xl sm:text-2xl text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Don't just manage tasks. Automate them. See how our AI-first approach compares to traditional tools.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
                    {comparisons.map((comp) => (
                        <Link
                            key={comp.slug}
                            href={`/compare/${comp.slug}`}
                            className="group relative bg-white border border-black/5 hover:border-black/20 hover:shadow-2xl hover:shadow-black/5 transition-all duration-500 p-10 rounded-3xl block hover:-translate-y-2"
                        >
                            <div className="flex items-center justify-between mb-10">
                                <div className="text-xs font-bold uppercase tracking-widest text-gray-400 bg-gray-50 px-3 py-1 rounded-full group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                    Vs {comp.competitorName}
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-500">
                                    <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-black mb-6 tracking-tight">
                                SpaceLean <span className="text-gray-300">vs</span> {comp.competitorName}
                            </h2>

                            <p className="text-gray-500 mb-10 line-clamp-3 leading-relaxed text-lg">
                                {comp.summary}
                            </p>

                            <div className="space-y-4 pt-8 border-t border-black/5">
                                <div className="flex items-center gap-3 text-gray-600 group-hover:text-black transition-colors">
                                    <Check className="w-5 h-5" />
                                    <span className="font-medium">AI-First Planning</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-600 group-hover:text-black transition-colors">
                                    <Zap className="w-5 h-5" />
                                    <span className="font-medium">Automated Scheduling</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl font-bold text-black mb-8 tracking-tight">Ready to upgrade your workflow?</h2>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/auth/register"
                            className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all hover:scale-105 shadow-xl shadow-black/20"
                        >
                            Get Started Free
                        </Link>
                        <Link
                            href="/request-a-demo"
                            className="text-black font-bold text-lg hover:text-gray-600 transition-colors"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}
