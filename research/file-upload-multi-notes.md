# Current Task Notes (Aug 14, 2026)

## Completed earlier today
- Multi-file drag-drop upload + 20 MB limit + form moved above CTA: DONE, checkpoint 0e64926e published. Tests 29/29.
- DB: contactSubmissions.attachments is json column; migration 0004_tidy_bloodstrike.sql; Client Portal detail dialog shows download links.

## Current request
Add a background image to the Services page inquiry section (#services-inquiry in client/src/pages/Services.tsx, section starts around line ~583: `<section className="relative bg-navy noise-texture overflow-hidden" id="services-inquiry">`).

## Approach
- Generate a dark navy abstract bg image (matches brand #0F172A with subtle blue/purple glow, like process-bg_22383687.webp on Home) via generate tool; save to /home/ubuntu/webdev-static-assets/services-inquiry-bg.webp (compressed URL given).
- Apply via absolute-positioned div with background-image inside the section, plus dark overlay (bg-navy/80 or gradient) so form glass-card text stays readable. Keep noise-texture class.
- Then: verify screenshot /services, mark todo complete, checkpoint + message (auto-publish on).

## Key facts
- Project: /home/ubuntu/ashflex-agency; production ashflexweb-pzcsotak.manus.space; auto-publish enabled.
- Existing bg asset example: Home process section uses `backgroundImage: "url(/manus-storage/process-bg_22383687.webp)"` — could reuse but user wants a new image.
- Home hero bg: /manus-storage/ashflex-hero-background_ee4a0039.png.
- Brand: Primary navy #0F172A (bg-navy), secondary blue #2563EB (brand-secondary), accent cyan #06B6D4 (brand-accent); pink/red accents too.
