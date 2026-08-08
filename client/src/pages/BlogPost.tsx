import { useParams, Link } from "wouter";
import { ArrowRight, ArrowLeft, Clock, User, Calendar } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import NotFound from "./NotFound";

const blogPosts = [
  { id: 1, title: "10 SEO Trends That Will Dominate 2026", category: "SEO", author: "Ashflex Team", date: "Jan 15, 2026", readTime: "8 min", image: "/manus-storage/blog-seo_20b48157.png", content: "The SEO landscape is constantly evolving, and 2026 brings exciting new trends that will shape how businesses approach search engine optimization. From AI-powered content to voice search optimization, here are the top trends you need to know.\n\n1. AI-Powered Content Optimization\nArtificial intelligence is transforming how we create and optimize content. AI tools can now analyze search intent, suggest improvements, and even generate high-quality content that ranks well.\n\n2. Core Web Vitals 2.0\nGoogle continues to refine its page experience signals. Speed, interactivity, and visual stability remain critical ranking factors.\n\n3. Voice Search Optimization\nWith the rise of smart speakers and voice assistants, optimizing for conversational queries is more important than ever.\n\n4. E-E-A-T Signals\nExperience, Expertise, Authoritativeness, and Trustworthiness remain crucial for ranking, especially for YMYL content.\n\n5. Video SEO\nVideo content continues to dominate search results. Optimizing video content for search is essential.\n\nThese trends represent the future of SEO. Businesses that adapt early will gain significant competitive advantages. Start auditing your current strategy against these trends and make adjustments where needed." },
  { id: 2, title: "Why Mobile-First Design Is Non-Negotiable in 2026", category: "Web Design", author: "Ashflex Team", date: "Jan 8, 2026", readTime: "6 min", image: "/manus-storage/blog-mobile_027a9e52.png", content: "With over 78% of global web traffic coming from mobile devices, designing for mobile isn't just a trend — it's a necessity. Here's why your website must adopt a mobile-first approach.\n\nThe Numbers Don't Lie\nMobile traffic has surpassed desktop traffic by a significant margin. Google's mobile-first indexing means your mobile site is the primary version considered for ranking.\n\nKey Benefits of Mobile-First Design\nBetter user experience, faster load times, improved SEO rankings, and higher conversion rates are just some of the benefits of prioritizing mobile.\n\nBest Practices\nStart with the smallest screen, use responsive images, optimize touch targets, and prioritize content hierarchy.\n\nImplementation Tips\nUse CSS media queries, flexbox and grid layouts, and test on real devices throughout development to ensure consistent performance." },
  { id: 3, title: "How to Choose the Right Digital Marketing Strategy", category: "Marketing", author: "Ashflex Team", date: "Dec 20, 2025", readTime: "10 min", image: "/manus-storage/blog-marketing_7ebe874f.png", content: "Choosing the right digital marketing strategy can make or break your business growth. This comprehensive guide helps you select the best channels for your goals and budget.\n\nUnderstanding Your Goals\nBefore choosing channels, define clear objectives: brand awareness, lead generation, sales, or customer retention.\n\nChannel Comparison\nSEO, PPC, social media, email marketing, and content marketing each have unique strengths and ideal use cases. Understanding these helps you allocate resources effectively.\n\nBudget Allocation\nA practical framework for distributing your marketing budget across channels based on your business size and goals.\n\nMeasuring Success\nKey metrics to track for each channel and how to calculate ROI effectively." },
  { id: 4, title: "AI-Powered Websites: The Future Is Now", category: "AI", author: "Ashflex Team", date: "Dec 15, 2025", readTime: "7 min", image: "/manus-storage/blog-ai_d4ecc01f.png", content: "Artificial intelligence is transforming web design in profound ways. From personalized user experiences to automated optimization, AI is no longer a futuristic concept — it's a present-day reality.\n\nPersonalized User Experiences\nAI algorithms can analyze user behavior in real-time and adapt content, layout, and recommendations accordingly.\n\nAutomated Optimization\nAI-powered tools can continuously test and optimize your website for conversions without manual intervention.\n\nAI Chatbots and Assistants\nIntelligent chatbots provide 24/7 customer support, answer questions, and guide users toward conversion.\n\nContent Generation\nAI tools help create high-quality content at scale while maintaining brand voice and quality standards.\n\nThe businesses that embrace AI-powered web experiences today will have a significant advantage tomorrow." },
  { id: 5, title: "5 Ways Your Website Can Drive Business Growth", category: "Business Growth", author: "Ashflex Team", date: "Dec 10, 2025", readTime: "5 min", image: "/manus-storage/blog-growth_fd9acb6b.png", content: "Your website should be more than a digital brochure — it should be a powerful growth engine for your business. Here are five practical strategies to make that happen.\n\n1. Conversion Optimization\nEvery page should have a clear purpose and call-to-action. Optimize your conversion funnels to turn visitors into leads and customers.\n\n2. Lead Generation\nImplement strategic lead magnets, forms, and landing pages that capture visitor information and nurture them through your sales pipeline.\n\n3. SEO and Organic Traffic\nInvest in content and technical SEO to attract qualified traffic consistently without ongoing ad spend.\n\n4. Analytics and Data-Driven Decisions\nTrack user behavior, conversion paths, and performance metrics to make informed business decisions.\n\n5. Customer Trust and Credibility\nShowcase testimonials, case studies, and social proof to build trust and reduce purchase friction." },
  { id: 6, title: "WordPress vs Custom Development: Which Is Right for You?", category: "WordPress", author: "Ashflex Team", date: "Dec 5, 2025", readTime: "9 min", image: "/manus-storage/blog-wordpress_fb3989c6.png", content: "When it comes to building your website, one of the most important decisions is choosing between WordPress and custom development. Both have merits, and the right choice depends on your specific needs.\n\nWhen WordPress Makes Sense\nWordPress is ideal for blogs, small business sites, and content-heavy websites. It offers rapid development, easy content management, and a vast plugin ecosystem.\n\nWhen Custom Development Makes Sense\nComplex applications, unique functionality, high-performance requirements, and scalable platforms often benefit from custom development using modern frameworks.\n\nCost Comparison\nWordPress sites are generally faster and cheaper to build initially. Custom solutions require more upfront investment but offer greater long-term flexibility.\n\nMaintenance Considerations\nWordPress requires regular plugin updates and security patches. Custom solutions need ongoing developer support but have fewer third-party dependencies.\n\nThe right choice depends on your budget, timeline, technical requirements, and growth plans." },
  { id: 7, title: "The Complete Guide to Google Ads for Small Businesses", category: "Marketing", author: "Ashflex Team", date: "Nov 28, 2025", readTime: "12 min", image: "/manus-storage/blog-ecommerce_de293ff3.png", content: "Google Ads can be a powerful tool for small businesses, but without proper strategy, it's easy to waste budget. This guide covers everything you need to run profitable campaigns.\n\nGetting Started\nSet up your Google Ads account, define your campaign objectives, and determine your initial budget.\n\nKeyword Research\nFind the right keywords that your potential customers are searching for. Focus on long-tail keywords for better ROI.\n\nAd Copy Best Practices\nWrite compelling ad copy that speaks directly to your audience's pain points and includes clear calls-to-action.\n\nLanding Page Optimization\nEnsure your landing pages are relevant to your ads and optimized for conversions.\n\nBudget Management\nStart small, test thoroughly, and scale what works. Track conversions closely to understand your true cost per acquisition." },
  { id: 8, title: "Website Speed Optimization: A Complete Checklist", category: "Web Design", author: "Ashflex Team", date: "Nov 20, 2025", readTime: "15 min", image: "/manus-storage/blog-growth_fd9acb6b.png", content: "Website speed directly impacts user experience, SEO rankings, and conversion rates. Here's a complete checklist to make your website lightning fast.\n\nImage Optimization\nCompress images, use modern formats like WebP, and implement lazy loading for below-the-fold content.\n\nCode Minification\nMinify HTML, CSS, and JavaScript files to reduce their size and improve load times.\n\nCaching Strategies\nImplement browser caching, server-side caching, and CDN usage to serve content faster.\n\nCore Web Vitals\nOptimize for LCP (Largest Contentful Paint), FID (First Input Delay), and CLS (Cumulative Layout Shift).\n\nHosting and Infrastructure\nChoose reliable hosting with good server response times and consider upgrading to faster infrastructure when needed." },
  { id: 9, title: "How AI Chatbots Can Transform Customer Service", category: "AI", author: "Ashflex Team", date: "Nov 15, 2025", readTime: "7 min", image: "/manus-storage/blog-branding_49352312.png", content: "AI chatbots are revolutionizing customer service by providing instant, 24/7 support that scales with your business.\n\nBenefits of AI Chatbots\nInstant responses, reduced support costs, consistent service quality, and the ability to handle multiple conversations simultaneously.\n\nImplementation Best Practices\nStart with common questions and use cases. Train your bot on real customer interactions and continuously improve its responses.\n\nHuman Handoff\nAlways provide a seamless transition to human agents when the bot can't resolve an issue. This ensures customer satisfaction while maximizing efficiency.\n\nIntegration with Your Systems\nConnect your chatbot to your CRM, knowledge base, and other systems to provide contextual, helpful responses.\n\nMeasuring Success\nTrack resolution rates, customer satisfaction scores, and time savings to quantify the impact of your chatbot implementation." },
];

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const sectionRef = useScrollReveal();
  const post = blogPosts.find((p) => p.id === Number(id));

  if (!post) {
    return <NotFound />;
  }

  return (
    <div ref={sectionRef}>
      <PageHeader
        title={post.title}
        description=""
        breadcrumb={[{ label: "Blog", href: "/blog" }, { label: post.title }]}
      />

      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="scroll-reveal mb-8">
            <img src={post.image} alt={post.title} className="w-full rounded-2xl shadow-lg" />
          </div>

          <div className="flex items-center gap-4 mb-8 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full bg-brand-secondary/10 text-brand-secondary font-medium">{post.category}</span>
            <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
            <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
            <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
          </div>

          <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed whitespace-pre-line">
            {post.content.split("\n\n").map((paragraph, i) => (
              <p key={i} className={/^\d+\.\s/.test(paragraph) ? "font-semibold" : ""}>
                {paragraph.replace(/\*\*(.*?)\*\*/g, "$1")}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border/50">
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-heading)" }}>Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Need expert help implementing these strategies? Let's discuss how we can help your business grow.
            </p>
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-200">
                Contact Us <ArrowRight size={18} />
              </span>
            </Link>
          </div>

          <div className="mt-8">
            <Link href="/blog">
              <span className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand-secondary transition-colors">
                <ArrowLeft size={16} /> Back to Blog
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
