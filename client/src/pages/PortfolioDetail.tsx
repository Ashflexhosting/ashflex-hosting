import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { ArrowRight, ArrowLeft, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { portfolioItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import ScrollableScreenshot from "@/components/ScrollableScreenshot";

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const sectionRef = useScrollReveal();
  const project = portfolioItems.find((p) => p.id === Number(id));
  const gallery = project?.screenshots?.length ? project.screenshots : [];
  const captions = project?.screenshotCaptions?.length ? project.screenshotCaptions : [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const captionFor = (index: number) => captions[index] || "Screenshot";

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, gallery.length]);

  const goToShot = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + gallery.length) % gallery.length);
  };

  if (!project) {
    return (
      <div className="pt-32 pb-20 container text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/portfolio"><span className="text-brand-secondary font-medium hover:underline">Back to Portfolio →</span></Link>
      </div>
    );
  }

  return (
    <div ref={sectionRef}>
      <PageHeader
        title={project.title}
        description={project.challenge}
        breadcrumb={[{ label: "Portfolio", href: "/portfolio" }, { label: project.title }]}
      />

      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="scroll-reveal mb-12 rounded-2xl bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-cyan p-[3px] shadow-2xl shadow-brand-secondary/15">
            <ScrollableScreenshot
              src={project.image}
              alt={`Scroll through the ${project.title} website capture`}
              height="h-96"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 scroll-reveal">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>The Challenge</h3>
                <p className="text-foreground/80 leading-relaxed">{project.challenge}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>The Solution</h3>
                <p className="text-foreground/80 leading-relaxed">{project.solution}</p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3 text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>Results</h3>
                <p className="text-foreground/80 leading-relaxed">{project.results}</p>
              </div>

              <div className="p-6 bg-brand-secondary/5 rounded-2xl border border-brand-secondary/10">
                <h3 className="text-xl font-semibold mb-3 text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 text-sm font-medium rounded-xl bg-white border border-brand-secondary/20 text-brand-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Screenshots Gallery */}
            <div className="lg:col-span-3 mt-4">
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Project Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {gallery.map((shot, n) => (
                  <button
                    key={n}
                    type="button"
                    className="scroll-reveal text-left rounded-2xl bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-cyan p-[2px] group"
                    onClick={() => setLightboxIndex(n)}
                    aria-label={`View ${project.title} screenshot ${n + 1}`}
                  >
                      <span className="relative">
                        <ScrollableScreenshot
                          src={shot}
                          alt={`Scroll through ${project.title} screenshot ${n + 1}`}
                          height="h-64"
                        />
                        <span className="absolute inset-0 flex items-center justify-center bg-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                          <span className="px-4 py-2 text-xs font-semibold text-white bg-brand-secondary rounded-full">View full size</span>
                        </span>
                      </span>
                      <span className="block px-3 py-2 text-xs font-medium text-muted-foreground">{captionFor(n)}</span>
                    </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card border-0 p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Project Info</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Client</p>
                    <p className="font-semibold">{project.client}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-semibold">{project.category}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Technologies</p>
                    <p className="font-semibold">{project.technologies.join(", ")}</p>
                  </div>
                </div>

                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary hover:text-brand-accent transition-colors"
                >
                  View Live Project <ExternalLink size={15} />
                </a>

                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Project description sourced from Ashflex’s official portfolio listing.
                </p>

                <div className="mt-8">
                  <Link href="/contact">
                    <span className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-200">
                      Start Similar Project
                    </span>
                  </Link>
                </div>

                <div className="mt-4">
                  <Link href="/portfolio">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-secondary transition-colors">
                      <ArrowLeft size={16} /> Back to Portfolio
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && gallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-brand/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${project.title} screenshot ${lightboxIndex + 1}`}
        >
          <button
            type="button"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          {gallery.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 md:left-8 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); goToShot(-1); }}
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                className="absolute right-4 md:right-8 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); goToShot(1); }}
                aria-label="Next screenshot"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          <div
            className="relative flex-1 w-full max-w-[92vw] max-h-[80vh] rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ScrollableScreenshot
              src={gallery[lightboxIndex]}
              alt={`${project.title} screenshot ${lightboxIndex + 1}`}
              height="h-[75vh]"
              className="rounded-none"
            />
          </div>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white/70 bg-white/10 rounded-full">
            {captionFor(lightboxIndex)} · {lightboxIndex + 1} / {gallery.length}
          </span>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ready for Your Own Success Story?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Let's discuss how we can create similar results for your business.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand bg-white rounded-xl hover:shadow-xl transition-all duration-300">
              Get Free Consultation <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
