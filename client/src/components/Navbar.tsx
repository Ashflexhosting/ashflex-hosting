import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Mail, Phone } from "lucide-react";
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
  { label: "API Integration", href: "/services/api-integration" },
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
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-border/50 shadow-xl">
          <div className="container py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-border/50 my-2" />
            <p className="px-4 pt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              More
            </p>
            {topBarNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-base font-medium rounded-lg hover:bg-muted transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link href="/contact">
              <span className="block w-full text-center px-5 py-3 mt-2 text-base font-semibold text-white bg-gradient-primary rounded-xl">
                Get Free Quote
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
