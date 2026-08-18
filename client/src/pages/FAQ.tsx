import { useMemo, useState } from "react";
import { Link } from "wouter";
import { MessageCircleQuestion, Search, ArrowRight, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faqs, faqCategories, type FaqCategory } from "@/data/faq";
import { usePageMeta } from "@/hooks/usePageMeta";

const categoryIcons: Record<FaqCategory, string> = {
  "Getting Started & Pricing": "₦",
  "Design & Development": "✦",
  "Hosting & Domains": "▲",
  "Support & Maintenance": "◉",
  "Payments & Billing": "₪",
};

export default function FAQ() {
  usePageMeta({
    title: "Frequently Asked Questions | Ashflex Web Design",
    description:
      "Answers to common questions about website costs, timelines, hosting renewals, maintenance, payments, and working with Ashflex Web Design.",
  });

  const [activeCategory, setActiveCategory] = useState<FaqCategory | "All">("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      if (activeCategory !== "All" && f.category !== activeCategory) return false;
      if (q && !`${f.question} ${f.answer}`.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [activeCategory, query]);

  const grouped = useMemo(() => {
    const map = new Map<FaqCategory, typeof faqs>();
    for (const f of filtered) {
      const arr = map.get(f.category) ?? [];
      arr.push(f);
      map.set(f.category, arr);
    }
    return Array.from(map.entries());
  }, [filtered]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-brand">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10">
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            <span className="text-white/30">/</span>
            <span className="text-white/80">FAQ</span>
          </nav>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-white/90 text-xs font-semibold uppercase tracking-wider mb-5">
              <MessageCircleQuestion size={14} className="text-brand-accent" />
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
              Frequent questions, <span className="text-gradient">clear answers</span>
            </h1>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Everything you need to know about working with us — from pricing and timelines to hosting renewals and payments. Can&rsquo;t find your answer? Reach out and we&rsquo;ll respond quickly.
            </p>
            <div className="relative max-w-xl">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions… (e.g. hosting renewal, timeline, cost)"
                aria-label="Search frequently asked questions"
                className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-brand-accent/50 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-[72px] z-30 bg-background/90 backdrop-blur-md border-b border-border/50">
        <div className="container">
          <div className="flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
            {(["All", ...faqCategories] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                  activeCategory === cat
                    ? "bg-gradient-primary text-white shadow-md shadow-brand-secondary/20"
                    : "bg-muted text-muted-foreground hover:bg-muted-foreground/10 hover:text-foreground"
                }`}
              >
                {cat !== "All" && <span className="mr-1.5 opacity-70">{categoryIcons[cat]}</span>}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ groups */}
      <section className="py-16">
        <div className="container">
          {grouped.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg mb-6">No questions match your search.</p>
              <button
                onClick={() => {
                  setQuery("");
                  setActiveCategory("All");
                }}
                className="text-brand-secondary font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
          <div className="space-y-14">
            {grouped.map(([category, items]) => (
              <div key={category} className="scroll-reveal">
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-white text-base font-bold">
                    {categoryIcons[category]}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
                    {category}
                  </h2>
                  <Badge variant="outline" className="border-brand-secondary/30 text-brand-secondary ml-1">
                    {items.length}
                  </Badge>
                </div>
                <Accordion type="single" collapsible className="space-y-3">
                  {items.map((faq, i) => (
                    <AccordionItem
                      key={`${category}-${i}`}
                      value={`${category}-${i}`}
                      className="glass-card border-0 px-6"
                    >
                      <AccordionTrigger className="text-base font-semibold hover:no-underline text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        <p>{faq.answer}</p>
                        {faq.sources && faq.sources.length > 0 && (
                          <p className="text-xs text-muted-foreground/70 mt-3">
                            Also covered on: {faq.sources.join(" · ")}
                          </p>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-20 scroll-reveal">
            <div className="rounded-2xl bg-gradient-brand text-white p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 noise-texture opacity-20" aria-hidden="true" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                  Still have questions?
                </h3>
                <p className="text-white/70 mb-7 max-w-xl mx-auto">
                  Our team typically replies within minutes on WhatsApp or within 24 hours by email.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <Link href="/contact">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-white text-brand px-6 py-3 text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-white/20 active:scale-[0.98]">
                      Ask a Question <ArrowRight size={15} />
                    </span>
                  </Link>
                  <a
                    href="https://wa.me/2348023138892"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 border border-white/20 px-6 py-3 text-sm font-semibold transition-all duration-200 hover:bg-white/20 active:scale-[0.98]"
                  >
                    <Phone size={15} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
