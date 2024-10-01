import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import axios from "axios";
import { cookies } from "next/headers";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          const res = await axios.post(
            process.env.NEXT_PUBLIC_API + "auth/login",
            credentials,
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          const data = res.data.data;

          console.log("data-auth", data.accessToken);

          if (data) {
            cookies().set("access_token", data?.accessToken);
            return data;
          }
          // ,{
          //   // httpOnly: true,
          //   // sameSite: "lax",
          //   // secure: process.env.NODE_ENV === "production",
          //   //secure:true,

          // }

          return null;
        } catch (error) {
          // console.log("first", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.userId;
        token.role = user.role;
        token.accessToken = user.accessToken;
      }

      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      if (token) {
        session.user = {
          id: token.id,
          role: token.role,
          accessToken: token.accessToken,
          // เพิ่มคุณสมบัติผู้ใช้อื่นๆ ตามที่ต้องการ
        };
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  cookies: {
    sessionToken: {
      // name: `__Secure-next-auth.session-token`,
      name: `access_token_dd`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };
