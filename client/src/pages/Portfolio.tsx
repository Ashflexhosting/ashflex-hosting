import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { portfolioItems, categories } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

export default function Portfolio() {
  const sectionRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Our Portfolio"
        description="Explore our collection of successful projects across various industries. Each project showcases our commitment to quality, innovation, and client satisfaction."
        breadcrumb={[{ label: "Portfolio", href: "/portfolio" }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-primary text-white shadow-lg shadow-brand-secondary/25"
                    : "bg-white text-foreground/70 hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <div key={item.id} className="scroll-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <Link href={`/portfolio/${item.id}`}>
                  <Card className="glass-card border-0 overflow-hidden hover-lift">
                    <div className="bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-cyan p-[2px]">
                      <div className="aspect-video overflow-hidden bg-brand">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-secondary/10 text-brand-secondary">{item.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.challenge}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <span className="text-brand-secondary text-sm font-medium">View Details</span>
                        <ArrowRight size={14} className="text-brand-secondary" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
