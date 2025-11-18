import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields required" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: subject || "Portfolio Message",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `
    });

    return res.status(200).json({ success: true, message: "Email sent!" });

  } catch (error) {
    console.error("MAIL ERROR:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
