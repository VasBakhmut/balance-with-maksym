import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { guides } from "@/content/guides";
import { siteContent } from "@/content/site-content";

type Props = { params: Promise<{ slug: string }> };
const origin = process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.canonical;

export function generateStaticParams() {
  return guides.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${slug}` },
    openGraph: { title: guide.title, description: guide.description, type: "article", url: `/guides/${slug}` },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guides.find((item) => item.slug === slug);
  if (!guide) notFound();

  const guideUrl = `${origin}/guides/${guide.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: guide.title,
        description: guide.description,
        url: guideUrl,
        inLanguage: "en-AU",
        author: { "@id": `${origin}/about#person` },
        publisher: { "@id": `${origin}/#business` },
        dateModified: "2026-11-18",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${origin}/#guides` },
          { "@type": "ListItem", position: 3, name: guide.title, item: guideUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script id={`guide-jsonld-${guide.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main" className="guide-page">
        <div className="shell guide-shell">
          <Link className="guide-back" href="/#treatments">← Back to treatments</Link>
          <p className="kicker">Guides · Balance With Maksym</p>
          <h1>{guide.title}</h1>
          <p className="guide-lead">{guide.lead}</p>
          <div className="guide-body">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>
            ))}
          </div>
          <div className="guide-cta">
            <p>Ready to discuss your appointment?</p>
            <Link className="button" href="/#appointment">Request an appointment</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
