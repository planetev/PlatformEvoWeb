"use client";
import React, { useState } from "react";

import {
  DollarSign,
  ListFilter,
  File,
  PlusCircle,
  MoreHorizontal,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import TableSurvey from "./table-survey";
import InputFilter from "@/components/custom/InputFilter";
import { useRouter } from "next/navigation";
const Surveies = () => {
  const router = useRouter();
 const [page, setPage] = useState(1);
 const [pageSize, setPageSize] = useState(10);
 const [total, setTotal] = useState(10);
 const [search, setSearch] = useState("");
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
      cls: "border-grey-500 bg-grey-100",
    },
  ];
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-6  mb-4">
        {menu.map((item, x) => (
          <>
            <Card
              key={x}
              x-chunk="dashboard-01-chunk-0 "
              className={`border-2 border-dashed ${item.cls} text-gray-500`}
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

      <div className="flex items-center gap-2  mb-4">
        <Button size="lg" className="h-7 gap-1" onClick={ () => router.push("/platform/charger/surver/createsurvey")}>
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Add Survey
          </span>
        </Button>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="h-7 gap-1">
              <ListFilter className="h-3.5 w-3.5" />
              <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                Filter
              </span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Active</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Draft</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem>Archived</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start ">
              <CardTitle className="text-start">SurveyCharger</CardTitle>
              <CardDescription>
                Manage your Chargeres and view their charger performance.
              </CardDescription>
            </div>
            <div className="flex items-center mb-3 space-x-3">
              <InputFilter search={search} setSearch={setSearch} />
            </div>
          </CardHeader>
          <CardContent>
            {/* <TableCustom rows={rows} data={listData?.rows} /> */}
            <TableSurvey />
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            {/* <Paginations
            totalRows={10}
            pageSize={pageSize}
            setPageSize={setPageSize}
            page={page}
            setPage={setPage}
          /> */}
          </CardFooter>
        </Card>

    </>
  );
};

export default Surveies;
