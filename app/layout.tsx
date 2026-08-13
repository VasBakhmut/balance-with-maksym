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

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.canonical),
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: siteContent.business.legalName,
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
