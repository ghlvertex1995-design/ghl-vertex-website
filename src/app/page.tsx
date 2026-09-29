import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { HeroSection } from "@/components/sections";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.tagline}`,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className={styles.homepage}>
      {/* Section 02: Hero Section */}
      <HeroSection />
    </div>
  );
}
