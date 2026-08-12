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
});

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

        // Persist the submission so no lead is lost.
        const { id } = await createContactSubmission({
          fullName: input.fullName,
          email: input.email,
          phone,
          service,
          message: input.message,
        });

        // Route the submission to the owner so it lands in info@ashflexwebdesign.com.
        // notifyOwner returns false if the upstream service is temporarily down; the
        // submission itself is still stored so no lead is lost.
        const serviceLabel = service ? ` (interested in ${service})` : "";
        const notificationSent = await notifyOwner({
          title: `New contact form submission from ${input.fullName}`,
          content:
            `New lead via the website contact form${serviceLabel}.\n` +
            `Name: ${input.fullName}\n` +
            `Email: ${input.email}\n` +
            (phone ? `Phone: ${phone}\n` : "") +
            (service ? `Service: ${service}\n` : "") +
            `Message: ${input.message}`,
        }).catch((error) => {
          console.error("[Contact] Owner notification failed:", error);
          return false;
        });

        return { id, notificationSent } as const;
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
