"use client";

import { motion } from "framer-motion";
import { METRICS } from "./data";

export default function MetricsSection() {
  return (
    <section className="py-20 sm:py-32 px-4 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-serif mb-16 text-center">
          Proven Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {METRICS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-serif font-bold mb-2">
                {item.metric}
              </div>
              <div className="text-sm text-neutral-400">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
