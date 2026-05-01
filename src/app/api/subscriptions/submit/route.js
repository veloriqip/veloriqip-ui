import { connectToDB } from "@/app/lib/db";
import { welcomeEmailHtml } from "@/app/lib/emailTemplates";
import { sendSubscriberEmail } from "@/app/lib/mailer";

export async function POST(req) {
  try {
    const data = await req.json();

    if (!data.email) {
      return new Response(JSON.stringify({ message: "Missing email id" }), {
        status: 400,
      });
    }

    const db = await connectToDB();
    const collection = db.collection("subscriptions");
    await collection.insertOne({ ...data, createdAt: new Date() });

    await sendSubscriberEmail({
      email: data?.email,
      subject: "Thanks for Subscribing | Protect Your Ideas with VeloriqIP",
      html: welcomeEmailHtml(),
    });

    return new Response(
      JSON.stringify({ message: "Subscribed successfully" }),
      { status: 200 },
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: "Server error" }), {
      status: 500,
    });
  }
}
