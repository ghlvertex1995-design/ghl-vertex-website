import type { Metadata } from "next";
import { saasData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: saasData.metaTitle,
  description: saasData.metaDescription,
  alternates: {
    canonical: saasData.canonical,
  },
  openGraph: {
    title: saasData.metaTitle,
    description: saasData.metaDescription,
    url: `${siteConfig.url}${saasData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: saasData.metaTitle,
    description: saasData.metaDescription,
  },
};

export default function SaasIndustryPage() {
  return <IndustryPageTemplate data={saasData} />;
}
