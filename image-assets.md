# Generated image assets for Ashflex agency site (use URLs exactly as-is)

Team photos (About page):
- CEO: /manus-storage/team-ceo_103bb175.png
- Designer: /manus-storage/team-designer_31932908.png
- Developer: /manus-storage/team-developer_8a4edf68.png
- Marketer: /manus-storage/team-marketer_e9c29036.png

Portfolio mockups (portfolio.ts, CaseStudies.tsx, CaseStudyDetail.tsx):
- Corporate: /manus-storage/portfolio-corporate_abe37286.png
- Real Estate: /manus-storage/portfolio-realestate_77421e68.png
- Healthcare: /manus-storage/portfolio-healthcare_005267ab.png
- School: /manus-storage/portfolio-school_5fb4c900.png
- NGO: /manus-storage/portfolio-ngo_5b3da024.png
- E-commerce: /manus-storage/portfolio-ecommerce_239fccf8.png
- Travel: /manus-storage/portfolio-travel_6860e84d.png
- Law: /manus-storage/portfolio-law_ae3d0a7c.png
- Hotel: /manus-storage/portfolio-hotel_4c3ab951.png

Blog covers (Blog.tsx):
- SEO: /manus-storage/blog-seo_20b48157.png
- Mobile: /manus-storage/blog-mobile_027a9e52.png
- Marketing: /manus-storage/blog-marketing_7ebe874f.png
- AI: /manus-storage/blog-ai_d4ecc01f.png
- Growth: /manus-storage/blog-growth_fd9acb6b.png
- WordPress: /manus-storage/blog-wordpress_fb3989c6.png
- E-commerce/Ads: /manus-storage/blog-ecommerce_de293ff3.png
- Web Design: /manus-storage/blog-webdesign_fe599a26.png
- Branding/Chatbots: /manus-storage/blog-branding_49352312.png

Other (optional, not yet used in code):
- Hero team: /manus-storage/hero-team_0660714d.png
- Process workshop: /manus-storage/process-workshop_fac7d0fa.png

Status: portfolio.ts DONE; About.tsx DONE; CaseStudies.tsx DONE; CaseStudyDetail.tsx DONE (via sed); Blog.tsx DONE.
Remaining: check BlogPost.tsx hero image references (mirrors Blog.tsx ids, likely needs same replacements but with larger resolution). Home.tsx uses portfolioItems from data, so it auto-updates. Then run tsc + vitest, screenshot verify, update todo.md, checkpoint, deliver.
