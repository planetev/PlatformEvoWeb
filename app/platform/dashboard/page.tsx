
"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import Dashboard from "../../modules/platform/dashboard/dashboard";

const Page = () => {
  const { token, session } = useAuth();
  // console.log('session', session)
  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     router.push("/login");
  //   }
  // }, [status, router]);
  return (
    <>
    <Dashboard />
    {/* <Main>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard page.</p>
      <p>Token: {session?.user?.role}</p>
      </Main> */}
    </>
  );
};

export default Page;
