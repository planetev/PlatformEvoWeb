"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Camera, User } from "lucide-react";
import React, { useRef, useState } from "react";

const Personalinfo = ({ activeSection, setActiveSection,getUserprofileId }: any) => {
 const fileInputRef = useRef<HTMLInputElement>(null)
 const [avatarSrc, setAvatarSrc] = useState("https://ui.shadcn.com/avatars/02.png")
 const handleAvatarClick = () => {
  fileInputRef.current?.click()
}
  return <>

  {activeSection === "personal-info" && (
            <Card>
            <CardHeader>
              <CardTitle>ข้อมูลส่วนตัว</CardTitle>
              <CardDescription>แก้ไขข้อมูลส่วนตัวของคุณ</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative cursor-pointer" onClick={handleAvatarClick}>
                  <Avatar className="w-32 h-32">
                    <AvatarImage src={avatarSrc} alt="Profile picture" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 transition-opacity">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                </div>
                <Input
                  // ref={fileInputRef}
                  id="profile-picture"
                  type="file"
                  accept="image/*"
                  // onChange={handleFileChange}
                  className="hidden"
                />
                <Label htmlFor="profile-picture" className="text-sm text-muted-foreground">
                  คลิกที่รูปเพื่ออัปโหลดรูปโปรไฟล์ใหม่
                </Label>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">ชื่อจริง</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <Input id="name" placeholder="กรอกชื่อของคุณ" className="pl-10" value={getUserprofileId?.firstname} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">นามสกุล</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
                    <Input id="name" placeholder="กรอกนามสกุลของคุณ" className="pl-10" value={getUserprofileId?.lastname} />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">อีเมล</Label>
                <Input id="email" placeholder="กรอกอีเมลของคุณ" value={getUserprofileId?.email} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">เบอร์โทรศัพท์</Label>
                <Input id="phone" placeholder="กรอกเบอร์โทรศัพท์ของคุณ"  value={getUserprofileId?.profile?.telephone}/>
              </div>
            </CardContent>
            <CardFooter>
              <Button>บันทึกการเปลี่ยนแปลง</Button>
            </CardFooter>
          </Card>
          )}

  </>;
};

export default Personalinfo;
