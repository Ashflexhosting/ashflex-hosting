CREATE TABLE `newsletterSubscribers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`email` varchar(320) NOT NULL,
	`source` varchar(60) NOT NULL DEFAULT 'footer',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `newsletterSubscribers_id` PRIMARY KEY(`id`),
	CONSTRAINT `newsletterSubscribers_email_unique` UNIQUE(`email`)
);
--> statement-breakpoint
ALTER TABLE `contactSubmissions` ADD `attachments` json;--> statement-breakpoint
ALTER TABLE `contactSubmissions` DROP COLUMN `attachmentUrl`;--> statement-breakpoint
ALTER TABLE `contactSubmissions` DROP COLUMN `attachmentName`;--> statement-breakpoint
ALTER TABLE `contactSubmissions` DROP COLUMN `attachmentSize`;