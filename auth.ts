import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import google from 'next-auth/providers/google';
import prisma from './prisma/client';
import credentials from 'next-auth/providers/credentials';
import * as bcryptjs from 'bcryptjs';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          name: 'email',
          placeholder: 'Email',
        },
        password: {
          label: 'Password',
          type: 'password',
          name: 'password',
          placeholder: 'Password',
        },
      },
      async authorize(credentials, request) {
        console.log(request);
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email as string,
          },
        });
        if (!user) {
          return null;
        }
        console.log(credentials.password);
        console.log(user.hashedPassword);
        const passwordsMatch = await bcryptjs.compare(
          credentials.password as string,
          user.hashedPassword as string
        );
        if (!passwordsMatch) {
          return null;
        } else {
          return user;
        }
      },
    }),
    google,
  ],
  callbacks: {
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
  session: {
    strategy: 'jwt',
  },
});
