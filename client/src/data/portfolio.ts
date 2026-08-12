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

const publicMetricsNote = "Public success metrics are not published on Ashflex’s official project listing.";

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Shutterspeed Projects",
    category: "Corporate",
    image: "/manus-storage/portfolio-corporate_abe37286.png",
    challenge: "Shutterspeed Projects needed a professional digital presence for its Nigerian integrated film and media content production business.",
    solution: "Ashflex delivered a dedicated project website, now featured in the agency’s official portfolio, to present the production company online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Shutterspeed Projects",
    website: "https://shutterspeedprojects.com/",
    screenshots: ["/manus-storage/portfolio-corporate_abe37286.png", "/manus-storage/portfolio-corporate_abe37286.png"],
  },
  {
    id: 2,
    title: "Kingwesl Interior",
    category: "Interiors",
    image: "/manus-storage/portfolio-realestate_77421e68.png",
    challenge: "Kingwesl Interior needed an online presence to represent its residential and commercial interior-design practice.",
    solution: "Ashflex created a portfolio website that positions the firm and its interior-design services for prospective clients.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Kingwesl Interior",
    website: "https://kingwesl.com/",
    screenshots: ["/manus-storage/portfolio-realestate_77421e68.png", "/manus-storage/portfolio-realestate_77421e68.png"],
  },
  {
    id: 3,
    title: "B.C. First Nations Auto Finance",
    category: "Finance",
    image: "/manus-storage/portfolio-healthcare_005267ab.png",
    challenge: "B.C. First Nations Auto Finance needed a clear web presence for its Canadian personal auto-financing scheme.",
    solution: "Ashflex delivered a project website that communicates the organization’s auto-financing offering to prospective customers.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "B.C. First Nations Auto Finance",
    website: "https://bcfirstnationsautofinance.ca/",
    screenshots: ["/manus-storage/portfolio-healthcare_005267ab.png", "/manus-storage/portfolio-healthcare_005267ab.png"],
  },
  {
    id: 4,
    title: "Aerolead Aviation",
    category: "Education",
    image: "/manus-storage/portfolio-school_5fb4c900.png",
    challenge: "Aerolead Aviation needed a web presence for its flight-training programmes for aviation professionals.",
    solution: "Ashflex produced a dedicated website to present the institution and its aviation training offer online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Aerolead Aviation",
    website: "https://aeroleadaviation.com/",
    screenshots: ["/manus-storage/portfolio-school_5fb4c900.png", "/manus-storage/portfolio-school_5fb4c900.png"],
  },
  {
    id: 5,
    title: "8 Radiance Empowerment",
    category: "NGOs",
    image: "/manus-storage/portfolio-ngo_5b3da024.png",
    challenge: "8 Radiance Empowerment needed an advocacy-focused online presence for its US non-profit work supporting Africans.",
    solution: "Ashflex designed a dedicated website that presents the organization and its advocacy mission online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "8 Radiance Empowerment",
    website: "https://eightradiance.org/",
    screenshots: ["/manus-storage/portfolio-ngo_5b3da024.png", "/manus-storage/portfolio-ngo_5b3da024.png"],
  },
  {
    id: 6,
    title: "Sam & Sara",
    category: "E-commerce",
    image: "/manus-storage/portfolio-ecommerce_239fccf8.png",
    challenge: "Sam & Sara needed a professional online presence for its Nigerian clothing and uniform-making factory.",
    solution: "Ashflex created a website to showcase the company and its uniform-making services for corporate organizations.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Sam & Sara",
    website: "https://samandsara.com/",
    screenshots: ["/manus-storage/portfolio-ecommerce_239fccf8.png", "/manus-storage/portfolio-ecommerce_239fccf8.png"],
  },
  {
    id: 7,
    title: "Becca & Miche Travels",
    category: "Travel",
    image: "/manus-storage/portfolio-travel_6860e84d.png",
    challenge: "Becca & Miche Travels needed an online presence for professional travel and study-abroad services.",
    solution: "Ashflex delivered a dedicated website that communicates the travel and study-abroad service offering.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Becca & Miche Travels",
    website: "http://beccamichetravels.com/",
    screenshots: ["/manus-storage/portfolio-travel_6860e84d.png", "/manus-storage/portfolio-travel_6860e84d.png"],
  },
  {
    id: 8,
    title: "Barmest Nigeria Limited",
    category: "Corporate",
    image: "/manus-storage/portfolio-law_ae3d0a7c.png",
    challenge: "Barmest Nigeria Limited needed a concise company website for its corporate solutions, strategic support, and consultancy services.",
    solution: "Ashflex designed a focused one-page website to present the company’s innovative corporate and consultancy offer.",
    technologies: ["One-page Website Design"],
    results: publicMetricsNote,
    client: "Barmest Nigeria Limited",
    website: "https://barmest.com/",
    screenshots: ["/manus-storage/portfolio-law_ae3d0a7c.png", "/manus-storage/portfolio-law_ae3d0a7c.png"],
  },
  {
    id: 9,
    title: "Neboc Hotel & Suites",
    category: "Hospitality",
    image: "/manus-storage/portfolio-hotel_4c3ab951.png",
    challenge: "Neboc Hotel & Suites needed a refined online presence for its luxury hotel, suites, and events centre in Oboro-Ikwuano, Umuahia.",
    solution: "Ashflex built a dedicated hospitality website to present the hotel, suites, events centre, and location online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Neboc Hotel & Suites",
    website: "https://nebochotels.com/",
    screenshots: ["/manus-storage/portfolio-hotel_4c3ab951.png", "/manus-storage/portfolio-hotel_4c3ab951.png"],
  },
];

export function getPortfolioByCategory(category: string) {
  if (category === "All") return portfolioItems;
  return portfolioItems.filter((item) => item.category === category);
}
