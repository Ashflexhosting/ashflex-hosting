import { useParams, Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const seoPages: Record<string, { title: string; description: string; keywords: string[]; sections: { heading: string; content: string }[] }> = {
  "web-design-lagos": {
    title: "Web Design Company in Lagos",
    description: "Looking for the best web design company in Lagos? Ashflex delivers stunning, high-converting websites that drive real business growth. Get a free quote today.",
    keywords: ["web design Lagos", "website designer Lagos", "best web design company Nigeria"],
    sections: [
      { heading: "Professional Web Design in Lagos", content: "As a leading web design agency in Lagos, Ashflex has helped over 250 businesses establish a powerful online presence. Our team combines creative excellence with technical expertise to deliver websites that not only look stunning but also convert visitors into customers." },
      { heading: "Why Choose a Lagos-Based Web Design Agency", content: "Being based in Lagos gives us deep understanding of the Nigerian business landscape, local market dynamics, and cultural nuances. We build websites that resonate with your target audience while meeting international quality standards." },
      { heading: "Our Web Design Process", content: "We follow a proven 7-step process: Discovery, Strategy, Design, Development, Testing, Launch, and Growth. Each phase is designed to ensure maximum quality and client satisfaction." },
      { heading: "Web Design Services We Offer", content: "Custom website design, responsive design, WordPress development, e-commerce design, UI/UX design, and ongoing maintenance and support." },
    ],
  },
  "ecommerce-website-development": {
    title: "E-commerce Website Development in Nigeria",
    description: "Build a powerful online store with our e-commerce website development services. Paystack, Flutterwave integration, mobile optimization, and more.",
    keywords: ["ecommerce website Nigeria", "online store development", "shopify Nigeria"],
    sections: [
      { heading: "E-commerce Website Development", content: "We build high-performance e-commerce websites that drive sales. From product catalogs to payment processing, we handle every aspect of your online store." },
      { heading: "Payment Gateway Integration", content: "We integrate all major Nigerian payment gateways including Paystack, Flutterwave, and bank transfers to make checkout seamless for your customers." },
      { heading: "Mobile Commerce Optimization", content: "With over 70% of online purchases in Nigeria made via mobile, we ensure your store delivers an exceptional mobile shopping experience." },
      { heading: "E-commerce Features", content: "Product management, inventory tracking, order management, customer accounts, wish lists, reviews, and analytics dashboards." },
    ],
  },
  "seo-services-nigeria": {
    title: "SEO Services in Nigeria",
    description: "Boost your Google rankings with our professional SEO services. Technical SEO, on-page optimization, content strategy, and link building for Nigerian businesses.",
    keywords: ["SEO services Nigeria", "search engine optimization Lagos", "Google ranking Nigeria"],
    sections: [
      { heading: "Professional SEO Services", content: "Our SEO experts use proven strategies to improve your website's visibility on Google. We focus on sustainable, white-hat techniques that deliver long-term results." },
      { heading: "Local SEO for Nigerian Businesses", content: "We specialize in local SEO optimization, helping Nigerian businesses rank for location-based searches and dominate their local market." },
      { heading: "Content Strategy", content: "High-quality, relevant content is the backbone of SEO. Our content team creates engaging articles, landing pages, and blog posts that attract and convert." },
      { heading: "Technical SEO", content: "From site speed optimization to structured data implementation, we ensure your website meets all technical SEO requirements for maximum visibility." },
    ],
  },
};

export default function SEOLanding() {
  const { slug } = useParams<{ slug: string }>();
  const sectionRef = useScrollReveal();
  const page = seoPages[slug || ""];

  if (!page) {
    return (
      <div className="pt-32 pb-20 container text-center">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <Link href="/"><span className="text-brand-secondary font-medium hover:underline">Back to Home →</span></Link>
      </div>
    );
  }

  return (
    <div ref={sectionRef}>
      <PageHeader
        title={page.title}
        description={page.description}
        breadcrumb={[{ label: page.title, href: "#" }]}
      />

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-3 scroll-reveal">
              {page.sections.map((section, i) => (
                <div key={i} className="mb-10">
                  <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>{section.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              ))}

              <div className="mt-12 p-8 bg-gradient-brand text-white rounded-2xl">
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Ready to Get Started?</h3>
                <p className="text-white/70 mb-6">Let's discuss how we can help your business grow online.</p>
                <Link href="/contact">
                  <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-brand bg-white rounded-xl hover:shadow-xl transition-all duration-300">
                    Get Free Consultation <ArrowRight size={18} />
                  </span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-1">
              <SidebarCard className="glass-card border-0 p-6 sticky top-24">
                  <h3 className="text-lg font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Related Services</h3>
                  <ul className="space-y-3">
                    {["Web Design", "SEO Services", "Content Marketing", "Google Ads", "Social Media"].map((s) => (
                      <li key={s}>
                        <Link href={`/services/${s.toLowerCase().replace(" ", "-")}`}>
                          <span className="text-sm text-foreground/70 hover:text-brand-secondary transition-colors flex items-center gap-1">
                            <CheckCircle size={14} className="text-brand-success" /> {s}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
              </SidebarCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function SidebarCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}
