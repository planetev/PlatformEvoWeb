"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Head from "@/components/custom/Head";
import Main from "@/components/main";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Listsurvey from "./survey/list-survey";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
interface TabDashboard {
  value: string;
  label: string;
  component: React.ReactNode | string;
}

const MainPage = () => {
  const router = useRouter();

  const tabsDashboard: TabDashboard[] = [
    { value: "1", label: "Dashboard", component: "1" },
    { value: "2", label: "Survey", component: <Listsurvey /> },
    { value: "3", label: "other", component: "other" },
  ];

  const handleClick = () => {
    router.push("/platform/solar/survey/createsurvey");
   };

  return (
    <>
      <Main>
        <Head ltext={"Solar"} />
        <div className="w-full">
          <Tabs defaultValue="1" className="w-full">
          <div className="flex items-center justify-between">
            <TabsList className="grid grid-cols-3 w-[600px]">
              {tabsDashboard.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <Button
                size="sm"
                className="w-30 h-10 flex items-center space-x-2"
                onClick={handleClick}
              >
                <CirclePlus className="h-4 w-4" />
                <span>เพื่มข้อมูล</span>
              </Button>
          </div>


            {tabsDashboard.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="w-full h-full"
              >
                <div className="bg-gray-100 h-full w-full p-4">
                  {tab.component}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </Main>
    </>
  );
};

export default MainPage;
