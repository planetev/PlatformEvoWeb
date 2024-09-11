"use cleint";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Eye, FileText, MoreHorizontal } from "lucide-react";
import { FaRegFilePdf } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { StatusChargerSurveys } from "@/app/inteface/charger";
const TableSurvey = ({ data }: any) => {
  const router = useRouter();
  const renderText = (item: any) => {
    return (
      <div>
        <span>{item ? item : "N/A"}</span>
      </div>
    );
  };
  const renderStatus = (status: string) => {
    switch (status) {
      case StatusChargerSurveys.Visit:
        return <Badge className="text-xs bg-red-500  hover:bg-red-700">{status}</Badge>;
      case StatusChargerSurveys.Final:
        return <Badge className="text-xs bg-orange-400  hover:bg-orange-600">Survey Scheduler Installation</Badge>;
      case StatusChargerSurveys.Process:
        return <Badge className="text-xs bg-sky-400 hover:bg-sky-600">{status}</Badge>;
      case StatusChargerSurveys.Onboard:
        return <Badge className="text-xs bg-teal-500 hover:bg-teal-700">{status}</Badge>;
      case StatusChargerSurveys.Ready:
        return <Badge className="text-xs bg-emerald-500 hover:bg-emerald-700">{status}</Badge>;
      default:
        return (
          <Badge variant="default" className="text-xs">
            N/A
          </Badge>
        );
    }
  };

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>สถานะ</TableHead>
            <TableHead>วันที่สำรวจ</TableHead>
            <TableHead>ชื่อโครงการ</TableHead>

            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow key={item?.id} className="bg-white">
              <TableCell>{renderStatus(item?.status)}</TableCell>
              <TableCell>{renderText(item.day)}</TableCell>
              <TableCell>{renderText(item.pjth)}</TableCell>

              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button aria-haspopup="true" size="icon" variant="ghost">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem
                      onClick={() =>
                        router.push("/platform/charger/survey/view/" + item?.id)
                      }
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() =>
                        router.push(
                          "/platform/charger/survey/editsurvey/" + item?.id
                        )
                      }
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
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
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => console.log("MOU action")}>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-4 w-4" />
                          MOU
                        </div>

                        <Badge
                          variant="secondary"
                          className="flex items-center space-x-1 border border-gray-600 border-dotted px-1 py-0.5 text-xs"
                        >
                          <FaRegFilePdf className="h-3 w-3" />

                          <span>PDF</span>
                        </Badge>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TableSurvey;
