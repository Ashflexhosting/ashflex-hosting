import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Share2, Mail, BarChart3, Video, PenTool } from "lucide-react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const strategies = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    content: "SEO is the foundation of organic digital growth. It involves optimizing your website and content to rank higher in search engine results. Key components include technical SEO (site speed, mobile-friendliness, structured data), on-page SEO (title tags, meta descriptions, content optimization), and off-page SEO (backlinks, brand mentions, authority building). Focus on creating valuable, relevant content that answers your audience's questions.",
    tips: ["Target long-tail keywords with lower competition", "Create comprehensive content (1500+ words)", "Build quality backlinks from relevant sites", "Optimize for local search if applicable", "Monitor and fix technical issues regularly"],
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    content: "Social media platforms are powerful channels for brand awareness, engagement, and lead generation. Choose platforms based on where your audience spends time: LinkedIn for B2B, Instagram for visual brands, Twitter/X for news and tech, Facebook for broad demographics, and TikTok for younger audiences. Focus on consistent posting, community engagement, and authentic storytelling.",
    tips: ["Post consistently (3-5 times per week minimum)", "Use video content for higher engagement", "Engage with comments and messages promptly", "Run targeted ads to reach new audiences", "Track metrics and adjust strategy monthly"],
  },
  {
    icon: Mail,
    title: "Email Marketing",
    content: "Email marketing delivers the highest ROI of any digital marketing channel. Build your list organically with lead magnets, newsletters, and opt-in forms. Segment your audience for personalized messaging. Use automation for welcome sequences, abandoned cart recovery, and re-engagement campaigns.",
    tips: ["Build your list with valuable lead magnets", "Segment subscribers by interest and behavior", "A/B test subject lines and content", "Keep emails concise and action-oriented", "Automate welcome and nurture sequences"],
  },
  {
    icon: BarChart3,
    title: "Paid Advertising (PPC)",
    content: "Pay-per-click advertising through Google Ads, Facebook Ads, and other platforms can drive immediate traffic and leads. Start with a clear budget, target specific keywords or audiences, and continuously optimize based on performance data. Focus on conversion rate optimization alongside traffic generation.",
    tips: ["Start with a small test budget", "Target high-intent keywords", "Use retargeting to recapture lost visitors", "A/B test ad copy and landing pages", "Track conversions, not just clicks"],
  },
  {
    icon: Video,
    title: "Video Marketing",
    content: "Video content drives higher engagement and conversion rates than any other format. YouTube is the second-largest search engine, and short-form video on TikTok, Instagram Reels, and YouTube Shorts offers massive reach opportunities. Invest in quality production while maintaining authentic, relatable content.",
    tips: ["Create how-to and educational content", "Use short-form video for reach", "Add subtitles for accessibility", "Optimize video titles and descriptions for SEO", "Repurpose long videos into short clips"],
  },
  {
    icon: PenTool,
    title: "Content Marketing",
    content: "Content marketing builds authority and trust by providing value to your audience. Blog posts, guides, case studies, and thought leadership content attract organic traffic and nurture leads through the sales funnel. Focus on quality over quantity, and create content that addresses real pain points.",
    tips: ["Create a content calendar and stick to it", "Focus on solving audience problems", "Repurpose content across multiple formats", "Use data and case studies for credibility", "Optimize evergreen content for long-term traffic"],
  },
];

export default function DigitalMarketingGuide() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Digital Marketing Guide"
        description="A comprehensive guide to digital marketing strategies for growing your business online."
        breadcrumb={[{ label: "Resources", href: "/resources" }, { label: "Digital Marketing Guide" }]}
      />

      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="scroll-reveal mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>The Complete Digital Marketing Guide</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Digital marketing is essential for business growth in 2026. This guide covers the core strategies you need to build a strong online presence, attract customers, and drive revenue. Each strategy works best when combined with the others.
            </p>
          </div>

          <div className="space-y-8">
            {strategies.map((strategy, i) => (
              <Card key={i} className="glass-card border-0 p-8 scroll-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <CardContent className="p-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 flex items-center justify-center flex-shrink-0">
                      <strategy.icon className="text-brand-secondary" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{strategy.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{strategy.content}</p>
                  <div className="bg-muted/50 rounded-xl p-4">
                    <p className="text-sm font-semibold mb-2">Key Tips:</p>
                    <ul className="space-y-1.5">
                      {strategy.tips.map((tip) => (
                        <li key={tip} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-secondary mt-1.5 flex-shrink-0" />
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Need help implementing these strategies?</p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-lg hover:shadow-brand-secondary/25 transition-all">
                Get Marketing Services <ArrowRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
