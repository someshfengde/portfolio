import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { CursorGlow } from "@/components/CursorGlow";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export async function generateMetadata(): Promise<Metadata> {
  const profileName = process.env.NEXT_PUBLIC_NAME ?? "Somesh Fengade";
  const profileSummary =
    process.env.NEXT_PUBLIC_SUMMARY ??
    "AI / ML Engineer — Generative AI & RAG Systems. Building production-grade AI with Pinecone, OpenAI models, and GCP Cloud Run infrastructure.";
  return {
    metadataBase: new URL(siteUrl),
    title: `${profileName} — Portfolio`,
    description: profileSummary,
    openGraph: {
      title: `${profileName} — Portfolio`,
      description: profileSummary,
      url: "/",
      siteName: profileName,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${profileName} — Portfolio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${profileName} — Portfolio`,
      description: profileSummary,
      images: ["/opengraph-image"],
      creator: "@Someshfengde",
    },
    alternates: { canonical: "/" },
  } satisfies Metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Nav />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
