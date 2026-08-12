import { Link } from "wouter";
import {
  Palette, Code, LayoutGrid, ShoppingCart, Smartphone, PenTool,
  Search, Target, Share2, FileText, Wrench, Zap, Server, Plug,
  Bot, Settings, ChevronRight, Star, ArrowRight, CheckCircle,
  MessageSquare, Phone, Users, Award, Clock, Globe, Sparkles,
  Layers, Shield, Rocket, BarChart3, Headphones
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
import { Button } from "@/components/ui/button";
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

function HeartPulse(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>; }
function GraduationCap(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>; }
function Building2(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>; }
function Landmark(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 22h18"/><path d="M6 18v4"/><path d="M10 18v4"/><path d="M14 18v4"/><path d="M18 18v4"/><path d="M3 18h18"/><path d="M3 11V9a9 9 0 0 1 18 0v2"/><path d="M12 2L3 9h18z"/></svg>; }
function Hotel(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/><path d="M6 18v-2"/><path d="M10 18v-2"/><path d="M14 18v-2"/><path d="M18 18v-2"/><path d="M6 14v-2"/><path d="M10 14v-2"/><path d="M14 14v-2"/><path d="M18 14v-2"/></svg>; }
function Truck(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>; }
function HandHeart(props: any) { return <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"/><path d="m7 20 1.6-1.4c.34-.44.75-.81 1.24-1.1"/><path d="M4 11.5V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v13"/><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h3"/></svg>; }

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-heading)" }}>
        {count}{suffix}
      </div>
      <div className="text-white/60 text-sm">{label}</div>
    </div>
  );
}

export default function Home() {
  const sectionRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredPortfolio = activeCategory === "All"
    ? portfolioItems.slice(0, 6)
    : portfolioItems.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <div className="min-h-screen" ref={sectionRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0F172A] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90"
          style={{ backgroundImage: "url('/manus-storage/ashflex-hero-background_ee4a0039.png')" }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.96)_0%,rgba(15,23,42,0.88)_42%,rgba(15,23,42,0.54)_72%,rgba(15,23,42,0.68)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.30)_0%,rgba(15,23,42,0.10)_46%,rgba(15,23,42,0.68)_100%)]" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-secondary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-accent/10 rounded-full blur-[100px]" />
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="container relative z-10 pt-24 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm mb-8 backdrop-blur-sm">
              <Sparkles size={16} className="text-brand-accent" />
              <span>Nigeria's Leading Web Design Agency</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-heading)" }}>
              Websites That Generate{" "}
              <span className="text-gradient">More Leads, Sales & Growth</span>
            </h1>

            <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              We build high-performance websites that help businesses increase visibility, improve credibility, and convert visitors into paying customers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-xl hover:shadow-brand-secondary/25 transition-all duration-300 animate-pulse-glow">
                  Get Free Quote <ArrowRight size={20} />
                </span>
              </Link>
              <Link href="/portfolio">
                <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-xl hover:bg-white/5 hover:border-white/40 transition-all duration-300">
                  View Portfolio <ChevronRight size={20} />
                </span>
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <CounterStat value={250} suffix="+" label="Projects Delivered" />
              <CounterStat value={98} suffix="%" label="Client Satisfaction" />
              <CounterStat value={10} suffix="+" label="Years Experience" />
              <CounterStat value={15} suffix="+" label="Countries Served" />
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-16 bg-muted/50">
        <div className="container text-center">
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">Trusted by Leading Brands</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
            {["PayFlow", "MedCare", "Luxury Homes", "Wanderlust", "Ankara Luxe", "Adeyemi", "Green Earth"].map((name) => (
              <span key={name} className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From design to development, SEO to marketing — we offer comprehensive digital solutions for businesses of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service, i) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <div key={service.id} className="scroll-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                  <Link href={`/services/${service.slug}`}>
                    <Card className="glass-card h-full border-0 p-6 hover-lift">
                      <CardContent className="p-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center mb-4">
                          <Icon className="text-brand-secondary" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                        <div className="mt-4 flex items-center text-brand-secondary text-sm font-medium">
                          Learn More <ArrowRight size={16} className="ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link href="/services">
              <span className="inline-flex items-center gap-2 text-brand-secondary font-semibold hover:gap-3 transition-all">
                View All 16 Services <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-[80px]" />
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">Why Ashflex</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Why Clients <span className="text-brand-accent">Choose Us</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Layers, title: "Strategy First", desc: "Every project begins with a thorough strategic analysis to ensure maximum ROI." },
              { icon: Sparkles, title: "Premium Design", desc: "Award-winning designs that combine aesthetics with conversion optimization." },
              { icon: Rocket, title: "Fast Performance", desc: "Optimized for speed with Google PageSpeed scores of 90+ on all devices." },
              { icon: Search, title: "SEO Ready", desc: "Built from the ground up with SEO best practices for organic growth." },
              { icon: Smartphone, title: "Mobile First", desc: "Responsive designs that deliver exceptional experiences on every screen." },
              { icon: Headphones, title: "Ongoing Support", desc: "Dedicated support team ensuring your website stays updated and secure." },
            ].map((item, i) => (
              <div key={i} className="scroll-reveal glass-card-dark p-8" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Process</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              How We <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our proven 7-step process ensures every project is delivered on time, on budget, and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="glass-card p-6 h-full border-0">
                  <div className="text-5xl font-bold text-brand-secondary/10 mb-4" style={{ fontFamily: "var(--font-heading)" }}>{step.step}</div>
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Work</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Featured <span className="text-gradient">Portfolio</span>
            </h2>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {["All", "Corporate", "Real Estate", "Healthcare", "E-commerce", "Law Firms"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-primary text-white shadow-lg shadow-brand-secondary/25"
                    : "bg-white text-foreground/70 hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPortfolio.map((item, i) => (
              <div key={item.id} className="scroll-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <Link href={`/portfolio/${item.id}`}>
                  <Card className="glass-card border-0 overflow-hidden hover-lift">
                    <div className="bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-cyan p-[2px]">
                      <div className="aspect-video overflow-hidden bg-brand">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-secondary/10 text-brand-secondary">{item.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.challenge}</p>
                      <div className="mt-3 text-brand-secondary text-sm font-medium flex items-center gap-1">
                        View Case Study <ArrowRight size={16} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio">
              <span className="inline-flex items-center gap-2 text-brand-secondary font-semibold hover:gap-3 transition-all">
                View All Projects <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Industries</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Industries We <span className="text-gradient">Serve</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in delivering tailored digital solutions across diverse industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div key={ind.name} className="scroll-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <Link href={`/industries/${ind.slug}`}>
                  <Card className="glass-card border-0 p-6 text-center hover-lift cursor-pointer">
                    <CardContent className="p-0">
                      <ind.icon className="w-10 h-10 mx-auto mb-3 text-brand-secondary" />
                      <h3 className="text-base font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{ind.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/industries">
              <span className="inline-flex items-center gap-2 text-brand-secondary font-semibold hover:gap-3 transition-all">
                View All Industries <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-brand-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <p className="text-brand-accent font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</p>
            <h2 className="text-3xl md:text-5xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
              What Our <span className="text-brand-accent">Clients Say</span>
            </h2>
          </div>

          <Carousel className="max-w-4xl mx-auto" opts={{ loop: true }}>
            <CarouselContent>
              {testimonials.map((t, i) => (
                <CarouselItem key={i}>
                  <Card className="glass-card-dark border-0 p-8">
                    <CardContent className="p-0">
                      <div className="flex items-center gap-1 mb-4">
                        {Array.from({ length: t.rating }).map((_, j) => (
                          <Star key={j} size={20} fill="#FBBF24" className="text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-lg text-white/80 leading-relaxed mb-6 italic">"{t.content}"</p>
                      <div>
                        <p className="text-white font-semibold">{t.name}</p>
                        <p className="text-white/50 text-sm">{t.role}</p>
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

      {/* Pricing */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Transparent <span className="text-gradient">Pricing</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that fits your business needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, i) => (
              <div key={plan.name} className="scroll-reveal" style={{ transitionDelay: `${i * 80}ms` }}>
                <Card className={`h-full border-0 p-8 ${plan.popular ? "bg-gradient-brand text-white shadow-2xl shadow-brand-secondary/20 scale-105" : "glass-card"}`}>
                  <CardContent className="p-0">
                    {plan.popular && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold bg-brand-accent text-white rounded-full mb-4">Most Popular</span>
                    )}
                    <h3 className={`text-2xl font-bold mb-1 ${plan.popular ? "text-white" : ""}`} style={{ fontFamily: "var(--font-heading)" }}>{plan.name}</h3>
                    <p className={`text-sm mb-6 ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>{plan.description}</p>
                    <div className="mb-6">
                      <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-foreground"}`} style={{ fontFamily: "var(--font-heading)" }}>{plan.price}</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((f) => (
                        <li key={f} className={`flex items-center gap-2 text-sm ${plan.popular ? "text-white/80" : "text-foreground/70"}`}>
                          <CheckCircle size={16} className={plan.popular ? "text-brand-accent" : "text-brand-secondary"} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <span className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
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
              <span className="inline-flex items-center gap-2 text-brand-secondary font-semibold hover:gap-3 transition-all">
                View All Packages & Compare <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-muted/30">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">FAQ</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.slice(0, 10).map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="glass-card border-0 px-6">
                <AccordionTrigger className="text-base font-medium hover:no-underline">{faq.question}</AccordionTrigger>
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

      {/* Final CTA */}
      <section className="py-24 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-brand-secondary/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-brand-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Ready to <span className="text-brand-accent">Grow Your Business</span>?
          </h2>
          <p className="text-lg text-white/70 max-w-xl mx-auto mb-10">
            Let's discuss your project and create a website that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand bg-white rounded-xl hover:shadow-xl transition-all duration-300">
                Get Free Consultation <ArrowRight size={20} />
              </span>
            </Link>
            <a href="https://wa.me/2348001234567" target="_blank" rel="noopener noreferrer">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/20 rounded-xl hover:bg-white/5 transition-all duration-300">
                <MessageSquare size={20} /> Chat on WhatsApp
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
