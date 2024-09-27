"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation, useQuery } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import {
  createUser,
  getUserById,
  updateUsersData,
} from "@/service/users/userCallAPI";
import { useAuth } from "@/app/context/AuthContext";
import { Gender, RoleUser } from "@/app/inteface/charger";

const EditDialog = ({
  openDialogEditUsers,
  onClose,
  id,
  setOpenDialogEditUsers,
  lsh,
}: any) => {
  const { token, session } = useAuth();

  const {
    isPending,
    error,
    data: getUserId,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["get-id-user-edit-profile"],
    queryFn: async () => {
      try {
        const res: any = await getUserById({ id, token });

        return res;
      } catch (err) {
        throw err;
      }
    },
  });

  useEffect(() => {
    if (openDialogEditUsers && id) {
      refetch();
    }
  }, [openDialogEditUsers, id, refetch]);

  const updateUser = useMutation({
    mutationFn: async ({ id, token, payload }: any) => {
      return await updateUsersData({ id, token, payload });
    },
    onSuccess: (res) => {
      if (res) {
        setOpenDialogEditUsers(false);
        lsh();
        toast({
          title: "แก้ไขข้อมูลสำเร็จ",
          className: "bg-green-500 text-white font-semibold",
          description: "ดำเนินการแก้ไขข้อมูลสำเร็จ",
        });
        // // router.push("/platform/solar",);
        //    navigateToSolarTab("2");
      }
    },
    onError: (err) => {
      console.log(err);
      toast({
        title: "แก้ไขข้อมูลไม่สำเร็จ",
        className: "bg-red-500 text-white font-semibold",
        description: "ตรวจพบความผิดปกติ",
      });
    },
  });

  const validationSchema = Yup.object({
    email: Yup.string().required("กรุณากรอกอีเมล"),
  });

  const initialData: any = {
    email: getUserId?.email,
    firstname: getUserId?.firstname,
    lastname: getUserId?.lastname,
    telephone: getUserId?.profile?.telephone,
    gender: getUserId?.profile?.gender,
    role: getUserId?.role,
  };
  return (
    <>
      <Dialog open={openDialogEditUsers} onOpenChange={onClose}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <Formik
            initialValues={initialData}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={async (values) => {
              const payload = {
                firstname: values.firstname,
                lastname: values.lastname,
                telephone: values.telephone,
                gender: values.gender,
              };

              updateUser.mutate({ id, token, payload });
            }}
          >
            {({
              values,
              setFieldValue,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <>
                  <form onSubmit={handleSubmit}>
                    <DialogHeader>
                      <DialogTitle className="text-2xl">
                        แก้ไขข้อมูลผู้ใช้
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        กรอกข้อมูลด้านล่างเพื่อแก้ไขบัญชีผู้ใช้
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-6">
                      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">ชื่อผู้ใช้</Label>
                          <Input
                            id="email"
                            type="email"
                            className="h-12"
                            disabled
                            value={values.email}
                            onChange={handleChange}
                            placeholder="กรอกอีเมล"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstname">ชื่อจริง</Label>
                          <Input
                            id="firstname"
                            type="text"
                            className="h-12"
                            placeholder="กรอกชื่อจริง"
                            value={values.firstname}
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastname">นามสกุล</Label>
                          <Input
                            id="lastname"
                            type="text"
                            className="h-12"
                            placeholder="กรอกนามสกุล"
                            value={values.lastname}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="telephone">เบอร์โทรศัพท์</Label>
                          <Input
                            id="telephone"
                            type="text"
                            className="h-12"
                            value={values?.telephone}
                            onChange={handleChange}
                            placeholder="กรอกเบอร์โทรศัพท์"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">เพศ</Label>
                          <Select
                            name="gender"
                            value={values.gender}
                            onValueChange={(value) =>
                              setFieldValue("gender", value)
                            }
                          >
                            <SelectTrigger
                              id="category"
                              aria-label="Select category"
                              className="h-12"
                            >
                              <SelectValue placeholder="เลือกเพศ" />
                            </SelectTrigger>
                            <SelectContent>
                              {Gender.map(
                                (i, x: number) =>
                                  (!values.gender ||
                                    i.name !== values.gender ||
                                    x ===
                                      Gender.findIndex(
                                        (item) => item.name === values.gender
                                      )) && (
                                    <SelectItem key={x} value={i.name}>
                                      {i.name}
                                    </SelectItem>
                                  )
                              )}
                              {/* <SelectItem value={"1"}>เพศชาย</SelectItem>
                              <SelectItem value={"2"}>เพศหญืง</SelectItem> */}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="gender">role</Label>
                          <Select
                            name="role"
                            value={values.role}
                            onValueChange={(value) =>
                              setFieldValue("role", value)
                            }
                          >
                            <SelectTrigger
                              id="category"
                              aria-label="Select category"
                              className="h-12"
                            >
                              <SelectValue placeholder="เลือก Role" />
                            </SelectTrigger>
                            <SelectContent>
                              {RoleUser.map(
                                (i, x: number) =>
                                  (!values.role ||
                                    i.name !== values.role ||
                                    x ===
                                      RoleUser.findIndex(
                                        (item) => item.name === values.role
                                      )) && (
                                    <SelectItem key={x} value={i.name}>
                                      {i.name}
                                    </SelectItem>
                                  )
                              )}
                            </SelectContent>
                          </Select>
                        </div>

                        {/* <div className="space-y-2">
                  <Label htmlFor="gender">บาทบาท</Label>
                  <Select >
                    <SelectTrigger id="category" aria-label="Select category" className="h-12">
                      <SelectValue placeholder="เลือกบทบาทผู้ใช้" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={"USER"}>ผู้ใช้งานทั่วไป</SelectItem>
                      <SelectItem value={"ADMIN"}>ผู้ดูแลระบบ</SelectItem>
                    </SelectContent>
                  </Select>
                </div> */}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="w-full h-12 ">
                        แก้ไขผู้ใช้
                      </Button>
                    </DialogFooter>
                  </form>
                </>
              );
            }}
          </Formik>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default EditDialog;
