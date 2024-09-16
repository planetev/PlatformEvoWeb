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
      <Head ltext={"users"} />
      <div className="w-full  mb-4 ">
        <div className="flex items-center justify-between  mb-4">
          <Button
            onClick={() => setOpenDialogCreateUsers(true)}
            size="sm"
            type="button"
            className="w-30 h-10 flex items-center space-x-2"
          >
            <CirclePlus className="h-4 w-4" />
            <span>เพื่มข้อมูล</span>
          </Button>
        </div>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div className="flex flex-col items-start ">
              <CardTitle className="text-start">Users</CardTitle>
              <CardDescription>
                Manage your Users and view their charger performance.
              </CardDescription>
            </div>
            <div className="flex items-center mb-3 space-x-3">
              <InputFilter search={search} setSearch={setSearch} />
            </div>
          </CardHeader>
          <CardContent>
            {/* <TableCustom rows={rows} data={listData?.rows} /> */}
            {/* <TableSurvey data={listServeyCharger?.rows} /> */}
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
