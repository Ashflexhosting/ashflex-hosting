import { describe, expect, it } from "vitest";
import { portfolioItems } from "../client/src/data/portfolio";

describe("verified portfolio content", () => {
  it("uses the approved client projects from Ashflex’s official projects listing", () => {
    expect(portfolioItems.map((project) => project.client)).toEqual([
      "Shutterspeed Projects",
      "Kingwesl Interior",
      "B.C. First Nations Auto Finance",
      "Aerolead Aviation",
      "8 Radiance Empowerment",
      "Sam & Sara",
      "Becca & Miche Travels",
      "Barmest Nigeria Limited",
      "Neboc Hotel & Suites",
    ]);
  });

  it("does not invent performance metrics that are not published publicly", () => {
    expect(portfolioItems.every((project) => project.results === "Public success metrics are not published on Ashflex’s official project listing.")).toBe(true);
  });

  it("links each listed project to its live client website", () => {
    expect(portfolioItems.every((project) => /^https?:\/\//.test(project.website))).toBe(true);
  });
});
