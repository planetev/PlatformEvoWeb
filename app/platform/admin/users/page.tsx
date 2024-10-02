"use client";
import { useAuth } from "@/app/context/AuthContext";
import Listuser from "@/app/modules/admin/users/listuser";
import React, { useEffect } from "react";

const Page = () => {
  return (
    <>
      <Listuser />
    </>
  );
};

export default Page;
