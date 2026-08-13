import { describe, expect, it } from "vitest";
import { buildMailtoLink } from "./mailto";

describe("buildMailtoLink", () => {
  it("builds a mailto link to info@ashflexwebdesign.com with subject and body", () => {
    const link = buildMailtoLink({
      fullName: "Jane Doe",
      email: "jane@example.com",
      message: "Hello Ashflex team!",
    });

    expect(link).toContain("mailto:info@ashflexwebdesign.com");
    expect(link).toContain(`subject=${encodeURIComponent("New enquiry from Jane Doe")}`);
    expect(decodeURIComponent(link.split("body=")[1])).toContain("Name: Jane Doe");
    expect(decodeURIComponent(link.split("body=")[1])).toContain("Email: jane@example.com");
    expect(decodeURIComponent(link.split("body=")[1])).toContain("Hello Ashflex team!");
  });

  it("includes phone and context when provided", () => {
    const link = buildMailtoLink({
      fullName: "John Smith",
      email: "john@example.com",
      phone: "0802 313 8892",
      context: "Web Design",
      message: "Quote please",
    });

    expect(link).toContain(
      `subject=${encodeURIComponent("New enquiry from John Smith — Web Design")}`,
    );
    const body = decodeURIComponent(link.split("body=")[1]);
    expect(body).toContain("Phone: 0802 313 8892");
    expect(body).toContain("Interest: Web Design");
  });

  it("handles empty optional fields gracefully", () => {
    const link = buildMailtoLink({
      fullName: "Alice",
      email: "alice@example.com",
      phone: "",
      context: "",
      message: "Short msg",
    });

    const body = decodeURIComponent(link.split("body=")[1]);
    expect(body).not.toContain("Phone:");
    expect(body).not.toContain("Interest:");
    expect(link).not.toContain("undefined");
    expect(link).not.toContain("null");
  });
});
