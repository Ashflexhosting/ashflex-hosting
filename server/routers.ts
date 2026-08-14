import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import {
  createContactSubmission,
  createJobApplication,
  deleteContactSubmission,
  deleteJobApplication,
  listContactSubmissions,
  listJobApplications,
  updateContactSubmissionStatus,
  updateJobApplicationStatus,
} from "./db";
import { notifyOwner } from "./_core/notification";
import { invokeLLM } from "./_core/llm";
import { storagePut } from "./storage";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";

export const contactInputSchema = z.object({
  fullName: z
    .string()
    .min(1, "Full name is required")
    .max(200, "Full name is too long")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please provide a valid email address")
    .max(320, "Email is too long")
    .trim()
    .toLowerCase(),
  phone: z.string().max(40, "Phone number is too long").trim().optional().or(z.literal("")),
  service: z.string().max(60, "Service name is too long").trim().optional().or(z.literal("")),
  message: z
    .string()
    .min(1, "Message is required")
    .max(5000, "Message is too long (5000 characters maximum)")
    .trim(),
  attachments: z
    .array(
      z.object({
        dataUrl: z.string().startsWith("data:"),
        fileName: z.string().min(1).max(255),
        size: z.number().int().positive(),
        type: z.string().min(1).max(120),
      }),
    )
    .max(5, "A maximum of 5 files can be attached at once")
    .optional(),
});

/** Allowed file types for inquiry attachments (briefs and reference images). */
const ALLOWED_ATTACHMENT_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
];

/** Validate an attachment data URL's mime type at runtime. */
const SUPPORTED_ATTACHMENT_PREFIXES = ALLOWED_ATTACHMENT_TYPES.map((t) => `data:${t};base64,`);

function isSupportedAttachmentDataUrl(dataUrl: string): boolean {
  return SUPPORTED_ATTACHMENT_PREFIXES.some((prefix) => dataUrl.startsWith(prefix));
}

/** Decode a data URL to a base64 string without the prefix, or null if malformed. */
function parseDataUrl(dataUrl: string): { bytes: Buffer; mime: string } | null {
  const match = dataUrl.match(/^data:([a-z0-9+\-./]+);base64,([A-Za-z0-9+/=]+)$/);
  if (!match) return null;
  const [, mime, base64] = match;
  if (!ALLOWED_ATTACHMENT_TYPES.includes(mime)) return null;
  try {
    return { bytes: Buffer.from(base64, "base64"), mime };
  } catch {
    return null;
  }
}

const MAX_ATTACHMENT_BYTES = 20 * 1024 * 1024; // 20 MB hard cap per file
const MAX_ATTACHMENTS = 5;

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // TODO: add feature routers here, e.g.
  // todo: router({
  //   list: protectedProcedure.query(({ ctx }) =>
  //     db.getUserTodos(ctx.user.id)
  //   ),
  // }),

  contact: router({
    submit: publicProcedure
      .input(contactInputSchema)
      .mutation(async ({ input }) => {
        const phone = input.phone || null;
        const service = input.service || null;

        // Handle optional multi-file attachment uploads to S3.
        interface StoredAttachment {
          name: string;
          size: number;
          type: string;
          url: string;
        }
        const stored: StoredAttachment[] = [];
        if (input.attachments && Array.isArray(input.attachments)) {
          const prefix = `contact-attachments/${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
          for (const item of input.attachments.slice(0, MAX_ATTACHMENTS)) {
            if (!isSupportedAttachmentDataUrl(item.dataUrl)) continue;
            const parsed = parseDataUrl(item.dataUrl);
            if (!parsed || parsed.bytes.length === 0 || parsed.bytes.length > MAX_ATTACHMENT_BYTES) continue;
            try {
              const { key: savedKey, url } = await storagePut(`${prefix}/${item.fileName}`, parsed.bytes, parsed.mime);
              stored.push({ name: savedKey, size: parsed.bytes.length, type: item.type, url });
            } catch (error) {
              console.error("[Contact] Attachment upload failed:", error);
            }
          }
        }

        // Persist the submission so no lead is lost.
        const { id } = await createContactSubmission({
          fullName: input.fullName,
          email: input.email,
          phone,
          service,
          message: input.message,
          attachments: stored.length > 0 ? (stored as unknown as Parameters<typeof createContactSubmission>[0]["attachments"]) : null,
        });

        // Route the submission to the owner so it lands in info@ashflexwebdesign.com.
        // notifyOwner returns false if the upstream service is temporarily down; the
        // submission itself is still stored so no lead is lost.
        const serviceLabel = service ? ` (interested in ${service})` : "";
        const attachmentLabel =
          stored.length > 0
            ? "\nAttachments:\n" +
              stored
                .map((f, i) => `${i + 1}. ${f.name} (${Math.round(f.size / 1024)} KB) — ${f.url}`)
                .join("\n")
            : "";
        const notificationSent = await notifyOwner({
          title: `New contact form submission from ${input.fullName}`,
          content:
            `New lead via the website contact form${serviceLabel}.\n` +
            `Name: ${input.fullName}\n` +
            `Email: ${input.email}\n` +
            (phone ? `Phone: ${phone}\n` : "") +
            (service ? `Service: ${service}\n` : "") +
            `Message: ${input.message}` +
            attachmentLabel,
        }).catch((error) => {
          console.error("[Contact] Owner notification failed:", error);
          return false;
        });

        return { id, notificationSent } as const;
      }),

    // AI-powered message draft based on the visitor's selected service.
    messageSuggest: publicProcedure
      .input(z.object({ service: z.string().min(1).max(120).trim() }))
      .mutation(async ({ input }) => {
        try {
          const res = await invokeLLM({
            messages: [
              {
                role: "system",
                content:
                  "You write one concise, natural first-person inquiry message (2-3 sentences, 40-90 words) that a small business owner would send to a web design agency about this service. Plain text only, no markdown, no quotation marks, no greeting or sign-off.",
              },
              {
                role: "user",
                content: `Service of interest: ${input.service}`,
              },
            ],
            maxTokens: 200,
          });
          const raw = res.choices?.[0]?.message?.content;
          const draft = typeof raw === "string" ? raw.trim() : "";
          if (!draft || draft.length < 20) {
            return { suggestion: "" } as const;
          }
          return { suggestion: draft.slice(0, 500) } as const;
        } catch (error) {
          console.error("[Contact] Message suggestion failed:", error);
          return { suggestion: "" } as const;
        }
      }),

    submissions: router({
    list: adminProcedure.query(() => listContactSubmissions(200)),
    markStatus: adminProcedure
      .input(
        z.object({
          id: z.number().int().positive(),
          status: z.enum(["new", "read", "responded"]),
        }),
      )
      .mutation(async ({ input }) => {
        await updateContactSubmissionStatus(input.id, input.status);
        return { success: true } as const;
      }),
    deleteSubmission: adminProcedure
      .input(z.object({ id: z.number().int().positive() }))
      .mutation(async ({ input }) => {
        await deleteContactSubmission(input.id);
                return { success: true } as const;
      }),
    }),
  }),

  careers: router({
    submit: publicProcedure
      .input(
        z.object({
          fullName: z
            .string()
            .min(1, "Full name is required")
            .max(200, "Full name is too long")
            .trim(),
          email: z
            .string()
            .min(1, "Email is required")
            .email("Please provide a valid email address")
            .max(320, "Email is too long")
            .trim()
            .toLowerCase(),
          role: z.string().min(1, "Please select a role").max(120, "Role name is too long").trim(),
          portfolio: z.string().max(500, "Link is too long").trim().optional().or(z.literal("")),
          message: z
            .string()
            .min(1, "Tell us about yourself")
            .max(5000, "Message is too long (5000 characters maximum)")
            .trim(),
        }),
      )
      .mutation(async ({ input }) => {
        const portfolio = input.portfolio || null;

        const { id } = await createJobApplication({
          fullName: input.fullName,
          email: input.email,
          role: input.role,
          portfolio,
          message: input.message,
        });

        // Notify the owner so new applicants land in info@ashflexwebdesign.com.
        await notifyOwner({
          title: `New job application from ${input.fullName} for ${input.role}`,
          content:
            `New application via the website careers page.\n` +
            `Name: ${input.fullName}\n` +
            `Email: ${input.email}\n` +
            `Role: ${input.role}\n` +
            (portfolio ? `Portfolio/LinkedIn: ${portfolio}\n` : "") +
            `Message: ${input.message}`,
        }).catch((error) => {
          console.error("[Careers] Owner notification failed:", error);
          return false;
        });

        return { id } as const;
      }),

    applications: router({
      list: adminProcedure.query(() => listJobApplications(200)),
      markStatus: adminProcedure
        .input(
          z.object({
            id: z.number().int().positive(),
            status: z.enum(["new", "read", "responded"]),
          }),
        )
        .mutation(async ({ input }) => {
          await updateJobApplicationStatus(input.id, input.status);
          return { success: true } as const;
        }),
      deleteApplication: adminProcedure
        .input(z.object({ id: z.number().int().positive() }))
        .mutation(async ({ input }) => {
          await deleteJobApplication(input.id);
          return { success: true } as const;
        }),
    }),
  }),
});
export type AppRouter = typeof appRouter;
