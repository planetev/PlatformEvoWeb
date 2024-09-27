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
import { createUser, getUserById } from "@/service/users/userCallAPI";
import { useAuth } from "@/app/context/AuthContext";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, MapPin, Phone, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ViewDialog = ({ openDialogViewUsers, onClose,id }: any) => {
const { token, session } = useAuth();


 const {
  isPending,
  error,
  data: getUserId,
  isLoading,
  refetch,
} = useQuery({
  queryKey: ["get-id-users"],
  queryFn: async () => {
    try {
      const res: any = await getUserById({ id ,token });

      return res;
    } catch (err) {
      throw err;
    }

  },
});

useEffect(() => {
 if (openDialogViewUsers && id) {
   refetch();
 }
}, [openDialogViewUsers, id, refetch]);

const getStatusColor = (status:string) => {
 switch (status) {
   case 'ADMIN':
     return 'bg-red-500'
   case 'USER':
     return 'bg-gray-500'
   default:
     return 'bg-gray-400'
 }
}

const renderTextGebder = (text:string) =>{
 switch (text) {
  case '1':
    return 'ชาย'
  case '2':
    return 'หญิง'
  default:
    return 'ไม่ระบุ'
}

}

  return (
    <>
 <Dialog open={openDialogViewUsers} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            โปรไฟล์ผู้ใช้
          </DialogTitle>
        </DialogHeader>
        <Card className="w-full overflow-hidden bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-800 shadow-lg">
                  <AvatarImage src={getUserId?.profile?.avatar || "https://ui.shadcn.com/avatars/02.png"} />
                  <AvatarFallback className="text-2xl bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                    {getUserId?.firstname?.charAt(0)}{getUserId?.lastname?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Badge className={`absolute bottom-0 right-0 ${getStatusColor(getUserId?.role)}`}>
                  {getUserId?.role || 'ไม่ระบุ'}
                </Badge>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{getUserId?.firstname} {getUserId?.lastname}</h2>
              <div className="w-full space-y-3">
                <div className="flex items-center space-x-3 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Mail className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-800 dark:text-gray-200">{getUserId?.email}</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Phone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-800 dark:text-gray-200">{getUserId?.profile?.telephone || 'ไม่ระบุ'}</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <User className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-800 dark:text-gray-200">{renderTextGebder(getUserId?.profile?.gender) || 'ไม่ระบุ'}</span>
                </div>
                <div className="flex items-center space-x-3 p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <MapPin className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <span className="text-gray-800 dark:text-gray-200">{getUserId?.profile?.bio || 'ไม่ระบุที่อยู่'}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} className="w-full mt-4 bg-white text-gray-900 border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700">
            ปิด
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
      {/* <Dialog open={openDialogViewUsers} onOpenChange={onClose}>
        <DialogTrigger asChild></DialogTrigger>
        <DialogContent>
          <form>
            <DialogHeader>
              <DialogTitle className="text-2xl">ดูข้อมูล</DialogTitle>
              <DialogDescription className="text-lg">
              ดูข้อมูลของผู้ใช้งาน:{getUserId?.email}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="username">อีเมล:{getUserId?.email}</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">รหัสผ่าน</Label>

                </div>

                <div className="space-y-2">
                  <Label htmlFor="firstname">ชื่อ-นามสกุล:{getUserId?.firstname +' ' + getUserId?.lastname}</Label>

                </div>


                <div className="space-y-2">
                  <Label htmlFor="telephone">เบอร์โทรศัพท์:{getUserId?.profile?.telephone }</Label>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="gender">เพศ:{getUserId?.profile?.gender}</Label>
                </div>
              </div>
            </div>
            <DialogFooter>
              <div className="flex items-center justify-end">
                <Button variant={'destructive'} type={'button'} className="w-full  " onClick={onClose}>
                  Close
                </Button>
              </div>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog> */}
    </>
  );
};

export default ViewDialog;
