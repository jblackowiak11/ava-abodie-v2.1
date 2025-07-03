import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  const { message } = await req.json();

  const chat = await openai.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are Ava, the helpful assistant at Abodie Construction. Be witty but useful.' },
      { role: 'user', content: message },
    ],
  });

  return NextResponse.json({ reply: chat.choices[0].message.content });
}
