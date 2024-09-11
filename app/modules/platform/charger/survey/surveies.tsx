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
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/app/context/AuthContext";
import { getChargerSurvey } from "@/service/charger/chargerSurveyCallAPI";
import Paginations from "@/components/custom/Paginations";
const Surveies = () => {
  const router = useRouter();
  const { token, session } = useAuth();
 const [page, setPage] = useState(1);
 const [pageSize, setPageSize] = useState(10);
 const [total, setTotal] = useState(10);
 const [search, setSearch] = useState("");


 const {
  isPending,
  error,
  data: listServeyCharger,
  isLoading,
  refetch,
} = useQuery({
  queryKey: ["list-data-survey-charger", search, page, pageSize, token],
  queryFn: async () => {
    try {
      const res: any = await getChargerSurvey({
        search,
        page,
        pageSize,
        token,
      });

      return res;
    } catch (err) {
      throw err;
    }
  },
});

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
            <div className="flex items-center mb-3 space-x-3">
              <InputFilter search={search} setSearch={setSearch} />
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
