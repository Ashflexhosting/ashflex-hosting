export interface Industry {
  slug: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  stats: { label: string; value: string }[];
  color: string;
}

export const industries: Industry[] = [
  {
    slug: "healthcare",
    title: "Healthcare",
    description: "Digital solutions for hospitals, clinics, and health-tech startups. We build HIPAA-compliant platforms that improve patient care and streamline operations.",
    icon: "HeartPulse",
    features: ["Patient Portals", "Telemedicine Integration", "Appointment Booking", "Health Records Management", "Medical E-commerce"],
    stats: [{ label: "Projects", value: "35+" }, { label: "Uptime", value: "99.9%" }, { label: "Patients Served", value: "500K+" }],
    color: "#2563EB",
  },
  {
    slug: "education",
    title: "Education",
    description: "Modern digital platforms for schools, universities, and EdTech companies. From admissions portals to learning management systems.",
    icon: "GraduationCap",
    features: ["Student Portals", "Learning Management", "Admissions Systems", "Parent Dashboards", "Virtual Classrooms"],
    stats: [{ label: "Projects", value: "28+" }, { label: "Students Reached", value: "100K+" }, { label: "Schools", value: "45+" }],
    color: "#06B6D4",
  },
  {
    slug: "construction",
    title: "Construction",
    description: "Digital transformation for construction companies, architects, and real estate developers. Project management portals and showcase sites.",
    icon: "Building",
    features: ["Project Tracking", "Portfolio Showcases", "Bid Management", "Client Dashboards", "3D Visualizations"],
    stats: [{ label: "Projects", value: "22+" }, { label: "Value Delivered", value: "₦2B+" }, { label: "Firms", value: "30+" }],
    color: "#F59E0B",
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    description: "Industry 4.0 digital solutions for manufacturers. Supply chain management, quality tracking, and B2B e-commerce platforms.",
    icon: "Factory",
    features: ["Inventory Systems", "Supply Chain Tracking", "B2B Portals", "Quality Management", "Production Analytics"],
    stats: [{ label: "Projects", value: "18+" }, { label: "Efficiency Gain", value: "40%" }, { label: "Companies", value: "25+" }],
    color: "#8B5CF6",
  },
  {
    slug: "ngos",
    title: "NGOs",
    description: "Impact-driven websites for non-profits and NGOs. Donation platforms, volunteer management, and storytelling tools.",
    icon: "HandHeart",
    features: ["Donation Platforms", "Volunteer Management", "Impact Reporting", "Event Management", "Campaign Pages"],
    stats: [{ label: "Projects", value: "20+" }, { label: "Donations Raised", value: "₦500M+" }, { label: "Volunteers", value: "5K+" }],
    color: "#22C55E",
  },
  {
    slug: "logistics",
    title: "Logistics",
    description: "Digital solutions for logistics companies. Real-time tracking, fleet management, and customer-facing booking platforms.",
    icon: "Truck",
    features: ["Real-time Tracking", "Fleet Management", "Booking Systems", "Customer Portals", "Route Optimization"],
    stats: [{ label: "Projects", value: "15+" }, { label: "Deliveries", value: "1M+" }, { label: "Companies", value: "20+" }],
    color: "#EF4444",
  },
  {
    slug: "travel",
    title: "Travel & Tourism",
    description: "Booking platforms and marketing sites for travel agencies, hotels, and tourism boards. Multi-currency and multi-language support.",
    icon: "Plane",
    features: ["Booking Engines", "Hotel Listings", "Tour Packages", "Review Systems", "Multi-currency"],
    stats: [{ label: "Projects", value: "12+" }, { label: "Bookings", value: "50K+" }, { label: "Revenue Generated", value: "₦1B+" }],
    color: "#3B82F6",
  },
  {
    slug: "finance",
    title: "Finance",
    description: "Secure digital platforms for fintech companies, banks, and financial services. PCI-compliant payment systems and financial dashboards.",
    icon: "Landmark",
    features: ["Payment Systems", "Financial Dashboards", "KYC Integration", "Investment Platforms", "Banking APIs"],
    stats: [{ label: "Projects", value: "25+" }, { label: "Transactions", value: "₦50B+" }, { label: "Users", value: "200K+" }],
    color: "#10B981",
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    description: "Property listing platforms, agent portals, and developer showcase sites. Advanced search, virtual tours, and CRM integration.",
    icon: "Building2",
    features: ["Property Listings", "Virtual Tours", "Agent Portals", "Mortgage Calculators", "CRM Integration"],
    stats: [{ label: "Projects", value: "30+" }, { label: "Properties", value: "10K+" }, { label: "Sales Value", value: "₦10B+" }],
    color: "#6366F1",
  },
  {
    slug: "government",
    title: "Government",
    description: "Public sector digital solutions. Citizen portals, e-governance platforms, and public information systems.",
    icon: "Landmark",
    features: ["Citizen Portals", "E-Governance", "Public Records", "Service Delivery", "Compliance Systems"],
    stats: [{ label: "Projects", value: "10+" }, { label: "Citizens Served", value: "2M+" }, { label: "Agencies", value: "15+" }],
    color: "#0F172A",
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    description: "Digital presence for law firms, accounting firms, consultancies, and other professional service providers.",
    icon: "Briefcase",
    features: ["Service Showcases", "Client Portals", "Appointment Booking", "Content Marketing", "Lead Generation"],
    stats: [{ label: "Projects", value: "40+" }, { label: "Clients Acquired", value: "2K+" }, { label: "Revenue Generated", value: "₦5B+" }],
    color: "#7C3AED",
  },
];

export function getIndustryBySlug(slug: string) {
  return industries.find((i) => i.slug === slug);
}
