"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { problems, solutions } from "@/lib/constants";
import { AlertCircle, Zap, ArrowRight } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Aurora accent */}
      <div className="aurora-blob aurora-blob-violet w-[600px] h-[500px] top-[10%] left-[-200px] opacity-50" />
      <div className="aurora-blob aurora-blob-cyan w-[500px] h-[400px] bottom-[10%] right-[-200px] opacity-40" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="badge-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-6">
            Why DataMind
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient">Built for the modern data team</span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            See how DataMind AI transforms the way you work with data
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-6 items-start">
          {/* Problems */}
          <StaggerContainer className="space-y-4">
            <FadeIn>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-rose-500/60" />
                <h3 className="text-[11px] font-semibold text-text-tertiary uppercase tracking-[0.1em]">
                  The old way
                </h3>
              </div>
            </FadeIn>
            {problems.map((problem, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="card-premium p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/[0.08] border border-rose-500/[0.12] flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-4.5 h-4.5 text-rose-400/70" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-semibold text-white mb-1.5">
                        {problem.title}
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {problem.description}
                      </p>
                      <span className="inline-block mt-3.5 text-[11px] font-semibold text-rose-400/80 px-3 py-1 rounded-lg bg-rose-500/[0.06] border border-rose-500/[0.1]">
                        {problem.stat}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Center Divider */}
          <div className="hidden lg:flex flex-col items-center justify-center h-full py-20">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent relative">
              <motion.div
                animate={{ y: [0, 40, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center"
              >
                <ArrowRight className="w-3.5 h-3.5 text-accent-light" />
              </motion.div>
            </div>
          </div>

          {/* Solutions */}
          <StaggerContainer staggerDelay={0.1} className="space-y-4">
            <FadeIn>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent-light/60" />
                <h3 className="text-[11px] font-semibold text-text-tertiary uppercase tracking-[0.1em]">
                  The DataMind way
                </h3>
              </div>
            </FadeIn>
            {solutions.map((solution, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -3, scale: 1.01 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="card-premium p-6 hover:!border-accent/[0.25]"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl icon-glow flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4.5 h-4.5 text-accent-light" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-semibold text-white mb-1.5">
                        {solution.title}
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {solution.description}
                      </p>
                      <span className="inline-block mt-3.5 text-[11px] font-semibold badge-accent px-3 py-1 rounded-lg">
                        {solution.benefit}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
