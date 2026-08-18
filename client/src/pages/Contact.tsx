import { useState } from "react";
import { Link } from "wouter";
import { trpc } from "@/lib/trpc";
import { ArrowRight, Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import { buildWhatsAppHrefStatic } from "@/components/WhatsAppButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { siteContact } from "@shared/siteContact";
import { buildMailtoLink } from "@/lib/mailto";

const contactFaqs = [
  { q: "How much does a website cost?", a: "Website costs vary based on complexity, pages, and features. Basic sites start around \u20A6150,000, while custom business solutions range from \u20A6500,000 to \u20A65M+. Use our free Website Cost Calculator for an instant estimate." },
  { q: "How long does it take to build a website?", a: "Most projects are completed within 2-6 weeks depending on complexity. Simple landing pages can be live in 1-2 weeks, while custom e-commerce platforms typically take 4-8 weeks." },
  { q: "Do you offer ongoing support?", a: "Yes! All our packages include post-launch support, and we offer monthly maintenance plans for updates, security, backups, and performance optimization." },
  { q: "Can you redesign my existing website?", a: "Absolutely. We regularly help businesses modernize outdated websites. We'll audit your current site, identify improvement areas, and rebuild it with modern design and technology." },
  { q: "How do I get started?", a: "Simply fill out the contact form, send us a WhatsApp message, or book a free consultation call. We'll discuss your project, provide a quote, and outline next steps." },
];

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const searchParams = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const rawService = searchParams.get("service") || "";
  // Map page/source slugs to the contact form's service select options
  const serviceOptionMap: Record<string, string> = {
    "website-design": "web-design",
    "website-development": "development",
    "wordpress-development": "wordpress",
    "ecommerce-development": "ecommerce",
    "seo-services": "seo",
    "branding-logo-design": "branding",
    "social-media-marketing": "marketing",
    "website-maintenance": "maintenance",
  };
  const prefilledService = rawService
    ? serviceOptionMap[rawService] || (rawService === "pricing" ? "other" : rawService)
    : "";
  const prefilledMessage = searchParams.get("message") || "";
  const [fieldHighlight, setFieldHighlight] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: prefilledService,
    message: prefilledMessage,
  });

  const submitMutation = trpc.contact.submit.useMutation({
    onSuccess: (_data, variables) => {
      setSubmitted(true);
      toast.success("Message recorded! Opening your email app to send it to our inbox…");

      // Mailto fallback: route the inquiry to info@ashflexwebdesign.com by opening
      // the visitor's own email client with the message pre-filled. Submissions are
      // also stored in the site database, so no lead is lost even if no mail app
      // is configured (the visitor can email info@ashflexwebdesign.com directly).
      const link = buildMailtoLink({
        fullName: variables.fullName,
        email: variables.email,
        phone: variables.phone || undefined,
        context: variables.service || undefined,
        message: variables.message,
      });
      window.location.href = link;
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again or reach us by phone.");
    },
  });

  // Draw attention to the pre-filled fields with a brief highlight pulse on load
  if (prefilledMessage && typeof window !== "undefined" && !fieldHighlight) {
    setFieldHighlight(true);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    submitMutation.mutate({
      fullName: form.name,
      email: form.email,
      phone: form.phone,
      service: form.service,
      message: form.message,
    });
  };

  return (
    <div ref={sectionRef}>
      <PageHeader
        title="Get in Touch"
        description="Ready to start your project? Have questions? We'd love to hear from you. Reach out and let's discuss how we can help your business grow."
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
      />

      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 scroll-reveal">
              <div className="space-y-6">
                <Card className="glass-card border-0 p-6">
                  <CardContent className="p-0">
                    <h3 className="text-lg font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>Contact Information</h3>
                    <div className="space-y-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Phone size={18} className="text-brand-secondary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Phone</p>
                          <a href={siteContact.phoneHref} className="text-sm text-muted-foreground hover:text-brand-secondary transition-colors">
                            {siteContact.phoneDisplay}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Mail size={18} className="text-brand-secondary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Email</p>
                          <a href={`mailto:${siteContact.email}`} className="text-sm text-muted-foreground hover:text-brand-secondary transition-colors break-all">
                            {siteContact.email}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                          <MapPin size={18} className="text-brand-secondary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Office</p>
                          <p className="text-sm text-muted-foreground">Lagos, Nigeria</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-brand-secondary/10 flex items-center justify-center flex-shrink-0">
                          <Clock size={18} className="text-brand-secondary" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">Office Hours</p>
                          <p className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                          <p className="text-sm text-muted-foreground">Sat: 10:00 AM - 2:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <a href={buildWhatsAppHrefStatic()} target="_blank" rel="noopener noreferrer">
                  <Card className="glass-card border-0 p-6 hover-lift cursor-pointer border-brand-secondary/20">
                    <CardContent className="p-0 flex items-center gap-4">
                      <MessageSquare size={24} className="text-green-500" />
                      <div>
                        <p className="text-sm font-semibold">Chat on WhatsApp</p>
                        <p className="text-xs text-muted-foreground">Get instant response</p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 scroll-reveal" style={{ transitionDelay: "100ms" }}>
              {submitted ? (
                <Card className="glass-card border-0 p-12 text-center">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 rounded-full bg-brand-success/10 flex items-center justify-center mx-auto mb-6">
                      <ArrowRight size={32} className="text-brand-success" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Message Recorded!</h3>
                    <p className="text-muted-foreground mb-2">
                      Your enquiry has been saved, and your email app has been opened so the
                      message reaches <a href={`mailto:${siteContact.email}`} className="text-brand-secondary font-medium hover:underline">{siteContact.email}</a> directly.
                    </p>
                    <p className="text-muted-foreground mb-6">
                      If the email didn't open automatically, you can send it manually using the
                      link above. We'll get back to you within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="glass-card border-0 p-8">
                  <CardContent className="p-0">
                    <h3 className="text-xl font-semibold mb-6" style={{ fontFamily: "var(--font-heading)" }}>Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Full Name *</label>
                          <input
                            type="text"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="John Doe"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                            required
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Email *</label>
                          <input
                            type="email"
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="john@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                            required
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Phone Number</label>
                          <input
                            type="tel"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            placeholder="0802 313 8892"
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-1.5 block">Service Interested In</label>
                          <select
                            value={form.service}
                            onChange={(e) => setForm({ ...form, service: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all"
                          >
                            <option value="">Select a service</option>
                            <option value="web-design">Web Design</option>
                            <option value="development">Web Development</option>
                            <option value="wordpress">WordPress</option>
                            <option value="ecommerce">E-commerce</option>
                            <option value="seo">SEO</option>
                            <option value="branding">Branding</option>
                            <option value="marketing">Digital Marketing</option>
                            <option value="maintenance">Maintenance</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-1.5 block">Message *</label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell us about your project, goals, and budget..."
                          rows={5}
                          className={`w-full px-4 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-brand-secondary/50 focus:border-brand-secondary transition-all resize-none ${
                            fieldHighlight ? "prefill-highlight" : "border-border"
                          }`}
                          onAnimationEnd={() => setFieldHighlight(false)}
                          required
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={submitMutation.isPending}
                        className="w-full px-6 py-3.5 rounded-xl bg-gradient-primary text-white font-semibold hover:shadow-lg hover:shadow-brand-secondary/25 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitMutation.isPending ? (
                          <>
                            <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <ArrowRight size={18} />
                          </>
                        )}
                      </button>
                      <p className="text-xs text-muted-foreground text-center">
                        Your submission is stored securely, and your email app will open with the
                        message addressed to {siteContact.email} so it lands straight in our inbox.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-10 scroll-reveal">
            <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions about working with us.</p>
          </div>
          <div className="scroll-reveal">
            <Card className="glass-card border-0 p-8">
              <CardContent className="p-0">
                <Accordion type="single" collapsible className="w-full">
                  {contactFaqs.map((faq, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left font-medium">{faq.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="text-center mt-6">
                  <Link href="/faq">
                    <span className="text-brand-secondary font-medium hover:underline">View all FAQs →</span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0">
        <div className="w-full h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126815.56091089734!2d3.285717685832429!3d6.524379024856516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ashflex Office Location"
          />
        </div>
      </section>
    </div>
  );
}
