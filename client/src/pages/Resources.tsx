import { Link } from "wouter";
import { ArrowRight, FileCheck, Calculator, Search, BookOpen, BarChart3 } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const resources = [
  {
    id: "free-website-audit",
    title: "Free Website Audit",
    description: "Get a comprehensive analysis of your website's performance, SEO, security, and user experience.",
    icon: FileCheck,
    color: "#2563EB",
    slug: "free-website-audit",
  },
  {
    id: "website-cost-calculator",
    title: "Website Cost Calculator",
    description: "Estimate the cost of your website project based on features, pages, and complexity.",
    icon: Calculator,
    color: "#06B6D4",
    slug: "website-cost-calculator",
  },
  {
    id: "seo-checklist",
    title: "SEO Checklist",
    description: "A complete SEO checklist to ensure your website is optimized for search engines.",
    icon: Search,
    color: "#22C55E",
    slug: "seo-checklist",
  },
  {
    id: "branding-guide",
    title: "Branding Guide",
    description: "Everything you need to know about building a strong brand identity for your business.",
    icon: BookOpen,
    color: "#8B5CF6",
    slug: "branding-guide",
  },
  {
    id: "digital-marketing-guide",
    title: "Digital Marketing Guide",
    description: "A comprehensive guide to digital marketing strategies for growing businesses.",
    icon: BarChart3,
    color: "#F59E0B",
    slug: "digital-marketing-guide",
  },
];

export default function Resources() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Free Resources"
        description="Tools, guides, and resources to help you build a better online presence. Completely free."
        breadcrumb={[{ label: "Resources", href: "/resources" }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource, i) => (
              <div key={resource.id} className="scroll-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <Link href={`/resources/${resource.slug}`}>
                  <Card className="glass-card h-full border-0 p-8 hover-lift">
                    <CardContent className="p-0">
                      <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${resource.color}15` }}>
                        <resource.icon size={28} style={{ color: resource.color }} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{resource.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">{resource.description}</p>
                      <div className="flex items-center gap-1 text-sm font-medium" style={{ color: resource.color }}>
                        Use Tool <ArrowRight size={16} />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
