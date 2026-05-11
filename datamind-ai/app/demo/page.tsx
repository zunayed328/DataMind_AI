import type { Metadata } from "next";
import { DemoSection } from "@/components/sections/demo";

export const metadata: Metadata = {
  title: "Live Demo — DataMind AI",
  description: "Try DataMind AI live — no signup needed. Select a dataset, run AI analysis, and see instant results with charts, insights, and data quality reports.",
};

export default function DemoPage() {
  return (
    <div className="pt-20">
      <DemoSection />
    </div>
  );
}
