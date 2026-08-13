import { describe, expect, it } from "vitest";
import {
  filterPortfolioItems,
  portfolioIndustries,
  portfolioItems,
  serviceTypes,
} from "../client/src/data/portfolio";

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
      "Afnaf Auto Sales",
      "Marvel Tex Attraction",
      "Galcon Engineering (Nig) Limited",
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

describe("portfolio filters", () => {
  it("exposes each represented industry and service type without duplicate options", () => {
    expect(portfolioIndustries).toEqual([
      "Corporate",
      "Interiors",
      "Finance",
      "Education",
      "NGOs",
      "E-commerce",
      "Travel",
      "Hospitality",
    ]);
    expect(serviceTypes).toEqual(["Website Design", "One-page Website Design", "Web Application"]);
  });

  it("returns projects that match the selected industry and service together", () => {
    expect(filterPortfolioItems({ industry: "Corporate", service: "Website Design" }).map((project) => project.title)).toEqual([
      "Shutterspeed Projects",
      "Galcon Engineering",
    ]);
    expect(filterPortfolioItems({ industry: "Corporate", service: "One-page Website Design" }).map((project) => project.title)).toEqual([
      "Barmest Nigeria Limited",
    ]);
  });

  it("supports an all-projects reset and returns an empty collection for unmatched combinations", () => {
    expect(filterPortfolioItems()).toEqual(portfolioItems);
    expect(filterPortfolioItems({ industry: "Education", service: "One-page Website Design" })).toEqual([]);
    expect(filterPortfolioItems({ industry: "Finance", service: "Web Application" }).map((project) => project.title)).toEqual(["Afnaf Auto Sales"]);
  });
});
