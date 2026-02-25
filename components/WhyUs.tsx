import { Zap, Shield, Layout, Target, Clock, Users } from 'lucide-react';

const reasons = [
    {
        icon: <Zap className="w-6 h-6" />,
        title: "Lighting Fast Performance",
        description: "Built on a modern edge network. Interactions happen in under 50ms. No loading spinners, just instant productivity."
    },
    {
        icon: <Target className="w-6 h-6" />,
        title: "Deep Focus Mode",
        description: "Remove the clutter. Our interface adapts to show you only what you need, when you need it."
    },
    {
        icon: <Layout className="w-6 h-6" />,
        title: "Intuitive by Design",
        description: "Zero learning curve. If you know how to use a spreadsheet or a notepad, you already know how to use SpaceLean."
    },
    {
        icon: <Clock className="w-6 h-6" />,
        title: "AI Automation",
        description: "Stop doing the boring stuff. Let our AI handle status updates, meeting summaries, and routine scheduling."
    },
    {
        icon: <Shield className="w-6 h-6" />,
        title: "Enterprise Grade Security",
        description: "Your data is encrypted at rest and in transit. Granular permissions ensure the right people see the right things."
    },
    {
        icon: <Users className="w-6 h-6" />,
        title: "Real-time Collaboration",
        description: "See who is viewing a task, typing a comment, or moving a card. Stay in sync without the constant pings."
    }
];

export default function WhyUs() {
    return (
        <section className="py-32 bg-white border-y border-black/5 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-20 items-stretch">

                    {/* Visual Side */}
                    <div className="lg:w-1/3 relative min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-2xl">
                        <div className="absolute inset-0 bg-black/20 z-10" />
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/design.jpg"
                            alt="Modern minimalist office"
                            className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute bottom-8 left-8 z-20 max-w-xs">
                            <div className="w-12 h-1 bg-white mb-6" />
                            <p className="text-white text-3xl font-bold leading-tight">
                                Designed for the builders, the makers, and the doers.
                            </p>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="lg:w-2/3">
                        <div className="mb-16">
                            <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6 tracking-tighter">
                                Why Top Teams Choose SpaceLean
                            </h2>
                            <p className="text-xl text-gray-500 font-light max-w-2xl">
                                We are obsessed with speed, design, and developer experience.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
                            {reasons.map((reason, idx) => (
                                <div key={idx} className="group">
                                    <div className="w-12 h-12 border border-black/10 flex items-center justify-center mb-6 rounded-lg bg-gray-50 group-hover:bg-black group-hover:text-white transition-all duration-300 shadow-sm">
                                        {reason.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3 uppercase tracking-wide">
                                        {reason.title}
                                    </h3>
                                    <p className="text-gray-500 leading-relaxed">
                                        {reason.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
