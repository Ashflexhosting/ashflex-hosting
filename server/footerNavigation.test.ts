import { describe, expect, it } from "vitest";
import { footerCompanyLinkKey, footerCompanyLinks } from "../shared/footerNavigation";

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
});
