import { getToken } from 'next-auth/jwt';
import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  //   const token = await getToken({
  //     req: request,
  //     secret: process.env.AUTH_SECRET!,
  //     salt: '',

  //   });
  const cookieStore = cookies();
  const token = cookieStore.get('authjs.session-token')?.value!;
  console.log(token);
  const payload = jwt.verify(token, process.env.AUTH_SECRET!);
  return NextResponse.json(payload);
}
