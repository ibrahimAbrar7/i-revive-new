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
  title: "Hijama for Women in Hyderabad | Female Health & Wellness Therapy",
  description:
    "Experience expert Hijama therapy for women at i-Revive in Hyderabad. Safe, confidential sessions designed for female wellness, hormonal harmony, and natural pain relief.",
  keywords: [
    "Hijama for women Hyderabad",
    "Female cupping therapy Hyderabad",
    "Hijama for hormonal imbalance in women",
    "Women’s wellness Hijama treatment",
    "Hijama therapy for PCOS Hyderabad",
    "Female pain relief cupping Hyderabad",
    "Certified Hijama for ladies in Hyderabad",
    "Hijama for menstrual health",
    "Women’s detox therapy Hyderabad",
    "Female-focused Hijama center Hyderabad",
  ],
  openGraph: {
    title: "Hijama for Women in Hyderabad | Female Health & Wellness Therapy",
    description:
      "Experience expert Hijama therapy for women at i-Revive in Hyderabad. Safe, confidential sessions designed for female wellness, hormonal harmony, and natural pain relief.",
    url: "https://www.i-revive.com/best-hijama-centre-for-ladies-hyderabad",
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
    title: "Hijama for Women in Hyderabad | Female Health & Wellness Therapy",
    description:
      "Experience expert Hijama therapy for women at i-Revive in Hyderabad. Safe, confidential sessions designed for female wellness, hormonal harmony, and natural pain relief.",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/best-hijama-centre-for-ladies-hyderabad",
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        {/* Structured Data Scripts */}
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
