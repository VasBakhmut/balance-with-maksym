import Image from "next/image";
import Script from "next/script";
import { AppointmentForm } from "@/components/appointment-form";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteContent } from "@/content/site-content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: siteContent.business.legalName,
  url: siteContent.seo.canonical,
  telephone: "+61411918718",
  image: `${siteContent.seo.canonical}/images/balance-with-maksym-logo-transparent.png`,
  description: siteContent.seo.description,
  areaServed: ["Sydney", ...siteContent.locations],
  priceRange: "$120–$170+",
};

const helpCards = [
  {
    title: "Pain & tension",
    short: "Neck, back, shoulder tension and headaches.",
    image: "/images/anatomy/pain-tension-v1.png",
    alt: "Anatomical model of the neck, shoulders and upper-back muscles",
  },
  {
    title: "Deep tissue",
    short: "Focused work with deeper muscle and fascia layers.",
    image: "/images/anatomy/deep-tissue-v1.png",
    alt: "Anatomical model showing the layered muscles of the shoulder",
  },
  {
    title: "Posture & movement",
    short: "Restricted movement, stiffness and postural tension.",
    image: "/images/anatomy/posture-movement-v1.png",
    alt: "Human skeleton showing natural posture and spinal alignment",
  },
  {
    title: "Sciatica & nerve pain",
    short: "Care shaped around nerve-related discomfort and mobility.",
    image: "/images/anatomy/nerve-pain-v1.png",
    alt: "Anatomical model of the pelvis, lower spine and sciatic nerve",
  },
  {
    title: "Cupping therapy",
    short: "A complementary technique for areas of muscular tension.",
    image: "/images/anatomy/cupping-v1.png",
    alt: "Therapy cups placed on an anatomical upper-back model",
  },
  {
    title: "Red-light therapy",
    short: "A supportive treatment option used alongside hands-on care.",
    image: "/images/anatomy/red-light-v1.png",
    alt: "Anatomical cross-section of tissue receiving red light",
  },
] as const;

const steps = [
  ["01", "We listen", "Understanding what you are experiencing."],
  ["02", "We assess", "Looking at movement, tension and contributing patterns."],
  ["03", "We treat", "Hands-on work adapted to your body and goals."],
  ["04", "We support", "Practical next steps for lasting progress."],
] as const;

export default function HomePage() {
  return (
    <>
      <Script id="business-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main">
        <section className="hero" id="top">
          <Image className="hero-image hero-image-desktop" src="/images/maksym/hero-maksym-back-treatment-new-v8.png" alt="Maksym providing personalised therapeutic back treatment in a private Sydney treatment room" fill priority sizes="(max-width: 720px) 1px, 100vw" />
          <Image className="hero-image hero-image-mobile" src="/images/maksym/hero-maksym-back-treatment-new-v8.png" alt="Maksym providing personalised therapeutic back treatment in a private Sydney treatment room" fill priority sizes="(max-width: 720px) 100vw, 1px" />
          <div className="hero-overlay" />
          <div className="shell hero-inner">
            <div className="hero-copy">
              <p className="eyebrow eyebrow-light">Therapeutic massage · Sydney</p>
              <h1>Therapeutic care<br />for a <em>better you.</em></h1>
              <p>Personalised treatment for pain, tension, mobility and recovery.</p>
              <div className="hero-actions">
                <a className="button button-gold" href="#appointment">Request a session</a>
                <a className="button button-ghost" href="#mobile">Private home visits</a>
              </div>
              <div className="hero-meta"><span>Clinic appointments</span><span>Private home visits</span><span>Sydney</span></div>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Practice highlights">
          <div className="shell trust-grid">
            <p><strong>9+</strong><span>Years experience</span></p>
            <p><strong>5.0</strong><span>Google rating</span></p>
            <p><strong>Clinic + home</strong><span>Across Sydney</span></p>
            <p><strong>Personalised</strong><span>Each treatment</span></p>
          </div>
        </section>

        <section className="help section" id="treatments">
          <div className="shell help-layout">
            <header className="help-intro">
              <p className="eyebrow">What Maksym can help with</p>
              <h2>More than<br />just symptoms.</h2>
              <p>Every body tells a different story. Treatment begins with understanding what may be contributing to discomfort, then choosing the right approach for you.</p>
              <a className="text-link" href="#approach">Explore the approach</a>
            </header>
            <div className="service-grid">
              {helpCards.map((service, index) => (
                <article className="service-card" key={service.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div className="service-thumb"><Image src={service.image} alt={service.alt} fill sizes="260px" /></div>
                  <h3>{service.title}</h3>
                  <p>{service.short}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach" id="approach">
          <div className="approach-content">
            <p className="eyebrow">Maksym’s approach</p>
            <h2>A treatment designed around you.</h2>
            <div className="steps">
              {steps.map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
            </div>
          </div>
          <div className="approach-photo"><Image src="/images/maksym/clinic-session.webp" alt="A calm therapeutic treatment space" fill sizes="50vw" /></div>
        </section>

        <section className="private-care section" id="mobile">
          <div className="shell private-grid">
            <div className="private-photo private-photo-one"><Image src="/images/maksym/clinical-approach.webp" alt="Personalised therapeutic care" fill sizes="33vw" /></div>
            <div className="private-copy">
              <p className="eyebrow">Private home care</p>
              <h2>Private treatment.<br /><em>Your space.</em></h2>
              <p>Professional therapeutic massage in the comfort and privacy of your home across Sydney.</p>
              <ul><li>Comfort and privacy</li><li>No travel or waiting rooms</li><li>Care shaped to your environment</li></ul>
              <a className="button button-gold" href="#appointment">Request a private visit</a>
            </div>
            <div className="private-photo private-photo-two"><Image src="/images/maksym/hands-detail.webp" alt="Maksym's hands-on therapeutic approach" fill sizes="33vw" /></div>
          </div>
        </section>

        <section className="about" id="about">
          <div className="shell about-grid">
            <div className="about-copy">
              <p className="eyebrow eyebrow-light">About Maksym</p>
              <h2>Dedicated to helping<br />you feel your best.</h2>
              <p>With more than nine years of professional experience, Maksym combines a deep understanding of the body with a calm, attentive approach.</p>
              <p>Every session is tailored to you — your body, your needs and your goals.</p>
            </div>
            <div className="about-photo"><Image src="/images/maksym/maksym-portrait-no-logo.png" alt="Maksym, therapeutic massage therapist in Sydney" fill sizes="50vw" /></div>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="shell">
            <div className="section-title-row"><div><p className="eyebrow">Client experience</p><h2>Real care. Real feedback.</h2></div><a className="text-link" href={siteContent.social.google} target="_blank" rel="noreferrer">View Google reviews</a></div>
            <div className="review-grid">
              <article><p className="stars">★★★★★</p><blockquote>Professional, intuitive care.</blockquote><small>A recurring theme in verified Google feedback</small></article>
              <article><p className="stars">★★★★★</p><blockquote>Noticeable improvement and thoughtful treatment.</blockquote><small>A recurring theme in verified Google feedback</small></article>
              <article><p className="stars">★★★★★</p><blockquote>A calm presence and genuinely personal attention.</blockquote><small>A recurring theme in verified Google feedback</small></article>
            </div>
          </div>
        </section>

        <section className="pricing section" id="pricing">
          <div className="shell pricing-layout">
            <header><p className="eyebrow">Treatments</p><h2>Simple. Transparent. Effective.</h2></header>
            <div className="price-card"><span>Clinic treatment</span><strong>$120</strong><small>60 minutes · Darling Harbour or Kogarah</small><a href="#appointment">Request appointment</a></div>
            <div className="price-card"><span>Private mobile session</span><strong><i>from</i> $170</strong><small>60 minutes · across Sydney</small><a href="#appointment">Request home visit</a></div>
            <div className="price-card consultation"><span>Not sure what you need?</span><p>Tell Maksym what you are experiencing and decide together.</p><a href="#appointment">Start with a request</a></div>
          </div>
        </section>

        <section className="appointment section" id="appointment">
          <div className="shell appointment-grid">
            <div className="appointment-copy">
              <p className="eyebrow eyebrow-light">Request an appointment</p>
              <h2>Take care of<br />your body.</h2>
              <p>Choose your preferred date and time. Maksym will contact you personally to confirm the appointment and final details.</p>
              <div className="booking-note"><span>Prefer to speak directly?</span><a href={siteContent.business.phoneHref}>{siteContent.business.phoneDisplay}</a></div>
            </div>
            <AppointmentForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
