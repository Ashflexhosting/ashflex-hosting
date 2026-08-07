import { Link } from "wouter";
import { ArrowRight, HeartPulse, GraduationCap, Building, Factory, HandHeart, Truck, Plane, Landmark, Building2, Briefcase } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { industries } from "@/data/industries";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  HeartPulse, GraduationCap, Building, Factory, HandHeart, Truck,
  Plane, Landmark, Building2, Briefcase,
};

export default function Industries() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Industries We Serve"
        description="Specialized digital solutions tailored for specific industries. We understand the unique challenges and opportunities in each sector."
        breadcrumb={[{ label: "Industries", href: "/industries" }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, i) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <div key={industry.slug} className="scroll-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                  <Link href={`/industries/${industry.slug}`}>
                    <Card className="glass-card h-full border-0 p-8 hover-lift">
                      <CardContent className="p-0">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${industry.color}15` }}>
                          <Icon size={28} style={{ color: industry.color }} />
                        </div>
                        <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{industry.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{industry.description}</p>
                        <ul className="space-y-1.5 mb-4">
                          {industry.features.slice(0, 3).map((f) => (
                            <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ background: industry.color }} />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/50">
                          <div className="flex gap-4">
                            {industry.stats.map((stat) => (
                              <div key={stat.label}>
                                <p className="text-sm font-bold" style={{ color: industry.color }}>{stat.value}</p>
                                <p className="text-xs text-muted-foreground">{stat.label}</p>
                              </div>
                            ))}
                          </div>
                          <ArrowRight size={18} style={{ color: industry.color }} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
