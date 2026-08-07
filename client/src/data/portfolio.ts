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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    challenge: "A Lagos-based fintech startup needed a professional corporate presence to attract investors and enterprise clients.",
    solution: "We designed and developed a sleek, modern corporate website with investor dashboard, product showcases, and lead generation funnels.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    results: "150% increase in qualified leads within 3 months. 40% reduction in bounce rate.",
    client: "PayFlow Technologies",
    screenshots: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=500&fit=crop",
    ],
  },
  {
    id: 2,
    title: "Premium Real Estate Portal",
    category: "Real Estate",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    challenge: "A luxury real estate firm needed a property listing platform with advanced search and virtual tours.",
    solution: "Built a comprehensive real estate portal with property search, virtual 3D tours, agent profiles, and mortgage calculators.",
    technologies: ["Next.js", "MongoDB", "Three.js", "Mapbox"],
    results: "300+ properties listed, 200% increase in property inquiries, 85% user satisfaction.",
    client: "Lagos Luxury Homes",
    screenshots: [
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582407947092-07d0a6e4d3a1?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=500&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Healthcare Management System",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    challenge: "A multi-branch hospital network needed a digital patient management and appointment booking system.",
    solution: "Developed a comprehensive healthcare portal with online booking, patient records, telemedicine integration, and analytics.",
    technologies: ["React", "Python", "PostgreSQL", "WebRTC"],
    results: "60% reduction in no-show rates, 3x increase in online bookings.",
    client: "MedCare Nigeria",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=500&fit=crop",
    ],
  },
  {
    id: 4,
    title: "International School Platform",
    category: "Schools",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop",
    challenge: "A premium international school needed a modern website with student portal, admissions, and event management.",
    solution: "Created a full school management website with parent portal, online admissions, event calendar, and newsletter system.",
    technologies: ["WordPress", "WooCommerce", "Elementor", "WPML"],
    results: "45% increase in enrollment inquiries, streamlined admissions process.",
    client: "Greenvale International School",
    screenshots: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
    ],
  },
  {
    id: 5,
    title: "NGO Impact Platform",
    category: "NGOs",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop",
    challenge: "An environmental NGO needed a platform to showcase impact, manage volunteers, and collect donations.",
    solution: "Built an impact-focused website with donation system, volunteer registration, project tracking, and storytelling sections.",
    technologies: ["React", "Node.js", "Stripe", "Mailchimp"],
    results: "200% increase in donations, 150+ new volunteers recruited.",
    client: "Green Earth Foundation",
    screenshots: [
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=500&fit=crop",
    ],
  },
  {
    id: 6,
    title: "Fashion E-commerce Store",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    challenge: "A Nigerian fashion brand needed a scalable e-commerce platform with local payment support.",
    solution: "Developed a complete e-commerce store with Paystack/Flutterwave integration, inventory management, and mobile-first design.",
    technologies: ["Shopify", "Custom Theme", "Paystack", "Analytics"],
    results: "₦50M+ in monthly revenue, 95% mobile conversion rate.",
    client: "Ankara Luxe",
    screenshots: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=800&h=500&fit=crop",
    ],
  },
  {
    id: 7,
    title: "Travel & Tourism Portal",
    category: "Travel",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop",
    challenge: "A travel agency needed a booking platform for tours, hotels, and flight packages across West Africa.",
    solution: "Built a comprehensive travel portal with search, booking, reviews, multi-currency support, and operator dashboard.",
    technologies: ["React", "Express", "MongoDB", "Stripe"],
    results: "500+ bookings monthly, 4.8-star average rating.",
    client: "Wanderlust Africa",
    screenshots: [
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?w=800&h=500&fit=crop",
    ],
  },
  {
    id: 8,
    title: "Corporate Law Firm Website",
    category: "Law Firms",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop",
    challenge: "A top-tier law firm needed a prestigious online presence that conveyed trust and expertise.",
    solution: "Designed an elegant, authoritative website with practice areas, attorney profiles, case results, and consultation booking.",
    technologies: ["WordPress", "Custom Theme", "SEO", "Analytics"],
    results: "80% increase in consultation requests, top 3 Google rankings for key terms.",
    client: "Adeyemi & Partners",
    screenshots: [
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?w=800&h=500&fit=crop",
    ],
  },
  {
    id: 9,
    title: "Luxury Hotel Booking Site",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    challenge: "A 5-star hotel in Lagos needed a direct booking website to reduce OTA commission costs.",
    solution: "Created a stunning hotel website with room showcases, direct booking engine, loyalty program, and event hosting pages.",
    technologies: ["React", "Node.js", "Stripe", "Calendar API"],
    results: "70% reduction in OTA bookings, 40% increase in direct revenue.",
    client: "Ocean View Hotel Lagos",
    screenshots: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=500&fit=crop",
    ],
  },
];

export function getPortfolioByCategory(category: string) {
  if (category === "All") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}
