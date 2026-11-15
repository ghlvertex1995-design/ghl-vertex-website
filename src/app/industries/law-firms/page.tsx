import type { Metadata } from "next";
import { lawFirmsData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: lawFirmsData.metaTitle,
  description: lawFirmsData.metaDescription,
  alternates: {
    canonical: lawFirmsData.canonical,
  },
  openGraph: {
    title: lawFirmsData.metaTitle,
    description: lawFirmsData.metaDescription,
    url: `${siteConfig.url}${lawFirmsData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: lawFirmsData.metaTitle,
    description: lawFirmsData.metaDescription,
  },
};

export default function LawFirmsIndustryPage() {
  return <IndustryPageTemplate data={lawFirmsData} />;
}
