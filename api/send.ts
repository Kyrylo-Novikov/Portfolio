import { Resend } from 'resend';

const apiKey = process.env['RESEND_API_KEY'];
if (!apiKey) {
  throw new Error('API not defined');
}
const resend = new Resend(apiKey);

export const config = {
  runtime: 'edge',
};

export default async function handler(request: Request) {
  if (request.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }
  try {
    const { name, email, message } = await request.json();
    console.log('Daten empfangen für:', name);
    const data = await resend.emails.send({
      from: 'Portfolio <portfolio@send.kyrylo-novikov.com>',
      to: ['contact@kyrylo-novikov.com'],
      subject: `Neue Anfrage von ${name}`,
      replyTo: email,

      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
