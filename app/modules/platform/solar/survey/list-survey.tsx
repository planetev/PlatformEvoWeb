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
import {
  CirclePlus,
  Edit,
  Eye,
  FileText,
  MoreHorizontal,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import TableListServey, { renderStatus2 } from "./table/table-list-servey";
import { StatusSolarSurvey } from "@/app/inteface/solar";

const Listsurvey = () => {
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
    data: listData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: [
      "list-data-survey-solar",
      search,
      page,
      pageSize,
      token,
      slectedstatus,
    ],
    queryFn: async () => {
      try {
        const res: any = await getSolarSurvey({
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
  // useEffect(() => {
  //   refetch();
  // }, [search]);

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
            สำรวจโซลาร์
            </CardTitle>
            <CardDescription className="text-sm sm:text-base">
            จัดการแบบสำรวจของคุณ พร้อมทั้งตรวจสอบประสิทธิภาพการชาร์จอย่างละเอียด
            </CardDescription>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
            <div className="flex flex-wrap gap-2">
              {slectedstatus.length > 0 ? (
                slectedstatus.map((status, index) => (
                  <div key={index} className="flex items-center">
                    {renderStatus2(status)}

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
            </div>
            <InputFilter
              search={search}
              setSearch={setSearch}
              Statusall={StatusSolarSurvey}
              setSlectedStatus={setSlectedStatus}
              type={2}
            />
          </div>
        </CardHeader>
        <CardContent>
          {/* <TableCustom rows={rows} data={listData?.rows} /> */}
          <div className="flex items-center gap-2 mb-4">
            <Button
              size="sm"
              className="w-full sm:w-auto h-9 px-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              onClick={() => router.push("/platform/solar/survey/createsurvey")}
            >
              <CirclePlus className="h-5 w-5 animate-pulse" />
              <span className="text-sm">เพิ่มข้อมูล</span>
            </Button>
          </div>
          <div className="overflow-x-auto">
            <TableListServey data={listData?.rows} />
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

export default Listsurvey;

// ) : (
//   <NoContent />
// )}
