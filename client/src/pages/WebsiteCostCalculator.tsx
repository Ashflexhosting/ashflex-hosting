import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calculator, CheckCircle, Download, HelpCircle, Star } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "wouter";

type PlanId = "starter" | "business" | "professional" | "enterprise";

interface Plan {
  id: PlanId;
  name: string;
  basePrice: number;
  priceLabel: string;
  description: string;
  popular: boolean;
  included: string[];
  extraOptions: string[];
  pagesLabel: string;
  seoLabel: string;
  ecommerceIncluded: boolean;
  apiIncluded: boolean;
}

const PLANS: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    basePrice: 150000,
    priceLabel: "₦150,000",
    description: "Perfect for small businesses and startups getting online",
    popular: false,
    included: [
      "5-Page Responsive Website",
      "Mobile-First Design",
      "Contact Form Integration",
      "Basic SEO Setup",
      "SSL Certificate",
      "1 Month Free Support",
      "Google Analytics Setup",
    ],
    extraOptions: ["E-commerce Store", "Advanced SEO", "Complete SEO", "API Integrations"],
    pagesLabel: "5 pages",
    seoLabel: "Basic SEO",
    ecommerceIncluded: false,
    apiIncluded: false,
  },
  {
    id: "business",
    name: "Business",
    basePrice: 350000,
    priceLabel: "₦350,000",
    description: "Ideal for growing businesses that need more features",
    popular: true,
    included: [
      "10-Page Custom Website",
      "Premium Design System",
      "Advanced SEO Package",
      "Content Management System",
      "E-commerce Ready (Up to 50 products)",
      "3 Months Free Support",
      "Analytics Dashboard",
      "Performance Optimization",
      "Social Media Integration",
    ],
    extraOptions: ["Full E-commerce Store", "Complete SEO", "API Integrations"],
    pagesLabel: "10 pages",
    seoLabel: "Advanced SEO",
    ecommerceIncluded: true,
    apiIncluded: false,
  },
  {
    id: "professional",
    name: "Professional",
    basePrice: 750000,
    priceLabel: "₦750,000",
    description: "For established businesses needing comprehensive solutions",
    popular: false,
    included: [
      "Unlimited Pages",
      "Custom Functionality",
      "Full E-commerce Store",
      "Payment Gateway Integration",
      "API Integrations",
      "Priority Support (6 months)",
      "Complete SEO Package",
      "Training Sessions",
      "Monthly Performance Reports",
      "Content Strategy",
    ],
    extraOptions: ["Annual Maintenance"],
    pagesLabel: "Unlimited pages",
    seoLabel: "Complete SEO",
    ecommerceIncluded: true,
    apiIncluded: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    basePrice: 1500000,
    priceLabel: "₦1,500,000+",
    description: "For large organizations with complex requirements",
    popular: false,
    included: [
      "Unlimited Everything",
      "Custom Web Applications",
      "Enterprise Security",
      "Dedicated Account Manager",
      "24/7 Priority Support",
      "Custom Integrations",
      "Training & Onboarding",
      "SLA Guarantee",
      "Scalability Planning",
      "White-label Solutions",
    ],
    extraOptions: [],
    pagesLabel: "Unlimited",
    seoLabel: "Complete SEO",
    ecommerceIncluded: true,
    apiIncluded: true,
  },
];

const EXTRA_PRICES: Record<string, number> = {
  ecommerce: 200000,
  seoAdvanced: 75000,
  seoComplete: 150000,
  api: 500000,
  maintenance: 300000,
};

interface ExtraState {
  ecommerce: boolean;
  seo: "none" | "advanced" | "complete";
  api: boolean;
  maintenance: boolean;
}

function downloadEstimatePdf(
  plan: Plan,
  formatted: string,
  extras: ExtraState,
  extrasBreakdown: { label: string; price: number }[]
) {
  const now = new Date();
  const lines: string[] = [];
  const push = (t: string) => lines.push(t);
  push("ASHFLEX WEB DESIGN — WEBSITE COST ESTIMATE");
  push("==========================================");
  push("");
  push(`Generated: ${now.toLocaleString("en-GB", { dateStyle: "full", timeStyle: "short" })}`);
  push("");
  push(`Selected plan: ${plan.name} — ${plan.priceLabel} ${plan.id === "enterprise" ? "(starting)" : "one-time"}`);
  push(`Includes: ${plan.pagesLabel}, ${plan.seoLabel}`);
  if (plan.ecommerceIncluded) push("Includes: E-commerce ready");
  if (plan.apiIncluded) push("Includes: API integrations");
  push("");
  for (const e of extrasBreakdown) push(`${e.label}: +₦${new Intl.NumberFormat("en-NG").format(e.price)}`);
  push("");
  push(`ESTIMATED TOTAL: ${formatted}${plan.id === "enterprise" ? " (estimate starts from ₦1,500,000)" : ""}`);
  push("");
  push("This is an estimate. Final pricing may vary based on");
  push("specific requirements.");
  push("");
  push("Contact: info@ashflexwebdesign.com · 08023138892");
  push("www.ashflexwebdesign.com");
  const blob = new Blob([lines.join("\n")], { type: "application/pdf" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `ashflex-estimate-${now.toISOString().slice(0, 10)}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export default function WebsiteCostCalculator() {
  const sectionRef = useScrollReveal();
  const [planId, setPlanId] = useState<PlanId>("business");
  const [extras, setExtras] = useState<ExtraState>({
    ecommerce: false,
    seo: "none",
    api: false,
    maintenance: false,
  });

  const plan = PLANS.find((p) => p.id === planId)!;

  // Extras that upgrade what the plan already includes
  let extrasBreakdown: { label: string; price: number }[] = [];
  if (extras.ecommerce && !plan.ecommerceIncluded) {
    extrasBreakdown.push({ label: "Full E-commerce store", price: EXTRA_PRICES.ecommerce });
  }
  if (extras.seo === "advanced" && plan.seoLabel !== "Advanced SEO") {
    extrasBreakdown.push({ label: "Advanced SEO", price: EXTRA_PRICES.seoAdvanced });
  }
  if (extras.seo === "complete" && plan.seoLabel !== "Complete SEO") {
    extrasBreakdown.push({ label: "Complete SEO package", price: EXTRA_PRICES.seoComplete });
  }
  if (extras.api && !plan.apiIncluded) {
    extrasBreakdown.push({ label: "API integrations", price: EXTRA_PRICES.api });
  }
  if (extras.maintenance) {
    extrasBreakdown.push({ label: "Annual maintenance", price: EXTRA_PRICES.maintenance });
  }
  // Enterprise base is a starting figure; extras stack on top
  const extrasTotal = extrasBreakdown.reduce((sum, e) => sum + e.price, 0);
  const total = plan.basePrice + extrasTotal;
  const ngn = (v: number) =>
    new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(v);
  const formatted = plan.id === "enterprise" ? "₦1,500,000+" : ngn(total);

  const toggleSeo = (v: "none" | "advanced" | "complete") => {
    setExtras((prev) => ({ ...prev, seo: prev.seo === v ? "none" : v }));
  };

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Website Cost Calculator"
        description="Match your project to one of our pricing plans and see your total instantly. Start from a plan, then add the extras your business needs."
        breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "Cost Calculator" }]}
      />

      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 scroll-reveal">
              <Card className="glass-card border-0 p-8">
                <CardContent className="p-0 space-y-8">
                  {/* ============ PLAN SELECTION ============ */}
                  <div>
                    <label className="text-sm font-semibold mb-3 flex items-center gap-1.5">
                      1. Choose your plan
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle size={14} className="text-muted-foreground cursor-help" aria-label="Plans match the Pricing page tiers" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs">
                            <p>Each plan matches the packages on our Pricing page — selecting one pre-fills everything the plan includes.</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {PLANS.map((p) => (
                        <button
                          key={p.id}
                          onClick={() => {
                            setPlanId(p.id);
                            // Extras already covered by the plan auto-resolve
                            setExtras((prev) => ({
                              ecommerce: prev.ecommerce && !p.ecommerceIncluded,
                              seo:
                                prev.seo === "complete" && p.seoLabel === "Complete SEO"
                                  ? "none"
                                  : prev.seo === "advanced" && p.seoLabel === "Advanced SEO"
                                    ? "none"
                                    : prev.seo,
                              api: prev.api && !p.apiIncluded,
                              maintenance: prev.maintenance,
                            }));
                          }}
                          className={`relative p-4 rounded-2xl text-left border-2 transition-all duration-200 ${
                            planId === p.id
                              ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary shadow-md shadow-brand-secondary/10"
                              : "border-border hover:border-brand-secondary/30"
                          }`}
                        >
                          {p.popular && (
                            <span className="absolute -top-2.5 right-3 inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold bg-brand-accent text-white rounded-full">
                              <Star size={9} fill="white" /> Popular
                            </span>
                          )}
                          <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-heading)" }}>
                            {p.name}
                          </p>
                          <p className="text-lg font-bold mt-1" style={{ fontFamily: "var(--font-heading)" }}>
                            {p.priceLabel}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1 leading-snug line-clamp-2">{p.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* ============ WHAT'S INCLUDED ============ */}
                  <div className="rounded-2xl border border-border bg-muted/40 p-5">
                    <p className="text-sm font-semibold mb-3 flex items-center gap-2">
                      <CheckCircle size={15} className="text-brand-success" />
                      Included in {plan.name} ({plan.priceLabel})
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {plan.included.map((f) => (
                        <p key={f} className="text-sm text-muted-foreground flex items-start gap-2">
                          <CheckCircle size={12} className="mt-1 flex-shrink-0 text-brand-success" />
                          {f}
                        </p>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground/70 mt-3">
                      {plan.pagesLabel} · {plan.seoLabel}
                      {plan.ecommerceIncluded ? " · E-commerce included" : ""}
                      {plan.apiIncluded ? " · API integrations included" : ""}
                    </p>
                  </div>

                  {/* ============ OPTIONAL EXTRAS ============ */}
                  {plan.extraOptions.length > 0 && (
                    <div>
                      <label className="text-sm font-semibold mb-3 flex items-center gap-1.5">
                        2. Optional extras
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <HelpCircle size={14} className="text-muted-foreground cursor-help" aria-label="Only extras not already in your plan are shown" />
                            </TooltipTrigger>
                            <TooltipContent className="max-w-xs">
                              <p>We only show upgrades that your plan doesn't already include.</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </label>
                      <div className="space-y-4">
                        {/* E-commerce */}
                        {plan.extraOptions.includes(plan.id === "starter" ? "E-commerce Store" : "Full E-commerce Store") && (
                          <div>
                            <p className="text-sm font-medium mb-2 flex items-center gap-1.5">
                              E-commerce store
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <HelpCircle size={14} className="text-muted-foreground cursor-help" aria-label="What does the E-commerce extra cover?" />
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs">
                                    <p>Full online store — product catalog, shopping cart, checkout, and payment gateway configuration.</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </p>
                            <button
                              onClick={() => setExtras((prev) => ({ ...prev, ecommerce: !prev.ecommerce }))}
                              className={`px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                                extras.ecommerce
                                  ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary"
                                  : "border-border hover:border-brand-secondary/30"
                              }`}
                            >
                              {extras.ecommerce ? "Yes (+₦200,000)" : "No"}
                            </button>
                          </div>
                        )}

                        {/* SEO */}
                        {plan.extraOptions.includes(plan.id === "starter" ? "Advanced SEO" : "Complete SEO") && (
                          <div>
                            <p className="text-sm font-medium mb-2 flex items-center gap-1.5">
                              SEO package
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <HelpCircle size={14} className="text-muted-foreground cursor-help" aria-label="What does each SEO package cover?" />
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs">
                                    <p>{plan.name} includes {plan.seoLabel}. Advanced (+₦75,000): keyword research + content optimization. Complete (+₦150,000): full technical SEO, site structure & analytics setup.</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                              {[
                                { v: "advanced" as const, l: "Advanced", price: "+₦75,000" },
                                { v: "complete" as const, l: "Complete", price: "+₦150,000" },
                              ].map((opt) => (
                                <button
                                  key={opt.v}
                                  onClick={() => toggleSeo(opt.v)}
                                  className={`p-3 rounded-xl text-sm font-medium border-2 transition-all ${
                                    extras.seo === opt.v
                                      ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary"
                                      : "border-border hover:border-brand-secondary/30"
                                  }`}
                                >
                                  {opt.l} <span className="text-xs text-muted-foreground">({opt.price})</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* API Integrations */}
                        {plan.extraOptions.includes("API Integrations") && (
                          <div>
                            <p className="text-sm font-medium mb-2 flex items-center gap-1.5">
                              API integrations
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <HelpCircle size={14} className="text-muted-foreground cursor-help" aria-label="What does API Integration cover?" />
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs">
                                    <p>Connects your website to external services — payment gateways, CRM systems, booking engines, shipping APIs, and custom third-party platforms (setup & basic testing).</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </p>
                            <button
                              onClick={() => setExtras((prev) => ({ ...prev, api: !prev.api }))}
                              className={`px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                                extras.api
                                  ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary"
                                  : "border-border hover:border-brand-secondary/30"
                              }`}
                            >
                              {extras.api ? "Yes (+₦500,000)" : "No"}
                            </button>
                          </div>
                        )}

                        {/* Annual maintenance (Professional & Enterprise) */}
                        {plan.extraOptions.includes("Annual Maintenance") && (
                          <div>
                            <p className="text-sm font-medium mb-2 flex items-center gap-1.5">
                              Annual maintenance
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <HelpCircle size={14} className="text-muted-foreground cursor-help" aria-label="What does Annual Maintenance cover?" />
                                  </TooltipTrigger>
                                  <TooltipContent className="max-w-xs">
                                    <p>Year-round support (₦300,000/yr) — updates, security patches, backups, bug fixes, uptime monitoring, and small content changes.</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </p>
                            <button
                              onClick={() => setExtras((prev) => ({ ...prev, maintenance: !prev.maintenance }))}
                              className={`px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                                extras.maintenance
                                  ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary"
                                  : "border-border hover:border-brand-secondary/30"
                              }`}
                            >
                              {extras.maintenance ? "Yes (+₦300,000/yr)" : "No"}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {plan.extraOptions.length === 0 && (
                    <p className="text-sm text-muted-foreground rounded-2xl border border-border bg-muted/40 p-5">
                      {plan.name} includes everything — no extras needed. Need something beyond the plan?
                      {" "}
                      <Link href="/contact" className="text-brand-secondary font-medium underline underline-offset-2">
                        Get a custom quote
                      </Link>
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* ============ ESTIMATE CARD ============ */}
            <div className="lg:col-span-1">
              <Card className="bg-gradient-brand text-white border-0 p-8 sticky top-24 scroll-reveal" style={{ transitionDelay: "100ms" }}>
                <CardContent className="p-0">
                  <Calculator size={32} className="text-brand-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Estimated Cost</h3>
                  <p className="text-3xl font-bold text-brand-accent mb-1" style={{ fontFamily: "var(--font-heading)" }}>
                    {formatted}
                  </p>
                  <p className="text-xs text-white/60 mb-4">
                    {plan.name} plan{extrasTotal > 0 ? " + extras" : ""}
                    {plan.id === "enterprise" ? " (starting)" : ""}
                  </p>
                  <div className="border-t border-white/10 mb-4" />
                  <p className="text-xs font-semibold text-white/70 uppercase tracking-wider mb-3">Breakdown</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start justify-between gap-2 text-sm text-white/80">
                      <span>{plan.name} plan ({plan.pagesLabel})</span>
                      <span className="font-medium text-white">{plan.priceLabel}</span>
                    </li>
                    {plan.ecommerceIncluded && (
                      <li className="flex items-start justify-between gap-2 text-sm text-brand-success">
                        <span>E-commerce — included</span>
                        <CheckCircle size={14} className="mt-0.5" />
                      </li>
                    )}
                    <li className="flex items-start justify-between gap-2 text-sm text-brand-success">
                      <span>{plan.seoLabel} — included</span>
                      <CheckCircle size={14} className="mt-0.5" />
                    </li>
                    {plan.apiIncluded && (
                      <li className="flex items-start justify-between gap-2 text-sm text-brand-success">
                        <span>API integrations — included</span>
                        <CheckCircle size={14} className="mt-0.5" />
                      </li>
                    )}
                    {extrasBreakdown.map((e) => (
                      <li key={e.label} className="flex items-start justify-between gap-2 text-sm text-brand-accent">
                        <span>{e.label}</span>
                        <span className="font-medium">+₦{new Intl.NumberFormat("en-NG").format(e.price)}</span>
                      </li>
                    ))}
                    {extrasBreakdown.length === 0 && (
                      <li className="flex items-start gap-2 text-xs text-white/50">
                        <CheckCircle size={13} className="mt-0.5 flex-shrink-0 text-brand-accent" />
                        No extras — plan covers everything
                      </li>
                    )}
                  </ul>
                  <p className="text-sm text-white/50 mb-6">
                    This is an estimate. Final pricing may vary based on specific requirements.
                  </p>
                  <button
                    onClick={() => downloadEstimatePdf(plan, formatted, extras, extrasBreakdown)}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl bg-white/10 border border-white/30 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-200 mb-3"
                  >
                    <Download size={16} /> Download Breakdown (PDF)
                  </button>
                  <Link href="/contact">
                    <span className="block w-full text-center px-6 py-3 rounded-xl bg-white text-brand text-sm font-semibold hover:shadow-lg transition-all duration-200 mb-3">
                      Get Exact Quote
                    </span>
                  </Link>
                  <Link href="/pricing">
                    <span className="flex items-center justify-center gap-1.5 w-full text-center text-xs text-white/70 hover:text-white transition-colors duration-200">
                      View all plan details <ArrowRight size={12} />
                    </span>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
