import { describe, expect, it, vi, beforeEach } from "vitest";
import { z } from "zod";

vi.mock("./db", async (importOriginal) => {
  const actual = await importOriginal<typeof import("./db")>();
  return {
    ...actual,
    upsertNewsletterSubscriber: vi.fn(async () => ({ id: 1, inserted: true })),
  };
});

vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn(async () => true),
}));

import { appRouter } from "./routers";
import { upsertNewsletterSubscriber } from "./db";
import { notifyOwner } from "./_core/notification";

const createCaller = () => appRouter.createCaller({} as never);

describe("newsletter.subscribe", () => {
  beforeEach(() => {
    vi.mocked(upsertNewsletterSubscriber).mockClear();
    vi.mocked(notifyOwner).mockClear();
  });

  it("stores a valid subscription and notifies the owner", async () => {
    const caller = createCaller();
    const result = await caller.newsletter.subscribe({
      email: "visitor@example.com",
      source: "footer",
    });

    expect(result.id).toBeGreaterThan(0);
    expect(upsertNewsletterSubscriber).toHaveBeenCalledWith({
      email: "visitor@example.com",
      source: "footer",
    });
    expect(notifyOwner).toHaveBeenCalledWith(
      expect.objectContaining({
        title: expect.stringContaining("visitor@example.com"),
      }),
    );
  });

  it("accepts an omitted source and defaults to footer", async () => {
    const caller = createCaller();
    await caller.newsletter.subscribe({ email: "two@example.com" });
    expect(upsertNewsletterSubscriber).toHaveBeenCalledWith(
      expect.objectContaining({ source: "footer" }),
    );
  });

  it("rejects an empty email", async () => {
    const caller = createCaller();
    await expect(
      caller.newsletter.subscribe({ email: "" }),
    ).rejects.toThrow();
  });

  it("rejects a malformed email", async () => {
    const caller = createCaller();
    await expect(
      caller.newsletter.subscribe({ email: "not-an-email" }),
    ).rejects.toThrow();
  });

  it("rejects overly long emails", async () => {
    const caller = createCaller();
    await expect(
      caller.newsletter.subscribe({ email: `${"a".repeat(315)}@x.com` }),
    ).rejects.toThrow();
  });

  it("still succeeds for duplicate signups so visitors never see an error", async () => {
    vi.mocked(upsertNewsletterSubscriber).mockResolvedValue({ id: 7, inserted: false });
    const caller = createCaller();

    const result = await caller.newsletter.subscribe({ email: "repeat@example.com" });
    expect(result.inserted).toBe(false);
    // Duplicate signups should not trigger another owner notification.
    expect(notifyOwner).not.toHaveBeenCalled();
  });

  it("does not notify the owner when the storage call fails", async () => {
    vi.mocked(upsertNewsletterSubscriber).mockRejectedValue(
      new Error("Database not available; newsletter subscription could not be stored"),
    );
    const caller = createCaller();

    await expect(
      caller.newsletter.subscribe({ email: "offline@example.com" }),
    ).rejects.toThrow(/database/i);
    expect(notifyOwner).not.toHaveBeenCalled();
  });
});
