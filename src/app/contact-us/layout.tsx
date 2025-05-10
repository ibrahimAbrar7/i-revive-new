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
  title: "CONTACT US | i-Revive Body & Soul",
  description:
    "Visit our Clinic. Address: 6th floor, Mawin Zamzam, opposite Prince Hotel, Mehdipatnam, Hyderabad, Telangana 500028, India. Call: +91-8009944335",
  keywords: ["Hijama benefits and reviews Hyderabad", "Top-rated Hijama clinics Hyderabad"],
  openGraph: {
    title: "CONTACT US | i-Revive Body & Soul",
    description:
      "Visit our Clinic. Address: 6th floor, Mawin Zamzam, opposite Prince Hotel...",
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
    title: "CONTACT US | i-Revive Body & Soul",
    description:
      "Visit our Clinic. Address: 6th floor, Mawin Zamzam, Mehdipatnam...",
    images: ["https://www.i-revive.com/i-revive-og-img.jpg"],
  },
  alternates: {
    canonical: "https://www.i-revive.com/contact-us",
  },
  other: {
    "google-site-verification": "n9X_WPEBHM7-OhknawUN0VyEknPS3wDy3R9oyYQU1Ek",
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
