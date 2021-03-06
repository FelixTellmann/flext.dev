import { DB } from "_server/settings/prisma";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import TwitterProvider from "next-auth/providers/twitter";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import EmailProvider from "next-auth/providers/email";

export default NextAuth({
  // Configure one or more authentication providers
  adapter: PrismaAdapter(DB),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    maxAge: 120 * 24 * 60 * 60, // 120 days
  },
  // debug: true,
  providers: [
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID as string,
      clientSecret: process.env.TWITTER_CLIENT_SECRET as string,
      version: "2.0", // opt-in to Twitter OAuth 2.0
    }),
    // ...add more providers here
  ],
  /*callbacks: {
    signIn: async ({ user, account }) => {
      console.log({ user, account });
      return true;
    },
  },*/
});
