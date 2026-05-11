import type { Metadata } from "next";
import { ResearchSection } from "@/components/sections/research";

export const metadata: Metadata = {
  title: "Research — DataMind AI",
  description: "Academic research publications and contributions from the DataMind AI project.",
};

export default function ResearchPage() {
  return (
    <div className="pt-20">
      <ResearchSection />
    </div>
  );
}
