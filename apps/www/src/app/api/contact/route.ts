// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(request: Request) {
//   try {
//     const { name, email, subject, message } = await request.json();

//     // Validate the input
//     if (!name || !email || !subject || !message) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     // Configure email transporter
//     const transporter = nodemailer.createTransport({
//       host: process.env.EMAIL_SERVER_HOST,
//       port: parseInt(process.env.EMAIL_SERVER_PORT || "587"),
//       secure: process.env.EMAIL_SECURE === "true",
//       auth: {
//         user: process.env.EMAIL_SERVER_USER,
//         pass: process.env.EMAIL_SERVER_PASSWORD,
//       },
//     });

//     // Email to admin
//     const adminMailOptions = {
//       from: `"Sendexa Leads" <${process.env.EMAIL_FROM}>`,
//       to: process.env.ADMIN_EMAIL,
//       subject: `New Contact Form Submission: ${subject}`,
//       html: generateAdminEmailHtml({ name, email, subject, message }),
//     };

//     // Email to user (confirmation)
//     const userMailOptions = {
//       from: `"Sendexa Support" <${process.env.EMAIL_FROM}>`,
//       to: email,
//       subject: `We've received your message: ${subject}`,
//       html: generateUserConfirmationHtml({ name, subject }),
//     };

//     // Send both emails
//     await Promise.all([
//       transporter.sendMail(adminMailOptions),
//       transporter.sendMail(userMailOptions),
//     ]);

//     return NextResponse.json(
//       { message: "Message sent successfully!" },
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json(
//       { error: "Failed to send message" },
//       { status: 500 }
//     );
//   }
// }

// function generateAdminEmailHtml(formData: {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }): string {
//   return `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
//         h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
//         .highlight { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px; }
//         p { margin: 8px 0; }
//         strong { color: #2c3e50; }
//       </style>
//     </head>
//     <body>
//       <h1>New Contact Form Submission</h1>
//       <div class="highlight">
//         <p><strong>Name:</strong> ${formData.name}</p>
//         <p><strong>Email:</strong> ${formData.email}</p>
//         <p><strong>Subject:</strong> ${formData.subject}</p>
//         <p><strong>Message:</strong></p>
//         <p>${formData.message.replace(/\n/g, '<br>')}</p>
//       </div>
//     </body>
//     </html>
//   `;
// }

// function generateUserConfirmationHtml(formData: {
//   name: string;
//   subject: string;
// }): string {
//   return `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <style>
//         body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
//         h1 { color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
//         .highlight { background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin-top: 20px; }
//         p { margin: 8px 0; }
//       </style>
//     </head>
//     <body>
//       <h1>Thank you for contacting us!</h1>
//       <p>Dear ${formData.name},</p>
//       <p>We've received your message regarding "${formData.subject}" and will get back to you shortly.</p>
//       <div class="highlight">
//         <p>This is an automated confirmation - you don't need to reply to this email.</p>
//       </div>
//       <p>Best regards,<br>Sendexa Team</p>
//     </body>
//     </html>
//   `;
// }


import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) { 
  try {
    const { name, email, subject, message } = await request.json();

    // Validate the input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Prepare both email requests
    const adminEmail = {
      from: `Sendexa Leads <${process.env.EMAIL_FROM}>`,
      to: process.env.ADMIN_EMAIL!,
      subject: `New Contact Form Submission: ${subject}`,
      html: generateAdminEmailHtml({ name, email, subject, message }),
    };

    const userConfirmation = {
      from: `Sendexa Support <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: `We've received your message: ${subject}`,
      html: generateUserConfirmationHtml({ name, subject }),
    };

    // Send both emails concurrently using Resend
    await Promise.all([
      resend.emails.send(adminEmail),
      resend.emails.send(userConfirmation)
    ]);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

// HTML template generators (unchanged from original)
function generateAdminEmailHtml(formData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          max-width: 600px; 
          margin: 0 auto; 
          padding: 20px; 
        }
        h1 { 
          color: #2c3e50; 
          border-bottom: 2px solid #3498db; 
          padding-bottom: 10px; 
        }
        .highlight { 
          background-color: #f8f9fa; 
          padding: 15px; 
          border-radius: 5px; 
          margin-top: 20px; 
        }
        p { 
          margin: 8px 0; 
        }
        strong { 
          color: #2c3e50; 
        }
      </style>
    </head>
    <body>
      <h1>New Contact Form Submission</h1>
      <div class="highlight">
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, '<br>')}</p>
      </div>
    </body>
    </html>
  `;
}

function generateUserConfirmationHtml(formData: {
  name: string;
  subject: string;
}): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { 
          font-family: Arial, sans-serif; 
          line-height: 1.6; 
          color: #333; 
          max-width: 600px; 
          margin: 0 auto; 
          padding: 20px; 
        }
        h1 { 
          color: #2c3e50; 
          border-bottom: 2px solid #3498db; 
          padding-bottom: 10px; 
        }
        .highlight { 
          background-color: #f8f9fa; 
          padding: 15px; 
          border-radius: 5px; 
          margin-top: 20px; 
        }
        p { 
          margin: 8px 0; 
        }
      </style>
    </head>
    <body>
      <h1>Thank you for contacting us!</h1>
      <p>Dear ${formData.name},</p>
      <p>We've received your message regarding "${formData.subject}" and will get back to you shortly.</p>
      <div class="highlight">
        <p>This is an automated confirmation - you don't need to reply to this email.</p>
      </div>
      <p>Best regards,<br>Sendexa Team</p>
    </body>
    </html>
  `;
}