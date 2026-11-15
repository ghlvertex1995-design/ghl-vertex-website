import type { Metadata } from "next";
import { realEstateData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: realEstateData.metaTitle,
  description: realEstateData.metaDescription,
  alternates: {
    canonical: realEstateData.canonical,
  },
  openGraph: {
    title: realEstateData.metaTitle,
    description: realEstateData.metaDescription,
    url: `${siteConfig.url}${realEstateData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: realEstateData.metaTitle,
    description: realEstateData.metaDescription,
  },
};

export default function RealEstateIndustryPage() {
  return <IndustryPageTemplate data={realEstateData} />;
}
