import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frequently Asked Questions about Hijama Cupping Therapy - i-Revive",
  description:
    "Explore answers to common queries about Hijama cupping therapy at i-Revive. Learn about our services, benefits, procedure, and more. Find the information you need to make informed decisions about your health.",
  keywords: [
    "Hijama benefits and reviews Hyderabad",
    "Top-rated Hijama clinics Hyderabad",
    "Hijama cupping therapy FAQ",
  ],
  openGraph: {
    title: "Frequently Asked Questions about Hijama Cupping Therapy - i-Revive",
    description:
      "Explore answers to common queries about Hijama cupping therapy at i-Revive...",
    url: "https://www.i-revive.com/faq",
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
    title: "Frequently Asked Questions about Hijama Cupping Therapy - i-Revive",
    description:
      "Explore answers to common queries about Hijama cupping therapy at i-Revive...",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/faq",
  },
  other: {
    "google-site-verification": "n9X_WPEBHM7-OhknawUN0VyEknPS3wDy3R9oyYQU1Ek",
  },
};

const schemaData = {
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </body>
    </html>
  );
}
