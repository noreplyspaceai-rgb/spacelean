import Image from 'next/image';

const testimonials = [
    {
        content: "SpaceLean stripped away the noise. We just drag, drop, and done. It’s the cleanest tool we’ve ever used. The AI suggestions are actually useful, not just a gimmick.",
        author: "Sarah Jenkins",
        role: "Product Manager, TechFlow",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    },
    {
        content: "The AI doesn't guess; it knows. Our scheduling accuracy improved by 40% in the first week. It feels like having a dedicated project manager for every single team member.",
        author: "Michael Chen",
        role: "CTO, StartupX",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop"
    },
    {
        content: "Finally, a project management tool that respects my time. No clutter, just clarity. I spend less time managing tickets and more time actually building the product.",
        author: "Emily Rodriguez",
        role: "Marketing Lead",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop"
    }
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-[#fafafa] border-t border-black/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-16">
                    {testimonials.map((t, idx) => (
                        <div key={idx} className="flex flex-col justify-between h-full group">
                            <div className="mb-10">
                                <div className="flex gap-1.5 mb-8 opacity-50 group-hover:opacity-100 transition-opacity">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="w-2.5 h-2.5 rounded-full bg-black" />
                                    ))}
                                </div>
                                <p className="text-2xl font-serif italic text-gray-800 leading-relaxed font-light">
                                    "{t.content}"
                                </p>
                            </div>
                            <div className="flex items-center gap-5">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border border-black/10">
                                    <Image
                                        src={t.image}
                                        alt={t.author}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="font-bold text-black uppercase tracking-wider text-sm mb-1">{t.author}</div>
                                    <div className="text-xs text-gray-500 font-mono tracking-tight">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
