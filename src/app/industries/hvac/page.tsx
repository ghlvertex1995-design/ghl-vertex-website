import type { Metadata } from "next";
import { hvacData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: hvacData.metaTitle,
  description: hvacData.metaDescription,
  alternates: {
    canonical: hvacData.canonical,
  },
  openGraph: {
    title: hvacData.metaTitle,
    description: hvacData.metaDescription,
    url: `${siteConfig.url}${hvacData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: hvacData.metaTitle,
    description: hvacData.metaDescription,
  },
};

export default function HvacIndustryPage() {
  return <IndustryPageTemplate data={hvacData} />;
}
