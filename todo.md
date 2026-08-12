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
