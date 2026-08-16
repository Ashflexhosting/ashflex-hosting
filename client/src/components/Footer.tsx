import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import { footerCompanyLinkKey, footerCompanyLinks } from "@shared/footerNavigation";
import { siteContact } from "@shared/siteContact";
import { brandLogoUrl } from "@shared/brand";

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src={brandLogoUrl}
              alt="Ashflex Website Design"
              className="mb-4 h-16 w-auto rounded-md object-contain"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We build high-performance websites that help businesses increase visibility, improve credibility, and convert visitors into paying customers.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="https://www.facebook.com/Ashflex-Web-Hosting-547113659083437"
                target="_blank"
                rel="noreferrer"
                aria-label="Ashflex on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brand-accent hover:text-brand"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://twitter.com/AshflexH"
                target="_blank"
                rel="noreferrer"
                aria-label="Ashflex on X"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brand-accent hover:text-brand"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://www.instagram.com/ashflexwebdesign/"
                target="_blank"
                rel="noreferrer"
                aria-label="Ashflex on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brand-accent hover:text-brand"
              >
                <Instagram size={16} />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-white/60 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href={`mailto:${siteContact.email}`} className="hover:text-white transition-colors whitespace-nowrap">{siteContact.email}</a>
              </div>
              <div className="hidden md:block h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href={siteContact.phoneHref} className="hover:text-white transition-colors whitespace-nowrap">{siteContact.phoneDisplay}</a>
              </div>
              <div className="hidden md:block h-4 w-px bg-white/20" />
              <div className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0" />
                <span className="whitespace-nowrap">Lagos, Nigeria</span>
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
