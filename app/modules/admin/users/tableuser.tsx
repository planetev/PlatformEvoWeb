"use client";
import { Role, StatusChargerSurveys } from "@/app/inteface/charger";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, Eye, FileText, MoreHorizontal } from "lucide-react";
import { useRouter } from "next/navigation";

import React from "react";
import { FaRegFilePdf } from "react-icons/fa";

const Tableuser = ({
  data,
  setOpenDialogCreateUsers,
  setOpenDialogViewUsers,
  setSelecteId,
  setOpenDialogEditUsers,
}: any) => {
  const router = useRouter();
  const renderText = (item: any) => {
    return (
      <div>
        <span>{item ? item : "N/A"}</span>
      </div>
    );
  };

  const renderRole = (status: string) => {
    switch (status) {
      case Role.Admin:
        return (
          <Badge variant={"destructive"} className="text-xs ">
            ผู้ดูแลระบบ/แอดมิน
          </Badge>
        );
      case Role.User:
        return (
          <Badge variant={"outline"} className="text-xs ">
            ผู้ใช้งานทั่วไป
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

  const renderActive = (active: boolean) => {
    switch (active) {
      case false:
        return (
          <Badge variant={"secondary"} className="text-xs ">
            ปิดใช้งาน
          </Badge>
        );
      case true:
        return (
          <Badge className="text-xs bg-green-500 hover:bg-green-600">
            เปิดใช้งาน
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
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>email</TableHead>
            <TableHead>ชื่อ-นามสกุล</TableHead>
            <TableHead>role</TableHead>
            <TableHead>สถานะ</TableHead>
            <TableHead></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data?.map((item: any) => (
            <TableRow key={item?.id} className="bg-white">
              <TableCell>{renderText(item.email)}</TableCell>
              <TableCell>
                {renderText(item.firstname + " " + item.lastname)}{" "}
              </TableCell>
              <TableCell>{renderRole(item.role)}</TableCell>
              <TableCell>{renderActive(item.isActive)}</TableCell>
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
                      onClick={() => {
                        setOpenDialogViewUsers(true), setSelecteId(item.id);
                      }}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => {
                        setOpenDialogEditUsers(true), setSelecteId(item.id);
                      }}
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </DropdownMenuItem>

                    <DropdownMenuItem
                      disabled={item?.role === Role.Admin}
                      // onClick={() => {
                      //   setOpenDialogEditUsers(true), setSelecteId(item.id);
                      // }

                      // }
                    >
                      <Edit className="mr-2 h-4 w-4" />
                      ปิดใช้งาน / ลบผู้ใช้งาน
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

export default Tableuser;
