import type { Metadata } from "next";
import { plumbingData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: plumbingData.metaTitle,
  description: plumbingData.metaDescription,
  alternates: {
    canonical: plumbingData.canonical,
  },
  openGraph: {
    title: plumbingData.metaTitle,
    description: plumbingData.metaDescription,
    url: `${siteConfig.url}${plumbingData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: plumbingData.metaTitle,
    description: plumbingData.metaDescription,
  },
};

export default function PlumbingIndustryPage() {
  return <IndustryPageTemplate data={plumbingData} />;
}
