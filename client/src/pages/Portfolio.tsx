import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowRight, SlidersHorizontal, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { portfolioIndustries, portfolioItems } from "@/data/portfolio";
import { Card, CardContent } from "@/components/ui/card";
import ScrollableScreenshot from "@/components/ScrollableScreenshot";

const filterButtonClass = (isActive: boolean) =>
  `rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2 ${
    isActive
      ? "bg-gradient-primary text-white shadow-lg shadow-brand-secondary/25"
      : "border border-border bg-white text-foreground/70 hover:border-brand-secondary/35 hover:text-foreground"
  }`;

export default function Portfolio() {
  const sectionRef = useScrollReveal();
  const [, navigate] = useLocation();
  const [activeIndustry, setActiveIndustry] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const INITIAL_VISIBLE = 12;
  const filtered = activeIndustry === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === activeIndustry);
  const hasActiveFilter = activeIndustry !== "All";

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Our Portfolio"
        description="Browse selected Ashflex projects across industries. Filter by industry to find work that is most relevant to your business."
        breadcrumb={[{ label: "Portfolio", href: "/portfolio" }]}
      />

      <section className="bg-[#D8D8D8] py-20">
        <div className="container">
          <div className="mb-12 rounded-3xl border border-brand-secondary/10 bg-gradient-to-br from-brand-secondary/5 via-white to-brand-cyan/5 p-5 shadow-sm sm:p-7">
            <div className="mb-6 flex flex-col gap-4 border-b border-border/70 pb-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="mb-2 flex items-center gap-2 text-brand-secondary">
                  <SlidersHorizontal size={17} aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-[0.16em]">Portfolio Finder</span>
                </div>
                <h2 className="text-2xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  Find work by industry
                </h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  Pick an industry to narrow the projects shown below.
                </p>
              </div>
              <p className="rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-sm" aria-live="polite">
                Showing <span className="text-brand-secondary">{filtered.length}</span> of {portfolioItems.length} projects
              </p>
            </div>

            <div className="grid gap-6 lg:items-end">
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
            </div>
          </div>

          {filtered.length > 0 ? (
            <>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered
                .slice(0, showAll ? filtered.length : INITIAL_VISIBLE)
                .map((item, index) => (
                  <div key={item.id} className="scroll-reveal" style={{ transitionDelay: `${index * 50}ms` }}>
                  <div
                    role="article"
                    aria-label={`${item.title} project card`}
                    className="cursor-pointer"
                    onClick={() => navigate(`/portfolio/${item.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        navigate(`/portfolio/${item.id}`);
                      }
                    }}
                  >
                    <Card className="group relative glass-card portfolio-card h-full overflow-hidden rounded-2xl border border-slate-200/70 bg-white">
                      {/* slim accent bar under the header edge */}
                      <div className="portfolio-accent pointer-events-none absolute inset-x-5 top-0 z-10 h-[3px] rounded-b bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-cyan" aria-hidden="true" />
                      {/* clean image preview */}
                      <div className="portfolio-border relative mx-5 mt-5 overflow-hidden rounded-xl border border-slate-200/70 bg-slate-100">
                        <ScrollableScreenshot
                          src={item.image}
                          alt={`Scroll through the ${item.title} website capture`}
                          height="h-[min(50vh,15rem)]"
                          className="portfolio-image"
                          rounded={false}
                        />
                        {/* hover overlay with quick actions */}
                        <div className="portfolio-overlay absolute inset-0 flex items-end justify-between bg-gradient-to-t from-[#071B5A]/85 via-[#071B5A]/25 to-transparent p-4 opacity-0 transition-opacity duration-300">
                          <span className="rounded-full bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#071B5A] shadow-lg">View case study</span>
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-brand-accent shadow-lg" aria-hidden="true">
                            <ArrowRight size={16} />
                          </span>
                        </div>
                      </div>
                      <CardContent className="p-5">
                        <div className="mb-2.5 flex flex-wrap items-center gap-2">
                          <span className="portfolio-tags inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                            {item.category}
                          </span>
                          {item.technologies.map((service) => (
                            <span key={service} className="portfolio-tags rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                              {service}
                            </span>
                          ))}
                        </div>
                        <h3 className="mb-1.5 text-lg font-semibold text-slate-900 transition-colors duration-300 group-hover:text-brand-accent" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                        <p className="relative line-clamp-2 text-sm text-slate-500 transition-all duration-300" aria-hidden="false">
                          {item.challenge}
                        </p>
                        <p className="line-clamp-3 text-sm text-brand-secondary/90 mt-0 max-h-0 overflow-hidden opacity-0 transition-all duration-300 card-hover-text">
                          {item.overview}
                        </p>
                        <div className="mt-3.5 flex items-center justify-between gap-2 border-t border-slate-100 pt-3.5">
                          <span className="flex items-center gap-2 text-sm font-medium text-brand-secondary">
                            View Details <ArrowRight size={14} className="portfolio-arrow text-brand-secondary" aria-hidden="true" />
                          </span>
                          <a
                            href={item.website}
                            target="_blank"
                            rel="noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="portfolio-live inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-secondary/30 px-3.5 py-1.5 text-xs font-semibold text-brand-secondary hover:border-brand-secondary hover:bg-brand-secondary hover:text-white"
                          >
                            Live site <ExternalLink size={12} aria-hidden="true" />
                          </a>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
            {!showAll && filtered.length > INITIAL_VISIBLE && (
              <div className="mt-12 flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowAll(true)}
                  aria-label="View more projects"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-brand-secondary transition-all duration-200 hover:gap-3 hover:text-brand-accent active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  View more
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-secondary/40 bg-white transition-all duration-300 group-hover:border-brand-accent/60 group-hover:bg-brand-accent group-hover:text-white">
                    <ChevronDown size={18} className="transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
                  </span>
                  <span className="ml-1 rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-semibold text-brand-secondary transition-colors duration-300 group-hover:bg-brand-accent/10 group-hover:text-brand-accent">
                    {filtered.length - INITIAL_VISIBLE} more project{filtered.length - INITIAL_VISIBLE === 1 ? "" : "s"}
                  </span>
                </button>
                <p className="text-sm text-muted-foreground">
                  Showing {INITIAL_VISIBLE} of {filtered.length} projects
                </p>
              </div>
            )}
            {showAll && filtered.length > INITIAL_VISIBLE && (
              <div className="mt-12 flex flex-col items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowAll(false)}
                  aria-label="Show less projects"
                  className="group inline-flex items-center gap-2 text-base font-semibold text-brand-secondary transition-all duration-200 hover:gap-3 hover:text-brand-accent active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-secondary/40 bg-white transition-all duration-300 group-hover:border-brand-accent/60 group-hover:bg-brand-accent group-hover:text-white">
                    <ChevronUp size={18} className="transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
                  </span>
                  Show less
                  <span className="ml-1 rounded-full bg-brand-secondary/10 px-3 py-1 text-xs font-semibold text-brand-secondary transition-colors duration-300 group-hover:bg-brand-accent/10 group-hover:text-brand-accent">
                    Back to first {INITIAL_VISIBLE}
                  </span>
                </button>
                <p className="text-sm text-muted-foreground">
                  Showing all {filtered.length} project{filtered.length === 1 ? "" : "s"}
                </p>
              </div>
            )}
            </>
          ) : (
            <div className="rounded-3xl border border-dashed border-brand-secondary/30 bg-brand-secondary/5 px-6 py-16 text-center">
              <h2 className="text-xl font-semibold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                No projects match this industry
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-muted-foreground">
                No projects match the selected industry yet.
              </p>
              <button
                type="button"
                onClick={() => setActiveIndustry("All")}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-secondary/25 transition-transform duration-200 hover:scale-[1.02] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                Show all projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
