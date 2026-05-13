"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { roadmapPhases } from "@/lib/constants";
import { Check, Clock, ArrowRight } from "lucide-react";

export function RoadmapSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="roadmap">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
            <span className="text-gradient">Built with intention</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">10 months of careful engineering</p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/[0.06]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {roadmapPhases.map((phase, i) => (
              <FadeIn key={phase.phase} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="relative rounded-xl border border-white/[0.06] bg-bg-tertiary p-6 h-full hover:border-white/[0.12] transition-all duration-300"
                >
                  {/* Phase number */}
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-[14px] font-semibold mb-4 ${
                    phase.progress === 100
                      ? "bg-accent/[0.1] border border-accent/[0.15] text-accent-light"
                      : "bg-white/[0.04] border border-white/[0.08] text-text-tertiary"
                  }`}>
                    {phase.progress === 100 ? <Check className="w-4 h-4" /> : `0${phase.phase}`}
                  </div>

                  <span className="text-[11px] text-text-disabled font-medium">{phase.months}</span>
                  <h3 className="text-[15px] font-semibold text-white mt-1 mb-3">{phase.title}</h3>

                  <ul className="space-y-2 mb-5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] text-text-secondary">
                        <ArrowRight className="w-3 h-3 text-text-disabled mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Progress */}
                  <div className="mt-auto">
                    <div className="h-1 rounded-full bg-white/[0.04]">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${phase.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-accent/50"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${
                        phase.status === "Complete"
                          ? "bg-accent/[0.06] text-accent-light border-accent/[0.12]"
                          : phase.status === "In progress"
                          ? "bg-white/[0.04] text-text-secondary border-white/[0.08]"
                          : "bg-white/[0.02] text-text-disabled border-white/[0.06]"
                      }`}>
                        {phase.status}
                      </span>
                      <span className="text-[11px] text-text-disabled">{phase.progress}%</span>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
