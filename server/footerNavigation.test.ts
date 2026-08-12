import { describe, expect, it } from "vitest";
import { footerCompanyLinkKey, footerCompanyLinks } from "../shared/footerNavigation";
import { siteContact } from "../shared/siteContact";
import { brandLogoUrl } from "../shared/brand";

describe("footer company navigation", () => {
  it("generates a unique React key for every displayed company link", () => {
    const keys = footerCompanyLinks.map(([label, href]) => footerCompanyLinkKey(label, href));

    expect(new Set(keys).size).toBe(keys.length);
  });

  it("keeps Careers and Contact distinct even though both currently lead to contact", () => {
    const careers = footerCompanyLinks.find(([label]) => label === "Careers");
    const contact = footerCompanyLinks.find(([label]) => label === "Contact");

    expect(careers).toBeDefined();
    expect(contact).toBeDefined();
    expect(footerCompanyLinkKey(...careers!)).not.toBe(footerCompanyLinkKey(...contact!));
  });

  it("uses the configured Ashflex business contact details", () => {
    expect(siteContact.email).toBe("info@ashflexwebdesign.com");
    expect(siteContact.phoneDisplay).toBe("08023138892");
    expect(siteContact.phoneHref).toBe("tel:08023138892");
  });

  it("uses the uploaded official Ashflex logo asset", () => {
    expect(brandLogoUrl).toBe("/manus-storage/ashflex-website-design-logo-v2_ad90e878.png");
  });
});
