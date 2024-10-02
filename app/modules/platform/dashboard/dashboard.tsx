"use client";
import Head from "@/components/custom/Head";
import Main from "@/components/main";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import DashboardCharger from "../charger/survey/dashboard";
import DashboardSolar from "../solar/survey/dashboard";

interface TabDashboard {
  value: string;
  label: string;
  component: React.ReactNode | string;
}

const Dashboard = () => {
  const tabsDashboard: TabDashboard[] = [
    { value: "charger", label: "Charger", component: <DashboardCharger /> },
    { value: "solar", label: "Solar", component: <DashboardSolar /> },
    { value: "car", label: "Car", component: "3" },
  ];
  return (
    <>
      <Main>
        <Head ltext={"Overview"} icc="Overview" />
        <div className="w-full px-4 sm:px-6 lg:px-0">
          <Tabs defaultValue="charger" className="w-full">
            <TabsList className="grid grid-cols-3 sm:grid-cols-3 lg:w-[600px] w-full mb-4">
              {tabsDashboard.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="px-2 py-1 text-sm sm:text-base"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* ปรับขนาดของ TabsContent ให้แสดงเต็มพื้นที่ */}
            {tabsDashboard.map((tab) => (
              <TabsContent key={tab.value} value={tab.value} className="w-full">
                <div className="bg-gray-100 w-full p-4 rounded-lg min-h-[300px]">
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

export default Dashboard;
