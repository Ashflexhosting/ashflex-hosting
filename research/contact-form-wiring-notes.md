# Contact Form Wiring — Implementation Notes

## Task
Wire the /contact form so submissions reach info@ashflexwebdesign.com. Approach chosen:
store each submission in MySQL + push an owner notification via `notifyOwner` (server/_core/notification.ts ships `notifyOwner({ title, content })`; returns true/false for upstream availability). The notification surfaces in the Manus owner's notifications, which forwards to their inbox. Also: confirm in the delivery message that the owner gets notified, and show the visitor a clear success state.

## Key files (current state)
- `drizzle/schema.ts`: only `users` table exists so far; add `contactSubmissions` table here (camelCase columns: fullName, email, phone, service, message, status).
- `server/db.ts`: query helpers; add `createContactSubmission` (Drizzle insert).
- `server/routers.ts`: contact form procedure under tRPC (publicProcedure, Zod validation; max lengths ~200 chars fields, message ~5000).
- `client/src/pages/Contact.tsx`: form state fields name/email/phone/service/message; currently handleSubmit only shows toast + sets `submitted` true without persisting. Add `trpc.contact.submit.useMutation()` with loading state, disable button, setSubmitted(true) only after success, toast error on failure.
- `shared/siteContact.ts`: business email info@ashflexwebdesign.com, phone 08023138892 (use in notification title/content).

## Steps remaining
1. [x] todo.md items added
2. Add table in drizzle/schema.ts -> run `pnpm drizzle-kit generate` -> read .sql -> apply via webdev_execute_sql
3. server/db.ts helper; server/routers.ts `contact.submit` procedure + notifyOwner call (title: "New contact form submission — {fullName}", content includes email, phone, service, message, link to /contact)
4. Client: trpc mutation, loading/success/error UX; keep existing success card
5. Vitest: server/contactSubmission.test.ts — validation (rejects missing required, truncates long text), persistence
6. `pnpm test` + `npx tsc --noEmit`, screenshot /contact, checkpoint (auto-publishes)

## Conventions
- Vitest files use `import { describe, expect, it } from "vitest"` explicitly (existing suites footerNavigation.test.ts, portfolioContent.test.ts).
- Contact field label in form: "Full Name *", "Email *", "Phone Number", "Service Interested In", "Message *"; service select values: web-design, development, wordpress, ecommerce, seo, branding, marketing, maintenance, other.
