import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { useLocation } from "wouter";

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

const pageLabels: Record<string, string> = {
  "/": "homepage",
  "/about": "About page",
  "/services": "Services page",
  "/portfolio": "Portfolio page",
  "/industries": "Industries page",
  "/pricing": "Pricing page",
  "/contact": "Contact page",
  "/blog": "Blog page",
  "/resources": "Resources page",
  "/newsletter": "Newsletter page",
  "/calculator": "Cost Calculator page",
};

function buildWhatsAppHref(): string {
  const whatsappNumber = "2348023138892";
  const [location] = typeof window !== "undefined" ? useLocation() : ["/", () => {}];
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const rawService = params.get("service") || "";
  const rawMessage = params.get("message") || "";
  let text: string;
  if (rawMessage) {
    text = rawMessage;
  } else if (planOrServiceLabels[rawService]) {
    text = `Hello! I'm interested in your ${planOrServiceLabels[rawService]} services. Please share the next steps.`;
  } else {
    text = `Hello! I found your website through the ${pageLabels[location] ?? location} and I'm interested in your web design services. Please share the next steps.`;
  }
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

export function buildWhatsAppHrefStatic(): string {
  const whatsappNumber = "2348023138892";
  const params = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const rawService = params.get("service") || "";
  const rawMessage = params.get("message") || "";
  const rawText = params.get("text") || "";
  let text = "";
  if (rawMessage) {
    text = rawMessage;
  } else if (rawText) {
    text = rawText;
  } else if (planOrServiceLabels[rawService]) {
    text = `Hello! I'm interested in your ${planOrServiceLabels[rawService]} services. Please share the next steps.`;
  }
  return `https://wa.me/${whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
}

export default function WhatsAppButton() {
  const [badgeVisible, setBadgeVisible] = useState(true);
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-end">
      {/* Estimated response-time badge */}
      {badgeVisible && (
        <div
          role="status"
          className="mr-2.5 mb-1.5 rounded-full bg-white/95 dark:bg-brand px-3.5 py-1.5 text-[11px] font-semibold text-[#1B2A6B] dark:text-white shadow-md shadow-black/10 whitespace-nowrap backdrop-blur flex items-center gap-1.5 animate-in fade-in slide-in-from-bottom-1 duration-300"
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" aria-hidden="true" />
          <span className="inline-flex items-center gap-[3px]" aria-hidden="true">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="typing-dot w-1 h-1 rounded-full bg-brand-secondary/70 dark:bg-brand-accent/70"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </span>
          Typically replies within 10 minutes
          <button
            type="button"
            aria-label="Dismiss response-time badge"
            onClick={() => setBadgeVisible(false)}
            className="ml-0.5 text-foreground/40 hover:text-foreground transition-colors"
          >
            ×
          </button>
        </div>
      )}
      <a
        href={buildWhatsAppHref()}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg shadow-green-500/30 hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
}
