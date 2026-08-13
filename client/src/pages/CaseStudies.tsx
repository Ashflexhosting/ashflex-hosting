import { Link } from "wouter";
import { ArrowRight as ArrowRightIcon } from "lucide-react";
import { TrendingUp, Users, Clock, Target } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const caseStudies = [
  {
    id: 1,
    title: "PayFlow Technologies — Fintech Platform",
    industry: "Finance",
    image: "/manus-storage/shutterspeed-fullpage_eb390ac4.webp",
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
    image: "/manus-storage/bcfna-fullpage_70ffe564.png",
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
  {
    id: 7,
    title: "Afnaf Auto Sales — Dealership Website",
    industry: "Finance",
    image: "/manus-storage/bcfna-fullpage_218634ea.webp",
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
    image: "/manus-storage/marveltex-fullpage_157aa86e.webp",
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
    image: "/manus-storage/galcon-home_06339665.webp",
    clientGoal: "Showcase 30+ years of engineering excellence with project galleries, services, and a renovation cost calculator.",
    process: "Content Audit → Design → Multi-page Development → Gallery System → Launch",
    beforeAfter: "From an outdated brochure-style site to a modern corporate website covering every service line.",
    results: "Complete corporate web presence covering design-build, engineering, projects, and cost estimation.",
    roi: "A credible online portfolio that supports bids and client consultations for a Lagos construction firm.",
    stats: [{ icon: TrendingUp, value: "30+", label: "Years Showcased" }, { icon: Users, value: "6", label: "Service Lines" }, { icon: Clock, value: "6 weeks", label: "Delivery Time" }],
  },
];

export default function CaseStudies() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Case Studies"
        description="Real results from real projects. Explore our detailed success stories and see how we've helped businesses achieve their goals."
        breadcrumb={[{ label: "Case Studies", href: "/case-studies" }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="space-y-12">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="scroll-reveal" style={{ transitionDelay: `${i * 40}ms` }}>
                <Card className="glass-card border-0 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                      <div className="lg:col-span-2">
                        <img src={cs.image} alt={cs.title} className="w-full h-full object-cover min-h-[250px]" loading="lazy" />
                      </div>
                      <div className="lg:col-span-3 p-8">
                        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-brand-secondary/10 text-brand-secondary mb-4">
                          {cs.industry}
                        </span>
                        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>{cs.title}</h3>

                        <div className="space-y-3 mb-6">
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Client Goal</p>
                            <p className="text-sm text-foreground/80">{cs.clientGoal}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Results</p>
                            <p className="text-sm text-foreground/80">{cs.results}</p>
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">ROI</p>
                            <p className="text-sm text-brand-success font-medium">{cs.roi}</p>
                          </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                          {cs.stats.map((stat, j) => (
                            <div key={j} className="text-center">
                              <p className="text-xl font-bold text-brand-secondary" style={{ fontFamily: "var(--font-heading)" }}>{stat.value}</p>
                              <p className="text-xs text-muted-foreground">{stat.label}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-6">
                          <Link href={`/case-studies/${cs.id}`}>
                            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-secondary hover:gap-3 transition-all">
                              Read Full Case Study <ArrowRightIcon size={16} />
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-brand text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ready for Your Own Success Story?</h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Let's discuss how we can deliver similar results for your business.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand bg-white rounded-xl hover:shadow-xl transition-all duration-300">
              Get Free Consultation <ArrowRightIcon size={20} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
