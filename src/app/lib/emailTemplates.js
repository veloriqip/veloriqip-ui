export function enquiryEmailTemplate(d) {
  return `
    <h2>New IP Requirement Enquiry</h2>
    <p><b>Name:</b> ${d.fullName}</p>
    <p><b>Email:</b> ${d.email}</p>
    <p><b>Phone:</b> ${d.phone}</p>
    <p><b>Services:</b> ${d.services?.join(", ")}</p>
    <p><b>Message Source:</b> IP Enquiry Form</p>
    <p><b>Submitted:</b> ${new Date().toLocaleString()}</p>
  `;
}

export function supportEmailTemplate(d) {
  return `
    <h2>New Support Ticket</h2>
    <p><b>Name:</b> ${d.fullName}</p>
    <p><b>Email:</b> ${d.email}</p>
    <p><b>Message:</b></p>
    <p>${d.message}</p>
    <p><b>Submitted:</b> ${new Date().toLocaleString()}</p>
  `;
}

export function welcomeEmailHtml() {
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <title>Welcome to VeloriqIP</title>
    </head>
    <body style="margin:0; padding:0; background-color:#f6f8fb; font-family:Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding:24px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:8px; padding:32px;">
              
              <!-- Header -->
              <tr>
                <td style="text-align:center; padding-bottom:24px;">
                  <h1 style="margin:0; color:#111827;">Welcome to VeloriqIP 👋</h1>
                  <p style="color:#6b7280; margin-top:8px;">
                    Protecting ideas. Empowering innovation.
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="color:#374151; font-size:15px; line-height:1.6;">
                  <p>Dear Subscriber,</p>

                  <p>
                    Thank you for subscribing to <strong>VeloriqIP</strong>.
                    We’re glad to have you with us.
                  </p>

                  <p>
                    Our mission is to help innovators, startups, MSMEs, universities,
                    and enterprises <strong>protect, manage, and monetize intellectual property effectively</strong>.
                  </p>

                  <h3 style="color:#111827; margin-top:24px;">What you can expect from us:</h3>
                  <ul style="padding-left:18px;">
                    <li>Practical insights on patents, trademarks, copyrights & designs</li>
                    <li>Updates on IP laws, government schemes, and filing strategies</li>
                    <li>Actionable guidance for startups, researchers, and businesses</li>
                    <li>Exclusive resources to avoid IP risks and maximize value</li>
                  </ul>

                  <h3 style="color:#111827; margin-top:24px;">How we can help you right now:</h3>
                  <ul style="padding-left:18px;">
                    <li>🚀 <strong>Startup / MSME</strong> → Secure and scale your innovations</li>
                    <li>🎓 <strong>University / Researcher</strong> → Patent filing & commercialization</li>
                    <li>⚖️ <strong>Law Firm / Enterprise</strong> → Structured IP support & collaboration</li>
                  </ul>

                  <p>
                    <a href="https://veloriqip.com/service"
                      style="color:#2563eb; text-decoration:none;">
                      Explore our services →
                    </a>
                  </p>

                  <p style="margin-top:24px;">
                    If you ever have a question related to IP protection or strategy,
                    simply email us at info@veloriqip.com — our experts are happy to help.
                  </p>

                  <p style="margin-top:32px;">
                    Warm regards,<br />
                    <strong>VeloriqIP</strong>
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="border-top:1px solid #e5e7eb; padding-top:16px; font-size:13px; color:#6b7280;">
                  📧 info@veloriqip.com &nbsp;|&nbsp;
                  🌐 <a href="https://veloriqip.com" style="color:#2563eb; text-decoration:none;">
                    veloriqip.com
                  </a>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>`;
}
