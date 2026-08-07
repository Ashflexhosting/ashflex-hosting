import { Link } from "wouter";
import { usePageMeta } from "@/hooks/usePageMeta";

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHeader({ title, description, breadcrumb }: PageHeaderProps) {
  usePageMeta({ title, description });

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-brand">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {breadcrumb && (
          <nav className="flex items-center gap-2 text-sm mb-6">
            <Link href="/" className="text-white/50 hover:text-white transition-colors">Home</Link>
            {breadcrumb.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="text-white/30">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="text-white/50 hover:text-white transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-white/80">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
          {title}
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-2xl">
          {description}
        </p>
      </div>
    </section>
  );
}
