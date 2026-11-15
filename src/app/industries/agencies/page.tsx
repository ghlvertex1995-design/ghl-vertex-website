import type { Metadata } from "next";
import { agenciesData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: agenciesData.metaTitle,
  description: agenciesData.metaDescription,
  alternates: {
    canonical: agenciesData.canonical,
  },
  openGraph: {
    title: agenciesData.metaTitle,
    description: agenciesData.metaDescription,
    url: `${siteConfig.url}${agenciesData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: agenciesData.metaTitle,
    description: agenciesData.metaDescription,
  },
};

export default function AgenciesIndustryPage() {
  return <IndustryPageTemplate data={agenciesData} />;
}
