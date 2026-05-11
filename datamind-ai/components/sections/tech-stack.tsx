"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { techStacks } from "@/lib/constants";

const archFlow = [
  { label: "Streamlit UI", icon: "🖥️", color: "border-blue-500/30" },
  { label: "FastAPI", icon: "⚡", color: "border-green-500/30" },
  { label: "LangChain", icon: "🔗", color: "border-purple-500/30" },
  { label: "GPT-4", icon: "🤖", color: "border-pink-500/30" },
];

export function TechStackSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden" id="tech-stack">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Powered By Cutting-Edge Technology</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">Industry-standard tools used by top companies</p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 gap-6 mb-16">
          {techStacks.map((stack) => (
            <StaggerItem key={stack.title}>
              <motion.div whileHover={{ y: -6 }}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stack.gradient} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                    {stack.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{stack.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {stack.techs.map((tech) => (
                    <motion.span key={tech} whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 text-xs font-medium text-white/60 rounded-lg border border-white/[0.08] bg-white/[0.03] hover:border-white/15 hover:text-white/80 hover:bg-white/[0.06] transition-all duration-200 cursor-default">
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Architecture Flow */}
        <FadeIn>
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8">
            <h3 className="text-lg font-bold text-white text-center mb-8">System Architecture</h3>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {archFlow.map((item, i) => (
                <div key={item.label} className="flex items-center gap-4">
                  <motion.div whileHover={{ y: -4, scale: 1.05 }}
                    className={`px-5 py-3 rounded-xl border ${item.color} bg-white/[0.03] backdrop-blur-sm text-center hover:bg-white/[0.06] transition-all duration-300 cursor-default`}>
                    <span className="text-2xl block mb-1">{item.icon}</span>
                    <span className="text-xs font-medium text-white/70">{item.label}</span>
                  </motion.div>
                  {i < archFlow.length - 1 && <span className="text-white/20 text-lg hidden sm:block">→</span>}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6">
              <div className="flex flex-wrap items-center justify-center gap-3">
                {["PostgreSQL", "Docker Compose", "AWS Cloud", "GitHub Actions CI/CD"].map((item) => (
                  <span key={item} className="px-3 py-1.5 text-xs font-medium text-white/40 rounded-lg border border-white/[0.06] bg-white/[0.02]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
