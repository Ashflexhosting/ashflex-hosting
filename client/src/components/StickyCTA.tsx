import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Phone } from "lucide-react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 bg-white/90 backdrop-blur-xl border-t border-border/50 shadow-2xl shadow-black/5">
      <div className="container flex items-center justify-between h-16">
        <div className="hidden md:block">
          <p className="text-sm font-medium text-foreground">
            Ready to grow your business online?
          </p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto justify-between">
          <Link href="/resources/website-cost-calculator">
            <span className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Cost Calculator
            </span>
          </Link>
          <Link href="/resources/free-website-audit">
            <span className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Free Audit
            </span>
          </Link>
          <a href="tel:+2348023138892" className="flex items-center gap-2 text-sm font-medium text-brand-secondary hover:text-brand-accent transition-colors">
            <Phone size={16} />
            <span className="hidden sm:inline">Call Now</span>
          </a>
          <Link href="/contact">
            <span className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-200">
              Get Free Quote
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
