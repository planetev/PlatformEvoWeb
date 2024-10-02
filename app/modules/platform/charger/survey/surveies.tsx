"use client";
import React, { useState } from "react";

import {
  DollarSign,
  ListFilter,
  File,
  PlusCircle,
  MoreHorizontal,
  X,
  CirclePlus,
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
import TableSurvey, { renderStatus } from "./table-survey";
import InputFilter from "@/components/custom/InputFilter";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/context/AuthContext";
import { getChargerSurvey } from "@/service/charger/chargerSurveyCallAPI";
import Paginations from "@/components/custom/Paginations";
import { StatusChargerSurvey } from "@/app/inteface/charger";
const Surveies = () => {
  const router = useRouter();
  const { token, session } = useAuth();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(10);
  const [search, setSearch] = useState("");
  const [slectedstatus, setSlectedStatus] = useState<string[]>([]);
  const {
    isPending,
    error,
    data: listServeyCharger,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "list-data-survey-charger",
      search,
      page,
      pageSize,
      slectedstatus,
      token,
    ],
    queryFn: async () => {
      try {
        console.log("slectedstatus1", slectedstatus);
        const res: any = await getChargerSurvey({
          search,
          page,
          pageSize,
          token,
          status: slectedstatus,
        });

        return res;
      } catch (err) {
        throw err;
      }
    },
  });

  const handleRemoveStatus = (statusToRemove: string) => {
    setSlectedStatus((prevStatuses) =>
      prevStatuses.filter((status) => status !== statusToRemove)
    );
  };
  return (
    <>
      <Card className="w-full">
        <CardHeader className="flex flex-col space-y-4 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
          <div className="flex flex-col items-start space-y-2">
            <CardTitle className="text-start text-xl sm:text-2xl">
              SurveyCharger
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
              Manage your Chargeres and view their charger performance.
            </CardDescription>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              {slectedstatus.length > 0 ? (
                slectedstatus.map((status, index) => (
                  <div
                    key={index}
                    className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                  >
                    <span className="mr-2 text-sm">{renderStatus(status)}</span>
                    <button
                      onClick={() => handleRemoveStatus(status)}
                      className="text-red-500 hover:text-red-700 focus:outline-none"
                      aria-label={`Remove ${status} status`}
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ))
              ) : (
                <span className="text-gray-500 text-sm">
                  No statuses selected
                </span>
              )}
            </div>
            <InputFilter
              search={search}
              setSearch={setSearch}
              Statusall={StatusChargerSurvey}
              setSlectedStatus={setSlectedStatus}
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            <Button
              size="sm"
              className="w-full sm:w-auto h-12 px-6 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() =>
                router.push("/platform/charger/survey/createsurvey")
              }
            >
              <CirclePlus className="h-5 w-5 animate-pulse" />
              <span className="text-sm">เพิ่มข้อมูล</span>
            </Button>
          </div>
          <div className="overflow-x-auto">
            <TableSurvey data={listServeyCharger?.rows} />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row items-center justify-between">
          <Paginations
            totalRows={10}
            pageSize={pageSize}
            setPageSize={setPageSize}
            page={page}
            setPage={setPage}
          />
        </CardFooter>
      </Card>
    </>
  );
};

export default Surveies;
