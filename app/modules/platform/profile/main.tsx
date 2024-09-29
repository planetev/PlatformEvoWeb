"use client";
import Head from "@/components/custom/Head";
import Main from "@/components/main";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import Personalinfo from "./personal-info";
import Changepassword from "./change-password";
import { useQuery } from "@tanstack/react-query";
import { getUserById } from "@/service/users/userCallAPI";
import { useAuth } from "@/app/context/AuthContext";
import Settings from "./settings";

const MainProfile = ({ id }: any) => {
  const [activeSection, setActiveSection] = useState("personal-info");

  const { token, session } = useAuth();

  const {
    isPending,
    error,
    data: getUserprofileId,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["get-id-user-profile"],
    queryFn: async () => {
      try {
        const res: any = await getUserById({ id, token });

        return res;
      } catch (err) {
        throw err;
      }
    },
  });
  console.log('getUserprofileId', getUserprofileId)
  return (
    <Main>
      <Head ltext={"โปรไฟล์ผู้ใช้"} />

      <div className="flex">
        <div className="w-48 flex-shrink-0 space-y-2">
          <Button
            variant={activeSection === "personal-info" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("personal-info")}
          >
            ข้อมูลส่วนตัว
          </Button>
          <Button
            variant={activeSection === "change-password" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("change-password")}
          >
            เปลี่ยนรหัสผ่าน
          </Button>
          <Button
            variant={activeSection === "settings" ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => setActiveSection("settings")}
          >
            การตั้งค่า
          </Button>
        </div>
        <div className="flex-grow ml-6">
        <Personalinfo  activeSection={activeSection} setActiveSection={setActiveSection} getUserprofileId={getUserprofileId}/>
        <Changepassword  activeSection={activeSection} setActiveSection={setActiveSection}/>
        <Settings  activeSection={activeSection} setActiveSection={setActiveSection}/>
        </div>
      </div>
    </Main>
  );
};

export default MainProfile;
