"use client";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/context/AuthContext";
import { getChargerStatus } from "@/service/charger/chargerSurveyCallAPI";
const Dashboard = () => {
  const { token, session } = useAuth();

  const {
    isPending,
    error,
    data: statuCharger,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["status-survey-charger", token],
    queryFn: async () => {
      try {
        const res: any = await getChargerStatus({
          token,
        });

        return res;
      } catch (err) {
        throw err;
      }
    },
  });

  console.log("statuCharger", statuCharger);

  const menu: any[] = [
    {
      id: 0,
      cu: statuCharger?.[0]?.count || 0,
      name: "Survey Scheduler Installation",
      cls: "border-orange-500 bg-orange-100",
    },

    {
      id: 1,
      cu: statuCharger?.[1]?.count || 0,
      name: "Visit Site Survey",
      cls: "border-red-500 bg-red-100",
    },
    {
      id: 2,
      cu: statuCharger?.[2]?.count || 0,
      name: "Onboard test with platform",
      cls: "border-green-500 bg-green-100",
    },

    {
      id: 3,
      cu: statuCharger?.[3]?.count || 0,
      name: "Ready to Revenue",
      cls: "border-teal-500 bg-teal-100",
    },

    {
      id: 4,
      cu: statuCharger?.[4]?.count || 0,
      name: "Process Installation",
      cls: "border-sky-500 bg-sky-100",
    },

    {
      id: 5,
      name: "Total",
      cu: statuCharger?.[5]?.count || 0,
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
                <div className="text-2xl font-bold">{item?.cu}</div>
                <p className="text-xs text-muted-foreground"></p>
              </CardContent>
            </Card>
          </>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
