import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Palette, Type, Image, Layout, Sparkles, Target } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    icon: Palette,
    title: "Brand Identity",
    content: "Your brand identity is the visual representation of your business. It includes your logo, color palette, typography, and visual style. A strong brand identity creates instant recognition and builds trust with your audience. Start by defining your brand personality — are you professional and corporate, creative and playful, or premium and luxurious? This personality should guide every design decision you make.",
  },
  {
    icon: Type,
    title: "Typography",
    content: "Typography plays a crucial role in brand perception. Choose 2-3 fonts maximum: one for headings (bold, distinctive), one for body text (readable, clean), and optionally one for accents. Popular combinations include Poppins + Inter, Playfair Display + Lato, or Montserrat + Open Sans. Ensure your fonts are web-safe and load quickly.",
  },
  {
    icon: Image,
    title: "Color Psychology",
    content: "Colors evoke emotions and influence behavior. Blue conveys trust and professionalism (used by banks and tech). Green represents growth and health. Red creates urgency and excitement. Yellow suggests optimism and energy. Choose 3-5 colors: a primary color (60%), secondary color (30%), and accent color (10%). Test your palette across different backgrounds and ensure accessibility compliance.",
  },
  {
    icon: Layout,
    title: "Logo Design Principles",
    content: "Your logo should be simple, memorable, timeless, versatile, and appropriate. Avoid trends that will date quickly. Test your logo at various sizes — it should be recognizable even as a favicon. Create versions for light and dark backgrounds, and ensure it works in black and white.",
  },
  {
    icon: Sparkles,
    title: "Visual Consistency",
    content: "Consistency across all touchpoints builds recognition and trust. Create a brand style guide that documents your colors, fonts, logo usage, spacing, imagery style, and tone of voice. Apply these rules consistently across your website, social media, business cards, and all marketing materials.",
  },
  {
    icon: Target,
    title: "Brand Voice & Messaging",
    content: "Your brand voice defines how you communicate. Are you formal or casual? Technical or simple? Humorous or serious? Define 3-5 adjectives that describe your brand voice and use them as a filter for all written content. This includes website copy, social media posts, emails, and customer communications.",
  },
];

export default function BrandingGuide() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Branding Guide"
        description="Everything you need to know about building a strong, memorable brand identity for your business."
        breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "Branding Guide" }]}
      />

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="scroll-reveal mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>The Complete Branding Guide</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Building a strong brand is one of the most important investments you can make in your business. A well-defined brand helps you stand out from competitors, build trust with customers, and command premium pricing. This guide covers the essential elements of brand building.
            </p>
          </div>

          <div className="space-y-6">
            {sections.map((section, i) => (
              <Card key={i} className="glass-card border-0 p-8 scroll-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center flex-shrink-0">
                      <section.icon className="text-brand-secondary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{section.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need help building your brand from scratch?</p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-lg hover:shadow-brand-secondary/25 transition-all">
                Get Branding Services <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
