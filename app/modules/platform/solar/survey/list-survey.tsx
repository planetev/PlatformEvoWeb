"use client";
import { useAuth } from "@/app/context/AuthContext";
import InputFilter from "@/components/custom/InputFilter";
import NoContent from "@/components/custom/NoContent";
import Paginations from "@/components/custom/Paginations";
import TableCustom from "@/components/custom/TableCustom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { debounce } from "@/lib/debounced";
import { getSolarSurvey } from "@/service/Solar/solarSurveyCallAPI";
import { useQuery } from "@tanstack/react-query";
import { Edit, Eye, FileText, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import TableListServey from "./table/table-list-servey";

const Listsurvey = () => {
  const router = useRouter();
  const { token, session } = useAuth();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(10);
  const [search, setSearch] = useState("");

  const {
    isPending,
    error,
    data: listData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["list-data-survey-solar", search, page, pageSize, token],
    queryFn: async () => {
      try {
        const res: any = await getSolarSurvey({
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
  // useEffect(() => {
  //   refetch();
  // }, [search]);




  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-start ">
            <CardTitle className="text-start">SurveySolar</CardTitle>
            <CardDescription>
              Manage your surveies and view their charger performance.
            </CardDescription>
          </div>
          <div className="flex items-center mb-3 space-x-3">
            <InputFilter search={search} setSearch={setSearch} />
          </div>
        </CardHeader>
        <CardContent>
          {/* <TableCustom rows={rows} data={listData?.rows} /> */}
          <TableListServey  data={listData?.rows} />
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

export default Listsurvey;

// ) : (
//   <NoContent />
// )}
