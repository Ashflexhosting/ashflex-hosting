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
  website: string;
  screenshots?: string[];
  screenshotCaptions?: string[];
}

export const categories = [
  "All",
  "Corporate",
  "Interiors",
  "Finance",
  "Education",
  "NGOs",
  "E-commerce",
  "Travel",
  "Hospitality",
];

export const portfolioIndustries = categories.filter((category) => category !== "All");

const publicMetricsNote = "Public success metrics are not published on Ashflex’s official project listing.";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Shutterspeed Projects",
    category: "Corporate",
    image: "/manus-storage/portfolio-shutterspeed-live_ff13c8ca.webp",
    challenge: "Shutterspeed Projects needed a professional digital presence for its Nigerian integrated film and media content production business.",
    solution: "Ashflex delivered a dedicated project website, now featured in the agency’s official portfolio, to present the production company online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Shutterspeed Projects",
    website: "https://shutterspeedprojects.com/",
    screenshots: [
      "/manus-storage/portfolio-shutterspeed-live_ff13c8ca.webp",
      "/manus-storage/portfolio-shutterspeed-inner-1_2263a89d.webp",
      "/manus-storage/portfolio-shutterspeed-inner-2_f28325e4.webp",
    ],
    screenshotCaptions: ["Homepage", "Contact page", "About Us page"],
  },
  {
    id: 2,
    title: "Kingwesl Interior",
    category: "Interiors",
    image: "/manus-storage/portfolio-kingwesl-live_bd256695.webp",
    challenge: "Kingwesl Interior needed an online presence to represent its residential and commercial interior-design practice.",
    solution: "Ashflex created a portfolio website that positions the firm and its interior-design services for prospective clients.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Kingwesl Interior",
    website: "https://kingwesl.com/",
    screenshots: [
      "/manus-storage/portfolio-kingwesl-live_bd256695.webp",
      "/manus-storage/portfolio-kingwesl-inner-1_924bda63.webp",
      "/manus-storage/portfolio-kingwesl-inner-2_b5a895b5.webp",
    ],
    screenshotCaptions: ["Homepage", "Services section", "Portfolio projects"],
  },
  {
    id: 3,
    title: "B.C. First Nations Auto Finance",
    category: "Finance",
    image: "/manus-storage/portfolio-bcfirstnations-live_9c99bcce.webp",
    challenge: "B.C. First Nations Auto Finance needed a clear web presence for its Canadian personal auto-financing scheme.",
    solution: "Ashflex delivered a project website that communicates the organization’s auto-financing offering to prospective customers.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "B.C. First Nations Auto Finance",
    website: "https://bcfirstnationsautofinance.ca/",
    screenshots: [
      "/manus-storage/portfolio-bcfirstnations-live_9c99bcce.webp",
      "/manus-storage/portfolio-bcfirstnations-inner-1_8960b80a.webp",
      "/manus-storage/portfolio-bcfirstnations-inner-2_967ad11d.webp",
    ],
    screenshotCaptions: ["Homepage", "Why Choose Us", "Customer stories"],
  },
  {
    id: 4,
    title: "Aerolead Aviation",
    category: "Education",
    image: "/manus-storage/portfolio-aerolead-live_0bed67a4.webp",
    challenge: "Aerolead Aviation needed a web presence for its flight-training programmes for aviation professionals.",
    solution: "Ashflex produced a dedicated website to present the institution and its aviation training offer online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Aerolead Aviation",
    website: "https://aeroleadaviation.com/",
    screenshots: [
      "/manus-storage/portfolio-aerolead-live_0bed67a4.webp",
      "/manus-storage/portfolio-aerolead-inner-1_356b711c.webp",
      "/manus-storage/portfolio-aerolead-inner-2_a4db409a.webp",
    ],
    screenshotCaptions: ["Homepage", "Features overview", "Courses page"],
  },
  {
    id: 5,
    title: "8 Radiance Empowerment",
    category: "NGOs",
    image: "/manus-storage/portfolio-eightradiance-live_0fcdc31e.webp",
    challenge: "8 Radiance Empowerment needed an advocacy-focused online presence for its US non-profit work supporting Africans.",
    solution: "Ashflex designed a dedicated website that presents the organization and its advocacy mission online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "8 Radiance Empowerment",
    website: "https://eightradiance.org/",
    screenshots: [
      "/manus-storage/portfolio-eightradiance-live_0fcdc31e.webp",
      "/manus-storage/portfolio-eightradiance-inner-1_db06949a.webp",
      "/manus-storage/portfolio-eightradiance-inner-2_1bde7cf5.webp",
    ],
    screenshotCaptions: ["Homepage", "About the organisation", "Programs section"],
  },
  {
    id: 6,
    title: "Sam & Sara",
    category: "E-commerce",
    image: "/manus-storage/portfolio-samandsara-live_74253bfc.webp",
    challenge: "Sam & Sara needed a professional online presence for its Nigerian clothing and uniform-making factory.",
    solution: "Ashflex created a website to showcase the company and its uniform-making services for corporate organizations.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Sam & Sara",
    website: "https://samandsara.com/",
    screenshots: [
      "/manus-storage/portfolio-samandsara-live_74253bfc.webp",
      "/manus-storage/portfolio-samandsara-inner-1_357a2d3d.webp",
      "/manus-storage/portfolio-samandsara-inner-2_ce2fefa7.webp",
    ],
    screenshotCaptions: ["Homepage", "Featured collections", "Products page"],
  },
  {
    id: 7,
    title: "Becca & Miche Travels",
    category: "Travel",
    image: "/manus-storage/portfolio-beccamiche-live_d7861633.webp",
    challenge: "Becca & Miche Travels needed an online presence for professional travel and study-abroad services.",
    solution: "Ashflex delivered a dedicated website that communicates the travel and study-abroad service offering.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Becca & Miche Travels",
    website: "http://beccamichetravels.com/",
    screenshots: [
      "/manus-storage/portfolio-beccamiche-live_d7861633.webp",
      "/manus-storage/portfolio-beccamiche-inner-1_f92d8935.webp",
      "/manus-storage/portfolio-beccamiche-inner-2_304c1641.webp",
    ],
    screenshotCaptions: ["Homepage", "Travel services", "Popular destinations"],
  },
  {
    id: 8,
    title: "Barmest Nigeria Limited",
    category: "Corporate",
    image: "/manus-storage/portfolio-barmest-live_ef28f37f.webp",
    challenge: "Barmest Nigeria Limited needed a concise company website for its corporate solutions, strategic support, and consultancy services.",
    solution: "Ashflex designed a focused one-page website to present the company’s innovative corporate and consultancy offer.",
    technologies: ["One-page Website Design"],
    results: publicMetricsNote,
    client: "Barmest Nigeria Limited",
    website: "https://barmest.com/",
    screenshots: [
      "/manus-storage/portfolio-barmest-live_ef28f37f.webp",
      "/manus-storage/portfolio-barmest-inner-1_77014575.webp",
      "/manus-storage/portfolio-barmest-inner-2_0118c7d6.webp",
    ],
    screenshotCaptions: ["Homepage", "Core services", "Who we are"],
  },
  {
    id: 9,
    title: "Neboc Hotel & Suites",
    category: "Hospitality",
    image: "/manus-storage/portfolio-neboc-live_f8b4cdb7.webp",
    challenge: "Neboc Hotel & Suites needed a refined online presence for its luxury hotel, suites, and events centre in Oboro-Ikwuano, Umuahia.",
    solution: "Ashflex built a dedicated hospitality website to present the hotel, suites, events centre, and location online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Neboc Hotel & Suites",
    website: "https://nebochotels.com/",
    screenshots: [
      "/manus-storage/portfolio-neboc-live_f8b4cdb7.webp",
      "/manus-storage/portfolio-neboc-inner-1_7cbed751.webp",
      "/manus-storage/portfolio-neboc-inner-2_ff1b0e9f.webp",
    ],
    screenshotCaptions: ["Homepage", "About the hotel", "Rooms & suites"],
  },
];

export const serviceTypes = Array.from(
  new Set(portfolioItems.flatMap((item) => item.technologies)),
);

export interface PortfolioFilters {
  industry?: string;
  service?: string;
}

export function filterPortfolioItems({ industry = "All", service = "All" }: PortfolioFilters = {}) {
  return portfolioItems.filter((item) => {
    const matchesIndustry = industry === "All" || item.category === industry;
    const matchesService = service === "All" || item.technologies.includes(service);

    return matchesIndustry && matchesService;
  });
}

export function getPortfolioByCategory(category: string) {
  return filterPortfolioItems({ industry: category });
}
