import { useParams, Link } from "wouter";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getIndustryBySlug } from "@/data/industries";

export default function IndustryDetail() {
  const { slug } = useParams<{ slug: string }>();
  const sectionRef = useScrollReveal();
  const industry = getIndustryBySlug(slug || "");

  if (!industry) {
    return (
      <div className="pt-32 pb-20 container text-center">
        <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
        <Link href="/industries"><span className="text-brand-secondary font-medium hover:underline">Back to Industries →</span></Link>
      </div>
    );
  }

  return (
    <div ref={sectionRef}>
      <PageHeader
        title={`${industry.title} Solutions`}
        description={industry.description}
        breadcrumb={[{ label: "Industries", href: "/industries" }, { label: industry.title }]}
      />

      <section className="py-20">
        <div className="container max-w-5xl">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-16">
            {industry.stats.map((stat, i) => (
              <div key={i} className="text-center glass-card border-0 p-6">
                <p className="text-3xl md:text-4xl font-bold mb-1" style={{ fontFamily: "var(--font-heading)", color: industry.color }}>
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                {industry.title} Digital Solutions
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {industry.description}
              </p>

              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our {industry.title} Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {industry.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50">
                    <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: industry.color }} />
                    <span className="text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Why Choose Ashflex for {industry.title}?</h3>
              <div className="space-y-4">
                {[
                  `Deep understanding of the ${industry.title.toLowerCase()} industry landscape`,
                  "Proven track record with 248+ projects across multiple industries",
                  "Custom solutions built specifically for your sector",
                  "Dedicated team with industry-specific expertise",
                  "Compliance-ready solutions meeting industry standards",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Star size={18} className="mt-0.5 flex-shrink-0" style={{ color: industry.color }} fill={industry.color} />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card border-0 p-6 sticky top-24">
                <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Get Started</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Ready to transform your {industry.title.toLowerCase()} business with a powerful digital presence?
                </p>
                <Link href="/contact">
                  <span className="block w-full text-center px-6 py-3 rounded-xl bg-gradient-primary text-white text-sm font-semibold hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-200">
                    Get Free Consultation
                  </span>
                </Link>
                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle size={14} className="text-brand-success" />
                    Free initial consultation
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle size={14} className="text-brand-success" />
                    Custom quote within 24 hours
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle size={14} className="text-brand-success" />
                    No obligation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ready to Grow Your {industry.title} Business?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Let's discuss how we can help your {industry.title.toLowerCase()} business achieve its digital goals.
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
