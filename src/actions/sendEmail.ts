"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { CreateEmailResponse, Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

let data:CreateEmailResponse;
try {
  data = await resend.emails.send({
    from: "Contact Form <onboarding@resend.dev>",
    to: "abigail.ridley@hotmail.co.uk",
    subject: "Message from contact form",
    react: React.createElement(ContactFormEmail, {
      message: message,
      senderEmail: senderEmail,
    }),
  });
   console.log({data})
   if (data.error) throw new Error (data.error.message)
} catch (error: unknown) {
  return {
    error: getErrorMessage(error),
    
  };

}
return { data };
};