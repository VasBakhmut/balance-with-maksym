import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteContent } from "@/content/site-content";

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.canonical;

export const metadata: Metadata = {
  title: "About Maksym · Therapeutic Massage Therapist Sydney",
  description: "Meet Maksym, a Sydney therapeutic massage therapist with more than seven years of experience and a calm, assessment-led approach.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Maksym | Therapeutic Massage Therapist Sydney",
    description: "A calm, attentive and personalised approach to therapeutic massage in Sydney.",
    type: "profile",
    url: "/about",
    images: [{ url: "/images/maksym-new/maksym-therapeutic-massage-therapist-sydney.jpg", alt: "Maksym, therapeutic massage therapist in Sydney" }],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${origin}/about#person`,
  name: "Maksym",
  jobTitle: "Therapeutic Massage Therapist",
  url: `${origin}/about`,
  image: `${origin}/images/maksym-new/maksym-therapeutic-massage-therapist-sydney.jpg`,
  worksFor: { "@id": `${origin}/#business` },
  knowsAbout: ["Therapeutic massage", "Deep tissue massage", "Cupping therapy", "Red light therapy", "Mobile massage"],
  sameAs: [siteContent.social.instagram, siteContent.social.facebook],
};

export default function AboutPage() {
  return (
    <>
      <Script id="maksym-person-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <Header />
      <main id="main" className="about-page">
        <section className="about-page-hero section">
          <div className="shell about-page-grid">
            <div className="about-page-copy">
              <nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span aria-current="page">About Maksym</span></nav>
              <p className="kicker">Meet Maksym</p>
              <h1>Skilled hands.<br /><em>A calm human approach.</em></h1>
              <p className="about-page-lead">Maksym is a therapeutic massage therapist in Sydney with more than seven years of professional experience. He works with pain, muscle tension, movement restrictions and recovery through treatment shaped around the individual.</p>
              <Link className="button" href="/#appointment">Request an appointment</Link>
            </div>
            <div className="about-page-portrait"><Image src="/images/maksym-new/maksym-therapeutic-massage-therapist-sydney.jpg" alt="Maksym, therapeutic massage therapist in Sydney" fill priority sizes="(max-width: 800px) 100vw, 45vw" /></div>
          </div>
        </section>

        <section className="about-page-story section">
          <div className="shell about-story-grid">
            <div><p className="kicker">How Maksym works</p><h2>Listen first.<br /><em>Treat with intention.</em></h2></div>
            <div className="about-story-copy">
              <p>Every appointment starts with a conversation. Maksym asks what you feel, how it affects daily life and what you want to improve. He then assesses movement and tension before deciding how to approach the session.</p>
              <p>Treatment may include therapeutic or deep tissue massage and, where appropriate, cupping or red light therapy. Dry needling is coming soon and is not currently available to book. Maksym adjusts pressure and technique to the person rather than following the same routine for everyone.</p>
              <blockquote>“Every treatment is tailored to the person, not just the symptoms.”</blockquote>
            </div>
          </div>
        </section>

        <section className="about-values section">
          <div className="shell">
            <div className="service-section-heading"><p className="kicker">What clients can expect</p><h2>Professional care that still feels personal.</h2></div>
            <div className="about-values-grid">
              <article><span>01</span><h3>Attention</h3><p>Time to explain what is happening and what you want from the session.</p></article>
              <article><span>02</span><h3>Adaptation</h3><p>Pressure, techniques and priorities adjusted to your comfort and response.</p></article>
              <article><span>03</span><h3>Clarity</h3><p>A clear explanation of the treatment approach and practical next steps.</p></article>
              <article><span>04</span><h3>Calm</h3><p>A respectful setting where you can slow down and feel supported.</p></article>
            </div>
          </div>
        </section>

        <section className="about-availability section">
          <div className="shell about-availability-inner">
            <div><p className="kicker">Clinic and home visits</p><h2>Choose the setting that suits you.</h2></div>
            <div><p>Clinic appointments are available by arrangement. Maksym also provides private mobile massage across Sydney, subject to location and availability.</p><div className="about-availability-actions"><Link className="button button-light" href="/services/mobile-massage-sydney">Explore mobile massage</Link><Link className="text-link" href="/#appointment">Request a time</Link></div></div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
