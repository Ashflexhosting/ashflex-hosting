import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Clock, User } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const categories = ["All", "SEO", "Web Design", "Marketing", "AI", "Business Growth", "WordPress"];

const blogPosts = [
  {
    id: 1,
    title: "10 SEO Trends That Will Dominate 2026",
    category: "SEO",
    excerpt: "Discover the latest SEO trends and strategies that will help your business rank higher in search results this year.",
    image: "/manus-storage/blog-seo_20b48157.png",
    author: "Ashflex Team",
    date: "Jan 15, 2026",
    readTime: "8 min",
  },
  {
    id: 2,
    title: "Why Mobile-First Design Is Non-Negotiable in 2026",
    category: "Web Design",
    excerpt: "With 78% of web traffic coming from mobile devices, here's why your website must be designed mobile-first.",
    image: "/manus-storage/blog-mobile_027a9e52.png",
    author: "Ashflex Team",
    date: "Jan 8, 2026",
    readTime: "6 min",
  },
  {
    id: 3,
    title: "How to Choose the Right Digital Marketing Strategy",
    category: "Marketing",
    excerpt: "A comprehensive guide to selecting the best digital marketing channels for your business goals and budget.",
    image: "/manus-storage/blog-marketing_7ebe874f.png",
    author: "Ashflex Team",
    date: "Dec 20, 2025",
    readTime: "10 min",
  },
  {
    id: 4,
    title: "AI-Powered Websites: The Future Is Now",
    category: "AI",
    excerpt: "How artificial intelligence is transforming web design, from personalized experiences to automated optimization.",
    image: "/manus-storage/blog-ai_d4ecc01f.png",
    author: "Ashflex Team",
    date: "Dec 15, 2025",
    readTime: "7 min",
  },
  {
    id: 5,
    title: "5 Ways Your Website Can Drive Business Growth",
    category: "Business Growth",
    excerpt: "Practical strategies to turn your website into a powerful growth engine for your business.",
    image: "/manus-storage/blog-growth_fd9acb6b.png",
    author: "Ashflex Team",
    date: "Dec 10, 2025",
    readTime: "5 min",
  },
  {
    id: 6,
    title: "WordPress vs Custom Development: Which Is Right for You?",
    category: "WordPress",
    excerpt: "An honest comparison of WordPress and custom development to help you make the best decision for your project.",
    image: "/manus-storage/blog-wordpress_fb3989c6.png",
    author: "Ashflex Team",
    date: "Dec 5, 2025",
    readTime: "9 min",
  },
  {
    id: 7,
    title: "The Complete Guide to Google Ads for Small Businesses",
    category: "Marketing",
    excerpt: "Everything you need to know about running profitable Google Ads campaigns on a limited budget.",
    image: "/manus-storage/blog-ecommerce_de293ff3.png",
    author: "Ashflex Team",
    date: "Nov 28, 2025",
    readTime: "12 min",
  },
  {
    id: 8,
    title: "Website Speed Optimization: A Complete Checklist",
    category: "Web Design",
    excerpt: "Step-by-step guide to making your website lightning fast and improving your Core Web Vitals scores.",
    image: "/manus-storage/blog-webdesign_fe599a26.png",
    author: "Ashflex Team",
    date: "Nov 20, 2025",
    readTime: "15 min",
  },
  {
    id: 9,
    title: "How AI Chatbots Can Transform Customer Service",
    category: "AI",
    excerpt: "Implementing AI chatbots to provide 24/7 customer support and boost conversions on your website.",
    image: "/manus-storage/blog-branding_49352312.png",
    author: "Ashflex Team",
    date: "Nov 15, 2025",
    readTime: "7 min",
  },
];

export default function Blog() {
  const sectionRef = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((post) => post.category === activeCategory);

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Blog & Insights"
        description="Stay updated with the latest web design trends, SEO strategies, and digital marketing insights from our expert team."
        breadcrumb={[{ label: "Blog", href: "/blog" }]}
      />

      <section className="py-20">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-gradient-primary text-white shadow-lg shadow-brand-secondary/25"
                    : "bg-white text-foreground/70 hover:text-foreground border border-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post, i) => (
              <div key={post.id} className="scroll-reveal" style={{ transitionDelay: `${i * 50}ms` }}>
                <Link href={`/blog/${post.id}`}>
                  <Card className="glass-card border-0 overflow-hidden hover-lift h-full">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <CardContent className="p-5">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 text-xs font-medium rounded-full bg-brand-secondary/10 text-brand-secondary">{post.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2" style={{ fontFamily: "var(--font-heading)" }}>{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <User size={12} /> {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
