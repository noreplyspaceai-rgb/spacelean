import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function TrySection() {
    return (
        <section className="py-32 bg-black text-white text-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-5xl sm:text-7xl font-bold mb-8 tracking-tighter">
                    Ready to focus?
                </h2>
                <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
                    Join the new wave of productive teams. <br className="hidden sm:block" />
                    No clutter. No noise. Just work.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link
                        href="https://cad.spaceaiapp.com/lean"
                        className="bg-white text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors w-full sm:w-auto"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="/request-a-demo"
                        className="text-white border-b border-white pb-1 font-medium hover:text-gray-300 hover:border-gray-300 transition-colors"
                    >
                        Book a Demo
                    </Link>
                </div>
            </div>
        </section>
    );
}
