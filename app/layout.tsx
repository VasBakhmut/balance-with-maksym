import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteContent } from "@/content/site-content";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.seo.canonical),
  title: {
    default: siteContent.seo.title,
    template: `%s | ${siteContent.business.name}`,
  },
  description: siteContent.seo.description,
  applicationName: siteContent.business.name,
  authors: [{ name: siteContent.business.name }],
  creator: siteContent.business.name,
  publisher: siteContent.business.name,
  keywords: [
    "therapeutic massage Sydney",
    "deep tissue massage Sydney",
    "mobile massage Sydney",
    "nerve pain treatment Sydney",
    "cupping therapy Sydney",
    "red light therapy Sydney",
    "massage Darling Harbour",
    "massage Kogarah",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: siteContent.business.legalName,
    images: [{
      url: "/images/og/balance-with-maksym-og.jpg",
      width: 1200,
      height: 630,
      alt: "Balance With Maksym therapeutic massage in Sydney",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    images: ["/images/og/balance-with-maksym-og.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
