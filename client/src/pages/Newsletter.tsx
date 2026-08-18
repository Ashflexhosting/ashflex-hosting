import { useState } from "react";
import { Link } from "wouter";
import { toast } from "sonner";
import {
  Mail, CheckCircle2, Globe, Zap, TrendingUp, Palette,
  ShieldCheck, ArrowRight, Sparkles, Rocket, Lightbulb,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { AnimatePresence, motion } from "framer-motion";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const benefits = [
  {
    icon: Globe,
    title: "Design insights",
    description:
      "Practical web design lessons from real Ashflex projects — what converts, what doesn't, and why.",
  },
  {
    icon: Zap,
    title: "Early access",
    description:
      "Be the first to hear about new services, tools, and special offers before they reach the wider public.",
  },
  {
    icon: TrendingUp,
    title: "Growth strategies",
    description:
      "Monthly tips on SEO, speed, and conversion that Nigerian and international businesses can act on.",
  },
  {
    icon: Palette,
    title: "Creative inspiration",
    description:
      "Curated design trends, portfolio highlights, and behind-the-scenes looks at how we build sites.",
  },
  {
    icon: ShieldCheck,
    title: "No spam, ever",
    description:
      "We only send a few thoughtful emails per month, and you can unsubscribe with one click anytime.",
  },
  {
    icon: Lightbulb,
    title: "Business resources",
    description:
      "Free checklists, guides, and templates that help you maintain and grow your online presence.",
  },
];

const whatToExpect = [
  {
    icon: Sparkles,
    label: "Design & development insights",
  },
  {
    icon: Rocket,
    label: "Product launches & offers",
  },
  {
    icon: TrendingUp,
    label: "Marketing & SEO tips",
  },
];

export default function Newsletter() {
  const sectionRef = useScrollReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      setSubmitted(true);
      toast.success("You're on the list!", {
        description: "Thanks for subscribing — we'll keep you posted.",
      });
      try {
        localStorage.setItem("ashflex_newsletter_prompted", "1");
      } catch {
        // Storage may be unavailable; ignore.
      }
    },
    onError: () => {
      toast.error("Couldn't subscribe right now", {
        description: "Please try again or email us directly.",
      });
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.trim()) return;
    subscribeMutation.mutate({ email: email.trim(), source: "newsletter_page" });
  };

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="The Ashflex Newsletter"
        description="Design insights, growth strategies, and early access — delivered straight to your inbox."
        breadcrumb={[{ label: "Newsletter" }]}
      />

      {/* Hero signup band */}
      <section className="relative py-16 lg:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#071B5A] via-[#0F172A] to-[#2563EB]/30" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-accent/20 blur-3xl" aria-hidden="true" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-brand-secondary/20 blur-3xl" aria-hidden="true" />
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-sm mb-6">
              <Mail size={14} className="text-brand-accent" />
              Join 500+ businesses & designers
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Turn your inbox into a design studio
            </h1>
            <p className="text-white/70 text-base lg:text-lg mb-8">
              Every edition packs actionable web design and digital marketing knowledge
              from the Ashflex team — no fluff, no spam, just value.
            </p>

            <div className="glass-card bg-white/10 border border-white/20 rounded-2xl p-6 lg:p-8 overflow-hidden min-h-[320px] flex items-center justify-center">
            <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -8 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                className="text-center w-full"
              >
                <motion.div
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                >
                  <CheckCircle2 size={40} className="text-brand-accent mx-auto mb-3" />
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-2">You're on the list!</h3>
                <p className="text-white/70 text-sm mb-5">
                  Check your inbox for a welcome note. In the meantime, explore our portfolio
                  and see how we bring Nigerian brands online.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button asChild className="bg-gradient-primary hover:opacity-90 text-white">
                    <Link href="/portfolio">
                      View Our Work <ArrowRight size={15} />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10">
                    <Link href="/services">Explore Services</Link>
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0, scale: 0.95, y: -12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 8 }}
                transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                onSubmit={handleSubmit}
                className="text-left w-full"
                aria-label="Newsletter signup"
              >
                <label htmlFor="newsletter-email" className="block text-sm font-medium text-white/90 mb-2">
                  Your email address
                </label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@business.com"
                    required
                    className="flex-1 bg-white/90 h-12"
                  />
                  <Button
                    type="submit"
                    disabled={subscribeMutation.isPending}
                    className="h-12 px-8 bg-gradient-primary hover:opacity-90 text-white shrink-0"
                  >
                    {subscribeMutation.isPending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/60 border-t-white rounded-full animate-spin" />
                        Joining…
                      </>
                    ) : (
                      <>
                        Subscribe Free <ArrowRight size={16} />
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-white/50 text-xs mt-3">
                  Free forever. Unsubscribe anytime with one click. We respect your inbox.
                </p>
              </motion.form>
            )}
            </AnimatePresence>
          </div>
          </div>
        </div>
      </section>

      {/* Benefits grid */}
      <section className="py-16 lg:py-20 bg-muted/40">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              What you'll get
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A curated mix of design expertise and business strategy from across our projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="reveal-on-scroll glass-card border-0 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-secondary/10 transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <benefit.icon size={20} className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-1.5" style={{ fontFamily: "var(--font-heading)" }}>
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-16 lg:py-20">
        <div className="container">
          <div className="glass-card border-0 rounded-3xl bg-gradient-to-br from-[#071B5A] to-[#2563EB] p-8 lg:p-12 text-white">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                  What to expect in every edition
                </h2>
                <p className="text-white/75 mb-8">
                  Short, practical emails built from the questions our clients ask us every week —
                  so you learn from real projects, not theory.
                </p>
                <ul className="space-y-4">
                  {whatToExpect.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <span className="w-9 h-9 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                        <item.icon size={17} className="text-brand-accent" />
                      </span>
                      <span className="text-white/90">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="glass-card bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
                  <Mail size={44} className="text-brand-accent mx-auto mb-4" />
                  <p className="text-white/90 font-semibold text-lg mb-2">Join the list today</p>
                  <p className="text-white/65 text-sm mb-6">
                    One click to subscribe. Takes less than ten seconds.
                  </p>
                  <Button asChild size="lg" className="bg-white text-[#071B5A] hover:bg-white/90 font-semibold">
                    <a href="#newsletter-email">
                      Scroll up to subscribe <ArrowRight size={16} />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
