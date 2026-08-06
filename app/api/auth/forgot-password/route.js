import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";
import crypto from 'crypto';

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      // Don't leak whether the email exists
      return NextResponse.json({ message: "Success" }, { status: 200 });
    }

    const token = crypto.randomBytes(32).toString('hex');
    const expires = new Date(Date.now() + 3600 * 1000); // 1 hour from now

    // Save token to DB
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token,
        expires
      }
    });

    const resetLink = `${process.env.NEXTAUTH_URL || 'http://localhost:3001'}/en/reset-password?token=${token}&email=${email}`;
    
    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-w: 600px; margin: 0 auto;">
        <h2 style="color: #fc7504;">Baba Bhairav Sthan Trust</h2>
        <p>You requested a password reset.</p>
        <p>Click the button below to reset your password. This link is valid for 1 hour.</p>
        <a href="${resetLink}" style="display: inline-block; padding: 10px 20px; background-color: #fc7504; color: white; text-decoration: none; border-radius: 5px;">Reset Password</a>
        <p>If you didn't request this, please ignore this email.</p>
      </div>
    `;

    await sendEmail({
      to: email,
      subject: "Password Reset - Baba Bhairav Sthan",
      html: htmlBody
    });

    return NextResponse.json({ message: "Success" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}
