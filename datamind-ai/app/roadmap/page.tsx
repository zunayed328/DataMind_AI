import type { Metadata } from "next";
import { RoadmapSection } from "@/components/sections/roadmap";

export const metadata: Metadata = {
  title: "Roadmap — DataMind AI",
  description: "Follow the 10-month development journey from foundation to production-ready AI platform.",
};

export default function RoadmapPage() {
  return (
    <div className="pt-20">
      <RoadmapSection />
    </div>
  );
}
