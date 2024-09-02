"use client";
import Head from "@/components/custom/Head";
import Main from "@/components/main";
import React from "react";

import Surveies from "./survey/surveies";

const MainPage = () => {
  return (
    <>
      <Main>
        <Head ltext={"Charger"} />

        <div className="w-full ">
          {" "}
          <Surveies />
        </div>
      </Main>
    </>
  );
};

export default MainPage;
