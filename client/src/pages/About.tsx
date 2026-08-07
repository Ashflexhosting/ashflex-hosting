import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";
import { Target, Eye, Heart, Users, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";

const team = [
  { name: "Ashflex CEO", role: "Founder & CEO", bio: "10+ years leading digital innovation across Africa and beyond.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" },
  { name: "Lead Designer", role: "Creative Director", bio: "Award-winning designer with expertise in UI/UX and brand identity.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" },
  { name: "Senior Developer", role: "Technical Lead", bio: "Full-stack engineer specializing in scalable web applications.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "SEO Strategist", role: "Digital Marketing Lead", bio: "Data-driven marketer who drives organic growth for businesses.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" },
];

function CounterStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-brand-secondary mb-2" style={{ fontFamily: "var(--font-heading)" }}>
        {count}{suffix}
      </div>
      <div className="text-muted-foreground">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="About Ashflex"
        description="We're a team of passionate designers, developers, and strategists dedicated to building digital experiences that drive real business growth."
        breadcrumb={[{ label: "About", href: "/about" }]}
      />

      {/* Our Story */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Founded in Lagos, Nigeria, Ashflex Web Design has grown from a small freelance operation into one of Africa's leading digital agencies. What started as a passion for creating beautiful, functional websites has evolved into a comprehensive digital solutions provider serving businesses across Nigeria, Africa, and internationally.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Over the past decade, we've helped more than 250 businesses establish their digital presence — from startups to enterprises, from local shops to international brands. Our commitment to quality, innovation, and client success has earned us a 98% satisfaction rate and a reputation for delivering exceptional results.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we continue to push boundaries with AI-powered solutions, advanced web technologies, and strategic digital marketing to help our clients stay ahead in an ever-evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gradient-brand text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[100px]" />
        </div>
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Our Mission", desc: "To empower businesses with world-class digital solutions that drive growth, increase revenue, and establish lasting competitive advantages in their markets." },
              { icon: Eye, title: "Our Vision", desc: "To become the most trusted digital agency in Africa, known for transforming businesses through innovative design, cutting-edge technology, and strategic digital excellence." },
              { icon: Heart, title: "Core Values", desc: "Integrity, Innovation, Client-First, Excellence, Collaboration, and Continuous Learning — these principles guide everything we do." },
            ].map((item, i) => (
              <div key={i} className="scroll-reveal glass-card-dark p-8" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-5">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "var(--font-heading)" }}>{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <CounterStat value={250} suffix="+" label="Projects Delivered" />
            <CounterStat value={98} suffix="%" label="Client Satisfaction" />
            <CounterStat value={10} suffix="+" label="Years Experience" />
            <CounterStat value={15} suffix="+" label="Countries Served" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-brand-secondary font-semibold text-sm uppercase tracking-wider mb-3">Our Team</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Meet the <span className="text-gradient">Experts</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="scroll-reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="glass-card border-0 p-6 text-center hover-lift">
                  <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" loading="lazy" />
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{member.name}</h3>
                  <p className="text-brand-secondary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Why Clients Trust Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Proven track record with 250+ successful projects",
              "Award-winning design team with 10+ years experience",
              "100% responsive and mobile-optimized websites",
              "SEO-optimized from the ground up",
              "Dedicated project manager for every client",
              "Transparent pricing with no hidden costs",
              "Fast turnaround times without compromising quality",
              "Ongoing support and maintenance services",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle size={20} className="text-brand-secondary mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact">
              <span className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-primary rounded-xl hover:shadow-xl hover:shadow-brand-secondary/25 transition-all duration-300">
                Start Your Project <ArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
