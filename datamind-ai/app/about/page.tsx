"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/fade-in";
import { motion } from "framer-motion";
import { Layers, Cog, Brain, Rocket, FlaskConical, Target } from "lucide-react";

const milestoneIcons = [Layers, Cog, Brain, Rocket, FlaskConical, Target];

const milestones = [
  { date: "Month 1–2", event: "Project inception & Python/ML mastery" },
  { date: "Month 3–4", event: "Core platform built: Upload + EDA + Chat" },
  { date: "Month 5–6", event: "ML pipeline & LLM integration complete" },
  { date: "Month 7–8", event: "RAG system & cloud deployment" },
  { date: "Month 9", event: "Testing, documentation & research paper" },
  { date: "Month 10", event: "Production launch & final presentation" },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
              <span className="text-gradient">About DataMind AI</span>
            </h1>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              A CSE Capstone Project that pushes the boundaries of AI-powered data analytics
            </p>
          </FadeIn>

          {/* Mission */}
          <FadeIn className="mb-20">
            <div className="rounded-2xl border border-white/[0.06] bg-bg-tertiary p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold text-white mb-4">Our Mission</h2>
              <p className="text-text-secondary leading-relaxed">
                To democratize data analysis by making AI-powered insights accessible to everyone — regardless of technical background. DataMind AI combines the power of Large Language Models, automated machine learning, and intuitive design to transform how people interact with data.
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <FadeIn className="mb-16">
            <h2 className="text-2xl font-semibold text-white text-center mb-10">Development Timeline</h2>
          </FadeIn>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {milestones.map((m, i) => {
              const Icon = milestoneIcons[i];
              return (
                <StaggerItem key={i}>
                  <motion.div whileHover={{ y: -2 }}
                    className="rounded-xl border border-white/[0.06] bg-bg-tertiary p-5 hover:border-white/[0.12] hover:bg-bg-elevated transition-all duration-300">
                    <div className="w-9 h-9 rounded-lg bg-accent/[0.08] border border-accent/[0.1] flex items-center justify-center mb-3">
                      <Icon className="w-4 h-4 text-accent-light" />
                    </div>
                    <p className="text-[11px] text-accent-light font-medium mb-1 uppercase tracking-[0.06em]">{m.date}</p>
                    <p className="text-sm text-text-secondary">{m.event}</p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
