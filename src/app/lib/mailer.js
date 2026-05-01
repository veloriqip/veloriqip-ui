export async function sendAdminEmail({ subject, html, replyTo }) {
  try {
    const recipients = process.env.RECEIVER_ADMIN_EMAILS.split(",").map((e) =>
      e.trim(),
    );
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "VeloriqIP",
          email: process.env.VERIFIED_SENDER_EMAIL,
        },
        to: recipients.map((email) => ({ email })),
        subject,
        htmlContent: html,
        replyTo: {
          email: replyTo,
        },
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("❌ Brevo error:", data);
      throw new Error("Email sending failed");
    }
    return data;
  } catch (err) {
    console.error("❌ Email error:", err);
    throw err;
  }
}

export async function sendSubscriberEmail({ email, subject, html }) {
  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "VeloriqIP",
          email: process.env.VERIFIED_SENDER_EMAIL,
        },
        subject: subject,
        to: [{ email: email }],
        htmlContent: html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("❌ Brevo error:", data);
      throw new Error("Email sending failed");
    }
    return data;
  } catch (err) {
    console.error("❌ Email error:", err);
    throw err;
  }
}
