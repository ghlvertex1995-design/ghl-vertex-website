import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found | GHLVertex",
  description: "The page you are looking for does not exist on GHLVertex.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "4rem 1.5rem",
        textAlign: "center",
      }}
      aria-labelledby="not-found-heading"
    >
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "1.25rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "0.35rem 0.85rem",
            borderRadius: "9999px",
            fontSize: "0.85rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            background: "var(--brand-primary-subtle)",
            color: "var(--brand-primary)",
            border: "1px solid rgba(1, 72, 163, 0.2)",
          }}
        >
          Error 404
        </span>

        <h1
          id="not-found-heading"
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "var(--text-main)",
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Page Not Found
        </h1>

        <p
          style={{
            fontSize: "1.05rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            margin: 0,
            maxWidth: "480px",
          }}
        >
          The page you are looking for doesn&apos;t exist, has been removed, or is temporarily unavailable.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1rem",
            marginTop: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="btn btn-primary">
            <span>Return to Homepage</span>
            <span aria-hidden="true">→</span>
          </Link>
          <Link href="/#services" className="btn btn-secondary">
            <span>Explore Services</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

