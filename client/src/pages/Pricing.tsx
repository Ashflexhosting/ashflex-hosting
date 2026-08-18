import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, X, Star, Info, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "₦150,000",
    period: "one-time",
    description: "Perfect for small businesses and startups getting online",
    features: ["5-Page Responsive Website", "Mobile-First Design", "Contact Form Integration", "Basic SEO Setup", "SSL Certificate", "1 Month Free Support", "Google Analytics Setup", "1 Year Free Hosting + Domain (.com / .com.ng / .ng)"],
    excluded: ["Custom Functionality", "E-commerce Store", "API Integrations", "Priority Support"],
    popular: false,
  },
  {
    name: "Business",
    price: "₦350,000",
    period: "one-time",
    description: "Ideal for growing businesses that need more features",
    features: ["10-Page Custom Website", "Premium Design System", "Advanced SEO Package", "Content Management System", "E-commerce Ready (Up to 50 products)", "3 Months Free Support", "Analytics Dashboard", "Performance Optimization", "Social Media Integration", "1 Year Free Hosting + Domain (.com / .com.ng / .ng)"],
    excluded: ["Custom API Integrations", "Unlimited Products"],
    popular: true,
  },
  {
    name: "Professional",
    price: "₦750,000",
    period: "one-time",
    description: "For established businesses needing comprehensive solutions",
    features: ["Unlimited Pages", "Custom Functionality", "Full E-commerce Store", "Payment Gateway Integration", "API Integrations", "Priority Support (6 months)", "Complete SEO Package", "Training Sessions", "Monthly Performance Reports", "Content Strategy", "1 Year Free Hosting + Domain (.com / .com.ng / .ng)"],
    excluded: [],
    popular: false,
  },
  {
    name: "Enterprise",
    price: "₦1,500,000+",
    period: "starting",
    description: "For large organizations with complex requirements",
    features: ["Unlimited Everything", "Custom Web Applications", "Enterprise Security", "Dedicated Account Manager", "24/7 Priority Support", "Custom Integrations", "Training & Onboarding", "SLA Guarantee", "Scalability Planning", "White-label Solutions", "1 Year Free Hosting + Domain (.com / .com.ng / .ng)"],
    excluded: [],
    popular: false,
  },
];

const comparisonFeatures = [
  { name: "Pages", starter: "5", business: "10", professional: "Unlimited", enterprise: "Unlimited" },
  { name: "Free Hosting + Domain (.com / .com.ng / .ng) — 1 Year", starter: true, business: true, professional: true, enterprise: true, hasRenewalTooltip: true },
  { name: "Responsive Design", starter: true, business: true, professional: true, enterprise: true },
  { name: "SEO Setup", starter: "Basic", business: "Advanced", professional: "Complete", enterprise: "Complete" },
  { name: "E-commerce", starter: false, business: "Up to 50", professional: "Unlimited", enterprise: "Unlimited" },
  { name: "Payment Integration", starter: false, business: false, professional: true, enterprise: true },
  { name: "API Integrations", starter: false, business: false, professional: true, enterprise: true },
  { name: "CMS", starter: false, business: true, professional: true, enterprise: true },
  { name: "Free Support", starter: "1 month", business: "3 months", professional: "6 months", enterprise: "12 months" },
  { name: "Training Sessions", starter: false, business: false, professional: true, enterprise: true },
  { name: "Monthly Reports", starter: false, business: false, professional: true, enterprise: true },
  { name: "Dedicated Manager", starter: false, business: false, professional: false, enterprise: true },
  { name: "SLA Guarantee", starter: false, business: false, professional: false, enterprise: true },
  { name: "Estimated Timeline", starter: "1 week", business: "2 weeks", professional: "3–4 weeks", enterprise: "Custom", hasTimelineTooltip: true },
];

function renderValue(value: any) {
  if (value === true) return <CheckCircle size={18} className="text-brand-success mx-auto" />;
  if (value === false) return <X size={18} className="text-muted-foreground/30 mx-auto" />;
  return <span className="text-sm">{value}</span>;
}

const hostingRenewalRates = "Year 2 onward: Starter ₦60,000 · Professional ₦85,000 · Business ₦120,000 per year";

const timelineByPlan: Record<string, string> = {
  Starter: "about 1 week",
  Business: "about 2 weeks",
  Professional: "3–4 weeks",
  Enterprise: "custom timeline (discussed in consultation)",
};

const renewalByPlan: Record<string, string> = {
  Starter: "60,000",
  Business: "85,000",
  Professional: "120,000",
  Enterprise: "custom",
};

function EstimatedSummary() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  useEffect(() => {
    const onEnter = (e: Event) => {
      const el = e.target as HTMLElement;
      const card = el.closest<HTMLDivElement>("[data-plan-name]");
      if (card) setHoveredPlan(card.getAttribute("data-plan-name"));
    };
    const onLeave = () => setHoveredPlan(null);

    const cards = document.querySelectorAll<HTMLDivElement>("[data-plan-name]");
    cards.forEach((c) => {
      c.addEventListener("mouseenter", onEnter);
      c.addEventListener("mouseleave", onLeave);
      c.addEventListener("focusin", onEnter);
      c.addEventListener("focusout", onLeave);
    });
    return () => {
      cards.forEach((c) => {
        c.removeEventListener("mouseenter", onEnter);
        c.removeEventListener("mouseleave", onLeave);
        c.removeEventListener("focusin", onEnter);
        c.removeEventListener("focusout", onLeave);
      });
    };
  }, []);

  const plan = hoveredPlan ? plans.find((p) => p.name === hoveredPlan) ?? null : null;

  return (
    <div className="max-w-2xl mx-auto mb-8 scroll-reveal">
      <div className="rounded-2xl border border-brand-secondary/20 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-brand-secondary/10">
        <div className="flex items-center justify-center gap-2 bg-brand-secondary/5 px-4 py-2 border-b border-brand-secondary/10">
          <Clock size={14} className="text-brand-secondary" />
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
            Estimated Cost & Timeline
          </span>
        </div>
        <div className="px-6 py-4 text-center min-h-[56px] flex flex-col items-center justify-center transition-colors duration-300">
          {plan ? (
            <p className="text-sm text-foreground/90">
              <span className="font-bold text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>
                {plan.name} plan
              </span>
              {" "}— <span className="font-semibold">{plan.price}</span> one-time · delivery in{" "}
              <span className="font-semibold">
                {timelineByPlan[plan.name] ?? "a few weeks"}
              </span>
              {" "}· renewal hosting from ₦{renewalByPlan[plan.name] ?? "0"}/yr
            </p>
          ) : (
            <p className="text-sm text-muted-foreground">
              Hover over any plan card above to see its estimated cost and delivery timeline.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function GetStartedButton({ popular, planName }: { popular: boolean; planName: string }) {
  const label = planName === "Enterprise" ? "Get a Quote" : "Get Started";
  const href = `/contact?service=${encodeURIComponent("pricing")}&message=${encodeURIComponent(`I'd like to get started with the ${planName} plan (${plans.find((p) => p.name === planName)?.price ?? ""}). Please share the next steps.`)}`;
  return (
    <Link
      href={href}
      className="inline-block pointer-events-auto"
      title={label}
      style={{ touchAction: "manipulation" }}
    >
      <span
        className={`inline-flex items-center justify-center gap-1.5 w-full max-w-[160px] text-center px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
          popular
            ? "bg-gradient-accent text-white shadow-md shadow-brand-accent/30 hover:shadow-lg hover:shadow-brand-accent/40 hover:-translate-y-0.5"
            : "border-2 border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white hover:-translate-y-0.5"
        }`}
      >
        {label}
        <ArrowRight size={14} />
      </span>
    </Link>
  );
}

function TimelineTooltip() {
  return (
    <span className="ml-1.5 inline-flex items-center relative group">
      <span className="flex items-center justify-center min-h-11 min-w-11 -m-2 cursor-help">
        <Info size={15} className="text-white/90" aria-label="Delivery timeline details" />
      </span>
      <span className="pointer-events-none absolute left-1/2 bottom-full z-50 mb-2 hidden w-80 -translate-x-1/2 rounded-lg bg-brand px-3.5 py-3 text-xs text-white shadow-xl ring-1 ring-white/20 group-hover:block group-focus-within:block">
        <span className="font-semibold text-brand-cyan">What affects delivery speed:</span>
        <ul className="mt-1.5 space-y-1 leading-relaxed list-disc pl-3.5">
          <li>How quickly content &amp; brand assets are provided</li>
          <li>Design revisions and approval turnaround</li>
          <li>Scope of pages, features &amp; integrations</li>
          <li>Third-party tools (payments, booking systems)</li>
          <li>Confirmation of project deposit</li>
        </ul>
      </span>
    </span>
  );
}

function RenewalTooltip() {
  return (
    <span className="ml-1.5 inline-flex items-center relative group">
      <span className="flex items-center justify-center min-h-11 min-w-11 -m-2 cursor-help">
        <Info size={15} className="text-white/90" aria-label="Renewal cost details" />
      </span>
      <span className="absolute left-1/2 bottom-full z-50 mb-2 hidden w-72 -translate-x-1/2 rounded-lg bg-brand px-3.5 py-2.5 text-xs text-white shadow-xl ring-1 ring-white/20 group-hover:block group-focus-within:block">
        <span className="font-semibold text-brand-cyan">Renewal after free year 1:</span> {hostingRenewalRates}
        <span className="mt-2 block border-t border-white/15 pt-2">
          <Link
            href="/faq#hosting-domains"
            className="inline-flex items-center gap-1 font-semibold text-brand-cyan hover:text-white transition-colors duration-200"
            onClick={() => window.location.hash = "#hosting-domains"}
          >
            See all hosting renewal FAQs
            <ArrowRight size={11} className="shrink-0" aria-hidden="true" />
          </Link>
        </span>
      </span>
    </span>
  );
}

export default function Pricing() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Pricing Plans"
        description="Transparent pricing for every business size. Choose the package that fits your needs, or get a custom quote for unique requirements."
        breadcrumb={[{ label: "Pricing", href: "/pricing" }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="flex lg:block overflow-x-auto lg:overflow-visible snap-x snap-mandatory lg:snap-none gap-6 pb-3 -mx-4 px-4 lg:mx-0 lg:px-0" style={{ scrollbarWidth: "thin" }}>
            {plans.map((plan, i) => (
              <div key={plan.name} data-plan-name={plan.name} className="scroll-reveal max-md:min-w-[300px] max-md:snap-start max-md:flex-shrink-0" style={{ transitionDelay: `${i * 60}ms` }}>
                <Card className={`h-full border-0 p-6 ${plan.popular ? "bg-gradient-brand text-white shadow-2xl shadow-brand-secondary/20 lg:-mt-4 lg:pb-8" : "glass-card"}`}>
                  <CardContent className="p-0">
                    {plan.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-brand-accent text-white rounded-full">
                          <Star size={12} fill="white" /> Most Popular
                        </span>
                      </div>
                    )}
                    <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : ""}`} style={{ fontFamily: "var(--font-heading)" }}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-4 ${plan.popular ? "text-white/60" : "text-muted-foreground"}`}>
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className={`text-3xl font-bold ${plan.popular ? "text-white" : "text-foreground"}`} style={{ fontFamily: "var(--font-heading)" }}>
                        {plan.price}
                      </span>
                      <span className={`text-sm ${plan.popular ? "text-white/50" : "text-muted-foreground"}`}>
                        {" "}{plan.period}
                      </span>
                    </div>
                    <ul className="space-y-2.5 mb-6">
                      {plan.features.map((f) => (
                        <li key={f} className={`flex items-start gap-2 text-sm ${plan.popular ? "text-white/80" : "text-foreground/70"}`}>
                          <CheckCircle size={16} className={`mt-0.5 flex-shrink-0 ${plan.popular ? "text-brand-accent" : "text-brand-success"}`} />
                          {f}
                        </li>
                      ))}
                      {plan.excluded.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground/50">
                          <X size={16} className="mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?service=${encodeURIComponent("pricing")}&message=${encodeURIComponent(`I'd like to get started with the ${plan.name} plan (${plan.price}). Please share the next steps.`)}`}
                    >
                      <span className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
                        plan.popular
                          ? "bg-white text-brand text-sm hover:shadow-lg"
                          : "bg-gradient-primary text-white text-sm hover:shadow-lg hover:shadow-brand-secondary/25"
                      }`}>
                        Get Started
                      </span>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 relative overflow-hidden">
        {/* Creative backdrop */}
        <div className="absolute inset-0 bg-muted/30 pointer-events-none" />
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-brand-secondary/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-brand-accent/8 rounded-full blur-[120px]" />

        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Feature Comparison
            </h2>
            <p className="text-muted-foreground">Compare all features across our pricing plans</p>
          </div>

          {/* Dynamic Estimated cost & timeline summary */}
          <EstimatedSummary />


          <div className="overflow-x-auto">
            <table className="w-full min-w-[1280px]">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="sticky left-0 z-10 w-[170px] bg-brand text-white text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="w-[280px] text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="w-[280px] text-center py-4 px-4 font-semibold">Professional</th>
                  <th className="md:sticky right-0 z-20 w-[270px] text-center py-4 px-4 font-semibold text-brand-secondary bg-background">Business</th>
                  <th className="w-[280px] text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.name} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-white/50" : ""}`}>
                    <td className="sticky left-0 z-10 w-[170px] bg-brand text-white/85 py-3 px-4 text-sm font-medium">
                      {row.name}
                      {"hasRenewalTooltip" in row && row.hasRenewalTooltip && <RenewalTooltip />}
                      {"hasTimelineTooltip" in row && row.hasTimelineTooltip && <TimelineTooltip />}
                    </td>
                    <td className="w-[280px] py-3 px-4 text-center">{renderValue(row.starter)}</td>
                    <td className="w-[280px] py-3 px-4 text-center">{renderValue(row.professional)}</td>
                    <td className="md:sticky right-0 z-10 w-[270px] py-3 px-4 text-center bg-brand-secondary/5">{renderValue(row.business)}</td>
                    <td className="w-[280px] py-3 px-4 text-center">{renderValue(row.enterprise)}</td>
                  </tr>
                ))}
                {/* Get Started CTA row */}
                <tr className="border-b-2 border-border">
                  <td className="sticky left-0 z-10 w-[170px] bg-brand text-white py-4 px-4 font-semibold text-sm">Get Started</td>
                  <td className="w-[280px] py-4 px-4 text-center">
                    <GetStartedButton popular={false} planName="Starter" />
                  </td>
                  <td className="w-[280px] py-4 px-4 text-center">
                    <GetStartedButton popular={false} planName="Professional" />
                  </td>
                  <td className="md:sticky right-0 z-10 w-[270px] py-4 px-4 text-center bg-brand-secondary/5">
                    <GetStartedButton popular={true} planName="Business" />
                  </td>
                  <td className="w-[280px] py-4 px-4 text-center">
                    <GetStartedButton popular={false} planName="Enterprise" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* What happens next */}
          <div className="mt-12 scroll-reveal">
            <h3 className="text-center text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)" }}>
              What Happens Next?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery Call",
                  desc: "We discuss your goals, brand, and requirements in a free consultation to align on scope.",
                },
                {
                  step: "02",
                  title: "Design & Approval",
                  desc: "You review and approve the design direction before a single line of code is written.",
                },
                {
                  step: "03",
                  title: "Build & Testing",
                  desc: "We develop your site, optimize performance and SEO, and test across all devices.",
                },
                {
                  step: "04",
                  title: "Launch & Support",
                  desc: "Your site goes live with hosting, domain, and your included support period activated.",
                },
              ].map((item, i) => (
                <div key={item.step} className="relative p-6 rounded-2xl border border-border/60 bg-white/60 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-secondary/10" style={{ transitionDelay: `${i * 50}ms` }}>
                  <span className="text-3xl font-bold text-brand-accent/40" style={{ fontFamily: "var(--font-heading)" }}>
                    {item.step}
                  </span>
                  <h4 className="font-semibold text-foreground mt-2 mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                  {i < 3 && (
                    <ArrowRight size={16} className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 text-brand-accent z-10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Custom Quote CTA */}
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Need a Custom Solution?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Every business is unique. Get a tailored quote based on your specific requirements and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand bg-white rounded-xl hover:shadow-xl transition-all duration-300">
                Get Custom Quote <ArrowRight size={20} />
              </span>
            </Link>
            <Link href="/resources/website-cost-calculator">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white border-2 border-white/40 rounded-xl hover:border-white hover:bg-white/10 transition-all duration-300">
                Try the Cost Calculator <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
