"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import Dashboard from "../../modules/platform/dashboard/dashboard";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Page = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  console.log('first-session 1', session)
  console.log('first-session 2', status)
  // useEffect(() => {
  //   if (status === "loading") {
  //     console.log('loading')
  //     return; // รอให้ session โหลดก่อน
  //   }
  //   if (status === "unauthenticated") {
  //     router.push("/pnev/login");
  //   }
  // }, [status, router]);
  return (
    <>
    {status === "loading" && <div>Loading...</div>}
      <Dashboard />
    </>
  );
};

export default Page;
