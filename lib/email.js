import nodemailer from 'nodemailer';

// Configure the transporter with environment variables
// It will gracefully fall back if credentials are missing
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, 
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmail = async ({ to, subject, html }) => {
  const isSmtpConfigured = !!(process.env.SMTP_USER && process.env.SMTP_PASS);

  if (!isSmtpConfigured) {
    // Development / Stub mode
    console.log('----------------------------------------------------');
    console.log('📧 DEVELOPMENT MODE: Simulated Email Sending');
    console.log(`TO: ${to}`);
    console.log(`SUBJECT: ${subject}`);
    console.log(`BODY: \n${html}`);
    console.log('----------------------------------------------------');
    return { success: true, message: 'Email logged to console' };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Baba Bhairav Sthan" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
    console.log('Message sent: %s', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};
