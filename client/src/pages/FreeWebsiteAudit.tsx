import { useState } from "react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, FileCheck, AlertTriangle, Info } from "lucide-react";
import { toast } from "sonner";

export default function FreeWebsiteAudit() {
  const sectionRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ url: "", name: "", email: "", phone: "", focus: "performance" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.url || !form.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setSubmitted(true);
    toast.success("Your audit request has been submitted! We'll review your website and send a detailed report within 48 hours.");
  };

  if (submitted) {
    return (
      <div ref={sectionRef}>
        <PageHeader
          title="Website Audit Request"
          description="Thank you for submitting your audit request. We'll review your website and send a detailed report within 48 hours."
          breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "Website Audit" }]}
        />
        <section className="py-20">
          <div className="container max-w-2xl text-center">
            <div className="glass-card border-0 p-12">
              <CheckCircle size={64} className="text-brand-success mx-auto mb-6" />
              <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Request Submitted!</h2>
              <p className="text-muted-foreground mb-6">
                We've received your website audit request. Our team will analyze your website and send a comprehensive report to <strong>{form.email}</strong> within 48 hours.
              </p>
              <p className="text-sm text-muted-foreground">
                Your report will include: Performance analysis, SEO assessment, Security review, Mobile responsiveness check, and actionable recommendations.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Free Website Audit"
        description="Get a comprehensive analysis of your website's performance, SEO, security, and user experience. Completely free — no obligation."
        breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "Website Audit" }]}
      />

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-3 scroll-reveal">
              <Card className="glass-card border-0 p-8">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>Request Your Free Audit</h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Website URL *</label>
                      <input
                        type="url"
                        value={form.url}
                        onChange={(e) => setForm({ ...form, url: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+234 800 123 4567"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Primary Focus Area</label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { v: "performance", l: "Performance" },
                          { v: "seo", l: "SEO" },
                          { v: "security", l: "Security" },
                          { v: "ux", l: "User Experience" },
                        ].map((opt) => (
                          <button
                            key={opt.v}
                            type="button"
                            onClick={() => setForm({ ...form, focus: opt.v })}
                            className={`p-3 rounded-xl text-sm font-medium border-2 transition-all ${
                              form.focus === opt.v ? "border-brand-secondary bg-brand-secondary/5 text-brand-secondary" : "border-border hover:border-brand-secondary/30"
                            }`}
                          >
                            {opt.l}
                          </button>
                        ))}
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      Get Free Audit <ArrowRight size={18} />
                    </button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card className="glass-card border-0 p-6">
                <CardContent className="p-0 space-y-6">
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>What's Included</h3>
                  {[
                    { title: "Performance Analysis", desc: "Page speed, Core Web Vitals, and loading optimization recommendations." },
                    { title: "SEO Assessment", desc: "On-page SEO, meta tags, content structure, and keyword analysis." },
                    { title: "Security Review", desc: "SSL status, vulnerabilities, and security best practices." },
                    { title: "Mobile Responsiveness", desc: "Cross-device compatibility and mobile user experience check." },
                    { title: "UX Recommendations", desc: "Navigation, accessibility, and conversion optimization tips." },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-brand-success mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
