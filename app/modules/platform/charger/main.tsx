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

        <div className="w-full  px-4 sm:px-6 lg:px-0">
        <Tabs defaultValue={currentTab} className="w-full" onValueChange={navigateToChargerTab}>
          <div className="flex items-center justify-between">
            <TabsList className="grid grid-cols-3 sm:grid-cols-3 lg:w-[600px] w-full mb-4">
              {tabsDashboard.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className='px-2 py-1 text-sm sm:text-base'>
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
                className="w-full "
              >
                <div className="bg-gray-100 w-full p-4 rounded-lg min-h-[300px]">
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
