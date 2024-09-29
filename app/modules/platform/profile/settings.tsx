"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Bell, Camera, User,Sun,Globe,Moon } from "lucide-react";
import React, { useRef, useState } from "react";

const Settings = ({ activeSection, setActiveSection }: any) => {
  return (
  <>
  {activeSection === "settings" && (
            <Card>
              <CardHeader>
                <CardTitle>การตั้งค่า</CardTitle>
                <CardDescription>จัดการการตั้งค่าบัญชีของคุณ</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Bell className="text-gray-500" size={24} />
                    <div>
                      <p className="font-medium">การแจ้งเตือน</p>
                      <p className="text-sm text-gray-500">รับการแจ้งเตือนทางอีเมล</p>
                    </div>
                  </div>
                  {/* <Switch /> */}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Globe className="text-gray-500" size={24} />
                    <div>
                      <p className="font-medium">ภาษา</p>
                      <p className="text-sm text-gray-500">เลือกภาษาที่ต้องการใช้</p>
                    </div>
                  </div>
                  <select className="border rounded p-2">
                    <option>ไทย</option>
                    <option>English</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Sun className="text-gray-500" size={24} />
                    <div>
                      <p className="font-medium">ธีม</p>
                      <p className="text-sm text-gray-500">เลือกธีมสว่างหรือมืด</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sun size={20} />
                    {/* <Switch /> */}
                    <Moon size={20} />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button>บันทึกการตั้งค่า</Button>
              </CardFooter>
            </Card>
          )}



  </>
  )
}

export default Settings