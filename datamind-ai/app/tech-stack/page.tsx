import type { Metadata } from "next";
import { TechStackSection } from "@/components/sections/tech-stack";

export const metadata: Metadata = {
  title: "Tech Stack — DataMind AI",
  description: "Explore the cutting-edge technology stack: LangChain, GPT-4, Scikit-learn, Docker, AWS, FastAPI, and more.",
};

export default function TechStackPage() {
  return (
    <div className="pt-20">
      <TechStackSection />
    </div>
  );
}
