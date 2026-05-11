"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { motion } from "framer-motion";

const team = [
  { name: "DataMind AI Team", role: "Full Stack AI Development", avatar: "🧠", gradient: "from-blue-500 to-purple-600" },
];

const milestones = [
  { date: "Month 1-2", event: "Project inception & Python/ML mastery", icon: "🏗️" },
  { date: "Month 3-4", event: "Core platform built: Upload + EDA + Chat", icon: "⚙️" },
  { date: "Month 5-6", event: "ML pipeline & LLM integration complete", icon: "🤖" },
  { date: "Month 7-8", event: "RAG system & cloud deployment", icon: "🚀" },
  { date: "Month 9", event: "Testing, documentation & research paper", icon: "🧪" },
  { date: "Month 10", event: "Production launch & final presentation", icon: "🎯" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="gradient-text">About DataMind AI</span>
            </h1>
            <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">
              A CSE Capstone Project that pushes the boundaries of AI-powered data analytics
            </p>
          </FadeIn>

          {/* Mission */}
          <FadeIn className="mb-20">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-white/50 leading-relaxed">
                To democratize data analysis by making AI-powered insights accessible to everyone — regardless of technical background. DataMind AI combines the power of Large Language Models, automated machine learning, and intuitive design to transform how people interact with data.
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-10">Development Timeline</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {milestones.map((m, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -4 }}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
                  <span className="text-2xl block mb-2">{m.icon}</span>
                  <p className="text-xs text-blue-400 font-medium mb-1">{m.date}</p>
                  <p className="text-sm text-white/60">{m.event}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
