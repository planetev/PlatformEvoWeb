"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Head from "@/components/custom/Head";
import Main from "@/components/main";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Listsurvey from "./survey/list-survey";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useSearchParams } from 'next/navigation';
import Dashboard from "./survey/dashboard";
import Dh from "./summary/dh";
interface TabDashboard {
  value: string;
  label: string;
  component: React.ReactNode | string;
}

const MainPage = () => {
  const router = useRouter();




  const tabsDashboard: TabDashboard[] = [
    { value: "1", label: "Dashboard", component: <Dashboard /> },
    { value: "2", label: "Survey", component: <Listsurvey /> },
    { value: "3", label: "SolarDashboard", component: <Dh /> },
  ];

  // const handleClick = () => {
  //   router.push("/platform/solar/survey/createsurvey");
  //  };
   const searchParams = useSearchParams();
   const currentTab = searchParams.get('tab') || "1";

   const navigateToSolarTab = (tabValue: string) => {
     const newSearchParams = new URLSearchParams(searchParams.toString());
     newSearchParams.set('tab', tabValue);
     router.push(`/platform/solar?${newSearchParams.toString()}`);
   };

  return (
    <>
      <Main>

        <Head ltext={"Solar"} icc={'Solar'} />
        {/* <div className="w-full">
          <Tabs defaultValue={currentTab} className="w-full" onValueChange={navigateToSolarTab}>
          <div className="flex items-center justify-between">
            <TabsList className="grid grid-cols-3 w-[600px]">
              {tabsDashboard.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

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
        </div> */}
         <div className="w-full  px-4 sm:px-6 lg:px-0">
        <Tabs defaultValue={currentTab} className="w-full" onValueChange={navigateToSolarTab}>
          <div className="flex items-center justify-between">
            <TabsList className="grid grid-cols-3 sm:grid-cols-3 lg:w-[600px] w-full mb-4">
              {tabsDashboard.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className='px-2 py-1 text-sm sm:text-base'>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

          </div>


            {tabsDashboard.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="w-full "
              >
                <div className="bg-gray-100 w-full  rounded-lg min-h-[300px]">
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
