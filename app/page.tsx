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

const featuredServices = siteContent.services.filter((service) => service.featured);

export default function HomePage() {
  return (
    <>
      <Script id="business-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-visual">
            <Image src="/images/maksym/hero-treatment-v3.png" alt="Maksym providing a therapeutic massage to a client in Sydney" fill priority sizes="100vw" />
            <div className="hero-wash" />
          </div>
          <div className="shell hero-content">
            <div className="hero-copy">
              <p className="eyebrow">Therapeutic massage · Sydney</p>
              <h1>Feel better<br />in your body.</h1>
              <p className="hero-lead">Personalised therapeutic treatment for pain, tension, mobility and recovery — shaped around you.</p>
              <div className="hero-actions">
                <a className="button" href="#appointment">Request a session</a>
                <a className="quiet-link" href="#approach">Discover the approach</a>
              </div>
              <p className="hero-locations">Clinic appointments · Private home visits · Across Sydney</p>
            </div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Practice highlights">
          <div className="shell trust-grid">
            <p><strong>9+</strong><span>Years of experience</span></p>
            <p><strong>5.0</strong><span>Google rating</span></p>
            <p><strong>Clinic + home</strong><span>Across Sydney</span></p>
            <p><strong>Personalised</strong><span>Every treatment</span></p>
          </div>
        </section>

        <section className="philosophy" id="approach">
          <div className="shell approach-intro">
            <div><p className="eyebrow">A treatment designed around you</p><h2>Listen. Assess. Treat. Support.</h2></div>
            <p>Care begins with understanding how you feel and move — then adapting the session to your body.</p>
          </div>
          <div className="shell approach-sequence">
            {[
              ["01", "We listen", "Understanding what you are experiencing."],
              ["02", "We assess", "Looking at movement, tension and contributing patterns."],
              ["03", "We treat", "Hands-on work adapted to your body and goals."],
              ["04", "We support", "Practical next steps for how you want to feel."],
            ].map(([number, title, text]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}
          </div>
        </section>

        <section className="help section" id="treatments">
          <div className="shell section-heading">
            <p className="eyebrow">What Maksym can help with</p>
            <h2>Care for pain, movement<br />and a calmer body.</h2>
            <p>Treatment is chosen around what you are experiencing. You do not need to know the right technique before you arrive.</p>
          </div>
          <div className="shell treatment-grid">
            {featuredServices.map((service, index) => (
              <article className={`treatment-card treatment-${index + 1}`} key={service.title}>
                <div className="treatment-image"><Image src={service.image} alt={service.title} fill sizes="(max-width: 720px) 100vw, 33vw" /></div>
                <div className="treatment-copy"><span>{String(index + 1).padStart(2, "0")}</span><h3>{service.title}</h3><p>{service.short}</p></div>
              </article>
            ))}
          </div>
          <div className="shell supporting-services">
            <p>Also available</p>
            <span>Trigger Point Therapy</span><span>Pregnancy Massage</span><span>Post-Stroke Rehabilitation Support</span>
          </div>
        </section>

        <section className="mobile-feature section" id="mobile">
          <div className="shell mobile-stage">
            <div className="mobile-copy">
              <p className="eyebrow">Private home care</p>
              <h2>Professional care.<br /><em>Your space.</em></h2>
              <p>For clients who value privacy, convenience and personal attention. Maksym brings a tailored therapeutic session to your home across Sydney.</p>
              <ul><li>Minimum 60-minute appointment</li><li>Travel across Sydney, subject to availability</li><li>Post-stroke support primarily available at home</li></ul>
              <a className="button button-dark" href="#appointment">Request a private visit</a>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="shell about-grid">
            <div className="about-portrait">
              <Image src="/images/maksym/maksym-portrait-no-logo.png" alt="Maksym, therapeutic massage therapist in Sydney" fill sizes="(max-width: 800px) 100vw, 45vw" />
            </div>
            <div className="about-copy">
              <p className="eyebrow">Meet Maksym</p>
              <h2>Experience you can feel. Care you can trust.</h2>
              <p>With more than nine years of professional experience, Maksym brings calm attention and purposeful hands-on work to every appointment.</p>
              <blockquote>“I focus on understanding the cause of discomfort, not simply repeating the same treatment for every person.”</blockquote>
              <p>Many clients notice easier movement and less tension, alongside a greater sense of calm, better sleep and improved overall wellbeing.</p>
            </div>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="shell reviews-grid">
            <div><p className="eyebrow">Client experience</p><h2>Real care.<br />Real feedback.</h2></div>
            <div className="rating-panel"><strong>5.0</strong><p className="stars" aria-label="Five out of five stars">★★★★★</p><p>Verified client experiences on Google</p><a className="quiet-link" href={siteContent.social.google} target="_blank" rel="noreferrer">Read Google reviews ↗</a></div>
            <div className="review-note"><p>Clients consistently speak about noticeable improvement, personal attention and Maksym’s calm, positive presence.</p><small>Individual review excerpts will be added here from Maksym’s verified Google profile.</small></div>
          </div>
        </section>

        <section className="pricing section" id="pricing">
          <div className="shell pricing-grid">
            <div><p className="eyebrow">Treatments & pricing</p><h2>Clear starting points.</h2><p>Not sure which treatment fits? Choose Therapeutic Massage and Maksym will assess what you need during your first appointment.</p></div>
            <div className="price-row"><span>Clinic treatment</span><strong>$120</strong><small>60 minutes · Darling Harbour or Kogarah</small><a href="#appointment">Request appointment</a></div>
            <div className="price-row"><span>Private mobile treatment</span><strong><i>from</i> $170</strong><small>60 minutes · across Sydney</small><a href="#appointment">Request home visit</a></div>
          </div>
        </section>

        <section className="appointment section" id="appointment">
          <div className="shell appointment-grid">
            <div className="appointment-copy"><p className="eyebrow">Request an appointment</p><h2>Make space to feel better.</h2><p>Choose your preferred date and time. Maksym will contact you personally to confirm the appointment and final details.</p><div className="booking-note"><span>Prefer to speak directly?</span><a href={siteContent.business.phoneHref}>{siteContent.business.phoneDisplay}</a></div></div>
            <AppointmentForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
