"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Pp = () => {
  const { token, session, status } = useAuth();
  const router = useRouter();
  console.log("session-pp", session);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, router]);
  return (
    <>
      <div>
        fron useAuth:
        {session?.user.role}
      </div>
      <div>สถานะ:{status}</div>
      <div>token:{token}</div>
    </>
  );
};

export default Pp;
