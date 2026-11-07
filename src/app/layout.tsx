import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig } from "@/config/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/components/seo/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ghlvertex.com"),
  title: {
    default: "GoHighLevel Agency for CRM, Automation & AI | GHLVertex",
    template: "%s | GHLVertex",
  },
  description:
    "GHLVertex is a premier GoHighLevel (GHL) agency specializing in end-to-end CRM architecture, workflow automation, custom snapshots, and high-converting marketing funnels.",
  keywords: [...siteConfig.keywords],
  authors: [{ name: "GHLVertex", url: "https://ghlvertex.com" }],
  creator: "GHLVertex",
  publisher: "GHLVertex",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ghlvertex.com/",
    title: "GoHighLevel Agency for CRM, Automation & AI | GHLVertex",
    description:
      "GHLVertex is a premier GoHighLevel (GHL) agency specializing in end-to-end CRM architecture, workflow automation, custom snapshots, and high-converting marketing funnels.",
    siteName: "GHLVertex",
    images: [
      {
        url: "https://ghlvertex.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "GHLVertex - HighLevel CRM Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GoHighLevel Agency for CRM, Automation & AI | GHLVertex",
    description:
      "GHLVertex is a premier GoHighLevel (GHL) agency specializing in end-to-end CRM architecture, workflow automation, custom snapshots, and high-converting marketing funnels.",
    images: ["https://ghlvertex.com/og-image.jpg"],
    creator: "@ghlvertex",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "64x64" },
    ],
    apple: [
      { url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head suppressHydrationWarning>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WJ6ZGT2T"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`,
          }}
        />
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WJ6ZGT2T"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="main-wrapper" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
