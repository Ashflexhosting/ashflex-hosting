import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";
import { Link } from "wouter";

/**
 * ShineButton — a primary CTA with the signature shine-sweep hover animation:
 * lift, soft brand ring glow, and a skewed white sheen sweeping across the pill.
 *
 * Usage:
 *   <ShineButton href="/contact">Get Free Quote</ShineButton>
 *   <ShineButton href="/contact" arrow>Get Started</ShineButton>
 *   <ShineButton href="/contact" variant="dark">Book a Call</ShineButton>
 */
export function ShineButton({
  href,
  children,
  arrow = true,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  arrow?: boolean;
  variant?: "primary" | "dark";
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold uppercase tracking-wider shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl active:scale-[0.97]";

  const variants = {
    primary:
      "bg-gradient-primary text-white shadow-brand-secondary/25 hover:shadow-brand-secondary/40 hover:ring-2 hover:ring-brand-secondary/30",
    dark:
      "bg-brand text-white shadow-brand/25 hover:shadow-brand/40 hover:ring-2 hover:ring-white/25",
  } as const;

  return (
    <Link href={href} className={className}>
      <span className={`${base} ${variants[variant]}`}>
        <span
          aria-hidden="true"
          className="absolute inset-y-0 -left-1/4 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-500 ease-out group-hover:left-[120%] group-hover:opacity-100"
        />
        <span className="relative">{children}</span>
        {arrow && (
          <ArrowUpRight
            size={16}
            className="relative -translate-x-0.5 transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-1 group-hover:rotate-12"
          />
        )}
      </span>
    </Link>
  );
}
