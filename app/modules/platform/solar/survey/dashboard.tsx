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
import { useAuth } from "@/app/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getSolarStatus } from "@/service/Solar/solarSurveyCallAPI";
import {
  DollarSign,
  Activity,
  Users,
  Zap,
  Clock,
  BarChart,
} from "lucide-react";
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

const DashboardSolar = () => {
 const { token, session } = useAuth();


 const {
  isPending,
  error,
  data: statusSolar,
  isLoading,
  refetch,
} = useQuery({
  queryKey: ["status-survey-solar", token],
  queryFn: async () => {
    try {
      const res: any = await getSolarStatus({
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
    count: statusSolar?.[0]?.count || 0,
    name: "ติดต่อและนัดหมายการสำรวจ",
    cls: "from-blue-50 to-blue-100 text-blue-600",
    icon: <Clock className="h-4 w-4" />,
  },
  {
    id: 1,
    count: statusSolar?.[1]?.count || 0,
    name: "สำรวจสถานที่และประเมินระบบ",
    cls: "from-emerald-50 to-emerald-100 text-emerald-600",
    icon: <Users className="h-4 w-4" />,
  },
  {
    id: 2,
    count: statusSolar?.[2]?.count || 0,
    name: "ติดตั้งระบบโซล่าเซลล์",
    cls: "from-amber-50 to-amber-100 text-amber-600",
    icon: <Activity className="h-4 w-4" />,

  },
  {
    id: 3,
    count: statusSolar?.[3]?.count || 0,
    name: "ตรวจสอบและส่งมอบ",
    cls: "from-violet-50 to-violet-100 text-violet-600",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    id: 4,
    count: statusSolar?.[4]?.count || 0,
    name: "พื้นที่ไม่เหมาะสมสำหรับการติดตั้ง",
    cls: "from-rose-50 to-rose-100 text-rose-600",
    icon: <Zap className="h-4 w-4" />,
  },
  {
    id: 5,
    name: "Total",
    count: statusSolar?.[5]?.count || 0,
    cls: "from-gray-50 to-gray-100 text-gray-600",
  },
];

const menuPie = [
  {
    id: 0,
    count: statusSolar?.[0]?.count || 0,
    name: "ติดต่อและนัดหมายการสำรวจ",
    cls: "from-blue-50 to-blue-100 text-blue-600",
    icon: <Clock className="h-4 w-4" />,
  },
  {
    id: 1,
    count: statusSolar?.[1]?.count || 0,
    name: "สำรวจสถานที่และประเมินระบบ",
    cls: "from-emerald-50 to-emerald-100 text-emerald-600",
    icon: <Users className="h-4 w-4" />,
  },
  {
    id: 2,
    count: statusSolar?.[2]?.count || 0,
    name: "ติดตั้งระบบโซล่าเซลล์",
    cls: "from-amber-50 to-amber-100 text-amber-600",
    icon: <Activity className="h-4 w-4" />,

  },
  {
    id: 3,
    count: statusSolar?.[3]?.count || 0,
    name: "ตรวจสอบและส่งมอบ",
    cls: "from-violet-50 to-violet-100 text-violet-600",
    icon: <DollarSign className="h-4 w-4" />,
  },
  {
    id: 4,
    count: statusSolar?.[4]?.count || 0,
    name: "พื้นที่ไม่เหมาะสมสำหรับการติดตั้ง",
    cls: "from-rose-50 to-rose-100 text-rose-600",
    icon: <Zap className="h-4 w-4" />,
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

const surveyLocations = [
  { name: "Site A", lat: 13.7563, lng: 100.5018 },
  { name: "Site B", lat: 13.7469, lng: 100.5386 },
  { name: "Site C", lat: 13.7279, lng: 100.5247 },
];


  return (
    <>
    <div className="p-6 sm:p-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">


      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 mb-10">
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
              <CardTitle>Solar Distribution</CardTitle>
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
      </div>

    </>
  )
}

export default DashboardSolar