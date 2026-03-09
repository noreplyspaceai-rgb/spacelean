"use client";

import { motion } from "framer-motion";
import { WORKFLOW_STEPS } from "./data";

export default function WorkflowSection() {
  return (
    <section className="py-20 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-serif text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            A simple, four-step workflow that turns your BIM model into an intelligent
            schedule.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {WORKFLOW_STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex gap-6 items-start"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-neutral-100 rounded-lg flex items-center justify-center text-2xl font-serif font-bold text-neutral-900">
                {item.step}
              </div>
              <div className="flex-1 pt-1">
                <h3 className="text-xl font-serif text-neutral-900 mb-2">{item.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{item.description}</p>
              </div>
              <div className="text-3xl">{item.icon}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
