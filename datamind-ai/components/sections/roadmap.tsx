"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { roadmapPhases } from "@/lib/constants";
import { Check } from "lucide-react";

export function RoadmapSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="roadmap">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text">10-Month Development Journey</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">From Idea to Production-Ready Platform</p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 -translate-y-1/2" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {roadmapPhases.map((phase, i) => (
              <FadeIn key={phase.phase} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 h-full hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 group"
                >
                  {/* Phase number */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}>
                    {phase.icon}
                  </div>

                  <span className="text-xs text-white/30 font-medium">{phase.months}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-3">{phase.title}</h3>

                  <ul className="space-y-2 mb-4">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-xs text-white/40">
                        <Check className="w-3 h-3 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Progress */}
                  <div className="mt-auto">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-white/30">Progress</span>
                      <span className="text-white/50">{phase.progress}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${phase.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className={`h-full rounded-full bg-gradient-to-r ${phase.gradient}`}
                      />
                    </div>
                    <span className={`inline-block mt-3 text-[10px] font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${phase.gradient} text-white`}>
                      {phase.status}
                    </span>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Month dots */}
          <div className="mt-12 flex justify-center gap-3">
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 group cursor-default">
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${i < 10 ? "bg-gradient-to-br from-blue-500 to-purple-500 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-blue-500/30" : "bg-white/10"}`} />
                <span className="text-[10px] text-white/30">M{i + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
