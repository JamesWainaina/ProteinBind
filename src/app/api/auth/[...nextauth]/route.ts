import { loginUser } from '@/lib/actions/user.action'
import NextAuth from 'next-auth'
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "email"},
                password: { label: "Password", type: "password"},
            } as any,
            async authorize(credentials) {
                if (credentials?.email && credentials?.password) {
                    const user = await loginUser(credentials.email, credentials.password);
                    if (user) {
                        return user;
                    }else {
                        return null;
                    }
                }
                return null;
            },
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60,
    },
    callbacks: {
        async jwt({ token, user}) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        async session({ session, token}: {session: any; token: any}) {
            if (token) {
                session.id = token.id;
            }
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export const GET = handler;
export const POST = handler;