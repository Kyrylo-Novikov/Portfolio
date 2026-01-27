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
    console.log('Sende jetzt an Resend für:', name);

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <contact@kyrylo-novikov.com>',
      to: ['contact@kyrylo-novikov.com'],
      subject: `Neue Anfrage von ${name}`,
      replyTo: email,
      html: `<p>${message}</p>`, // Kurz zum Testen
    });

    if (error) {
      console.error('Resend Fehler Details:', error);
      return new Response(JSON.stringify({ error }), { status: 400 });
    }

    console.log('Resend Erfolg:', data);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}
