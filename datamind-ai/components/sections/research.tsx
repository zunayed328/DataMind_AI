"use client";

import { FadeIn } from "@/components/animations/fade-in";

export function ResearchSection() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            <span className="gradient-text">Research Contributions</span>
          </h2>
          <p className="mt-4 text-white/40 text-lg">Academic publications and citations</p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8 h-full">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-1 text-[10px] font-semibold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded-full">IEEE Conference 2025</span>
                <span className="px-2.5 py-1 text-[10px] font-semibold text-green-400 bg-green-500/10 border border-green-500/20 rounded-full">Peer Reviewed</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">DataMind AI: An LLM-Powered Framework for Intelligent Automated Data Analysis</h3>
              <p className="text-sm text-white/40 mb-4">Authors: DataMind AI Research Team</p>
              <p className="text-sm text-white/40 leading-relaxed mb-6">
                We present DataMind AI, a novel framework that integrates Large Language Models with automated machine learning pipelines to democratize data analysis. Our system achieves state-of-the-art results in automated insight generation while reducing analysis time by 960x compared to manual approaches.
              </p>
              <div className="flex flex-wrap gap-3">
                <button className="px-5 py-2.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all">
                  Read Paper →
                </button>
                <button className="px-5 py-2.5 text-sm font-medium text-white/60 rounded-xl border border-white/10 hover:border-white/20 hover:text-white transition-all">
                  Download PDF
                </button>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Key Contributions</h3>
              {[
                { icon: "🔬", title: "Integrated LLM-AutoML Framework", desc: "First framework combining LangChain with automated ML model selection for end-to-end data analysis." },
                { icon: "📚", title: "Multi-Modal RAG for Data Science", desc: "Novel RAG architecture supporting CSV, PDF, and structured data queries in a unified system." },
                { icon: "🏷️", title: "Automated Insight Taxonomy", desc: "Classification system for AI-generated insights with importance scoring and actionability metrics." },
                { icon: "☁️", title: "Cloud-Native AI Analytics Blueprint", desc: "Reference architecture for deploying AI analytics platforms using Docker, AWS, and GitHub Actions." },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-5 hover:bg-white/[0.04] transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">{item.title}</h4>
                      <p className="text-xs text-white/40 leading-relaxed">{item.desc}</p>
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
