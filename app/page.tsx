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
  aggregateRating: { "@type": "AggregateRating", ratingValue: siteContent.business.rating, reviewCount: siteContent.business.reviewCount },
};

const featuredServices = siteContent.services.filter((service) => service.featured);
const serviceImages = [
  "/images/maksym/therapeutic-treatment.webp",
  "/images/maksym/hands-detail.webp",
  "/images/maksym/clinic-session.webp",
] as const;

export default function HomePage() {
  return (
    <>
      <Script id="business-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main id="main">
        <section className="hero" id="top">
          <div className="hero-frame shell-wide">
            <Image className="hero-image" src="/images/maksym/hero-treatment.webp" alt="Maksym providing personalised therapeutic massage in Sydney" fill priority loading="eager" sizes="100vw" />
            <div className="hero-shade" />
            <div className="hero-copy">
              <p className="kicker">Therapeutic massage in Sydney</p>
              <h1>Less pain.<br />More freedom<br />to move.</h1>
              <p>Personalised therapeutic massage for pain relief, muscle tension and recovery — in clinic or at home.</p>
              <div className="hero-actions">
                <a className="button" href="#appointment">Request an appointment</a>
                <a className="text-link" href="#treatments">Explore treatments <span>↗</span></a>
              </div>
            </div>
            <div className="hero-proof"><strong>9+</strong><span>years of<br />experience</span><i /><strong>5.0</strong><span>from 62<br />Google reviews</span></div>
          </div>
        </section>

        <section className="intro section">
          <div className="shell narrow-centre">
            <p className="kicker">Care shaped around you</p>
            <h2>Therapeutic care for<br /><em>easier, freer movement.</em></h2>
            <p className="section-lead">Every body tells a different story. Maksym listens, assesses and adapts each treatment to what you need on the day.</p>
          </div>
          <div className="shell service-orbits" id="treatments">
            {featuredServices.map((service, index) => (
              <article key={service.title} className="service-orbit">
                <div className="service-photo"><Image src={serviceImages[index]} alt={`${service.title} with Maksym`} fill sizes="(max-width: 700px) 80vw, 30vw" /></div>
                <span>0{index + 1}</span><h3>{service.title}</h3><p>{service.short}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="story section" id="approach">
          <div className="shell story-grid">
            <div className="story-collage">
              <div className="photo-tall"><Image src="/images/maksym/therapeutic-treatment.webp" alt="Maksym tailoring hands-on treatment to a client" fill sizes="(max-width: 800px) 90vw, 40vw" /></div>
              <div className="photo-small"><Image src="/images/maksym/movement-assessment.webp" alt="Maksym assessing a client's movement" fill sizes="(max-width: 800px) 60vw, 24vw" /></div>
            </div>
            <div className="story-copy">
              <p className="kicker">A thoughtful approach</p>
              <h2>Care begins<br /><em>with listening.</em></h2>
              <p className="section-lead">Maksym combines assessment and hands-on treatment to understand what may be contributing to discomfort — then shapes the session around your body, movement and goals.</p>
              <ol className="quiet-steps">
                <li><span>01</span><div><strong>Listen & assess</strong><p>Talk through symptoms, history and what you want to improve.</p></div></li>
                <li><span>02</span><div><strong>Treat with intention</strong><p>Pressure and techniques are adapted to the individual.</p></div></li>
                <li><span>03</span><div><strong>Plan what comes next</strong><p>Leave with a clear, practical direction for ongoing care.</p></div></li>
              </ol>
              <a className="button button-dark" href="#appointment">Start with an assessment</a>
            </div>
          </div>
        </section>

        <section className="ethos section">
          <div className="shell ethos-inner">
            <Image src="/images/balance-with-maksym-logo-transparent.png" alt="" width={150} height={135} />
            <div>
              <p className="kicker">The way Maksym works</p>
              <blockquote>“A treatment is also a moment to slow down, feel supported and return to yourself.”</blockquote>
              <p>Maksym brings skill, attention and genuine positive energy to every appointment. Clients often mention not only easier movement and less tension, but also feeling calmer, lighter and truly cared for.</p>
            </div>
          </div>
        </section>

        <section className="concerns section">
          <div className="shell">
            <div className="split-title"><div><p className="kicker">What brings people in</p><h2>Support for the way<br /><em>you live and move.</em></h2></div><p>From desk-related tension to sports recovery, treatment is focused on helping you feel more comfortable and capable in everyday life.</p></div>
            <div className="concern-ribbon">{siteContent.concerns.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}</div>
          </div>
        </section>

        <section className="mobile-feature section" id="mobile">
          <div className="shell mobile-panel">
            <Image src="/images/maksym/clinic-session.webp" alt="Maksym providing a therapeutic massage session" fill sizes="100vw" />
            <div className="mobile-overlay" />
            <div className="mobile-copy"><p className="kicker light">Mobile therapeutic massage</p><h2>Professional care,<br /><em>where you feel at home.</em></h2><p>Mobile appointments are available across Sydney, subject to location and availability. Post-stroke support is primarily offered as a home service.</p><a className="button button-light" href="#appointment">Request a mobile visit</a></div>
          </div>
        </section>

        <section className="pricing section" id="pricing">
          <div className="shell pricing-layout">
            <div><p className="kicker">Simple pricing</p><h2>Choose the setting<br /><em>that suits you.</em></h2><p className="section-lead">Select a preferred time. Maksym will contact you personally to confirm the appointment and final details.</p></div>
            <div className="price-list">
              <article><p>Clinic treatment</p><div><strong>$120</strong><span>60 minutes</span></div><small>Darling Harbour · Kogarah</small><a href="#appointment">Request clinic appointment ↗</a></article>
              <article><p>Mobile treatment</p><div><small>from</small><strong>$170</strong><span>60 minutes</span></div><small>Across Sydney · subject to availability</small><a href="#appointment">Request mobile appointment ↗</a></article>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="shell about-grid">
            <div className="about-copy"><p className="kicker">Balance With Maksym</p><h2>Skilled hands.<br /><em>A calm human approach.</em></h2><p>With more than nine years of professional experience, Maksym creates thoughtful treatment plans around each client’s pain, movement and recovery goals.</p><blockquote>“Every treatment is tailored to the person — not just the symptoms.”</blockquote></div>
            <div className="about-image"><Image src="/images/maksym/maksym-portrait.webp" alt="Maksym, therapeutic massage therapist in Sydney" fill sizes="(max-width: 800px) 90vw, 45vw" /></div>
          </div>
        </section>

        <section className="reviews section" id="reviews">
          <div className="shell review-card"><div><p className="kicker">Client experience</p><strong className="score">5.0</strong><p className="stars">★★★★★</p><small>Based on 62 Google reviews</small></div><blockquote>“Many clients describe leaving with less tension, easier movement and a calmer sense of wellbeing.”<cite>Common themes from client feedback</cite></blockquote></div>
        </section>

        <section className="appointment section" id="appointment">
          <div className="shell appointment-grid"><div className="appointment-copy"><p className="kicker">Request an appointment</p><h2>Take a moment<br /><em>for your body.</em></h2><p>Choose your preferred date and time. Maksym will contact you personally to confirm the details — this is a request, not instant booking.</p><div className="booking-note"><strong>Prefer to call?</strong><a href={siteContent.business.phoneHref}>{siteContent.business.phoneDisplay}</a></div></div><AppointmentForm /></div>
        </section>
      </main>
      <Footer />
    </>
  );
}
