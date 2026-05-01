import { connectToDB } from "@/app/lib/db";
import { supportEmailTemplate } from "@/app/lib/emailTemplates";
import { sendAdminEmail } from "@/app/lib/mailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const { fullName, email, message } = body;

    if (!fullName || !email || !message) {
      return new Response(
        JSON.stringify({ message: "All fields are required" }),
        { status: 400 }
      );
    }

    const db = await connectToDB();

    const ticket = {
      fullName,
      email,
      message,
      status: "open",
      createdAt: new Date(),
      userAgent: req.headers.get("user-agent"),
      pageUrl: req.headers.get("referer"),
    };

    await db.collection("support_tickets").insertOne(ticket);

    await sendAdminEmail({
      subject: "New Support Ticket",
      replyTo: email,
      html: supportEmailTemplate(body),
    });

    return Response.json({
      success: true,
      message: "Support ticket submitted successfully",
    });
  } catch (error) {
    console.error("Support ticket error:", error);

    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
