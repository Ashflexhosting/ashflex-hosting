import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { services } from "@/data/services";
import {
  Palette, Code, LayoutGrid, ShoppingCart, Smartphone, PenTool,
  Search, Target, Share2, FileText, Wrench, Zap, Server, Plug,
  Bot, Settings
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = {
  Palette, Code, LayoutGrid, ShoppingCart, Smartphone, PenTool,
  Search, Target, Share2, FileText, Wrench, Zap, Server, Plug,
  Bot, Settings,
};

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Our Services"
        description="Comprehensive digital solutions to help your business thrive online. From design to development, SEO to marketing — we've got you covered."
        breadcrumb={[{ label: "Services", href: "/services" }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] || Code;
              return (
                <div key={service.id} className="scroll-reveal" style={{ transitionDelay: `${i * 40}ms` }}>
                  <Link href={`/services/${service.slug}`}>
                    <Card className="glass-card h-full border-0 p-6 hover-lift">
                      <CardContent className="p-0">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center mb-4">
                          <Icon className="text-brand-secondary" size={24} />
                        </div>
                        <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "var(--font-heading)" }}>{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                        <ul className="space-y-1.5 mb-4">
                          {service.features.slice(0, 3).map((f) => (
                            <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-brand-secondary" />
                              {f}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-semibold text-brand-secondary">{service.price}</span>
                          <ArrowRight size={16} className="text-brand-secondary" />
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

      {/* CTA */}
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Not Sure Which Service You Need?
          </h2>
          <p className="text-white/70 max-w-xl mx-auto mb-8">
            Schedule a free consultation and we'll recommend the perfect solution for your business.
          </p>
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-brand bg-white rounded-xl hover:shadow-xl transition-all duration-300">
              Get Free Consultation <ArrowRight size={20} />
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
