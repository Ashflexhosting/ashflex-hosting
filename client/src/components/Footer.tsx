import { useState } from "react";
import { Link } from "wouter";
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from "lucide-react";
import { Facebook, Twitter, Instagram, FileDown } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import { footerCompanyLinkKey, footerCompanyLinks } from "@shared/footerNavigation";
import { siteContact } from "@shared/siteContact";
import { brandLogoUrl, brandLogoUrlLight } from "@shared/brand";
import { motion } from "framer-motion";

const SUBSCRIBED_LOCALSTORAGE_KEY = "ashflex-newsletter-subscribed";

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [justSubscribed, setJustSubscribed] = useState(false);
  const [initiallySubscribed] = useState(
    () => localStorage.getItem(SUBSCRIBED_LOCALSTORAGE_KEY) === "1",
  );
  const subscribeMutation = trpc.newsletter.subscribe.useMutation();

  if (initiallySubscribed || justSubscribed) {
    return (
      <motion.div
        initial={justSubscribed ? { opacity: 0, scale: 0.92, y: 8 } : undefined}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="flex items-center gap-2 text-brand-accent text-sm font-medium"
      >
        <CheckCircle2 size={16} />
        <span>You&rsquo;re subscribed to the Ashflex newsletter.</span>
      </motion.div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      toast.error("Please enter your email address.");
      return;
    }
    try {
      await subscribeMutation.mutateAsync({ email: trimmed, source: "footer" });
      localStorage.setItem(SUBSCRIBED_LOCALSTORAGE_KEY, "1");
      setJustSubscribed(true);
      toast.success("Subscribed! You'll hear from us soon.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  };

  const isLoading = subscribeMutation.isPending;

  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        disabled={isLoading}
        aria-label="Email address for newsletter"
        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-full px-4 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-accent/20 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed active:scale-[0.98]"
      >
        {isLoading ? (
          <span className="inline-flex items-center justify-center gap-2">
            <Loader2 size={15} className="animate-spin" />
            Subscribing&hellip;
          </span>
        ) : (
          "Subscribe"
        )}
      </button>
    </form>
  );
}

export default function Footer() {
  return (
    <footer className="bg-brand text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img
              src={brandLogoUrlLight}
              alt="Ashflex Website Design"
              className="mb-4 hidden h-16 w-auto rounded-md object-contain dark:block"
            />
            <img
              src={brandLogoUrl}
              alt="Ashflex Website Design"
              className="mb-4 block h-16 w-auto rounded-md object-contain dark:hidden"
            />
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              We build high-performance websites that help businesses increase visibility, improve credibility, and convert visitors into paying customers.
            </p>
            <a
              href="/manus-storage/ashflex-brochure_cffef549.pdf"
              download="Ashflex-Web-Design-Brochure.pdf"
              className="inline-flex items-center gap-1.5 text-brand-accent text-sm font-medium hover:text-white transition-colors mb-4"
            >
              <FileDown size={14} className="shrink-0" />
              Get our brochure
            </a>
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
            <NewsletterForm />
          </div>
        </div>

        {/* Full-width contact bar */}
        <div className="mt-12 mb-6 rounded-2xl bg-white/5 border border-white/10 px-6 py-5 flex flex-wrap items-center justify-between gap-x-8 gap-y-3">
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Mail size={16} className="shrink-0 text-brand-accent" />
            <a href={`mailto:${siteContact.email}`} className="hover:text-white transition-colors whitespace-nowrap">{siteContact.email}</a>
          </div>
          <div className="hidden md:block h-5 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <Phone size={16} className="shrink-0 text-brand-accent" />
            <a href={siteContact.phoneHref} className="hover:text-white transition-colors whitespace-nowrap">{siteContact.phoneDisplay}</a>
          </div>
          <div className="hidden md:block h-5 w-px bg-white/20" />
          <div className="flex items-center gap-2 text-white/80 text-sm">
            <MapPin size={16} className="shrink-0 text-brand-accent" />
            <span className="whitespace-nowrap">Lagos, Nigeria</span>
          </div>
          <div className="hidden md:block h-5 w-px bg-white/20" />
          <a
            href="/manus-storage/ashflex-brochure_cffef549.pdf"
            download="Ashflex-Web-Design-Brochure.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-brand-accent hover:text-brand hover:border-brand-accent active:scale-[0.98] whitespace-nowrap"
          >
            <FileDown size={15} />
            Download Our Brochure (PDF)
          </a>
        </div>

        {/* Mobile brochure download, aligned below the contact details */}
        <div className="mb-6 md:hidden">
          <a
            href="/manus-storage/ashflex-brochure_cffef549.pdf"
            download="Ashflex-Web-Design-Brochure.pdf"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/10 px-4 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-brand-accent hover:text-brand hover:border-brand-accent active:scale-[0.98] whitespace-nowrap"
          >
            <FileDown size={15} />
            Download Our Brochure (PDF)
          </a>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
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
