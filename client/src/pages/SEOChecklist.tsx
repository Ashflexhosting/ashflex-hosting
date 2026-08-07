import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Circle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const checklistItems = [
  {
    category: "Technical SEO",
    items: [
      "SSL certificate installed (HTTPS)",
      "XML sitemap submitted to Google",
      "Robots.txt properly configured",
      "Page load speed under 3 seconds",
      "Mobile-responsive design",
      "Core Web Vitals passing (LCP, FID, CLS)",
      "Structured data (Schema markup) implemented",
      "Canonical URLs set correctly",
      "404 pages handled properly",
      "Page URLs are clean and descriptive",
    ],
  },
  {
    category: "On-Page SEO",
    items: [
      "Unique title tags for every page (50-60 chars)",
      "Meta descriptions for every page (150-160 chars)",
      "H1 tag on every page (only one)",
      "Header hierarchy (H1, H2, H3) properly structured",
      "Images have descriptive alt text",
      "Internal links between related pages",
      "Content is original and valuable",
      "Keyword density is natural (1-2%)",
      "URL contains target keyword",
      "Content is regularly updated",
    ],
  },
  {
    category: "Content",
    items: [
      "Blog with regular, quality posts",
      "Content targets user intent",
      "Long-form content (1500+ words for key pages)",
      "FAQ sections on important pages",
      "Call-to-action on every page",
      "Social sharing buttons",
      "Video content where appropriate",
      "Infographics for visual content",
    ],
  },
  {
    category: "Local SEO",
    items: [
      "Google Business Profile claimed and optimized",
      "Business name, address, phone consistent across web",
      "Local citations on relevant directories",
      "Location pages for multi-location businesses",
      "Reviews strategy in place",
      "Local keywords in content",
    ],
  },
  {
    category: "Off-Page SEO",
    items: [
      "Quality backlink building strategy",
      "Guest posting on relevant sites",
      "Social media presence",
      "Brand mentions monitoring",
      "Broken link building",
      "Competitor backlink analysis",
    ],
  },
];

export default function SEOChecklist() {
  const sectionRef = useScrollReveal();
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggleItem = (item: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
  };

  const totalItems = checklistItems.reduce((acc, cat) => acc + cat.items.length, 0);
  const progress = Math.round((checked.size / totalItems) * 100);

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="SEO Checklist"
        description="A comprehensive SEO checklist to ensure your website is fully optimized for search engines. Check off items as you complete them."
        breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "SEO Checklist" }]}
      />

      <section className="py-20">
        <div className="container max-w-4xl">
          {/* Progress Bar */}
          <Card className="glass-card border-0 p-6 mb-10">
            <CardContent className="p-0">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>Your Progress</h3>
                <span className="text-2xl font-bold text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>{progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div
                  className="bg-gradient-primary h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">{checked.size} of {totalItems} items completed</p>
            </CardContent>
          </Card>

          {checklistItems.map((category) => (
            <Card key={category.category} className="glass-card border-0 p-6 mb-6">
              <CardContent className="p-0">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <button
                      key={item}
                      onClick={() => toggleItem(item)}
                      className="flex items-start gap-3 w-full text-left group"
                    >
                      {checked.has(item) ? (
                        <CheckCircle size={20} className="text-brand-success mt-0.5 flex-shrink-0" />
                      ) : (
                        <Circle size={20} className="text-muted-foreground/30 mt-0.5 flex-shrink-0 group-hover:text-brand-secondary/50 transition-colors" />
                      )}
                      <span className={`text-sm transition-colors ${checked.has(item) ? "text-muted-foreground line-through" : "text-foreground/80"}`}>
                        {item}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">Need help implementing these SEO strategies?</p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-lg hover:shadow-brand-secondary/25 transition-all">
                Get SEO Audit <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
