import { useParams, Link } from "wouter";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getServiceBySlug, hostingTiers, services } from "@/data/services";
import { Button } from "@/components/ui/button";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const sectionRef = useScrollReveal();
  const service = getServiceBySlug(slug || "");

  if (!service) {
    return (
      <div className="pt-32 pb-20 container text-center">
        <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
        <Link href="/services"><span className="text-brand-secondary font-medium hover:underline">Back to Services →</span></Link>
      </div>
    );
  }

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 4);

  return (
    <div ref={sectionRef}>
      <PageHeader
        title={service.title}
        description={service.description}
        breadcrumb={[{ label: "Services", href: "/services" }, { label: service.title }]}
      />

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                {service.title} Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Ashflex Web Design, we deliver comprehensive {service.title.toLowerCase()} solutions tailored to your business needs. Our team combines creative excellence with technical expertise to produce results that drive real growth.
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>What's Included</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {service.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Process</h3>
              <div className="space-y-6 mb-10">
                {["Discovery & Research", "Planning & Strategy", "Design & Development", "Testing & Optimization", "Launch & Support"].map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-sm font-bold text-brand-secondary">{i + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">{step}</h4>
                      <p className="text-sm text-muted-foreground">Thorough execution of each phase ensures quality results.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card border-0 p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>Pricing</h3>
                <p className="text-3xl font-bold text-brand-secondary mb-1" style={{ fontFamily: "var(--font-heading)" }}>{service.price}</p>
                <p className="text-sm text-muted-foreground mb-6">Starting price. Custom quotes available.</p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle size={14} className="text-brand-success" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <span className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-200">
                    Get a Quote
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Tiers */}
      {service.slug === "hosting-domain" && (
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
                Hosting & Domain Packages
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the package that fits your site. Every tier includes SSL, 99.9% uptime, and easy upgrades as you grow.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
              {hostingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`glass-card border-0 p-8 flex flex-col ${tier.highlighted ? "relative md:-mt-4 ring-2 ring-brand-secondary" : ""}`}
                >
                  {tier.highlighted && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-primary text-white text-xs font-bold uppercase tracking-wide">
                      <Star size={13} className="fill-white" /> Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)" }}>{tier.name}</h3>
                  <p className="text-sm text-muted-foreground mb-5">{tier.tagline}</p>
                  <p className="text-4xl font-extrabold text-brand-secondary mb-5" style={{ fontFamily: "var(--font-heading)" }}>
                    {tier.price}
                  </p>
                  <div className="space-y-2.5 mb-6">
                    {[
                      ["Storage", tier.storage],
                      ["Bandwidth", tier.bandwidth],
                      ["Email", tier.emailAccounts],
                      ["Domains", tier.domains],
                    ].map(([label, value]) => (
                      <div key={label} className="flex items-baseline gap-2 text-sm">
                        <span className="text-muted-foreground w-20 flex-shrink-0">{label}</span>
                        <span className="font-medium text-foreground/85">{value}</span>
                      </div>
                    ))}
                  </div>
                  <ul className="space-y-2 mb-8 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-foreground/75">
                        <CheckCircle size={15} className="text-brand-success flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <span
                      className={`block w-full text-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        tier.highlighted
                          ? "bg-gradient-primary text-white hover:shadow-lg hover:shadow-brand-secondary/25"
                          : "border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
                      }`}
                    >
                      Choose {tier.name}
                    </span>
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              All packages include domain registration support and free setup. Custom VPS and dedicated hosting also available on request.
            </p>
          </div>
        </section>
      )}

      {/* Related Services */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Related Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((s, i) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <div className="glass-card border-0 p-6 hover-lift">
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{s.description}</p>
                  <span className="text-brand-secondary text-sm font-medium">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ready to Get Started?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Let's discuss how our {service.title.toLowerCase()} services can help your business grow.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand bg-white rounded-xl hover:shadow-xl transition-all duration-300">
              Contact Us <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
