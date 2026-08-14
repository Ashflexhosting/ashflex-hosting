# Inquiry Section Background Findings (Aug 14, 2026)

## Current state
- Services.tsx #services-inquiry section: bg-cover bg-fixed image layer + bg-navy/65 overlay + navy base class.
- Screenshot analysis of full-page /services capture (webdev-preview-services-1786705251673519628-5056.png, 1279x6515):
  - Row luminance dark (~30) only below y=5440 (CTA band) and y=6040 (footer).
  - The inquiry section (y ~4800-5440) renders nearly WHITE (lum ~248) in the full-page screenshot.
  - The form glass-card blends into a white page background — the navy bg and bg image are NOT visible behind the form in the full-page render.

## Interpretation
Full-page screenshot tool intentionally hides `position:fixed` elements (full-page shots drop fixed chrome/elements). The bg-fixed image + likely the section's own rendering may be stripped in full-page mode — the form section appears white because bg-fixed is removed AND the section background (bg-navy) isn't showing either. In live browser the effect should work. But note: even the section bg-navy is missing in the full-page shot — meaning the inquiry section itself was not captured as dark. Actually earlier screenshots (before bg-fixed) DID show dark inquiry section, so the section IS dark; the missing dark region is likely because the form's glass card has opaque bg and the section bg is dark navy — full-page shots removed fixed-positioned image only, overlay is absolute (kept). Wait: region 4800-5440 is light. The section starts at y=5440? No— 5360-5440 lum 248-249, dark from 5440. That means inquiry section renders LIGHT in latest capture, which contradicts earlier checkpoint screenshot where inquiry section was clearly dark navy.

## Hypothesis
The earlier successful dark inquiry screenshots were captured BEFORE moving the form above the CTA (section reordered). After swap, check if inquiry section got white bg class? Section JSX: `<section className="relative bg-navy noise-texture overflow-hidden" id="services-inquiry">` — bg-navy present. But render shows white. Possibly because section order changed and the inquiry section now appears twice or one of two sections lost classes. NEED TO CHECK JSX: after python swap, inspect actual Services.tsx around lines 545-560 and ~610-640 to confirm both sections intact.

## Key file locations
- Services.tsx inquiry section: grep -n 'services-inquiry' (was 554).
- Earlier checkpoint screenshot (95695520 render) DID show dark inquiry section with bg texture — so issue may be full-page screenshot fixed-element stripping only, but earlier full-page shots also showed dark section fine. MUST re-check rendered markup and browser screenshot (non full-page, scroll to section) to verify live behavior.

## Browser verification (11:02 AM)
The inquiry section in the live browser IS dark navy (headings are white/light, cyan-300 sub-header) — but the abstract background IMAGE itself is NOT visible; the background renders as a flat navy. The bg-cover bg-fixed div appears to not be painting the image (likely because the absolute div is behind the navy/65 overlay and image is subtle, or the URL path). Earlier checkpoint screenshot DID show the texture. Difference: earlier screenshot was taken before the section reorder (python swap). After swap, the section JSX was confirmed intact at line 554 with bg-fixed + overlay.

Root cause candidate: the bg-fixed element is absolute inset-0 inside a section with overflow-hidden — that's fine. But the image div sits BEFORE the overlay; overlay covers it entirely at 65%. Earlier renders showed the texture because the base image had lighter areas OR the texture showed through at 85% too? Actually earlier full-page screenshot showed visible texture edges. Current render: flat navy with a faint darker wave at left edge — suggests the image IS rendering partially but barely. May need to remove the overlay OR reduce to very low. But user only asked for bg-fixed + light text.

Decision: keep bg-navy/65 overlay as-is (texture does render faintly), verify in browser again with overlay slightly reduced if needed. The user saw the texture in earlier screenshots — maybe because at 85% opacity the image contrast showed. Current live render shows almost flat navy. Check image URL correctness: /manus-storage/services-inquiry-bg_58c1e14e.png — uploaded via manus-upload-file --webdev, path should be correct (worked in earlier checkpoint). Verify the image file is accessible.

## Final verification (11:03 AM, bg-navy/45)
In-browser render at #services-inquiry: section shows a dark textured navy background (waves/glow visible at section edges and behind form), headings are white ("Tell us about your next step") with gradient accent, sub-header is cyan-300, body text white/75. The bg-fixed image layer renders the abstract texture; overlay at 45% keeps it moody but visible. Form card (light glass) sits on top with good contrast. CTA band below remains distinct dark navy. All requirements met: (1) fixed background attachment, (2) light header/sub-header text. Ready to checkpoint.
