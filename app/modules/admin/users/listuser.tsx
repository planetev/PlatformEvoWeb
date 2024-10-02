"use client";
import Head from "@/components/custom/Head";
import Main from "@/components/main";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import React, { useState } from "react";
import Tableuser from "./tableuser";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "@/service/users/userCallAPI";
import { useAuth } from "@/app/context/AuthContext";
import InputFilter from "@/components/custom/InputFilter";
import Paginations from "@/components/custom/Paginations";
import CreateDialog from "./dialog/createDialog";
import ViewDialog from "./dialog/viewDialog";
import EditDialog from "./dialog/editDialog";

const Listuser = () => {
  const [openDialogCreateUsers, setOpenDialogCreateUsers] =
    useState<boolean>(false);

  const [openDialogEditUsers, setOpenDialogEditUsers] =
    useState<boolean>(false);
  const [openDialogViewUsers, setOpenDialogViewUsers] =
    useState<boolean>(false);
  const [selecteId, setSelecteId] = useState<string>("");
  const { token, session } = useAuth();
  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(10);
  const [search, setSearch] = useState<string>("");

  const {
    isPending,
    error,
    data: listUser,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["list-data-users", search, page, pageSize, token],
    queryFn: async () => {
      try {
        const res: any = await getAllUsers({
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
    <Main>
      <Head ltext={"ผู้ใช้งาน"}  icc={'users'}/>
      <div className="w-full  mb-4 ">
        <Card className="w-full">
          <CardHeader className="flex flex-col space-y-4 sm:flex-row sm:items-start sm:justify-between sm:space-y-0">
            <div className="flex flex-col items-start space-y-2">
              <CardTitle className="text-start">ผู้ใช้งาน</CardTitle>
              <CardDescription>
              จัดการผู้ใช้งานของคุณและตรวจสอบประสิทธิภาพการใช้งานแพลตฟอร์มของพวกเขา
              </CardDescription>
            </div>
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0">
              <InputFilter search={search} setSearch={setSearch} />
            </div>
          </CardHeader>
          <CardContent>
            {/* <TableCustom rows={rows} data={listData?.rows} /> */}
            {/* <TableSurvey data={listServeyCharger?.rows} /> */}
            <div className="flex items-center gap-2 mb-3">
              <Button
                size="sm"
                className="w-full sm:w-auto h-8 px-6 flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                onClick={() => setOpenDialogCreateUsers(true)}
              >
                <CirclePlus className="h-4 w-4 animate-pulse" />
                <span className="text-sm">เพิ่มข้อมูล</span>
              </Button>
            </div>

            <Tableuser
              data={listUser?.rows}
              setOpenDialogViewUsers={setOpenDialogViewUsers}
              setOpenDialogCreateUsers={setOpenDialogCreateUsers}
              setSelecteId={setSelecteId}
              setOpenDialogEditUsers={setOpenDialogEditUsers}
            />
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
      </div>
      <CreateDialog
        openDialogCreateUsers={openDialogCreateUsers}
        setOpenDialogCreateUsers={setOpenDialogCreateUsers}
        onClose={() => setOpenDialogCreateUsers(false)}
        refetch={refetch}
      />
      <ViewDialog
        openDialogViewUsers={openDialogViewUsers}
        onClose={() => setOpenDialogViewUsers(false)}
        id={selecteId}
      />
      <EditDialog
        openDialogEditUsers={openDialogEditUsers}
        setOpenDialogEditUsers={setOpenDialogEditUsers}
        onClose={() => {
          setOpenDialogEditUsers(false);
        }}
        id={selecteId}
        lsh={refetch}
      />
    </Main>
  );
};

export default Listuser;
