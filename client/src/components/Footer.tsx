import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { footerCompanyLinkKey, footerCompanyLinks } from "@shared/footerNavigation";
import { siteContact } from "@shared/siteContact";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                Ash<span className="text-brand-accent">flex</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We build high-performance websites that help businesses increase visibility, improve credibility, and convert visitors into paying customers.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Mail size={16} />
                <a href={`mailto:${siteContact.email}`} className="hover:text-white transition-colors">{siteContact.email}</a>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Phone size={16} />
                <a href={siteContact.phoneHref} className="hover:text-white transition-colors">{siteContact.phoneDisplay}</a>
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <MapPin size={16} />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Services</h4>
            <div className="space-y-2">
              {[
                ["Web Design", "/services/website-design"],
                ["Web Development", "/services/website-development"],
                ["WordPress", "/services/wordpress-development"],
                ["E-commerce", "/services/ecommerce-development"],
                ["UI/UX Design", "/services/ui-ux-design"],
                ["Branding", "/services/branding-logo-design"],
                ["SEO", "/services/seo-services"],
                ["Google Ads", "/services/google-ads"],
              ].map(([label, href]) => (
                <Link key={href} href={href}>
                  <span className="block text-white/60 text-sm hover:text-white transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Company</h4>
            <div className="space-y-2">
              {footerCompanyLinks.map(([label, href]) => (
                <Link key={footerCompanyLinkKey(label, href)} href={href}>
                  <span className="block text-white/60 text-sm hover:text-white transition-colors">{label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Newsletter</h4>
            <p className="text-white/60 text-sm mb-4">
              Subscribe for web design tips, industry insights, and exclusive offers.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {new Date().getFullYear()} Ashflex Web Design. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-white/40 text-sm">
            <Link href="/"><span className="hover:text-white/70 transition-colors">Privacy Policy</span></Link>
            <Link href="/"><span className="hover:text-white/70 transition-colors">Terms of Service</span></Link>
            <Link href="/"><span className="hover:text-white/70 transition-colors">Sitemap</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
