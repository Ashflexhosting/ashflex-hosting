import { Link } from "wouter";
import { ArrowRight, CheckCircle, X, Star, Info } from "lucide-react";
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
];

function renderValue(value: any) {
  if (value === true) return <CheckCircle size={18} className="text-brand-success mx-auto" />;
  if (value === false) return <X size={18} className="text-muted-foreground/30 mx-auto" />;
  return <span className="text-sm">{value}</span>;
}

const hostingRenewalRates = "Year 2 onward: Starter ₦60,000 · Professional ₦85,000 · Business ₦120,000 per year";

function RenewalTooltip() {
  return (
    <span className="ml-1.5 inline-flex items-center relative group">
      <span className="flex items-center justify-center min-h-11 min-w-11 -m-2 cursor-help">
        <Info size={14} className="text-muted-foreground" aria-label="Renewal cost details" />
      </span>
      <span className="pointer-events-none absolute left-1/2 bottom-full z-20 mb-2 hidden w-64 -translate-x-1/2 rounded-lg bg-popover px-3 py-2 text-xs text-popover-foreground shadow-lg ring-1 ring-border group-hover:block">
        <span className="font-semibold">Renewal after free year 1:</span> {hostingRenewalRates}
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, i) => (
              <div key={plan.name} className="scroll-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
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
                    <Link href="/contact">
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
        <div className="absolute inset-0 bg-muted/30" />
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-brand-secondary/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-brand-accent/8 rounded-full blur-[120px]" />

        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Feature Comparison
            </h2>
            <p className="text-muted-foreground">Compare all features across our pricing plans</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 font-semibold text-brand-secondary">Business</th>
                  <th className="text-center py-4 px-4 font-semibold">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row, i) => (
                  <tr key={row.name} className={`border-b border-border/50 ${i % 2 === 0 ? "bg-white/50" : ""}`}>
                    <td className="py-3 px-4 text-sm font-medium">
                      {row.name}
                      {"hasRenewalTooltip" in row && row.hasRenewalTooltip && <RenewalTooltip />}
                    </td>
                    <td className="py-3 px-4 text-center">{renderValue(row.starter)}</td>
                    <td className="py-3 px-4 text-center bg-brand-secondary/5">{renderValue(row.business)}</td>
                    <td className="py-3 px-4 text-center">{renderValue(row.professional)}</td>
                    <td className="py-3 px-4 text-center">{renderValue(row.enterprise)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
