# Animated Flow Connectors Task State (2026-08-12, updated)

## Task
User asked to animate the connecting lines so they fill with color as the user scrolls down the page.

## Implementation (complete and verified in screenshots)
Home.tsx How We Work section (client/src/pages/Home.tsx):
- Row 1 (steps 01-04, 4-col grid): cells i<3 have .flow-line div (absolute top-12 h-px, left calc(50% + 2rem), gradient blue->cyan oklch, opacity 0.55, width calc(100% - 4rem), initial transform scaleX(0), origin left center, 1.2s cubic-bezier(0.23,1,0.32,1) transition, stagger delay (i+1)*260ms).
- Between rows: SVG .flow-curve (w-full h-10, viewBox 0 0 100 40, preserveAspectRatio none). Paths: M 100 0 C 100 20 0 20 0 40 (gradient 06B6D4->3B82F6) and M 0 34 L 0 40 L 6 40 (blue arrow) — both pathLength=100 strokeDasharray=100 strokeDashoffset=100 class flow-curve-path; arrow has 0.55s delay.
- Row 2 (steps 05-07, 3-col grid): cells i<2 have .flow-line same as row 1 (rotate removed), delay (i+5)*260ms.

index.css additions (in the reduced-motion-safe block after .scroll-reveal-right.visible):
.flow-line.visible { transform: scaleX(1) !important; }
.flow-curve.visible .flow-curve-path { stroke-dashoffset: 0; transition: stroke-dashoffset 1.6s cubic-bezier(0.23, 1, 0.32, 1); }
.flow-curve .flow-curve-path { transition: stroke-dashoffset 1.6s cubic-bezier(0.23, 1, 0.32, 1); }

useScrollReveal hook (client/src/hooks/useScrollReveal.ts): now also observes ".flow-line, .flow-curve" so IntersectionObserver adds .visible when the section enters view.

## Verification results
- Full-page screenshot at 1440 viewport: all flow lines render correctly — row1 lines between 01-04, S-curve from 04 down to 05, row2 lines between 05-07. Browser console clean. TypeScript zero errors, 24 tests passing (5 files).
- Screenshot tool freezes animations, so static captures show final filled state (correct end state).

## Design decision
Using scroll-reveal (enter-viewport) staggered fill animation rather than continuous scroll-position tracking: it is the site-wide established pattern (scroll-reveal/counter hooks), robust across the screenshot/dev tooling, and respects prefers-reduced-motion via the animation block placement. Continuous scroll-linked progress would add fragility for marginal benefit; the staggered fill still reads as lines filling up as the user scrolls into the section.

## Remaining steps
- Save checkpoint (last publish: c048f9c7 = static connectors). New checkpoint to publish animated connectors.
- Deliver result message with checkpoint attachment manus-webdev://<new_version>.
