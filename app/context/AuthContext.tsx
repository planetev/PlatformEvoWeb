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
  token?: string;
  status: "loading" | "authenticated" | "unauthenticated";
  session: any;
  profildAuth: any;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);
// eslint-disable-next-line react-hooks/rules-of-hooks


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const [token, setToken] = useState<any>("");

  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      const fetchToken = async () => {
        try {
          const res = await fetch("/pnev/api/get-token");
          const data = await res.json();
          console.log("Token fetched: ", data.token); // ตรวจสอบการดึง token
          if (res.ok) {
            setToken(data.token); // ตั้งค่า token
          } else {
            console.error("Failed to fetch token", res.status);
          }
        } catch (error) {
          console.error("Error fetching token:", error);
        }
      };

      fetchToken();
    }
  }, [status]);

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

        return res;
      } catch (err) {
        throw err;
      }
    },
  });

  useEffect(() => {}, [profildAuth]);



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
