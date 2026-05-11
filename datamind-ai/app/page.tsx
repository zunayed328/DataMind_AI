import { HeroSection } from "@/components/sections/hero";
import { ProblemSolutionSection } from "@/components/sections/problem-solution";
import { FeaturesSection } from "@/components/sections/features";
import { DemoSection } from "@/components/sections/demo";
import { RoadmapSection } from "@/components/sections/roadmap";
import { TechStackSection } from "@/components/sections/tech-stack";
import { PerformanceSection } from "@/components/sections/performance";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ResearchSection } from "@/components/sections/research";
import { CareerSection } from "@/components/sections/career";
import { CTASection } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <FeaturesSection />
      <DemoSection />
      <RoadmapSection />
      <TechStackSection />
      <PerformanceSection />
      <TestimonialsSection />
      <ResearchSection />
      <CareerSection />
      <CTASection />
    </>
  );
}
