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
import { Phone, User, Users, Lock, AtSign } from "lucide-react";
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
                    <div className="grid grid-cols-1 gap-4 mb-4">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          อีเมล
                        </Label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            className="pl-10 h-11 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder="กรอกอีเมล"
                            value={values.email}
                            onChange={handleChange}
                          />
                        </div>
                        {/* {errors.email && touched.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )} */}
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="firstname"
                            className="text-sm font-medium"
                          >
                            ชื่อจริง
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="firstname"
                              name="firstname"
                              type="text"
                              className="pl-10 h-11 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="กรอกชื่อจริง"
                              value={values.firstname}
                              onChange={handleChange}
                            />
                          </div>
                          {/* {errors.firstname && touched.firstname && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.firstname}
                            </p>
                          )} */}
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="lastname"
                            className="text-sm font-medium"
                          >
                            นามสกุล
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="lastname"
                              name="lastname"
                              type="text"
                              className="pl-10 h-11 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="กรอกนามสกุล"
                              value={values.lastname}
                              onChange={handleChange}
                            />
                          </div>
                          {/* {errors.lastname && touched.lastname && (
                            <p className="text-red-500 text-xs mt-1">
                              {errors.lastname}
                            </p>
                          )} */}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="telephone"
                            className="text-sm font-medium"
                          >
                            เบอร์โทรศัพท์
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              id="telephone"
                              name="telephone"
                              type="tel"
                              className="pl-10 h-11 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              placeholder="กรอกเบอร์โทรศัพท์"
                              value={values.telephone}
                              onChange={handleChange}
                            />
                          </div>
                          {/* {errors.telephone && touched.telephone && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.telephone}
                          </p>
                        )} */}
                        </div>
                        <div className="space-y-2">
                          <Label
                            htmlFor="gender"
                            className="text-sm font-medium"
                          >
                            เพศ
                          </Label>
                          <div className="relative">
                            <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                            <Select
                              name="gender"
                              onValueChange={(value) =>
                                setFieldValue("gender", value)
                              }
                            >
                              <SelectTrigger
                                id="gender"
                                className="pl-10 h-11 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                              >
                                <SelectValue placeholder="เลือกเพศ" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">เพศชาย</SelectItem>
                                <SelectItem value="2">เพศหญิง</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          {/* {errors.gender && touched.gender && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.gender}
                          </p>
                        )} */}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender" className="text-sm font-medium">
                          บทบาท
                        </Label>
                        <div className="relative">
                          <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400 pointer-events-none" />
                          <Select
                            name="gender"
                            onValueChange={(value) =>
                              setFieldValue("gender", value)
                            }
                          >
                            <SelectTrigger
                              id="gender"
                              className="pl-10 h-11 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                              <SelectValue placeholder="เลือกบทบาท" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">ผู้ดูแลระบบ/แอดมิน</SelectItem>
                              <SelectItem value="2">ผู้ใช้งานทั่วไป</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        {/* {errors.gender && touched.gender && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.gender}
                          </p>
                        )} */}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="w-full h-12 ">
                        เพิ่มผู้ใช้
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
