import type { Metadata } from "next";
import { multiLocationData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: multiLocationData.metaTitle,
  description: multiLocationData.metaDescription,
  alternates: {
    canonical: multiLocationData.canonical,
  },
  openGraph: {
    title: multiLocationData.metaTitle,
    description: multiLocationData.metaDescription,
    url: `${siteConfig.url}${multiLocationData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: multiLocationData.metaTitle,
    description: multiLocationData.metaDescription,
  },
};

export default function MultiLocationIndustryPage() {
  return <IndustryPageTemplate data={multiLocationData} />;
}
