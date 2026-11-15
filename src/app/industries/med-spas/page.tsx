import type { Metadata } from "next";
import { medSpasData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: medSpasData.metaTitle,
  description: medSpasData.metaDescription,
  alternates: {
    canonical: medSpasData.canonical,
  },
  openGraph: {
    title: medSpasData.metaTitle,
    description: medSpasData.metaDescription,
    url: `${siteConfig.url}${medSpasData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: medSpasData.metaTitle,
    description: medSpasData.metaDescription,
  },
};

export default function MedSpasIndustryPage() {
  return <IndustryPageTemplate data={medSpasData} />;
}
