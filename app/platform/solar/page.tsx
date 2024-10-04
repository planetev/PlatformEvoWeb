"use client";
import { useAuth } from "@/app/context/AuthContext";
import MainPage from "@/app/modules/platform/solar/main";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { token, session, status } = useAuth();

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/login");
  //   }
  // }, [status, router]);
  return (
    <>
      <MainPage />
    </>
  );
};

export default Page;
