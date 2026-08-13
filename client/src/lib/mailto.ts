import { siteContact } from "@shared/siteContact";

export type MailtoParams = {
  /** Display name of the person submitting the form. */
  fullName: string;
  /** Reply-to address of the submitter. */
  email: string;
  /** Optional phone number. */
  phone?: string | null;
  /** Optional label of the service/category of interest. */
  context?: string;
  /** The main body/message of the submission. */
  message: string;
};

/**
 * Builds a mailto: URI that opens the visitor's email client with the message
 * pre-filled and addressed to info@ashflexwebdesign.com. The visitor's own
 * address is added as Reply-To so responses reach them directly.
 *
 * Note: `mailto:` subject/body text is encoded, then the whole URI is
 * encoded again so browsers that parse the href verbatim still handle it.
 */
export function buildMailtoLink(params: MailtoParams): string {
  const { fullName, email, phone, context, message } = params;

  const subjectParts = [`New enquiry from ${fullName}`];
  if (context) subjectParts.push(context);
  const subject = encodeURIComponent(subjectParts.join(" — "));

  const bodyLines = [
    `Name: ${fullName}`,
    `Email: ${email}`,
    ...(phone ? [`Phone: ${phone}`] : []),
    ...(context ? [`Interest: ${context}`] : []),
    "",
    "Message:",
    message,
  ];
  const body = encodeURIComponent(bodyLines.join("\n"));

  return `mailto:${siteContact.email}?subject=${subject}&body=${body}`;
}
