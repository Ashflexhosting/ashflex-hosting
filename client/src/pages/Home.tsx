import { Link } from "wouter";
import { buildWhatsAppHrefStatic } from "@/components/WhatsAppButton";
import { SITE_STATS } from "@shared/const";
import {
  Palette, Code, LayoutGrid, ShoppingCart, Smartphone, PenTool,
  Search, Target, Share2, FileText, Wrench, Zap, Server, Plug,
  Bot, Settings, ChevronRight, Star, ArrowRight, CheckCircle,
  MessageSquare, Users, Layers, Shield, Rocket, BarChart3, Headphones,
  MonitorPlay, ArrowUpRight, Sparkles, ArrowLeft, StarHalf,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";
import { faqs } from "@/data/faq";
import ScrollableScreenshot from "@/components/ScrollableScreenshot";
import { TiltEffect } from "@/components/TiltEffect";
import { ShineButton } from "@/components/ShineButton";
import { motion, useScroll, useTransform } from "framer-motion";

function WelcomeOrbs() {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [40, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 70]);
  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 pointer-events-none"
      aria-hidden="true"
    >
      <motion.div
        className="glow-orb absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-brand-secondary"
        style={{ opacity: 0.10, y: y1 }}
      />
      <motion.div
        className="glow-orb absolute -bottom-32 right-0 w-[480px] h-[480px] rounded-full bg-[#F20549]"
        style={{ opacity: 0.08, y: y2 }}
      />
    </motion.div>
  );
}

const TRUSTED_BRANDS = [
  { name: "Gyro Air", logo: "/manus-storage/gyroair-new_79657a35.webp", url: "https://gyroairltd.com" },
  { name: "Galcon Engineering", logo: "/manus-storage/galcon-new_9f330226.webp", url: "https://galconengineering.com" },
  { name: "Karossy Travels", logo: "/manus-storage/karossy-new_7e1f5ce3.webp", url: "https://karossytravels.com" },
  { name: "Nenva Health", logo: "/manus-storage/nenva-new_916dc9d5.webp", url: "https://nenvahealth.com.ng" },
  { name: "Ashflex Resources", logo: "/manus-storage/ashflexconsult_0189701c.webp", url: "https://ashflexconsult.com.ng" },
  { name: "Shutterspeed Projects", logo: "/manus-storage/shutterspeed-new2_3a1463e3.webp", url: "https://shutterspeedprojects.com" },
  { name: "Eight Radiance", logo: "/manus-storage/8radiance-trimmed_006d2bb5.webp", url: "https://eightradiance.org" },
];
import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const iconMap: Record<string, React.ElementType> = {
  Palette, Code, LayoutGrid, ShoppingCart, Smartphone, PenTool,
  Search, Target, Share2, FileText, Wrench, Zap, Server, Plug,
  Bot, Settings,
};

const processSteps = [
  { step: "01", title: "Discovery", desc: "We learn about your business, goals, audience, and competitors through in-depth research and consultation." },
  { step: "02", title: "Strategy", desc: "We develop a comprehensive digital strategy tailored to your objectives, including sitemap, wireframes, and tech stack." },
  { step: "03", title: "Design", desc: "Our designers create stunning mockups that align with your brand identity and optimize for conversions." },
  { step: "04", title: "Development", desc: "Our engineers bring the designs to life with clean, scalable code and seamless functionality." },
  { step: "05", title: "Testing", desc: "Rigorous testing across devices, browsers, and scenarios ensures a flawless user experience." },
  { step: "06", title: "Launch", desc: "We deploy your website with proper SEO setup, analytics tracking, and performance optimization." },
  { step: "07", title: "Growth", desc: "Ongoing support, maintenance, and optimization to keep your site performing at its best." },
];

/* Client feedback tied to actual portfolio projects */
type Testimonial = {
  projectId: number;
  thumbnail: string;
  name: string;
  role: string;
  project: string;
  content: string;
  rating: number;
};

/* ---------- Testimonial carousel (swipe, dots, autoplay, stagger fade-in) ---------- */
function TestimonialCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  // IntersectionObserver: triggers the stagger fade-in once the section scrolls into view
  React.useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Autoplay: advance every 6s, pauses while hovering or dragging
  const [playing, setPlaying] = useState(true);
  React.useEffect(() => {
    const api = emblaApi;
    if (!api) return;
    if (!playing) return;
    const id = setInterval(() => api.scrollNext(), 6000);
    return () => clearInterval(id);
  }, [emblaApi, playing]);

  React.useEffect(() => {
    const api = emblaApi;
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    const onCount = () => setSlideCount(api.scrollSnapList().length);
    const onDrag = () => setPlaying(false);
    const onRelease = () => { setPlaying(true); };
    api.on("select", onSelect);
    api.on("reInit", () => { onSelect(); onCount(); });
    api.on("pointerDown", onDrag);
    api.on("pointerUp", onRelease);
    onSelect();
    onCount();
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onCount);
      api.off("pointerDown", onDrag);
      api.off("pointerUp", onRelease);
    };
  }, [emblaApi]);

  return (
    <div ref={sectionRef} onMouseEnter={() => setPlaying(false)} onMouseLeave={() => setPlaying(true)} className="max-w-4xl mx-auto">
      <div ref={emblaRef} className="overflow-hidden" aria-label="Client testimonials">
        <div className="flex touch-pan-y">
          {testimonials.map((t, i) => (
            <div key={i} className="min-w-0 flex-[0_0_100%] pl-0 pr-0">
              <TestimonialCard t={t} inView={inView} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* dots */}
      <div className="flex items-center justify-center gap-2.5 mt-8">
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ease-out ${
              i === selectedIndex ? "w-8 bg-brand-cyan shadow-[0_0_12px_rgba(6,182,212,0.5)]" : "w-2 bg-white/25 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* arrows */}
      <div className="flex items-center justify-center gap-3 mt-5">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => emblaApi?.scrollPrev()}
          className="w-10 h-10 rounded-full border border-white/20 text-white/80 flex items-center justify-center hover:bg-white/10 hover:border-brand-cyan/50 hover:text-brand-cyan transition-all duration-300 active:scale-[0.95]"
        >
          <ArrowLeft size={18} />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => emblaApi?.scrollNext()}
          className="w-10 h-10 rounded-full border border-white/20 text-white/80 flex items-center justify-center hover:bg-white/10 hover:border-brand-cyan/50 hover:text-brand-cyan transition-all duration-300 active:scale-[0.95]"
        >
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

/* single testimonial card with staggered fade-in */
function TestimonialCard({ t, inView, index }: { t: Testimonial; inView: boolean; index: number }) {
  const scrollToProject = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById(`project-${t.projectId}`);
    if (!target) return;
    const y = target.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
    target.classList.add("is-visible");
  };
  return (
    <button
      type="button"
      onClick={scrollToProject}
      aria-label={`View the ${t.project} project in the portfolio`}
      className={`glass-card-dark border-0 p-8 md:p-9 w-full text-left rounded-3xl transition-all duration-500 ease-out will-change-transform hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-brand-cyan/15 hover:border-brand-cyan/30 hover:bg-white/[0.06] active:scale-[0.985] relative overflow-hidden ${
        inView ? "testimonial-fade-in opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: inView ? `${index * 90}ms` : "0ms" }}
    >
      <CardContent className="p-0">
        <div className="flex items-center gap-2 mb-5">
          <div className="flex items-center gap-1" aria-label={`Rated ${t.rating.toFixed(1)} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, j) => {
              if (j < Math.floor(t.rating)) return <Star key={j} size={20} fill="#FBBF24" className="text-yellow-400" />;
              if (j < t.rating) return <StarHalf key={j} size={20} fill="#FBBF24" className="text-yellow-400" />;
              return <Star key={j} size={20} className="text-white/25" />;
            })}
          </div>
          <span className="text-yellow-300/90 text-sm font-semibold">{t.rating.toFixed(1)}</span>
        </div>
        <p className="text-[1.05rem] md:text-base text-white/80 leading-[1.8] mb-6 font-normal italic" style={{ fontFamily: "var(--font-body)" }}>
          “{t.content}”
        </p>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shrink-0" style={{ fontFamily: "var(--font-heading)" }}>
            {t.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <p className="text-white font-bold">{t.name}</p>
            <p className="text-white/50 text-sm">{t.role}</p>
            <div className="flex items-center gap-2 mt-1">
              <img
                src={t.thumbnail}
                alt={`${t.project} screenshot`}
                loading="lazy"
                className="w-10 h-6 rounded object-cover object-top border border-white/20 shrink-0"
              />
              <p className="text-brand-cyan text-xs font-medium">
                Project: {t.project}
                <span className="ml-1.5 inline-flex items-center gap-0.5 text-brand-cyan/70">
                  View project <ArrowRight size={10} />
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </button>
  );
}

const testimonials = [
  {
    projectId: 12,
    thumbnail: "/manus-storage/galcon-home_06339665.webp",
    name: "Galcon Engineering (Nig) Limited",
    role: "Construction & Engineering, Lagos",
    project: "Galcon Engineering — Corporate Website",
    content: "With 30+ years of engineering history to tell, we needed a corporate site that covers our services, completed projects and team. Ashflex delivered a multi-page website that presents our company history and portfolio professionally — the built-in cost calculator is a feature our clients use regularly.",
    rating: 4.5,
  },
  {
    projectId: 1,
    thumbnail: "/manus-storage/shutterspeed-fullpage-hd_ed10ade0.webp",
    name: "Shutterspeed Projects",
    role: "Film & Media Production, Nigeria",
    project: "Shutterspeed Projects — Official Website",
    content: "As an integrated film and media production company, we needed a digital presence that matched the quality of our trailers. Ashflex built a dedicated site that showcases our latest titles and official trailers the way we envisioned.",
    rating: 4.5,
  },
  {
    projectId: 11,
    thumbnail: "/manus-storage/marveltex-fullpage-hd_117c152d.webp",
    name: "Marvel Tex Attraction",
    role: "Cooperative Savings Network, Nigeria",
    project: "Marvel Tex Attraction — Member Platform",
    content: "Our members needed a way to follow their savings cycles online. Ashflex built a responsive platform with a member dashboard, savings-cycle tracking and an empowerment-program page — exactly the member-facing system our cooperative asked for.",
    rating: 4.5,
  },
  {
    projectId: 3,
    thumbnail: "/manus-storage/bcfna-fullpage-hd_6551ddb7.webp",
    name: "B.C. First Nations Auto Finance",
    role: "Auto Financing, Canada",
    project: "B.C. First Nations Auto Finance — Project Website",
    content: "We needed a clear web presence for our Canadian personal auto-financing scheme. Ashflex delivered a site that communicates our offering to prospective customers, with an easy-to-follow 'How it Works' flow.",
    rating: 4.5,
  },
  {
    projectId: 2,
    thumbnail: "/manus-storage/kingwesl-fullpage_032116a9.jpg",
    name: "Kingwesl Interior",
    role: "Interior Design Practice",
    project: "Kingwesl Interior — Portfolio Website",
    content: "We needed an online presence to represent our residential and commercial interior-design practice. Ashflex created a portfolio website that positions the firm and our design services clearly for prospective clients.",
    rating: 4.5,
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "₦150,000",
    description: "Perfect for small businesses and startups",
    features: ["5-Page Responsive Website", "Mobile-First Design", "Contact Form", "Basic SEO Setup", "1 Month Free Support", "SSL Certificate"],
    popular: false,
  },
  {
    name: "Business",
    price: "₦350,000",
    description: "Ideal for growing businesses",
    features: ["10-Page Custom Website", "Premium Design System", "Advanced SEO", "Content Management", "E-commerce Ready", "3 Months Free Support", "Analytics Dashboard", "Performance Optimization"],
    popular: true,
  },
  {
    name: "Professional",
    price: "₦750,000",
    description: "For established businesses needing more",
    features: ["Unlimited Pages", "Custom Functionality", "Full E-commerce Store", "Payment Integration", "API Integrations", "Priority Support (6 months)", "Complete SEO Package", "Training Sessions", "Monthly Reports"],
    popular: false,
  },
];

function HeartPulse(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>; }
function GraduationCap(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>; }
function Building2(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>; }
function Landmark(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 22h18"/><path d="M6 18v4"/><path d="M10 18v4"/><path d="M14 18v4"/><path d="M18 18v4"/><path d="M3 18h18"/><path d="M3 11V9a9 9 0 0 1 18 0v2"/><path d="M12 2L3 9h18z"/></svg>; }
function Hotel(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M6 18v-2"/><path d="M10 18v-2"/><path d="M14 18v-2"/><path d="M18 18v-2"/><path d="M6 14v-2"/><path d="M10 14v-2"/><path d="M14 14v-2"/><path d="M18 14v-2"/></svg>; }
function Truck(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>; }
function HandHeart(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.34-.44.75-.81 1.24-1.1"/><path d="M4 11.5V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v13"/><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h3"/></svg>; }

const industries = [
  { name: "Healthcare", slug: "healthcare", icon: HeartPulse },
  { name: "Education", slug: "education", icon: GraduationCap },
  { name: "Real Estate", slug: "real-estate", icon: Building2 },
  { name: "Finance", slug: "finance", icon: Landmark },
  { name: "E-commerce", slug: "ecommerce", icon: ShoppingCart },
  { name: "Hospitality", slug: "hospitality", icon: Hotel },
  { name: "Logistics", slug: "logistics", icon: Truck },
  { name: "NGOs", slug: "ngos", icon: HandHeart },
];

/* ---------- small creative bits ---------- */

function CounterStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay?: string }) {
  const msDelay = delay ? parseInt(delay, 10) : 0;
  const { count, ref } = useCounter(value, 2200, 0, msDelay);
  return (
    <div ref={ref} className="group/stat relative rounded-2xl px-4 py-5 md:px-6 md:py-6 border border-transparent hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1.5 transition-all duration-300 cursor-default" style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}>
      <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-brand-cyan to-brand-accent rounded-full group-hover/stat:w-12 transition-all duration-300" aria-hidden="true" />
      <div className="text-4xl md:text-5xl font-extrabold text-white leading-none group-hover/stat:scale-105 group-hover/stat:text-brand-cyan transition-all duration-300 origin-left" style={{ fontFamily: "var(--font-heading)", transitionDelay: delay }}>
        {count}{suffix}
      </div>
      <div className="mt-2 h-px w-10 bg-gradient-primary group-hover/stat:w-16 transition-all duration-500" />
      <div className="mt-2 text-white/55 group-hover/stat:text-white/80 text-sm transition-colors duration-300">{label}</div>
    </div>
  );
}

function MarqueeRow({ items, reverse, accent }: { items: string[]; reverse?: boolean; accent: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap py-3" aria-hidden="true">
      <div className={`marquee-track gap-10 ${reverse ? "flex-row-reverse" : ""}`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 shrink-0 text-2xl md:text-3xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-heading)", color: "rgba(255,255,255,0.35)" }}
          >
            {item}
            <span className="inline-block h-3 w-3 rounded-full" style={{ background: accent }} />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------- hero floating mockups ---------- */
const heroMockups = [
  {
    title: "Conversion",
    value: "+312%",
    accent: "bg-brand-accent",
    cls: "rotate-6 translate-y-2",
    left: "30px",
    top: "120px",
  },
  {
    title: "PageSpeed",
    value: "98/100",
    accent: "bg-brand-secondary",
    cls: "-rotate-3 -translate-y-3",
    left: "155px",
    top: "200px",
  },
  {
    title: "Leads / mo",
    value: "2,400+",
    accent: "bg-brand-cyan",
    cls: "rotate-2 translate-y-6",
    left: "240px",
    top: "280px",
  },
];

export default function Home() {
  const sectionRef = useScrollReveal();
  const [hoveredPortfolio, setHoveredPortfolio] = useState<number | null>(null);
  const [heroImgLoaded, setHeroImgLoaded] = useState(false);
  const filteredPortfolio = portfolioItems.slice(0, 6);

  const scrollToPortfolio = () => {
    const target = document.getElementById("featured-portfolio");
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen overflow-x-clip" ref={sectionRef}>
      {/* ============ HERO — editorial split with kinetic type ============ */}
      <section className="relative min-h-screen max-h-[900px] flex items-center bg-brand noise-texture overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-30"
          style={{ backgroundImage: "url('/manus-storage/ashflex-hero-background_ee4a0039.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(7,27,90,0.97)_0%,rgba(7,27,90,0.82)_55%,rgba(7,27,90,0.55)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="glow-orb absolute -top-24 -left-24 w-[460px] h-[460px] rounded-full bg-brand-secondary" />
          <div className="glow-orb absolute bottom-0 right-1/4 w-[380px] h-[380px] rounded-full bg-brand-accent" style={{ opacity: 0.25 }} />
          <div className="glow-orb absolute top-1/3 right-0 w-[320px] h-[320px] rounded-full bg-brand-cyan" style={{ opacity: 0.18 }} />
        </div>

        {/* corner label */}
        <div className="absolute top-32 left-4 md:left-10 z-10 hidden md:flex items-center gap-3 rotate-[-90deg] origin-top-left text-white/40 text-xs uppercase tracking-[0.3em]" aria-hidden="true">
          <span className="inline-block w-8 h-px bg-white/40" /> Ashflex Studio · Lagos
        </div>

        <div className="container relative z-10 pt-32 pb-16 md:pt-44 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <h1
                className="hero-fade-in text-[1.9rem] xs:text-[2.3rem] sm:text-5xl md:text-[3.5rem] lg:text-6xl xl:text-[4.6rem] font-extrabold text-white leading-[1.04] tracking-tight mb-8 transition-[font-family] duration-300"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <span className="whitespace-nowrap">
                  We craft{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient">websites</span>
                    <svg
                      className="absolute -bottom-1.5 left-0 w-full h-2.5 text-brand-accent"
                      viewBox="0 0 200 12"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <path d="M0 8 Q 60 2 120 7 T 200 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
                    </svg>
                  </span>
                </span>
                <br />
                <span className="whitespace-nowrap">that turn clicks into{" "}</span>
                <br />
                <span className="whitespace-nowrap text-outline">customers.</span>
              </h1>

              <p className="hero-fade-in-d1 text-base md:text-xl text-white/65 max-w-xl leading-relaxed mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                High-performance design, conversion-first strategy, and pixel-perfect development for businesses that want to be seen, trusted, and chosen.
              </p>

              <div className="hero-fade-in-d2 flex flex-row items-stretch gap-3 mb-10">
                <div className="flex-1">
                  <ShineButton href="/contact" arrow className="w-full [&>span]:text-xs [&>span]:sm:text-base [&>span]:font-semibold [&>span]:normal-case [&>span]:tracking-normal [&>span]:px-3 [&>span]:sm:px-8 [&>span]:py-3.5 [&>span]:sm:py-4 [&>span]:rounded-2xl">
                    Get in Touch
                  </ShineButton>
                </div>
                <Link href="/portfolio" className="flex-1">
                  <span className="w-full justify-center group inline-flex items-center gap-2 px-3 py-3.5 sm:px-8 sm:py-4 text-xs sm:text-base font-semibold text-white/85 border border-white/25 rounded-2xl hover:bg-white/5 hover:border-white/50 transition-all duration-300">
                    <MonitorPlay size={18} /> View Portfolio
                  </span>
                </Link>
              </div>

              {/* stats band */}
              <div className="hero-fade-in-d3 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 max-w-2xl">
                <CounterStat value={SITE_STATS.projects} suffix="+" label="Projects Delivered" />
                <CounterStat value={SITE_STATS.satisfaction} suffix="%" label="Client Satisfaction" delay="100ms" />
                <CounterStat value={SITE_STATS.years} suffix="+" label="Years Experience" delay="200ms" />
                <CounterStat value={SITE_STATS.countries} suffix="+" label="Countries Served" delay="300ms" />
              </div>
            </div>

            {/* Right: client project showcase on an iMac mockup */}
            <div className="lg:col-span-5 hidden lg:block relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] rounded-full border border-white/5 rotate-12" aria-hidden="true" />

              <TiltEffect
                max={5}
                className="hero-fade-in-d4 w-full max-w-[900px] mx-auto group/iMac"
                style={{ animation: "float-slow 6s ease-in-out 1.2s infinite" }}
              >
                <div className="relative w-full" style={{ aspectRatio: "4 / 3" }}>
                  {/* "Hover me" tooltip — floats near the top-right of the screen, fades out when the user interacts */}
                  <div
                    className="pointer-events-none absolute -top-2 -right-2 z-10 hidden lg:flex items-center gap-1.5 rounded-full border border-brand-accent/40 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur shadow-lg hover-tooltip"
                    aria-hidden="true"
                  >
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                    Hover me
                  </div>
                  {/* Blurred placeholder skeleton shown while the hero image loads */}
                  <div
                    className={`absolute inset-0 overflow-hidden rounded-xl bg-white/5 backdrop-blur transition-opacity duration-500 ${
                      heroImgLoaded ? "pointer-events-none opacity-0" : "opacity-100"
                    }`}
                    aria-hidden={!heroImgLoaded ? "true" : undefined}
                  >
                    <div className="absolute inset-0 skeleton-shimmer" />
                    <div className="absolute inset-2 rounded-lg blur-xl bg-white/10" />
                  </div>
                  <img
                    src="/manus-storage/hero-galcon_f653d112.webp"
                    alt="Galcon Engineering website showcased across desktop, tablet, and mobile devices"
                    loading="eager"
                    draggable={false}
                    className={`absolute inset-0 h-full w-full object-contain drop-shadow-2xl transition-all duration-500 ease-out ${
                      heroImgLoaded
                        ? "opacity-100 blur-0"
                        : "pointer-events-none opacity-0 blur-md"
                    } group-hover/iMac:scale-[1.04] group-hover/iMac:drop-shadow-[0_10px_40px_rgba(37,99,235,0.55)]`}
                    onLoad={() => setHeroImgLoaded(true)}
                  />
                </div>
              </TiltEffect>

              {/* View Live Demo CTA */}
              <a
href="https://galconengineering.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-fade-in-d5 mt-6 mx-auto w-fit flex items-center gap-2 rounded-full border border-brand-accent/40 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition-all duration-300 hover:bg-brand-accent/15 hover:border-brand-accent/70 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] active:scale-[0.97]"
              >
                <MonitorPlay size={16} className="text-brand-accent" /> View Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* bottom grain line */}
        <div className="absolute bottom-0 left-0 right-0 grain-line" aria-hidden="true" />
      </section>

      {/* ============ MARQUEE — service ticker ============ */}
      <section className="bg-gradient-brand py-2">
        <MarqueeRow
          items={["Web Design", "E-commerce", "SEO", "Brand Identity", "Mobile Apps", "Digital Strategy", "UI/UX", "Performance"]}
          accent="#33C9D4"
        />
      </section>

      {/* ============ TRUSTED BY — marquee band ============ */}
      <section className="py-8 relative overflow-hidden" style={{ background: "#D8D8D8" }}>
        <div className="container">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4 font-medium">Trusted by emerging brands across Nigeria & beyond</p>
        </div>
        <div className="marquee-track group" aria-label="Trusted brands" style={{ maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)" }}>
          {TRUSTED_BRANDS.concat(TRUSTED_BRANDS).map((brand, i) => (
            <div key={`${brand.name}-${i}`} className="inline-flex items-center shrink-0 whitespace-nowrap px-7 md:px-9 group-hover:[animation-play-state:paused]" style={{ pointerEvents: "auto" }}>
              <a
                href={brand.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${brand.name}`}
                className="group/logo relative inline-flex items-center justify-center rounded-md px-4 py-3 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className="h-16 md:h-20 w-auto max-w-[230px] md:max-w-[270px] object-contain grayscale transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:grayscale-0 hover:scale-[1.12] origin-center"
                />
                {/* Descriptive hover label */}
                <span
                  role="tooltip"
                  className="pointer-events-none absolute -bottom-9 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#1B2A6B] px-3.5 py-1.5 text-[11px] font-semibold text-white opacity-0 translate-y-1 shadow-lg shadow-black/20 transition-all duration-200 ease-out group-hover/logo:opacity-100 group-hover/logo:translate-y-0"
                  aria-hidden="true"
                >
                  {brand.name}
                  <span aria-hidden="true" className="absolute -top-1 left-1/2 -translate-x-1/2 h-2 w-2 rotate-45 bg-[#1B2A6B]" />
                </span>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ============ WELCOME — modern creative intro ============ */}
      <section id="welcome" className="py-24 md:py-32 bg-[#E8E9EC] relative overflow-hidden dark:bg-background">
        <WelcomeOrbs />

        <div className="container relative z-10">
          {/* Eyebrow badge above heading on mobile, inline on desktop */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 mb-8 lg:mb-10 scroll-reveal">
            <span className="inline-flex self-start lg:self-auto items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-white px-5 py-2 text-sm font-bold uppercase tracking-[0.25em] text-gradient shadow-sm">
              <Sparkles size={15} />
              Welcome to
            </span>
            <span className="hidden lg:block h-px flex-1 min-w-16 bg-gradient-to-r from-[#0757F7]/50 to-transparent" aria-hidden="true" />
          </div>

          <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center">
            {/* Left: tilt image with floating stat badges, tagline, chat CTA */}
            <div className="lg:col-span-5 scroll-reveal-left">
              <div className="relative max-w-sm mx-auto lg:max-w-none">
                {/* Floating stat badges */}
                <div
                  className="absolute -top-5 -right-4 md:-right-8 z-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-secondary/15 float-slow dark:bg-[#0E1A3C] dark:shadow-brand-cyan/10"
                  aria-hidden="true"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-primary text-white"><Rocket size={17} /></span>
                  <span className="text-sm font-extrabold text-[#1B2A6B] leading-tight dark:text-foreground">{SITE_STATS.projects}+<br />Projects Delivered</span>
                </div>
                <div
                  className="absolute top-1/3 -left-5 md:-left-8 z-10 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl shadow-brand-secondary/15 float-slow-delayed dark:bg-[#0E1A3C] dark:shadow-brand-cyan/10"
                  aria-hidden="true"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#0757F7] text-white"><Star size={17} /></span>
                  <span className="text-sm font-extrabold text-[#1B2A6B] leading-tight dark:text-foreground">{SITE_STATS.satisfaction}%<br />Client Satisfaction</span>
                </div>

                <TiltEffect max={6}>
                  <img
                    src="/manus-storage/ashflex-welcome-showcase_e45e0955.png"
                    alt="Ashflex designer working on a website project"
                    loading="lazy"
                    className="w-full rounded-3xl shadow-2xl shadow-[#1B2A6B]/25 ring-1 ring-white/60"
                  />
                </TiltEffect>
              </div>

              <div className="text-center mt-12">
                <h3 className="text-2xl md:text-[2rem] text-[#1B2A6B] leading-snug font-extrabold dark:text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  Take control of your
                  <br />
                  <span className="text-gradient">online business.</span>
                </h3>
                <a
                  href={buildWhatsAppHrefStatic()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-base font-semibold text-white shadow-lg shadow-brand-secondary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-secondary/35 active:scale-[0.97]"
                >
                  <MessageSquare size={18} />
                  Chat With Us
                </a>
              </div>
            </div>

            {/* Right: modern editorial copy */}
            <div className="lg:col-span-7 scroll-reveal-right" style={{ transitionDelay: "120ms" }}>
              <h2 className="text-[2rem] xs:text-[2.4rem] sm:text-[2.75rem] md:text-[3.6rem] leading-[1.08] font-extrabold tracking-tight text-[#1a1a1a] whitespace-nowrap mb-8 dark:text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                Ashflex{" "}
                <span className="text-gradient">Web Design</span>
              </h2>

              <div className="flex items-center gap-4 mb-8" aria-hidden="true">
                <svg viewBox="0 0 36 36" className="h-7 w-7 text-[#0757F7] shrink-0" fill="currentColor">
                  <path d="M18 3 L21.5 12.5 L32 11 L26 17 L32 25 L21.5 23.5 L18 33 L14.5 23.5 L4 25 L10 17 L4 11 L14.5 12.5 Z" />
                </svg>
                <span className="block h-px flex-1 bg-gradient-to-r from-[#0757F7]/60 via-[#F20549]/40 to-transparent" />
              </div>

              <p className="text-xl md:text-2xl font-extrabold leading-snug text-[#1a1a1a] mb-8 dark:text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                Your Business Deserves{" "}
                <span className="relative text-[#B31026] after:absolute after:left-0 after:-bottom-0.5 after:h-1 after:w-full after:rounded-full after:bg-gradient-to-r after:from-[#0757F7]/50 after:to-[#F20549]/50">
                  More Than Just a Website
                </span> . It Deserves a{" "}
                <span className="text-gradient">Digital Presence That Works</span> .
              </p>

              <p className="text-base md:text-lg text-[#222] leading-relaxed mb-6 dark:text-foreground/85">
                We combine creative design, smart technology and strategic thinking to design professional, modern and high-performing websites that help businesses build credibility, attract the right customers and turn online visitors into real opportunities.
              </p>

              <p className="text-base md:text-lg text-[#222] leading-relaxed mb-6 dark:text-foreground/85">
                Whether you are launching a new business, upgrading an outdated website or taking your brand online, we create digital experiences designed around your goals.
              </p>

              <p className="text-base md:text-lg text-[#222] leading-relaxed mb-8 dark:text-foreground/85">
                From corporate websites and business portals to e-commerce platforms and custom web applications, we build solutions that work for your business and your customers.
              </p>

              <Link href="/about" className="scroll-reveal inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#0757F7] transition-all duration-300 dark:text-brand-cyan hover:gap-3 hover:text-[#F20549] group/story">
                Read Our Story
                <ArrowRight size={16} className="transition-transform duration-300 group-hover/story:translate-x-1" />
              </Link>

              <div className="flex flex-wrap gap-2 mt-8">
                {["Website Design", "Web Applications", "Graphic Design", "Digital Marketing"].map((chip) => (
                  <span key={chip} className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-[#0757F7] shadow-sm ring-1 ring-[#0757F7]/10 dark:bg-[#0E1A3C] dark:text-foreground dark:ring-brand-cyan/25 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md">
                    {chip}
                  </span>
                ))}
              </div>

              <Link href="/contact?service=Website%20Design">
                <span className="mt-8 group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-base font-semibold text-white shadow-lg shadow-brand-secondary/25 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-secondary/40 hover:ring-2 hover:ring-brand-secondary/30 active:scale-[0.97]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-y-0 -left-1/4 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:left-[120%] group-hover:opacity-100"
                  />
                  <span className="relative">Get Started</span>
                  <ArrowUpRight size={16} className="relative -translate-x-0.5 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:rotate-12" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES — bento grid with numbered cards ============ */}
      <section className="py-28 relative">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="glow-orb absolute top-10 right-10 w-[340px] h-[340px] rounded-full bg-brand-secondary" style={{ opacity: 0.12 }} />
        </div>
        <div className="container relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Services built to <span className="text-gradient">scale</span>
              </h2>
            </div>
            <Link href="/services">
              <span className="group inline-flex items-center gap-2 text-brand-secondary font-semibold hover:gap-3.5 transition-all">
                Explore all 15 services
                <ArrowUpRight size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.slice(0, 8).map((service, i) => {
              const Icon = iconMap[service.icon] || Code;
              const featured = i === 0;
              return (
                <div
                  key={service.id}
                  className={`scroll-reveal group relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 backdrop-blur-sm p-8 hover-lift ${featured ? "sm:col-span-2 lg:col-span-1 bg-gradient-to-br from-brand/95 to-[#0f2a7a] text-white border-white/10" : ""}`}
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${featured ? "bg-brand-accent/15" : "bg-brand-secondary/8"} blur-2xl group-hover:scale-125 transition-transform duration-700`} aria-hidden="true" />
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-13 h-13 w-[52px] h-[52px] rounded-2xl ${featured ? "bg-white/10" : "bg-gradient-primary/10"} flex items-center justify-center`}>
                      <Icon className={featured ? "text-white" : "text-brand-secondary"} size={24} />
                    </div>
                    <span className={`text-sm font-bold ${featured ? "text-white/30" : "text-muted-foreground/40"}`} style={{ fontFamily: "var(--font-heading)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2.5" style={{ fontFamily: "var(--font-heading)" }}>{service.title}</h3>
                  <p className={`text-sm leading-relaxed mb-5 ${featured ? "text-white/60" : "text-muted-foreground"}`}>{service.description}</p>
                  <Link href={`/services/${service.slug}`}>
                    <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${featured ? "text-white hover:text-brand-cyan" : "text-brand-secondary"} transition-colors`}>
                      Learn more <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </div>
              );
            })}
            {/* closing CTA tile */}
            <div className="scroll-reveal relative overflow-hidden rounded-3xl bg-gradient-primary p-8 flex flex-col justify-between min-h-[220px]">
              <div className="absolute -bottom-14 -right-14 w-48 h-48 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-heading)" }}>Something else in mind?</h3>
                <p className="text-sm text-white/70">Tell us your idea — we'll map the solution together.</p>
              </div>
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand font-semibold rounded-2xl text-sm hover:shadow-xl transition-all">
                  Start a project <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US — offset dark band ============ */}
      <section className="py-28 bg-gradient-brand text-white relative overflow-hidden noise-texture">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="glow-orb absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-secondary" />
          <div className="glow-orb absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-brand-accent" style={{ opacity: 0.22 }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-2xl mb-16">
            <p className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-3">Why Ashflex</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-5" style={{ fontFamily: "var(--font-heading)" }}>
              Why clients <span className="text-brand-cyan">choose us</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Not just another agency — we're a growth partner that treats every pixel as a business decision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Layers, title: "Strategy First", desc: "Every project begins with a thorough strategic analysis to ensure maximum ROI." },
              { icon: Sparkles, title: "Premium Design", desc: "Award-winning designs that combine aesthetics with conversion optimization." },
              { icon: Rocket, title: "Fast Performance", desc: "Optimized for speed with Google PageSpeed scores of 90+ on all devices." },
              { icon: Search, title: "SEO Ready", desc: "Built from the ground up with SEO best practices for organic growth." },
              { icon: Smartphone, title: "Mobile First", desc: "Responsive designs that deliver exceptional experiences on every screen." },
              { icon: Headphones, title: "Ongoing Support", desc: "Dedicated support team ensuring your website stays updated and secure." },
            ].map((item, i) => (
              <div key={i} className={`scroll-reveal glass-card-dark p-8 hover-lift ${i === 1 || i === 4 ? "lg:translate-y-6" : ""}`} style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-105">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-white/60 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS — numbered timeline ============ */}
      <section
        className="py-28 relative"
        style={{
          backgroundImage: "url(/manus-storage/process-bg_22383687.webp)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
          backgroundColor: "#0F172A",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(180deg, oklch(0.24 0.09 262 / 0.78) 0%, oklch(0.24 0.09 262 / 0.72) 50%, oklch(0.24 0.09 262 / 0.82) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="container relative">
          <div className="text-center mb-16">
            <p className="text-sky-400 font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white" style={{ fontFamily: "var(--font-heading)" }}>
              How we <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-white bg-clip-text text-transparent">work</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Our proven 7-step process ensures every project is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.slice(0, 4).map((step, i) => (
              <div key={i} className="scroll-reveal relative" style={{ transitionDelay: `${i * 60}ms` }}>
                {i < 3 && (
                  <div
                    className="hidden lg:block absolute top-12 h-px pointer-events-none flow-line"
                    style={{
                      left: "calc(50% + 2rem)",
                      background: "linear-gradient(90deg, oklch(0.55 0.19 262) 0%, oklch(0.72 0.16 205) 100%)",
                      opacity: 0.55,
                      width: "calc(100% - 4rem)",
                      transform: "scaleX(0)",
                      transformOrigin: "left center",
                      transition: "transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
                      transitionDelay: `${(i + 1) * 260}ms`,
                    }}
                    aria-hidden="true"
                  />
                )}
                <div className="glass-card p-7 h-full border-0 relative z-10">
                  <div className="text-5xl font-extrabold text-gradient mb-4" style={{ fontFamily: "var(--font-heading)" }}>{step.step}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Flow connector: S-curve from step 04 down to step 05 */}
          <div className="hidden lg:block my-2" aria-hidden="true">
            <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="w-full h-10 flow-curve" fill="none">
              <defs>
                <linearGradient id="flowCurve2" x1="0" y1="0" x2="100" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#0757F7" />
                  <stop offset="1" stopColor="#F20549" />
                </linearGradient>
              </defs>
              <path d="M 100 0 C 100 20, 0 20, 0 40" stroke="url(#flowCurve2)" strokeWidth="0.6" opacity="0.6" pathLength={100} strokeDasharray="100" strokeDashoffset="100" className="flow-curve-path" />
              <path d="M 0 34 L 0 40 L 6 40" stroke="#0757F7" strokeWidth="0.6" opacity="0.6" pathLength={100} strokeDasharray="100" strokeDashoffset="100" className="flow-curve-path" style={{ transitionDelay: "0.55s" }} />
            </svg>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-1 relative">
            {processSteps.slice(4).map((step, i) => (
              <div key={i + 4} className="scroll-reveal relative" style={{ transitionDelay: `${(i + 4) * 60}ms` }}>
                {i < 2 && (
                  <div
                    className="hidden lg:block absolute top-12 h-px pointer-events-none flow-line"
                    style={{
                      left: "calc(50% + 2rem)",
                      background: "linear-gradient(90deg, oklch(0.72 0.16 205) 0%, oklch(0.55 0.19 262) 100%)",
                      opacity: 0.55,
                      width: "calc(100% - 4rem)",
                      transform: "scaleX(0)",
                      transformOrigin: "left center",
                      transition: "transform 1.2s cubic-bezier(0.23, 1, 0.32, 1)",
                      transitionDelay: `${(i + 5) * 260}ms`,
                    }}
                    aria-hidden="true"
                  />
                )}
                <div className="glass-card p-7 h-full border-0 relative z-10">
                  <div className="text-5xl font-extrabold text-gradient mb-4" style={{ fontFamily: "var(--font-heading)" }}>{step.step}</div>
                  <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO — numbered list with image peek ============ */}
      <section id="featured-portfolio" className="py-28 bg-muted/30 relative scroll-mt-20">
        <div className="container">
          <div className="mb-10">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Work</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Featured <span className="text-gradient">portfolio</span>
            </h2>
            <div className="mt-4 h-1 w-24 rounded-full bg-gradient-brand" />
          </div>

          {/* list rows */}
          <div className="relative">
            {filteredPortfolio.map((item, i) => (
              <div
                key={item.id}
                id={`project-${item.id}`}
                className="scroll-reveal relative group"
                style={{ transitionDelay: `${i * 80}ms` }}
                onMouseEnter={() => setHoveredPortfolio(item.id)}
                onMouseLeave={() => setHoveredPortfolio(null)}
              >
              <Link
                href={`/portfolio/${item.id}`}
                className="group relative flex items-center gap-6 md:gap-10 py-6 px-4 md:px-6 -mx-4 md:-mx-6 rounded-2xl border-b border-border/60 hover:bg-gradient-to-br hover:from-white hover:to-brand-secondary/5 hover:border-brand-secondary/30 hover:shadow-lg hover:shadow-brand-secondary/10 hover:-translate-y-0.5 transition-all duration-300 ease-out will-change-transform"
              >
                <span className="hidden md:flex shrink-0 w-12 text-lg font-extrabold text-muted-foreground/40 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-primary group-hover:scale-110 transition-all duration-300 ease-out origin-bottom-left" style={{ fontFamily: "var(--font-heading)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-secondary/10 text-brand-secondary group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">{item.category}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold truncate group-hover:text-gradient transition-all duration-300" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 mt-1 group-hover:translate-x-1 transition-transform duration-300">{item.challenge}</p>
                </div>
                <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border border-border group-hover:bg-gradient-primary group-hover:border-transparent group-hover:text-white group-hover:scale-110 group-hover:rotate-45 text-muted-foreground items-center justify-center transition-all duration-300 ease-out">
                  <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
                {/* hover image peek — 50% larger, vertical scroll-through on hover, starting from the top header.
                    The peek is pointer-events-auto and part of the hover region, so moving the cursor onto it
                    (e.g., the "Scroll to view" hint) keeps the frame visible and the auto-scroll running. */}
                <div
                  className={`hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-84 pointer-events-auto transition-all duration-300 ease-out ${hoveredPortfolio === item.id ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-4 scale-95 pointer-events-none"}`}
                  style={{ zIndex: hoveredPortfolio === item.id ? 30 : 0, visibility: hoveredPortfolio === item.id ? "visible" : "hidden" }}
                  aria-hidden="true"
                >
                  <ScrollableScreenshot
                    src={item.image}
                    alt={`${item.title} full-page screenshot`}
                    height="h-60"
                    className="rounded-2xl border border-brand-secondary/30 shadow-2xl shadow-brand-secondary/25"
                    active={hoveredPortfolio === item.id}
                  />
                </div>
              </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio">
              <span className="group inline-flex items-center gap-2 text-brand-secondary font-semibold hover:gap-3 transition-all">
                View all projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES — horizontal strip ============ */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Industries</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Industries we <span className="text-gradient">serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in delivering tailored digital solutions across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={ind.name} className="scroll-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <Link href={`/industries/${ind.slug}`}>
                  <Card className="glass-card border-0 p-6 text-center hover-lift cursor-pointer group">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <ind.icon className="w-8 h-8 text-brand-secondary" />
                      </div>
                      <h3 className="text-base font-bold" style={{ fontFamily: "var(--font-heading)" }}>{ind.name}</h3>
                      <span className="mt-2 inline-flex items-center text-xs text-brand-secondary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Explore <ArrowRight size={12} />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/industries">
              <span className="group inline-flex items-center gap-2 text-brand-secondary font-semibold hover:gap-3 transition-all">
                View all industries
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-28 bg-gradient-brand text-white relative overflow-hidden noise-texture">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="glow-orb absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-brand-cyan" style={{ opacity: 0.2 }} />
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-brand-cyan font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              What our <span className="text-brand-cyan">clients say</span>
            </h2>
          </div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="py-28">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Transparent <span className="text-gradient">pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            {pricingPlans.map((plan, i) => (
              <div key={plan.name} className={`scroll-reveal relative ${plan.popular ? "md:-my-4" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 text-xs font-bold bg-gradient-primary text-white rounded-full shadow-lg shadow-brand-accent/30 z-10">
                    Most Popular
                  </span>
                )}
                <Card className={`h-full border-0 p-8 ${plan.popular ? "bg-gradient-brand text-white shadow-2xl shadow-brand-secondary/25" : "glass-card"}`}>
                  <CardContent className="p-0">
                    <h3 className={`text-2xl font-extrabold mb-1 ${plan.popular ? "text-white" : ""}`} style={{ fontFamily: "var(--font-heading)" }}>{plan.name}</h3>
                    <p className={`text-sm mb-6 ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>{plan.description}</p>
                    <div className="mb-7">
                      <span className={`text-4xl font-extrabold ${plan.popular ? "text-white" : "text-foreground"}`} style={{ fontFamily: "var(--font-heading)" }}>{plan.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className={`flex items-center gap-2 text-sm ${plan.popular ? "text-white/85" : "text-foreground/70"}`}>
                          <CheckCircle size={16} className={plan.popular ? "text-brand-cyan" : "text-brand-secondary"} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <span className={`block w-full text-center px-6 py-3.5 rounded-2xl font-semibold transition-all duration-200 ${
                        plan.popular
                          ? "bg-white text-brand text-sm hover:shadow-lg"
                          : "bg-gradient-primary text-white text-sm hover:shadow-lg hover:shadow-brand-secondary/25"
                      }`}>
                        Get Started
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-3">Need a custom solution?</p>
            <Link href="/pricing">
              <span className="group inline-flex items-center gap-2 text-brand-secondary font-semibold hover:gap-3 transition-all">
                View all packages & compare
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-28 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-14">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Frequent questions, <span className="text-gradient">clear answers</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.slice(0, 10).map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card border-0 px-6">
                <AccordionTrigger className="text-base font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-col items-center gap-2 mt-8">
            <Link href="/faq">
              <span className="text-brand-secondary font-medium hover:underline">
                View all FAQs →
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-brand-secondary/80 font-medium hover:underline">
                Still have questions? Contact us →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-28 bg-gradient-brand text-white relative overflow-hidden noise-texture">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="glow-orb absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full bg-brand-secondary" />
          <div className="glow-orb absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-brand-accent" style={{ opacity: 0.28 }} />
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white/70 text-sm mb-8">
              <Users size={15} /> Ready when you are
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Let's build your <span className="text-brand-cyan">next big thing</span>
            </h2>
            <p className="text-lg text-white/65 max-w-xl mx-auto mb-12 leading-relaxed">
              Tell us about your project and we'll show you exactly how a new website can drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <span className="group inline-flex items-center gap-2.5 px-9 py-4 text-base font-semibold text-brand bg-white rounded-2xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300">
                  Get Free Consultation
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <a href={buildWhatsAppHrefStatic()} target="_blank" rel="noopener noreferrer">
                <span className="group inline-flex items-center gap-2.5 px-9 py-4 text-base font-semibold text-white border border-white/25 rounded-2xl hover:bg-white/5 hover:border-white/50 transition-all duration-300">
                  <MessageSquare size={20} /> Chat on WhatsApp
                </span>
              </a>
            </div>
          </div>
          <div className="mt-20 flex items-center gap-4 text-white/40 text-xs uppercase tracking-[0.25em] justify-center">
            <ArrowLeft size={14} /> ashflexwebdesign.com
            <span className="inline-block h-px w-16 bg-white/25" />
            Lagos · Nigeria <ArrowRight size={14} />
          </div>
        </div>
      </section>
    </div>
  );
}
