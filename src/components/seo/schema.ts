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
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.streetAddress,
      addressLocality: siteConfig.contact.address.addressLocality,
      addressRegion: siteConfig.contact.address.addressRegion,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: "United States",
    },
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

export function getContactPageSchema(page: {
  title: string;
  description: string;
  url: string;
}) {
  const fullUrl = page.url.startsWith("http")
    ? page.url
    : `${PROD_URL}${page.url.startsWith("/") ? page.url : `/${page.url}`}`;
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${fullUrl}#webpage`,
    url: fullUrl,
    name: page.title,
    description: page.description,
    isPartOf: {
      "@id": `${PROD_URL}/#website`,
    },
    about: {
      "@id": `${PROD_URL}/#organization`,
    },
    mainEntity: {
      "@id": `${PROD_URL}/#organization`,
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

export function getBlogCollectionSchema(options?: {
  posts?: { title: string; url: string; publishedAt: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${PROD_URL}/blog/#blog`,
    url: `${PROD_URL}/blog/`,
    name: "GoHighLevel, AI Automation & Business Systems Insights",
    description:
      "Practical guides, strategies, and technical insights on GoHighLevel, CRM automation, AI agents, integrations, RAG, and scalable business systems.",
    isPartOf: {
      "@id": `${PROD_URL}/#website`,
    },
    publisher: {
      "@id": `${PROD_URL}/#organization`,
    },
    inLanguage: "en-US",
    ...(options?.posts && {
      blogPost: options.posts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        url: post.url.startsWith("http") ? post.url : `${PROD_URL}${post.url}`,
        datePublished: post.publishedAt,
      })),
    }),
  };
}

export function getBlogPostSchema(post: {
  title: string;
  description: string;
  url: string;
  image: string;
  publishedAt: string;
  updatedAt?: string;
  authorName?: string;
  keywords?: string[];
}) {
  const fullUrl = post.url.startsWith("http")
    ? post.url
    : `${PROD_URL}${post.url.startsWith("/") ? post.url : `/${post.url}`}`;
  const imageUrl = post.image.startsWith("http")
    ? post.image
    : `${PROD_URL}${post.image.startsWith("/") ? post.image : `/${post.image}`}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${fullUrl}#article`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${fullUrl}#webpage`,
    },
    headline: post.title,
    description: post.description,
    image: [imageUrl],
    datePublished: post.publishedAt,
    ...(post.updatedAt && { dateModified: post.updatedAt }),
    author: {
      "@type": "Organization",
      "@id": `${PROD_URL}/#organization`,
      name: post.authorName || "GHLVertex Team",
      url: `${PROD_URL}/`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${PROD_URL}/#organization`,
      name: "GHLVertex",
      logo: {
        "@type": "ImageObject",
        url: `${PROD_URL}/images/logo.png`,
      },
    },
    inLanguage: "en-US",
    ...(post.keywords && post.keywords.length > 0 && { keywords: post.keywords.join(", ") }),
  };
}
