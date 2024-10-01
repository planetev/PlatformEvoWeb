"use client";
import React, { ReactNode } from "react";
import { getProfile } from "@/service/auth/authCallAPI";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import Header from "./new/Header";
import Sidebar from "./new/Sidebar";
import Content from "./new/Content";

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
      <div className="flex min-h-screen overflow-hidden bg-gray-50  hide-scrollbar">
        <Sidebar />
        <div className="flex-1 flex flex-col min-h-screen overflow-hidden md:ml-16  hide-scrollbar">
          <Header userId={userId} />
          <Content> {children}</Content>
        </div>
      </div>
      {/* <div className="grid min-h-screen w-fullpl-[56px] overflow-auto hide-scrollbar bg-gray-50">
        <Sidebar />
        <div className="flex flex-col   w-full">
          <Header userId={userId} />

          <Content> {children}</Content>
        </div>
      </div> */}
    </>
  );
};

export default Main;
