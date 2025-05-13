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
  title: "Fareeda Nikhat – Experienced OB-GYN & Feto-Maternal Specialist | i-Revive Hyderabad",
  description:
    "Dr. Fareeda Nikhat, a highly respected OB-GYN and Fetal Medicine expert with 19+ years of experience, offers expert maternal care and combines her medical expertise with Hijama Cupping at i-Revive, Hyderabad.",
  keywords: [
  "Fareeda Nikhat OB-GYN",
  "fetal medicine specialist",
  "high-risk pregnancy expert",
  "i-Revive maternal health",
  "maternal care Hyderabad",
  "FRCOG MRCOG Dubai",
  "women’s health expert",
  "Hijama for maternal health",
  "feto-maternal medicine",
  "expert pregnancy guidance"
],
  openGraph: {
    title: "Fareeda Nikhat – Experienced OB-GYN & Feto-Maternal Specialist | i-Revive Hyderabad",
    description:
      "Dr. Fareeda Nikhat, a highly respected OB-GYN and Fetal Medicine expert with 19+ years of experience, offers expert maternal care and combines her medical expertise with Hijama Cupping at i-Revive, Hyderabad.",
    url: "https://www.i-revive.com/contact-us",
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
    title: "Fareeda Nikhat – Experienced OB-GYN & Feto-Maternal Specialist | i-Revive Hyderabad",
    description:
      "Dr. Fareeda Nikhat, a highly respected OB-GYN and Fetal Medicine expert with 19+ years of experience, offers expert maternal care and combines her medical expertise with Hijama Cupping at i-Revive, Hyderabad.",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/contact-us",
  },
  other: {
    "google-site-verification": "n9X_WPEBHM7-OhknawUN0VyEknPS3wDy3R9oyYQU1Ek",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}

      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "LocalBusiness",
            name: "i-Revive Body & Soul",
            url: "https://www.i-revive.com",
            image: "https://www.i-revive.com/i-revive-og-img.jpg",
            address: {
              "@type": "PostalAddress",
              streetAddress: "6th floor, Mawin Zamzam, opposite Prince Hotel, Mehdipatnam",
              addressLocality: "Hyderabad",
              addressRegion: "TG",
              postalCode: "500028",
              addressCountry: "IN",
            },
            telephone: "+918009944335",
          }),
        }}
      />
    </div>
  );
}
