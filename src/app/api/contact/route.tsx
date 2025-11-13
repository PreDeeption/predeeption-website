import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { fullName, email, company, message } = await request.json();

  try {
    const res = await fetch("https://api.postmarkapp.com/email", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "X-Postmark-Server-Token": process.env.POSTMARK_API_TOKEN as string,
      },
      body: JSON.stringify({
        From: "josh.trivedi@predeeption.com", // must be from a verified domain in Postmark
        To: [
          "josh.trivedi@predeeption.com",
          "christophe.verdouq@predeeption.com",
          "arnaud.demortiere@predeeption.com"
        ].join(","), // can add more in the To: [] if needed          
        ReplyTo: email,
        Subject: `Contact Form Submission from Predeeption Website`,
        HtmlBody: `
  <div style="font-family: 'Segoe UI', Arial, sans-serif; background-color: #f9fafb; padding: 20px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); overflow: hidden;">
      <div style="background-color: #facc15; padding: 16px 24px; text-align: center;">
        <h2 style="margin: 0; color: #000; font-size: 20px;">📩 New Contact Form Submission</h2>
      </div>

      <div style="padding: 24px; color: #333;">
        <p style="font-size: 16px; margin-bottom: 8px;">
          <strong>Name:</strong> ${fullName}
        </p>
        <p style="font-size: 16px; margin-bottom: 8px;">
          <strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
        </p>
        <p style="font-size: 16px; margin-bottom: 8px;">
          <strong>Company:</strong> ${company || "—"}
        </p>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;" />
        <p style="font-size: 16px; margin-bottom: 8px;">
          <strong>Message:</strong>
        </p>
        <div style="background-color: #f3f4f6; border-radius: 8px; padding: 16px; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">
          ${message.replace(/\n/g, "<br/>")}
        </div>
      </div>

      <div style="background-color: #f9fafb; text-align: center; padding: 16px; font-size: 13px; color: #6b7280;">
        <p style="margin: 0;">This message was sent via your website’s contact form.</p>
      </div>
    </div>
  </div>
`,

        TextBody: `Name: ${fullName}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
        MessageStream: "outbound", // or a custom stream if you created one
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("❌ Postmark API Error:", err);
      return NextResponse.json(
        { success: false, error: err },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Contact API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ message: "Contact page" });
}
