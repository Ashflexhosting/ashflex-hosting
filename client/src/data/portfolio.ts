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
      "/manus-storage/shutterspeed-hd-hero_f94cf949.webp",
      "/manus-storage/shutterspeed-hd-mid_a2c80ace.webp",
      "/manus-storage/shutterspeed-hd-bottom_75de1fd0.webp",
    ],
    screenshotCaptions: ["Homepage", "New Titles", "Official trailers"],
  },
  {
    id: 2,
    title: "Kingwesl Interior",
    category: "Interiors",
    image: "/manus-storage/kingwesl-hd_93b3e5cf.webp",
    challenge: "Kingwesl Interior needed an online presence to represent its residential and commercial interior-design practice.",
    solution: "Ashflex created a portfolio website that positions the firm and its interior-design services for prospective clients.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Kingwesl Interior",
    website: "https://kingwesl.com/",
    screenshots: [
      "/manus-storage/kingwesl-hd-hero_7408c6e8.webp",
      "/manus-storage/kingwesl-hd-mid_bc361db2.webp",
      "/manus-storage/kingwesl-hd-bottom_b49269a7.webp",
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
      "/manus-storage/bcfna-crop-hero_d9449722.webp",
      "/manus-storage/bcfna-crop-mid_27d7c885.webp",
      "/manus-storage/bcfna-crop-bottom_98fda3b8.webp",
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
      "/manus-storage/aerolead-crop-hero_cc2c7915.webp",
      "/manus-storage/aerolead-crop-mid_0f0a9171.webp",
      "/manus-storage/aerolead-crop-bottom_b089a9cf.webp",
    ],
    screenshotCaptions: ["Homepage", "Courses overview", "Contact section"],
  },
  {
    id: 5,
    title: "8 Radiance Empowerment",
    category: "NGOs",
    image: "/manus-storage/eightradiance-hd_48ef0f95.webp",
    challenge: "8 Radiance Empowerment needed an advocacy-focused online presence for its US non-profit work supporting Africans.",
    solution: "Ashflex designed a dedicated website that presents the organization and its advocacy mission online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "8 Radiance Empowerment",
    website: "https://eightradiance.org/",
    screenshots: [
      "/manus-storage/eightradiance-hd-hero2_ee73a38d.webp",
      "/manus-storage/eightradiance-about-user_0ab6402d.webp",
      "/manus-storage/eightradiance-programs-user_241135c1.webp",
    ],
    screenshotCaptions: ["Homepage", "About the organisation", "Programs section"],
  },
  {
    id: 6,
    title: "Sam & Sara",
    category: "E-commerce",
    image: "/manus-storage/samsara-hd_7d3de3cd.webp",
    challenge: "Sam & Sara needed a professional online presence for its Nigerian clothing and uniform-making factory.",
    solution: "Ashflex created a website to showcase the company and its uniform-making services for corporate organizations.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Sam & Sara",
    website: "https://samandsara.com/",
    screenshots: [
      "/manus-storage/samsara-hd-hero_4ee31dc9.webp",
      "/manus-storage/samsara-hd-mid_2a1780f2.webp",
      "/manus-storage/samsara-hd-bottom_0ecb9549.webp",
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
      "/manus-storage/beccamiche-crop-hero_7310b8ce.webp",
      "/manus-storage/beccamiche-crop-mid_155319ff.webp",
      "/manus-storage/beccamiche-crop-bottom_186312db.webp",
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
      "/manus-storage/barmest-crop-hero_cf72d737.webp",
      "/manus-storage/barmest-crop-mid_a0626371.webp",
      "/manus-storage/barmest-crop-bottom_ba55c601.webp",
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
      "/manus-storage/bcfna-crop-hero_d9449722.webp",
      "/manus-storage/bcfna-crop-bottom_98fda3b8.webp",
      "/manus-storage/bcfna-crop-mid_27d7c885.webp",
    ],
    screenshotCaptions: ["Homepage", "Vehicle inventory", "Trade-in & stories"],
  },
  {
    id: 11,
    title: "Marvel Tex Attraction",
    category: "NGOs",
    image: "/manus-storage/marveltex-hd_7ba529ae.webp",
    challenge: "Marvel Tex Attraction needed a member-facing platform for its Nigerian cooperative savings network, with a clear empowerment-program overview.",
    solution: "Ashflex built a responsive platform with a member dashboard, savings-cycle tracking, FAQ section, and a dedicated empowerment-program page.",
    technologies: ["Website Design", "Web Application"],
    results: publicMetricsNote,
    client: "Marvel Tex Attraction",
    website: "https://marvelattraction.com/",
    screenshots: [
      "/manus-storage/marveltex-hd-hero2_680642d7.webp",
      "/manus-storage/marveltex-hd-mid_1e83be67.webp",
      "/manus-storage/marveltex-hd-bottom_c0c1a064.webp",
    ],
    screenshotCaptions: ["Homepage", "How it works", "Get in touch"],
  },
  {
    id: 12,
    title: "Galcon Engineering",
    category: "Corporate",
    image: "/manus-storage/galcon-home-hd_27c6eb12.webp",
    challenge: "Galcon Engineering (Nig) Limited, a Lagos construction firm with 30+ years of experience, needed a corporate website showcasing its engineering and building portfolio.",
    solution: "Ashflex developed a multi-page corporate site covering the firm's services, completed projects, team, cost calculator, and company history since 1988.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Galcon Engineering (Nig) Limited",
    website: "https://galconengineering.com/",
    screenshots: [
      "/manus-storage/galcon-home-hd-hero_b84417d7.webp",
      "/manus-storage/galcon-about-hd_a750990d.webp",
      "/manus-storage/galcon-services-hd_7480b0c2.webp",
    ],
    screenshotCaptions: ["Homepage", "About Us page", "Services page"],
  },
  {
    id: 9,
    title: "Neboc Hotel & Suites",
    category: "Hospitality",
    image: "/manus-storage/neboc-hd_1f59e367.webp",
    challenge: "Neboc Hotel & Suites needed a refined online presence for its luxury hotel, suites, and events centre in Oboro-Ikwuano, Umuahia.",
    solution: "Ashflex built a dedicated hospitality website to present the hotel, suites, events centre, and location online.",
    technologies: ["Website Design"],
    results: publicMetricsNote,
    client: "Neboc Hotel & Suites",
    website: "https://nebochotels.com/",
    screenshots: [
      "/manus-storage/neboc-hd-hero_bf6fa3aa.webp",
      "/manus-storage/neboc-hd-mid_968e5db2.webp",
      "/manus-storage/neboc-hd-bottom_b1bf3fbd.webp",
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
