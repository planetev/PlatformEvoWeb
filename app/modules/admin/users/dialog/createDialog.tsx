import React from "react";
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
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { createUser } from "@/service/users/userCallAPI";
import { useAuth } from "@/app/context/AuthContext";

const CreateDialog = ({ openDialogCreateUsers, onClose,refetch,setOpenDialogCreateUsers }: any) => {
  const { token, session } = useAuth();
  const validationSchema = Yup.object({
    email: Yup.string().required("กรุณากรอกอีเมล"),
  });

  const initialData: any = {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    telephone: "",
    gender: "",
  };

  const createUserData = useMutation({
    mutationFn: async ({ token, payload }: any) => {
      return await createUser({ token, payload });
    },
    onSuccess: (res) => {

      if (res) {
       refetch();
       setOpenDialogCreateUsers(false);
        toast({
          title: "Create Successful",
          className: "bg-green-500 text-white font-semibold",
          description: "สร้างข้อมูลสำเร็จ",
        });

        // router.push("/platform/solar",);
        // navigateToSolarTab("2");
      }
    },
    onError: (err) => {
      console.log(err);
      toast({
        title: "Create Unsuccessful",
        className: "bg-red-500 text-white font-semibold",
        description: "ตรวจพบความผิดปกติ",
      });
    },
  });

  return (
    <>
      <Dialog open={openDialogCreateUsers} onOpenChange={onClose}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <Formik
            initialValues={initialData}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              const payload = {
                email: values.email,
                password: values.password,
                firstname: values.firstname,
                lastname: values.lastname,
                telephone: values.telephone,
                gender: values.gender,
              };

              createUserData.mutate({ token, payload });
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
                        เพิ่มผู้ใช้ใหม่
                      </DialogTitle>
                      <DialogDescription className="text-lg">
                        กรอกข้อมูลด้านล่างเพื่อสร้างบัญชีผู้ใช้ใหม่
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-6 py-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="username">ชื่อผู้ใช้</Label>
                          <Input
                            id="email"
                            type="email"
                            className="h-12"
                            value={values.email}
                            onChange={handleChange}
                            placeholder="กรอกอีเมล"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="password">รหัสผ่าน</Label>
                          <Input
                            id="password"
                            type="password"
                            className="h-12"
                            placeholder="กรอกรหัสผ่าน"
                            value={values.password}
                            onChange={handleChange}
                          />
                        </div>

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
                            value={values.telephone}
                            onChange={handleChange}
                            placeholder="กรอกเบอร์โทรศัพท์"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="gender">เพศ</Label>
                          <Select
                            name="gender"
                            onValueChange={(value) =>
                              setFieldValue("gender", value)
                            }
                          >
                            <SelectTrigger
                              id="category"
                              aria-label="Select category"
                              className="h-12"
                            >
                              <SelectValue placeholder="เลือกเจ้าหน้าที่สำรวจ" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={"1"}>เพศชาย</SelectItem>
                              <SelectItem value={"2"}>เพศหญืง</SelectItem>
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

export default CreateDialog;
