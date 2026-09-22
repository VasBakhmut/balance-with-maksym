import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { siteContent } from "@/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.canonical;
  return [
    { url: origin, changeFrequency: "monthly", priority: 1 },
    ...guides.map(({ slug }) => ({
      url: `${origin}/guides/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
