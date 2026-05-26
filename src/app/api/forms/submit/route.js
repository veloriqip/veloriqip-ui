import { connectToDB } from "@/app/lib/db";
import { enquiryEmailTemplate } from "@/app/lib/emailTemplates";
import { isValidEmail, normalizeEmail, sendAdminEmail } from "@/app/lib/mailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const data = {
      ...body,
      fullName: body?.fullName?.trim() || "",
      email: normalizeEmail(body?.email),
      organization: body?.organization?.trim() || "",
      source: body?.source?.trim() || "",
    };

    if (!data.fullName || !data.email) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
        { status: 400 }
      );
    }

    if (!isValidEmail(data.email)) {
      return new Response(
        JSON.stringify({ message: "Please enter a valid email address" }),
        { status: 400 }
      );
    }

    const db = await connectToDB();
    const collection = db.collection("queries");
    await collection.insertOne({ ...data, createdAt: new Date() });

    await sendAdminEmail({
      subject: "New IP Requirement Enquiry",
      replyTo: data?.email,
      html: enquiryEmailTemplate(data),
    });

    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      { status: 200 }
    );
  } catch (err) {
    console.error(err);
    const status =
      err.message === "Invalid reply-to email address" ? 400 : 500;

    return new Response(
      JSON.stringify({ message: err.message || "Server error" }),
      { status }
    );
  }
}
