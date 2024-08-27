import React, { ReactNode } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

const Main = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <>
      <div className="grid min-h-screen w-full pl-[56px] overflow-auto hide-scrollbar">
        <Sidebar />
        <div className="flex flex-col">
          <Header />

          <Content> {children}</Content>
        </div>
      </div>
    </>
  );
};

export default Main;
