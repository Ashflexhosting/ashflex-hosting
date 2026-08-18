import { describe, it, expect } from "vitest";
import { faqs, faqCategories } from "../client/src/data/faq";

describe("Consolidated FAQ data", () => {
  it("has all five categories represented in the FAQ list", () => {
    for (const category of faqCategories) {
      expect(faqs.filter((f) => f.category === category).length).toBeGreaterThan(0);
    }
  });

  it("contains no duplicate questions", () => {
    const seen = new Set<string>();
    for (const faq of faqs) {
      const key = faq.question.trim().toLowerCase();
      expect(seen.has(key), `Duplicate FAQ question: ${faq.question}`).toBe(false);
      seen.add(key);
    }
  });

  it("includes hosting renewal FAQs consolidated from the service page", () => {
    const renewalTopics = [
      "free first year",
      "renewal",
      ".com.ng",
      "transfer",
    ];
    const hosted = faqs.filter((f) => f.category === "Hosting & Domains");
    for (const topic of renewalTopics) {
      expect(hosted.some((f) => `${f.question} ${f.answer}`.includes(topic)), `Missing renewal topic: ${topic}`).toBe(true);
    }
  });

  it("has meaningful answers and tracks source pages", () => {
    for (const faq of faqs) {
      expect(faq.answer.length).toBeGreaterThan(20);
      expect(Array.isArray(faq.sources)).toBe(true);
      expect(faq.sources!.length).toBeGreaterThan(0);
    }
  });
});
