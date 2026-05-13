"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { careerRoles } from "@/lib/constants";
import { TrendingUp } from "lucide-react";

export function CareerSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
            <span className="text-gradient">Where this can take you</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">Career opportunities after this project</p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {careerRoles.map((role) => (
            <StaggerItem key={role.title}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="rounded-xl border border-white/[0.06] bg-bg-tertiary p-7 hover:border-white/[0.12] transition-all duration-300 h-full"
              >
                <h3 className="text-[15px] font-semibold text-white mb-2">{role.title}</h3>
                <p className="text-2xl font-semibold text-white mb-1 tracking-[-0.01em]">{role.salary}</p>
                <p className="text-[12px] text-text-disabled mb-1">Average annual salary</p>

                <div className="flex items-center gap-1.5 mb-5">
                  <TrendingUp className="w-3.5 h-3.5 text-accent-light" />
                  <span className="text-[12px] font-medium text-accent-light">Demand: {role.demand}</span>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {role.skills.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 text-[11px] font-medium text-text-tertiary border border-white/[0.06] bg-white/[0.02] rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
