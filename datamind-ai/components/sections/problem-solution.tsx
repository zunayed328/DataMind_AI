"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { problems, solutions } from "@/lib/constants";
import { AlertCircle, Zap } from "lucide-react";

export function ProblemSolutionSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, #0A0A0F 0%, #15151F 100%)" }} />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
            <span className="text-gradient">Built for the modern data team</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
            See how DataMind AI transforms the way you work with data
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-4 items-start">
          {/* Problems */}
          <StaggerContainer className="space-y-4">
            <FadeIn>
              <h3 className="text-[11px] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-6">
                The old way
              </h3>
            </FadeIn>
            {problems.map((problem, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-xl border border-white/[0.06] bg-bg-tertiary p-6 hover:border-white/[0.12] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <AlertCircle className="w-4 h-4 text-text-disabled" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-semibold text-white mb-1">
                        {problem.title}
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {problem.description}
                      </p>
                      <span className="inline-block mt-3 text-[11px] font-medium text-text-tertiary px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06]">
                        {problem.stat}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Center Divider */}
          <div className="hidden lg:flex flex-col items-center justify-center h-full py-16">
            <div className="w-px h-full bg-gradient-to-b from-white/[0.04] via-white/[0.08] to-white/[0.04]" />
          </div>

          {/* Solutions */}
          <StaggerContainer staggerDelay={0.1} className="space-y-4">
            <FadeIn>
              <h3 className="text-[11px] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-6">
                The DataMind way
              </h3>
            </FadeIn>
            {solutions.map((solution, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  className="group rounded-xl border border-white/[0.06] bg-bg-tertiary p-6 hover:border-accent/[0.2] transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-lg bg-accent/[0.08] border border-accent/[0.12] flex items-center justify-center flex-shrink-0">
                      <Zap className="w-4 h-4 text-accent-light" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-semibold text-white mb-1">
                        {solution.title}
                      </h4>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {solution.description}
                      </p>
                      <span className="inline-block mt-3 text-[11px] font-medium text-accent-light px-2.5 py-1 rounded-md bg-accent/[0.06] border border-accent/[0.12]">
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
    </section>
  );
}
