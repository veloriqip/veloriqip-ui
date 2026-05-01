import { connectToDB } from "@/app/lib/db";
import { enquiryEmailTemplate } from "@/app/lib/emailTemplates";
import { sendAdminEmail } from "@/app/lib/mailer";

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.fullName || !data.email) {
      return new Response(
        JSON.stringify({ message: "Missing required fields" }),
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
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
