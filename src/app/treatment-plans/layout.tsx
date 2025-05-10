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
  title: "Explore Specialized Cupping Treatment Plans for Hijama at i-Revive",
  description:
    "Best Hijama cupping therapy clinic in Hyderabad at i-Revive. Explore our specialized treatment plans including Sunnah Basic, Sunnah Plus, Vital Organ Cleanse, Head Cupping, Lymphatic Cleanse, Infertility Cupping, and our exclusive i-Revive Plan. Schedule your appointment today!",
  keywords: [
    "Personalized Hijama treatment plans Hyderabad",
    "Customized cupping therapy Hyderabad",
    "Hijama packages for women Hyderabad",
    "Best Hijama treatment plans Mehdipatnam",
    "Hijama therapy pricing Hyderabad",
    "Detox cupping packages Hyderabad",
    "Holistic Hijama therapy Hyderabad",
    "Affordable Hijama treatment Hyderabad",
    "Chronic pain relief Hijama Hyderabad",
    "Wellness treatment plans Hyderabad",
    "Near me hijama",
  ],
  openGraph: {
    title: "Explore Specialized Cupping Treatment Plans for Hijama at i-Revive",
    description:
      "Best Hijama cupping therapy clinic in Hyderabad at i-Revive...",
    url: "https://www.i-revive.com/treatment-plans",
    images: [
      {
        url: "https://www.i-revive.com/i-revive-og-img.jpg",
        width: 2500,
        height: 1330,
        alt: "i-Revive Body & Soul",
      },
    ],
    type: "website",
    siteName: "i-Revive Body & Soul",
  },
  twitter: {
    card: "summary_large_image",
    title: "Explore Specialized Cupping Treatment Plans for Hijama at i-Revive",
    description:
      "Best Hijama cupping therapy clinic in Hyderabad at i-Revive...",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/treatment-plans",
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
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </body>
    </html>
  );
}
