import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import axios from "axios";

const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        console.log('credentials', credentials)
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
          console.log('res', res)

          const data = res.data.data;

          if (data) {
            return data;
          }

          return null;
        } catch (error) {
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
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
  },
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: true,
      },
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === 'development',
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };

















// import NextAuth, { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { JWT } from "next-auth/jwt";
// import axios from "axios";

// const options: NextAuthOptions = {
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials) {
//         console.log('credentials', credentials)
//         if (!credentials) {
//           return null;
//         }

//         try {
//           const res = await axios.post(
//             process.env.NEXT_PUBLIC_API + "auth/login",
//             credentials,
//             {
//               headers: { "Content-Type": "application/json" },
//             }
//           );
//           console.log('res', res)

//           const data = res.data.data;

//           if (data) {
//             return data;
//           }

//           return null;
//         } catch (error) {
//           return null;
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     // async jwt({ token, user }: { token: JWT; user?: any }) {
//     //   if (user) {
//     //     token.id = user.userId;
//     //     token.role = user.role;
//     //     token.accessToken = user.accessToken;
//     //   }
//     //   return token;
//     // },
//     jwt: async ({ token, user ,account }:any) => {
//       if (account) {
//         token.id = account.id,
//         token.role = account.role,
//         token.accessToken = account.accessToken
//       }
//       return token
//     },

//     session: async ({ session, token }:any) => {
//       if (session.user) {
//         session.user.id  = token.id,
//         session.user.role = token.role
//         session.user.accessToken = token.accessToken
//       }
//       return session
//     }

//     // async session({ session, token  }: { session: any; token: JWT }) {
//     //   if (token) {
//     //     session.user = {
//     //       id: token.id,
//     //       role: token.role,
//     //       accessToken: token.accessToken,
//     //     };
//     //   }
//     //   return session;
//     // },
//   },
//   session: {
//     strategy: "jwt",
//     maxAge:  24 * 60 * 60,
//   },
//   jwt:{
//     secret: process.env.NEXTAUTH_SECRET
//   },
//   pages: {
//     signIn: "/login",
//     signOut: "/login",
//   },

//   cookies: {
//     sessionToken: {
//       name: `__Secure-next-auth.session-token`, // ชื่อ cookie
//       options: {
//         httpOnly: true, // ป้องกันการเข้าถึง cookie จาก client-side
//         sameSite: "lax", // ป้องกัน CSRF attack
//         path: "/", // เส้นทางที่ cookie ใช้ได้
//         secure: process.env.NODE_ENV === "production", // ใช้ `secure` ใน production (https เท่านั้น)
//       },
//     },
//     callbackUrl: {
//       name: `__Secure-next-auth.callback-url`,
//       options: {
//         sameSite: "lax",
//         path: "/",
//         secure: process.env.NODE_ENV === "production",
//       },
//     },
//     csrfToken: {
//       name: `__Host-next-auth.csrf-token`,
//       options: {
//         httpOnly: true,
//         sameSite: "lax",
//         path: "/",
//         secure: process.env.NODE_ENV === "production",
//       },
//     },
//   },

//   secret: process.env.NEXTAUTH_SECRET,
// };

// const handler = NextAuth(options);

// export { handler as GET, handler as POST };
