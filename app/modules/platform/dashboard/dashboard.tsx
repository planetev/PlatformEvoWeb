import Head from '@/components/custom/Head'
import Main from '@/components/main'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React from 'react'

interface TabDashboard {
  value: string;
  label: string;
  component: React.ReactNode | string;
}

const Dashboard = () => {
  const tabsDashboard: TabDashboard[] = [
    { value: "charger", label: "Charger", component:   "1" },
    { value: "solar", label: "Solar", component:   "2" },
    { value: "car", label: "Car", component:    "3" },
  ];
  return (
    <>
      <Main>
      <Head ltext={"Dashboard"} />
      <div className="w-full">
      <Tabs defaultValue="charger" className="w-full">
            <TabsList className="grid grid-cols-3 w-[600px]">
            {tabsDashboard.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
            </TabsList>

            {/* ปรับขนาดของ TabsContent ให้แสดงเต็มพื้นที่ */}
            {tabsDashboard.map((tab) => (
            <TabsContent key={tab.value} value={tab.value} className="w-full h-full">
              <div className="bg-gray-100 h-full w-full p-4">
                {tab.component}
              </div>
            </TabsContent>
          ))}
          </Tabs>
      </div>
      </Main>
    </>
  )
}

export default Dashboard