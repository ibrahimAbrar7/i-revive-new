import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BLOGS | i-Revive Body & Soul",
  description:
    "Explore insightful blogs and articles on spiritual healing, holistic wellness, and the benefits of Hijama cupping on our Hijama Relief platform. Delve into the wisdom of Islamic tradition and discover non-medical approaches to well-being.",
  keywords: [
    "Hijama benefits and reviews Hyderabad",
    "Top-rated Hijama clinics Hyderabad",
  ],
  openGraph: {
    title: "BLOGS | i-Revive Body & Soul",
    description:
      "Explore insightful blogs and articles on spiritual healing, holistic wellness, and the benefits of Hijama cupping on our Hijama Relief platform...",
    url: "https://www.i-revive.com/blog",
    images: [
      {
        url: "https://www.i-revive.com/i-revive-og-img.jpg",
        width: 2500,
        height: 1330,
        alt: "i-Revive Body & Soul",
      },
    ],
    siteName: "i-Revive Body & Soul",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BLOGS | i-Revive Body & Soul",
    description:
      "Explore insightful blogs and articles on spiritual healing, holistic wellness, and the benefits of Hijama cupping on our Hijama Relief platform...",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/blog",
  },
  other: {
    "google-site-verification": "n9X_WPEBHM7-OhknawUN0VyEknPS3wDy3R9oyYQU1Ek",
  },
};

const websiteSchema = {
  "@context": "https://schema.org/",
  "@type": "WebSite",
  url: "https://www.i-revive.com/",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.i-revive.com/search?q={search_term}",
    },
    "query-input": "required name=search_term",
  },
};

const businessSchema = {
  "@context": "https://schema.org/",
  "@type": "LocalBusiness",
  name: "i-Revive Body & Soul",
  url: "https://www.i-revive.com",
  image: "https://www.i-revive.com/i-revive-og-img.jpg",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
    addressLocality: "Hyderabad",
    addressRegion: "TG",
  },
  telephone: "+918009944335",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <link
          rel="alternate"
          href="https://www.i-revive.com/blog-feed.xml"
          type="application/rss+xml"
          title="i-Revive Body & Soul - RSS"
        />
      </body>
    </html>
  );
}
