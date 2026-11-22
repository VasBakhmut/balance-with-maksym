import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site-content";

export default function robots(): MetadataRoute.Robots {
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.canonical;
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/api/" },
    sitemap: `${origin}/sitemap.xml`,
  };
}
