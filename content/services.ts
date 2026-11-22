export type ServiceFaq = {
	question: string
	answer: string
}

export type ServicePage = {
	slug: string
	name: string
	eyebrow: string
	title: string
	description: string
	intro: string
	image: string
	imageAlt: string
	bestFor: string[]
	approach: string[]
	firstSession: string
	priceNote: string
	faqs: ServiceFaq[]
	comingSoon?: boolean
}

export const servicePages: ServicePage[] = [
	{
		slug: 'therapeutic-massage-sydney',
		name: 'Therapeutic Massage',
		eyebrow: 'Therapeutic massage · Sydney',
		title: 'Therapeutic massage shaped around how you feel and move.',
		description:
			'Personalised therapeutic massage in Sydney with assessment-led care for pain, muscle tension, restricted movement and recovery.',
		intro:
			'Therapeutic massage is the best starting point when you know what feels wrong but are unsure which technique to book. Maksym begins with a conversation and movement assessment, then adapts the session to your symptoms, comfort and goals.',
		image: '/images/maksym-new/therapeutic-back-massage-sydney-v4.png',
		imageAlt: 'Professional therapeutic leg massage treatment in Sydney',
		bestFor: [
			'Persistent neck, back or shoulder tension',
			'Restricted or uncomfortable movement',
			'Desk-related and postural strain',
			'Recovery after physical work or training',
		],
		approach: [
			'Discuss what you feel and what you want to improve',
			'Assess movement and areas of tension',
			'Use hands-on techniques suited to your body',
			'Agree on practical next steps for ongoing care',
		],
		firstSession:
			'Your first 60-minute appointment includes the initial conversation, assessment and hands-on treatment. Wear comfortable clothing and mention any injuries, operations or medical conditions before treatment begins.',
		priceNote:
			'Clinic appointments are $150 for 60 minutes. Mobile visits across Sydney start from $200, subject to location and availability.',
		faqs: [
			{
				question: 'Do I need to know which massage technique I need?',
				answer:
					'No. Choose Therapeutic Massage and explain what you are experiencing. Maksym will assess your needs and discuss the treatment approach with you.',
			},
			{
				question: 'Is therapeutic massage only for pain?',
				answer:
					'No. Clients also book for muscle tension, restricted movement, recovery and support with the physical effects of stress.',
			},
			{
				question: 'Does therapeutic massage replace medical treatment?',
				answer:
					'No. Massage does not replace diagnosis, medical care or physiotherapy. Seek medical advice for new, severe or unexplained symptoms.',
			},
		],
	},
	{
		slug: 'deep-tissue-massage-sydney',
		name: 'Deep Tissue Massage',
		eyebrow: 'Deep tissue massage · Sydney',
		title: 'Focused pressure for stubborn muscle tension.',
		description:
			'Deep tissue massage in Sydney for persistent muscle tension, overworked areas and movement restrictions, adapted to your comfort.',
		intro:
			'Deep tissue massage uses slower, focused pressure for areas that feel persistently tight or overworked. The aim is not to make treatment as intense as possible. Maksym adjusts pressure throughout the session and works with your response.',
		image: '/images/maksym-new/sports-recovery-massage-sydney.jpg',
		imageAlt: 'Focused deep tissue massage treatment in Sydney',
		bestFor: [
			'Long-standing muscle tightness',
			'Overworked shoulders, back or legs',
			'Physical work and training load',
			'Areas that feel dense or difficult to release',
		],
		approach: [
			'Identify the areas that need focused work',
			'Start at a pressure your body can accept',
			'Adjust depth rather than forcing through pain',
			'Reassess comfort and movement during the session',
		],
		firstSession:
			'Tell Maksym about previous injuries, current soreness and the level of pressure you normally tolerate. Deep tissue work can be combined with broader therapeutic treatment when appropriate.',
		priceNote:
			'A 60-minute clinic treatment is $150. The final approach is confirmed after assessment.',
		faqs: [
			{
				question: 'Does deep tissue massage have to hurt?',
				answer:
					'No. Strong pressure and useful treatment are not the same thing. Maksym adjusts depth to your comfort and response.',
			},
			{
				question: 'Can I request work on one specific area?',
				answer:
					'Yes. Explain which area bothers you and which movements or activities affect it. Maksym will assess whether nearby areas also need attention.',
			},
			{
				question: 'What should I do after the session?',
				answer:
					'Follow the guidance discussed during your appointment. Some people prefer light movement and good hydration after focused treatment.',
			},
		],
	},
	{
		slug: 'cupping-therapy-sydney',
		name: 'Cupping Therapy',
		eyebrow: 'Cupping therapy · Sydney',
		title: 'Cupping used with purpose, not as a fixed routine.',
		description:
			'Cupping therapy in Sydney used where appropriate within a personalised treatment for muscle tension, movement and recovery.',
		intro:
			'Cupping uses controlled suction on selected areas of the body. Maksym may include it when assessment suggests it suits your goals. It is a treatment option, not an automatic part of every appointment.',
		image: '/images/maksym-new/cupping-therapy-sydney.jpg',
		imageAlt: "Cupping therapy with suction cups placed on a client's back",
		bestFor: [
			'Selected areas of muscle tension',
			'Recovery-focused appointments',
			'Clients who respond well to suction-based techniques',
			'Treatment plans combining hands-on work and cupping',
		],
		approach: [
			'Check whether cupping is appropriate for you',
			'Explain the technique and expected sensation',
			'Apply cups to selected areas for a controlled period',
			'Combine cupping with hands-on care where useful',
		],
		firstSession:
			'Cupping can leave temporary circular marks. Tell Maksym about medications, skin conditions, easy bruising or other health concerns before treatment.',
		priceNote:
			'Cupping is offered where appropriate as part of a personalised appointment. Confirm the treatment plan when booking.',
		faqs: [
			{
				question: 'Will cupping leave marks?',
				answer:
					'It can leave temporary circular marks. Their appearance and duration vary from person to person.',
			},
			{
				question: 'Can I book cupping without an assessment?',
				answer:
					'Maksym will first check whether cupping is appropriate for your needs and health history.',
			},
			{
				question: 'Is cupping included in the appointment price?',
				answer:
					'The treatment plan is personalised. Ask Maksym to confirm what is included when he replies to your appointment request.',
			},
		],
	},
	{
		slug: 'dry-needling-sydney',
		name: 'Dry Needling',
		eyebrow: 'Dry needling · Coming soon',
		title: 'Dry needling is coming soon.',
		description:
			'Dry needling is coming soon and is not currently available to book.',
		intro:
			'Dry needling is coming soon. More information will be available when the service becomes available to book.',
		image: '/images/maksym-new/dry-needling-sydney.jpg',
		imageAlt:
			'Dry needling treatment using fine needles in a targeted muscle area',
		bestFor: [],
		approach: [],
		firstSession:
			'Dry needling cannot currently be requested as part of an appointment.',
		priceNote: 'Availability and booking details will be published soon.',
		faqs: [],
		comingSoon: true,
	},
	{
		slug: 'red-light-therapy-sydney',
		name: 'Red Light Therapy',
		eyebrow: 'Red light therapy · Sydney',
		title: 'A considered addition to a personalised session.',
		description:
			'Red light therapy in Sydney offered where appropriate as part of a personalised therapeutic massage and recovery session.',
		intro:
			'Red light therapy may be included as one part of a broader treatment session. Maksym discusses why it may suit your appointment and positions the equipment for the selected area.',
		image: '/images/maksym-new/red-light-therapy-service-sydney.jpg',
		imageAlt: "Red light therapy equipment positioned over a client's back",
		bestFor: [
			'Selected recovery-focused appointments',
			'Clients assessed as suitable for light-based treatment',
			'Sessions combining hands-on and complementary techniques',
			'A calm, non-contact stage within treatment',
		],
		approach: [
			'Discuss the goal of the session',
			'Check suitability and explain the setup',
			'Position the light over the selected area',
			'Combine it with the wider treatment plan where appropriate',
		],
		firstSession:
			'Tell Maksym about light sensitivity, medications and relevant medical conditions. Red light therapy is optional and does not replace medical treatment.',
		priceNote:
			'Red light therapy is offered where appropriate within a personalised appointment. Confirm availability when requesting your session.',
		faqs: [
			{
				question: 'Is red light therapy a standalone medical treatment?',
				answer:
					"No. On this website it is described as an optional part of Maksym's therapeutic service, not a replacement for medical care.",
			},
			{
				question: 'Will red light therapy be used in every session?',
				answer:
					'No. Maksym only includes it when it suits the treatment plan and you are comfortable proceeding.',
			},
			{
				question: 'Do I need to mention medications?',
				answer:
					'Yes. Tell Maksym about medications, light sensitivity and relevant health conditions before treatment.',
			},
		],
	},
	{
		slug: 'mobile-massage-sydney',
		name: 'Mobile Massage',
		eyebrow: 'Mobile massage · Sydney',
		title: 'Therapeutic care delivered to your home.',
		description:
			'Mobile therapeutic massage across Sydney with a portable treatment setup, personalised assessment and 60-minute appointments from $200.',
		intro:
			"A mobile appointment brings Maksym's therapeutic approach to your home. He brings a portable treatment table and the equipment needed for your session, then sets up in a suitable space you provide.",
		image: '/images/generated/mobile-massage-home-visit-sydney-v2.png',
		imageAlt:
			'Private mobile massage home visit in Sydney with portable equipment',
		bestFor: [
			'Clients who prefer treatment at home',
			'Busy schedules and private appointments',
			'People for whom travel is difficult',
			'Post-stroke support arranged as a home visit',
		],
		approach: [
			'Confirm your suburb and access details',
			'Discuss the main concern before the visit',
			'Set up the portable table in a clear space',
			'Complete the assessment and personalised treatment',
		],
		firstSession:
			'Allow enough clear space for a portable massage table and safe access to the room. Include your suburb, parking or building access details when Maksym confirms the visit.',
		priceNote:
			'Mobile appointments start from $200 for 60 minutes. Maksym confirms availability and the final price based on your location.',
		faqs: [
			{
				question: 'Which Sydney suburbs do you visit?',
				answer:
					'Mobile appointments are available across Sydney, subject to travel time and availability. Include your suburb in the request form for confirmation.',
			},
			{
				question: 'What do I need to prepare at home?',
				answer:
					'Provide a clear, private area with enough room for the portable table. Maksym brings the treatment equipment.',
			},
			{
				question: 'Is the requested time confirmed immediately?',
				answer:
					'No. The form sends a request. Maksym contacts you to confirm the time, location and final details.',
			},
		],
	},
]

export function getServiceBySlug(slug: string) {
	return servicePages.find(service => service.slug === slug)
}

export function getServiceByName(name: string) {
	return servicePages.find(service => service.name === name)
}
