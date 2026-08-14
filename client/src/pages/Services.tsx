import { Link } from "wouter";
import { Link as WLink } from "wouter";
import {
  ArrowRight, Sparkles, Palette, Code, LayoutGrid, ShoppingCart, Smartphone, PenTool,
  Search, Target, Share2, FileText, Wrench, Zap, Server, Plug, Bot, Settings,
  ChevronRight, CheckCircle2, Shield, Headset,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Palette, Code, LayoutGrid, ShoppingCart, Smartphone, PenTool,
  Search, Target, Share2, FileText, Wrench, Zap, Server, Plug,
  Bot, Settings,
};

/* Grouped so the page reads like a modern editorial service catalog */
type ServiceGroup = {
  id: string;
  label: string;
  kicker: string;
  slugIds: string[];
  accent: string;
};

const serviceGroups: ServiceGroup[] = [
  {
    id: "design",
    label: "Design",
    kicker: "Design & Experience",
    slugIds: ["website-design", "ui-ux-design", "branding-logo-design"],
    accent: "text-brand-accent",
  },
  {
    id: "development",
    label: "Development",
    kicker: "Build & Launch",
    slugIds: ["website-development", "wordpress-development", "ecommerce-development", "custom-business-systems"],
    accent: "text-brand-secondary",
  },
  {
    id: "marketing",
    label: "Marketing",
    kicker: "Grow & Reach",
    slugIds: ["seo-services", "google-ads", "social-media-marketing", "content-writing"],
    accent: "text-brand-accent",
  },
  {
    id: "infrastructure",
    label: "Infrastructure & AI",
    kicker: "Power & Automate",
    slugIds: ["website-maintenance", "speed-optimization", "hosting-domain", "api-integration", "ai-automation"],
    accent: "text-brand-cyan",
  },
];

function ServiceCard({ service, index, accent }: { service: (typeof services)[number]; index: number; accent: string }) {
  const Icon = iconMap[service.icon] || Code;
  return (
    <Link href={`/services/${service.slug}`}>
      <div className="bento-reveal group glass-card-dark p-7 rounded-3xl h-full relative overflow-hidden cursor-pointer">
        {/* subtle gradient wash behind the icon */}
        <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/5 blur-2xl transition-all duration-500 group-hover:bg-brand-accent/20" aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-5">
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gradient-primary transition-colors duration-300">
              <Icon className="text-white/80 group-hover:text-white transition-colors duration-300" size={26} />
            </div>
            <span className="text-white/35 font-mono text-xs tracking-wider">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2.5" style={{ fontFamily: "var(--font-heading)" }}>{service.title}</h3>
          <p className="text-white/55 text-sm leading-relaxed mb-4">{service.description}</p>
          <ul className="space-y-2 mb-5">
            {service.features.slice(0, 4).map((f) => (
              <li key={f} className="text-xs text-white/65 flex items-center gap-2">
                <span className={`w-1 h-1 rounded-full bg-gradient-primary`} />
                {f}
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <span className="text-sm font-semibold text-white/90">{service.price}</span>
            <span className={`inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.15em] ${accent} opacity-70 group-hover:opacity-100 transition-opacity`}>
              Details <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-clip" ref={sectionRef}>
      {/* ============ Banner (untouched) ============ */}
      <PageHeader
        title="Our Services"
        description="Comprehensive digital solutions to help your business thrive online. From design to development, SEO to marketing — we've got you covered."
        breadcrumb={[{ label: "Services", href: "/services" }]}
      />

      {/* ============ Marquee strip ============ */}
      <div className="relative bg-gradient-brand border-y border-white/10 overflow-hidden py-3.5">
        <div className="marquee-track whitespace-nowrap" aria-hidden="true">
          {[...Array(2)].map((_, r) => (
            <span key={r} className="flex items-center gap-8 pr-8 text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
              <span>Web Design</span><Sparkles size={14} className="text-brand-accent" />
              <span>Development</span><Sparkles size={14} className="text-brand-cyan" />
              <span>Brand Identity</span><Sparkles size={14} className="text-brand-secondary" />
              <span>SEO</span><Sparkles size={14} className="text-brand-accent" />
              <span>E-commerce</span><Sparkles size={14} className="text-brand-cyan" />
              <span>AI Automation</span><Sparkles size={14} className="text-brand-secondary" />
            </span>
          ))}
        </div>
      </div>

      {/* ============ Intro — asymmetric editorial ============ */}
      <section className="py-16 md:py-20 relative">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5 scroll-reveal">
              <p className="text-brand-secondary font-semibold text-sm uppercase tracking-[0.25em] mb-4">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                One studio, <span className="text-gradient">every digital service</span> your business needs
              </h2>
              <div className="mt-5 h-1 w-24 grain-line" />
              <p className="mt-6 text-base md:text-lg text-foreground/70 leading-relaxed">
                From pixel-perfect design to scalable development, growth marketing to 24/7 infrastructure — we deliver end-to-end digital services with a single accountable team.
              </p>
            </div>
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="scroll-reveal flex items-start gap-3.5 glass-card p-5 rounded-2xl" style={{ transitionDelay: "60ms" }}>
                  <Shield size={22} className="text-brand-secondary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>Transparent pricing</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Clear packages with no hidden costs — know exactly what you're paying for.</p>
                  </div>
                </div>
                <div className="scroll-reveal flex items-start gap-3.5 glass-card p-5 rounded-2xl" style={{ transitionDelay: "120ms" }}>
                  <Headset size={22} className="text-brand-accent mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>Ongoing support</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Dedicated project managers and responsive support after every launch.</p>
                  </div>
                </div>
                <div className="scroll-reveal flex items-start gap-3.5 glass-card p-5 rounded-2xl" style={{ transitionDelay: "180ms" }}>
                  <Sparkles size={22} className="text-brand-cyan mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>Modern tech stack</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">Cutting-edge frameworks, AI tooling, and performance-first engineering.</p>
                  </div>
                </div>
                <div className="scroll-reveal flex items-start gap-3.5 glass-card p-5 rounded-2xl" style={{ transitionDelay: "240ms" }}>
                  <CheckCircle2 size={22} className="text-brand-secondary mt-0.5 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>Proven results</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">250+ projects delivered with a 98% client satisfaction rate.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Service groups — bento-style catalog ============ */}
      <section className="pb-20">
        <div className="container space-y-16">
          {serviceGroups.map((group) => {
            const items = services.filter((s) => group.slugIds.includes(s.id));
            return (
              <div key={group.id}>
                <div className="scroll-reveal flex items-center gap-4 mb-7">
                  <p className={`font-semibold text-sm uppercase tracking-[0.25em] ${group.accent}`}>{group.kicker}</p>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" aria-hidden="true" />
                  <span className="text-muted-foreground text-xs font-mono">{items.length} services</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {items.map((service, i) => (
                    <ServiceCard key={service.id} service={service} index={services.indexOf(service)} accent={group.accent} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ============ CTA — dark editorial band ============ */}
      <section className="relative bg-brand noise-texture overflow-hidden border-y border-white/10">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="glow-orb absolute top-0 left-1/4 w-[420px] h-[420px] rounded-full bg-brand-secondary" style={{ opacity: 0.28 }} />
          <div className="glow-orb absolute bottom-0 right-1/4 w-[340px] h-[340px] rounded-full bg-brand-accent" style={{ opacity: 0.2 }} />
        </div>
        <div className="container relative z-10 py-20 md:py-24 text-center">
          <p className="scroll-reveal text-white/50 font-semibold text-sm uppercase tracking-[0.25em] mb-5">Not sure where to start?</p>
          <h2 className="scroll-reveal text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6" style={{ fontFamily: "var(--font-heading)", transitionDelay: "80ms" }}>
            Let's pick the <span className="text-gradient">perfect solution</span> for your business
          </h2>
          <p className="scroll-reveal text-white/60 max-w-xl mx-auto mb-10 text-base md:text-lg" style={{ transitionDelay: "160ms" }}>
            Schedule a free consultation and we'll recommend the right services for your goals and budget.
          </p>
          <div className="scroll-reveal flex flex-col sm:flex-row items-center justify-center gap-4" style={{ transitionDelay: "240ms" }}>
            <WLink href="/contact">
              <span className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-primary rounded-2xl hover:shadow-2xl hover:shadow-brand-accent/25 hover:-translate-y-0.5 transition-all duration-300">
                Get Free Consultation
                <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </WLink>
            <WLink href="/pricing">
              <span className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white/85 border border-white/25 rounded-2xl hover:bg-white/5 hover:border-white/50 transition-all duration-300">
                View Pricing
              </span>
            </WLink>
          </div>
        </div>
      </section>
    </div>
  );
}
