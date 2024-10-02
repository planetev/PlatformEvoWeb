"use client";
import React, { useEffect } from "react";
import MainPage from "@/app/modules/platform/charger/main";

import { useAuth } from "@/app/context/AuthContext";
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
      <MainPage />
    </>
  );
};

export default Page;
