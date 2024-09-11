"use client";
import Head from "@/components/custom/Head";
import Main from "@/components/main";
import React from "react";
import { useRouter } from "next/navigation";
import Surveies from "./survey/surveies";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useSearchParams } from 'next/navigation';
import Dashboard from "./survey/dashboard";

interface TabDashboard {
  value: string;
  label: string;
  component: React.ReactNode | string;
}
const MainPage = () => {
  const router = useRouter();




  const tabsDashboard: TabDashboard[] = [
    { value: "1", label: "Dashboard", component: <Dashboard /> },
    { value: "2", label: "Survey", component: <Surveies /> },
    { value: "3", label: "other", component: "other" },
  ];

  const handleClick = () => {
    router.push("/platform/charger/survey/createsurvey");
   };
   const searchParams = useSearchParams();
   const currentTab = searchParams.get('tab') || "1";

   const navigateToChargerTab = (tabValue: string) => {
     const newSearchParams = new URLSearchParams(searchParams.toString());
     newSearchParams.set('tab', tabValue);
     router.push(`/platform/charger?${newSearchParams.toString()}`);
   };

  return (
    <>
      <Main>
        <Head ltext={"Charger"} />

        <div className="w-full ">
        <Tabs defaultValue={currentTab} className="w-full" onValueChange={navigateToChargerTab}>
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
          {/* <Surveies /> */}
        </div>
      </Main>
    </>
  );
};

export default MainPage;
