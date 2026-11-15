import type { Metadata } from "next";
import { roofingData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: roofingData.metaTitle,
  description: roofingData.metaDescription,
  alternates: {
    canonical: roofingData.canonical,
  },
  openGraph: {
    title: roofingData.metaTitle,
    description: roofingData.metaDescription,
    url: `${siteConfig.url}${roofingData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: roofingData.metaTitle,
    description: roofingData.metaDescription,
  },
};

export default function RoofingIndustryPage() {
  return <IndustryPageTemplate data={roofingData} />;
}
