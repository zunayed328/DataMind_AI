"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { careerRoles } from "@/lib/constants";
import { TrendingUp, Briefcase } from "lucide-react";

const cardGradients = [
  "from-violet-500/8 to-transparent",
  "from-cyan-500/8 to-transparent",
  "from-emerald-500/8 to-transparent",
  "from-amber-500/8 to-transparent",
  "from-rose-500/8 to-transparent",
  "from-blue-500/8 to-transparent",
];

export function CareerSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-bg-primary" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="aurora-blob aurora-blob-violet w-[600px] h-[500px] top-[30%] right-[-250px] opacity-25" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="badge-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-6">
            Career Paths
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient">Where this can take you</span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg">Career opportunities after this project</p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {careerRoles.map((role, i) => (
            <StaggerItem key={role.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="card-premium p-7 h-full"
              >
                {/* Corner gradient */}
                <div className={`absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl ${cardGradients[i]} rounded-bl-[60px] opacity-60`} />

                <div className="relative">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="w-4 h-4 text-accent-light/60" />
                    <h3 className="text-[15px] font-bold text-white">{role.title}</h3>
                  </div>
                  <p className="text-2xl font-extrabold text-white mb-1 tracking-[-0.02em]">{role.salary}</p>
                  <p className="text-[12px] text-text-disabled mb-2 font-medium">Average annual salary</p>

                  <div className="flex items-center gap-1.5 mb-6">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-[12px] font-semibold text-emerald-400">Demand: {role.demand}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {role.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1 text-[11px] font-semibold text-text-tertiary border border-white/[0.06] bg-white/[0.02] rounded-lg">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
