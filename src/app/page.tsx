import type { Metadata } from "next";
import {
  HeroSection,
  TrustStripSection,
  ProblemSection,
  VoiceAgentSection,
  WorkforceSection,
  AgenticSection,
  JourneySection,
  ServicesSection,
  UseCasesSection,
  IntegrationSection,
  ProcessSection,
  IndustrySection,
  ResultsSection,
  BeforeAfterSection,
  WhyUsSection,
  FinalCtaSection,
  FaqSection,
} from "@/components/sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "AI Automation Agency | AI Agents & Voice Automation | GHLVertex",
  description:
    "GHLVertex builds AI voice agents, intelligent AI agents and business automation systems using GoHighLevel, n8n and modern AI tools to automate lead response, qualification, booking and follow-up.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* 02. Hero Section */}
      <HeroSection />

      {/* 03. Technology Trust Strip */}
      <TrustStripSection />

      {/* 04. Problem Section */}
      <ProblemSection />

      {/* 05. AI Voice Agent (Flagship) */}
      <VoiceAgentSection />

      {/* 06. Build Your AI Workforce */}
      <WorkforceSection />

      {/* 07. Agentic AI Section */}
      <AgenticSection />

      {/* 08. Customer Journey Automation */}
      <JourneySection />

      {/* 09. Core Services Section */}
      <ServicesSection />

      {/* 10. Use Cases Section */}
      <UseCasesSection />

      {/* 11. Integrations Section */}
      <IntegrationSection />

      {/* 12. How It Works (Process) */}
      <ProcessSection />

      {/* 13. Industry Solutions Section */}
      <IndustrySection />

      {/* 14. Results & Outcomes (Sample Workflow) */}
      <ResultsSection />

      {/* 15. Before vs After Comparison */}
      <BeforeAfterSection />

      {/* 16. Why GHLVertex */}
      <WhyUsSection />

      {/* 17. Final Interactive CTA */}
      <FinalCtaSection />

      {/* 18. FAQ Section */}
      <FaqSection />
    </div>
  );
}
