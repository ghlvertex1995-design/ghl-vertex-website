import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },
  async redirects() {
    return [
      // 1. Permanent redirect for www.ghlvertex.com to apex https://ghlvertex.com
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.ghlvertex.com",
          },
        ],
        destination: "https://ghlvertex.com/:path*",
        permanent: true,
      },
      // 2. Permanent redirect for insecure HTTP requests to HTTPS
      {
        source: "/:path*",
        has: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "http",
          },
        ],
        destination: "https://ghlvertex.com/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
      // Indexing safety: Disallow indexing on Vercel preview domains
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "(.*\\.vercel\\.app)",
          },
        ],
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
