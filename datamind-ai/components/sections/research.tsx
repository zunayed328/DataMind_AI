"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { BookOpen, Microscope, Tags, Cloud } from "lucide-react";

const contributions = [
  {
    icon: Microscope,
    title: "Integrated LLM-AutoML Framework",
    desc: "First framework combining LangChain with automated ML model selection for end-to-end data analysis.",
  },
  {
    icon: BookOpen,
    title: "Multi-Modal RAG for Data Science",
    desc: "Novel RAG architecture supporting CSV, PDF, and structured data queries in a unified system.",
  },
  {
    icon: Tags,
    title: "Automated Insight Taxonomy",
    desc: "Classification system for AI-generated insights with importance scoring and actionability metrics.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native AI Analytics Blueprint",
    desc: "Reference architecture for deploying AI analytics platforms using Docker, AWS, and GitHub Actions.",
  },
];

export function ResearchSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
            <span className="text-gradient">Research contributions</span>
          </h2>
          <p className="mt-4 text-text-secondary text-lg">Academic publications and citations</p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="rounded-xl border border-white/[0.06] bg-bg-tertiary p-8 h-full">
              <div className="flex items-center gap-2 mb-5">
                <span className="px-2.5 py-1 text-[10px] font-medium text-accent-light bg-accent/[0.06] border border-accent/[0.12] rounded-md">
                  IEEE Conference 2025
                </span>
                <span className="px-2.5 py-1 text-[10px] font-medium text-text-secondary bg-white/[0.03] border border-white/[0.06] rounded-md">
                  Peer Reviewed
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 leading-snug">
                DataMind AI: An LLM-Powered Framework for Intelligent Automated Data Analysis
              </h3>
              <p className="text-sm text-text-tertiary mb-4">Authors: DataMind AI Research Team</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-6">
                We present DataMind AI, a novel framework that integrates Large Language Models with automated machine learning pipelines to democratize data analysis. Our system achieves state-of-the-art results in automated insight generation while reducing analysis time by 960x compared to manual approaches.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2.5 text-sm font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-all duration-200">
                  Read Paper
                </button>
                <button className="px-5 py-2.5 text-sm font-medium text-text-secondary rounded-lg border border-white/[0.08] hover:border-white/[0.15] hover:text-white transition-all duration-200">
                  Download PDF
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-4">
              <h3 className="text-[11px] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-5">Key Contributions</h3>
              {contributions.map((item, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-bg-tertiary p-5 hover:border-white/[0.12] transition-all duration-200">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-accent/[0.08] border border-accent/[0.1] flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-accent-light" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-[12px] text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
