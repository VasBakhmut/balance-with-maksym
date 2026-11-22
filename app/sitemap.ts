import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { servicePages } from "@/content/services";
import { siteContent } from "@/content/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.canonical;
  const lastModified = new Date();
  return [
    { url: origin, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${origin}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...servicePages.filter((service) => !service.comingSoon).map(({ slug }) => ({
      url: `${origin}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...guides.map(({ slug }) => ({
      url: `${origin}/guides/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
