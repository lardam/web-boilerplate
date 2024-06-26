import { EmailTemplate } from '@/components/mail/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['dami028@hotmail.com.ar'],
      subject: 'Hello world',
      react: EmailTemplate({ firstName: 'John' }),
      text: "test"
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
