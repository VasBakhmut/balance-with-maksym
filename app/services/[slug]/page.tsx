import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { getServiceBySlug, servicePages } from "@/content/services";
import { siteContent } from "@/content/site-content";

type Props = { params: Promise<{ slug: string }> };

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.canonical;

export function generateStaticParams() {
  return servicePages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: `${service.name} Sydney`,
    description: service.description,
    robots: service.comingSoon ? { index: false, follow: true } : undefined,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.name} Sydney | Balance With Maksym`,
      description: service.description,
      type: "website",
      url: `/services/${service.slug}`,
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const serviceUrl = `${origin}/services/${service.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      ...(service.comingSoon ? [] : [{
        "@type": "Service",
        "@id": `${serviceUrl}#service`,
        name: service.name,
        description: service.description,
        url: serviceUrl,
        areaServed: { "@type": "City", name: "Sydney" },
        provider: { "@id": `${origin}/#business` },
        image: `${origin}${service.image}`,
      }]),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: origin },
          { "@type": "ListItem", position: 2, name: "Treatments", item: `${origin}/#treatments` },
          { "@type": "ListItem", position: 3, name: service.name, item: serviceUrl },
        ],
      },
      ...(service.comingSoon ? [] : [{
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }]),
    ],
  };

  return (
    <>
      <Script id={`service-jsonld-${service.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main" className="service-page">
        <section className="service-page-hero">
          <div className="shell service-page-hero-grid">
            <div className="service-page-intro">
              <nav className="breadcrumbs" aria-label="Breadcrumb">
                <Link href="/">Home</Link><span>/</span><Link href="/#treatments">Treatments</Link><span>/</span><span aria-current="page">{service.name}</span>
              </nav>
              <p className="kicker">{service.eyebrow}</p>
              <h1>{service.title}</h1>
              <p className="service-page-lead">{service.intro}</p>
              {service.comingSoon ? (
                <div className="service-coming-notice" role="note">
                  <strong>Coming soon</strong>
                  <p>Dry needling is not currently available to book. Please choose one of Maksym&apos;s currently available treatments.</p>
                  <Link className="text-link" href="/#treatments">View available treatments ↗</Link>
                </div>
              ) : (
                <div className="service-page-actions">
                  <Link className="button" href="/#appointment">Request an appointment</Link>
                  <a className="text-link" href={siteContent.business.phoneHref}>Call {siteContent.business.phoneDisplay}</a>
                </div>
              )}
            </div>
            <div className="service-page-image"><Image src={service.image} alt={service.imageAlt} fill priority sizes="(max-width: 800px) 100vw, 46vw" /></div>
          </div>
        </section>

        {!service.comingSoon && <section className="service-detail section">
          <div className="shell service-detail-grid">
            <div>
              <p className="kicker">When people choose this treatment</p>
              <h2>Care for a specific need,<br /><em>not a fixed routine.</em></h2>
            </div>
            <ul className="service-check-list">
              {service.bestFor.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </section>}

        {!service.comingSoon && <section className="service-process section">
          <div className="shell">
            <div className="service-section-heading"><p className="kicker">What to expect</p><h2>A clear, personal process.</h2></div>
            <ol className="service-process-grid">
              {service.approach.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><p>{step}</p></li>)}
            </ol>
          </div>
        </section>}

        {!service.comingSoon && <section className="service-practical section">
          <div className="shell service-practical-grid">
            <article><p className="kicker">Your first appointment</p><h2>Arrive informed.</h2><p>{service.firstSession}</p></article>
            <article><p className="kicker">Price and booking</p><h2>Confirm the details.</h2><p>{service.priceNote}</p><Link className="button button-dark" href="/#appointment">Choose a preferred time</Link></article>
          </div>
        </section>}

        {!service.comingSoon && <section className="service-faq section" aria-labelledby="service-faq-title">
          <div className="shell faq-layout">
            <div><p className="kicker">Common questions</p><h2 id="service-faq-title">Before you book.</h2></div>
            <div className="faq-list">
              {service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
            </div>
          </div>
        </section>}

        <section className="service-related section">
          <div className="shell">
            <p className="kicker">Other treatment options</p>
            <div className="related-services">
              {servicePages.filter((item) => item.slug !== service.slug && !item.comingSoon).slice(0, 3).map((item) => <Link key={item.slug} href={`/services/${item.slug}`}><span>{item.name}</span><small>View treatment ↗</small></Link>)}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
