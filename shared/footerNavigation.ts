export const footerCompanyLinks = [
  ["About Us", "/about"],
  ["Portfolio", "/portfolio"],
  ["Case Studies", "/case-studies"],
  ["Pricing", "/pricing"],
  ["Blog", "/blog"],
  ["Careers", "/contact"],
  ["Contact", "/contact"],
] as const;

export function footerCompanyLinkKey(label: string, href: string) {
  return `footer-company-${label.toLowerCase().replace(/\s+/g, "-")}-${href}`;
}
