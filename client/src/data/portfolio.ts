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
    image: "/manus-storage/shutterspeed-fullpage-hd_ed10ade0.webp",
    challenge: "Shutterspeed Projects needed a professional digital presence for its Nigerian integrated film and media content production business.",
    solution: "Ashflex delivered a dedicated project website, now featured in the agency’s official portfolio, to present the production company online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Shutterspeed Projects",
    website: "https://shutterspeedprojects.com/",
    screenshots: [
      "/manus-storage/shutterspeed-fullpage-hd_ed10ade0.webp",
      "/manus-storage/shutterspeed-fullpage-hd_ed10ade0.webp",
      "/manus-storage/shutterspeed-fullpage-hd_ed10ade0.webp",
    ],
    screenshotCaptions: ["Homepage", "New Titles", "Official trailers"],
  },
  {
    id: 2,
    title: "Kingwesl Interior",
    category: "Interiors",
    image: "/manus-storage/kingwesl-fullpage_032116a9.jpg",
    challenge: "Kingwesl Interior needed an online presence to represent its residential and commercial interior-design practice.",
    solution: "Ashflex created a portfolio website that positions the firm and its interior-design services for prospective clients.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Kingwesl Interior",
    website: "https://kingwesl.com/",
    screenshots: [
      "/manus-storage/kingwesl-fullpage_032116a9.jpg",
      "/manus-storage/kingwesl-fullpage_032116a9.jpg",
      "/manus-storage/kingwesl-fullpage_032116a9.jpg",
    ],
    screenshotCaptions: ["Homepage", "Services section", "Portfolio projects"],
  },
  {
    id: 3,
    title: "B.C. First Nations Auto Finance",
    category: "Finance",
    image: "/manus-storage/bcfna-fullpage-hd_6551ddb7.webp",
    challenge: "B.C. First Nations Auto Finance needed a clear web presence for its Canadian personal auto-financing scheme.",
    solution: "Ashflex delivered a project website that communicates the organization’s auto-financing offering to prospective customers.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "B.C. First Nations Auto Finance",
    website: "https://bcfirstnationsautofinance.ca/",
    screenshots: [
      "/manus-storage/bcfna-fullpage-hd_6551ddb7.webp",
      "/manus-storage/bcfna-fullpage-hd_6551ddb7.webp",
      "/manus-storage/bcfna-fullpage-hd_6551ddb7.webp",
    ],
    screenshotCaptions: ["Homepage", "How it Works", "Vehicle types"],
  },
  {
    id: 4,
    title: "Aerolead Aviation",
    category: "Education",
    image: "/manus-storage/aerolead-fullpage-hd_5df1e01e.webp",
    challenge: "Aerolead Aviation needed a web presence for its flight-training programmes for aviation professionals.",
    solution: "Ashflex produced a dedicated website to present the institution and its aviation training offer online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Aerolead Aviation",
    website: "https://aeroleadaviation.com/",
    screenshots: [
      "/manus-storage/aerolead-fullpage-hd_5df1e01e.webp",
      "/manus-storage/aerolead-fullpage-hd_5df1e01e.webp",
      "/manus-storage/aerolead-fullpage-hd_5df1e01e.webp",
    ],
    screenshotCaptions: ["Homepage", "Courses overview", "Contact section"],
  },
  {
    id: 5,
    title: "8 Radiance Empowerment",
    category: "NGOs",
    image: "/manus-storage/eightradiance-fullpage-hd_367faf0a.webp",
    challenge: "8 Radiance Empowerment needed an advocacy-focused online presence for its US non-profit work supporting Africans.",
    solution: "Ashflex designed a dedicated website that presents the organization and its advocacy mission online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "8 Radiance Empowerment",
    website: "https://eightradiance.org/",
    screenshots: [
      "/manus-storage/eightradiance-fullpage-hd_367faf0a.webp",
      "/manus-storage/eightradiance-fullpage-hd_367faf0a.webp",
      "/manus-storage/eightradiance-fullpage-hd_367faf0a.webp",
    ],
    screenshotCaptions: ["Homepage", "About the organisation", "Programs section"],
  },
  {
    id: 6,
    title: "Sam & Sara",
    category: "E-commerce",
    image: "/manus-storage/samsara-fullpage-hd_877d3d13.webp",
    challenge: "Sam & Sara needed a professional online presence for its Nigerian clothing and uniform-making factory.",
    solution: "Ashflex created a website to showcase the company and its uniform-making services for corporate organizations.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Sam & Sara",
    website: "https://samandsara.com/",
    screenshots: [
      "/manus-storage/samsara-fullpage-hd_877d3d13.webp",
      "/manus-storage/samsara-fullpage-hd_877d3d13.webp",
      "/manus-storage/samsara-fullpage-hd_877d3d13.webp",
    ],
    screenshotCaptions: ["Homepage", "Featured collections", "Products page"],
  },
  {
    id: 7,
    title: "Becca & Miche Travels",
    category: "Travel",
    image: "/manus-storage/beccamiche-fullpage-hd_9f7fceea.webp",
    challenge: "Becca & Miche Travels needed an online presence for professional travel and study-abroad services.",
    solution: "Ashflex delivered a dedicated website that communicates the travel and study-abroad service offering.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Becca & Miche Travels",
    website: "http://beccamichetravels.com/",
    screenshots: [
      "/manus-storage/beccamiche-fullpage-hd_9f7fceea.webp",
      "/manus-storage/beccamiche-fullpage-hd_9f7fceea.webp",
      "/manus-storage/beccamiche-fullpage-hd_9f7fceea.webp",
    ],
    screenshotCaptions: ["Homepage", "Travel packages", "Services section"],
  },
  {
    id: 8,
    title: "Barmest Nigeria Limited",
    category: "Corporate",
    image: "/manus-storage/barmest-fullpage-hd_e6f0941a.webp",
    challenge: "Barmest Nigeria Limited needed a concise company website for its corporate solutions, strategic support, and consultancy services.",
    solution: "Ashflex designed a focused one-page website to present the company’s innovative corporate and consultancy offer.",
    technologies: ["One-page Website Design"],
    results: publicMetricsNote,
    client: "Barmest Nigeria Limited",
    website: "https://barmest.com/",
    screenshots: [
      "/manus-storage/barmest-fullpage-hd_e6f0941a.webp",
      "/manus-storage/barmest-fullpage-hd_e6f0941a.webp",
      "/manus-storage/barmest-fullpage-hd_e6f0941a.webp",
    ],
    screenshotCaptions: ["Homepage", "Core services", "Who we are"],
  },
  {
    id: 10,
    title: "Afnaf Auto Sales",
    category: "Finance",
    image: "/manus-storage/bcfna-fullpage-hd_6551ddb7.webp",
    challenge: "Afnaf Auto Sales needed a polished digital showroom for its Canadian pre-owned vehicle dealership, with clear trade-in pathways for customers.",
    solution: "Ashflex designed a full dealership website featuring a browsable inventory, a vehicle trade-in page, and an about section that builds buyer confidence.",
    technologies: ["Website Design", "Web Application"],
    results: publicMetricsNote,
    client: "Afnaf Auto Sales",
    website: "https://afnaf.ca/",
    screenshots: [
      "/manus-storage/bcfna-fullpage-hd_6551ddb7.webp",
      "/manus-storage/bcfna-fullpage-hd_6551ddb7.webp",
      "/manus-storage/bcfna-fullpage-hd_6551ddb7.webp",
    ],
    screenshotCaptions: ["Homepage", "How it Works", "Customer stories"],
  },
  {
    id: 11,
    title: "Marvel Tex Attraction",
    category: "NGOs",
    image: "/manus-storage/marveltex-fullpage-hd_117c152d.webp",
    challenge: "Marvel Tex Attraction needed a member-facing platform for its Nigerian cooperative savings network, with a clear empowerment-program overview.",
    solution: "Ashflex built a responsive platform with a member dashboard, savings-cycle tracking, FAQ section, and a dedicated empowerment-program page.",
    technologies: ["Website Design", "Web Application"],
    results: publicMetricsNote,
    client: "Marvel Tex Attraction",
    website: "https://marvelattraction.com/",
    screenshots: [
      "/manus-storage/marveltex-fullpage-hd_117c152d.webp",
      "/manus-storage/marveltex-fullpage-hd_117c152d.webp",
      "/manus-storage/marveltex-fullpage-hd_117c152d.webp",
    ],
    screenshotCaptions: ["Homepage", "How it works", "Get in touch"],
  },
  {
    id: 12,
    title: "Galcon Engineering",
    category: "Corporate",
    image: "/manus-storage/galcon-home_06339665.webp",
    challenge: "Galcon Engineering (Nig) Limited, a Lagos construction firm with 30+ years of experience, needed a corporate website showcasing its engineering and building portfolio.",
    solution: "Ashflex developed a multi-page corporate site covering the firm's services, completed projects, team, cost calculator, and company history since 1988.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Galcon Engineering (Nig) Limited",
    website: "https://galconengineering.com/",
    screenshots: [
      "/manus-storage/galcon-home_06339665.webp",
      "/manus-storage/galcon-about_a293d03b.webp",
      "/manus-storage/galcon-services_4c4d7dcc.webp",
    ],
    screenshotCaptions: ["Homepage", "About Us page", "Services page"],
  },
  {
    id: 9,
    title: "Neboc Hotel & Suites",
    category: "Hospitality",
    image: "/manus-storage/neboc-fullpage_51129741.png",
    challenge: "Neboc Hotel & Suites needed a refined online presence for its luxury hotel, suites, and events centre in Oboro-Ikwuano, Umuahia.",
    solution: "Ashflex built a dedicated hospitality website to present the hotel, suites, events centre, and location online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Neboc Hotel & Suites",
    website: "https://nebochotels.com/",
    screenshots: [
      "/manus-storage/neboc-fullpage_51129741.png",
      "/manus-storage/neboc-fullpage_51129741.png",
      "/manus-storage/neboc-fullpage_51129741.png",
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
