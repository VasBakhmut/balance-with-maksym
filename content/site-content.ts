export const siteContent = {
  business: {
    name: "Balance With Maksym",
    legalName: "Balance With Maksym Therapeutic Massage",
    phoneDisplay: "0411 918 718",
    phoneHref: "tel:+61411918718",
    experienceYears: "9+",
    rating: "5.0",
  },
  seo: {
    title: "Therapeutic Massage Sydney | Balance With Maksym",
    description: "Personalised therapeutic massage in Sydney for pain, tension, mobility and recovery. Clinic appointments and private home visits across Sydney.",
    canonical: "https://balancewithmaksym.com.au",
  },
  social: {
    instagram: "https://www.instagram.com/balancemaksymmassage",
    facebook: "https://www.facebook.com/BalanceWithinRemedialMassage",
    google: "https://maps.app.goo.gl/TMK832yNe4G2rJUr9?g_st=ic",
  },
  locations: ["Darling Harbour", "Kogarah"],
  services: [
    { title: "Therapeutic Massage", short: "Assessment-led, hands-on treatment for pain, tension and restricted movement.", image: "/images/maksym/therapeutic-treatment.webp", featured: true },
    { title: "Deep Tissue Massage", short: "Focused pressure adapted to persistent tension and overworked areas.", image: "/images/maksym/hands-detail.webp", featured: true },
    { title: "Nerve Pain Treatment", short: "A considered therapeutic approach for sciatica and nerve-related discomfort.", image: "/images/maksym/movement-assessment.webp", featured: true },
    { title: "Cupping Therapy", short: "Targeted cupping used where appropriate to support mobility and ease muscle tension.", image: "/images/maksym/cupping-session.jfif", featured: true },
    { title: "Red-Light Therapy", short: "A focused light-based treatment available as part of selected sessions.", image: "/images/maksym/red-light-session.jfif", featured: true },
    { title: "Mobile Massage", short: "Personalised therapeutic care delivered in the comfort and privacy of your home.", image: "/images/maksym/clinic-session.webp", featured: true },
    { title: "Trigger Point Therapy", short: "Targeted work for sensitive areas linked with referred pain and muscle tightness.", featured: false },
    { title: "Pregnancy Massage", short: "Comfort-focused massage adapted to the changing needs of pregnancy.", featured: false },
    { title: "Post-Stroke Rehabilitation Support", short: "Personalised support focused on mobility, muscle tension and functional movement.", featured: false },
  ],
  concerns: [
    "Neck, back & shoulder pain",
    "Sciatica & nerve discomfort",
    "Office-related tension",
    "Headaches & muscle tension",
    "Mobility & movement",
    "Post-stroke support",
  ],
} as const;

export type ServiceName = (typeof siteContent.services)[number]["title"];
