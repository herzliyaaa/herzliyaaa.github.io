import nodemailer, { SentMessageInfo } from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

interface SendMailOptions {
  to: string[];
  subject: string;
  body: string;
}

export const sendMail = async ({
  to,
  subject,
  body,
}: SendMailOptions): Promise<SentMessageInfo> => {
  const { SMTP_EMAIL, SMTP_USER, SMTP_PASS } = process.env;

  const transportOptions: SMTPTransport.Options = {
    host: 'smtp-relay.sendinblue.com',
    port: 587,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  };

  const transport = nodemailer.createTransport(transportOptions);

  try {
    const testResult = await transport.verify();
    console.log('SMTP server is ready to take messages', testResult);
  } catch (e) {
    console.error('Error verifying SMTP transport:', e);
    throw new Error('Failed to verify SMTP transport.');
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    return sendResult;
  } catch (e) {
    console.error('Error sending email:', e);
    throw new Error('Failed to send email.');
  }
};
