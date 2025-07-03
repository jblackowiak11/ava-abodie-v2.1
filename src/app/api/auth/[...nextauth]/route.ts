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
  async signIn({ user }) {
    const email = user?.email || '';
    return email.endsWith('@abodie.co');
  },
  async session({ session }) {
    return session;
  },
}

});

export { handler as GET, handler as POST };
