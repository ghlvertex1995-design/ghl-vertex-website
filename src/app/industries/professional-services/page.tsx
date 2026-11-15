import type { Metadata } from "next";
import { professionalServicesData } from "@/data/industries";
import { IndustryPageTemplate } from "@/components/industries/IndustryPageTemplate";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: professionalServicesData.metaTitle,
  description: professionalServicesData.metaDescription,
  alternates: {
    canonical: professionalServicesData.canonical,
  },
  openGraph: {
    title: professionalServicesData.metaTitle,
    description: professionalServicesData.metaDescription,
    url: `${siteConfig.url}${professionalServicesData.canonical}`,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: professionalServicesData.metaTitle,
    description: professionalServicesData.metaDescription,
  },
};

export default function ProfessionalServicesIndustryPage() {
  return <IndustryPageTemplate data={professionalServicesData} />;
}
