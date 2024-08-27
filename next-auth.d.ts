import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id?: number | null;
      role?: string | null;
      accessToken?: string; // Add the accessToken property here
    };
  }

  interface User {
    accessToken?: string; // Add the accessToken property here
  }
}
