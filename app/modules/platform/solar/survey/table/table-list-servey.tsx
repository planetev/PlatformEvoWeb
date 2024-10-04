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
import { CircleSlash2, Edit, Eye, FileText, MoreHorizontal, Trash2 } from "lucide-react";
import { FaRegFilePdf } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { StatusSolarSurveys } from "@/app/inteface/solar";


export  const renderStatus2 = (status: string) => {
  switch (status) {
    case StatusSolarSurveys.Visit:
      return (
        <Badge className="text-xs bg-red-500  hover:bg-red-700">{status}</Badge>
      );
    case StatusSolarSurveys.Final:
      return (
        <Badge className="text-xs bg-orange-400  hover:bg-orange-600">
      {status}
        </Badge>
      );
    case StatusSolarSurveys.Process:
      return (
        <Badge className="text-xs bg-sky-400 hover:bg-sky-600">{status}</Badge>
      );
    case StatusSolarSurveys.Onboard:
      return (
        <Badge className="text-xs bg-teal-500 hover:bg-teal-700">
          {status}
        </Badge>
      );
    case StatusSolarSurveys.Ready:
      return (
        <Badge className="text-xs bg-emerald-500 hover:bg-emerald-700">
          {status}
        </Badge>
      );
    default:
      return (
        <Badge variant="default" className="text-xs">
          N/A
        </Badge>
      );
  }
};
const TableListServey = ({ data }: any) => {
  const router = useRouter();
  const renderBadge = (item: any) => {
    return (
      <Badge
        variant={
          item === "ดำเนินการติดตั่งแผงโซลาเซล" ? "destructive" : "default"
        }
      >
        {item ? item : "N/A"}
      </Badge>
    );
  };
  const renderText = (item: any) => {
    return (
      <div>
        <span className="text-sm sm:text-sm md:text-sm lg:text-md">{item ? item : "N/A"}</span>
      </div>
      // text-sm sm:text-sm md:text-sm lg:text-md xl:text-2xl
    );
  };



  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Wos No</TableHead>
            <TableHead>สถานะ</TableHead>
            <TableHead>ชื่อลูกค้า</TableHead>
            <TableHead>วันที่นัดหมาย</TableHead>
            <TableHead>เบอร์ติดต่อ</TableHead>
            <TableHead>ผู้สำรวจ</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data && data.length > 0 ? (
            data?.map((item: any) => (
              <TableRow key={item?.id} className="bg-white">
                <TableCell>{renderText(item?.wno)}</TableCell>
                <TableCell>{renderStatus2(item?.status)}</TableCell>
                <TableCell>{renderText(item.customer_name)}</TableCell>
                <TableCell>{renderText(item.datebook)}</TableCell>
                <TableCell>{renderText(item.tel)}</TableCell>
                <TableCell>{renderText(item.servey_name)}</TableCell>
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
                          router.push("/platform/solar/survey/view/" + item?.id)
                        }
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() =>
                          router.push("/platform/solar/survey/edit/" + item?.id)
                        }
                      >
                        <Edit className="mr-2 h-4 w-4" />
                        Edit
                      </DropdownMenuItem>

                      <DropdownMenuItem

                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        ลบรายการ
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        onClick={() =>
                          window.open(
                            `${process.env.NEXT_PUBLIC_API_PDF}SurveySolar/generatepdf/${item?.id}`,
                            "_blank"
                          )
                        }
                      >
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <FileText className="mr-2 h-4 w-4" />
                            Survey
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
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7}>
                <div className="flex flex-col items-center justify-center w-full py-20">
                  <CircleSlash2 className="h-12 w-12 text-gray-400 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-700">
                    No Data Available
                  </h2>
                  <p className="text-gray-500">
                    There are currently no records to display.
                  </p>
                </div>
              </TableCell>
            </TableRow>
          )}
          {/* {data?.map((item: any) => (
            <TableRow key={item?.id} className="bg-white">
              <TableCell>{renderText(item?.wno)}</TableCell>
              <TableCell>{renderBadge(item?.status)}</TableCell>
              <TableCell>{renderText(item.customer_name)}</TableCell>
              <TableCell>{renderText(item.datebook)}</TableCell>
              <TableCell>{renderText(item.tel)}</TableCell>
              <TableCell>{renderText(item.servey_name)}</TableCell>
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
                router.push("/platform/solar/survey/view/" + item?.id)
              }
            >
              <Eye className="mr-2 h-4 w-4" />
              View
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() =>
                router.push("/platform/solar/survey/edit/" + item?.id)
              }
            >
              <Edit className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>

            <DropdownMenuItem onClick={() =>  window.open(`${process.env.NEXT_PUBLIC_API_PDF}SurveySolar/generatepdf/${item?.id}` , '_blank')}>
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


          </DropdownMenuContent>
        </DropdownMenu>

              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </>
  );
};

export default TableListServey;
