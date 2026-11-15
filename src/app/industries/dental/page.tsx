import type { Metadata } from "next";
import { dentalData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: dentalData.metaTitle,
  description: dentalData.metaDescription,
  alternates: {
    canonical: dentalData.canonical,
  },
  openGraph: {
    title: dentalData.metaTitle,
    description: dentalData.metaDescription,
    url: `${siteConfig.url}${dentalData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: dentalData.metaTitle,
    description: dentalData.metaDescription,
  },
};

export default function DentalIndustryPage() {
  return <IndustryPageTemplate data={dentalData} />;
}
