# Site-wide CTA polish — state notes (Aug 18)

## Task
- Apply shine-sweep hover to all primary CTAs (hero Get Free Quote etc.)
- Parallax scroll on welcome glow orbs (id="welcome" section)
- "Read Our Story" anchor link below welcome intro -> /about

## Done
- Created `client/src/components/ShineButton.tsx`: reusable CTA with shine sweep, lift, ring glow, arrow slide/rotate. Props: href, arrow (default true), variant ("primary" | "dark"), children, className. Exports `ShineButton`.

## Where the shine is already applied
- Home.tsx welcome Get Started button (line ~689-698) — inline markup, same pattern as ShineButton.

## Pending
1. Home.tsx hero "Get Free Quote" (line ~463-468): currently inline Link/span with bg-gradient-primary rounded-2xl, ArrowRight. Replace span with ShineButton href="/contact"? Hero button is flex-1 w-full justify-center — ShineButton is inline-flex rounded-full; OK to use (button shape already pill-ish).
2. Welcome orbs parallax: section id="welcome" (line 582), orbs at line 585-586. Add useWindowScroll via framer-motion useScroll/useTransform (framer-motion installed), translateY small amounts. Add a subtle hook inline (const { scrollYProgress } = useScroll(); const y1 = useTransform(scrollYProgress, [0, 0.5], [0, 40]); const y2 = useTransform(scrollYProgress, [0, 0.5], [0, -50]);) on the two orb divs inside the welcome section absolute inset-0 div. Scope: only welcome section orbs to keep it subtle.
3. "Read Our Story" link: below the welcome intro paragraph (after paragraph at line 677-679 "From corporate websites...") and before/around the chips row or after Get Started button. Simple Link href="/about" with arrow-right icon, underline style.
4. Optional other visible primary CTAs to consider (footer, StickyCTA, Navbar quote button) — keep scope to hero Get Free Quote for safety; mention others were unchanged.
5. Run pnpm test (39 tests), screenshot / and /about, checkpoint.

## Other context
- Home.tsx line 582: <section id="welcome" ... bg-[#E8E9EC] >
- framer-motion import already present in Home.tsx (TiltEffect etc. used; grep showed framer-motion available).
- Tests currently 39/39. Auto-publish enabled.
