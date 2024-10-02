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
import { Briefcase, Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion"
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

// const getStatusColor = (status:string) => {
//  switch (status) {
//    case 'ADMIN':
//      return 'bg-red-500'
//    case 'USER':
//      return 'bg-gray-500'
//    default:
//      return 'bg-gray-400'
//  }
// }

// const renderTextGebder = (text:string) =>{
//  switch (text) {
//   case '1':
//     return 'ชาย'
//   case '2':
//     return 'หญิง'
//   default:
//     return 'ไม่ระบุ'
// }

// }

const getStatusColor = (role: string) => {
  switch (role?.toLowerCase()) {
    case 'admin':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
    case 'manager':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
    default:
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
  }
}

const renderTextGender = (gender: string) => {
  switch (gender) {
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

      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 border-blue-100 dark:border-blue-900">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-blue-600 dark:text-blue-300 pb-2">
            โปรไฟล์ผู้ใช้
          </DialogTitle>
        </DialogHeader>
        <Card className="w-full overflow-hidden bg-transparent shadow-none border-0">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center space-y-4 mb-6 md:mb-0"
              >
                <div className="relative">
                  <Avatar className="w-48 h-48 border-4 border-white dark:border-gray-700 shadow-lg">
                    <AvatarImage src={getUserId?.avatar || "https://ui.shadcn.com/avatars/02.png"} alt={`${getUserId?.firstName} ${getUserId?.lastName}`} />
                    <AvatarFallback className="text-5xl font-bold bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300">
                      {getUserId?.firstName}{getUserId?.lastName}
                    </AvatarFallback>
                  </Avatar>
                  <Badge className="absolute bottom-2 right-2 text-sm px-3 py-1 bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 rounded-full">
                    {getUserId?.role}
                  </Badge>
                </div>
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{getUserId?.firstName} {getUserId?.lastName}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{getUserId?.email}</p>
                </div>
              </motion.div>
              <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  <InfoItem icon={<Mail className="w-6 h-6" />} label="อีเมล" value={getUserId?.email} />
                  <InfoItem icon={<Phone className="w-6 h-6" />} label="เบอร์โทรศัพท์" value={getUserId?.phone} />
                  <InfoItem icon={<User className="w-6 h-6" />} label="เพศ" value={getUserId?.gender} />
                  <InfoItem icon={<Briefcase className="w-6 h-6" />} label="แผนก" value={getUserId?.department} />
                  <InfoItem icon={<Calendar className="w-6 h-6" />} label="วันที่เข้าร่วม" value={getUserId?.joinDate} />
                  <InfoItem icon={<MapPin className="w-6 h-6" />} label="ที่อยู่" value={getUserId?.address} />
                </motion.div>
              </AnimatePresence>
            </div>
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
    {/* <Dialog open={openDialogViewUsers} onOpenChange={onClose}>
      <DialogContent className="max-w-[360px]  bg-white dark:bg-gray-900">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center text-gray-900 dark:text-white">
            โปรไฟล์ผู้ใช้
          </DialogTitle>
        </DialogHeader>
        <Card className="w-full overflow-hidden bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg">
          <CardContent className="p-6">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <Avatar className="w-32 h-32 border-4 border-white dark:border-gray-800 shadow-xl">
                  <AvatarImage src={getUserId?.profile?.avatar || "https://ui.shadcn.com/avatars/02.png"} alt={`${getUserId?.firstname} ${getUserId?.lastname}`} />
                  <AvatarFallback className="text-3xl font-bold bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white">
                    {getUserId?.firstname.charAt(0)}{getUserId?.lastname.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <Badge className={`absolute bottom-0 right-0 text-xs px-2 py-1 rounded-full ${getStatusColor(getUserId?.role)}`}>
                  {getUserId?.role || 'ไม่ระบุ'}
                </Badge>
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{getUserId?.firstname} {getUserId?.lastname}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{getUserId?.email}</p>
              </div>
              <div className="w-full space-y-4">
                <InfoItem icon={<Phone className="w-5 h-5" />} label="เบอร์โทรศัพท์" value={getUserId?.profile?.telephone || 'ไม่ระบุ'} />
                <InfoItem icon={<User className="w-5 h-5" />} label="เพศ" value={renderTextGender(getUserId?.profile?.gender)} />
                <InfoItem icon={<MapPin className="w-5 h-5" />} label="ที่อยู่" value={getUserId?.profile?.bio || 'ไม่ระบุที่อยู่'} />
                <InfoItem icon={<Briefcase className="w-5 h-5" />} label="แผนก" value={getUserId?.profile?.department || 'ไม่ระบุ'} />
                <InfoItem icon={<Calendar className="w-5 h-5" />} label="วันที่เข้าร่วม" value={getUserId?.profile?.joinDate || 'ไม่ระบุ'} />
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
    </Dialog> */}
 {/* <Dialog open={openDialogViewUsers} onOpenChange={onClose}>
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
    </Dialog> */}

    </>
  );
  function InfoItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
      <div className="flex items-center space-x-3 p-3 bg-white dark:bg-gray-700 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md">
        <div className="flex-shrink-0 text-gray-500 dark:text-gray-400">
          {icon}
        </div>
        <div className="flex-grow">
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</p>
          <p className="text-base font-semibold text-gray-900 dark:text-white">{value}</p>
        </div>
      </div>
    )
  }
};

export default ViewDialog;
