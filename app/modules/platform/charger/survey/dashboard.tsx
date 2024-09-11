"use client";
import React from 'react'

import {
 Card,
 CardContent,
 CardDescription,
 CardFooter,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";
import { DollarSign } from 'lucide-react';
const Dashboard = () => {
 const menu: any[] = [
  {
    id: 0,
    name: "Survey Scheduler Installation",
    cls: "border-orange-500 bg-orange-100",
  },

  {
    id: 1,
    name: "Visit Site Survey",
    cls: "border-red-500 bg-red-100",
  },
  {
    id: 2,
    name: "Onboard test with platform",
    cls: "border-green-500 bg-green-100",
  },

  {
    id: 3,
    name: "Ready to Revenue",
    cls: "border-teal-500 bg-teal-100",
  },

  {
    id: 4,
    name: "Process Installation",
    cls: "border-sky-500 bg-sky-100",
  },

  {
    id: 5,
    name: "Total",
    cls: "border-gray-700 bg-gray-900 text-white",
  },
];
  return (
    <>
     <div className="grid gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-6  mb-4">
        {menu.map((item, x) => (
          <>
            <Card
              key={x}
              x-chunk="dashboard-01-chunk-0 "
              className={`border-2 border-dashed ${item.cls} `}
            >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {item.name}
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">27</div>
                <p className="text-xs text-muted-foreground">
                  +20.1% from last month
                </p>
              </CardContent>
            </Card>
          </>
        ))}
      </div>
    </>
  )
}

export default Dashboard