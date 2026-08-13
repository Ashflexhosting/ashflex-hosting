export const services = [
  {
    id: "website-design",
    slug: "website-design",
    title: "Website Design",
    description: "Stunning, conversion-focused designs that captivate visitors and drive results.",
    icon: "Palette",
    features: ["Responsive Design", "UI/UX Best Practices", "Conversion Optimization", "Brand-Aligned Aesthetics"],
    price: "From ₦150,000",
  },
  {
    id: "website-development",
    slug: "website-development",
    title: "Website Development",
    description: "High-performance, scalable websites built with cutting-edge technologies.",
    icon: "Code",
    features: ["Custom Development", "Performance Optimization", "SEO-Ready Code", "Cross-Browser Compatible"],
    price: "From ₦200,000",
  },
  {
    id: "wordpress-development",
    slug: "wordpress-development",
    title: "WordPress Development",
    description: "Custom WordPress solutions with premium themes, plugins, and full management.",
    icon: "LayoutGrid",
    features: ["Custom Themes", "Plugin Development", "WooCommerce Integration", "WP Management"],
    price: "From ₦120,000",
  },
  {
    id: "ecommerce-development",
    slug: "ecommerce-development",
    title: "E-commerce Development",
    description: "Complete online stores with payment integration, inventory, and analytics.",
    icon: "ShoppingCart",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Analytics Dashboard"],
    price: "From ₦300,000",
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design",
    description: "User-centered design that combines beautiful interfaces with intuitive experiences.",
    icon: "Smartphone",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
    price: "From ₦100,000",
  },
  {
    id: "branding-logo-design",
    slug: "branding-logo-design",
    title: "Branding & Logo Design",
    description: "Comprehensive brand identity systems that make your business memorable.",
    icon: "PenTool",
    features: ["Logo Design", "Brand Guidelines", "Color Systems", "Typography"],
    price: "From ₦80,000",
  },
  {
    id: "seo-services",
    slug: "seo-services",
    title: "SEO Services",
    description: "Data-driven SEO strategies that boost rankings and drive organic traffic.",
    icon: "Search",
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
    price: "From ₦75,000/mo",
  },
  {
    id: "google-ads",
    slug: "google-ads",
    title: "Google Ads",
    description: "PPC campaigns that deliver maximum ROI with targeted ad strategies.",
    icon: "Target",
    features: ["Campaign Setup", "Keyword Targeting", "A/B Testing", "Performance Tracking"],
    price: "From ₦50,000/mo",
  },
  {
    id: "social-media-marketing",
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    description: "Strategic social media management that builds brand awareness and engagement.",
    icon: "Share2",
    features: ["Content Strategy", "Community Management", "Paid Campaigns", "Analytics"],
    price: "From ₦60,000/mo",
  },
  {
    id: "content-writing",
    slug: "content-writing",
    title: "Content Writing",
    description: "Compelling copy and content that engages audiences and drives conversions.",
    icon: "FileText",
    features: ["Web Copy", "Blog Posts", "Product Descriptions", "Email Campaigns"],
    price: "From ₦30,000",
  },
  {
    id: "website-maintenance",
    slug: "website-maintenance",
    title: "Website Maintenance",
    description: "Ongoing maintenance to keep your site secure, fast, and up-to-date.",
    icon: "Wrench",
    features: ["Security Updates", "Bug Fixes", "Performance Monitoring", "Backup Management"],
    price: "From ₦25,000/mo",
  },
  {
    id: "speed-optimization",
    slug: "speed-optimization",
    title: "Website Speed Optimization",
    description: "Lightning-fast websites that improve user experience and search rankings.",
    icon: "Zap",
    features: ["Image Optimization", "Caching Strategy", "Code Minification", "CDN Setup"],
    price: "From ₦50,000",
  },
  {
    id: "hosting-domain",
    slug: "hosting-domain",
    title: "Hosting & Domain",
    description: "Reliable hosting solutions with SSL, daily backups, and 99.9% uptime — choose from Starter, Professional, or Business tiers.",
    icon: "Server",
    features: ["Shared Hosting", "VPS Hosting", "Domain Registration", "SSL Certificates"],
    price: "From ₦30,000/yr",
  },
  {
    id: "api-integration",
    slug: "api-integration",
    title: "API Integration",
    description: "Seamless integrations connecting your systems, tools, and platforms.",
    icon: "Plug",
    features: ["REST APIs", "Payment APIs", "Third-Party Integrations", "Custom Connectors"],
    price: "From ₦80,000",
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    title: "AI Automation",
    description: "Intelligent automation solutions that save time and reduce costs.",
    icon: "Bot",
    features: ["Chatbots", "Workflow Automation", "AI Content", "Predictive Analytics"],
    price: "From ₦150,000",
  },
  {
    id: "custom-business-systems",
    slug: "custom-business-systems",
    title: "Custom Business Systems",
    description: "Tailored software solutions designed specifically for your business needs.",
    icon: "Settings",
    features: ["CRM Systems", "ERP Solutions", "Custom Dashboards", "Workflow Tools"],
    price: "From ₦500,000",
  },
];

export interface HostingTier {
  name: string;
  price: string;
  pricePerYear: number;
  tagline: string;
  storage: string;
  bandwidth: string;
  emailAccounts: string;
  domains: string;
  features: string[];
  highlighted?: boolean;
}

export const hostingTiers: HostingTier[] = [
  {
    name: "Starter",
    price: "₦30,000/yr",
    pricePerYear: 30000,
    tagline: "Perfect for personal sites and small landing pages.",
    storage: "2 GB SSD",
    bandwidth: "50 GB/mo",
    emailAccounts: "2 mailboxes",
    domains: "1 domain registration (free for year 1)",
    features: [
      "Free SSL Certificate",
      "Weekly Backups",
      "99.9% Uptime Guarantee",
      "cPanel Control Panel",
      "1 Website",
    ],
  },
  {
    name: "Professional",
    price: "₦60,000/yr",
    pricePerYear: 60000,
    tagline: "Ideal for growing businesses and professional sites.",
    storage: "10 GB SSD",
    bandwidth: "Unmetered",
    emailAccounts: "10 mailboxes",
    domains: "1 domain + free .com.ng domain",
    features: [
      "Free SSL Certificate",
      "Daily Backups",
      "99.9% Uptime Guarantee",
      "cPanel Control Panel",
      "Up to 5 Websites",
      "Priority Support",
    ],
    highlighted: true,
  },
  {
    name: "Business",
    price: "₦120,000/yr",
    pricePerYear: 120000,
    tagline: "Built for high-traffic stores and business-critical sites.",
    storage: "50 GB NVMe",
    bandwidth: "Unmetered",
    emailAccounts: "50 mailboxes",
    domains: "2 domains (free for year 1)",
    features: [
      "Free Wildcard SSL",
      "Real-Time Backups",
      "99.9% Uptime Guarantee",
      "NVMe Storage & CDN",
      "Unlimited Websites",
      "Priority 24/7 Support",
      "Malware Scanning & Removal",
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

/** Themed images for each service pricing card (generated, brand-consistent). */
export const servicePricingImages: Record<string, string> = {
  "website-design": "/manus-storage/svc-website-design_7b919611.png",
  "website-development": "/manus-storage/svc-website-development_ad41e9fa.png",
  "wordpress-development": "/manus-storage/svc-wordpress_44332d74.png",
  "ecommerce-development": "/manus-storage/svc-ecommerce_82727d0e.png",
  "ui-ux-design": "/manus-storage/svc-uiux_5fb91aae.png",
  "branding-logo-design": "/manus-storage/svc-branding_ff4a0f7c.png",
  "seo-services": "/manus-storage/svc-seo_44fd11d1.png",
  "google-ads": "/manus-storage/svc-google-ads_bf23551c.png",
  "social-media-marketing": "/manus-storage/svc-social-media_fbca7407.png",
  "content-writing": "/manus-storage/svc-content-writing_f94cd845.png",
  "website-maintenance": "/manus-storage/svc-maintenance_eddbf5d9.png",
  "speed-optimization": "/manus-storage/svc-speed_a16e6691.png",
  "hosting-domain": "/manus-storage/svc-hosting_94f7a063.png",
  "api-integration": "/manus-storage/svc-api_24618d05.png",
  "ai-automation": "/manus-storage/svc-ai-automation_36c51dfd.png",
  "custom-business-systems": "/manus-storage/svc-business-systems_80a7790f.png",
};

/** Themed images for the three hosting tier cards. */
export const hostingTierImages: Record<string, string> = {
  Starter: "/manus-storage/hosting-starter-v2_ecbe48f4.png",
  Professional: "/manus-storage/hosting-professional_e6f731cd.png",
  Business: "/manus-storage/hosting-business_91d7222a.png",
};
