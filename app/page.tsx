import Image from 'next/image'
import Link from 'next/link'
import { AppointmentForm } from '@/components/appointment-form'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { ArrowUpRight } from '@/components/icons'
import { getServiceByName, servicePages } from '@/content/services'
import { siteContent } from '@/content/site-content'

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.canonical

const jsonLd = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'WebSite',
			'@id': `${origin}/#website`,
			url: origin,
			name: siteContent.business.name,
			inLanguage: 'en-AU',
		},
		{
			'@type': 'HealthAndBeautyBusiness',
			'@id': `${origin}/#business`,
			name: siteContent.business.legalName,
			url: origin,
			telephone: '+61411918718',
			image: `${origin}/images/balance-with-maksym-logo-transparent.png`,
			logo: `${origin}/images/balance-with-maksym-logo-transparent.png`,
			description: siteContent.seo.description,
			areaServed: { '@type': 'City', name: 'Sydney' },
			priceRange: '$150–$200+',
			sameAs: [
				siteContent.social.instagram,
				siteContent.social.facebook,
				siteContent.social.google,
			],
			founder: { '@id': `${origin}/about#person` },
			hasOfferCatalog: {
				'@type': 'OfferCatalog',
				name: 'Therapeutic massage services',
				itemListElement: servicePages
					.filter(service => !service.comingSoon)
					.map(service => ({
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: service.name,
							url: `${origin}/services/${service.slug}`,
						},
					})),
			},
		},
		{
			'@type': 'Person',
			'@id': `${origin}/about#person`,
			name: 'Maksym',
			jobTitle: 'Therapeutic Massage Therapist',
			url: `${origin}/about`,
			worksFor: { '@id': `${origin}/#business` },
			sameAs: [siteContent.social.instagram, siteContent.social.facebook],
		},
		{
			'@type': 'FAQPage',
			mainEntity: siteContent.faqs.map(faq => ({
				'@type': 'Question',
				name: faq.question,
				acceptedAnswer: { '@type': 'Answer', text: faq.answer },
			})),
		},
	],
}

const featuredServices = siteContent.services.filter(
	service => service.featured,
)

const featuredServiceImages: Record<string, { src: string; alt: string }> = {
	'Therapeutic Massage': {
		src: '/images/maksym-new/therapeutic-back-massage-sydney-v4.png',
		alt: 'Professional therapeutic leg massage treatment in Sydney',
	},
	'Deep Tissue Massage': {
		src: '/images/maksym-new/sports-recovery-massage-sydney.jpg',
		alt: 'Maksym providing focused deep tissue massage treatment in Sydney',
	},
	'Cupping Therapy': {
		src: '/images/maksym-new/cupping-therapy-sydney.jpg',
		alt: "Cupping therapy using suction cups on a client's back in Sydney",
	},
	'Red Light Therapy': {
		src: '/images/maksym-new/red-light-therapy-service-sydney.jpg',
		alt: "Red light therapy lamps positioned over a client's back",
	},
	'Dry Needling': {
		src: '/images/maksym-new/dry-needling-sydney.jpg',
		alt: 'Dry needling treatment using fine needles in a targeted muscle area',
	},
	'Mobile Massage': {
		src: '/images/generated/mobile-massage-home-visit-sydney-v2.png',
		alt: 'A private mobile therapeutic massage home visit in Sydney with portable equipment',
	},
}

export default function HomePage() {
	return (
		<>
			<script
				id='business-jsonld'
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<Header />
			<main id='main'>
				<section className='hero' id='top'>
					<div className='hero-frame shell-wide'>
						<Image
							className='hero-image'
							src='/images/generated/maksym-therapeutic-massage-hero-v1.png'
							alt='Personalised therapeutic back massage treatment in Sydney'
							fill
							priority
							sizes='100vw'
						/>
						<div className='hero-shade' />
						<div className='hero-copy'>
							<p className='kicker'>Therapeutic massage in Sydney</p>
							<h1>
								Less pain.
								<br />
								More freedom
								<br />
								to move.
							</h1>
							<p>
								Personalised therapeutic massage for pain relief, muscle tension
								and recovery — in clinic or at home.
							</p>
							<div className='hero-actions'>
								<a className='button' href='#appointment'>
									Request an appointment
								</a>
								<a className='text-link' href='#treatments'>
									Explore treatments <ArrowUpRight />
								</a>
							</div>
						</div>
						<div className='hero-proof'>
							<strong>7+</strong>
							<span>
								years of
								<br />
								experience
							</span>
							<i />
							<strong>5.0</strong>
							<span>
								Google
								<br />
								rating
							</span>
						</div>
					</div>
				</section>

				<section className='intro section'>
					<div className='shell narrow-centre'>
						<p className='kicker'>Care shaped around you</p>
						<h2>
							Therapeutic care for
							<br />
							<em>easier, freer movement.</em>
						</h2>
						<p className='section-lead'>
							Every body tells a different story. Maksym listens, assesses and
							adapts each treatment to what you need on the day.
						</p>
					</div>
					<div className='shell service-orbits' id='treatments'>
						{featuredServices.map((service, index) => {
							const servicePage = getServiceByName(service.title)
							return (
								<article key={service.title} className='service-orbit'>
									<Link
										className='service-photo'
										href={`/services/${servicePage?.slug}`}
										aria-label={`Learn about ${service.title}`}
									>
										<Image
											src={featuredServiceImages[service.title].src}
											alt={featuredServiceImages[service.title].alt}
											fill
											sizes='(max-width: 600px) 50vw, (max-width: 900px) 45vw, 30vw'
										/>
									</Link>
									<span>0{index + 1}</span>
									<h3>
										<Link href={`/services/${servicePage?.slug}`}>
											{service.title}
										</Link>
									</h3>
									<p>{service.short}</p>
									<Link
										className='service-card-link'
										href={`/services/${servicePage?.slug}`}
									>
										{servicePage?.comingSoon ? 'View update' : 'View treatment'}
										<ArrowUpRight />
									</Link>
								</article>
							)
						})}
					</div>
				</section>

				<section
					className='body-focus section'
					aria-labelledby='body-focus-title'
				>
					<div className='shell body-focus-heading'>
						<div>
							<p className='kicker'>Understanding the body</p>
							<h2 id='body-focus-title'>
								More than massage.
								<br />
								<em>Care with a clear purpose.</em>
							</h2>
						</div>
						<p>
							Maksym looks beyond the immediate area of discomfort — considering
							muscles, movement and nerve-related patterns to shape treatment
							around what your body needs.
						</p>
					</div>
					<div className='shell body-focus-grid'>
						<article className='body-focus-card'>
							<div className='body-focus-image'>
								<Image
									src='/images/anatomy/pain-tension-v1.png'
									alt='Anatomical view of the neck, shoulders and upper-back muscles'
									fill
									sizes='(max-width: 700px) 92vw, 31vw'
								/>
							</div>
							<div className='body-focus-copy'>
								<span>Muscles</span>
								<h3>Pain &amp; tension</h3>
								<p>
									Focused care for neck, back and shoulder tension, including
									discomfort linked with headaches and daily strain.
								</p>
							</div>
						</article>
						<article className='body-focus-card'>
							<div className='body-focus-image'>
								<Image
									src='/images/anatomy/posture-movement-v1.png'
									alt='Human skeleton showing posture and spinal alignment'
									fill
									sizes='(max-width: 700px) 92vw, 31vw'
								/>
							</div>
							<div className='body-focus-copy'>
								<span>Movement</span>
								<h3>Mobility &amp; posture</h3>
								<p>
									Treatment shaped around stiffness, restricted movement and
									postural tension from work, training or everyday life.
								</p>
							</div>
						</article>
						<article className='body-focus-card'>
							<div className='body-focus-image'>
								<Image
									src='/images/anatomy/nerve-pain-v1.png'
									alt='Anatomical view of the lower spine, pelvis and sciatic nerve'
									fill
									sizes='(max-width: 700px) 92vw, 31vw'
								/>
							</div>
							<div className='body-focus-copy'>
								<span>Nervous system</span>
								<h3>Nerve pain &amp; recovery</h3>
								<p>
									A considered approach for sciatica, nerve-related discomfort
									and restoring more comfortable movement.
								</p>
							</div>
						</article>
					</div>
				</section>

				<section className='story section' id='approach'>
					<div className='shell story-grid'>
						<div className='story-collage'>
							<div className='photo-tall'>
								<Image
									src='/images/maksym-new/red-light-therapy-sydney.jpg'
									alt='Red light therapy used as part of a personalised treatment session'
									fill
									sizes='(max-width: 800px) 90vw, 40vw'
								/>
							</div>
							<div className='photo-small'>
								<Image
									src='/images/maksym-new/cupping-therapy-sydney.jpg'
									alt='Maksym providing focused cupping therapy in Sydney'
									fill
									sizes='(max-width: 800px) 60vw, 24vw'
								/>
							</div>
						</div>
						<div className='story-copy'>
							<p className='kicker'>A thoughtful approach</p>
							<h2>
								Care begins
								<br />
								<em>with listening.</em>
							</h2>
							<p className='section-lead'>
								Maksym combines assessment and hands-on treatment to understand
								what may be contributing to discomfort — then shapes the session
								around your body, movement and goals.
							</p>
							<ol className='quiet-steps'>
								<li>
									<span>01</span>
									<div>
										<strong>Listen & assess</strong>
										<p>
											Talk through symptoms, history and what you want to
											improve.
										</p>
									</div>
								</li>
								<li>
									<span>02</span>
									<div>
										<strong>Treat with intention</strong>
										<p>
											Pressure and techniques are adapted to the individual.
										</p>
									</div>
								</li>
								<li>
									<span>03</span>
									<div>
										<strong>Plan what comes next</strong>
										<p>
											Leave with a clear, practical direction for ongoing care.
										</p>
									</div>
								</li>
							</ol>
							<a className='button button-dark' href='#appointment'>
								Start with an assessment
							</a>
						</div>
					</div>
				</section>

				<section className='ethos section'>
					<div className='shell ethos-inner'>
						<Image
							src='/images/balance-with-maksym-logo-transparent.png'
							alt=''
							width={150}
							height={135}
						/>
						<div>
							<p className='kicker'>The way Maksym works</p>
							<blockquote>
								“A treatment is also a moment to slow down, feel supported and
								return to yourself.”
							</blockquote>
							<p>
								Maksym brings skill, attention and genuine positive energy to
								every appointment. Clients often mention not only easier
								movement and less tension, but also feeling calmer, lighter and
								truly cared for.
							</p>
						</div>
					</div>
				</section>

				<section className='concerns section'>
					<div className='shell'>
						<div className='split-title'>
							<div>
								<p className='kicker'>What brings people in</p>
								<h2>
									Support for the way
									<br />
									<em>you live and move.</em>
								</h2>
							</div>
							<p>
								From desk-related tension to sports recovery, treatment is
								focused on helping you feel more comfortable and capable in
								everyday life.
							</p>
						</div>
						<div className='concern-ribbon'>
							{siteContent.concerns.map((item, index) => (
								<div key={item}>
									<span>{String(index + 1).padStart(2, '0')}</span>
									<p>{item}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className='mobile-feature section' id='mobile'>
					<div className='shell mobile-panel'>
						<div className='mobile-copy'>
							<p className='kicker'>Mobile therapeutic massage</p>
							<h2>
								Professional care,
								<br />
								<em>where you feel at home.</em>
							</h2>
							<p>
								Personalised therapeutic care, delivered in the comfort of your
								home.
							</p>
							<a className='button' href='#appointment'>
								Request a mobile visit
							</a>
						</div>
						<div className='mobile-visual'>
							<Image
								src='/images/maksym-new/mobile-therapeutic-massage-sydney.jpg'
								alt='Maksym providing mobile therapeutic massage in a private Sydney home'
								fill
								sizes='(max-width: 600px) 100vw, 55vw'
							/>
						</div>
					</div>
				</section>

				<section className='pricing section' id='pricing'>
					<div className='shell pricing-layout'>
						<div>
							<p className='kicker'>Simple pricing</p>
							<h2>
								Choose the setting
								<br />
								<em>that suits you.</em>
							</h2>
							<p className='section-lead'>
								Select a preferred time. Maksym will contact you personally to
								confirm the appointment and final details.
							</p>
						</div>
						<div className='price-list'>
							<article>
								<p>Clinic treatment</p>
								<div>
									<strong>$150</strong>
									<span>60 minutes</span>
								</div>
								<small>Clinic location confirmed when booking</small>
								<a href='#appointment'>Request clinic appointment <ArrowUpRight /></a>
							</article>
							<article>
								<p>Mobile treatment</p>
								<div>
									<small>from</small>
									<strong>$200</strong>
									<span>60 minutes</span>
								</div>
								<small>Across Sydney · subject to availability</small>
								<a href='#appointment'>Request mobile appointment <ArrowUpRight /></a>
							</article>
						</div>
					</div>
				</section>

				<section className='about section' id='about'>
					<div className='shell about-grid'>
						<div className='about-copy'>
							<p className='kicker'>Balance With Maksym</p>
							<h2>
								Skilled hands.
								<br />
								<em>A calm human approach.</em>
							</h2>
							<p>
								With more than seven years of professional experience, Maksym
								creates thoughtful treatment plans around each client’s pain,
								movement and recovery goals.
							</p>
							<blockquote>
								“Every treatment is tailored to the person — not just the
								symptoms.”
							</blockquote>
							<Link className='text-link about-more' href='/about'>
								Meet Maksym <ArrowUpRight />
							</Link>
						</div>
						<div className='about-image'>
							<Image
								src='/images/maksym-new/maksym-therapeutic-massage-therapist-sydney.jpg'
								alt='Maksym, an experienced therapeutic massage therapist in Sydney'
								fill
								sizes='(max-width: 800px) 90vw, 45vw'
							/>
						</div>
					</div>
				</section>

				<section className='reviews section' id='reviews'>
					<div className='shell review-card'>
						<div>
							<p className='kicker'>Client experience</p>
							<strong className='score'>5.0</strong>
							<p className='stars'>★★★★★</p>
							<a className='review-source' href={siteContent.social.google} target='_blank' rel='noreferrer'>
								<small>Verified Google reviews</small>
								<ArrowUpRight />
							</a>
						</div>
						<blockquote>
							“Many clients describe leaving with less tension, easier movement
							and a calmer sense of wellbeing.”
							<cite>Common themes from client feedback</cite>
						</blockquote>
					</div>
				</section>

				<section className='home-faq section' aria-labelledby='home-faq-title'>
					<div className='shell faq-layout'>
						<div>
							<p className='kicker'>Before your appointment</p>
							<h2 id='home-faq-title'>
								Questions clients
								<br />
								<em>often ask.</em>
							</h2>
							<p className='section-lead'>
								Clear answers about choosing a treatment, mobile visits and
								requesting a time.
							</p>
						</div>
						<div className='faq-list'>
							{siteContent.faqs.map(faq => (
								<details key={faq.question}>
									<summary>{faq.question}</summary>
									<p>{faq.answer}</p>
								</details>
							))}
						</div>
					</div>
				</section>

				<section className='appointment section' id='appointment'>
					<div className='shell appointment-grid'>
						<div className='appointment-copy'>
							<p className='kicker'>Request an appointment</p>
							<h2>
								Take a moment
								<br />
								<em>for your body.</em>
							</h2>
							<p>
								Choose your preferred date and time. Maksym will contact you
								personally to confirm the details — this is a request, not
								instant booking.
							</p>
							<div className='booking-note'>
								<strong>Prefer to call?</strong>
								<a href={siteContent.business.phoneHref}>
									{siteContent.business.phoneDisplay}
								</a>
							</div>
						</div>
						<AppointmentForm />
					</div>
				</section>
			</main>
			<Footer />
		</>
	)
}
