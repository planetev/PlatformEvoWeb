"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
const Changepassword = ({ activeSection, setActiveSection }: any) => {
  return (
    <>
      {activeSection === "change-password" && (
        <Card>
          <CardHeader>
            <CardTitle>เปลี่ยนรหัสผ่าน</CardTitle>
            <CardDescription>
              อัปเดตรหัสผ่านของคุณเพื่อความปลอดภัย
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password">รหัสผ่านปัจจุบัน</Label>
              <Input
                id="current-password"
                type="password"
                placeholder="กรอกรหัสผ่านปัจจุบัน"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">รหัสผ่านใหม่</Label>
              <Input
                id="new-password"
                type="password"
                placeholder="กรอกรหัสผ่านใหม่"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">ยืนยันรหัสผ่านใหม่</Label>
              <Input
                id="confirm-password"
                type="password"
                placeholder="กรอกรหัสผ่านใหม่อีกครั้ง"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>เปลี่ยนรหัสผ่าน</Button>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default Changepassword;
