import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Phone } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { brandLogoUrl } from "@shared/brand";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" },
];

// Mobile menu nav: same as mainNav but without Case Studies (per user request)
const mobileNav = mainNav.filter((item) => item.href !== "/case-studies");

const topBarNav = [
  { label: "Blog", href: "/blog" },
  { label: "Resources", href: "/resources" },
  { label: "Client Portal", href: "/client-portal" },
];

const servicesDropdown = [
  { label: "Web Design", href: "/services/website-design" },
  { label: "Web Development", href: "/services/website-development" },
  { label: "WordPress", href: "/services/wordpress-development" },
  { label: "E-commerce", href: "/services/ecommerce-development" },
  { label: "UI/UX Design", href: "/services/ui-ux-design" },
  { label: "Branding", href: "/services/branding-logo-design" },
  { label: "SEO", href: "/services/seo-services" },
  { label: "Google Ads", href: "/services/google-ads" },
  { label: "Social Media", href: "/services/social-media-marketing" },
  { label: "Content Writing", href: "/services/content-writing" },
  { label: "Maintenance", href: "/services/website-maintenance" },
  { label: "Speed Optimization", href: "/services/speed-optimization" },
  { label: "Hosting & Domain", href: "/services/hosting-domain" },
  { label: "AI Automation", href: "/services/ai-automation" },
  { label: "Custom Systems", href: "/services/custom-business-systems" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Swipe-to-close gesture on the mobile menu panel (left or right swipes)
  const swipeRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!mobileOpen) return;
    const el = swipeRef.current;
    if (!el) return;
    let startX = 0;
    let startY = 0;
    let dismissed = false;

    const onDown = (e: PointerEvent) => {
      startX = e.clientX;
      startY = e.clientY;
      dismissed = false;
    };
    const onMove = (e: PointerEvent) => {
      if (dismissed) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      // Register a clear horizontal swipe (ignore vertical scroll gestures)
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.6) {
        dismissed = true;
        setMobileOpen(false);
      }
    };
    const onUp = () => {
      dismissed = true;
    };

    // Also support keyboard dismissal for accessibility
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };

    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("pointercancel", onUp);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("pointercancel", onUp);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileOpen]);

  const topLinkClass = "hover:text-white transition-colors";
  const navLinkClass = scrolled
    ? "text-foreground/70 hover:text-foreground"
    : "text-white/80 hover:text-white";
  const activeNavLinkClass = scrolled ? "text-brand-secondary" : "text-brand-cyan";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      {/* Top utility bar: Blog · Resources · Client Portal */}
      <div className="hidden lg:block border-b border-white/10 bg-[#071B5A]/85 backdrop-blur-md">
        <div className="container flex items-center justify-between h-9 text-[13px] text-white/75">
          <div className="flex items-center gap-4">
            <Link href="/blog" className={topLinkClass}>
              Blog
            </Link>
            <Link href="/resources" className={topLinkClass}>
              Resources
            </Link>
            <Link href="/client-portal" className={topLinkClass}>
              Client Portal
            </Link>
            <span className="mx-1 h-3 w-px bg-white/25" aria-hidden="true" />
            <a
              href="https://www.facebook.com/Ashflex-Web-Hosting-547113659083437"
              target="_blank"
              rel="noreferrer"
              aria-label="Ashflex on Facebook"
              className="text-white/70 hover:text-brand-cyan transition-colors"
            >
              <Facebook size={14} />
            </a>
            <a
              href="https://twitter.com/AshflexH"
              target="_blank"
              rel="noreferrer"
              aria-label="Ashflex on X"
              className="text-white/70 hover:text-brand-cyan transition-colors"
            >
              <Twitter size={14} />
            </a>
            <a
              href="https://www.instagram.com/ashflexwebdesign/"
              target="_blank"
              rel="noreferrer"
              aria-label="Ashflex on Instagram"
              className="text-white/70 hover:text-brand-cyan transition-colors"
            >
              <Instagram size={14} />
            </a>
          </div>
          <div className="flex items-center gap-5">
            <a href="tel:08023138892" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone size={13} className="text-brand-cyan" />
              08023138892
            </a>
            <a href="mailto:info@ashflexwebdesign.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail size={13} className="text-brand-cyan" />
              info@ashflexwebdesign.com
            </a>
          </div>
        </div>
      </div>

      <div className="container flex items-center justify-between h-18 lg:h-20">
        <Link href="/">
          <img
            src={brandLogoUrl}
            alt="Ashflex Website Design"
            className="h-12 w-auto rounded-md object-contain shadow-sm sm:h-14"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  location === item.href
                    ? activeNavLinkClass
                    : navLinkClass
                }`}
              >
                {item.label}
              </Link>
              {item.label === "Services" && (
                <div className="absolute top-full left-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <div className="w-64 bg-white rounded-xl shadow-xl shadow-black/10 border border-border/50 p-2 max-h-96 overflow-y-auto">
                    {servicesDropdown.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-3 py-2 text-sm rounded-lg hover:bg-muted transition-colors"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <Link href="/contact">
            <span className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-200">
              Get Free Quote
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "hover:bg-muted" : "text-white hover:bg-white/10"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden relative overflow-hidden border-t border-white/15 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          {/* Image background: warm spotlight effect (user-provided) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/manus-storage/focus-spotlight-effect_ce3ba633.jpg')" }}
            aria-hidden="true"
          />
          {/* Brightening overlay: keeps the spotlight glow visible while a soft white haze keeps text crisp */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/45 via-[45%] to-transparent"
            aria-hidden="true"
          />
          {/* Pulsing warm glow overlay that follows the spotlight's center */}
          <div
            className="absolute inset-0 animate-[glow-pulse_4s_ease-in-out_infinite] pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 55% 50% at 50% 22%, rgba(255, 213, 153, 0.35), rgba(255, 183, 100, 0.14) 45%, transparent 75%), radial-gradient(ellipse 45% 35% at 50% 92%, rgba(255, 200, 120, 0.30), transparent 70%)",
            }}
            aria-hidden="true"
          />
            <div ref={swipeRef} className="container relative py-5 space-y-1 max-h-[80vh] overflow-y-auto backdrop-blur-[1px] touch-pan-y">
            {mobileNav.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-amber-500/15 hover:pl-5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" aria-hidden="true" />
                <span className="text-base font-semibold text-[#0a1240] tracking-tight">
                  {item.label}
                </span>
                <span className="ml-auto text-brand-secondary opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </Link>
            ))}
            <div className="flex items-center gap-3 px-4 my-2">
              <span className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-secondary/90">
                More
              </p>
              <span className="h-px flex-1 bg-gradient-to-l from-amber-500/50 to-transparent" />
            </div>
            {topBarNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-amber-500/15 hover:pl-5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                <span className="text-base font-medium text-brand/90">{item.label}</span>
                <span className="ml-auto text-brand-secondary opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </Link>
            ))}
            <div className="flex items-center justify-center gap-3 py-3">
              <a
                href="https://www.facebook.com/Ashflex-Web-Hosting-547113659083437"
                target="_blank"
                rel="noreferrer"
                aria-label="Ashflex on Facebook"
                className="p-2.5 rounded-full bg-amber-400/20 text-[#0f33a8] hover:bg-amber-400 hover:text-[#3d1e05] transition-all duration-200 active:scale-110 active:animate-[bounce-scale_400ms_ease-out] will-change-transform"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://twitter.com/AshflexH"
                target="_blank"
                rel="noreferrer"
                aria-label="Ashflex on X"
                className="p-2.5 rounded-full bg-amber-400/20 text-[#0f33a8] hover:bg-amber-400 hover:text-[#3d1e05] transition-all duration-200 active:scale-110 active:animate-[bounce-scale_400ms_ease-out] will-change-transform"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://www.instagram.com/ashflexwebdesign/"
                target="_blank"
                rel="noreferrer"
                aria-label="Ashflex on Instagram"
                className="p-2.5 rounded-full bg-amber-400/20 text-[#0f33a8] hover:bg-amber-400 hover:text-[#3d1e05] transition-all duration-200 active:scale-110 active:animate-[bounce-scale_400ms_ease-out] will-change-transform"
              >
                <Instagram size={18} />
              </a>
            </div>
            <Link href="/contact">
              <span className="group block w-full text-center px-5 py-3 mt-1 text-base font-semibold text-white bg-gradient-primary rounded-xl shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-0.5 transition-all duration-300">
                Get Free Quote
                <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
