"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Rocket, Database, Code, MessageSquare, Terminal, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  { icon: <Rocket className="w-[18px] h-[18px]" />, title: "Getting Started", desc: "Quick setup guide to get DataMind AI running locally in under 5 minutes.", items: ["Prerequisites", "Installation", "Configuration", "First Run"] },
  { icon: <Database className="w-[18px] h-[18px]" />, title: "Data Upload", desc: "Learn how to upload and process different data formats.", items: ["CSV Files", "Excel Spreadsheets", "JSON Data", "PDF Documents"] },
  { icon: <Code className="w-[18px] h-[18px]" />, title: "API Reference", desc: "Complete REST API documentation with examples.", items: ["Authentication", "Endpoints", "Rate Limits", "Error Handling"] },
  { icon: <MessageSquare className="w-[18px] h-[18px]" />, title: "Chat with Data", desc: "Natural language querying powered by LangChain and GPT-4.", items: ["Basic Queries", "Advanced Filters", "Context Management", "Custom Prompts"] },
  { icon: <Terminal className="w-[18px] h-[18px]" />, title: "Deployment", desc: "Deploy to production with Docker and AWS.", items: ["Docker Setup", "AWS EC2", "CI/CD Pipeline", "Monitoring"] },
  { icon: <BookOpen className="w-[18px] h-[18px]" />, title: "ML Pipeline", desc: "Automated machine learning model training and selection.", items: ["Model Training", "Hyperparameters", "Predictions", "Model Export"] },
];

export default function DocsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-30" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.025em] leading-[1.1]">
              <span className="text-gradient">Documentation</span>
            </h1>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">Everything you need to get started with DataMind AI</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {sections.map((section, i) => (
              <FadeIn key={section.title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -2 }}
                  className="rounded-2xl border border-white/[0.06] bg-bg-tertiary p-6 hover:border-white/[0.12] hover:bg-bg-elevated transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/[0.08] border border-accent/[0.1] flex items-center justify-center text-accent-light mb-5">
                    {section.icon}
                  </div>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{section.title}</h3>
                  <p className="text-sm text-text-secondary mb-4">{section.desc}</p>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-sm text-text-tertiary hover:text-accent-light transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-accent/30" />
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Quick Start Code */}
          <FadeIn className="mt-16">
            <div className="rounded-2xl border border-white/[0.06] bg-bg-tertiary p-8">
              <h3 className="text-[15px] font-semibold text-white mb-5">Quick Start</h3>
              <div className="rounded-xl bg-bg-primary border border-white/[0.06] p-6 font-mono text-sm overflow-x-auto">
                <div className="space-y-1">
                  <p className="text-text-disabled"># Clone the repository</p>
                  <p className="text-accent-light">$ git clone https://github.com/datamind-ai/datamind-ai.git</p>
                  <p className="text-accent-light">$ cd datamind-ai</p>
                  <p className="text-white/[0.06] my-2">─</p>
                  <p className="text-text-disabled"># Start with Docker</p>
                  <p className="text-accent-light">$ docker-compose up -d</p>
                  <p className="text-white/[0.06] my-2">─</p>
                  <p className="text-text-disabled"># Or run locally</p>
                  <p className="text-accent-light">$ pip install -r requirements.txt</p>
                  <p className="text-accent-light">$ python main.py</p>
                  <p className="text-white/[0.06] my-2">─</p>
                  <p className="text-text-disabled"># Open in browser</p>
                  <p className="text-accent-cyan">→ http://localhost:8501</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
