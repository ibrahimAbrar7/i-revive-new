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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="color-scheme" content="light only" />
        <meta name="p:domain_verify" content="b3119bbb53b18a0ee80a802cb5281dc9" />

        {/* SEO Meta */}
        <meta
          name="description"
          content="Get the best Hijama Cupping Therapy in Hyderabad at i-Revive Body & Soul. Our experienced certified practitioners are here to help. Schedule your appointment now! Visit www.i-revive.com."
        />
        <meta
          name="keywords"
          content="Best Hijama Cupping Therapy Centre in Hyderabad, Best Hijama Centre in Hyderabad for Ladies, Ladies Hijama Center in Hyderabad, Best Hijama Specialist in Hyderabad, Certified Hijama Practitioner Hyderabad, Affordable Hijama Therapy in Hyderabad, Top Hijama Specialists in Hyderabad, Hijama Therapy for Women Hyderabad, Pain Relief Hijama Centers Hyderabad, Best Hijama Center for Men and Women in Hyderabad"
        />
        <link rel="canonical" href="https://www.i-revive.com" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Best Hijama Cupping Therapy Clinic in Hyderabad | i-Revive Body & Soul"
        />
        <meta
          property="og:description"
          content="Get the best Hijama Cupping Therapy in Hyderabad at i-Revive Body & Soul. Our experienced certified practitioners are here to help. Schedule your appointment now! Visit www.i-revive.com."
        />
        <meta
          property="og:image"
          content="https://www.i-revive.com/i-revive-og-img.jpg"
        />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />
        <meta property="og:url" content="https://www.i-revive.com" />
        <meta property="og:site_name" content="i-Revive Body & Soul" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Hijama Cupping Therapy Clinic in Hyderabad | i-Revive Body & Soul"
        />
        <meta
          name="twitter:description"
          content="Get the best Hijama Cupping Therapy in Hyderabad at i-Revive Body & Soul. Our experienced certified practitioners are here to help. Schedule your appointment now! Visit www.i-revive.com."
        />
        <meta
          name="twitter:image"
          content="https://www.i-revive.com/i-revive-og-img.jpg"
        />

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
              image:
                "https://www.i-revive.com/i-revive-og-img.jpg",
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
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
