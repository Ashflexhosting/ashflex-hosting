import { useParams, Link } from "wouter";
import { ArrowRight, ArrowLeft, TrendingUp, Users, Clock, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    id: 1,
    title: "PayFlow Technologies — Fintech Platform",
    industry: "Finance",
    image: "/manus-storage/portfolio-shutterspeed-live_ff13c8ca.webp",
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
    image: "/manus-storage/portfolio-kingwesl-live_bd256695.webp",
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
    image: "/manus-storage/portfolio-bcfirstnations-live_9c99bcce.webp",
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
    image: "/manus-storage/portfolio-samandsara-live_74253bfc.webp",
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
    image: "/manus-storage/portfolio-barmest-live_ef28f37f.webp",
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
    image: "/manus-storage/portfolio-eightradiance-live_0fcdc31e.webp",
    clientGoal: "Create a donation platform and volunteer management system for an environmental NGO.",
    process: "Impact Analysis → Design → Development → Payment Integration → Launch",
    beforeAfter: "From manual donations to an automated platform with real-time impact tracking.",
    results: "200% increase in donations, 150+ new volunteers recruited in first quarter.",
    roi: "₦300K investment generated 200% increase in annual donations.",
    stats: [{ icon: TrendingUp, value: "200%", label: "Donation Increase" }, { icon: Users, value: "150+", label: "New Volunteers" }, { icon: Target, value: "4x", label: "Impact Reach" }],
  },
];

export default function CaseStudyDetail() {
  const { id } = useParams<{ id: string }>();
  const sectionRef = useScrollReveal();
  const cs = caseStudies.find((c) => c.id === Number(id));

  if (!cs) {
    return (
      <div className="pt-32 pb-20 container text-center">
        <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
        <Link href="/case-studies"><span className="text-brand-secondary font-medium hover:underline">Back to Case Studies →</span></Link>
      </div>
    );
  }

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
            <img src={cs.image} alt={cs.title} className="w-full rounded-2xl shadow-2xl shadow-black/10" />
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
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-4 scroll-reveal" style={{ fontFamily: "var(--font-heading)" }}>Project Screenshots</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((n) => (
                <div key={n} className="scroll-reveal overflow-hidden rounded-2xl group">
                  <img
                    src={cs.image}
                    alt={`${cs.title} screenshot ${n}`}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
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
    </div>
  );
}
