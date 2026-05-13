"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { BookOpen, Microscope, Tags, Cloud } from "lucide-react";

const contributions = [
  {
    icon: Microscope,
    title: "Integrated LLM-AutoML Framework",
    desc: "First framework combining LangChain with automated ML model selection for end-to-end data analysis.",
    color: "text-violet-400 bg-violet-500/[0.1] border-violet-500/[0.15]",
  },
  {
    icon: BookOpen,
    title: "Multi-Modal RAG for Data Science",
    desc: "Novel RAG architecture supporting CSV, PDF, and structured data queries in a unified system.",
    color: "text-cyan-400 bg-cyan-500/[0.1] border-cyan-500/[0.15]",
  },
  {
    icon: Tags,
    title: "Automated Insight Taxonomy",
    desc: "Classification system for AI-generated insights with importance scoring and actionability metrics.",
    color: "text-emerald-400 bg-emerald-500/[0.1] border-emerald-500/[0.15]",
  },
  {
    icon: Cloud,
    title: "Cloud-Native AI Analytics Blueprint",
    desc: "Reference architecture for deploying AI analytics platforms using Docker, AWS, and GitHub Actions.",
    color: "text-amber-400 bg-amber-500/[0.1] border-amber-500/[0.15]",
  },
];

export function ResearchSection() {
  return (
    <section className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="aurora-blob aurora-blob-violet w-[500px] h-[400px] bottom-[20%] left-[-150px] opacity-30" />

      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-20">
          <span className="badge-accent text-[11px] font-semibold uppercase tracking-[0.1em] px-3 py-1 rounded-full inline-block mb-6">
            Academic
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
            <span className="text-gradient">Research contributions</span>
          </h2>
          <p className="mt-5 text-text-secondary text-lg">Academic publications and citations</p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-6">
          <FadeIn direction="left">
            <div className="card-premium p-8 sm:p-10 h-full">
              <div className="flex items-center gap-2 mb-6">
                <span className="badge-accent text-[10px] font-semibold px-2.5 py-1 rounded-md">
                  IEEE Conference 2025
                </span>
                <span className="badge-subtle text-[10px] font-semibold px-2.5 py-1 rounded-md">
                  Peer Reviewed
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-3 leading-snug">
                DataMind AI: An LLM-Powered Framework for Intelligent Automated Data Analysis
              </h3>
              <p className="text-sm text-text-tertiary mb-4 font-medium">Authors: DataMind AI Research Team</p>
              <p className="text-sm text-text-secondary leading-relaxed mb-8">
                We present DataMind AI, a novel framework that integrates Large Language Models with automated machine learning pipelines to democratize data analysis. Our system achieves state-of-the-art results in automated insight generation while reducing analysis time by 960x compared to manual approaches.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="btn-primary px-6 py-2.5 text-sm rounded-xl">
                  Read Paper
                </button>
                <button className="btn-secondary px-6 py-2.5 text-sm rounded-xl">
                  Download PDF
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-accent-light/50" />
                <h3 className="text-[11px] font-semibold text-text-tertiary uppercase tracking-[0.1em]">Key Contributions</h3>
              </div>
              {contributions.map((item, i) => (
                <div key={i} className="card-premium p-5 hover:!border-accent/[0.2]">
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0 ${item.color}`}>
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-[12px] text-text-secondary leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
