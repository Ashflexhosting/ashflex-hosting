import { MessageCircle } from "lucide-react";

const planOrServiceLabels: Record<string, string> = {
  starter: "Starter plan",
  business: "Business plan",
  professional: "Professional plan",
  enterprise: "Enterprise plan",
  pricing: "website plan",
  "website-design": "Website Design",
  "website-development": "Web Development",
  "wordpress-development": "WordPress Development",
  "ecommerce-development": "E-commerce Development",
  "ui-ux-design": "UI/UX Design",
  "branding-logo-design": "Branding & Logo Design",
  "seo-services": "SEO Services",
  "google-ads": "Google Ads",
  "social-media-marketing": "Social Media Marketing",
  "content-writing": "Content Writing",
  "website-maintenance": "Website Maintenance",
  "speed-optimization": "Speed Optimization",
  "hosting-domain": "Hosting & Domain",
  "ai-automation": "AI Automation",
  "custom-business-systems": "Custom Business Systems",
};

function buildWhatsAppHref(): string {
  const whatsappNumber = "2348023138892";
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const rawService = params.get("service") || "";
  const rawMessage = params.get("message") || "";
  let text: string;
  if (rawMessage) {
    text = rawMessage;
  } else if (planOrServiceLabels[rawService]) {
    text = `Hello! I'm interested in your ${planOrServiceLabels[rawService]} services. Please share the next steps.`;
  } else {
    text = "Hello! I'm interested in your web design services.";
  }
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export default function WhatsAppButton() {
  return (
    <a
      href={buildWhatsAppHref()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-200"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
