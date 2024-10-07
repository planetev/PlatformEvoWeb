// context/AuthContext.tsx
"use client";
import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  use,
  useState,
} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/service/auth/authCallAPI";

interface resAuth {
  id: number;
  name: string;
  username: string;
  role: string;
}

interface AuthContextProps {
  token?: any;
  status: "loading" | "authenticated" | "unauthenticated";
  session: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
// eslint-disable-next-line react-hooks/rules-of-hooks

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const { data: session, status } = useSession();
  console.log("session-data 1", session);
  console.log("session-data 2", status);

  useEffect(() => {
    if (status === "authenticated" && session?.user?.accessToken) {
      localStorage.setItem("accessToken", session.user.accessToken);
    }
  }, [session, status]);
  const token = localStorage.getItem("accessToken");

  return (
    <AuthContext.Provider value={{ token, status, session }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
