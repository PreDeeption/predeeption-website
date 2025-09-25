import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { fullName, email, company, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    });

    await transporter.sendMail({
        from: email,
        to: "josh.trivedi@predeeption.com",
        subject: `Contact Form Submission from ${fullName}`,
        text: `Name: ${fullName}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
    });

    return NextResponse.json({ success: true });
}

export async function GET() {
  return NextResponse.json({message: "Contact page"});
}