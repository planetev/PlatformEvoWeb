"use client";
import React, { useState } from "react";

import {
  DollarSign,
  ListFilter,
  File,
  PlusCircle,
  MoreHorizontal,
  X,
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
    queryKey: ["list-data-survey-charger", search, page, pageSize, slectedstatus, token],
    queryFn: async () => {
      try {
        console.log('slectedstatus1', slectedstatus)
        const res: any = await getChargerSurvey({
          search,
          page,
          pageSize,
          token,
          status:slectedstatus,
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
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start ">
            <CardTitle className="text-start">SurveyCharger</CardTitle>
            <CardDescription>
              Manage your Chargeres and view their charger performance.
            </CardDescription>
          </div>
          <div className="flex items-center  gap-3 mb-3 space-x-2">
            {slectedstatus.length > 0 ? (
              slectedstatus.map((status, index) => (
                <div
                  key={index}
                  className="flex items-center"
                >

                  {renderStatus(status)}


                  <button
                    onClick={() => handleRemoveStatus(status)} // Function to remove the status
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    {/* Replace X with your icon */}
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))
            ) : (
              <span className="text-gray-500">No statuses selected</span>
            )}
            <InputFilter
              search={search}
              setSearch={setSearch}
              Statusall={StatusChargerSurvey}
              setSlectedStatus={setSlectedStatus}
            />
          </div>
        </CardHeader>
        <CardContent>
          {/* <TableCustom rows={rows} data={listData?.rows} /> */}
          <TableSurvey data={listServeyCharger?.rows} />
        </CardContent>
        <CardFooter className="flex items-center justify-between">
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
