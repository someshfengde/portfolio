import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export async function generateMetadata(): Promise<Metadata> {
  const profileName = process.env.NEXT_PUBLIC_NAME ?? "Somesh Fengade";
  const profileSummary = process.env.NEXT_PUBLIC_SUMMARY ?? "Machine Learning Engineer portfolio";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
