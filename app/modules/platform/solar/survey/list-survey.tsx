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
import { getSolarSurvey } from "@/service/Solar/solarSurveyCallAPI";
import { useQuery } from "@tanstack/react-query";
import { Eye, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

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
          serach: search,
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

  console.log("listData", listData);

  const rows: any[] = [
    // {
    //   id: 0,
    //   isShow: false,
    //   render: (data:any) => (
    //     <Image
    //       alt={data.name}
    //       className="aspect-square rounded-md object-cover"
    //       height="64"
    //       src={data.image || "https://ui.shadcn.com/placeholder.svg"}
    //       width="64"
    //     />
    //   ),

    // },
    {
      id: 1,
      columname: "Wos No",
      render: (data: any) => <span className="font-medium">{data?.wno}</span>,
    },
    {
      id: 2,
      columname: "สถานะ",
      render: (data: any) => <Badge variant="outline">{data?.status}</Badge>,
    },
    {
      id: 2,
      columname: "ชื่อลูกค้า",
      render: (data: any) => (
        <span className="font-medium">{data?.customer_name}</span>
        // <Badge variant="outline">Draft</Badge>
      ),
    },
    {
      id: 3,
      columname: "วันที่นัดหมาย",
      cls: "hidden md:table-cell",
      render: (data: any) => <span className="">{data.datebook}</span>,
    },

    {
      id: 4,
      columname: "เบอร์ติดต่อ",
      cls: "hidden md:table-cell",
      render: (data: any) => <span className="">{data.tel}</span>,
    },
    {
      id: 5,
      columname: "ผู้สำรวจ",
      cls: "hidden md:table-cell",
      render: (data: any) => <span className="">{data.servey_name}</span>,
    },
    {
      id: 5,
      columname: "",
      isAction: true,
      render: (data: any) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button aria-haspopup="true" size="icon" variant="ghost">
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            {/* <DropdownMenuItem
              onClick={() => router.push("/platform/solar/" + data.id)}
            >
              <Eye className="mr-2 h-4 w-4" />
              View{data.id}
            </DropdownMenuItem> */}
            {/*
          <DropdownMenuItem onClick={() => console.log("Edit action")}>
            <Edit className="mr-2 h-4 w-4" />
            Edit
          </DropdownMenuItem>

          <DropdownMenuItem
            onClick={() => console.log("Delete action")}
          >
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </DropdownMenuItem>

          <DropdownMenuItem onClick={() => console.log("MOU action")}>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <FileText className="mr-2 h-4 w-4" />
                Survey Report
              </div>

              <Badge
                variant="secondary"
                className="flex items-center space-x-1 border border-gray-600 border-dotted px-1 py-0.5 text-xs"
              >
                <FaRegFilePdf className="h-3 w-3" />

                <span>PDF</span>
              </Badge>
            </div>
          </DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
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
                <InputFilter setSearch={setSearch} />
              </div>
            </CardHeader>
            <CardContent>

              {listData?.rows ? (
                <TableCustom rows={rows} data={listData.rows} />
              ) : (
                <NoContent />
              )}
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
      )}
    </>
  );
};

export default Listsurvey;
