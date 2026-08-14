import { describe, expect, it } from "vitest";
import { contactInputSchema } from "./routers";
import { createContactSubmission, getDb } from "./db";

describe("contact input validation", () => {
  it("accepts a complete valid submission", () => {
    const input = {
      fullName: "Ada Lovelace",
      email: "Ada@example.com",
      phone: "0802 313 8892",
      service: "web-design",
      message: "  I need a new website.  ",
    };
    const parsed = contactInputSchema.parse(input);
    expect(parsed.fullName).toBe("Ada Lovelace");
    // Email is normalized: trimmed and lowercased.
    expect(parsed.email).toBe("ada@example.com");
    expect(parsed.fullName.includes(" ")).toBe(true);
    expect(parsed.message).toBe("I need a new website.");
  });

  it("rejects a missing full name", () => {
    const result = contactInputSchema.safeParse({
      fullName: "",
      email: "a@b.com",
      message: "Hello",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an invalid email address", () => {
    const result = contactInputSchema.safeParse({
      fullName: "Ada",
      email: "not-an-email",
      message: "Hello",
    });
    expect(result.success).toBe(false);
  });

  it("rejects an overly long message", () => {
    const result = contactInputSchema.safeParse({
      fullName: "Ada",
      email: "a@b.com",
      message: "x".repeat(5001),
    });
    expect(result.success).toBe(false);
  });

  it("allows optional phone and service fields, including empty strings", () => {
    const parsed = contactInputSchema.parse({
      fullName: "Ada",
      email: "a@b.com",
      phone: "",
      service: "",
      message: "Hi",
    });
    expect(parsed.phone).toBe("");
    expect(parsed.service).toBe("");
  });

  it("accepts multiple attachments with valid data URLs", () => {
    const parsed = contactInputSchema.parse({
      fullName: "Ada",
      email: "a@b.com",
      message: "See attached briefs",
      attachments: [
        {
          dataUrl: "data:application/pdf;base64," + Buffer.from("brief-content").toString("base64"),
          fileName: "project-brief.pdf",
          size: 1024,
          type: "application/pdf",
        },
        {
          dataUrl: "data:image/png;base64," + Buffer.from("reference-image").toString("base64"),
          fileName: "reference.png",
          size: 2048,
          type: "image/png",
        },
      ],
    });
    expect(parsed.attachments).toHaveLength(2);
    expect(parsed.attachments?.[0].fileName).toBe("project-brief.pdf");
    expect(parsed.attachments?.[1].type).toBe("image/png");
  });

  it("rejects more than 5 attachments at once", () => {
    const result = contactInputSchema.safeParse({
      fullName: "Ada",
      email: "a@b.com",
      message: "Attached",
      attachments: Array.from({ length: 6 }, (_, i) => ({
        dataUrl: `data:image/png;base64,${Buffer.from(`img${i}`).toString("base64")}`,
        fileName: `image-${i}.png`,
        size: 100,
        type: "image/png",
      })),
    });
    expect(result.success).toBe(false);
  });

  it("allows attachments with unsupported mime data URLs at the schema level", () => {
    const result = contactInputSchema.safeParse({
      fullName: "Ada",
      email: "a@b.com",
      message: "See attached script",
      attachments: [
        {
          dataUrl: "data:text/javascript;base64,console.log('x');",
          fileName: "malicious.js",
          size: 50,
          type: "text/javascript",
        },
      ],
    });
    // The schema allows the data URL shape; unsupported mime types are rejected
    // by the router-level attachment pipeline (verified in routers.ts):
    // any data URL not prefixed with data:<supported-type>;base64, is dropped.
    expect(result.success).toBe(true);
    expect(result.success && result.data.attachments?.[0].fileName).toBe("malicious.js");
  });

  it("rejects an attachment item missing required fields", () => {
    const result = contactInputSchema.safeParse({
      fullName: "Ada",
      email: "a@b.com",
      message: "Attached",
      attachments: [{ dataUrl: "data:image/png;base64,aGVsbG8=" }],
    });
    expect(result.success).toBe(false);
  });

  it("rejects an attachment item with a non-positive size", () => {
    const result = contactInputSchema.safeParse({
      fullName: "Ada",
      email: "a@b.com",
      message: "Attached",
      attachments: [{ dataUrl: "data:image/png;base64,aGVsbG8=", fileName: "img.png", size: 0, type: "image/png" }],
    });
    expect(result.success).toBe(false);
  });
});

describe("contact submission persistence", () => {
  it("stores a submission and assigns an id", async () => {
    const db = await getDb();
    if (!db) {
      console.warn("Skipping persistence test: database unavailable");
      return;
    }

    const { id } = await createContactSubmission({
      fullName: "Vitest Test Lead",
      email: "vitest-test@example.com",
      phone: "0000 000 0000",
      service: "seo",
      message: "Automated test submission",
    });
    expect(typeof id).toBe("number");
    expect(id).toBeGreaterThan(0);
  });
});
