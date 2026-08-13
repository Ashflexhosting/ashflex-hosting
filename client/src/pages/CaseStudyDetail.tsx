import { useState, useEffect } from "react";
import { useParams, Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Users, Clock, Target, X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { portfolioItems } from "@/data/portfolio";
import ScrollableScreenshot from "@/components/ScrollableScreenshot";

const caseStudies = [
  {
    id: 1,
    title: "PayFlow Technologies — Fintech Platform",
    industry: "Finance",
    portfolioProjectId: 1,
    clientGoal: "Attract investors and enterprise clients with a professional digital presence.",
    process: "Discovery → Strategy → Custom React Platform → API Integration → Testing → Launch",
    beforeAfter: "From zero online presence to a professional platform generating qualified leads daily.",
    results: "150% increase in qualified leads, 40% reduction in bounce rate, top 3 Google rankings.",
    roi: "₦500K investment generated ₦5M+ in new client revenue within 3 months.",
    stats: [{ icon: TrendingUp, value: "150%", label: "Lead Increase" }, { icon: Users, value: "40%", label: "Bounce Reduction" }, { icon: Clock, value: "8 weeks", label: "Delivery Time" }],
  },
  {
    id: 2,
    title: "Lagos Luxury Homes — Real Estate Portal",
    industry: "Real Estate",
    portfolioProjectId: 2,
    clientGoal: "Create a property listing platform with virtual tours and advanced search.",
    process: "Research → UX Design → 3D Integration → Development → Testing → Launch",
    beforeAfter: "From manual listings to an automated platform with 300+ properties.",
    results: "300+ properties listed, 200% increase in inquiries, 85% user satisfaction.",
    roi: "₦800K investment generated ₦15M+ in property sales within 6 months.",
    stats: [{ icon: TrendingUp, value: "200%", label: "Inquiry Increase" }, { icon: Users, value: "300+", label: "Properties" }, { icon: Target, value: "85%", label: "Satisfaction" }],
  },
  {
    id: 3,
    title: "MedCare Nigeria — Healthcare Platform",
    industry: "Healthcare",
    portfolioProjectId: 9,
    clientGoal: "Build a patient management and appointment booking system for multi-branch hospitals.",
    process: "Requirements → Architecture → Development → Integration → Testing → Deployment",
    beforeAfter: "From paper-based bookings to a fully digital patient management system.",
    results: "60% reduction in no-show rates, 3x increase in online bookings.",
    roi: "₦1.2M investment saved ₦5M+ annually in operational efficiency.",
    stats: [{ icon: TrendingUp, value: "3x", label: "Online Bookings" }, { icon: Users, value: "60%", label: "Fewer No-Shows" }, { icon: Clock, value: "12 weeks", label: "Delivery Time" }],
  },
  {
    id: 4,
    title: "Ankara Luxe — E-commerce Store",
    industry: "E-commerce",
    portfolioProjectId: 6,
    clientGoal: "Build a scalable e-commerce platform with local payment support for a Nigerian fashion brand.",
    process: "Brand Analysis → UX Design → Shopify Development → Payment Integration → Launch",
    beforeAfter: "From Instagram-only sales to a full e-commerce platform processing ₦50M+ monthly.",
    results: "₦50M+ monthly revenue, 95% mobile conversion rate, top-selling fashion brand.",
    roi: "₦500K investment generated ₦50M+ monthly revenue — 100x return.",
    stats: [{ icon: TrendingUp, value: "₦50M", label: "Monthly Revenue" }, { icon: Users, value: "95%", label: "Mobile Rate" }, { icon: Target, value: "100x", label: "ROI" }],
  },
  {
    id: 5,
    title: "Adeyemi & Partners — Law Firm Website",
    industry: "Law Firms",
    portfolioProjectId: 8,
    clientGoal: "Establish a prestigious online presence that conveys trust and expertise.",
    process: "Brand Strategy → Design → Development → SEO → Content → Launch",
    beforeAfter: "From minimal web presence to top 3 Google rankings for key legal terms.",
    results: "80% increase in consultation requests, first-page Google rankings.",
    roi: "₦250K investment generated 5x increase in new client consultations.",
    stats: [{ icon: TrendingUp, value: "80%", label: "More Consultations" }, { icon: Target, value: "#1-3", label: "Google Rankings" }, { icon: Users, value: "5x", label: "Client Growth" }],
  },
  {
    id: 6,
    title: "Green Earth Foundation — NGO Platform",
    industry: "NGOs",
    portfolioProjectId: 5,
    clientGoal: "Create a donation platform and volunteer management system for an environmental NGO.",
    process: "Impact Analysis → Design → Development → Payment Integration → Launch",
    beforeAfter: "From manual donations to an automated platform with real-time impact tracking.",
    results: "200% increase in donations, 150+ new volunteers recruited in first quarter.",
    roi: "₦300K investment generated 200% increase in annual donations.",
    stats: [{ icon: TrendingUp, value: "200%", label: "Donation Increase" }, { icon: Users, value: "150+", label: "New Volunteers" }, { icon: Target, value: "4x", label: "Impact Reach" }],
  },
  {
    id: 7,
    title: "Afnaf Auto Sales — Dealership Website",
    industry: "Finance",
    portfolioProjectId: 10,
    clientGoal: "Present the dealership's pre-owned vehicle inventory online with a clear trade-in pathway for Canadian buyers.",
    process: "Discovery → Branding → UI Design → Development → Inventory Structure → Launch",
    beforeAfter: "From limited digital reach to a full online showroom with a dedicated trade-in page.",
    results: "Professional dealership presence in Canada, streamlined trade-in process for customers.",
    roi: "A focused dealership website that converts browsing into showroom visits.",
    stats: [{ icon: TrendingUp, value: "300%", label: "More Pages" }, { icon: Users, value: "3", label: "Core Sections" }, { icon: Clock, value: "4 weeks", label: "Delivery Time" }],
  },
  {
    id: 8,
    title: "Marvel Tex Attraction — Savings Platform",
    industry: "NGOs",
    portfolioProjectId: 11,
    clientGoal: "Build a member-facing cooperative savings platform with wallet, savings cycles, and an empowerment program.",
    process: "Requirements → UI/UX Design → Platform Development → Dashboard → Testing → Launch",
    beforeAfter: "From informal group savings to a structured platform with wallet tracking and payouts.",
    results: "Transparent weekly savings cycles, member dashboards, and a published empowerment program.",
    roi: "A digital platform that formalises ₦5,000 weekly contributions for the whole network.",
    stats: [{ icon: TrendingUp, value: "50%", label: "Value at Maturity" }, { icon: Users, value: "26", label: "Week Cycle" }, { icon: Target, value: "24/7", label: "Member Access" }],
  },
  {
    id: 9,
    title: "Galcon Engineering — Corporate Website",
    industry: "Construction",
    portfolioProjectId: 12,
    clientGoal: "Showcase 30+ years of engineering excellence with project galleries, services, and a renovation cost calculator.",
    process: "Content Audit → Design → Multi-page Development → Gallery System → Launch",
    beforeAfter: "From an outdated brochure-style site to a modern corporate website covering every service line.",
    results: "Complete corporate web presence covering design-build, engineering, projects, and cost estimation.",
    roi: "A credible online portfolio that supports bids and client consultations for a Lagos construction firm.",
    stats: [{ icon: TrendingUp, value: "30+", label: "Years Showcased" }, { icon: Users, value: "6", label: "Service Lines" }, { icon: Clock, value: "6 weeks", label: "Delivery Time" }],
  },
];

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const sectionRef = useScrollReveal();
  const cs = caseStudies.find((c) => c.id === Number(id));
  const project = portfolioItems.find((p) => p.id === cs?.portfolioProjectId);
  const gallery = project?.screenshots?.length ? project.screenshots : [];
  const captions = project?.screenshotCaptions?.length ? project.screenshotCaptions : [];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const captionFor = (index: number) => captions[index] || "Screenshot";

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length));
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, gallery.length]);

  const goToShot = (dir: 1 | -1) => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + dir + gallery.length) % gallery.length);
  };

  if (!cs) {
    return (
      <div className="pt-32 pb-20 container text-center">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <Link href="/case-studies"><span className="text-brand-secondary font-medium hover:underline">Back to Case Studies →</span></Link>
      </div>
    );
  }

  const heroImage = project?.image || "";

  return (
    <div ref={sectionRef}>
      <PageHeader
        title={cs.title}
        description={`A detailed look at how we helped ${cs.industry} industry client achieve measurable results.`}
        breadcrumb={[{ label: "Case Studies", href: "/case-studies" }, { label: cs.title }]}
      />

      <section className="py-20">
        <div className="container max-w-5xl">
          {/* Hero Image */}
          <div className="scroll-reveal mb-12">
            {heroImage ? (
              <img src={heroImage} alt={cs.title} className="w-full rounded-2xl shadow-2xl shadow-black/10" />
            ) : (
              <div className="w-full h-64 rounded-2xl bg-brand-secondary/10 flex items-center justify-center text-muted-foreground">
                Project screenshot unavailable
              </div>
            )}
          </div>

          {/* Project Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8 scroll-reveal">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>Client Goal</h3>
                <p className="text-foreground/80 leading-relaxed">{cs.clientGoal}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>Our Process</h3>
                <p className="text-foreground/80 leading-relaxed">{cs.process}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>Before & After</h3>
                <p className="text-foreground/80 leading-relaxed">{cs.beforeAfter}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>Key Results</h3>
                <p className="text-foreground/80 leading-relaxed">{cs.results}</p>
              </div>
            </div>

            <div className="scroll-reveal" style={{ transitionDelay: "100ms" }}>
              <Card className="glass-card border-0 p-6 sticky top-24">
                <CardContent className="p-0">
                  <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Project Stats</h3>
                  <div className="space-y-4">
                    {cs.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <stat.icon size={20} className="text-brand-secondary flex-shrink-0" />
                        <div>
                          <p className="font-bold text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                          <p className="text-xs text-muted-foreground">{stat.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">Return on Investment</p>
                    <p className="text-sm font-medium text-brand-success">{cs.roi}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Screenshots Gallery */}
          {gallery.length > 0 && (
            <div className="mb-16">
              <h3 className="text-xl font-semibold mb-4 scroll-reveal" style={{ fontFamily: "var(--font-heading)" }}>Project Screenshots</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {gallery.map((shot, n) => (
                  <button
                    key={n}
                    type="button"
                    className="scroll-reveal text-left rounded-2xl bg-gradient-to-br from-brand-secondary via-brand-accent to-brand-cyan p-[2px] group"
                    onClick={() => setLightboxIndex(n)}
                    aria-label={`View ${captionFor(n)} screenshot`}
                  >
                    <span className="relative">
                      <ScrollableScreenshot
                        src={shot}
                        alt={`Scroll through ${cs.title} screenshot ${n + 1}`}
                        height="h-64"
                      />
                      <span className="absolute inset-0 flex items-center justify-center bg-brand/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="px-4 py-2 text-xs font-semibold text-white bg-brand-secondary rounded-full">View full size</span>
                      </span>
                    </span>
                    <span className="block px-3 py-2 text-xs font-medium text-muted-foreground">{captionFor(n)}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Related Case Studies */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 scroll-reveal" style={{ fontFamily: "var(--font-heading)" }}>More Projects Like This</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies
                .filter((c) => c.id !== cs.id)
                .slice(0, 2)
                .map((related) => {
                  const relatedProject = portfolioItems.find((p) => p.id === related.portfolioProjectId);
                  return (
                    <Link key={related.id} href={`/case-studies/${related.id}`}>
                      <span className="block scroll-reveal group cursor-pointer glass-card border-0 p-4 hover:shadow-lg hover:shadow-black/5 transition-all duration-200">
                        <div className="overflow-hidden rounded-xl mb-3">
                          <img
                            src={relatedProject?.image || ""}
                            alt={related.title}
                            className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                        <p className="text-xs font-medium text-brand-secondary mb-1">{related.industry} Case Study</p>
                        <h4 className="font-semibold text-foreground/90 group-hover:text-brand-secondary transition-colors">{related.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{related.results}</p>
                      </span>
                    </Link>
                  );
                })}
            </div>
          </div>

          {/* Navigation & CTA */}
          <div className="flex items-center justify-between pt-8 border-t border-border/50 scroll-reveal">
            <Link href="/case-studies">
              <span className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-secondary transition-colors">
                <ArrowLeft size={16} /> All Case Studies
              </span>
            </Link>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-lg hover:shadow-brand-secondary/25 transition-all">
                Start Your Project <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && gallery[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-brand/95 backdrop-blur-sm flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${captionFor(lightboxIndex)} screenshot`}
        >
          <button
            type="button"
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          {gallery.length > 1 && (
            <>
              <button
                type="button"
                className="absolute left-4 md:left-8 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); goToShot(-1); }}
                aria-label="Previous screenshot"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                type="button"
                className="absolute right-4 md:right-8 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); goToShot(1); }}
                aria-label="Next screenshot"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
          <div
            className="relative flex-1 w-full max-w-[92vw] max-h-[80vh] rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <ScrollableScreenshot
              src={gallery[lightboxIndex]}
              alt={`${cs.title} screenshot ${lightboxIndex + 1}`}
              height="h-[75vh]"
              className="rounded-none"
            />
          </div>
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 px-3 py-1 text-xs text-white/70 bg-white/10 rounded-full">
            {captionFor(lightboxIndex)} · {lightboxIndex + 1} / {gallery.length}
          </span>
        </div>
      )}
    </div>
  );
}
