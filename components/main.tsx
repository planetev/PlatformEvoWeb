"use client";
import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";
import { getProfile } from "@/service/auth/authCallAPI";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";

const Main = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const token = getCookie("access_token");

  const {
    isPending,
    error,
    data: userId,
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


  return (
    <>

      <div className="grid min-h-screen w-full pl-[56px] overflow-auto hide-scrollbar">
        <Sidebar />
        <div className="flex flex-col">
          <Header userId={userId} />

          <Content> {children}</Content>
        </div>
      </div>
    </>
  );
};

export default Main;
