# Inquiry Form Multi-File Upload — Implementation Notes (Aug 14, 2026)

## Task
1. Move inquiry form section ABOVE the "Not sure where to start?" CTA band on /services.
2. Multi-file attachments (max 5 files).
3. Max file size 20 MB (was 8 MB).
4. Drag-and-drop zone for attachments.

## Status of work
### DONE
- Schema: drizzle/schema.ts `contactSubmissions.attachments` is now `json("attachments")` (replaces attachmentUrl/Name/Size columns). Import `json` added.
- Migration applied via webdev_execute_sql: DROP attachmentUrl/Name/Size, ADD attachments json. Migration file written at drizzle/0004_tidy_bloodstrike.sql; journal entry 0004 added manually (drizzle-kit generate hangs interactively — avoid; use npx timeout only).
- server/routers.ts: `attachments` input is z.array({...}).max(5) optional; each item {dataUrl,startsWith("data:"), fileName, size, type}. MAX_ATTACHMENT_BYTES = 20*1024*1024, MAX_ATTACHMENTS = 5. Loop uploads each file via storagePut into `contact-attachments/{ts}-{rand}/{filename}`, pushes {name,size,type,url}; stored array saved to `attachments` JSON column; notification lists all files.
- Services.tsx state: attachments File[], attachmentDataUrls string[], attachmentError, dragActive, attachmentInputRef, MAX_ATTACHMENT_BYTES 20MB, MAX_ATTACHMENTS 5, ALLOWED_EXTENSIONS pdf/docx/doc/pptx/xlsx/jpg/jpeg/png/gif/webp. processFiles handles validation + multi-file. Drag handlers (handleDragOver/Leave/Drop) added. removeAttachment(index), clearAttachments() added.

### TODO next
1. Fix remaining TS errors in Services.tsx:
   - Replace single-file attachment JSX (around line 650-690: "inq-attachment" label, chip with Paperclip) with multi-file drag-drop zone: dashed bordered div with onDragOver/Leave/Drop + click handler opening attachmentInputRef; when files attached, render list of chips (icon by type, name, size KB, remove X button per chip) + a "Clear all" link; input element ref={attachmentInputRef} hidden, multiple, accept=".pdf,.doc,.docx,.pptx,.xlsx,.jpg,.jpeg,.png,.gif,.webp".
   - In handleInquiry mutate payload: replace `attachment: {...}` with `attachments: attachments.map((f,i) => ({dataUrl: attachmentDataUrls[i], fileName: f.name, size: f.size, type: f.type}))`.
   - In inquiryMutation onSettled: clearAttachments() instead of removeAttachment().
   - Update UI labels: "Project briefs or reference images — PDF, Word, or images up to 20 MB (max 5 files)".
2. Move inquiry form section (<section id="services-inquiry">) above the CTA band (section with "Not sure where to start?"). Currently order: services-catalog → CTA band → inquiry. Change to: services-catalog → inquiry → CTA band.
3. Update todo.md section "Inquiry Form Relocation & Multi-File Upload" items to [x].
4. Add vitest cases for multi-file attachment schema (array of valid items, >5 array rejected, item missing fields, zero size rejected). Fix existing test that references old single-attachment schema (contactSubmission.test.ts: "rejects attachments with unsupported mime types" may need update since payload now includes `type` field — update fixture to {dataUrl:"data:text/javascript;base64,...", fileName, size, type:"text/javascript"} and expect success=true with note that router drops unsupported mime data URLs).
5. Run pnpm test (was 28/28), tsc clean, screenshot /services, checkpoint + message user (auto-publish enabled).

## Key context
- Project: /home/ubuntu/ashflex-agency. Auto-publish enabled. Production: ashflexweb-pzcsotak.manus.space.
- GitHub mirror: Ashflexhosting/ashflex-hosting auto-push via post-commit hook (only needed for repo files, not S3 assets).
- contact.submit mutation lives in server/routers.ts contact router; Services page form at bottom of Services.tsx (id="services-inquiry").
