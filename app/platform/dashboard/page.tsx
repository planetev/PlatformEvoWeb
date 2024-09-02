"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import Dashboard from "../../modules/platform/dashboard/dashboard";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const { token, session, status } = useAuth();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
  return (
    <>
      <Dashboard />
    </>
  );
};

export default Page;
