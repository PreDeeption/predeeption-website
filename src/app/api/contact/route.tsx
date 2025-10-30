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
          "josh.trivedi@predeeption.com"
        ].join(","), // can add more in the To: [] if needed          
        ReplyTo: email,
        Subject: `Contact Form Submission from ${fullName}`,
        HtmlBody: `
          <div style="font-family: Arial, sans-serif; color: #333;">
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Company:</strong> ${company || "—"}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br/>")}</p>
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
