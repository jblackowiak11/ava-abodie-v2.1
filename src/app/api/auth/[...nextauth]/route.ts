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
  async signIn({ user, account, profile }) {
    const email = user?.email || '';
    if (!email.endsWith('@abodie.co')) {
      throw new Error('Unauthorized');
    }
    return true;
  },
  async session({ session }) {
    return session;
  },
},
pages: {
  error: '/denied', // Custom error page
},
});

export { handler as GET, handler as POST };
