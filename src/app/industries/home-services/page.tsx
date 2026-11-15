import type { Metadata } from "next";
import { homeServicesData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: homeServicesData.metaTitle,
  description: homeServicesData.metaDescription,
  alternates: {
    canonical: homeServicesData.canonical,
  },
  openGraph: {
    title: homeServicesData.metaTitle,
    description: homeServicesData.metaDescription,
    url: `${siteConfig.url}${homeServicesData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: homeServicesData.metaTitle,
    description: homeServicesData.metaDescription,
  },
};

export default function HomeServicesIndustryPage() {
  return <IndustryPageTemplate data={homeServicesData} />;
}
