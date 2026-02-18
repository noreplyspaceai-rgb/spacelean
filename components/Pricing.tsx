"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const tiers = [
    {
        name: "Individual",
        price: "0",
        description: "Perfect for freelancers and solo builders.",
        features: [
            "Up to 3 projects",
            "Basic AI task generation",
            "Manual time tracking",
            "Community support",
        ],
        cta: "Start for Free",
        href: "https://cad.spaceaiapp.com/lean",
        highlight: false,
    },
    {
        name: "Pro",
        price: "19",
        description: "For teams that need more power and automation.",
        features: [
            "Unlimited projects",
            "Advanced AI project decomposition",
            "Predictive capacity planning",
            "Priority email support",
            "Two-way calendar sync",
        ],
        cta: "Try Pro Free",
        href: "https://cad.spaceaiapp.com/lean",
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "Custom",
        description: "Scale with confidence and dedicated control.",
        features: [
            "Everything in Pro",
            "SSO & SAML authentication",
            "Audit logs & compliance reports",
            "Dedicated account manager",
            "Custom AI model training",
        ],
        cta: "Contact Sales",
        href: "/request-a-demo",
        highlight: false,
    },
];

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <section className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[40vw] h-[40vw] border border-black/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-6xl font-bold text-black mb-6 tracking-tighter">
                        Transparent <br className="hidden sm:block" />
                        <span className="text-gray-300">Pricing.</span>
                    </h2>
                    <p className="text-xl text-gray-500 font-light max-w-2xl mx-auto">
                        Choose the plan that fits your team's ambition. <br className="hidden sm:block" />
                        No hidden fees, cancel anytime.
                    </p>

                    <div className="mt-12 flex items-center justify-center gap-4">
                        <span className={`text-sm font-medium ${!isAnnual ? 'text-black' : 'text-gray-400'}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="relative w-12 h-6 rounded-full bg-gray-100 p-1 transition-colors border border-black/5"
                        >
                            <div className={`w-4 h-4 rounded-full bg-black transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'}`} />
                        </button>
                        <span className={`text-sm font-medium ${isAnnual ? 'text-black' : 'text-gray-400'}`}>Annually (Save 20%)</span>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-stretch">
                    {tiers.map((tier, idx) => (
                        <motion.div
                            key={tier.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className={`flex flex-col p-10 rounded-[2.5rem] border ${tier.highlight
                                    ? 'bg-black text-white border-black shadow-2xl shadow-black/20'
                                    : 'bg-white text-black border-black/5'
                                } transition-all duration-500 hover:-translate-y-2`}
                        >
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2 tracking-tight">{tier.name}</h3>
                                <p className={`text-sm font-light ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {tier.description}
                                </p>
                            </div>

                            <div className="mb-8 items-baseline flex gap-1">
                                <span className="text-4xl font-bold tracking-tighter">
                                    {tier.price === "Custom" ? "" : "$"}
                                    {tier.price === "Custom" ? "Custom" : tier.price}
                                </span>
                                {tier.price !== "Custom" && (
                                    <span className={`text-sm font-light ${tier.highlight ? 'text-gray-400' : 'text-gray-500'}`}>
                                        /user /month
                                    </span>
                                )}
                            </div>

                            <ul className="space-y-4 mb-10 flex-grow">
                                {tier.features.map((feature) => (
                                    <li key={feature} className="flex items-start gap-3">
                                        <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${tier.highlight ? 'text-white' : 'text-black'}`} />
                                        <span className={`text-sm font-light ${tier.highlight ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={tier.href}
                                className={`w-full py-4 rounded-full font-bold text-center flex items-center justify-center gap-2 transition-all ${tier.highlight
                                        ? 'bg-white text-black hover:bg-gray-200'
                                        : 'bg-black text-white hover:bg-gray-800 shadow-xl shadow-black/10'
                                    }`}
                            >
                                {tier.cta}
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
