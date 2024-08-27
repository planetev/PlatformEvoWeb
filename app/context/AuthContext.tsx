// context/AuthContext.tsx
"use client";
import { createContext, useContext, ReactNode, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

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
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/login");
  //   }
  // }, [status, router]);
  const token = session?.user?.accessToken;



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
