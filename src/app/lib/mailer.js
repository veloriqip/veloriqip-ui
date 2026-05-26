const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(email) {
  if (typeof email !== "string") return "";

  const stripped = email
    .trim()
    .replace(/[<>]/g, "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();

  const extracted = stripped.match(
    /([a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+)/i
  );

  return extracted ? extracted[1] : stripped;
}

export function isValidEmail(email) {
  return EMAIL_REGEX.test(normalizeEmail(email));
}

export async function sendAdminEmail({ subject, html, replyTo }) {
  try {
    const recipients = process.env.RECEIVER_ADMIN_EMAILS.split(",")
      .map((email) => normalizeEmail(email))
      .filter(Boolean);

    if (replyTo) {
      const normalizedReplyTo = normalizeEmail(replyTo);
      if (!isValidEmail(normalizedReplyTo)) {
        throw new Error("Invalid reply-to email address");
      }
    }

    const payload = {
      sender: {
        name: "Veloriq IP",
        email: normalizeEmail(process.env.VERIFIED_SENDER_EMAIL),
      },
      to: recipients.map((email) => ({ email })),
      subject,
      htmlContent: html,
    };

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("❌ Brevo error:", data);
      throw new Error(data?.message || "Email sending failed");
    }
    return data;
  } catch (err) {
    console.error("❌ Email error:", err);
    throw err;
  }
}

export async function sendSubscriberEmail({ email, subject, html }) {
  try {
    const normalizedEmail = normalizeEmail(email);

    if (!isValidEmail(normalizedEmail)) {
      throw new Error("Invalid recipient email address");
    }

    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: {
          name: "Veloriq IP",
          email: normalizeEmail(process.env.VERIFIED_SENDER_EMAIL),
        },
        subject: subject,
        to: [{ email: normalizedEmail }],
        htmlContent: html,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("❌ Brevo error:", data);
      throw new Error(data?.message || "Email sending failed");
    }
    return data;
  } catch (err) {
    console.error("❌ Email error:", err);
    throw err;
  }
}
