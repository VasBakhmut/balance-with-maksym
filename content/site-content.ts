export const siteContent = {
  business: {
    name: "Balance With Maksym",
    legalName: "Balance With Maksym Therapeutic Massage",
    phoneDisplay: "0411 918 718",
    phoneHref: "tel:+61411918718",
    experienceYears: "9+",
    rating: "5.0",
    reviewCount: 62,
  },
  seo: {
    title: "Therapeutic Massage Sydney | Balance With Maksym",
    description:
      "Personalised therapeutic massage in Sydney for pain relief, recovery and better movement. Clinic appointments in Darling Harbour and Kogarah, plus mobile massage across Sydney.",
    canonical: "https://balancewithmaksym.com.au",
  },
  social: {
    instagram: "https://www.instagram.com/balancemaksymmassage",
    facebook: "https://www.facebook.com/BalanceWithinRemedialMassage",
    google: "https://maps.app.goo.gl/TMK832yNe4G2rJUr9?g_st=ic",
  },
  locations: ["Darling Harbour", "Kogarah"],
  services: [
    {
      title: "Therapeutic Massage",
      short: "A tailored treatment combining assessment and hands-on therapy for pain, tension and restricted movement.",
      featured: true,
    },
    {
      title: "Deep Tissue Massage",
      short: "Focused pressure for persistent muscle tension, overworked areas and movement restrictions.",
      featured: true,
    },
    {
      title: "Sports Massage",
      short: "Support for active bodies before training, after exertion and throughout injury recovery.",
      featured: true,
    },
    {
      title: "Mobile Massage",
      short: "Personalised therapeutic treatment delivered in the comfort and privacy of your home.",
      featured: true,
    },
    {
      title: "Trigger Point Therapy",
      short: "Targeted work for sensitive areas that may contribute to referred pain and muscle tightness.",
      featured: false,
    },
    {
      title: "Pregnancy Massage",
      short: "Comfort-focused massage adapted to the changing needs of pregnancy.",
      featured: false,
    },
    {
      title: "Post-Stroke Rehabilitation Support",
      short: "Personalised support focused on mobility, muscle tension and functional movement.",
      featured: false,
    },
  ],
  concerns: [
    "Neck & back pain",
    "Sports recovery",
    "Office-related tension",
    "Sciatica & headaches",
    "Mobility & movement",
    "Post-stroke support",
  ],
  faqs: [
    {
      question: "Which treatment should I choose?",
      answer:
        "If you are unsure, select Therapeutic Massage. Your first appointment includes an assessment so Maksym can recommend an approach suited to your needs.",
    },
    {
      question: "What happens during the first appointment?",
      answer:
        "You will discuss your symptoms, relevant medical history and treatment goals before an assessment, personalised plan and hands-on treatment.",
    },
    {
      question: "Are mobile appointments available?",
      answer:
        "Yes. Mobile appointments are available across Sydney, subject to location and availability, for bookings of at least 60 minutes.",
    },
    {
      question: "Is my selected time automatically confirmed?",
      answer:
        "No. The form sends an appointment request. Maksym will contact you to confirm the date, time, location and final details.",
    },
    {
      question: "What should I wear?",
      answer:
        "Wear comfortable clothing, stay hydrated and let Maksym know about any injuries, surgeries or medical conditions relevant to treatment.",
    },
    {
      question: "Do you offer HICAPS or private health rebates?",
      answer: "HICAPS and private health insurance rebates are not currently available.",
    },
    {
      question: "Is post-stroke rehabilitation support available at home?",
      answer:
        "Yes. It is primarily offered as a mobile service, with clinic appointments available by arrangement. Massage support does not replace medical care or physiotherapy.",
    },
  ],
} as const;

export type ServiceName = (typeof siteContent.services)[number]["title"];
