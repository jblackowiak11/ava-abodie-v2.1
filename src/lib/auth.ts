import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const email = user.email || '';
      const isAllowed = email.endsWith("@abodie.co");

      if (!isAllowed) {
        throw new Error("Nice try. Ava is allergic to outsiders.");
      }

      return true;
    },
    async redirect({ baseUrl }) {
      return `${baseUrl}/chat`; // ✅ redirect to chat page
    },
    async session({ session }) {
      return session;
    },
  },
};
