import { useParams, Link } from "wouter";
import { ArrowRight, ArrowLeft, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { portfolioItems } from "@/data/portfolio";
import { Button } from "@/components/ui/button";

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const sectionRef = useScrollReveal();
  const project = portfolioItems.find((p) => p.id === Number(id));

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
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-[0.9rem] bg-brand"
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {(project.screenshots?.length ? project.screenshots : [project.image, project.image, project.image, project.image]).map((shot, n) => (
                  <div key={n} className="scroll-reveal rounded-2xl bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-cyan p-[2px] group">
                    <div className="overflow-hidden rounded-[0.9rem] bg-brand">
                      <img
                        src={shot}
                        alt={`${project.title} screenshot ${n + 1}`}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                  </div>
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
