// app/treatment-plans/[slug]/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { treatmentPlansData } from "@/data/treatmentPlansData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Generate metadata dynamically based on the slug
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const plan = treatmentPlansData.find((item) => item.slug === params.slug);

  if (!plan) {
    notFound();
  }

  const title = plan.title;
  const description = plan.description;
  const keywords = plan.keywords;
  const imageUrl = `https://www.i-revive.com${plan.image}`;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.i-revive.com/treatment-plans/${params.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: plan.title,
        },
      ],
      siteName: "i-Revive Body & Soul",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://www.i-revive.com/treatment-plans/${params.slug}`,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable}`}>
      {children}
    </div>
  );
}
