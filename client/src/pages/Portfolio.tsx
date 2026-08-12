import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, RotateCcw, SlidersHorizontal } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  filterPortfolioItems,
  portfolioIndustries,
  portfolioItems,
  serviceTypes,
} from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";

const filterButtonClass = (isActive: boolean) =>
  `rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 ${
    isActive
      ? "bg-gradient-primary text-white shadow-lg shadow-brand-secondary/25"
      : "border border-border bg-white text-foreground/70 hover:border-brand-secondary/35 hover:text-foreground"
  }`;

export default function Portfolio() {
  const sectionRef = useScrollReveal();
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [activeService, setActiveService] = useState("All");
  const filtered = filterPortfolioItems({ industry: activeIndustry, service: activeService });
  const hasActiveFilters = activeIndustry !== "All" || activeService !== "All";

  const clearFilters = () => {
    setActiveIndustry("All");
    setActiveService("All");
  };

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Our Portfolio"
        description="Browse selected Ashflex projects across industries and website design services. Use the filters to find work that is most relevant to your business."
        breadcrumb={[{ label: "Portfolio", href: "/portfolio" }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="mb-12 rounded-3xl border border-brand-secondary/10 bg-gradient-to-br from-brand-secondary/5 via-white to-brand-cyan/5 p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex flex-col gap-4 border-b border-border/70 pb-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-2 flex items-center gap-2 text-brand-secondary">
                  <SlidersHorizontal size={17} aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em]">Portfolio Finder</span>
                </div>
                <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  Find work by industry or service type
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Combine filters to narrow the projects shown below.
                </p>
              </div>
              <p className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm" aria-live="polite">
                Showing <span className="text-brand-secondary">{filtered.length}</span> of {portfolioItems.length} projects
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1fr_auto] lg:items-end">
              <div role="group" aria-labelledby="industry-filter-label">
                <p id="industry-filter-label" className="mb-3 text-sm font-semibold text-foreground">Industry</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveIndustry("All")}
                    className={filterButtonClass(activeIndustry === "All")}
                    aria-pressed={activeIndustry === "All"}
                  >
                    All industries
                  </button>
                  {portfolioIndustries.map((industry) => (
                    <button
                      type="button"
                      key={industry}
                      onClick={() => setActiveIndustry(industry)}
                      className={filterButtonClass(activeIndustry === industry)}
                      aria-pressed={activeIndustry === industry}
                    >
                      {industry}
                    </button>
                  ))}
                </div>
              </div>

              <div role="group" aria-labelledby="service-filter-label">
                <p id="service-filter-label" className="mb-3 text-sm font-semibold text-foreground">Service type</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveService("All")}
                    className={filterButtonClass(activeService === "All")}
                    aria-pressed={activeService === "All"}
                  >
                    All services
                  </button>
                  {serviceTypes.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => setActiveService(service)}
                      className={filterButtonClass(activeService === service)}
                      aria-pressed={activeService === service}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={clearFilters}
                disabled={!hasActiveFilters}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 text-sm font-medium text-foreground transition-all duration-200 hover:border-brand-secondary/35 hover:text-brand-secondary disabled:cursor-not-allowed disabled:opacity-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                <RotateCcw size={15} aria-hidden="true" />
                Clear filters
              </button>
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((item, index) => (
                <div key={item.id} className="scroll-reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                  <Link href={`/portfolio/${item.id}`}>
                    <Card className="glass-card h-full overflow-hidden border-0 hover-lift">
                      <div className="bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-cyan p-[2px]">
                        <div className="aspect-video overflow-hidden bg-brand">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-medium text-brand-secondary">
                            {item.category}
                          </span>
                          {item.technologies.map((service) => (
                            <span key={service} className="rounded-full bg-brand-cyan/10 px-3 py-1 text-xs font-medium text-brand-cyan">
                              {service}
                            </span>
                          ))}
                        </div>
                        <h3 className="mb-2 text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">{item.challenge}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <span className="text-sm font-medium text-brand-secondary">View Details</span>
                          <ArrowRight size={14} className="text-brand-secondary" aria-hidden="true" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-brand-secondary/30 bg-brand-secondary/5 px-6 py-16 text-center">
              <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                No projects match both filters
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                Try a different industry or service type to explore more Ashflex projects.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-secondary/25 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                <RotateCcw size={15} aria-hidden="true" />
                Show all projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
