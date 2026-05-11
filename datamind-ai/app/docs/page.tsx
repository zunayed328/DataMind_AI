"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Book, Code, Rocket, Terminal, Database, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const sections = [
  { icon: <Rocket className="w-5 h-5" />, title: "Getting Started", desc: "Quick setup guide to get DataMind AI running locally in under 5 minutes.", items: ["Prerequisites", "Installation", "Configuration", "First Run"] },
  { icon: <Database className="w-5 h-5" />, title: "Data Upload", desc: "Learn how to upload and process different data formats.", items: ["CSV Files", "Excel Spreadsheets", "JSON Data", "PDF Documents"] },
  { icon: <Code className="w-5 h-5" />, title: "API Reference", desc: "Complete REST API documentation with examples.", items: ["Authentication", "Endpoints", "Rate Limits", "Error Handling"] },
  { icon: <MessageSquare className="w-5 h-5" />, title: "Chat with Data", desc: "Natural language querying powered by LangChain and GPT-4.", items: ["Basic Queries", "Advanced Filters", "Context Management", "Custom Prompts"] },
  { icon: <Terminal className="w-5 h-5" />, title: "Deployment", desc: "Deploy to production with Docker and AWS.", items: ["Docker Setup", "AWS EC2", "CI/CD Pipeline", "Monitoring"] },
  { icon: <Book className="w-5 h-5" />, title: "ML Pipeline", desc: "Automated machine learning model training and selection.", items: ["Model Training", "Hyperparameters", "Predictions", "Model Export"] },
];

export default function DocsPage() {
  return (
    <div className="pt-20">
      <section className="relative py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              <span className="gradient-text">Documentation</span>
            </h1>
            <p className="mt-4 text-white/40 text-lg max-w-2xl mx-auto">Everything you need to get started with DataMind AI</p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, i) => (
              <FadeIn key={section.title} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-6 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white mb-4">
                    {section.icon}
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{section.title}</h3>
                  <p className="text-sm text-white/40 mb-4">{section.desc}</p>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item}>
                        <Link href="#" className="text-sm text-blue-400/70 hover:text-blue-400 transition-colors flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-blue-500/50" />
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
            <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-8">
              <h3 className="text-lg font-bold text-white mb-4">Quick Start</h3>
              <div className="rounded-xl bg-[hsl(220,25%,4%)] border border-white/[0.06] p-6 font-mono text-sm overflow-x-auto">
                <div className="space-y-1">
                  <p className="text-white/30"># Clone the repository</p>
                  <p className="text-green-400">$ git clone https://github.com/datamind-ai/datamind-ai.git</p>
                  <p className="text-green-400">$ cd datamind-ai</p>
                  <p className="text-white/10 my-2">─</p>
                  <p className="text-white/30"># Start with Docker</p>
                  <p className="text-green-400">$ docker-compose up -d</p>
                  <p className="text-white/10 my-2">─</p>
                  <p className="text-white/30"># Or run locally</p>
                  <p className="text-green-400">$ pip install -r requirements.txt</p>
                  <p className="text-green-400">$ python main.py</p>
                  <p className="text-white/10 my-2">─</p>
                  <p className="text-white/30"># Open in browser</p>
                  <p className="text-blue-400">→ http://localhost:8501</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
