import { useParams, Link } from "wouter";
import { ArrowRight, CheckCircle, Star, Paintbrush, Code2, Rocket, ShieldCheck, LifeBuoy } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { getServiceBySlug, hostingTierImages, hostingTiers, servicePricingImages, services } from "@/data/services";
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
  const popularServices = new Set(["website-design", "ecommerce-development"]);

const FEATURE_ICONS = [Paintbrush, Code2, Rocket, ShieldCheck, LifeBuoy, CheckCircle];

const PROCESS_STEPS = [
  {
    title: "Discovery & Research",
    body: "We dig into your business, audience, and goals to build a foundation that shapes every design decision.",
  },
  {
    title: "Planning & Strategy",
    body: "A clear roadmap — site structure, user journeys, and deliverables — agreed before a single pixel is drawn.",
  },
  {
    title: "Design & Development",
    body: "Your design comes to life with clean, fast, SEO-ready code and an iterative review loop with you at the centre.",
  },
  {
    title: "Testing & Optimization",
    body: "Cross-device, cross-browser testing plus performance tuning so every visitor gets a flawless experience.",
  },
  {
    title: "Launch & Support",
    body: "A careful, monitored launch followed by ongoing support — because your site is only as strong as the team behind it.",
  },
];

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
              {/* Our Approach */}
              <p className="inline-flex items-center gap-2 mb-4 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                <span className="inline-block w-8 h-px bg-brand-accent" /> Our Approach
              </p>
              <h2 className="text-2xl md:text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
                <span className="bg-gradient-to-r from-brand-secondary to-brand-accent bg-clip-text text-transparent">{service.title} Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                At Ashflex Web Design, we deliver comprehensive {service.title.toLowerCase()} solutions tailored to your business needs. Our team combines creative excellence with technical expertise to produce results that drive real growth.
              </p>

              {/* What's Included */}
              <p className="inline-flex items-center gap-2 mb-5 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                <span className="inline-block w-8 h-px bg-brand-accent" /> What's Included
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
                {service.features.map((feature, i) => {
                  const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                  return (
                    <div
                      key={i}
                      className="bento-reveal group flex items-start gap-4 rounded-2xl border border-border/70 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-brand-secondary/30"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-secondary to-brand-accent flex-shrink-0">
                        <Icon size={19} className="text-white" />
                      </span>
                      <span className="block text-[15px] font-medium text-foreground/85 leading-snug pt-1">{feature}</span>
                    </div>
                  );
                })}
              </div>

              {/* Our Process */}
              <p className="inline-flex items-center gap-2 mb-6 text-xs font-bold uppercase tracking-[0.2em] text-brand-accent">
                <span className="inline-block w-8 h-px bg-brand-accent" /> Our Process
              </p>
              <div className="space-y-6 mb-4">
                {PROCESS_STEPS.map((step, i) => (
                  <div key={i} className="bento-reveal flex items-start gap-5" style={{ transitionDelay: `${i * 60}ms` }}>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-secondary to-brand-accent flex items-center justify-center flex-shrink-0 shadow-md shadow-brand-secondary/25">
                      <span className="text-sm font-bold text-white">{i + 1}</span>
                    </div>
                    <div className="flex-1 border border-border/70 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 hover:border-brand-secondary/30" style={{ borderRadius: "15px" }}>
                      <h4 className="font-semibold text-foreground mb-1" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="glass-card border-0 p-6 sticky top-24 hover-shadow-pricing transition-shadow duration-500">
                {servicePricingImages[service.slug] && (
                  <div className="relative -m-6 mb-5 overflow-hidden rounded-t-2xl group">
                    <img
                      src={servicePricingImages[service.slug]}
                      alt={`${service.title} illustration`}
                      className="w-full h-44 object-cover transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform img-fade-in"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    {popularServices.has(service.slug) && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-primary text-white text-[11px] font-semibold uppercase tracking-wide shadow-md shadow-brand-secondary/30">
                        <Star size={11} className="fill-current" /> Popular Service
                      </span>
                    )}
                  </div>
                )}
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
                  {hostingTierImages[tier.name] && (
                    <div className="relative -m-8 mb-5 -mt-8 overflow-hidden rounded-t-2xl">
                      <img
                        src={hostingTierImages[tier.name]}
                        alt={`${tier.name} hosting package illustration`}
                        className="w-full h-40 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                    </div>
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
                  <a
                    href={`https://wa.me/2348023138892?text=${encodeURIComponent(`Hello Ashflex Web Design! I'd like to enquire about the ${tier.name} hosting package (${tier.price}/year). Please share the next steps.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      tier.highlighted
                        ? "bg-gradient-primary text-white hover:shadow-lg hover:shadow-brand-secondary/25"
                        : "border border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white"
                    }`}
                  >
                    Choose {tier.name}
                  </a>
                </div>
              ))}
            </div>
            {/* Spec comparison table */}
            <div className="mt-16 scroll-reveal overflow-x-auto">
              <table className="w-full min-w-[640px] text-sm">
                <thead>
                  <tr className="text-left">
                    <th className="py-3 pr-4 font-semibold text-muted-foreground">Feature</th>
                    {hostingTiers.map((tier) => (
                      <th
                        key={tier.name}
                        className={`py-3 px-4 font-bold ${tier.highlighted ? "text-brand-secondary" : ""}`}
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {tier.name}
                        {tier.highlighted && <span className="ml-1.5 text-[10px] font-bold uppercase tracking-wide bg-gradient-primary text-white rounded-full px-2 py-0.5 align-middle">Popular</span>}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="border-t border-border/50">
                  {[
                    { label: "Price (per year)", values: hostingTiers.map((t) => t.price), isPrice: true },
                    { label: "Storage", values: hostingTiers.map((t) => t.storage) },
                    { label: "Bandwidth", values: hostingTiers.map((t) => t.bandwidth) },
                    { label: "Email mailboxes", values: hostingTiers.map((t) => t.emailAccounts) },
                    { label: "Domains included", values: hostingTiers.map((t) => t.domains) },
                    { label: "SSL certificate", values: ["Free SSL", "Free SSL", "Free Wildcard SSL"] },
                    { label: "Backups", values: ["Weekly", "Daily", "Real-time"] },
                    { label: "Uptime guarantee", values: ["99.9%", "99.9%", "99.9%"] },
                    { label: "Control panel", values: ["cPanel", "cPanel", "cPanel"] },
                    { label: "CDN", values: [false, false, true] },
                    { label: "Malware scanning", values: [false, false, true] },
                    { label: "Priority support", values: [false, true, true] },
                    { label: "24/7 priority support", values: [false, false, true] },
                    { label: "Multiple websites", values: ["1", "Up to 5", "Unlimited"] },
                  ].map((row) => (
                    <tr key={row.label} className="border-t border-border/30">
                      <td className="py-3 pr-4 text-muted-foreground">{row.label}</td>
                      {row.values.map((v, i) => (
                        <td key={i} className={`py-3 px-4 ${row.isPrice ? "font-bold text-brand-secondary" : ""}`}>
                          {v === true ? (
                            <CheckCircle size={16} className="text-brand-success" aria-label="Included" />
                          ) : v === false ? (
                            <span className="inline-block w-4 h-px bg-muted-foreground/40" aria-label="Not included" />
                          ) : (
                            <span className="text-foreground/85">{v}</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
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
                <div className="glass-card border-0 p-6 hover-lift overflow-hidden">
                  {servicePricingImages[s.slug] && (
                    <div className="relative -m-6 mb-4 overflow-hidden rounded-t-2xl">
                      <img
                        src={servicePricingImages[s.slug]}
                        alt={`${s.title} illustration`}
                        className="w-full h-32 object-cover transition-transform duration-700 ease-out hover:scale-110 will-change-transform"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    </div>
                  )}
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
