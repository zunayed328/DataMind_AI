"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { roadmapPhases } from "@/lib/constants";
import { Check, Clock, ArrowRight } from "lucide-react";

export function RoadmapSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden" id="roadmap">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="aurora-blob aurora-blob-violet w-[600px] h-[400px] top-[30%] left-[-200px] opacity-30" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="badge-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-6">
            Development Timeline
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient">Built with intention</span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg">10 months of careful engineering</p>
        </FadeIn>

        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/15 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {roadmapPhases.map((phase, i) => (
              <FadeIn key={phase.phase} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="card-premium p-6 h-full"
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-[14px] font-bold mb-4 ${
                    phase.progress === 100
                      ? "bg-accent/[0.12] border border-accent/[0.2] text-accent-light"
                      : "bg-white/[0.04] border border-white/[0.08] text-text-tertiary"
                  }`}>
                    {phase.progress === 100 ? <Check className="w-4 h-4" /> : `0${phase.phase}`}
                  </div>

                  <span className="text-[11px] text-text-disabled font-semibold uppercase tracking-wider">{phase.months}</span>
                  <h3 className="text-[15px] font-bold text-white mt-1.5 mb-3">{phase.title}</h3>

                  <ul className="space-y-2 mb-5">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-[12px] text-text-secondary">
                        <ArrowRight className="w-3 h-3 text-text-disabled mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${phase.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-accent/60 to-accent-cyan/40"
                      />
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-md ${
                        phase.status === "Complete"
                          ? "badge-accent"
                          : phase.status === "In progress"
                          ? "bg-amber-500/[0.08] text-amber-400 border border-amber-500/[0.15]"
                          : "badge-subtle"
                      }`}>
                        {phase.status}
                      </span>
                      <span className="text-[11px] text-text-disabled font-medium">{phase.progress}%</span>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
