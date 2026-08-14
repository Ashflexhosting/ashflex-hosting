# Service Detail Pages Redesign — Task Notes

## User request
Redesign each service detail page (ServiceDetail.tsx) with the new creative modern design language.
CONSTRAINTS: do NOT touch the banner (PageHeader at top) and do NOT touch the pricing card (glass-card sticky sidebar in the intro section).

## Current structure of client/src/pages/ServiceDetail.tsx (277 lines)
- Line 1-22: imports, slug lookup, 404 fallback
- Line 24-30: PageHeader banner (KEEP AS IS)
- Line 32-104: intro section. Left col (lg:col-span-2) = "X Solutions" heading (line 36), intro paragraph (39), "What's Included" grid (44-51), "Our Process" numbered steps (53-66). Right col (lg:col-span-1) = pricing card (70-100) KEEP AS IS.
  - What's included grid: lines 44-51. Process: lines 53-66.
- Line 106-239: hosting-tier section (service.slug === "hosting-domain") — KEEP (pricing-related, keep unchanged)
- Line 241-259: Related Services section (redesign ok)
- Line 261-274: CTA band (redesign ok)

## New design language (from About/Services pages)
- Dark navy sections: bg-gradient-brand or `bg-[#0F172A]/` dark glass cards with `glass-card border-0`
- CSS utilities available in client/src/index.css:
  - `.bento-reveal` + `.visible` (scroll-triggered slide/fade, needs useScrollReveal which is already wired)
  - `.hover-lift` (lift + shadow)
  - `.highlight-card` (hover scale + glow shadow, cursor pointer)
  - `.glow-orb` (absolute blurred orb)
  - `.animate-pulse-glow`
  - `bg-gradient-brand text-white` gradient band; `text-brand-secondary` blue, `text-brand-accent` cyan, `--font-heading` Poppins
- Marquee strip, bento grids (md:grid-cols-2, lg:grid-cols-4), monospace index chips, gradient icon tiles (rounded-xl with gradient bg + white icon)

## Redesign plan (keeping banner + pricing card intact)
1. Intro section left column: dark editorial treatment — dark navy background for whole section OR keep light bg but make cards dark glass; add bento-style "What's Included" cards (dark glass, gradient icon tile, scroll-reveal stagger), and vertical process timeline with gradient connector line + dark glass step cards.
2. Keep pricing card untouched (glass-card, sticky).
3. Hosting tiers section: leave unchanged.
4. Related Services: dark editorial band with hover-lift dark glass cards.
5. CTA band: add glow orbs + gradient headline (like Services page CTA band).

## Data shape
services[]: { slug, title, description, features: string[4], price } (15 services now, API integration removed)
getServiceBySlug(slug) returns one service.
servicePricingImages[slug] used inside pricing card (KEEP).

## Verify step
- Screenshot several slugs: /services/website-design, /services/hosting-domain, /services/seo-services
- pnpm test (29 tests passing previously), checkpoint + auto-publish enabled
