"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { careerRoles } from "@/lib/constants";

export function CareerSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Where This Takes You 🚀</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">Career opportunities after this project</p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {careerRoles.map((role) => (
            <StaggerItem key={role.title}>
              <motion.div whileHover={{ y: -6 }}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 h-full">
                <span className="text-3xl block mb-3">{role.icon}</span>
                <h3 className="text-base font-bold text-white mb-1">{role.title}</h3>
                <p className="text-2xl font-bold gradient-text mb-2">{role.salary}</p>
                <p className="text-sm mb-4">{role.demand}</p>
                <div className="flex flex-wrap gap-1.5">
                  {role.skills.map((skill) => (
                    <span key={skill} className="px-2 py-1 text-[10px] font-medium text-white/50 border border-white/[0.08] bg-white/[0.03] rounded-md">
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
