import { Link } from "wouter";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCounter } from "@/hooks/useCounter";
import { Target, Eye, Heart, Users, Award, Globe, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const team = [
  { name: "Uzodimma Ogbonnaya", role: "Founder & CEO", bio: "10+ years leading digital innovation across Africa and beyond.", img: "/manus-storage/team-ceo_103bb175.png", accent: "from-brand-secondary to-brand-accent" },
  { name: "Adaeze Nwosu", role: "Creative Director", bio: "Award-winning designer with expertise in UI/UX and brand identity.", img: "/manus-storage/team-designer_31932908.png", accent: "from-brand-accent to-brand-cyan" },
  { name: "Chidi Eze", role: "Technical Lead", bio: "Full-stack engineer specializing in scalable web applications.", img: "/manus-storage/team-developer_8a4edf68.png", accent: "from-brand-cyan to-brand-secondary" },
  { name: "Ngozi Obi", role: "Digital Marketing Lead", bio: "Data-driven marketer who drives organic growth for businesses.", img: "/manus-storage/team-marketer_e9c29036.png", accent: "from-brand-accent to-brand-secondary" },
];

const coreValues = [
  { icon: Heart, title: "Integrity", desc: "Honest communication and transparent processes on every project, from day one." },
  { icon: Sparkles, title: "Innovation", desc: "We embrace emerging technologies and creative approaches before they become standard." },
  { icon: Users, title: "Client-First", desc: "Every design decision starts with your audience and your business outcomes." },
  { icon: Award, title: "Excellence", desc: "Pixel-perfect execution and rigorous quality checks before anything ships." },
  { icon: Globe, title: "Collaboration", desc: "We work alongside your team, not around them — shared goals, shared wins." },
  { icon: Target, title: "Continuous Learning", desc: "A studio that invests in itself: new tools, new techniques, new standards." },
];

const trustPoints = [
  "Proven track record with 250+ successful projects",
  "Award-winning design team with 10+ years experience",
  "100% responsive and mobile-optimized websites",
  "SEO-optimized from the ground up",
  "Dedicated project manager for every client",
  "Transparent pricing with no hidden costs",
  "Fast turnaround times without compromising quality",
  "Ongoing support and maintenance services",
];

function CounterStat({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay?: string }) {
  const msDelay = delay ? parseInt(delay, 10) : 0;
  const { count, ref } = useCounter(value, 2200, 0, msDelay);
  return (
    <div ref={ref} className="group">
      <div className="text-4xl md:text-5xl font-extrabold text-white leading-none" style={{ fontFamily: "var(--font-heading)", transitionDelay: delay }}>
        {count}{suffix}
      </div>
      <div className="mt-3 h-px w-10 bg-gradient-primary group-hover:w-16 transition-all duration-500" />
      <div className="mt-3 text-white/55 text-sm">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <div className="min-h-screen overflow-x-clip" ref={sectionRef}>
      {/* ============ Page header banner (original style) ============ */}
      <PageHeader
        title="About Ashflex"
        description="We're a team of passionate designers, developers, and strategists dedicated to building digital experiences that drive real business growth."
        breadcrumb={[{ label: "About", href: "/about" }]}
      />

      {/* ============ Marquee strip ============ */}
      <div className="relative bg-gradient-brand border-y border-white/10 overflow-hidden py-3.5">
        <div className="marquee-track whitespace-nowrap" aria-hidden="true">
          {[...Array(2)].map((_, r) => (
            <span key={r} className="flex items-center gap-8 pr-8 text-sm font-semibold uppercase tracking-[0.25em] text-white/45">
              <span>Web Design</span><Sparkles size={14} className="text-brand-accent" />
              <span>Development</span><Sparkles size={14} className="text-brand-cyan" />
              <span>Brand Identity</span><Sparkles size={14} className="text-brand-secondary" />
              <span>SEO</span><Sparkles size={14} className="text-brand-accent" />
              <span>E-commerce</span><Sparkles size={14} className="text-brand-cyan" />
              <span>AI Automation</span><Sparkles size={14} className="text-brand-secondary" />
            </span>
          ))}
        </div>
      </div>

      {/* ============ Our Story — asymmetric editorial ============ */}
      <section className="py-20 md:py-24 relative">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 scroll-reveal">
              <div className="lg:sticky lg:top-28">
                <p className="text-brand-secondary font-semibold text-sm uppercase tracking-[0.25em] mb-4">Our Story</p>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
                  From a freelance <span className="text-gradient">passion project</span> to a studio the industry trusts
                </h2>
                <div className="mt-6 h-1 w-24 grain-line" />
              </div>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <p className="scroll-reveal text-lg md:text-xl text-foreground/75 leading-relaxed">
                Founded in Lagos, Nigeria, Ashflex Web Design has grown from a small freelance operation into one of Africa's leading digital agencies. What started as a passion for creating beautiful, functional websites has evolved into a comprehensive digital solutions provider serving businesses across Nigeria, Africa, and internationally.
              </p>
              <p className="scroll-reveal text-lg md:text-xl text-foreground/75 leading-relaxed" style={{ transitionDelay: "80ms" }}>
                Over the past decade, we've helped more than 250 businesses establish their digital presence — from startups to enterprises, from local shops to international brands. Our commitment to quality, innovation, and client success has earned us a 98% satisfaction rate and a reputation for delivering exceptional results.
              </p>
              <p className="scroll-reveal text-lg md:text-xl text-foreground/75 leading-relaxed" style={{ transitionDelay: "160ms" }}>
                Today, we continue to push boundaries with AI-powered solutions, advanced web technologies, and strategic digital marketing to help our clients stay ahead in an ever-evolving digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Mission / Vision / Values — bento grid ============ */}
      <section className="py-20 md:py-24 bg-brand noise-texture relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="glow-orb absolute top-0 right-1/3 w-[420px] h-[420px] rounded-full bg-brand-secondary" style={{ opacity: 0.35 }} />
          <div className="glow-orb absolute bottom-0 left-1/4 w-[360px] h-[360px] rounded-full bg-brand-accent" style={{ opacity: 0.22 }} />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Mission — spans 7 */}
            <div className="scroll-reveal lg:col-span-7 glass-card-dark p-8 md:p-10 rounded-3xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Mission</h3>
              <p className="text-white/60 leading-relaxed text-lg">
                To empower businesses with world-class digital solutions that drive growth, increase revenue, and establish lasting competitive advantages in their markets.
              </p>
            </div>
            {/* Vision — spans 5 */}
            <div className="scroll-reveal lg:col-span-5 glass-card-dark p-8 md:p-10 rounded-3xl" style={{ transitionDelay: "100ms" }}>
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Vision</h3>
              <p className="text-white/60 leading-relaxed">
                To become the most trusted digital agency in Africa, known for transforming businesses through innovative design, cutting-edge technology, and strategic digital excellence.
              </p>
            </div>
          </div>

          {/* Core values band */}
          <div className="mt-8">
            <p className="scroll-reveal text-white/40 font-semibold text-xs uppercase tracking-[0.25em] mb-8">What guides everything we do — Core Values</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreValues.map((v, i) => (
                <div key={i} className="scroll-reveal glass-card-dark p-5 rounded-2xl text-center hover:border-brand-cyan/40 transition-colors duration-300" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-3">
                    <v.icon size={20} className="text-brand-cyan" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>{v.title}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ Stats — dark band with counters ============ */}
      <section className="py-20 md:py-24 bg-[#0A1640] relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="glow-orb absolute -top-20 left-1/3 w-[420px] h-[420px] rounded-full bg-brand-secondary" style={{ opacity: 0.22 }} />
          <div className="glow-orb absolute bottom-0 right-0 w-[340px] h-[340px] rounded-full bg-brand-accent" style={{ opacity: 0.15 }} />
        </div>
        <div className="container relative z-10">
          <p className="scroll-reveal text-white/40 font-semibold text-xs uppercase tracking-[0.25em] mb-12">The numbers behind the studio</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            <CounterStat value={250} suffix="+" label="Projects Delivered" />
            <CounterStat value={98} suffix="%" label="Client Satisfaction" delay="100ms" />
            <CounterStat value={10} suffix="+" label="Years Experience" delay="200ms" />
            <CounterStat value={15} suffix="+" label="Countries Served" delay="300ms" />
          </div>
        </div>
      </section>

      {/* ============ Team — bento-style cards ============ */}
      <section className="py-20 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <p className="scroll-reveal text-brand-secondary font-semibold text-sm uppercase tracking-[0.25em] mb-3">Our Team</p>
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Meet the <span className="text-gradient">Experts</span></h2>
            <div className="scroll-reveal mt-5 h-1 w-24 grain-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <div key={i} className="scroll-reveal group" style={{ transitionDelay: `${i * 60}ms` }}>
                <div className="relative glass-card border-0 p-6 text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/15 transition-all duration-300 rounded-3xl overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.accent} opacity-60 group-hover:opacity-100 transition-opacity`} aria-hidden="true" />
                  <div className="relative mx-auto w-24 h-24 rounded-full p-0.5 bg-gradient-primary mb-5">
                    <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{member.name}</h3>
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.accent} bg-clip-text text-transparent`}>{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Why Clients Trust Us ============ */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="container max-w-5xl">
          <div className="text-center mb-14">
            <p className="scroll-reveal text-brand-secondary font-semibold text-sm uppercase tracking-[0.25em] mb-3">Track Record</p>
            <h2 className="scroll-reveal text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>Why Clients <span className="text-gradient">Trust Us</span></h2>
            <div className="scroll-reveal mt-5 h-1 w-24 grain-line mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
            {trustPoints.map((item, i) => (
              <div key={i} className="scroll-reveal flex items-start gap-3.5" style={{ transitionDelay: `${(i % 2) * 60}ms` }}>
                <CheckCircle size={20} className="text-brand-cyan mt-0.5 flex-shrink-0" />
                <span className="text-foreground/80 leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="scroll-reveal text-center mt-14" style={{ transitionDelay: "200ms" }}>
            <Link href="/contact">
              <span className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-gradient-primary rounded-2xl hover:shadow-2xl hover:shadow-brand-accent/25 hover:-translate-y-0.5 transition-all duration-300">
                Start Your Project <ArrowRight size={19} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
