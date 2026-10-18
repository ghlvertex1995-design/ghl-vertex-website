import { siteConfig } from "@/config/site";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    image: siteConfig.ogImage,
    description: siteConfig.description,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.addressCountry,
    },
    sameAs: [
      siteConfig.links.twitter,
      siteConfig.links.linkedin,
      siteConfig.links.facebook,
      siteConfig.links.youtube,
    ].filter(Boolean),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
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
      const url = rawUrl.startsWith("http") ? rawUrl : `${siteConfig.url}${rawUrl}`;
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
  const fullUrl = page.url.startsWith("http") ? page.url : `${siteConfig.url}${page.url}`;
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${fullUrl}#webpage`,
    url: fullUrl,
    name: page.title,
    description: page.description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`,
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
  const fullUrl = service.url.startsWith("http") ? service.url : `${siteConfig.url}${service.url}`;
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
      "@id": `${siteConfig.url}/#organization`,
      name: service.provider || siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: {
      "@type": "Country",
      name: "Worldwide",
    },
  };
}
