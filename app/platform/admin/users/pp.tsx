"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Pp = () => {
  const { token, session, status,profildAuth } = useAuth();
  const router = useRouter();
  console.log("session-pp", session);
  console.log("status-pp", status);
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status, session, router]);
  return (
    <>
      <div>
        fron useAuth:
        {profildAuth?.role}
      </div>
      <div>สถานะ:{status}</div>
      <div>token:{token}</div>
    </>
  );
};

export default Pp;
