"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Youtube, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const footerLinks = {
  platform: [
    { name: "Features", href: "/features" },
    { name: "Live Demo", href: "/demo" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Tech Stack", href: "/tech-stack" },
  ],
  resources: [
    { name: "Documentation", href: "/docs" },
    { name: "API Reference", href: "/docs" },
    { name: "Research Paper", href: "/research" },
    { name: "GitHub", href: "https://github.com/datamind-ai" },
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
    <footer className="relative border-t border-white/[0.06] bg-bg-secondary">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="white" opacity="0.9"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
                </svg>
              </div>
              <span className="text-[15px] font-semibold tracking-[-0.02em]">
                <span className="text-white">DataMind</span>
                <span className="text-gradient-brand ml-0.5">AI</span>
              </span>
            </Link>
            <p className="text-text-tertiary text-sm leading-relaxed max-w-sm">
              The AI-powered platform that turns any dataset into actionable business intelligence. Built for modern data teams.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg border border-white/[0.06] flex items-center justify-center text-text-tertiary hover:text-white hover:border-white/[0.15] hover:bg-white/[0.03] transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-[11px] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-4">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[11px] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[11px] font-medium text-text-tertiary uppercase tracking-[0.08em] mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-white transition-colors duration-200"
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
            <p className="text-sm text-text-disabled">
              © {new Date().getFullYear()} DataMind AI. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-sm text-text-disabled">
              {["Next.js", "TypeScript", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-[11px] font-medium bg-white/[0.03] border border-white/[0.06] rounded text-text-tertiary"
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
        className="fixed bottom-8 right-8 z-40 w-10 h-10 rounded-lg bg-bg-elevated border border-white/[0.1] flex items-center justify-center text-text-secondary hover:text-white hover:border-white/[0.2] transition-all duration-200"
        style={{ pointerEvents: showTop ? "auto" : "none" }}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </footer>
  );
}
