"use server";

import { z } from "zod";
import { Resend } from "resend";

// Create a schema for form validation
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z
    .string()
    .min(2, { message: "Subject must be at least 2 characters" })
    .max(200),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(5000),
});

// Initialize Resend with API key
// In a real application, you would use an environment variable
const resend = new Resend(process.env.RESEND_API_KEY || "test_api_key");

// The recipient email address
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "contact@example.com";

export async function sendContactEmail(formData: FormData) {
  try {
    // Extract form data
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Validate form data
    const validatedFields = contactFormSchema.safeParse({
      name,
      email,
      subject,
      message,
    });

    // If validation fails, return error
    if (!validatedFields.success) {
      return {
        success: false,
        error: "Invalid form data. Please check your inputs and try again.",
      };
    }

    // Sanitize inputs to prevent XSS
    const sanitizedName = name.replace(/[<>]/g, "");
    const sanitizedEmail = email.replace(/[<>]/g, "");
    const sanitizedSubject = subject.replace(/[<>]/g, "");
    const sanitizedMessage = message.replace(/[<>]/g, "");

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: [RECIPIENT_EMAIL],
      subject: `Portfolio Contact: ${sanitizedSubject}`,
      reply_to: sanitizedEmail,
      text: `
Name: ${sanitizedName}
Email: ${sanitizedEmail}
Subject: ${sanitizedSubject}

Message:
${sanitizedMessage}
      `,
      html: `
<div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>New Contact Form Submission</h2>
  <p><strong>From:</strong> ${sanitizedName}</p>
  <p><strong>Email:</strong> ${sanitizedEmail}</p>
  <p><strong>Subject:</strong> ${sanitizedSubject}</p>
  <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-radius: 5px;">
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-wrap;">${sanitizedMessage}</p>
  </div>
</div>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return {
        success: false,
        error: "Failed to send email. Please try again later.",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error("Error in sendContactEmail:", error);
    return {
      success: false,
      error: "An unexpected error occurred. Please try again later.",
    };
  }
}
