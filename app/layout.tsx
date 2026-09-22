import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope, Newsreader } from "next/font/google";
import { siteContent } from "@/content/site-content";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const metadataBase = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.canonical);

export const metadata: Metadata = {
  metadataBase,
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Therapeutic Massage in Sydney | Balance With Maksym",
    description: siteContent.seo.description,
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: siteContent.business.legalName,
    images: [{ url: "/images/og-balance-with-maksym.png", width: 1200, height: 630, alt: "Balance With Maksym — personalised therapeutic massage in Sydney" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Therapeutic Massage in Sydney | Balance With Maksym",
    description: siteContent.seo.description,
    images: ["/images/og-balance-with-maksym.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${newsreader.variable}`}>
      <body>{children}</body>
    </html>
  );
}
