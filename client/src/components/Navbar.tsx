import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Phone, CheckCircle2, Sun, Moon, ArrowRight } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { brandLogoUrl, brandLogoUrlLight } from "@shared/brand";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
];

// Mobile menu nav: mirrors mainNav (kept as a separate list for easy future divergence)
const mobileNav = mainNav;

const topBarNav = [
  { label: "FAQ", href: "/faq" },
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
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [location] = useLocation();
  const { theme, toggleTheme, switchable } = useTheme();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  // Debounced toggle: prevents double-tap races on touch devices that can
  // leave the panel mid-animation (open/close stuck halfway)
  const toggleMobile = () => {
    if (openTimerRef.current) return;
    const wasOpen = mobileOpen;
    setMobileOpen(!wasOpen);
    openTimerRef.current = setTimeout(() => {
      openTimerRef.current = null;
    }, 350);
  };

  useEffect(() => {
    return () => {
      if (openTimerRef.current) clearTimeout(openTimerRef.current);
    };
  }, []);

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
      // Only dismiss on a deliberate horizontal swipe: ignore vertical scrolling
      // (raise thresholds so fling-scrolls and horizontal drift never close the menu)
      if (Math.abs(dx) > 90 && Math.abs(dx) > Math.abs(dy) * 2) {
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
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 dark:bg-[#0A1633]/85"
          : "bg-transparent"
      }`}
    >
      {/* Top utility bar: FAQ · Blog · Resources · Client Portal */}
      <div className="hidden lg:block border-b border-white/10 bg-[#071B5A]/85 backdrop-blur-md">
        <div className="container flex items-center justify-between h-9 text-[13px] text-white/75">
          <div className="flex items-center gap-4">
            <Link href="/faq" className={topLinkClass}>
              FAQ
            </Link>
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
            <TopBarNewsletter />
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
            src={brandLogoUrlLight}
            data-logo-light
            alt="Ashflex Website Design"
            className="hidden h-12 w-auto rounded-md object-contain shadow-sm sm:h-14 dark:block"
          />
          <img
            src={brandLogoUrl}
            data-logo-dark
            alt="Ashflex Website Design"
            className="block h-12 w-auto rounded-md object-contain shadow-sm sm:h-14 dark:hidden"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${
                  location === item.href
                    ? activeNavLinkClass
                    : navLinkClass
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-0.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#0757F7] to-[#F20549] transition-all duration-300 ease-out ${
                    location === item.href ? "w-8" : "w-0 group-hover:w-7"
                  }`}
                  aria-hidden="true"
                />
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
          {switchable && (
            <button
              type="button"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className={`p-2.5 rounded-xl transition-all duration-200 ${scrolled ? "text-foreground/70 hover:bg-muted" : "text-white/80 hover:bg-white/10"}`}
              onClick={() => toggleTheme?.()}
            >
              <span className="relative block w-5 h-5">
                <Sun size={20} className={`absolute inset-0 transition-all duration-300 ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
                <Moon size={20} className={`absolute inset-0 transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
              </span>
            </button>
          )}
          <Link href="/contact">
            <span className="group inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-primary rounded-xl transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-accent/30 hover:brightness-110 active:scale-[0.97]">
              Get in Touch
              <ArrowRight size={15} className="transition-transform duration-300 translate-x-0 opacity-70 group-hover:translate-x-0.5 group-hover:opacity-100" />
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-1.5 lg:hidden">
          {switchable && (
            <button
              type="button"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className={`p-2 rounded-lg transition-all duration-200 ${scrolled ? "text-foreground/70 hover:bg-muted" : "text-white hover:bg-white/10"}`}
              onClick={() => toggleTheme?.()}
            >
              <span className="relative block w-5 h-5">
                <Sun size={20} className={`absolute inset-0 transition-all duration-300 ${theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`} />
                <Moon size={20} className={`absolute inset-0 transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
              </span>
            </button>
          )}
          <button
            className={`flex items-center justify-center w-12 h-12 -m-2 p-2 rounded-lg transition-colors ${scrolled ? "hover:bg-muted" : "text-white hover:bg-white/10"}`}
            onClick={toggleMobile}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

        {/* Mobile Menu — full-screen slide-in with blurred backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Blurred dimmed backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 z-[55] bg-[#071B5A]/40 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
              onClick={toggleMobile}
              aria-hidden="true"
            />
            {/* Slide-in panel */}
            <motion.div
              className="lg:hidden fixed inset-x-0 top-0 bottom-0 z-[65] overflow-hidden shadow-2xl touch-action-manipulation"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 34 }}
            >
          {/* Solid navy gradient background (replaced the spotlight image for reliable tap behavior) */}
          <div
            className="absolute inset-0 bg-gradient-brand"
            aria-hidden="true"
          />
            <div ref={swipeRef} className="container relative py-5 space-y-1 h-full overflow-y-auto touch-pan-y overscroll-contain">
            {/* Panel header with close affordance */}
            <div className="flex items-center justify-between pb-4 mb-1 border-b border-amber-400/25">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">Menu</p>
              <button
                type="button"
                aria-label="Close menu"
                className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all active:scale-95"
                onClick={toggleMobile}
              >
                <X size={18} />
              </button>
            </div>
            {mobileNav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.28, delay: i * 0.045, ease: [0.23, 1, 0.32, 1] }}
              >
              <Link
                href={item.href}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-white/10 hover:pl-5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary shrink-0" aria-hidden="true" />
                <span className="text-base font-semibold text-white tracking-tight">
                  {item.label}
                </span>
                <span className="ml-auto text-amber-300 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </Link>
              </motion.div>
            ))}
            <div className="flex items-center gap-3 px-4 my-2">
              <span className="h-px flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-300">
                More
              </p>
              <span className="h-px flex-1 bg-gradient-to-l from-amber-500/50 to-transparent" />
            </div>
            {topBarNav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40 }}
                transition={{ duration: 0.28, delay: (mobileNav.length + i) * 0.045, ease: [0.23, 1, 0.32, 1] }}
              >
              <Link
                href={item.href}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-white/10 hover:pl-5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-primary" />
                <span className="text-base font-medium text-white">{item.label}</span>
                <span className="ml-auto text-amber-300 opacity-80 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all">
                  →
                </span>
              </Link>
              </motion.div>
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
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.28, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
            >
            <Link href="/contact">
              <span className="group block w-full text-center px-5 py-3 mt-1 text-base font-semibold text-white bg-gradient-primary rounded-xl shadow-lg shadow-brand-accent/20 hover:shadow-brand-accent/40 hover:-translate-y-0.5 transition-all duration-300">
                Get in Touch
                <span className="inline-block ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </span>
            </Link>
            </motion.div>
          </div>
          </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

function TopBarNewsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      toast.success("You're on the list!", {
        description: "Thanks for subscribing — we'll keep you posted.",
      });
      try {
        localStorage.setItem("ashflex_newsletter_prompted", "1");
      } catch {
        // Storage may be unavailable; ignore.
      }
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
    },
    onError: () => {
      toast.error("Couldn't subscribe right now", {
        description: "Please try again or email us directly.",
      });
    },
  });
  const [email, setEmail] = useState("");

  if (subscribed) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 6 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="hidden xl:flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5"
        aria-live="polite"
      >
        <CheckCircle2 size={13} className="text-brand-cyan shrink-0" />
        <span className="text-[11px] font-semibold text-white/90">You&rsquo;re on the list</span>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!email.trim()) return;
        subscribeMutation.mutate({ email: email.trim(), source: "topbar" });
        setEmail("");
      }}
      className="hidden xl:flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-3 py-1.5"
      aria-label="Newsletter subscription"
    >
      <Mail size={13} className="text-brand-cyan shrink-0" />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email for updates"
        required
        className="w-36 bg-transparent text-xs text-white placeholder:text-white/50 focus:outline-none"
        aria-label="Your email address"
      />
      <button
        type="submit"
        disabled={subscribeMutation.isPending}
        className="rounded-full bg-brand-cyan px-3 py-1 text-[11px] font-semibold text-brand-dark transition-all hover:bg-cyan-300 disabled:opacity-60 active:scale-95"
      >
        {subscribeMutation.isPending ? "Joining…" : "Join"}
      </button>
    </form>
  );
}
