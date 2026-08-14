import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calculator } from "lucide-react";
import { Link } from "wouter";

export default function WebsiteCostCalculator() {
  const sectionRef = useScrollReveal();
  const [pages, setPages] = useState(5);
  const [design, setDesign] = useState("standard");
  const [ecommerce, setEcommerce] = useState(false);
  const [seo, setSeo] = useState("basic");
  const [maintenance, setMaintenance] = useState(false);
  const [apiIntegration, setApiIntegration] = useState(false);

  let baseCost = pages * 15000;
  if (design === "premium") baseCost *= 1.5;
  if (design === "custom") baseCost *= 2;
  if (ecommerce) baseCost += 200000;
  if (seo === "advanced") baseCost += 75000;
  if (seo === "complete") baseCost += 150000;
  if (maintenance) baseCost += 25000 * 12;
  if (apiIntegration) baseCost += 500000;

  const formatted = new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN", maximumFractionDigits: 0 }).format(baseCost);

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Website Cost Calculator"
        description="Estimate the cost of your website project based on your requirements. Get an instant quote right now."
        breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "Cost Calculator" }]}
      />

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 scroll-reveal">
              <Card className="glass-card border-0 p-8">
                <CardContent className="p-0 space-y-8">
                  <div>
                    <label className="text-sm font-semibold mb-2 block">Number of Pages: {pages}</label>
                    <input
                      type="range"
                      min="1"
                      max="50"
                      value={pages}
                      onChange={(e) => setPages(Number(e.target.value))}
                      className="w-full accent-brand-secondary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>1 page</span><span>50 pages</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block">Design Complexity</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[{ v: "standard", l: "Standard" }, { v: "premium", l: "Premium" }, { v: "custom", l: "Custom" }].map((opt) => (
                        <button
                          key={opt.v}
                          onClick={() => setDesign(opt.v)}
                          className={`p-3 rounded-xl text-sm font-medium border-2 transition-all ${
                            design === opt.v ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary" : "border-border hover:border-brand-secondary/30"
                          }`}
                        >
                          {opt.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block">E-commerce Store</label>
                    <button
                      onClick={() => setEcommerce(!ecommerce)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                        ecommerce ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary" : "border-border hover:border-brand-secondary/30"
                      }`}
                    >
                      {ecommerce ? "Yes (+₦200,000)" : "No"}
                    </button>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block">SEO Package</label>
                    <div className="grid grid-cols-3 gap-3">
                      {[{ v: "none", l: "None" }, { v: "basic", l: "Basic" }, { v: "advanced", l: "Advanced" }].map((opt) => (
                        <button
                          key={opt.v}
                          onClick={() => setSeo(opt.v)}
                          className={`p-3 rounded-xl text-sm font-medium border-2 transition-all ${
                            seo === opt.v ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary" : "border-border hover:border-brand-secondary/30"
                          }`}
                        >
                          {opt.l}
                        </button>
                      ))}
                    </div>
                  </div>


                  <div>
                    <label className="text-sm font-semibold mb-3 block">API Integration</label>
                    <button
                      onClick={() => setApiIntegration(!apiIntegration)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                        apiIntegration ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary" : "border-border hover:border-brand-secondary/30"
                      }`}
                    >
                      {apiIntegration ? "Yes (+₦500,000)" : "No"}
                    </button>
                  </div>

                  <div>
                    <label className="text-sm font-semibold mb-3 block">Annual Maintenance</label>
                    <button
                      onClick={() => setMaintenance(!maintenance)}
                      className={`px-5 py-2.5 rounded-xl text-sm font-medium border-2 transition-all ${
                        maintenance ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary" : "border-border hover:border-brand-secondary/30"
                      }`}
                    >
                      {maintenance ? "Yes (+₦300,000/yr)" : "No"}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="bg-gradient-brand text-white border-0 p-8 sticky top-24">
                <CardContent className="p-0">
                  <Calculator size={32} className="text-brand-accent mb-4" />
                  <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "var(--font-heading)" }}>Estimated Cost</h3>
                  <p className="text-3xl font-bold text-brand-accent mb-4" style={{ fontFamily: "var(--font-heading)" }}>{formatted}</p>
                  <p className="text-sm text-white/50 mb-6">
                    This is an estimate. Final pricing may vary based on specific requirements.
                  </p>
                  <Link href="/contact">
                    <span className="block w-full text-center px-6 py-3 rounded-xl bg-white text-brand text-sm font-semibold hover:shadow-lg transition-all duration-200">
                      Get Exact Quote
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
