import Image from 'next/image';

export default function HappyUsers() {
    return (
        <section className="py-20 bg-black text-white border-y border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="text-center md:text-left">
                    <h2 className="text-4xl sm:text-6xl font-bold mb-2 tracking-tighter">
                        500K+
                    </h2>
                    <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">
                        Active Users & Counting
                    </p>
                </div>

                {/* Avatars / Social Proof */}
                <div className="flex gap-4 items-center">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="w-16 h-16 rounded-full border-4 border-black bg-gray-800 relative overflow-hidden grayscale hover:grayscale-0 transition-all">
                                <Image
                                    src={`https://images.unsplash.com/photo-${1500000000000 + i}?q=80&w=100&auto=format&fit=crop`}
                                    alt={`User ${i}`}
                                    width={64}
                                    height={64}
                                    className="object-cover"
                                />
                            </div>
                        ))}
                        <div className="w-16 h-16 rounded-full border-4 border-black bg-white text-black flex items-center justify-center text-sm font-bold">
                            +40k
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
