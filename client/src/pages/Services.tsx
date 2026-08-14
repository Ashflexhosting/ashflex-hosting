import { Link } from "wouter";
import { Link as WLink } from "wouter";
import {
  ArrowRight, ArrowUp, Sparkles, Palette, Code, LayoutGrid, ShoppingCart, Smartphone, PenTool,
  Search, Target, Share2, FileText, Wrench, Zap, Server, Plug, Bot, Settings,
  ChevronRight, CheckCircle2, Shield, Headset, Loader2, Paperclip, X, ImageIcon,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { services } from "@/data/services";
import { trpc } from "@/lib/trpc";
import { buildMailtoLink } from "@/lib/mailto";

/* Custom eased glide scroll — decelerating ease-out over ~700ms, offsetting the sticky nav height */
function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navBar = document.getElementById("site-header");
  const navHeight = navBar ? navBar.offsetHeight : 76;
  const stickyHeight = 64; // CategoryNav height
  const targetY = el.getBoundingClientRect().top + window.scrollY - navHeight - stickyHeight - 8;
  const startY = window.scrollY;
  const delta = targetY - startY;
  const duration = Math.min(900, Math.max(550, Math.abs(delta) / 1.6));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo(0, targetY);
    return;
  }
  let raf = 0;
  let start: number | null = null;
  const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);
  const step = (ts: number) => {
    if (!start) start = ts;
    const t = Math.min(1, (ts - start) / duration);
    window.scrollTo(0, startY + delta * easeOutQuart(t));
    if (t < 1) raf = requestAnimationFrame(step);
  };
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(step);
}

/* Sticky category navigation — glass pill tabs that track the active section while scrolling */
function CategoryNav({ groups, activeId }: { groups: ServiceGroup[]; activeId: string }) {
  return (
    <div className="sticky top-[68px] md:top-[76px] z-40 bg-background/85 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center gap-2 overflow-x-auto py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {groups.map((g) => {
          const active = g.id === activeId;
          return (
            <button
              key={g.id}
              type="button"
              onClick={() => scrollToId(`services-${g.id}`)}
              aria-label={`Jump to ${g.kicker}`}
              className={`whitespace-nowrap shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold border transition-all duration-300 ${
                active
                  ? "bg-gradient-primary text-white border-transparent shadow-lg shadow-brand-secondary/25"
                  : "bg-card text-foreground/70 border-border hover:border-brand-secondary/50 hover:text-foreground"
              }`}
            >
              {g.label}
              {active && <ChevronRight size={14} className="opacity-70" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

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

/* Filler card for the Design & Experience row — brand-philosophy visual that balances the 4-column grid */
/* Category highlight cards — brand-gradient visuals that close every 4-column group row consistently.
   Each card carries a theme message and a standout stat, echoing the original "Our Promise" card. */
const groupHighlights: Record<string, { kicker: string; title: string; message: string; stat: string; bg: string; orbA: string; orbB: string }> = {
  design: {
    kicker: "Our Promise",
    title: "Designed to be loved. Built to perform.",
    message: "Every project starts with your goals and ends with measurable results — beauty and performance, never one without the other.",
    stat: "250+ projects crafted",
    bg: "linear-gradient(135deg, #0757F7, #F20549)",
    orbA: "rgba(255,255,255,0.18)",
    orbB: "#33C9D4",
  },
  development: {
    kicker: "Our Standard",
    title: "Code that ships fast and scales further.",
    message: "Clean architecture, tested releases, and performance budgets baked into every build — so your site grows with your business.",
    stat: "99.9% uptime target",
    bg: "linear-gradient(135deg, #071B5A, #0757F7)",
    orbA: "rgba(255,255,255,0.15)",
    orbB: "#F20549",
  },
  marketing: {
    kicker: "Our Approach",
    title: "Growth you can measure, not just promise.",
    message: "Every campaign is tied to clear KPIs — rankings, leads, and revenue — with transparent reporting on what works.",
    stat: "4.5★ average client rating",
    bg: "linear-gradient(135deg, #F20549, #9B1C8C)",
    orbA: "rgba(255,255,255,0.15)",
    orbB: "#33C9D4",
  },
  infrastructure: {
    kicker: "Our Guarantee",
    title: "Always on. Always protected. Always faster.",
    message: "Round-the-clock monitoring, backups, and AI-powered automation keep your business running while you focus on it.",
    stat: "24/7 support available",
    bg: "linear-gradient(135deg, #0B3D91, #33C9D4)",
    orbA: "rgba(255,255,255,0.15)",
    orbB: "#F20549",
  },
};

function HighlightCard({ groupId }: { groupId: string }) {
  const h = groupHighlights[groupId] ?? groupHighlights.design;
  return (
    <WLink href="/contact">
      <div
        className="highlight-card bento-reveal rounded-3xl h-full relative overflow-hidden p-7 text-white"
        style={{ transitionDelay: "180ms" }}
        aria-label={`${h.kicker}: ${h.title}`}
      >
        {/* layered brand gradient background */}
        <div className="absolute inset-0" style={{ background: h.bg }} aria-hidden="true" />
        <div className="absolute inset-0 opacity-25 noise-texture" aria-hidden="true" />
        <div className="glow-orb absolute -bottom-16 -right-16 w-56 h-56 rounded-full bg-white" style={{ opacity: 0.18 }} aria-hidden="true" />
        <div className="glow-orb absolute -top-14 -left-14 w-40 h-40 rounded-full" style={{ opacity: 0.35, background: h.orbB }} aria-hidden="true" />
        {/* hover glow halo that brightens on hover */}
        <div className="glow-orb absolute inset-0 rounded-3xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-500" aria-hidden="true" />
        {/* floating geometric accents */}
        <div className="float-slow absolute top-7 right-7 w-8 h-8 rounded-full border border-white/60" aria-hidden="true" />
        <div className="float-slow-delayed absolute top-20 right-16 w-3 h-3 rounded-full bg-white/80" aria-hidden="true" />
        <div className="float-slow absolute bottom-10 left-8 w-5 h-5 rounded-md border border-white/50 rotate-45" aria-hidden="true" />
        <div className="relative z-10 flex flex-col justify-between h-full">
          <div>
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-white/75 mb-4">{h.kicker}</p>
            <h3 className="text-xl font-extrabold leading-snug mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              {h.title}
            </h3>
            <p className="text-sm text-white/80 leading-relaxed mb-5">{h.message}</p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-white/25">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2" aria-hidden="true">
                <span className="w-7 h-7 rounded-full bg-white/35 border border-white/50" />
                <span className="w-7 h-7 rounded-full bg-white/20 border border-white/50" />
                <span className="w-7 h-7 rounded-full bg-white/45 border border-white/50" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/90">{h.stat}</span>
            </div>
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-[#0B3D91] text-xs font-bold uppercase tracking-[0.12em] shadow-lg shadow-black/20 group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
              Learn More <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </span>
          </div>
        </div>
      </div>
    </WLink>
  );
}

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
  const navRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string>(serviceGroups[0].id);

  /* Scrollspy — highlight the tab whose section is nearest to the top of the viewport while scrolling.
     When the page is at/near the top or below all sections, fall back to the first group. */
  useEffect(() => {
    const findActive = () => {
      const viewportTop = window.scrollY;
      const navH = document.getElementById("site-header")?.offsetHeight ?? 76;
      const probe = viewportTop + navH + 120;
      let candidate = serviceGroups[0].id;
      for (const g of serviceGroups) {
        const el = document.getElementById(`services-${g.id}`);
        if (el && el.offsetTop <= probe) candidate = g.id;
      }
      setActiveId(candidate);
    };
    findActive();
    window.addEventListener("scroll", findActive, { passive: true });
    window.addEventListener("resize", findActive);
    return () => {
      window.removeEventListener("scroll", findActive);
      window.removeEventListener("resize", findActive);
    };
  }, []);

  /* Back to Top — show after scrolling past the banner */
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 520);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Concise inquiry form at the bottom of the Services page */
  const [inquiry, setInquiry] = useState({ name: "", email: "", service: "", message: "" });
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [suggestion, setSuggestion] = useState("");
  const [suggestionReady, setSuggestionReady] = useState(false);
  const suggestionMutation = trpc.contact.messageSuggest.useMutation();

  /* Attachment — project briefs & reference images (PDF, DOCX, images up to 8 MB) */
  const [attachment, setAttachment] = useState<File | null>(null);
  const [attachmentError, setAttachmentError] = useState("");
  const [attachmentDataUrl, setAttachmentDataUrl] = useState("");
  const MAX_ATTACHMENT_BYTES = 8 * 1024 * 1024;
  const ALLOWED_EXTENSIONS = ["pdf", "docx", "doc", "pptx", "xlsx", "jpg", "jpeg", "png", "gif", "webp"];

  const handleAttachmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setAttachmentError("");
    if (!file) return;
    const ext = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!ALLOWED_EXTENSIONS.includes(ext)) {
      setAttachmentError("Unsupported file type. Please attach a PDF, Word document, or an image (JPG/PNG).");
      e.target.value = "";
      return;
    }
    if (file.size > MAX_ATTACHMENT_BYTES) {
      setAttachmentError("File is too large. Please attach a file under 8 MB.");
      e.target.value = "";
      return;
    }
    setAttachment(file);
    const reader = new FileReader();
    reader.onload = () => setAttachmentDataUrl(typeof reader.result === "string" ? reader.result : "");
    reader.readAsDataURL(file);
  };
  const removeAttachment = () => {
    setAttachment(null);
    setAttachmentDataUrl("");
    setAttachmentError("");
  };

  /* Real-time field validation — errors surface as the user types/blurs */
  const validate = (field: keyof typeof inquiry, value: string) => {
    if (field === "name") return value.trim() ? "" : "Name is required";
    if (field === "email") {
      if (!value.trim()) return "Email is required";
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "" : "Please enter a valid email";
    }
    if (field === "message") return value.trim() ? "" : "Message is required";
    return "";
  };
  const formErrors = {
    name: touched.name ? validate("name", inquiry.name) : "",
    email: touched.email ? validate("email", inquiry.email) : "",
    message: touched.message ? validate("message", inquiry.message) : "",
  };
  const isFormValid = Object.values(formErrors).every((e) => e === "");

  /* AI-powered message suggestion based on the selected service */
  const requestSuggestion = (service: string) => {
    if (!service || !suggestionMutation.isIdle) return;
    suggestionMutation.mutate(
      { service },
      {
        onSuccess: (data) => {
          if (data.suggestion) {
            setSuggestion(data.suggestion);
            setSuggestionReady(true);
          }
        },
      },
    );
  };
  const useSuggestion = () => {
    setInquiry((prev) => ({ ...prev, message: suggestion }));
    setTouched((prev) => ({ ...prev, message: true }));
    setSuggestionReady(false);
    setSuggestion("");
  };
  const inquiryMutation = trpc.contact.submit.useMutation({
    onSuccess: (_data, variables) => {
      setInquirySubmitted(true);
      toast.success("Message recorded! Opening your email app to send it to our inbox…");
      const link = buildMailtoLink({
        fullName: variables.fullName,
        email: variables.email,
        context: variables.service || undefined,
        message: variables.message,
      });
      window.location.href = link;
    },
    onSettled: () => {
      /* Clear the attachment after the attempt so the preview resets */
      removeAttachment();
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });

  const handleInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    /* Mark all fields touched so validation messages appear */
    setTouched({ name: true, email: true, message: true });
    if (!isFormValid) {
      toast.error("Please fix the highlighted fields before sending");
      return;
    }
    inquiryMutation.mutate({
      fullName: inquiry.name,
      email: inquiry.email,
      service: inquiry.service || undefined,
      message: inquiry.message,
      attachment: attachment
        ? {
            dataUrl: attachmentDataUrl,
            fileName: attachment.name,
            size: attachment.size,
          }
        : undefined,
    });
  };

  return (
    <div className="min-h-screen overflow-x-clip" ref={sectionRef}>
      {/* ============ Banner (untouched) ============ */}
      <PageHeader
        title="Our Services"
        description="Comprehensive digital solutions to help your business thrive online. From design to development, SEO to marketing — we've got you covered."
        breadcrumb={[{ label: "Services", href: "/services" }]}
      />

      {/* ============ Sticky category navigation ============ */}
      <div ref={navRef} className="relative z-40">
        <CategoryNav groups={serviceGroups} activeId={activeId} />
      </div>

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
      <section className="pb-20" id="services-catalog">
        <div className="container space-y-16">
          {serviceGroups.map((group) => {
            const items = services.filter((s) => group.slugIds.includes(s.id));
            return (
              <div key={group.id} id={`services-${group.id}`} className="scroll-mt-24">
                <div className="scroll-reveal flex items-center gap-4 mb-7">
                  <p className={`font-semibold text-sm uppercase tracking-[0.25em] ${group.accent}`}>{group.kicker}</p>
                  <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" aria-hidden="true" />
                  <span className="text-muted-foreground text-xs font-mono">{items.length} services</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {items.map((service) => (
                    <ServiceCard key={service.id} service={service} index={services.indexOf(service)} accent={group.accent} />
                  ))}
                  {items.length < 4 && <HighlightCard key={`highlight-${group.id}`} groupId={group.id} />}
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

      {/* ============ Concise inquiry form — capture leads after browsing ============ */}
      <section className="relative bg-navy noise-texture overflow-hidden" id="services-inquiry">
        <div className="container py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Have a project in mind?</p>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Tell us about your <span className="text-gradient">next step</span>
            </h2>
            <p className="text-foreground/60 text-sm md:text-base">Send a quick note after browsing our services — we reply within one business day.</p>
          </div>
          {inquirySubmitted ? (
            <div className="max-w-xl mx-auto glass-card rounded-2xl p-10 text-center animate-in fade-in zoom-in-95 slide-in-from-bottom-4 duration-500">
              <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Thanks for reaching out!</h3>
              <p className="text-foreground/65 text-sm">Your message has been recorded and we'll reply shortly at {inquiry.email || "your email"}.</p>
            </div>
          ) : (
            <form onSubmit={handleInquiry} className="max-w-xl mx-auto glass-card rounded-2xl p-6 md:p-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inq-name" className="text-xs font-semibold uppercase tracking-wide text-foreground/60 mb-1.5 block">Name *</label>
                  <input id="inq-name" type="text" value={inquiry.name} onChange={(e) => {
                      setInquiry({ ...inquiry, name: e.target.value });
                      setTouched((prev) => ({ ...prev, name: true }));
                    }}
                    onBlur={() => setTouched((prev) => ({ ...prev, name: true }))}
                    placeholder="Your name" required
                    className={`w-full px-4 py-3 rounded-xl bg-card border text-sm focus:outline-none focus:ring-1 transition ${
                      formErrors.name ? "border-destructive focus:border-destructive focus:ring-destructive/40" : "border-border focus:border-brand-secondary focus:ring-brand-secondary/40"
                    }`} />
                  {formErrors.name ? (
                    <p className="text-xs text-destructive mt-1.5 animate-in fade-in slide-in-from-bottom-1 duration-200">{formErrors.name}</p>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="inq-email" className="text-xs font-semibold uppercase tracking-wide text-foreground/60 mb-1.5 block">Email *</label>
                  <input id="inq-email" type="email" value={inquiry.email} onChange={(e) => {
                      setInquiry({ ...inquiry, email: e.target.value });
                      setTouched((prev) => ({ ...prev, email: true }));
                    }}
                    onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                    placeholder="you@company.com" required
                    className={`w-full px-4 py-3 rounded-xl bg-card border text-sm focus:outline-none focus:ring-1 transition ${
                      formErrors.email ? "border-destructive focus:border-destructive focus:ring-destructive/40" : "border-border focus:border-brand-secondary focus:ring-brand-secondary/40"
                    }`} />
                  {formErrors.email ? (
                    <p className="text-xs text-destructive mt-1.5 animate-in fade-in slide-in-from-bottom-1 duration-200">{formErrors.email}</p>
                  ) : null}
                </div>
              </div>
              <div>
                <label htmlFor="inq-service" className="text-xs font-semibold uppercase tracking-wide text-foreground/60 mb-1.5 block">Service of interest</label>
                <select id="inq-service" value={inquiry.service} onChange={(e) => {
                    setInquiry({ ...inquiry, service: e.target.value });
                    /* Ask the AI to draft a message for the selected service */
                    requestSuggestion(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-sm text-foreground/80 focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary/40 transition">
                  <option value="">Select a service (optional)</option>
                  {services.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="inq-attachment" className="text-xs font-semibold uppercase tracking-wide text-foreground/60 mb-1.5 block">Project brief or reference image</label>
                {!attachment ? (
                  <label htmlFor="inq-attachment" className="flex items-center gap-2.5 px-4 py-3 rounded-xl bg-card border border-dashed border-foreground/25 text-sm text-foreground/60 hover:border-brand-secondary/60 hover:text-brand-secondary cursor-pointer transition-colors duration-200">
                    <Paperclip size={16} className="shrink-0" />
                    <span>Attach a file — PDF, Word, or images (JPG/PNG), up to 8 MB</span>
                    <input id="inq-attachment" type="file" accept=".pdf,.doc,.docx,.pptx,.xlsx,.jpg,.jpeg,.png,.gif,.webp" onChange={handleAttachmentChange} className="sr-only" tabIndex={-1} aria-label="Attach project brief or reference image" />
                  </label>
                ) : (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-brand-secondary/40 animate-in fade-in slide-in-from-bottom-1.5 duration-300">
                    {attachment.type.startsWith("image/") ? <ImageIcon size={16} className="text-brand-accent shrink-0" /> : <FileText size={16} className="text-brand-secondary shrink-0" />}
                    <div className="min-w-0">
                      <p className="text-sm text-foreground/85 truncate">{attachment.name}</p>
                      <p className="text-xs text-muted-foreground">{(attachment.size / 1024).toFixed(1)} KB — brief saved with your inquiry</p>
                    </div>
                    <button type="button" onClick={removeAttachment} aria-label="Remove attachment" className="ml-auto p-1.5 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors">
                      <X size={15} />
                    </button>
                  </div>
                )}
                {attachmentError ? (
                  <p className="text-xs text-destructive mt-1.5 animate-in fade-in slide-in-from-bottom-1 duration-200">{attachmentError}</p>
                ) : null}
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="inq-message" className="text-xs font-semibold uppercase tracking-wide text-foreground/60">Message *</label>
                  {suggestionReady && !suggestionMutation.isPending && (
                    <button type="button" onClick={useSuggestion}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-brand-accent bg-brand-accent/10 border border-brand-accent/30 hover:bg-brand-accent/20 transition-colors duration-200 animate-in fade-in slide-in-from-bottom-1.5 duration-300">
                      <Sparkles size={12} />
                      Use AI suggestion
                    </button>
                  )}
                </div>
                <textarea id="inq-message" rows={3} value={inquiry.message} onChange={(e) => {
                    setInquiry({ ...inquiry, message: e.target.value });
                    setTouched((prev) => ({ ...prev, message: true }));
                  }}
                  onBlur={() => setTouched((prev) => ({ ...prev, message: true }))}
                  placeholder={inquiry.service ? `Ask us about ${inquiry.service}…` : "A short note about your project…"} required
                  className={`w-full px-4 py-3 rounded-xl bg-card border text-sm focus:outline-none focus:ring-1 transition resize-none ${
                    formErrors.message ? "border-destructive focus:border-destructive focus:ring-destructive/40" : "border-border focus:border-brand-secondary focus:ring-brand-secondary/40"
                  }`} />
                {formErrors.message ? (
                  <p className="text-xs text-destructive mt-1.5 animate-in fade-in slide-in-from-bottom-1 duration-200">{formErrors.message}</p>
                ) : suggestionMutation.isPending ? (
                  <p className="text-xs text-muted-foreground mt-1.5 flex items-center gap-1.5"><Loader2 size={12} className="animate-spin" /> Drafting an AI message for {inquiry.service}…</p>
                ) : null}
              </div>
              <button type="submit" disabled={inquiryMutation.isPending}
                className="group w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-2xl hover:shadow-brand-accent/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none transition-all duration-300">
                {inquiryMutation.isPending ? (
                  <>
                    <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                    <span aria-live="polite">Sending…</span>
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
              <p className="text-center text-xs text-muted-foreground">Stored securely and emailed to info@ashflexwebdesign.com.</p>
            </form>
          )}
        </div>
      </section>

      {/* ============ Back to Top — floating button ============ */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-gradient-primary text-white shadow-lg shadow-brand-secondary/30 flex items-center justify-center transition-all duration-300 hover:scale-105 ${
          showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}
