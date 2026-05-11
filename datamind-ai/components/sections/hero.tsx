"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ParticleField } from "@/components/animations/particles";
import { ArrowDown, Play, Bot, BarChart3, Cloud, Container } from "lucide-react";

const typewriterWords = [
  { text: "Intelligent Insights", className: "gradient-text" },
  { text: "AI Predictions", className: "gradient-text-pink" },
  { text: "Smart Reports", className: "gradient-text-green" },
  { text: "Business Value", className: "gradient-text" },
];

const statBadges = [
  { icon: <Bot className="w-4 h-4" />, text: "GPT-4 Powered" },
  { icon: <BarChart3 className="w-4 h-4" />, text: "Auto ML Pipeline" },
  { icon: <Cloud className="w-4 h-4" />, text: "Cloud Deployed" },
  { icon: <Container className="w-4 h-4" />, text: "Docker Ready" },
];

export function HeroSection() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typewriterWords[currentWordIndex].text;
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(word.slice(0, displayText.length + 1));
          if (displayText.length === word.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(word.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % typewriterWords.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentWordIndex]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" id="hero">
      {/* Background layers */}
      <div className="absolute inset-0 animated-gradient-bg" />
      <div className="absolute inset-0 grid-pattern" />
      <ParticleField />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-green-500/8 blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white/80 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
                </span>
                ✨ AI-Powered Platform 2025
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-[1.1]">
                <span className="text-white">Transform Your Data Into</span>
                <br />
                <span className={typewriterWords[currentWordIndex].className}>
                  {displayText}
                </span>
                <span className="animate-typewriter-cursor text-blue-400 font-light">|</span>
              </h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg text-white/50 leading-relaxed max-w-xl"
            >
              Upload any dataset → AI analyzes everything → LLM generates human insights → ML makes predictions → Beautiful dashboard shows results.
            </motion.p>

            {/* Stat Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {statBadges.map((badge, i) => (
                <motion.span
                  key={badge.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white/60 rounded-full border border-white/[0.08] bg-white/[0.03] hover:border-blue-500/30 hover:text-white/80 transition-all duration-300 cursor-default"
                >
                  {badge.icon}
                  {badge.text}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/demo"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/25 hover:scale-105 active:scale-95"
              >
                🚀 Try Live Demo
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30" />
              </Link>
              <button className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white/80 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:border-white/20 hover:text-white hover:bg-white/[0.06] transition-all duration-300">
                <span className="relative flex items-center justify-center w-6 h-6 rounded-full bg-white/10">
                  <Play className="w-3 h-3 fill-current ml-0.5" />
                </span>
                Watch Demo Video
              </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[
                  "from-blue-400 to-blue-600",
                  "from-purple-400 to-purple-600",
                  "from-green-400 to-green-600",
                  "from-pink-400 to-pink-600",
                  "from-orange-400 to-orange-600",
                ].map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} border-2 border-[hsl(220,25%,5%)]`}
                  />
                ))}
              </div>
              <div>
                <div className="flex text-yellow-400 text-xs">
                  {"★★★★★"}
                </div>
                <p className="text-xs text-white/40">Loved by 500+ CSE students</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — 3D Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-2xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-xl p-6 shadow-2xl shadow-black/40"
              >
                {/* Card Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-white/30 font-mono">datamind-ai/dashboard</span>
                </div>

                {/* Mini Charts */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Accuracy", value: "94.2%", color: "text-green-400" },
                    { label: "Processed", value: "1,247", color: "text-blue-400" },
                    { label: "Insights", value: "38", color: "text-purple-400" },
                  ].map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-white/[0.04] border border-white/[0.06] p-3">
                      <p className="text-[10px] text-white/40 uppercase tracking-wider">{stat.label}</p>
                      <p className={`text-lg font-bold ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>

                {/* Fake Chart */}
                <div className="h-32 rounded-lg bg-white/[0.02] border border-white/[0.06] p-3 mb-4 overflow-hidden">
                  <div className="flex items-end justify-between h-full gap-1.5">
                    {[40, 60, 35, 80, 55, 90, 45, 70, 85, 65, 95, 50].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
                        className="flex-1 rounded-t bg-gradient-to-t from-blue-500/60 to-purple-500/60"
                      />
                    ))}
                  </div>
                </div>

                {/* AI Chat Bubble */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2 }}
                  className="rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-3"
                >
                  <div className="flex items-start gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-white/70">
                        Revenue increased by <span className="text-green-400 font-semibold">23.4%</span> in Q3, driven primarily by the electronics category...
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-500/30 text-xs font-medium text-green-400 flex items-center gap-1.5 backdrop-blur-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live
              </motion.div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-3 -left-3 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-medium text-blue-400 backdrop-blur-sm"
              >
                📈 +23% accuracy
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 -left-16 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-xs font-medium text-purple-400 backdrop-blur-sm"
              >
                🔐 Secured
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-1/3 -right-14 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-xs font-medium text-orange-400 backdrop-blur-sm"
              >
                ☁️ AWS
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-white/30">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-white/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
