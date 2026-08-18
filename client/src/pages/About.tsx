import { Link } from "wouter";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { SITE_STATS } from "@shared/const";
import { useCounter } from "@/hooks/useCounter";
import { Target, Eye, Heart, Users, Award, Globe, Sparkles, ArrowRight, CheckCircle } from "lucide-react";

const team = [
  { name: "Uzodimma Ogbonnaya", role: "Founder & CEO", bio: `${SITE_STATS.years}+ years leading digital innovation across Africa and beyond.`, img: "/manus-storage/team-ceo_103bb175.png", accent: "from-brand-accent to-[#B2002F]", featured: true },
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
  `Proven track record with ${SITE_STATS.projects}+ successful projects`,
  `Award-winning design team with ${SITE_STATS.years}+ years experience`,
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
    <div ref={ref} className="group/stat relative rounded-2xl px-4 py-6 md:px-6 md:py-7 border border-transparent hover:border-white/10 hover:bg-white/[0.04] hover:-translate-y-1.5 transition-all duration-300 cursor-default" style={{ transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)" }}>
      <div className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-brand-cyan to-brand-accent rounded-full group-hover/stat:w-12 transition-all duration-300" aria-hidden="true" />
      <div className="text-4xl md:text-5xl font-extrabold text-white leading-none group-hover/stat:scale-105 group-hover/stat:text-brand-cyan transition-all duration-300 origin-left" style={{ fontFamily: "var(--font-heading)", transitionDelay: delay }}>
        {count}{suffix}
      </div>
      <div className="mt-3 h-px w-10 bg-gradient-primary group-hover/stat:w-16 transition-all duration-500" />
      <div className="mt-3 text-white/55 group-hover/stat:text-white/80 text-sm transition-colors duration-300">{label}</div>
    </div>
  );
}

const milestones = [
  {
    year: "2016",
    label: "Founded in Lagos",
    anecdote: "Ashflex began as a one-person freelance operation out of a small Lagos apartment — one laptop, big dreams, and a passion for making Nigerian businesses look world-class online.",
  },
  {
    year: "50+",
    label: "Clients by year 3",
    anecdote: "Word of mouth did the heavy lifting. By 2019, more than 50 local shops, clinics, and startups trusted us with their first real digital presence.",
  },
  {
    year: `${SITE_STATS.projects}+`,
    label: "Projects delivered",
    anecdote: "A decade of shipping has taken us from five-page websites to full-scale web applications, e-commerce platforms, and AI-powered tools across four continents.",
  },
  {
    year: `${SITE_STATS.countries}+`,
    label: "Countries served",
    anecdote: "Clients now reach us from London to Toronto, Dubai to Nairobi — proving that great design, done right in Lagos, resonates everywhere.",
  },
];

export default function About() {
  const sectionRef = useScrollReveal();
  const prefersReducedMotion = useReducedMotion();
  const [activeMilestone, setActiveMilestone] = useState<string | null>(null);

  useEffect(() => {
    document.title = "About Us | Ashflex Web Design | Premium Web Design & Development Agency";
    const metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        `About Ashflex Web Design — a premium web design & development agency in Lagos, Nigeria. ${SITE_STATS.projects}+ projects delivered, ${SITE_STATS.satisfaction}% client satisfaction, ${SITE_STATS.years}+ years of experience across ${SITE_STATS.countries}+ countries.`,
      );
    }
    return () => {
      document.title = "Ashflex Web Design | Premium Web Design & Development Agency";
      if (metaDesc) {
        metaDesc.setAttribute(
          "content",
          "Ashflex Web Design is a premium web design & development agency in Lagos, Nigeria. 248+ projects delivered, 96% client satisfaction, 9+ years of experience serving businesses across 14+ countries. Get a free quote today.",
        );
      }
    };
  }, []);

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

      {/* ============ Our Story — dark editorial timeline ============ */}
      <section className="py-20 md:py-28 bg-brand noise-texture relative overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="glow-orb absolute -top-24 -left-24 w-[460px] h-[460px] rounded-full bg-brand-secondary" style={{ opacity: 0.3 }} />
          <div className="glow-orb absolute bottom-0 right-0 w-[380px] h-[380px] rounded-full bg-brand-accent" style={{ opacity: 0.18 }} />
        </div>
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 items-center">
            {/* Left: narrative */}
            <div className="lg:col-span-6">
              <div className="scroll-reveal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-6">
                <Sparkles size={13} className="text-brand-cyan" />
                <span className="text-white/90 text-xs font-semibold uppercase tracking-[0.25em]">Our Story</span>
              </div>
              <h2 className="scroll-reveal text-[1.9rem] xs:text-[2.3rem] sm:text-4xl md:text-[2.8rem] font-extrabold text-white leading-[1.08] tracking-tight" style={{ fontFamily: "var(--font-heading)", transitionDelay: "60ms" }}>
                From a freelance <span className="bg-gradient-to-r from-brand-cyan to-brand-accent bg-clip-text text-transparent">passion project</span> to a studio the industry trusts
              </h2>
              <div className="scroll-reveal mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-[#0757F7] via-[#9B1C8C] to-[#F20549]" style={{ transitionDelay: "100ms" }} />

              <div className="mt-8 space-y-5">
                <p className="scroll-reveal text-xl md:text-[1.55rem] font-bold leading-snug text-white/95" style={{ fontFamily: "var(--font-heading)", transitionDelay: "140ms" }}>
                  Your Business Deserves <span className="text-brand-accent">More Than Just a Website</span>. It Deserves a <span className="text-gradient">Digital Presence That Works</span>.
                </p>
                <p className="scroll-reveal text-base md:text-lg text-white/60 leading-relaxed" style={{ transitionDelay: "180ms" }}>
                  Founded in Lagos, Nigeria, Ashflex Web Design has grown from a small freelance operation into one of Africa's leading digital agencies — serving businesses across Nigeria, Africa, and internationally.
                </p>
                <p className="scroll-reveal text-base md:text-lg text-white/60 leading-relaxed" style={{ transitionDelay: "220ms" }}>
                  Over the past decade, we've helped more than {SITE_STATS.projects} businesses establish their digital presence — from startups to enterprises, from local shops to international brands — earning a {SITE_STATS.satisfaction}% satisfaction rate along the way.
                </p>
                <p className="scroll-reveal text-base md:text-lg text-white/60 leading-relaxed" style={{ transitionDelay: "260ms" }}>
                  Today, we continue to push boundaries with AI-powered solutions, advanced web technologies, and strategic digital marketing to help our clients stay ahead.
                </p>
              </div>

              {/* Interactive milestone chips */}
              <div className="scroll-reveal mt-9 flex flex-wrap gap-3" style={{ transitionDelay: "300ms" }}>
                {milestones.map((m, i) => (
                  <div key={m.year} className="relative" style={{ transitionDelay: `${320 + i * 60}ms` }}>
                    <button
                      type="button"
                      aria-expanded={activeMilestone === m.year}
                      onClick={() => setActiveMilestone(activeMilestone === m.year ? null : m.year)}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/5 border border-white/12 backdrop-blur-sm hover:border-brand-accent/50 hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-accent cursor-pointer"
                    >
                      <span className="text-brand-accent font-extrabold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{m.year}</span>
                      <span className="text-white/55 text-xs font-medium">{m.label}</span>
                    </button>
                    <AnimatePresence>
                      {activeMilestone === m.year && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -6, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                          className="absolute left-0 -bottom-2 translate-y-full z-20 w-[min(290px,calc(100vw-2.5rem))] rounded-2xl glass-card-dark p-4 shadow-xl"
                        >
                          <p className="text-white/85 text-[13px] leading-relaxed">
                            <span className="text-brand-accent font-extrabold text-sm block mb-1" style={{ fontFamily: "var(--font-heading)" }}>{m.year} — {m.label}</span>
                            {m.anecdote}
                          </p>
                          <div className="absolute -top-1.5 left-8 w-3 h-3 rotate-45 glass-card-dark border-l border-t border-white/12" aria-hidden="true" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: photo collage card with scroll-triggered fade-in */}
            <div className="lg:col-span-6">
              <motion.div
                className="relative"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={{
                  hidden: { opacity: 0, y: 48 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: prefersReducedMotion ? 0.01 : 0.7, delay: prefersReducedMotion ? 0 : 0.12, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-secondary/30 via-transparent to-brand-accent/25 blur-xl" aria-hidden="true" />
                <div className="relative rounded-[1.75rem] overflow-hidden border border-white/10 shadow-2xl shadow-black/40">
                  <img
                    src="/manus-storage/our-story-collage_46eccbb5.png"
                    alt="The journey from a freelance designer's desk to the modern Ashflex studio in Lagos"
                    className="w-full h-full object-cover aspect-[4/3]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand/70 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-6 flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full bg-gradient-primary flex items-center justify-center shadow-lg">
                      <Award size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-heading)" }}>{SITE_STATS.years}+ Years of Digital Craft</p>
                      <p className="text-white/55 text-xs">Lagos, Nigeria → the world</p>
                    </div>
                  </div>
                </div>
                {/* Floating stat card with scroll-triggered fade-in */}
                <motion.div
                  className="absolute -top-5 -right-3 md:-right-6 glass-card-dark px-5 py-4 rounded-2xl shadow-xl"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.94 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  transition={{ duration: prefersReducedMotion ? 0.01 : 0.55, delay: prefersReducedMotion ? 0 : 0.35, ease: [0.23, 1, 0.32, 1] }}
                >
                  <p className="text-2xl font-extrabold bg-gradient-to-r from-brand-accent to-brand-secondary bg-clip-text text-transparent leading-none" style={{ fontFamily: "var(--font-heading)" }}>{SITE_STATS.satisfaction}%</p>
                  <p className="text-white/50 text-[11px] font-medium mt-1">Client satisfaction</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ Mission / Vision / Values — bento grid ============ */}
      <section className="relative bg-navy noise-texture overflow-hidden">
        {/* Fixed background image with navy overlay for depth */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          aria-hidden="true"
          style={{ backgroundImage: "url('/manus-storage/services-inquiry-bg_58c1e14e.png')" }}
        />
        <div className="absolute inset-0 bg-navy/60" aria-hidden="true" />

        <div className="container relative z-10 py-20 md:py-24">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Mission — spans 7 (staggered slide-up reveal) */}
            <div className="bento-reveal lg:col-span-7 glass-card group/glare relative overflow-hidden p-8 md:p-10 rounded-3xl border-0 shadow-lg hover:shadow-2xl hover:shadow-brand/10 transition-all duration-300">
              {/* Subtle glass reflection glare sweep */}
              <div className="glass-glare" aria-hidden="true" />
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-brand-secondary/20">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed text-lg">
                To empower businesses with world-class digital solutions that drive growth, increase revenue, and establish lasting competitive advantages in their markets.
              </p>
            </div>
            {/* Vision — spans 5 */}
            <div className="bento-reveal lg:col-span-5 glass-card group/glare relative overflow-hidden p-8 md:p-10 rounded-3xl border-0 shadow-lg hover:shadow-2xl hover:shadow-brand/10 transition-all duration-300" style={{ transitionDelay: "140ms" }}>
              {/* Subtle glass reflection glare sweep */}
              <div className="glass-glare" aria-hidden="true" />
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 shadow-lg shadow-brand-secondary/20">
                <Eye className="text-white" size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-heading)" }}>Our Vision</h3>
              <p className="text-foreground/80 leading-relaxed">
                To become the most trusted digital agency in Africa, known for transforming businesses through innovative design, cutting-edge technology, and strategic digital excellence.
              </p>
            </div>
          </div>

          {/* ============ Meet the Founder — signature quote box ============ */}
          <div className="mt-12">
            <motion.div
              className="relative overflow-hidden rounded-3xl bg-[#0A1640] border border-white/10 shadow-2xl shadow-black/40"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: prefersReducedMotion ? 0.01 : 0.65, ease: [0.23, 1, 0.32, 1] }}
            >
              {/* Decorative orbs */}
              <div className="absolute -top-24 -right-24 w-[380px] h-[380px] rounded-full bg-brand-accent/15 blur-3xl pointer-events-none" aria-hidden="true" />
              <div className="absolute -bottom-28 -left-28 w-[340px] h-[340px] rounded-full bg-brand-secondary/20 blur-3xl pointer-events-none" aria-hidden="true" />
              {/* Oversized quote glyph */}
              <div className="absolute top-4 right-6 md:top-6 md:right-10 select-none" aria-hidden="true">
                <span className="text-[130px] md:text-[180px] leading-none font-extrabold bg-gradient-to-b from-brand-accent/30 to-transparent bg-clip-text text-transparent" style={{ fontFamily: "var(--font-heading)" }}>&ldquo;</span>
              </div>

              <div className="relative z-10 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 p-8 md:p-12 items-center">
                {/* Photo with accent ring */}
                <motion.div
                  className="relative mx-auto md:mx-0 w-28 h-28 md:w-36 md:h-36 flex-shrink-0"
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: prefersReducedMotion ? 0.01 : 0.55, delay: prefersReducedMotion ? 0 : 0.18, ease: [0.23, 1, 0.32, 1] }}
                >
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-brand-cyan via-brand-secondary to-brand-accent blur-[6px] opacity-70" aria-hidden="true" />
                  <div className="relative w-full h-full rounded-full p-[3px] bg-gradient-to-br from-brand-cyan via-brand-secondary to-brand-accent">
                    <img
                      src="/manus-storage/team-ceo_103bb175.png"
                      alt="Uzodimma Ogbonnaya, Founder & CEO of Ashflex Web Design"
                      className="w-full h-full rounded-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </motion.div>

                {/* Quote content */}
                <div>
                  <p className="scroll-reveal text-white/35 text-xs font-semibold uppercase tracking-[0.25em] mb-4">Meet the Founder</p>
                  <blockquote className="text-lg md:text-[1.45rem] leading-relaxed text-white/90 font-medium" style={{ fontFamily: "var(--font-heading)" }}>
                    We don&rsquo;t just build websites — we build <span className="bg-gradient-to-r from-brand-cyan to-brand-accent bg-clip-text text-transparent">digital legacies</span>.
                    Every pixel we ship is a promise that your business will be seen, trusted, and chosen.
                  </blockquote>
                  <div className="mt-7 flex items-center gap-5">
                    <div>
                      <p className="text-white font-extrabold text-lg leading-tight" style={{ fontFamily: "var(--font-heading)" }}>Uzodimma Ogbonnaya</p>
                      <p className="text-brand-cyan text-sm font-semibold">Founder &amp; CEO, Ashflex Web Design</p>
                    </div>
                    <span className="hidden sm:inline text-4xl text-brand-accent/70" style={{ fontFamily: "'Brush Script MT', cursive", transform: "rotate(-4deg)" }}>Ogbonnaya</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Core values band */}
          <div className="mt-12">
            <p className="scroll-reveal text-white/40 font-semibold text-xs uppercase tracking-[0.25em] mb-8">What guides everything we do — Core Values</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {coreValues.map((v, i) => (
                <div key={i} className="scroll-reveal group/value glass-card group/glare relative overflow-hidden p-5 rounded-2xl text-center border-0 hover:-translate-y-1.5 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-brand/10" style={{ transitionDelay: `${i * 60}ms` }}>
                  {/* Subtle glass reflection glare sweep */}
                  <div className="glass-glare" aria-hidden="true" />
                  <div className="relative z-10 w-11 h-11 rounded-xl bg-brand/5 border border-brand/10 flex items-center justify-center mx-auto mb-3 group-hover/value:bg-brand-cyan/10 group-hover/value:border-brand-cyan/30 transition-colors">
                    <v.icon size={20} className="text-brand-cyan group-hover/value:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-foreground font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-heading)" }}>{v.title}</h4>
                  <p className="text-muted-foreground text-xs leading-relaxed group-hover/value:text-foreground/80 transition-colors">{v.desc}</p>
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
            <CounterStat value={SITE_STATS.projects} suffix="+" label="Projects Delivered" />
            <CounterStat value={SITE_STATS.satisfaction} suffix="%" label="Client Satisfaction" delay="100ms" />
            <CounterStat value={SITE_STATS.years} suffix="+" label="Years Experience" delay="200ms" />
            <CounterStat value={SITE_STATS.countries} suffix="+" label="Countries Served" delay="300ms" />
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
                {member.featured ? (
                <div className="relative glass-card-dark border-0 p-6 text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-accent/25 transition-all duration-300 rounded-3xl overflow-hidden bg-gradient-to-b from-brand-accent to-[#B2002F] text-white">
                  <div className="absolute inset-0 opacity-25 noise-texture" aria-hidden="true" />
                  <div className="relative mx-auto w-24 h-24 rounded-full p-0.5 bg-white/30 mb-5">
                    <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-lg font-extrabold" style={{ fontFamily: "var(--font-heading)" }}>{member.name}</h3>
                  <p className="text-sm font-semibold mb-3 text-white/85">{member.role}</p>
                  <p className="text-sm text-white/70 leading-relaxed">{member.bio}</p>
                </div>
                ) : (
                <div className="relative glass-card border-0 p-6 text-center hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand/15 transition-all duration-300 rounded-3xl overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.accent} opacity-60 group-hover:opacity-100 transition-opacity`} aria-hidden="true" />
                  <div className="relative mx-auto w-24 h-24 rounded-full p-0.5 bg-gradient-primary mb-5">
                    <img src={member.img} alt={member.name} className="w-full h-full rounded-full object-cover" loading="lazy" />
                  </div>
                  <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-heading)" }}>{member.name}</h3>
                  <p className={`text-sm font-semibold mb-3 bg-gradient-to-r ${member.accent} bg-clip-text text-transparent`}>{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
                )}
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
