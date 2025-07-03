import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
async signIn() {
      // Optional: restrict to @abodie.co
      // return user.email?.endsWith("@abodie.co") ?? false;
      return true;
    },
  },
});

export { handler as GET, handler as POST };
