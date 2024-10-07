import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      role: string ;
      accessToken: string; // Add the accessToken property here
    };
  }

  interface User {
    accessToken: string; // Add the accessToken property here
  }
}
