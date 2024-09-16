// context/AuthContext.tsx
"use client";
import { createContext, useContext, ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "@/service/auth/authCallAPI";
import { getCookie } from "cookies-next";

interface resAuth {
  id: number;
  name: string;
  username: string;
  role: string;
}

interface AuthContextProps {
  token?: string;
  status: "loading" | "authenticated" | "unauthenticated";
  session: any;
  profildAuth: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider =  ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const token =  getCookie("access_token");

  console.log('auth_token', token)

  const {
    isPending,
    error,
    data: profildAuth,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["get-profile"],
    queryFn: async () => {
      try {
        const res: any = await getProfile({ token });
        console.log('auth-res', res)
        return res?.user
      } catch (err) {
        throw err;
      }
    },
  });

  console.log('profildAuth', profildAuth)

  const { data: session, status } = useSession();





  return (
    <AuthContext.Provider value={{ token, status, session, profildAuth }}>
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
