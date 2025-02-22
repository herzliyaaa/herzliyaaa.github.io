import { NextRequest, NextResponse } from 'next/server';
import { sendMail } from '@/lib/mailer';

interface EmailData {
  email: string[];
  subject: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: EmailData = await req.json();
    console.log('🚀 ~ POST ~ body:', body);
    const { email, subject, message } = body;

    const personalEmail = [
      'herzliabarangan@gmail.com',
      'herzliajanebarangan@gmail.com',
    ];
    await sendMail({
      to: personalEmail,
      subject: `Portfolio: ${subject}`,
      body: `
    From: ${email}
    
    Message:
    ${message}
    `,
    });

    return NextResponse.json({
      success: true,
      message: 'Email sent successfully.',
    });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Error sending email.' },
      { status: 500 }
    );
  }
}
