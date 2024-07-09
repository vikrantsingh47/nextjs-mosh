import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import bcryptjs from 'bcryptjs';

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(5),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const validation = schema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  console.log('body');
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });
  if (user) {
    NextResponse.json({ error: 'User already existes' }, { status: 400 });
  }
  const hashedPassword = await bcryptjs.hash(body.password, 10);
  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      hashedPassword,
    },
  });
  return NextResponse.json({ email: newUser.email });
}
