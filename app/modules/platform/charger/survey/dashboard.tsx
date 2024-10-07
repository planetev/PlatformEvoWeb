"use client";
import React, { useEffect } from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/context/AuthContext";
import {
  DollarSign,
  Activity,
  Users,
  Zap,
  Clock,
  BarChart,
} from "lucide-react";
import { getChargerStatus, getChargerSurvey } from "@/service/charger/chargerSurveyCallAPI";
import {
  PieChart,
  Pie,
  Cell,
  BarChart as ReBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";
import dynamic from "next/dynamic";


const DashboardCharger = () => {
  const { token, session } = useAuth();

  const {

    data: locationServey,

  } = useQuery({
    queryKey: ["list-location-survey-charger"],
    queryFn: async () => {
      try {
        const res: any = await getChargerSurvey({
          page: 1,
          pageSize: 200,
          token,
        });

        return res;
      } catch (err) {
        throw err;
      }
    },
  });

  const surveyLocations = locationServey?.rows.map((item: any) => {
    return {
      name: item.pjth,
      lat: item?.latlong ? item?.latlong?.split(",")[0] : "",  // ตรวจสอบว่ามีค่า latitude หรือไม่ก่อนที่จะ split
      lng: item?.latlong ? item?.latlong?.split(",")[1] : "", // ตรวจสอบว่ามีค่า longitude หรือไม่ก่อนที่จะ split
    };
  });

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





  const icons = [
    <Clock className="h-4 w-4" key="clock" />,
    <Users className="h-4 w-4" key="users" />,
    <Activity className="h-4 w-4" key="activity" />,
    <DollarSign className="h-4 w-4" key="dollar" />,
    <Zap className="h-4 w-4" key="zap" />,
    <BarChart className="h-4 w-4" key="barchart" />,
  ];
  const menu = [
    {
      id: 0,
      count: statuCharger?.[0]?.count || 0,
      name: "Survey Scheduler Installation",
      cls: "from-blue-50 to-blue-100 text-blue-600",
      icon: <Clock className="h-4 w-4" />,
    },
    {
      id: 1,
      count: statuCharger?.[1]?.count || 0,
      name: "Visit Site Survey",
      cls: "from-emerald-50 to-emerald-100 text-emerald-600",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: 2,
      count: statuCharger?.[2]?.count || 0,
      name: "Onboard test with platform",
      cls: "from-amber-50 to-amber-100 text-amber-600",
      icon: <Activity className="h-4 w-4" />,
    },
    {
      id: 3,
      count: statuCharger?.[3]?.count || 0,
      name: "Ready to Revenue",
      cls: "from-violet-50 to-violet-100 text-violet-600",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      id: 4,
      count: statuCharger?.[4]?.count || 0,
      name: "Process Installation",
      cls: "from-rose-50 to-rose-100 text-rose-600",
      icon: <Zap className="h-4 w-4" />,
    },
    {
      id: 5,
      name: "Total",
      count: statuCharger?.[5]?.count || 0,
      cls: "from-gray-50 to-gray-100 text-gray-600",
    },
  ];
  const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6", "#F43F5E"];
  const barData = [
    { name: "Jan", installations: 12 },
    { name: "Feb", installations: 19 },
    { name: "Mar", installations: 3 },
    { name: "Apr", installations: 5 },
    { name: "May", installations: 2 },
    { name: "Jun", installations: 3 },
  ];

  const lineData = [
    { name: "Week 1", revenue: 65 },
    { name: "Week 2", revenue: 59 },
    { name: "Week 3", revenue: 80 },
    { name: "Week 4", revenue: 81 },
  ];

  const menuPie = [
    {
      id: 0,
      count: statuCharger?.[0]?.count || 0,
      name: "Survey Scheduler Installation",
      cls: "from-blue-50 to-blue-100 text-blue-600",
      icon: <Clock className="h-4 w-4" />,
    },
    {
      id: 1,
      count: statuCharger?.[1]?.count || 0,
      name: "Visit Site Survey",
      cls: "from-emerald-50 to-emerald-100 text-emerald-600",
      icon: <Users className="h-4 w-4" />,
    },
    {
      id: 2,
      count: statuCharger?.[2]?.count || 0,
      name: "Onboard test with platform",
      cls: "from-amber-50 to-amber-100 text-amber-600",
      icon: <Activity className="h-4 w-4" />,
    },
    {
      id: 3,
      count: statuCharger?.[3]?.count || 0,
      name: "Ready to Revenue",
      cls: "from-violet-50 to-violet-100 text-violet-600",
      icon: <DollarSign className="h-4 w-4" />,
    },
    {
      id: 4,
      count: statuCharger?.[4]?.count || 0,
      name: "Process Installation",
      cls: "from-rose-50 to-rose-100 text-rose-600",
      icon: <Zap className="h-4 w-4" />,
    },
  ];
  const ComponentWithWindow = dynamic(() => import('./map'), { ssr: false });
  return (
    <>
      {/* <div className="grid gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-6  mb-4">
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
      </div> */}
      <div className="p-3 sm:p-4 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
        <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-10">
          {menu.map((item, index) => (
            <Card
              key={item.id}
              className={`border-none rounded-xl bg-gradient-to-br ${item.cls}
                        shadow-md transition-all duration-300 ease-in-out
                        hover:shadow-lg hover:-translate-y-1 group overflow-hidden`}
            >
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between space-x-2">
                  <CardTitle className="text-sm font-medium leading-tight ">
                    <div className="w-full h-12 flex items-center justify-start">
                      {item.name}
                    </div>
                  </CardTitle>
                  <div className="p-2 rounded-full bg-white bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300 flex-shrink-0">
                    {React.cloneElement(icons[index], {
                      className: `${icons[index].props.className}  w-4 h-4  opacity-70 group-hover:opacity-100 transition-all duration-300`,
                    })}
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="text-3xl font-bold mb-1 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {item.count}
                </div>
                <p className="text-xs opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  Updated recently
                </p>
              </CardContent>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-current opacity-0 group-hover:opacity-20 transition-all duration-300"></div>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 lg:grid-cols-3 mb-10">
          <Card>
            <CardHeader>
              <CardTitle>Charger Distribution</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={menuPie}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="count"
                  >
                    {menu.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Monthly Installations</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <ReBarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="installations" fill="#3B82F6" />
                </ReBarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Revenue Growth</CardTitle>
            </CardHeader>
            <CardContent className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#10B981" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Survey Locations</CardTitle>
          </CardHeader>
          <CardContent className="h-[800px]">
            <ComponentWithWindow  surveyLocations={surveyLocations}/>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DashboardCharger;
