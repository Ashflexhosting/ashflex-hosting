export type FaqCategory =
  | "Getting Started & Pricing"
  | "Design & Development"
  | "Hosting & Domains"
  | "Support & Maintenance"
  | "Payments & Billing";

export interface FaqItem {
  question: string;
  answer: string;
  category: FaqCategory;
  /** Source pages where this FAQ originally appeared */
  sources?: string[];
}

export const faqCategories: FaqCategory[] = [
  "Getting Started & Pricing",
  "Design & Development",
  "Hosting & Domains",
  "Support & Maintenance",
  "Payments & Billing",
];

export const faqs: FaqItem[] = [
  {
    question: "How much does a website cost?",
    answer: "Website costs vary based on complexity, pages, and features. Our Starter packages begin at ₦150,000, while custom business solutions range from ₦500,000 to ₦5M+ and Enterprise plans start from ₦1,000,000+. Use our free Website Cost Calculator for an instant estimate, and we always provide a detailed quote before work begins.",
    category: "Getting Started & Pricing",
    sources: ["Home", "Contact", "Pricing"],
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most projects are completed within 2-6 weeks depending on complexity. Simple landing pages can be live in 1-2 weeks, while custom e-commerce platforms typically take 4-8 weeks. The comparison table on our Pricing page shows estimated timelines per tier, and we confirm a detailed timeline during the planning phase.",
    category: "Getting Started & Pricing",
    sources: ["Home", "Contact", "Pricing"],
  },
  {
    question: "Do you offer AI automation services?",
    answer: "Yes! We offer AI-powered solutions including chatbots, workflow automation, AI content generation, predictive analytics, and custom AI integrations to streamline your business operations. Our Custom Business Systems and AI Automation services cover everything from lead-capture bots to internal workflow tools.",
    category: "Getting Started & Pricing",
    sources: ["Home"],
  },
  {
    question: "Do you provide a money-back guarantee?",
    answer: "We offer a satisfaction guarantee. If you're not happy with the initial design concepts, we'll revise until you are. We also provide milestone-based payments so you're never locked in unsatisfied.",
    category: "Getting Started & Pricing",
    sources: ["Home"],
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Every website we build is fully responsive and optimized for all devices — smartphones, tablets, laptops, and desktops. We follow a mobile-first design approach.",
    category: "Design & Development",
    sources: ["Home"],
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern technologies including React, Next.js, WordPress, Shopify, Node.js, Python, and more. We choose the best technology stack based on your specific requirements and business goals.",
    category: "Design & Development",
    sources: ["Home"],
  },
  {
    question: "What is your design process?",
    answer: "Our 7-step process includes: Discovery, Strategy, Design, Development, Testing, Launch, and Growth. We involve you at every stage to ensure the final product exceeds expectations.",
    category: "Design & Development",
    sources: ["Home"],
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we specialize in website redesigns. We'll audit your current site, identify improvement areas, and create a modern, high-performing version that better serves your business goals.",
    category: "Design & Development",
    sources: ["Home", "Contact"],
  },
  {
    question: "Do you offer SEO services?",
    answer: "Yes, we offer comprehensive SEO services including technical SEO, on-page optimization, keyword research, content strategy, and link building. Every website we build is SEO-ready from the ground up.",
    category: "Design & Development",
    sources: ["Home"],
  },
  {
    question: "Can you integrate payment systems?",
    answer: "Yes, we integrate all major payment gateways including Paystack, Flutterwave, Stripe, and PayPal. We also support bank transfers, USSD, and other local payment methods.",
    category: "Design & Development",
    sources: ["Home"],
  },
  {
    question: "Do you work with international clients?",
    answer: "Absolutely! We serve clients across Nigeria, Africa, and internationally. Our team works remotely and delivers world-class results regardless of location.",
    category: "Design & Development",
    sources: ["Home"],
  },
  {
    question: "Can I update the website myself?",
    answer: "Yes! We build websites with easy-to-use CMS platforms like WordPress, or provide custom admin panels for bespoke solutions. We also offer training sessions to help you manage your site.",
    category: "Design & Development",
    sources: ["Home"],
  },
  {
    question: "Do you provide hosting services?",
    answer: "Yes, we offer reliable hosting solutions with 99.9% uptime guarantee, SSL certificates, daily backups, and CDN. The first year of hosting + domain (.com / .com.ng / .ng) is free with every website plan.",
    category: "Hosting & Domains",
    sources: ["Home", "Pricing", "Hosting & Domain"],
  },
  {
    question: "What happens after my free first year ends?",
    answer: "Nothing changes on your site. Around the end of year 1 we contact you with renewal options — Starter ₦60,000/yr, Professional ₦85,000/yr, or Business ₦120,000/yr. Your hosting, email, and domain keep running uninterrupted while you decide.",
    category: "Hosting & Domains",
    sources: ["Hosting & Domain"],
  },
  {
    question: "Do renewal rates change over time?",
    answer: "Rates are set for each renewal year and any change is always communicated in advance. Domain renewal prices follow registrar costs (set by ICANN and the .ng registry), so they can move slightly over time; hosting renewals are locked to your current tier unless you choose to upgrade.",
    category: "Hosting & Domains",
    sources: ["Hosting & Domain"],
  },
  {
    question: "Are .com.ng and .ng domains renewed at the same price?",
    answer: "Both are included in your tier's renewal rate. .com.ng domains are generally cheaper at the registry level, while .ng domains carry a slightly higher registry fee — whichever extension you choose, the price is already bundled in your plan with no surprise add-ons.",
    category: "Hosting & Domains",
    sources: ["Hosting & Domain"],
  },
  {
    question: "Can I transfer my domain to another provider later?",
    answer: "Yes — your domain is registered in your name, and we can provide your EPP/transfer code at any time. We make the process simple and keep your site live throughout the transfer if you're moving hosting as well.",
    category: "Hosting & Domains",
    sources: ["Hosting & Domain"],
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer: "Yes! We offer comprehensive maintenance plans starting at ₦25,000/month that include security updates, bug fixes, performance monitoring, content updates, and priority support.",
    category: "Support & Maintenance",
    sources: ["Home", "Contact"],
  },
  {
    question: "How do I get started?",
    answer: "Simply fill out the contact form, send us a WhatsApp message, or book a free consultation call. We'll discuss your project, provide a quote, and outline next steps.",
    category: "Support & Maintenance",
    sources: ["Contact"],
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, Paystack, Flutterwave, card payments, and offer flexible payment plans for larger projects. Typically, we require 50% upfront and 50% upon completion.",
    category: "Payments & Billing",
    sources: ["Home"],
  },
];
