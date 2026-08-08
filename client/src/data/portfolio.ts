export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string;
  client: string;
  screenshots?: string[];
}

export const categories = [
  "All",
  "Corporate",
  "Real Estate",
  "Healthcare",
  "Schools",
  "NGOs",
  "E-commerce",
  "Travel",
  "Law Firms",
  "Hospitality",
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "FinTech Corporate Platform",
    category: "Corporate",
    image: "/manus-storage/portfolio-corporate_abe37286.png",
    challenge: "A Lagos-based fintech startup needed a professional corporate presence to attract investors and enterprise clients.",
    solution: "We designed and developed a sleek, modern corporate website with investor dashboard, product showcases, and lead generation funnels.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    results: "150% increase in qualified leads within 3 months. 40% reduction in bounce rate.",
    client: "PayFlow Technologies",
    screenshots: [
      "/manus-storage/portfolio-corporate_abe37286.png",
      "/manus-storage/portfolio-corporate_abe37286.png",
    ],
  },
  {
    id: 2,
    title: "Premium Real Estate Portal",
    category: "Real Estate",
    image: "/manus-storage/portfolio-realestate_77421e68.png",
    challenge: "A luxury real estate firm needed a property listing platform with advanced search and virtual tours.",
    solution: "Built a comprehensive real estate portal with property search, virtual 3D tours, agent profiles, and mortgage calculators.",
    technologies: ["Next.js", "MongoDB", "Three.js", "Mapbox"],
    results: "300+ properties listed, 200% increase in property inquiries, 85% user satisfaction.",
    client: "Lagos Luxury Homes",
    screenshots: [
      "/manus-storage/portfolio-realestate_77421e68.png",
      "/manus-storage/portfolio-realestate_77421e68.png",
    ],
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "Healthcare",
    image: "/manus-storage/portfolio-healthcare_005267ab.png",
    challenge: "A multi-branch hospital network needed a digital patient management and appointment booking system.",
    solution: "Developed a comprehensive healthcare portal with online booking, patient records, telemedicine integration, and analytics.",
    technologies: ["React", "Python", "PostgreSQL", "WebRTC"],
    results: "60% reduction in no-show rates, 3x increase in online bookings.",
    client: "MedCare Nigeria",
    screenshots: [
      "/manus-storage/portfolio-healthcare_005267ab.png",
      "/manus-storage/portfolio-healthcare_005267ab.png",
    ],
  },
  {
    id: 4,
    title: "International School Platform",
    category: "Schools",
    image: "/manus-storage/portfolio-school_5fb4c900.png",
    challenge: "A premium international school needed a modern website with student portal, admissions, and event management.",
    solution: "Created a full school management website with parent portal, online admissions, event calendar, and newsletter system.",
    technologies: ["WordPress", "WooCommerce", "Elementor", "WPML"],
    results: "45% increase in enrollment inquiries, streamlined admissions process.",
    client: "Greenvale International School",
    screenshots: [
      "/manus-storage/portfolio-school_5fb4c900.png",
      "/manus-storage/portfolio-school_5fb4c900.png",
    ],
  },
  {
    id: 5,
    title: "NGO Impact Platform",
    category: "NGOs",
    image: "/manus-storage/portfolio-ngo_5b3da024.png",
    challenge: "An environmental NGO needed a platform to showcase impact, manage volunteers, and collect donations.",
    solution: "Built an impact-focused website with donation system, volunteer registration, project tracking, and storytelling sections.",
    technologies: ["React", "Node.js", "Stripe", "Mailchimp"],
    results: "200% increase in donations, 150+ new volunteers recruited.",
    client: "Green Earth Foundation",
    screenshots: [
      "/manus-storage/portfolio-ngo_5b3da024.png",
      "/manus-storage/portfolio-ngo_5b3da024.png",
    ],
  },
  {
    id: 6,
    title: "Fashion E-commerce Store",
    category: "E-commerce",
    image: "/manus-storage/portfolio-ecommerce_239fccf8.png",
    challenge: "A Nigerian fashion brand needed a scalable e-commerce platform with local payment support.",
    solution: "Developed a complete e-commerce store with Paystack/Flutterwave integration, inventory management, and mobile-first design.",
    technologies: ["Shopify", "Custom Theme", "Paystack", "Analytics"],
    results: "₦50M+ in monthly revenue, 95% mobile conversion rate.",
    client: "Ankara Luxe",
    screenshots: [
      "/manus-storage/portfolio-ecommerce_239fccf8.png",
      "/manus-storage/portfolio-ecommerce_239fccf8.png",
    ],
  },
  {
    id: 7,
    title: "Travel & Tourism Portal",
    category: "Travel",
    image: "/manus-storage/portfolio-travel_6860e84d.png",
    challenge: "A travel agency needed a booking platform for tours, hotels, and flight packages across West Africa.",
    solution: "Built a comprehensive travel portal with search, booking, reviews, multi-currency support, and operator dashboard.",
    technologies: ["React", "Express", "MongoDB", "Stripe"],
    results: "500+ bookings monthly, 4.8-star average rating.",
    client: "Wanderlust Africa",
    screenshots: [
      "/manus-storage/portfolio-travel_6860e84d.png",
      "/manus-storage/portfolio-travel_6860e84d.png",
    ],
  },
  {
    id: 8,
    title: "Corporate Law Firm Website",
    category: "Law Firms",
    image: "/manus-storage/portfolio-law_ae3d0a7c.png",
    challenge: "A top-tier law firm needed a prestigious online presence that conveyed trust and expertise.",
    solution: "Designed an elegant, authoritative website with practice areas, attorney profiles, case results, and consultation booking.",
    technologies: ["WordPress", "Custom Theme", "SEO", "Analytics"],
    results: "80% increase in consultation requests, top 3 Google rankings for key terms.",
    client: "Adeyemi & Partners",
    screenshots: [
      "/manus-storage/portfolio-law_ae3d0a7c.png",
      "/manus-storage/portfolio-law_ae3d0a7c.png",
    ],
  },
  {
    id: 9,
    title: "Luxury Hotel Booking Site",
    category: "Hospitality",
    image: "/manus-storage/portfolio-hotel_4c3ab951.png",
    challenge: "A 5-star hotel in Lagos needed a direct booking website to reduce OTA commission costs.",
    solution: "Created a stunning hotel website with room showcases, direct booking engine, loyalty program, and event hosting pages.",
    technologies: ["React", "Node.js", "Stripe", "Calendar API"],
    results: "70% reduction in OTA bookings, 40% increase in direct revenue.",
    client: "Ocean View Hotel Lagos",
    screenshots: [
      "/manus-storage/portfolio-hotel_4c3ab951.png",
      "/manus-storage/portfolio-hotel_4c3ab951.png",
    ],
  },
];

export function getPortfolioByCategory(category: string) {
  if (category === "All") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}
