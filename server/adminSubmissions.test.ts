import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type UserLike = { id: number; role: "user" | "admin"; name?: string | null } | null;

function createContext(user: UserLike): TrpcContext {
  return { user: user as TrpcContext["user"] } as unknown as TrpcContext;
}

describe("contact.submissions.list access control", () => {
  it("rejects anonymous users because adminProcedure requires a logged-in admin", async () => {
    const caller = appRouter.createCaller(createContext(null));
    await expect(caller.contact.submissions.list()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("rejects non-admin users with FORBIDDEN", async () => {
    const caller = appRouter.createCaller(createContext({ id: 1, role: "user" }));
    await expect(caller.contact.submissions.list()).rejects.toMatchObject({ code: "FORBIDDEN" });
  });

  it("allows admin users and returns an array", async () => {
    const caller = appRouter.createCaller(createContext({ id: 1, role: "admin" }));
    const result = await caller.contact.submissions.list();
    expect(Array.isArray(result)).toBe(true);
  });
});

describe("contact.submissions.markStatus", () => {
  const adminCaller = appRouter.createCaller(createContext({ id: 1, role: "admin" }));
  const publicCaller = appRouter.createCaller(createContext(null));

  it("rejects invalid status values", async () => {
    await expect(
      adminCaller.contact.submissions.markStatus({ id: 1, status: "invalid" as any }),
    ).rejects.toThrow();
  });

  it("marks a real submission as read and then back to new", async () => {
    const { id } = await publicCaller.contact.submit({
      fullName: "Admin Test Lead",
      email: "admin-test@example.com",
      phone: "",
      service: "",
      message: "Admin dashboard status test",
    });

    await expect(
      adminCaller.contact.submissions.markStatus({ id, status: "read" }),
    ).resolves.toMatchObject({ success: true });
    const read = (await adminCaller.contact.submissions.list()).find((s) => s.id === id);
    expect(read?.status).toBe("read");

    await expect(
      adminCaller.contact.submissions.markStatus({ id, status: "new" }),
    ).resolves.toMatchObject({ success: true });
    const reset = (await adminCaller.contact.submissions.list()).find((s) => s.id === id);
    expect(reset?.status).toBe("new");

    // Clean up the test submission so production data stays real.
    await adminCaller.contact.submissions.deleteSubmission({ id });
  });

  it("rejects non-admin status updates with FORBIDDEN", async () => {
    const userCaller = appRouter.createCaller(createContext({ id: 2, role: "user" }));
    await expect(
      userCaller.contact.submissions.markStatus({ id: 1, status: "read" }),
    ).rejects.toMatchObject({ code: "FORBIDDEN" });
  });
});
