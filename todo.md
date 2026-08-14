# Ashflex Web Design Agency - TODO

## Design System & Global Setup
- [x] Google Fonts (Poppins + Inter) in index.html
- [x] Design system CSS variables in index.css (Primary #0F172A, Secondary #2563EB, Accent #06B6D4)
- [x] Glass-effect card component
- [x] Scroll-reveal animation utility
- [x] Global navigation component (responsive, sticky)
- [x] Footer component
- [x] Floating WhatsApp button
- [x] Sticky CTA bar

## Homepage
- [x] Hero section (headline, CTA buttons, trust stats: 250+ projects, 98% satisfaction, 10+ years)
- [x] Trusted By / Logos section
- [x] Services overview grid
- [x] Why Choose Ashflex section
- [x] 7-step Process section
- [x] Portfolio highlights preview
- [x] Testimonials carousel
- [x] Pricing snapshot
- [x] FAQ accordion (10-15 questions)
- [x] Final CTA section

## About Us
- [x] About page with Our Story, Mission, Vision, Core Values
- [x] Meet the Team section
- [x] Company Statistics
- [x] Why Clients Trust Us

## Services (16 individual pages)
- [x] Services overview landing page
- [x] Website Design page
- [x] Website Development page
- [x] WordPress Development page
- [x] E-commerce Development page
- [x] UI/UX Design page
- [x] Branding & Logo Design page
- [x] SEO Services page
- [x] Google Ads page
- [x] Social Media Marketing page
- [x] Content Writing page
- [x] Website Maintenance page
- [x] Website Speed Optimization page
- [x] Hosting & Domain page
- [x] API Integration page
- [x] AI Automation page
- [x] Custom Business Systems page

## Portfolio
- [x] Portfolio page with category filters (Corporate, Real Estate, Healthcare, Schools, NGOs, E-commerce, Travel, Law Firms, Hospitality)
- [x] Individual project detail view (challenge, solution, technologies, results, screenshots, CTA)

## Industries (11 pages)
- [x] Industries overview page
- [x] Healthcare industry page
- [x] Education industry page
- [x] Construction industry page
- [x] Manufacturing industry page
- [x] NGOs industry page
- [x] Logistics industry page
- [x] Travel industry page
- [x] Finance industry page
- [x] Real Estate industry page
- [x] Government industry page
- [x] Professional Services industry page

## Pricing
- [x] Pricing page with packages: Starter, Business, Professional, Enterprise, Custom Quote
- [x] Feature comparison table

## Case Studies
- [x] Case studies listing page
- [x] Individual case study pages (client goal, process, before/after, results, ROI)

## Blog
- [x] Blog listing page with category filtering
- [x] Individual blog post pages

## Resources
- [x] Resources overview page
- [x] Website Audit tool
- [x] Website Cost Calculator
- [x] SEO Checklist
- [x] Branding Guide
- [x] Digital Marketing Guide

## Contact
- [x] Contact page with form, WhatsApp, Google Maps, Office Hours, FAQ

## Client Portal (Authenticated)
- [x] Client portal layout with sidebar navigation
- [x] Dashboard overview
- [x] Project progress tracking
- [x] Invoices section
- [x] Downloads section
- [x] Support tickets
- [x] Meetings scheduler
- [x] Contracts
- [x] File uploads
- [x] Payments section

## SEO & Integrations
- [x] Meta tags and SEO structure
- [x] SEO landing pages (Website Design Lagos, Web Design Nigeria, etc.)
- [x] Google Analytics integration
- [x] Newsletter signup

## Animations & Polish
- [x] Scroll-reveal animations on all key sections
- [x] Counter animations for statistics
- [x] Hover lift effects on cards
- [x] Smooth page transitions
- [x] Loading states
## Remaining Gaps to Fix
- [x] Fix SEO landing page routing (routes without slug param, SEOLanding uses useParams)
- [x] Add FAQ section to contact page
- [x] Add screenshots gallery to portfolio detail
- [x] Build individual case study detail pages
- [x] Build SEO Checklist, Branding Guide, Digital Marketing Guide resource pages
- [x] Add page meta tags / SEO structure (usePageMeta hook + index.html structured data)
## Image Replacement (user request)
- [x] Audit all current placeholder image URLs across pages
- [x] Generate team photos (4 team members, professional portraits)
- [x] Generate portfolio screenshots/mockups (9 portfolio projects, realistic website mockups)
- [x] Generate images via media tools and reference via /manus-storage URLs
- [x] Update About page team section
- [x] Update Portfolio data and PortfolioDetail screenshots
- [x] Update homepage portfolio preview images
- [x] Verify visuals (screenshots: About, Portfolio, Blog, Case Studies, Home)
- [x] Generate blog cover images (9 posts) and update Blog/BlogPost
- [x] Update case study images (CaseStudies, CaseStudyDetail) to match portfolio mockups
- [x] Remove all unsplash references from codebase
- [x] TypeScript check and tests pass
- [x] Save checkpoint after image replacement

## Homepage Hero Background Refresh (user request)
- [x] Generate a custom dark-navy hero background image with a text-safe focal composition
- [x] Integrate the new hero image with a contrast overlay and responsive behavior
- [x] Verify the homepage hero with desktop screenshot, TypeScript check, and unit tests
- [x] Save and publish the hero background update checkpoint

## Duplicate Navigation Key Repair (user-reported)
- [x] Locate and fix the remaining duplicate `/contact` React key warning
- [x] Add a regression test for unique navigation keys
- [x] Verify the homepage console is clear after rendering the full footer navigation
- [x] Save and publish the duplicate-key repair checkpoint

## Footer Contact Details (user-provided)
- [x] Replace the placeholder footer phone number with corrected number 08023138892
- [x] Replace the placeholder footer email address with info@ashflexwebdesign.com
- [x] Verify the rendered footer details

## Footer Phone Number Correction (user-provided)
- [x] Correct the footer phone number and tap-to-call link to 08023138892
- [x] Save and publish the validated footer contact-details update

## Official Brand Logo Integration (user-provided)
- [x] Upload the supplied Ashflex Website Design logo as a managed web asset
- [x] Replace navigation and footer text marks with the official responsive logo
- [x] Update favicon and social-sharing metadata to use the official logo
- [x] Verify logo rendering in desktop navigation/footer and mobile navigation
- [x] Save and publish the official logo integration update

## Logo and Brand Palette Refresh (user-provided)
- [x] Upload the newly supplied Ashflex logo as the official web asset
- [x] Replace navigation, footer, favicon, and social logo references
- [x] Refresh global palette tokens to use the logo-inspired blue, red, white, and aqua colors
- [x] Verify key pages for accessible contrast on desktop and mobile
- [x] Save and publish the refreshed logo and palette update

## Three Brand Continuity Improvements (user-requested)
- [x] Replace Contact-page placeholder phone details with 08023138892 and its tap-to-call link
- [x] Replace Contact-page placeholder email with info@ashflexwebdesign.com and its mail link
- [x] Create and upload a square Ashflex icon-only mark for favicon and social use
- [x] Update favicon and social-sharing metadata to the square icon
- [x] Refresh portfolio mockup framing with the blue, red, white, and aqua palette
- [x] Verify all three improvements on desktop and mobile
- [x] Verify the square icon is referenced by favicon, Open Graph, and Twitter metadata
- [x] Restore accessible navigation contrast over dark hero and page-header backgrounds
- [x] Save and publish the three branding improvements update

## Verified Portfolio Content Refresh (user-requested)
- [x] Review https://ashflexwebdesign.com/projects for approved descriptions and confirm quantified success metrics are not published there
- [x] Confirm and save the approved project mapping in portfolio cards and detail pages
- [x] Confirm placeholder success metrics are replaced with transparent public-status text where metrics are unavailable
- [x] Update PortfolioDetail with verified client websites and an official-source note
- [x] Run TypeScript/tests and visually verify the refreshed portfolio pages
- [x] Verify refreshed portfolio pages on list and detail views
- [x] Save and publish the verified portfolio-content refresh

## Portfolio Industry and Service Filtering (user-requested)
- [x] Review existing portfolio fields and filter controls for industry and service coverage
- [x] Add accessible industry and service-type filter controls with a clear all-projects reset
- [x] Implement combined filtering and an informative empty state
- [x] Add regression coverage for filter options and combined filter behavior
- [x] Verify the filtering experience on desktop and mobile, with clean automated and runtime checks
- [x] Save and publish the portfolio filtering enhancement

## 1200px Site Layout Width (user-requested)
- [x] Reduce the site's content layout width to 1200px and verify key pages

## Contact Form Wiring (user-requested)
- [x] Create a contact_submissions database table and query helpers
- [x] Build the backend submission procedure with validation
- [x] Send owner notifications of each submission so they land in info@ashflexwebdesign.com
- [x] Show visitors a clear confirmation after submitting
- [x] Add Vitest coverage for submission validation and persistence
- [x] Verify the full flow end-to-end and publish

## Admin Submissions Dashboard (user-requested)
- [x] Add admin-only tRPC procedures for listing submissions and updating status
- [x] Review the ClientPortal structure and add the Submissions tab with role gating
- [x] Add Vitest coverage for admin access control and status updates
- [x] Verify the dashboard end-to-end and publish

## Homepage Process Duplication Fix (user-requested)
- [x] Remove duplicated second row of process steps (05, 06, 07) from the How We Work section
- [x] Verify homepage renders steps 01-07 once each and publish

## Client Portal 404 Fix (user-reported)
- [x] Diagnose 404: Navbar links to /client-portal but route is registered at /portal
- [x] Redirect /client-portal to /portal so all nav links work
- [x] Verify portal loads and publish

## How We Work Row Expansion (user-requested)
- [x] Re-add steps 05-07 as a second row sized to span the full grid width (3 cards across the 4-column track)

## Process Flow Connectors (user-requested)
- [x] Add connecting visual lines between process steps 01-07 to emphasize continuous flow
- [x] Verify connectors render across desktop and mobile and publish

## Animated Flow Connectors (user-requested)
- [x] Animate the connecting lines to fill with color progressively as the user scrolls
- [x] Verify the animation on desktop and publish

## Automatic GitHub Sync (user-requested)
- [x] Set up automatic pushes to Ashflexhosting/ashflex-hosting after every checkpoint (post-commit hook + github remote with token auth, tested with an empty commit)

## GitHub Pages Mirror (user-requested)
- [x] Add a GitHub Actions workflow that builds the Vite static site and publishes to GitHub Pages on every push to main
- [x] Handle API/backend limitations for the static mirror (static-friendly fallbacks for contact portal features)
- [x] Verify the workflow runs and the mirror site renders; push to GitHub
- [x] Fix mirrored-site asset paths: build mirror with base=/ashflex-hosting/ so JS/CSS resolve correctly
- [x] Rewrite hard-coded /manus-storage/ refs for the mirror build so favicon/logo load on GitHub Pages
- [x] Verify the live mirror at https://ashflexhosting.github.io/ashflex-hosting/ (boot + SPA routes) — mirror boots, deep links render, assets HTTP 200, canonical site unaffected

## Layout Width Regression (user-reported)
- [x] Diagnose why the 1200px site width is not showing on the live site (Tailwind's default .container utility at 1536px was winning the cascade over the custom @layer components rule)
- [x] Enforce 1200px max-width on the global container by moving the override into @layer utilities; verified .container computes 1200px in browser and pages render within 1200px

## Top Utility Bar (user-requested)
- [x] Create a slim top utility bar above the main navigation (dark navy, Blog/Resources/Client Portal left, phone + email right)
- [x] Move Blog, Resources, and Client Portal links from the main nav into the top bar
- [x] Keep main nav focused on core pages (Home, About, Services, Portfolio, Industries, Pricing, Case Studies)
- [x] Make top bar responsive (hidden on mobile; links appear in a grouped "More" section in the mobile menu) and verified desktop + mobile
- [x] Checkpoint and publish (auto-publish)

## Menu Links Not Working (user-reported)
- [x] Diagnose why top-bar and main nav links fail to navigate (custom raw-location hook for the GitHub mirror broke wouter Link updates — URL changed but routes didn't re-render)
- [x] Fix navigation by replacing the custom hook with wouter's native <Router base={...}> handling (works for both root and mirror deployments)
- [x] Verify clicking all top-bar and nav links navigates correctly (click-through test of 10 routes on dev + live)
- [x] Checkpoint and publish (auto-publish)

## Favicon Size Increase (user-requested)
- [x] Crop the icon mark to its content and rebuild the icon so the glyph fills ~92% of each tile (bigger on screen)
- [x] Export a full favicon set: multi-density ICO (16/32/48/64), 192px, 512px PNG, and 180px apple-touch-icon
- [x] Register the icon set in index.html and update og:image/twitter:image to the 512px icon
- [x] Checkpoint and publish

## WhatsApp Number Fix (user-requested)
- [x] Update WhatsAppButton to use real number 08023138892 (2348023138892)
- [x] Update all other placeholder phone occurrences (wa.me link on Home, tel link in StickyCTA)
- [x] Checkpoint and publish

## Careers Page (user-requested)
- [x] Create /careers page with hero, 5 open roles with requirements, culture section, and CTA banner
- [x] Add an application form (role selector, name, email, portfolio/LinkedIn, message) stored in a new jobApplications table with admin management procedures and owner notifications
- [x] Register the route and update footer "Careers" link (now /careers)
- [x] Verify on desktop, run tests (24 passed), checkpoint and publish (auto-publish)

## Homepage Redesign (user-requested: modern & creative)
- [x] Audit the current Home.tsx structure and preserve all content (copy, stats, sections, CTAs)
- [x] Redesign hero: modern asymmetric layout with bolder typography, creative motion, and floating UI elements (kinetic gradient/outline headline, floating browser mockup, metric cards, phone card, glow orbs, noise texture)
- [x] Redesign mid-page sections: marquee service ticker, bento services grid with featured card + CTA tile, offset dark why-choose-us band, numbered process timeline with flow connectors, portfolio numbered rows with hover image peek, industries tile strip, carousel testimonials, rebalanced pricing
- [x] Add creative touches: scroll-driven motion, glass/neon accents, marquee/animated elements with prefers-reduced-motion guard
- [x] Visual verification on desktop and mobile, run tests (24 passed), checkpoint and publish (auto-publish)

## Hero Overflow on Laptop (user-reported)
- [x] Diagnose hero overflow: floating mockups/metric cards exceeded the fold on 768-900px laptop heights (measured via live DOM geometry)
- [x] Fix hero so all content fits within common laptop viewport heights (cap hero max height, compact vertical spacing, resize/reposition mockup cards, hide phone card below xl, smaller mobile subhead)
- [x] Verify at 1280x800, 1366x768, 1440x900, and 375x812; tests pass (24/24)
- [x] Save checkpoint (e169ca01) and confirm the auto-published version — live bundle index-DOyNxIxQ.js contains max-h-[900px] + min-h-screen hero classes, deployment verified

## Hero Headline Reference Match (user request: hero.webp)
- [x] Rework headline so "We craft websites" flows inline on the first line, then "that turn clicks into" and "customers." wrap naturally like the reference
- [x] Tune font scale/breakpoints so headline keeps the compact, bold look at laptop widths
- [x] Verify against reference on desktop, checkpoint and publish

## Animated Stat Counters (user-requested)
- [x] Add scroll-triggered count-up animation to homepage Trusted By stats (250+, 98%, 10+, 15+)
- [x] Respect prefers-reduced-motion (fall back to static values)
- [x] Verify animation on desktop and mobile, run tests, checkpoint and publish

## Remove Portfolio Filter (user-requested)
- [x] Remove category filter buttons from the portfolio page and show all projects directly

## Portfolio Live-Site Screenshots (user-requested)
- [x] Collect live website URL for each of the 9 portfolio projects
- [x] Capture desktop screenshots of each live project site
- [x] Upload screenshots as static assets and update portfolio image fields
- [x] Also update CaseStudies and CaseStudyDetail images to the same live screenshots
- [x] Verify portfolio cards show real screenshots, run tests (24/24), checkpoint and publish

## Three Portfolio & Social Improvements (user-requested)
- [x] Capture 2 inner-page screenshots per portfolio project from live sites (18 total)
- [x] Upload inner-page screenshots and add them to the portfolio data ([live, inner-1, inner-2] per project)
- [x] Extend PortfolioDetail gallery to a 3-column grid with click-to-open lightbox (prev/next, keyboard nav, counter)
- [x] Add "Live site" external badge linking each portfolio card to the client website (opens in new tab, does not hijack card click)
- [x] Found official Ashflex social links (Facebook, X/Twitter, Instagram) from ashflexwebdesign.com footer
- [x] Add social icons to footer (brand column) and top utility bar (desktop)
- [x] Verify rendering, run tests (24/24), checkpoint and publish

## Screenshot Captions (user-requested)
- [x] Add descriptive caption field to each portfolio screenshot (e.g., "Homepage", "About page", "Services")
- [x] Show captions under gallery images on the portfolio detail page (also in the lightbox counter)
- [x] Verify, run tests (24/24), checkpoint and publish

## Hosting Price Update (user-requested)
- [x] Update hosting package price to start from ₦30,000/year (Hosting & Domain service card + FAQ answer)
- [x] Verify, run tests (24/24), checkpoint and publish

## Hero Line Break & Corner Label Fix (user-requested)
- [x] Wrap "customers." onto its own line in the hero headline (3 lines: "We craft websites" / "that turn clicks into" / "customers.")
- [x] Increase hero top padding (pt-32 / md:pt-44) so the rotated "Ashflex Studio · Lagos" corner label is fully visible
- [x] Verify on laptop/desktop and mobile (375px), run tests (24/24), checkpoint and publish

## Hosting Tier Breakdown (user-requested)
- [x] Define Starter/Professional/Business tier data with specific features, storage, email, bandwidth and pricing (₦30,000 / ₦60,000 / ₦120,000 per year) in hostingTiers (services.ts)
- [x] Add hosting tiers to services data and render a tier comparison section on the Hosting & Domain service detail page (Starter/Professional/Business cards, Most Popular badge, storage/bandwidth/email/domains specs)
- [x] Update related mentions: FAQ hosting answer lists the three tiers; Pricing page has no hosting mention; service description updated
- [x] Verify rendering on desktop (full-page), run tests (24/24), checkpoint and publish

## Three Follow-Up Improvements (user-requested, do all 3)
- [x] Add social icons (Facebook, X, Instagram) to the mobile menu's contact row (circular buttons above Get Free Quote)
- [x] Add captioned gallery lightbox to case study detail pages (mapped to portfolio project screenshots, 3-col grid, Esc/arrow-key nav)
- [x] Add hosting tier spec-comparison table (14 feature rows across Starter/Professional/Business) under the pricing cards
- [x] Verify rendering (hosting page, /case-studies/1, mobile 375px), run tests (24/24), checkpoint and publish

## Three Follow-Ups Round 2 (user-requested, do all 3)
- [x] Add "More projects like this" section to case study detail pages (2 related case studies with portfolio thumbnails, links to /case-studies/{id})
- [x] Wire hosting tier "Choose" buttons to WhatsApp (wa.me/2348023138892) with pre-filled message naming tier + price; kept contact-form alternative note
- [x] Write 3 SEO blog posts (ids 10/11/12: website cost guide, redesign signs, WordPress CMS) added to Blog.tsx + BlogPost.tsx, with full bodies, pricing-consistent numbers
- [x] Verify rendering (/blog shows 12 posts, /blog/10 renders, /case-studies/2 related section), TypeScript clean, tests 24/24, checkpoint and publish

## New Portfolio Projects: Afnaf, Marvel Attraction, Galcon (user-requested)
- [x] Superseded by the completed block "Three New Portfolio Projects" below (same scope, checkpoint f2b1edfe)
- [x] Visit afnaf.ca, marvelattraction.com, galconengineering.com and gather business/industry info
- [x] Capture live-site screenshots (homepage + 2 inner) for each of the 3 projects
- [x] Upload screenshots as static assets
- [x] Add 3 new entries to portfolio data with descriptions, metrics, and screenshots
- [x] Add corresponding case study entries/pages for the 3 projects
- [x] Verify rendering (portfolio, portfolio detail, case studies), run tests, checkpoint and publish

## Three New Portfolio Projects (user-requested)
- [x] Add Afnaf Auto Sales (https://afnaf.ca/) to portfolio with homepage, About, Trade-In screenshots
- [x] Add Marvel Tex Attraction (https://marvelattraction.com/) to portfolio with homepage, Empowerment Program, How It Works screenshots
- [x] Add Galcon Engineering (https://galconengineering.com/) to portfolio with homepage, About, Services screenshots
- [x] Add three new case study cards on /case-studies and detail pages /case-studies/7-9 with related-project links
- [x] Verify rendering (portfolio, case studies, detail pages) and run test suite
- [x] Fix testimonial section on homepage — comments not showing (user-reported): Card bg-card won cascade over glass-card-dark; replaced with plain div

## Contact Form Real Email Delivery (user-requested: wire up contact form for real sending)
- [x] Superseded by user's decision: mailto fallback wired up (see "Contact Form Mailto Wiring" block); Resend API key deferred until user provides it
- [x] Owner notification via Manus Notification Service already in place (contact + careers)
- [x] DB persistence for all submissions, admin reviewable in client portal
- [ ] Deferred: Resend email delivery (API key needed from user) + delivery status + email delivery vitest + live E2E test

## User-Provided Portfolio Screenshots (user-uploaded full-page captures, 7 projects)
- [x] Replace Kingwesl portfolio screenshots with the user's uploaded full-page capture (kingwesl.com)
- [x] Replace B.C. First Nations Auto Finance portfolio screenshots with the user's uploaded full-page capture
- [x] Replace Sam & Sara portfolio screenshots with the user's uploaded full-page capture
- [x] Replace Marvel Tex Attraction portfolio screenshots with the user's uploaded full-page capture
- [x] Replace 8 Radiance Empowerment (Eight Radiance NGO) portfolio screenshots with the user's uploaded full-page capture
- [x] Replace Neboc Hotel Suites & Events Centre portfolio screenshots with the user's uploaded full-page capture
- [x] Replace Barmest Nigeria Limited portfolio screenshots with the user's uploaded full-page capture
- [x] Upload 7 images to project storage and update portfolio data (card + gallery images)
- [x] Verify portfolio page rendering and run tests (24/24), checkpoint and publish (auto-publish)

## Scrollable Portfolio Screenshots (user-requested)
- [x] Portfolio card images: make full-page captures vertically scrollable (scroll-to-view-full-screenshot)
- [x] Portfolio detail gallery: scrollable full-page viewing in gallery tiles
- [x] Case study detail gallery: scrollable full-page viewing in gallery tiles
- [x] Verify desktop + mobile rendering, run tests, checkpoint and publish (auto-publish)
- [x] Increase portfolio card screenshot frame height by ~50% (h-60 -> h-90)
- [x] Auto-scroll the screenshot vertically while hovering the card (smooth loop through the full capture)
- [x] Fix nested anchor error on portfolio pages (Live site link inside clickable card Link)
- [x] Change portfolio page background to #D8D8D8

## Contact Form Mailto Wiring (user-requested: mailto fallback for now)
- [x] Build a shared mailto link generator (recipient info@ashflexwebdesign.com with subject + body) and a vitest covering it
- [x] Contact form: open the visitor's email client (mailto) pre-filled after a successful DB save
- [x] Careers form: apply the same mailto fallback for job applications
- [x] Verify the success flow in the browser, run tests, checkpoint and publish (auto-publish)

## Portfolio Card Hover Effects (user-requested)
- [x] Add lift/shadow hover animation on portfolio project cards (translate + scale + deep shadow)
- [x] Add image zoom and gradient-border glow enhancements on card screenshots while hovering
- [x] Keep the existing scroll-on-hover auto-scroll behavior working with the new effects (auto-scroll runs independently of the CSS transforms)
- [x] Verify rendering (desktop), run tests (24/24), checkpoint and publish (auto-publish)

## Portfolio Screenshot Replacement Round 3 (user-uploaded full-page captures)
- [x] Replace Becca & Miche Travels portfolio screenshots with the user's uploaded full-page capture (beccamichetravels.com; 351px capture upscaled to 760px wide)
- [x] Replace Aerolead Aviation School portfolio screenshots with the user's uploaded full-page capture
- [x] Replace B.C. First Nations Auto Finance portfolio screenshots with the user's uploaded full-page capture (Alberta First Nations Auto Finance)
- [x] Upload 3 images to project storage (WebP) and update portfolio data (card image + gallery screenshots + captions) and CaseStudies page entry
- [x] Verify portfolio listing + detail pages /portfolio/3,4,7 rendering, run tests (24/24), checkpoint and publish (auto-publish)

## Portfolio Screenshot Assignment Correction (user-requested)
- [x] Revert B.C. First Nations Auto Finance to its original screenshot (bcfna-fullpage_70ffe564.png)
- [x] Move the Alberta First Nations Auto Finance capture (bcfna-fullpage_218634ea.webp) to the Afnaf Auto Sales entry
- [x] Revert the CaseStudies page entry (case 3) back to the original BC capture; case 7 (Afnaf) pointed at the Alberta capture
- [x] Verify portfolio + detail pages render correctly (/portfolio/3 shows BC capture, /portfolio/10 shows Alberta capture), run tests (24/24), checkpoint and publish (auto-publish)

## Gallery High-Resolution Lightbox (user-requested)
- [x] New FullPageLightbox component: fit-to-width mode (full capture displayed at natural resolution, vertically scrollable) + zoom mode (wheel/pinch zoom 0.5x–4x, drag-to-pan, 100% reset)
- [x] Wire FullPageLightbox into PortfolioDetail gallery tiles (replacing the old fixed dialog)
- [x] Wire FullPageLightbox into CaseStudyDetail gallery tiles for consistency
- [x] Keep caption + counter in toolbar, prev/next arrows, Escape / Arrow keys, body scroll lock
- [x] Verify rendering on /portfolio/3 and /case-studies/7, run tests (24/24), checkpoint and publish (auto-publish)

## Portfolio Screenshot Replacement Round 4: Shutterspeed (user-uploaded full-page capture)
- [x] Convert the user's Shutterspeed capture (570px wide) to WebP and upload to project storage (shutterspeed-fullpage_eb390ac4.webp)
- [x] Replace Shutterspeed's card image, detail hero, gallery screenshots and captions in portfolio.ts
- [x] Update the CaseStudies page image for the related case entry
- [x] Verify rendering on /portfolio and /portfolio/1, run tests (24/24), checkpoint and publish (auto-publish)

## Portfolio Screenshot Replacement Round 5: Marvel Tex Attraction (user-uploaded full-page capture)
- [x] Convert the user's Marvel Tex Attraction capture (380px wide) to WebP and upload to project storage (marveltex-fullpage_157aa86e.webp)
- [x] Replace Marvel Tex Attraction's card image, detail hero, gallery screenshots and captions in portfolio.ts
- [x] Update the CaseStudies page image for the related case entry
- [x] Verify rendering on /portfolio/11, run tests (24/24), checkpoint and publish (auto-publish)

## Project Info Card Layout (user-requested)
- [x] Study the case study detail page layout: Project Info card sits in the right column beside/under the screenshot card
- [x] Restructure PortfolioDetail: hero screenshot card (2/3) on the left, Project Info card (1/3, sticky) in the right column; case narrative and screenshots gallery follow below (responsive: stacks on mobile)
- [x] Verify rendering on /portfolio/3 (desktop), run tests (24/24), checkpoint and publish (auto-publish)

## Screenshot Card Height (user-requested)
- [x] Increase the main screenshot card height on portfolio detail pages (h-96 → h-[32rem])
- [x] Verify rendering on /portfolio/3 (desktop), checkpoint and publish (auto-publish)

## Service Page Pricing Card Images (user-requested; user confirmed scope = BOTH)
- [x] Located service pages and pricing cards (sidebar pricing card on each service detail page + 3 hosting tier cards on /services/hosting-domain)
- [x] Generated 19 brand-consistent images (16 service illustrations + 3 hosting tier illustrations; dark navy with blue/red/aqua accents)
- [x] Images hosted in project storage with reserved URLs (live placeholders until generation completes)
- [x] Image mapped per service slug in client/src/data/services.ts (servicePricingImages + hostingTierImages)
- [x] Placed themed image above the sidebar pricing card on all service detail pages (bleeds to card edge, gradient fade, h-44)
- [x] Placed themed images on top of the 3 hosting tier cards (Starter/Professional/Business, bleed to card edge, h-40)
- [x] Verified rendering on /services/website-design and /services/hosting-domain, run tests (24/24), checkpoint and publish (auto-publish)

## Home "Our Work" Filter Removal (user-requested)
- [x] Locate the filter controls in the "Our Work" section of Home.tsx (category pill buttons, activeCategory state, empty-filter message)
- [x] Remove the filter buttons/tabs and related state; featured list now always shows the first 6 projects
- [x] Verify rendering on the home page (full-page screenshot), run tests (24/24), checkpoint and publish (auto-publish)

## Our Work Row Hover Animations (user-requested)
- [x] Add smooth hover animations to the project rows in the home page "Our Work" section (row lift + white-to-brand gradient tint + rounded-2xl hit area, index number gradient + scale, category pill gradient fill, title text-gradient, description slide-right, icon button rotate-45 + scale, image peek scale-from-95 with zoom on hover)
- [x] Hover effects kept at 300ms ease-out; transforms only for GPU-friendly motion
- [x] Verify rendering on the home page (full-page screenshot), run tests (24/24), checkpoint and publish (auto-publish)

## Our Work Screenshot Enlargement + Scroll Effect (user-requested)
- [x] Increase the Our Work hover screenshot peek by 50% (w-56 h-40 → w-84 h-60)
- [x] Wire ScrollableScreenshot into the peek with vertical scroll-on-hover auto-scroll, starting from the top of the capture, with the scroll hint (lazy-mount so the scroller is created fresh on hover, resetting to the top)
- [x] Peep retains right-24 absolute position with fade/scale transition; inner static image for pre-hover state on larger screens
- [x] Verify rendering on the home page (full-page screenshot), run tests (24/24), checkpoint and publish (auto-publish)

## Our Work Peek Fix (user-reported: 50% larger + scroll-on-hover not working)
- [x] Diagnosed: previous edit (w-84/h-60 + ScrollableScreenshot) had failed to apply to disk; re-applied the peek markup
- [x] Fix verified: hovering a row reveals the enlarged (w-84 h-60) scrollable capture with auto-scroll from the top header; works on lg+ screens
- [x] Tests passing (24/24), checkpoint fd420644 saved and auto-published

## Our Work Peek Auto-Scroll Direction (user-requested)
- [x] Hover auto-scroll is now a single smooth top → bottom pass: starts at the top header, scrolls down at 60px/s, holds at the bottom (no looping)
- [x] Verified via ScrollableScreenshot behavior (shared by Our Work peek, portfolio cards, galleries, lightbox), tests passing (24/24), checkpoint 2486aa5e saved and auto-published

## Our Work Peek Stability Fix (user-reported: peek disappears / auto-scroll not working)
- [x] Diagnosed (debug agent, high confidence): peek wrapper pointer-events-none meant the cursor leaving the text row fired onMouseLeave, unmounting the peek just as the cursor moved toward the frame/hint
- [x] Hover handlers moved to a shared wrapper div containing both the row link and the peek; peek is pointer-events-auto and stays mounted (toggled via opacity/visibility), so moving onto the frame or "Scroll to view" hint keeps hover + auto-scroll active
- [x] ScrollableScreenshot gained a parent-controlled `active` prop to keep its auto-scroll in sync with the shared hover region
- [x] Verified rendering on /, tests passing (24/24), checkpoint 58691caa saved and auto-published

## Screenshot Sharpness Fix (user-reported: blurred portfolio/Detail screenshots)
- [x] Diagnosed (debug agent): source captures too narrow for rendered sizes on 2x DPR screens (380–760px sources in ~513px cards / ~800px detail hero need ~1000–1600px), plus hover scale(1.02) on .portfolio-image softening bitmaps
- [x] Upscaled 5 fullpage captures 2x with Lanczos at q88 WebP (marveltex 380→760, shutterspeed 570→1140, bcfna 734→1468, aerolead+beccamiche 760→1520) and re-uploaded to project storage (-hd variants)
- [x] Swapped URLs in portfolio.ts (card + screenshots) and CaseStudies.tsx; removed the .portfolio-image hover scale transform in index.css
- [x] Verified rendering on /portfolio and /portfolio/3, tests passing (24/24), checkpoint saved and auto-published

## Screenshot Upscaling Round 2 (user-requested: remaining projects)
- [x] Upscaled 6 projects' captures 2x with Lanczos q88 WebP (kingwesl 702x3772, eightradiance 760x4222, samsara 760x4032, barmest 1520x3524, neboc 760x3550, galcon home/about/services 1786x1536 from raw browser captures)
- [x] Uploaded all HD variants to project storage
- [x] Swapped HD URLs in portfolio.ts (card + screenshots) for the remaining projects
- [x] Swapped HD URLs in CaseStudies.tsx for galcon
- [x] Verified rendering on /portfolio, /portfolio/2, /portfolio/12; tests passing (24/24), checkpoint f10fc09a saved and auto-published

## Revert Round-2 Upscaling (user-reported: HD versions made these worse)
- [x] Reverted kingwesl, eightradiance, samsara, barmest, neboc, galcon-home/about/services URLs in portfolio.ts to the original captures (jpg/png originals from user uploads; sed-swap of all 48 refs)
- [x] Reverted galcon HD URL in CaseStudies.tsx to the original galcon-home_06339665.webp
- [x] Verified rendering on /portfolio, /portfolio/2, /portfolio/12; tests passing (24/24), checkpoint saved and auto-published

## Our Process Section Background (user-requested)
- [x] Upload the user's skyscraper image (service-simple.webp, 1920x672) to project storage
- [x] Apply it as the background of the "Our Process" section on the home page with appropriate blend/overlay (multiply blend over navy #0F172A with a layered navy gradient overlay) so content stays readable
- [x] Verify rendering on the home page, run tests (24/24), checkpoint and publish (auto-publish)

## Mobile Responsiveness & Layout Scaling Audit (user-requested)
- [x] Audited key pages on 375px and 768px; found oversized screenshot frames and below-fold blank navy frames from lazy loading
- [x] Fixed: card frames h-[min(50vh,15rem)], detail hero h-[min(55vh,32rem)], ScrollableScreenshot preloader via IntersectionObserver (rootMargin 1500px)
- [x] Verified via 375px full-page screenshots, tests 24/24, checkpoint saved and auto-published

## Our Process Overlay Slightly Transparent (user-requested)
- [x] Reduced the Our Process section navy gradient overlay opacity (0.92/0.86/0.95 → 0.78/0.72/0.82) so the skyscraper background image is slightly visible while keeping text readable
- [x] Verified rendering on the home page, tests 24/24, checkpoint saved and auto-published

## Hero Extra Top Padding Removed (user-requested)
- [x] Removed the extra hero top padding entirely, restoring original pt-32 (128px mobile) / md:pt-44 (280px desktop); unused hero-top-padding CSS deleted
- [x] Verified rendering on the home page, tests 24/24, checkpoint saved and auto-published

## Hero Top Padding Adjusted to +20px (user-requested)
- [x] Changed the extra hero top padding from 80px to 20px: responsive hero-top-padding class (mobile calc(128px+20px), desktop calc(280px+20px))
- [x] Verified rendering on the home page, tests 24/24, checkpoint saved and auto-published

## Hero Top Padding Increase (user-requested)
- [x] Increased hero top padding by 80px: responsive hero-top-padding class (mobile calc(128px+80px), desktop calc(280px+80px))
- [x] Verified rendering on the home page, tests 24/24, checkpoint saved and auto-published

## Our Process Section Light Header Text (user-requested)
- [x] Change the "Our Process" section heading and sub-heading to light colors: eyebrow in sky-400, h2 white with a blue-300/cyan-300/white gradient accent on "work", subheading white/70
- [x] Verify rendering on the home page, run tests (24/24), checkpoint and publish (auto-publish)

## GitHub Pages Mirror Custom 404 Redirect (user-requested)
- [x] Created branded 404.html (navy brand palette, "Ashflex Web Design" logo block, 404 gradient headline) that window.location.replace-redirects deep links into the SPA with ?r=<path>; fallback buttons + shown requested path
- [x] Added app-side RestoreRedirectedPath in client/src/App.tsx (reads ?r=, navigates to /<path> via wouter, cleans the query string)
- [x] Updated .github/workflows/pages.yml build step to cp 404.html into dist/public instead of a generic index.html copy
- [x] Pushed commit 6bee14f to Ashflexhosting/ashflex-hosting; Actions both green; gh-pages deploy d4a6d77 ("Deploy site: 6bee14f") live
- [x] Verified live: former 404 deep links (e.g. /services/website-design) now render the real page; invalid paths land on the app's in-app 404 ("Page Not Found"); tests 24/24

## Mobile Responsiveness & Layout Scaling Audit (user-requested)
- [x] Audited key pages (Home, Portfolio, Portfolio detail, Services, Pricing, Contact) on 375px and 768px viewports; found oversized screenshot frames on mobile (h-90 cards, 32rem detail hero) and below-fold blank navy frames from native lazy loading
- [x] Fixed: portfolio card frames now h-[min(50vh,15rem)], detail hero h-[min(55vh,32rem)], and ScrollableScreenshot uses an IntersectionObserver preloader (rootMargin 1500px) to force eager fetch before frames reach the viewport
- [x] Verified via 375px full-page screenshots (nearly all captures render; home/pricing/portfolio stack correctly), tests 24/24, checkpoint saved and auto-published

## Missing Portfolio Screenshots (user-reported, after mobile audit)
- [x] Identified 3 broken PNG screenshots returning 403 on the live site: Barmest, Eight Radiance, Sam & Sara
- [x] Re-uploaded the HD WebP captures with fresh storage keys (all 200) and swapped the URLs in portfolio.ts; no stale references remain
- [x] Verified all 12 cards render on desktop, tests 24/24, checkpoint saved and auto-published

## iMac Frame v5 — Match desktopframe.jpg Reference Exactly (user-requested)
- [x] Rebuilt the desktop frame to match the reference (desktopframe.jpg): thick rounded black bezel with camera dot, white screen face, full-width silver aluminum chin with Apple logo, slim silver neck and curved base
- [x] Content remains scrollable — hover auto-scroll, "Scroll to view" hint, arrows, glare, and responsive phone switch all preserved
- [x] Verified on desktop (full-page captures of /portfolio/1 and /portfolio/4), tests 24/24, checkpoint saved and auto-published

## Hero 3D Tilt Effect (user-requested)
- [x] Add a subtle 3D tilt effect to the hero iMac image on hover (cursor-position-driven perspective rotation, ~4-6 deg max, with smooth easing back to flat) — delivered in checkpoint 964028a8
- [x] Verify on desktop, keep reduced-motion preference respected, tests 24/24, checkpoint and publish (auto-publish)

## Hero Right-Side iMac Image (user-requested)
- [x] Uploaded galcon.webp (/manus-storage/galcon-imac_8f72a11c.webp) and placed it on the right side of the homepage hero, replacing the abstract browser/metric cards stack; keeps the floating animation and soft shadow
- [x] Verified rendering on desktop full-page capture and mobile (image hidden below lg, unchanged), tests 24/24, checkpoint saved and auto-published

## Slower Hover Auto-Scroll (user-requested)
- [x] Reduced the hover auto-scroll speed from 60px/s to 38px/s (a ~37% slower, smoother pass) across all scrollable frames (desktop iMac, portfolio cards, Our Work peek, galleries, lightbox)
- [x] Tests 24/24; checkpoint saved and auto-published

## iMac Frame Problem Fix (user-reported)
- [x] Investigated the reported frame issue: no live errors found (earlier logs were transient build-time errors from edits); confirmed by replacing the frame with the reference-exact design
- [x] Fixed via the v5 rebuild matching desktopframe.jpg; verified rendering on desktop and mobile
- [x] Tests 24/24, checkpoint saved and auto-published

## Desktop Frame Height Revert Only (user-requested)
- [x] Kept the taller mobile frame h-[min(75vh,42rem)] while restoring desktop to h-[min(55vh,32rem)] via the responsive "md:h-[min(55vh,32rem)] h-[min(75vh,42rem)]" form
- [x] Verified on desktop (iMac frame renders capture correctly) and mobile, tests 24/24, checkpoint saved and auto-published

## Frame Height Increase Reversed (user-requested)
- [x] Restored the hero frame to its pre-increase height h-[min(55vh,32rem)] on all screen sizes, removing the responsive md: form
- [x] Verified rendering, tests 24/24, checkpoint saved and auto-published

## Phone Mockup Height Increase (user-requested)
- [x] Increased phone mockup height on mobile: h-[min(75vh,42rem)] below md vs md:h-[min(72vh,40rem)] on desktop; ScrollableScreenshot supports the responsive "md:h-[..] h-[..]" form via a matchMedia listener
- [x] Verified rendering on 375px, tests 24/24, checkpoint saved and auto-published

## iMac Frame Height Extension (user-requested)
- [x] Extended the hero screenshot frame height from h-[min(55vh,32rem)] to h-[min(72vh,40rem)] so the iMac mockup is taller and shows more of the capture
- [x] Phone frame height unchanged on mobile; verified rendering, tests 24/24, checkpoint saved and auto-published

## iMac Frame Enhancements (user-requested)
- [x] Added subtle diagonal glass glare (soft white sheen overlay) on the screen for realism
- [x] Responsive switch: iMac frame on md+ screens, phone mockup (Dynamic Island notch, side buttons, rounded corners) below md
- [x] Manual scroll controls: up/down chevron buttons on the right edge of the screen stepping 200px with eased 300ms animation; scrollbar already visible (thin, brand-colored)
- [x] Verified on desktop full-page and 375px viewport; tests 24/24; checkpoint saved and auto-published

## iMac Frame v4 — Match Reference Exactly (user-requested)
- [x] Redesigned the frame to match the reference: tall dark body with thick flat bezel and camera dot, seamless integrated silver chin (full width, rounded bottom) with centered Apple-style logo, tapered dark neck, thin horizontal base slab
- [x] Content remains scrollable — hover auto-scroll and "Scroll to view" hint preserved; responsive
- [x] Verified on /portfolio/7 full-page, tests 24/24, checkpoint saved and auto-published

## iMac Frame on Portfolio Detail Screenshots (user-requested, v3)
- [x] Rebuilt the frame as an iMac-style mockup: slim dark display surround with camera dot, silver aluminum chin (wider than display) with centered logo accent, tapered stand neck, rounded silver base
- [x] Content remains scrollable — hover auto-scroll and "Scroll to view" hint preserved; responsive
- [x] Verified on /portfolio/7 full-page, tests 24/24, checkpoint saved and auto-published

## Reference-Style MacBook Laptop Frame (user-requested, v2)
- [x] Rebuilt LaptopFrame to match the reference mockup: slim dark bezel with camera dot, silver aluminum deck wider than the lid, chamfered front edge, centered opening notch, hinge gap
- [x] Content remains scrollable — hover auto-scroll and "Scroll to view" hint preserved; responsive
- [x] Verified on /portfolio/1 and /portfolio/7 (viewport + full-page), tests 24/24, checkpoint saved and auto-published

## Laptop Frame on Portfolio Detail Screenshots (user-requested)
- [x] Created reusable LaptopFrame component: dark bezel with camera dot, rounded screen corners, tapered base lip; hero screenshot wrapped on all 12 portfolio detail pages (removed the old gradient ring)
- [x] Frame is fully scrollable — hover auto-scroll and "Scroll to view" hint work inside; responsive via viewport-height screen
- [x] Verified on /portfolio/1 and /portfolio/4, tests 24/24, checkpoint saved and auto-published

- [x] Generate an improved hero iMac mockup image (similar to current, better quality) and replace current hero asset

## Hero Image Interactivity Enhancements (user-requested)
- [x] Add subtle hover scale-up and glow effect to the hero iMac image
- [x] Add a lazy-loading blur placeholder/skeleton behind the hero image for perceived performance
- [x] Add a "View Live Demo" button below the iMac image that smoothly scrolls to the portfolio section
- [x] Verify all three enhancements on desktop and mobile, run tests, checkpoint and publish

## Hero Tooltip & Portfolio Scroll Animation (user-requested)
- [x] Add a subtle floating "Hover me" tooltip near the iMac image (auto-fades/dismisses on hover)
- [x] Add smooth fade-in and slide-up animation when the Featured Portfolio section scrolls into view (including after clicking View Live Demo)
- [x] Verify both on desktop and mobile, run tests, checkpoint and publish

## Hero Image Size (user-requested)
- [x] Increase the hero iMac image size and verify layout balance on desktop/laptop/mobile, run tests, checkpoint and publish

## Testimonials Aligned to Portfolio (user-requested)
- [x] Rewrite homepage testimonials to reference actual portfolio projects instead of placeholder clients
- [x] Verify testimonial section rendering, run tests, checkpoint and publish

## Testimonial Card Enhancements (user-requested)
- [x] Make each testimonial card clickable to smoothly scroll to its corresponding portfolio project
- [x] Add subtle hover effect (lift + increased shadow) to testimonial cards
- [x] Add a small project thumbnail image next to the project name on each card
- [x] Verify on desktop/mobile, run tests, checkpoint and publish

## Testimonial Font & Style (user-requested)
- [x] Reduce testimonial quote font size and refine the typography style, verify and checkpoint

## Testimonial Carousel & Stagger Animation (user-requested)
- [x] Convert the testimonial section into an interactive swipe-enabled carousel with dots/autoplay
- [x] Add smooth staggered fade-in animation to testimonial cards as the section scrolls into view
- [x] Verify on desktop/mobile, run tests, checkpoint and publish
## Testimonial Rating Change (user-requested)
- [x] Change all testimonial ratings to 4.5 stars (render half star support with lucide StarHalf and 4.5 numeric label)
- [x] Verify rendering, run tests, checkpoint and publish
## Deployment Build Fix (user-reported build failure)
- [x] Fix "Missing closing } at @layer utilities" production build error — reverted my broken brace edits to the last known-good CSS (73fe095) and re-added the testimonial-fade-in rule cleanly; local prod build now succeeds
- [x] Confirm production deploy succeeds — checkpoint saved/published with auto-publish; local prod build verified clean
## About Page Redesign (user-requested: creative & modern)
- [x] Audit current About page content and structure
- [x] Redesign hero with kinetic typography, creative layout, team photo collage, and motion matching the homepage (glow orbs, floating frame, outline text, CTAs)
- [x] Add services marquee strip, asymmetric story section, bento Mission/Vision cards, 6-card core-values band
- [x] Modernize team (gradient rings, accent bars, gradient roles), dark stats band, and trust section with the new design language
- [x] Verify on desktop (1280, 1366), mobile (375), run tests 24/24, checkpoint and publish
## About Banner Revert (user-requested)
- [x] Restore the About page hero banner to the original PageHeader component style, keeping the rest of the new design
## About Bento & Stats Animations (user-requested)
- [x] Add smooth scroll-triggered staggered fade-in (slide-up) to the bento Mission/Vision cards (new bento-reveal CSS class: opacity + 44px slide + subtle scale + blur-in shadow, 750ms; registered in useScrollReveal observer)
- [x] Verify the stats band count-up animation triggers on scroll into view (useCounter IntersectionObserver at 10% threshold with staggered delays, fallback to final value if observer misses)
- [x] Run tests 24/24, typecheck clean, checkpoint and publish
## Services Page Redesign (user-requested: creative & modern, banner untouched)
- [x] Audit current Services page content and structure
- [x] Redesign service cards and section layout with the modern design language: marquee strip, asymmetric intro with 4 value chips, 4 grouped service categories (Design/Development/Marketing/Infrastructure & AI) with numbered dark glass bento cards, scroll-reveal staggered animations, and dark editorial CTA with glow orbs
- [x] Preserve the existing PageHeader banner exactly as-is
- [x] Verify on desktop (1280) and mobile (375) full-page screenshots, typecheck clean, tests 24/24, checkpoint and publish
## Services Design Row Filler (user-requested)
- [x] Fill the empty 4th slot in the Design & Experience row with a complementary design-philosophy visual card (brand gradient background, noise texture, glow orbs, floating geometric accents, "Designed to be loved. Built to perform." promise, 250+ projects footer)
- [x] Verify grid balance on desktop (3 service cards + philosophy card = 4 across), tests 24/24, checkpoint and publish
## Services Highlight Cards Consistency (user-requested)
- [x] Add highlight/philosophy cards to remaining rows: generalized HighlightCard with per-group content (Our Standard/code, Our Approach/growth, Our Guarantee/reliability) and distinct gradient tones; rendered automatically for any group with fewer than 4 services (Design row gets it; Build & Launch, Grow & Reach, Power & Automate already have 4-5 services so rows remain complete)
- [x] Verify on desktop (1280 full-page capture) and mobile, typecheck clean, tests 24/24, checkpoint and publish

## Services Highlight Card & Sticky Nav Enhancements (user-requested)
- [x] Add subtle hover animation to highlight cards (new .highlight-card utility: translateY(-6px) + scale(1.015) + blue/red glow shadow, 300ms ease-out, reduced-motion guard)
- [x] Add a "Learn More" CTA button inside each highlight card (white navy-text pill, hover scale + arrow nudge; card wrapped in Link to /contact)
- [x] Add sticky category navigation/tabs on the Services page (glass pill tabs: Design / Development / Marketing / Infrastructure & AI; smooth-scroll jump; IntersectionObserver active-state tracking; scroll-mt-24 section anchors)
- [x] Verify on desktop (1280 full-page + interactive nav click to Build & Launch) and mobile, typecheck clean, tests 24/24, checkpoint and publish

## Sticky Category Filter Placement (user-requested)
- [x] Move the sticky category navigation to sit directly above the service cards (moved below the marquee and intro sections, right above the Design & Experience row); verified on desktop full-page capture, tests 24/24, checkpoint and publish

## Sticky Category Filter Revert (user-requested)
- [x] Revert the sticky category navigation to its previous position: below the banner, above the marquee strip; verified on desktop full-page capture, tests 24/24, checkpoint and publish

## Smooth Scroll on Category Tab Clicks (user-requested)
- [x] Make clicking category filter tabs glide smoothly to the selected service section (replaced scrollIntoView with custom requestAnimationFrame easeOutQuart glide, 550-900ms adaptive duration, offsetting header + sticky CategoryNav height + 8px; respects prefers-reduced-motion)

## Services Page Enhancements (user-requested)
- [x] Scrollspy: category filter tabs automatically highlight the active section while scrolling (replaced IntersectionObserver with scroll/resize probe at viewport top + header + 120px; last section passed wins; falls back to first group; updates instantly on smooth-scroll glides)
- [x] Floating "Back to Top" button appearing after scrolling past the banner (shows after 520px scroll, fades/slides in, smooth-scroll to top, fixed bottom-right z-50 gradient circle)
- [x] Concise contact form at the bottom of the Services page (name*, email*, optional service dropdown of all 16 services, message*; stored via trpc.contact.submit + mailto fallback to info@ashflexwebdesign.com; success state with confirmation card; matches site's glass-card style)

## Inquiry Form Enhancements (user-requested)
- [x] Loading spinner on the submit button while the message is sending (lucide Loader2 animate-spin, disabled during isPending, aria-live polite)
- [x] AI-powered auto-suggest in the message field based on the selected service (new trpc.contact.messageSuggest procedure using the built-in LLM; selects a service → "Drafting an AI message…" spinner → cyan "Use AI suggestion" pill chip → one click fills the textarea; placeholder updates to "Ask us about …") — interactively verified: drafting message for Website Design produced a full draft
- [x] Real-time field validation (touched state on change/blur, red border + animated error text under name/email/message, email format check) and smooth success card animation (fade-in scale-up)

## Inquiry Form File Upload (user-requested)
- [x] Add file upload field to the Services inquiry form (paperclip drop-zone label under service selector; accepts PDF, DOC/DOCX, PPTX, XLSX, JPG, PNG, GIF, WEBP via file input with .accept filter)
- [x] Store attachments in S3 via storagePut (contact-attachments/{ts}-{rand}/{filename}) and save attachmentUrl/attachmentName/attachmentSize on the contact_submissions row; router rejects unsupported mime data URLs (data:<type>;base64, prefix check) and caps at 8 MB; attachment details included in the owner notification
- [x] Show upload state with file name, size, remove (X) button, image/document icon, and inline validation errors (unsupported type / too large) with animated error text
- [x] Added 4 Vitest cases for attachment schema validation (valid PDF data URL, unsupported mime passthrough documented, missing fields, non-positive size); schema migration generated + applied (attachmentUrl varchar(600), attachmentName varchar(255), attachmentSize int); verified services page renders; tests 28/28, checkpoint and publish

## Inquiry Form Relocation & Multi-File Upload (user-requested)
- [x] Moved the inquiry form section above the "Not sure where to start?" CTA band on the Services page (inquiry now directly follows the services catalog; CTA band closes the page)
- [x] Support multiple simultaneous attachments (max 5; each validated + uploaded to S3 under contact-attachments/{ts}-{rand}/{filename}; attachments JSON array saved with the submission; Client Portal detail dialog shows per-file download links)
- [x] Increased max file size from 8 MB to 20 MB (client validation "exceeds the 20 MB limit" + server MAX_ATTACHMENT_BYTES; notification lists each file with KB size)
- [x] Added drag-and-drop zone (dashed zone with onDragOver highlight — border/tint/scale — onDragLeave, onDrop handler; click or Enter/Space opens file picker; per-file chips with remove + Clear all)
- [x] Added 5 Vitest cases for multi-file attachment validation (valid multi-array, >5 rejected, unsupported mime passthrough documented, missing fields rejected, non-positive size rejected); migration 0004 applied (single-file columns dropped, attachments json added, journal updated); verified services screenshot; tests 29/29, checkpoint and publish

## Services Inquiry Section Background Image (user-requested)
- [x] Added a custom dark-navy background image (generated brand-colored abstract texture, services-inquiry-bg_58c1e14e.png) to the #services-inquiry section via absolute-positioned bg-cover layer with a navy/85 overlay for readability; container lifted to relative z-10; verified in full-page screenshot of /services; checkpoint and publish

## Inquiry Section Fixed Background & Light Headings (user-requested)
- [x] Make the inquiry section background image fixed (bg-fixed attachment) so it stays in place while scrolling (parallax feel)
- [x] Make the inquiry header/sub-header light: h2 text-white, sub-header cyan-300, body text-white/75; also reduced overlay from 65% to 45% so the fixed texture shows through better
- [x] Verified in live browser at #services-inquiry: dark textured background with fixed attachment renders, light headings confirmed; checkpoint and publish

## Homepage Hero Fixed Background Parallax (user-requested)
- [x] Applied bg-fixed to the homepage hero background image layer (ashflex-hero-background_ee4a0039.png, unchanged opacity-30 and gradient overlay) for visual consistency with the Services inquiry section
- [x] Verified desktop screenshot of homepage hero renders unchanged with fixed attachment; checkpoint and publish

## Homepage Hero Fade-In on Load (user-requested)
- [x] Added hero-fade-in CSS keyframes (800ms opacity+translateY with staggered delay variants d1-d5, prefers-reduced-motion guard) and applied them: h1 fades in on load, subline 120ms, CTAs 240ms, stats 360ms, iMac 480ms (then loops float-slow from 1.2s), Live Demo button 600ms; replaced scroll-reveal classes on hero elements so the entrance is not blocked by the intersection observer
- [x] Verified desktop screenshot of hero renders fully; tests pass; checkpoint and publish

## Remove API Integration Service (user-requested)
- [x] Removed the API Integration entry from the services catalog (client/src/data/services.ts) including its image mapping, and removed its slug from the Infrastructure & AI category in Services.tsx
- [x] Removed from navbar services dropdown (desktop + mobile); /services/api-integration now falls through to the existing "Service Not Found" page with a Back to Services link (route kept generic via params)
- [x] Updated homepage "Explore all 16 services" → "Explore all 15 services"; pricing/case study/cost calculator mentions of "API integrations" retained as feature line items of delivered projects, not offered services (server map.ts comment untouched)
- [x] Verified Services page renders the 15-service catalog in 4 groups and removed-slug page shows Service Not Found; 29/29 tests pass; checkpoint and publish
