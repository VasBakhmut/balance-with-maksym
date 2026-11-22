import { siteContent } from '@/content/site-content'

export const dynamic = 'force-static'

export function GET() {
	const origin = process.env.NEXT_PUBLIC_SITE_URL ?? siteContent.seo.canonical
	const content = `# Balance With Maksym

> Personalised therapeutic massage in Sydney for pain relief, muscle tension, recovery and better movement.

Balance With Maksym is the personal therapeutic massage practice of Maksym, a Sydney therapeutic massage therapist with more than seven years of professional experience. Clinic appointments are available by arrangement, and private mobile appointments are available across Sydney subject to location and availability.

## Current services

- [Therapeutic Massage](${origin}/services/therapeutic-massage-sydney)
- [Deep Tissue Massage](${origin}/services/deep-tissue-massage-sydney)
- [Cupping Therapy](${origin}/services/cupping-therapy-sydney)
- [Red Light Therapy](${origin}/services/red-light-therapy-sydney)
- [Mobile Massage Across Sydney](${origin}/services/mobile-massage-sydney)

Dry needling is coming soon and is not currently available to book.

## Practical information

- Clinic treatment: $150 for 60 minutes.
- Mobile treatment: from $200 for 60 minutes.
- Appointment requests require confirmation from Maksym.
- Phone: ${siteContent.business.phoneDisplay}
- Service area: Sydney, NSW, Australia.

## About and guides

- [About Maksym](${origin}/about)
- [Your first therapeutic massage appointment](${origin}/guides/first-therapeutic-massage-appointment)
- [Clinic or mobile massage in Sydney?](${origin}/guides/clinic-or-mobile-massage-sydney)

## Important note

Massage does not replace medical diagnosis, medical treatment or physiotherapy.
`

	return new Response(content, {
		headers: { 'Content-Type': 'text/plain; charset=utf-8' },
	})
}
