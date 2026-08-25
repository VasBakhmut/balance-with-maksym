import type { Metadata } from "next";
import type { ReactNode } from "react";
import { siteContent } from "@/content/site-content";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
