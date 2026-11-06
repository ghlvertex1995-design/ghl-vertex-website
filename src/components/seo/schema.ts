import { siteConfig } from "@/config/site";

const PROD_URL = "https://ghlvertex.com";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${PROD_URL}/#organization`,
    name: "GHLVertex",
    legalName: "GHLVertex",
    url: `${PROD_URL}/`,
    logo: `${PROD_URL}/images/logo.png`,
    image: `${PROD_URL}/og-image.jpg`,
    description: "GHLVertex provides GoHighLevel CRM, automation, AI agent, integration and implementation services.",
    sameAs: [
      siteConfig.links.facebook,
      siteConfig.links.instagram,
      siteConfig.links.linkedin,
      siteConfig.links.twitter,
      siteConfig.links.youtube,
      siteConfig.links.tiktok,
      siteConfig.links.pinterest,
    ].filter(Boolean),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${PROD_URL}/#website`,
    url: `${PROD_URL}/`,
    name: "GHLVertex",
    description: siteConfig.description,
    publisher: {
      "@id": `${PROD_URL}/#organization`,
    },
    inLanguage: "en-US",
  };
}

export function getBreadcrumbSchema(
  items: ({ name: string; url: string } | { label: string; href: string })[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const name = "name" in item ? item.name : item.label;
      const rawUrl = "url" in item ? item.url : item.href;
      const url = rawUrl.startsWith("http")
        ? rawUrl
        : `${PROD_URL}${rawUrl.startsWith("/") ? rawUrl : `/${rawUrl}`}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name,
        item: url,
      };
    }),
  };
}

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
  breadcrumbUrl?: string;
}) {
  const fullUrl = page.url.startsWith("http")
    ? page.url
    : `${PROD_URL}${page.url.startsWith("/") ? page.url : `/${page.url}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullUrl}#webpage`,
    url: fullUrl,
    name: page.title,
    description: page.description,
    isPartOf: {
      "@id": `${PROD_URL}/#website`,
    },
    breadcrumb: {
      "@id": `${fullUrl}#breadcrumb`,
    },
    inLanguage: "en-US",
  };
}

export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  provider?: string;
}) {
  const fullUrl = service.url.startsWith("http")
    ? service.url
    : `${PROD_URL}${service.url.startsWith("/") ? service.url : `/${service.url}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${fullUrl}#service`,
    name: service.name,
    serviceType: service.serviceType || service.name,
    description: service.description,
    url: fullUrl,
    mainEntityOfPage: `${fullUrl}#webpage`,
    provider: {
      "@type": "ProfessionalService",
      "@id": `${PROD_URL}/#organization`,
      name: service.provider || "GHLVertex",
      url: `${PROD_URL}/`,
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  };
}
