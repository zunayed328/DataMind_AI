"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Youtube, Sparkles, ArrowUp, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const footerLinks = {
  platform: [
    { name: "Features", href: "/features" },
    { name: "Live Demo", href: "/demo" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Tech Stack", href: "/tech-stack" },
    { name: "Pricing (Free)", href: "/#" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/docs" },
    { name: "Research Paper", href: "/research" },
    { name: "GitHub Repo", href: "https://github.com/datamind-ai" },
    { name: "Community", href: "/#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/#" },
    { name: "Terms of Service", href: "/#" },
    { name: "License (MIT)", href: "/#" },
    { name: "Contact", href: "/contact" },
  ],
};

const socials = [
  { icon: Github, href: "https://github.com/datamind-ai", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
];

export function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative border-t border-white/[0.06] bg-[hsl(220,25%,4%)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">DataMind</span>
                <span className="gradient-text ml-0.5">AI</span>
              </span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              LLM-Powered Intelligent Data Analysis Platform. Upload any dataset and get AI-powered insights, predictions, and beautiful reports in seconds.
            </p>
            <div className="flex items-center gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex gap-2 max-w-sm">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/25 transition-all"
                />
              </div>
              <button className="px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/30">
              © 2025 DataMind AI — Built for CSE Capstone Students
            </p>
            <div className="flex items-center gap-2 text-sm text-white/30">
              <span>Made with ❤️ using</span>
              {["Next.js", "TypeScript", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-medium bg-white/5 border border-white/10 rounded text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showTop ? 1 : 0 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-110 transition-all duration-300"
        style={{ pointerEvents: showTop ? "auto" : "none" }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}
