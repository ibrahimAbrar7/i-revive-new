import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Hijama Cupping Therapy Clinic in Hyderabad | i-Revive Body & Soul",
  description:
    "Get the best Hijama Cupping Therapy in Hyderabad at i-Revive Body & Soul. Our experienced certified practitioners are here to help. Schedule your appointment now! Visit www.i-revive.com.",
  keywords: [
    "Best Hijama Cupping Therapy Centre in Hyderabad",
    "Best Hijama Centre in Hyderabad for Ladies",
    "Ladies Hijama Center in Hyderabad",
    "Best Hijama Specialist in Hyderabad",
    "Certified Hijama Practitioner Hyderabad",
    "Affordable Hijama Therapy in Hyderabad",
    "Top Hijama Specialists in Hyderabad",
    "Hijama Therapy for Women Hyderabad",
    "Pain Relief Hijama Centers Hyderabad",
    "Best Hijama Center for Men and Women in Hyderabad",
  ],
  alternates: {
    canonical: "https://www.i-revive.com",
  },
  openGraph: {
    title: "Best Hijama Cupping Therapy Clinic in Hyderabad | i-Revive Body & Soul",
    description:
      "Get the best Hijama Cupping Therapy in Hyderabad at i-Revive Body & Soul. Our experienced certified practitioners are here to help.",
    url: "https://www.i-revive.com",
    siteName: "i-Revive Body & Soul",
    type: "website",
    images: [
      {
        url: "https://www.i-revive.com/i-revive-og-img.jpg",
        width: 2500,
        height: 1330,
        alt: "i-Revive Body & Soul",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Hijama Cupping Therapy Clinic in Hyderabad | i-Revive Body & Soul",
    description:
      "Get the best Hijama Cupping Therapy in Hyderabad at i-Revive Body & Soul. Our experienced certified practitioners are here to help.",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  other: {
    "p:domain_verify": "b3119bbb53b18a0ee80a802cb5281dc9",
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
        {/* Structured Data */}
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
                addressCountry: "IN",
                addressLocality: "Hyderabad",
                addressRegion: "TG",
              },
              telephone: "+918009944335",
            }),
          }}
        />
      </body>
    </html>
  );
}
