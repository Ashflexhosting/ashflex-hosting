import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { desc } from "drizzle-orm";
import { contactSubmissions, InsertContactSubmission, InsertJobApplication, InsertNewsletterSubscriber, InsertUser, jobApplications, newsletterSubscribers, users } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);

  return result.length > 0 ? result[0] : undefined;
}

// TODO: add feature queries here as your schema grows.

export async function createContactSubmission(
  submission: InsertContactSubmission,
): Promise<{ id: number }> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available; contact submission could not be stored");
  }

  const [result] = await db.insert(contactSubmissions).values(submission);
  const id = (result as unknown as { insertId: number }).insertId;
  return { id };
}

export async function listContactSubmissions(limit = 50): Promise<typeof contactSubmissions.$inferSelect[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(contactSubmissions).orderBy(desc(contactSubmissions.createdAt)).limit(limit);
}

export async function updateContactSubmissionStatus(
  id: number,
  status: "new" | "read" | "responded",
): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available; submission status could not be updated");
  await db.update(contactSubmissions).set({ status }).where(eq(contactSubmissions.id, id));
}

export async function deleteContactSubmission(id: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available; submission could not be deleted");
  await db.delete(contactSubmissions).where(eq(contactSubmissions.id, id));
}

export async function createJobApplication(
  application: InsertJobApplication,
): Promise<{ id: number }> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available; job application could not be stored");
  }

  const [result] = await db.insert(jobApplications).values(application);
  const id = (result as unknown as { insertId: number }).insertId;
  return { id };
}

export async function listJobApplications(limit = 50): Promise<typeof jobApplications.$inferSelect[]> {
  const db = await getDb();
  if (!db) return [];
  return db.select().from(jobApplications).orderBy(desc(jobApplications.createdAt)).limit(limit);
}

export async function updateJobApplicationStatus(
  id: number,
  status: "new" | "read" | "responded",
): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available; application status could not be updated");
  await db.update(jobApplications).set({ status }).where(eq(jobApplications.id, id));
}

export async function upsertNewsletterSubscriber(
  subscriber: InsertNewsletterSubscriber,
): Promise<{ id: number; inserted: boolean }> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available; newsletter subscription could not be stored");
  }
  // INSERT IGNORE keeps the unique email constraint happy: repeat signups
  // silently resolve to the existing row instead of throwing an error.
  const [result] = await db
    .insert(newsletterSubscribers)
    .values(subscriber)
    .onDuplicateKeyUpdate({ set: { source: subscriber.source ?? "footer" } });
  const row = (result as unknown as { affectedRows: number; insertId?: number }) ?? {};
  return {
    id: (row.insertId ?? 0) as number,
    inserted: Number(row.affectedRows ?? 0) > 0,
  };
}

export async function countNewsletterSubscriptionsLastHour(): Promise<number> {
  const db = await getDb();
  if (!db) return 0;
  const rows = await db
    .select()
    .from(newsletterSubscribers)
    .where(
      (() => {
        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
        return {
          sql: "createdAt > ?",
          params: [oneHourAgo.toISOString()],
        };
      })() as never,
    );
  return rows.length;
}

export async function deleteJobApplication(id: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available; application could not be deleted");
  await db.delete(jobApplications).where(eq(jobApplications.id, id));
}

export async function listNewsletterSubscribers(
  limit: number,
): Promise<Array<{ id: number; email: string; source: string | null; createdAt: Date }>> {
  const db = await getDb();
  if (!db) {
    throw new Error("Database not available; subscribers could not be listed");
  }
  const rows = await db.select().from(newsletterSubscribers).limit(limit);
  return rows.map((row) => ({
    id: row.id,
    email: row.email,
    source: row.source ?? null,
    createdAt: row.createdAt,
  }));
}

export async function deleteNewsletterSubscriber(id: number): Promise<void> {
  const db = await getDb();
  if (!db) throw new Error("Database not available; subscriber could not be deleted");
  await db.delete(newsletterSubscribers).where(eq(newsletterSubscribers.id, id));
}
