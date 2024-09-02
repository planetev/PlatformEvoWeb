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
const TableSurvey = () => {
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
        {/* <TableBody>
          {data?.map((item: any) => (
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


          </DropdownMenuContent>
        </DropdownMenu>

              </TableCell>
            </TableRow>
          ))}
        </TableBody> */}
      </Table>
    </>
  )
}

export default TableSurvey