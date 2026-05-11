import type { Metadata } from "next";
import { FeaturesSection } from "@/components/sections/features";

export const metadata: Metadata = {
  title: "Features — DataMind AI",
  description: "Explore 8 powerful AI-driven features: Smart Upload, Auto EDA, Chat with Data, AutoML, RAG Documents, AI Reports, Time Series, and Cloud Deployment.",
};

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      <FeaturesSection />
    </div>
  );
}
