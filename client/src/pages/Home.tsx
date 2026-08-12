import { Link } from "wouter";
import {
  Palette, Code, LayoutGrid, ShoppingCart, Smartphone, PenTool,
  Search, Target, Share2, FileText, Wrench, Zap, Server, Plug,
  Bot, Settings, ChevronRight, Star, ArrowRight, CheckCircle,
  MessageSquare, Users, Layers, Shield, Rocket, BarChart3, Headphones,
  MonitorPlay, ArrowUpRight, Sparkles, ArrowLeft,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";
import { services } from "@/data/services";
import { portfolioItems } from "@/data/portfolio";
import { faqs } from "@/data/faq";
import { useState } from "react";
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

const testimonials = [
  {
    name: "Adebayo Ogunlade",
    role: "CEO, PayFlow Technologies",
    content: "Ashflex transformed our online presence completely. The new website generates 3x more leads than our old one. Their attention to detail and strategic approach is unmatched.",
    rating: 5,
  },
  {
    name: "Chioma Nwosu",
    role: "Marketing Director, Lagos Luxury Homes",
    content: "Working with Ashflex was a game-changer. They understood our brand perfectly and delivered a website that our clients absolutely love. Property inquiries doubled in the first month.",
    rating: 5,
  },
  {
    name: "Dr. Ibrahim Hassan",
    role: "Director, MedCare Nigeria",
    content: "The healthcare portal they built for us is exceptional. Patient bookings increased by 200%, and our staff efficiency has improved dramatically. Highly recommended!",
    rating: 5,
  },
  {
    name: "Funke Adeyemi",
    role: "Founder, Ankara Luxe",
    content: "Our e-commerce store went from zero to ₦50M monthly revenue in 6 months. Ashflex's expertise in conversion optimization and mobile design made all the difference.",
    rating: 5,
  },
  {
    name: "Emeka Okonkwo",
    role: "Principal, Adeyemi & Partners",
    content: "Our law firm's new website positions us as the premium choice in Lagos. Consultation requests have increased by 80%, and we now rank on the first page of Google.",
    rating: 5,
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
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="group">
      <div className="text-4xl md:text-5xl font-extrabold text-white leading-none" style={{ fontFamily: "var(--font-heading)", transitionDelay: delay }}>
        {count}{suffix}
      </div>
      <div className="mt-2 h-px w-10 bg-gradient-primary group-hover:w-16 transition-all duration-500" />
      <div className="mt-2 text-white/55 text-sm">{label}</div>
    </div>
  );
}

function MarqueeRow({ items, reverse, accent }: { items: string[]; reverse?: boolean; accent: string }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap py-5" aria-hidden="true">
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
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredPortfolio, setHoveredPortfolio] = useState<number | null>(null);
  const filteredPortfolio = activeCategory === "All"
    ? portfolioItems.slice(0, 6)
    : portfolioItems.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <div className="min-h-screen overflow-x-clip" ref={sectionRef}>
      {/* ============ HERO — editorial split with kinetic type ============ */}
      <section className="relative min-h-screen max-h-[900px] flex items-center bg-brand noise-texture overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
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
        <div className="absolute top-28 left-4 md:left-10 z-10 hidden md:flex items-center gap-3 rotate-[-90deg] origin-top-left text-white/40 text-xs uppercase tracking-[0.3em]" aria-hidden="true">
          <span className="inline-block w-8 h-px bg-white/40" /> Ashflex Studio · Lagos
        </div>

        <div className="container relative z-10 pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left: copy */}
            <div className="lg:col-span-7">
              <div className="scroll-reveal inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/15 text-white/75 text-sm mb-8 backdrop-blur-sm">
                <Sparkles size={15} className="text-brand-cyan" />
                <span>Nigeria's Leading Web Design Agency</span>
              </div>

              <h1 className="scroll-reveal text-5xl md:text-6xl lg:text-[5.4rem] font-extrabold text-white leading-[0.98] tracking-tight mb-8" style={{ fontFamily: "var(--font-heading)" }}>
                We craft{" "}
                <span className="relative inline-block">
                  <span className="text-gradient">websites</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-accent" viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M0 8 Q 60 2 120 7 T 200 6" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
                  </svg>
                </span>
                <br />
                that turn clicks into{" "}
                <span className="text-outline">customers.</span>
              </h1>

              <p className="scroll-reveal text-base md:text-xl text-white/65 max-w-xl leading-relaxed mb-8" style={{ transitionDelay: "120ms" }}>
                High-performance design, conversion-first strategy, and pixel-perfect development for businesses that want to be seen, trusted, and chosen.
              </p>

              <div className="scroll-reveal flex flex-col sm:flex-row items-start gap-4 mb-10" style={{ transitionDelay: "220ms" }}>
                <Link href="/contact">
                  <span className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-primary rounded-2xl hover:shadow-2xl hover:shadow-brand-accent/25 hover:-translate-y-0.5 transition-all duration-300">
                    Get Free Quote
                    <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link href="/portfolio">
                  <span className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white/85 border border-white/25 rounded-2xl hover:bg-white/5 hover:border-white/50 transition-all duration-300">
                    <MonitorPlay size={19} /> View Portfolio
                  </span>
                </Link>
              </div>

              {/* stats band */}
              <div className="scroll-reveal grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 max-w-2xl" style={{ transitionDelay: "320ms" }}>
                <CounterStat value={250} suffix="+" label="Projects Delivered" />
                <CounterStat value={98} suffix="%" label="Client Satisfaction" delay="100ms" />
                <CounterStat value={10} suffix="+" label="Years Experience" delay="200ms" />
                <CounterStat value={15} suffix="+" label="Countries Served" delay="300ms" />
              </div>
            </div>

            {/* Right: floating mockup cards — bounded stack sized to fit laptop viewports */}
            <div className="lg:col-span-5 hidden lg:block relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-white/10" aria-hidden="true" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[430px] h-[430px] rounded-full border border-white/5 rotate-12" aria-hidden="true" />

              {/* browser card */}
              <div className="absolute top-2 left-0 scroll-reveal-right w-60 glass-card-dark border-white/15 p-0 overflow-hidden" style={{ transitionDelay: "150ms" }}>
                <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/10">
                  <span className="h-2 w-2 rounded-full bg-brand-accent/80" />
                  <span className="h-2 w-2 rounded-full bg-brand-cyan/80" />
                  <span className="h-2 w-2 rounded-full bg-brand-secondary/80" />
                  <span className="ml-2 text-[10px] text-white/40 truncate">ashflexwebdesign.com</span>
                </div>
                <div className="p-4">
                  <div className="h-1.5 w-20 rounded bg-gradient-primary mb-2.5" />
                  <div className="h-2 w-full rounded bg-white/10 mb-1.5" />
                  <div className="h-2 w-4/5 rounded bg-white/10 mb-3" />
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="h-10 rounded-lg bg-gradient-to-br from-brand-secondary/30 to-brand-cyan/20 border border-white/10" />
                    <div className="h-10 rounded-lg bg-gradient-to-br from-brand-accent/25 to-brand-secondary/20 border border-white/10" />
                    <div className="h-10 rounded-lg bg-gradient-to-br from-brand-cyan/25 to-brand-accent/15 border border-white/10" />
                  </div>
                </div>
              </div>

              {/* metric cards */}
              {heroMockups.map((m, i) => (
                <div
                  key={m.title}
                  className={`absolute glass-card-dark border-white/15 px-4 py-3 scroll-reveal-right ${m.cls}`}
                  style={{
                    top: m.top,
                    left: m.left,
                    transitionDelay: `${(i + 2) * 130}ms`,
                    animation: `${i % 2 === 0 ? "float-slow" : "float-slow-delayed"}`,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`h-2 w-2 rounded-full ${m.accent}`} />
                    <span className="text-white/55 text-[11px] uppercase tracking-wider">{m.title}</span>
                  </div>
                  <div className="mt-1 text-xl font-extrabold text-white" style={{ fontFamily: "var(--font-heading)" }}>{m.value}</div>
                </div>
              ))}

              {/* phone card — hidden on shorter laptop viewports */}
              <div className="absolute top-[270px] right-2 w-24 glass-card-dark border-white/15 p-2.5 scroll-reveal-right rotate-3 hidden xl:block" style={{ transitionDelay: "600ms" }} aria-hidden="true">
                <div className="h-1.5 w-8 rounded bg-gradient-primary mb-2 mx-auto" />
                <div className="h-1 w-full rounded bg-white/10 mb-1.5" />
                <div className="h-1 w-4/5 rounded bg-white/10 mb-2.5" />
                <div className="h-12 rounded-lg bg-gradient-to-br from-brand-secondary/35 to-brand-cyan/25 border border-white/10" />
              </div>
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

      {/* ============ TRUSTED BY — oversized outline band ============ */}
      <section className="py-14 bg-muted/40 relative">
        <div className="container">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 font-medium">Trusted by leading brands across Nigeria & beyond</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 text-center">
            {["PayFlow", "MedCare", "Luxury Homes", "Wanderlust", "Ankara Luxe", "Adeyemi", "Green Earth", "TechHub"].map((name, i) => (
              <span
                key={name}
                className="scroll-reveal text-2xl md:text-3xl font-bold text-foreground/25 hover:text-brand-secondary/60 transition-colors duration-300"
                style={{ fontFamily: "var(--font-heading)", transitionDelay: `${i * 50}ms` }}
              >
                {name}
              </span>
            ))}
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
                Explore all 16 services
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
      <section className="py-28 relative">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              How we <span className="text-gradient">work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
      <section className="py-28 bg-muted/30 relative">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Work</p>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                Featured <span className="text-gradient">portfolio</span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {["All", "Corporate", "Real Estate", "Healthcare", "E-commerce", "Law Firms"].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? "bg-gradient-primary text-white shadow-lg shadow-brand-secondary/25"
                      : "bg-white text-foreground/70 hover:text-foreground border border-border hover:border-brand-secondary/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* list rows */}
          <div className="relative">
            {filteredPortfolio.map((item, i) => (
              <Link
                key={item.id}
                href={`/portfolio/${item.id}`}
                className="group relative flex items-center gap-6 md:gap-10 py-6 border-b border-border/60 hover:bg-card/50 transition-colors duration-300"
                onMouseEnter={() => setHoveredPortfolio(item.id)}
                onMouseLeave={() => setHoveredPortfolio(null)}
              >
                <span className="hidden md:flex shrink-0 w-12 text-lg font-extrabold text-muted-foreground/40 group-hover:text-brand-secondary group-hover:text-gradient transition-all" style={{ fontFamily: "var(--font-heading)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-secondary/10 text-brand-secondary">{item.category}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold truncate group-hover:text-gradient transition-all" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-1 mt-1">{item.challenge}</p>
                </div>
                <span className="hidden sm:flex shrink-0 w-10 h-10 rounded-full border border-border group-hover:bg-gradient-primary group-hover:border-transparent group-hover:text-white text-muted-foreground items-center justify-center transition-all duration-300">
                  <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                {/* hover image peek */}
                <div
                  className={`hidden lg:block absolute right-24 top-1/2 -translate-y-1/2 w-56 h-40 rounded-2xl overflow-hidden border border-border/70 shadow-xl transition-all duration-300 pointer-events-none ${hoveredPortfolio === item.id ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}`}
                  style={{ zIndex: hoveredPortfolio === item.id ? 30 : 0 }}
                  aria-hidden="true"
                >
                  <img src={item.image} alt="" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </Link>
            ))}
            {filteredPortfolio.length === 0 && (
              <div className="py-16 text-center text-muted-foreground">No projects match this filter — try another category.</div>
            )}
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

          <Carousel className="max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <Card className="glass-card-dark border-0 p-9">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-1 mb-5">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} size={20} fill="#FBBF24" className="text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xl md:text-2xl text-white/85 leading-relaxed mb-7 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                        "{t.content}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-lg" style={{ fontFamily: "var(--font-heading)" }}>
                          {t.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-white font-bold">{t.name}</p>
                          <p className="text-white/50 text-sm">{t.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-white/20 text-white hover:bg-white/10" />
            <CarouselNext className="border-white/20 text-white hover:bg-white/10" />
          </Carousel>
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

          <div className="text-center mt-8">
            <Link href="/contact">
              <span className="text-brand-secondary font-medium hover:underline">
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
              <a href="https://wa.me/2348023138892" target="_blank" rel="noopener noreferrer">
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
