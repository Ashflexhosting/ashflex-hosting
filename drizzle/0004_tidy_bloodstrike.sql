ALTER TABLE `contactSubmissions` DROP COLUMN `attachmentUrl`;--> statement-breakpoint
ALTER TABLE `contactSubmissions` DROP COLUMN `attachmentName`;--> statement-breakpoint
ALTER TABLE `contactSubmissions` DROP COLUMN `attachmentSize`;--> statement-breakpoint
ALTER TABLE `contactSubmissions` ADD `attachments` json;
