import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { ArrowRight, Briefcase, MapPin, Sparkles, HeartHandshake, Users, Zap } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { siteContact } from "@shared/siteContact";

export const OPEN_ROLES = [
  {
    title: "Senior Web Designer",
    type: "Full-time",
    location: "Lagos, Nigeria (Hybrid)",
    description:
      "Lead the visual design of client websites from concept to handoff. You'll craft high-fidelity UI designs, build design systems, and turn brand identities into stunning digital experiences.",
    requirements: ["4+ years of web/UI design experience", "Expert in Figma and modern design systems", "Strong portfolio of live websites", "Understanding of responsive design and accessibility"],
  },
  {
    title: "Frontend Developer",
    type: "Full-time",
    location: "Remote (Nigeria)",
    description:
      "Bring designs to life with clean, performant code. You'll build modern websites and web apps using React and related technologies, working closely with our designers.",
    requirements: ["3+ years of frontend development experience", "Proficient in React, TypeScript, and CSS", "Experience with responsive and accessible interfaces", "Familiarity with Git and modern tooling"],
  },
  {
    title: "WordPress Developer",
    type: "Full-time / Contract",
    location: "Remote (Nigeria)",
    description:
      "Build and customize WordPress sites for our diverse client base, from corporate sites to WooCommerce stores, with clean themes and plugins.",
    requirements: ["Strong PHP, theme and plugin development skills", "WooCommerce and page-builder experience", "Site speed and security best practices", "Ability to work with design handoffs"],
  },
  {
    title: "SEO Specialist",
    type: "Part-time / Contract",
    location: "Remote",
    description:
      "Own the search visibility of client websites. Run technical audits, on-page optimization, and content strategies that drive measurable organic growth.",
    requirements: ["2+ years of SEO experience", "Strong grasp of technical SEO, keywords, and analytics", "Experience with Search Console and GA4", "Clear reporting and communication skills"],
  },
  {
    title: "Content Writer",
    type: "Contract",
    location: "Remote",
    description:
      "Write compelling website copy, blog articles, and case studies for clients across industries, from tech to healthcare and hospitality.",
    requirements: ["Excellent English writing and editing skills", "Experience writing for the web", "Ability to research new industries quickly", "SEO-friendly writing is a plus"],
  },
];

const culturePillars = [
  {
    icon: Sparkles,
    title: "Craft Over Volume",
    description: "We take on the right number of projects so every website gets the attention it deserves.",
  },
  {
    icon: Users,
    title: "Remote-First Team",
    description: "Talented people across Nigeria and beyond collaborate with flexible, async-friendly workflows.",
  },
  {
    icon: Zap,
    title: "Fast Learners",
    description: "New tools, new platforms, new ideas — we invest in growth and share what we learn with each other.",
  },
  {
    icon: HeartHandshake,
    title: "Client Success Is Ours",
    description: "We measure our work by the results our clients' businesses achieve after launch.",
  },
];

export default function Careers() {
  const sectionRef = useScrollReveal();
  const [selectedRole, setSelectedRole] = useState<string>(OPEN_ROLES[0].title);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", portfolio: "", message: "" });

  const applyMutation = trpc.careers.submit.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("Application received! We'll review it and get back to you within 5 business days.");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again or email us directly.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !selectedRole) {
      toast.error("Please fill in all required fields");
      return;
    }
    applyMutation.mutate({
      fullName: form.name,
      email: form.email,
      role: selectedRole,
      portfolio: form.portfolio,
      message: form.message,
    });
  };

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Join Our Team"
        description="We're building the most trusted web design agency in West Africa. If you love crafting beautiful, high-performing websites, we'd love to hear from you."
        breadcrumb={[{ label: "Careers", href: "/careers" }]}
      />

      {/* Open roles */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12 scroll-reveal">
            <Badge variant="outline" className="mb-4 text-brand-secondary border-brand-secondary/30">
              <Briefcase size={14} className="mr-1.5" /> {OPEN_ROLES.length} Open Roles
            </Badge>
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Current Openings
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse the roles below and apply directly through the form. No role feels quite right? Send us a message anyway — great people are always welcome.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {OPEN_ROLES.map((role, i) => (
              <Card
                key={role.title}
                className={`glass-card border-0 p-8 scroll-reveal hover-lift cursor-pointer transition-all duration-200 ${
                  selectedRole === role.title ? "ring-2 ring-brand-secondary" : ""
                }`}
                style={{ transitionDelay: `${i * 60}ms` }}
                onClick={() => {
                  setSelectedRole(role.title);
                  document.getElementById("application-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{role.title}</h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5">
                          <Briefcase size={14} className="text-brand-secondary" /> {role.type}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={14} className="text-brand-secondary" /> {role.location}
                        </span>
                      </div>
                    </div>
                    <Badge variant="secondary" className="self-start">Apply Now</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">{role.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
                    {role.requirements.map((req) => (
                      <p key={req} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-secondary flex-shrink-0" />
                        {req}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Why Work With Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A small, senior team where your work matters from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturePillars.map((pillar, i) => (
              <Card key={pillar.title} className="glass-card border-0 p-6 scroll-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <CardContent className="p-0">
                  <div className="w-11 h-11 rounded-xl bg-brand-secondary/10 flex items-center justify-center mb-4">
                    <pillar.icon size={20} className="text-brand-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="application-form" className="py-20">
        <div className="container max-w-3xl">
          <div className="text-center mb-10 scroll-reveal">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Apply Now
            </h2>
            <p className="text-muted-foreground">
              Select a role, tell us about yourself, and we'll be in touch within 5 business days.
            </p>
          </div>

          {submitted ? (
            <Card className="glass-card border-0 p-12 text-center scroll-reveal">
              <CardContent className="p-0">
                <div className="w-16 h-16 rounded-full bg-brand-success/10 flex items-center justify-center mx-auto mb-6">
                  <ArrowRight size={32} className="text-brand-success" />
                </div>
                <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Application Received!</h3>
                <p className="text-muted-foreground mb-6">
                  Thank you for applying for <strong>{selectedRole}</strong>. We'll review your application and reach out at {form.email} within 5 business days.
                </p>
                <Link href="/careers" className="text-sm font-medium text-brand-secondary hover:underline">
                  View other open roles
                </Link>
              </CardContent>
            </Card>
          ) : (
            <Card className="glass-card border-0 p-8 scroll-reveal">
              <CardContent className="p-0">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Role You're Applying For *</label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                    >
                      {OPEN_ROLES.map((role) => (
                        <option key={role.title} value={role.title}>{role.title} — {role.type}</option>
                      ))}
                      <option value="General Application">General Application (no matching role)</option>
                    </select>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Jane Doe"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="jane@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Portfolio / LinkedIn URL</label>
                    <input
                      type="url"
                      value={form.portfolio}
                      onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                      placeholder="https://linkedin.com/in/janedoe"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Tell Us About Yourself *</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Share your experience, why you'd be a great fit, and what excites you about Ashflex..."
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={applyMutation.isPending}
                    className="w-full px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {applyMutation.isPending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Submit Application <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    Your application is stored securely and an alert is sent to the Ashflex team at {siteContact.email}.
                  </p>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* CTA banner */}
      <section className="pb-20">
        <div className="container">
          <div className="glass-card rounded-3xl bg-gradient-primary p-10 md:p-14 text-center text-white scroll-reveal">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Have a Client Project Instead?
            </h2>
            <p className="text-white/80 mb-7 max-w-xl mx-auto">
              If you're a business looking for a website rather than a job, we'd love to hear about your project.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white text-brand font-semibold hover:shadow-xl transition-all duration-300">
                Start a Project <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
