import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Best Hijama Cupping Therapy Centre Mehdipatnam, Hyderabad",
  description:
    "Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam. We offer expert Hijama cupping therapy for both men and women...",
  keywords:
    "Hijama Cupping Therapy Hyderabad, Best Hijama Centre Mehdipatnam...",
  openGraph: {
    title: "Best Hijama Cupping Therapy Centre Mehdipatnam, Hyderabad",
    description:
      "Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam...",
    url: "https://www.i-revive.com/about-us",
    images: [
      {
        url: "https://www.i-revive.com/i-revive-og-img.jpg",
        width: 2500,
        height: 1330,
        alt: "i-Revive Body & Soul",
      },
    ],
    type: "website",
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
      <head>
        <meta
          name="description"
          content="Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam..."
        />
        <meta
          name="keywords"
          content="Hijama Cupping Therapy Hyderabad, Best Hijama Centre Mehdipatnam..."
        />
        <link rel="canonical" href="https://www.i-revive.com/about-us" />
        <meta
          name="google-site-verification"
          content="n9X_WPEBHM7-OhknawUN0VyEknPS3wDy3R9oyYQU1Ek"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Best Hijama Cupping Therapy Centre Mehdipatnam, Hyderabad"
        />
        <meta
          name="twitter:description"
          content="Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam..."
        />
        <meta
          name="twitter:image"
          content="https://www.i-revive.com/i-revive-og-img.jpg"
        />
        <meta
          property="og:title"
          content="Best Hijama Cupping Therapy Centre Mehdipatnam, Hyderabad"
        />
        <meta
          property="og:description"
          content="Best Hijama centre in Hyderabad at i-Revive, Mehdipatnam..."
        />
        <meta
          property="og:image"
          content="https://www.i-revive.com/i-revive-og-img.jpg"
        />
        <meta property="og:image:width" content="2500" />
        <meta property="og:image:height" content="1330" />
        <meta property="og:url" content="https://www.i-revive.com/about-us" />
        <meta property="og:site_name" content="i-Revive Body & Soul" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
