import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { verify } from "argon2"
import { db } from "~/server/db";
// import DiscordProvider from "next-auth/providers/discord";
import { env } from "~/env";
import { Session } from "inspector";
// import Email from "next-auth/providers/email";

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      email: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  // callbacks: {
  //   session: ({ session, user }) => ({
  //     ...session,
  //     user: {
  //       ...session.user,
  //       email: user.email,
  // //     },
  //   }),
  callbacks: {
    async jwt({token, user, session}){
      return token;
    },
    async session({ session, token, user }) {
      console.log("4session callback", {session, user, token})
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  adapter: PrismaAdapter(db),
  providers: [
          GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET
          }),

          Credentials({
            name: "Credentials",
            credentials: {
              email: {
                label: "email:",
                type: "text",
                placeholder: "your-email",
              },
              password: {
                label: "password:",
                type: "password",
                placeholder: "your-password",
              },
            },
            async authorize(credentials) {
              try {
                const foundUser = await db.user.findUnique({ where:{email: credentials?.email,}, });

                if (foundUser) {
                  console.log("User Exists");
                  const match = await verify(
                    
                    foundUser.password,credentials.password
                  );

                  if (match) {
                    console.log("Good Pass");
                    delete foundUser.password;
                    console.log(Session)
                    // foundUser["role"] = "Unverified Email";
                    return foundUser;
                  }
                  else{
                    console.log("incorrect password")
                  }
                }
              } catch (error) {
                console.log(error);
              }
              return null;
            },
          }),
      ],
      session: {
        strategy: "jwt",
      },
      pages: {
        signIn: '/Login',
      },
      secret: process.env.NEXTAUTH_SECRET,
      
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    /**
     * ...add more providers here.
     *
     * Most other providers require a bit more work than the Discord provider. For example, the
     * GitHub provider requires you to add the `refresh_token_expires_in` field to the Account
     * model. Refer to the NextAuth.js docs for the provider you want to use. Example:
     *
     * @see https://next-auth.js.org/providers/github
     */
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);

// export { handler as GET, handler as POST };