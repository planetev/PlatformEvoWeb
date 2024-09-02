"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { empoyee_survey } from "@/app/inteface/charger";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
const Surveyinfo = ({ date, setDate }: any) => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-0">
        <CardHeader>
          <CardTitle>Survey Info</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ชื่อโครงการ (ชื่อภาษาอังกฤษ)
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="wno"
                  placeholder=""
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ชื่อโครงการ (ชื่อภาษาไทย)
                </Label>
                <Input id="name" type="text" className="w-full" name="wno" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  วันที่บันทึก
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="text-gray-300 mr-2 h-4 w-4" />

                      {date ? (
                        format(date, "MM/dd/yyyy")
                      ) : (
                        <span className="text-gray-300">โปรดเลือกวันที่</span>
                      )}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  Lat , Long
                </Label>
                <div className="relative w-full">
                  <Input
                    id="location"
                    type="text"
                    className="w-full h-10 pr-20" // Add padding to the right to avoid text overlapping the button
                    name="longlat"
                    // onChange={handleChange}
                    // value={values.longlat}
                  />
                  <Button
                    size="sm"
                    variant="secondary"
                    className="absolute right-0 top-0 h-full px-4"
                  >
                    <Link
                      target="_blank"
                      href="https://www.google.com/maps/search/?api=1&query=13.844844844814212,100.63296652042118"
                    >
                      Maps
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ชื่อ - นามสกุล (เจ้าหน้าที่โครงการ)
                </Label>
                <Input id="name" type="text" className="w-full" name="wno" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  เบอร์ติดต่อ (เจ้าหน้าที่โครงการ)
                </Label>
                <Input id="name" type="text" className="w-full" name="wno" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  LineID (เจ้าหน้าที่โครงการ)
                </Label>
                <Input id="name" type="text" className="w-full" name="wno" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  e-mail (เจ้าหน้าที่โครงการ)
                </Label>
                <Input id="name" type="text" className="w-full" name="wno" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  เจ้าหน้าที่สำรวจ
                </Label>
                <Select
                  name="status"
                  // onValueChange={(value) =>
                  //   setFieldValue("status", value)
                  // }
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกเจ้าหน้าที่สำรวจ" />
                  </SelectTrigger>
                  <SelectContent>
                    {empoyee_survey.map((i, x: number) => (
                      <>
                        <SelectItem key={x} value={i.name}>
                          {i.name}
                        </SelectItem>
                      </>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  เบอร์เจ้าหน้าที่สำรวจ
                </Label>
                <Input id="name" type="text" className="w-full" name="wno" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ประเภทของระบบไฟฟ้า ที่สามารถใช้งานได้
                </Label>
                <Select>
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="ประเภทของระบบไฟฟ้า" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3 phase">3 phase</SelectItem>
                    <SelectItem value="1 phase">1 phase</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  Main ควบคุม
                </Label>
                <Select>
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือก Main ควบคุม" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3 phase">3 phase</SelectItem>
                    <SelectItem value="1 phase">1 phase</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  การยึดเครื่องประจุไฟฟ้า (รูปแบบการติดตั้ง)
                </Label>
                <Select>
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกรูปแบบการติดตั้ง" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3 phase">ยึดผนัง</SelectItem>
                    <SelectItem value="1 phase">ตั้งพื้นพร้อมขา</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  งานที่จอดรถยนต์ไฟฟ้า
                </Label>
                <Input id="name" type="number" className="w-full" name="wno" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  หมายเหตุ
                </Label>
                <Textarea id="description" className="min-h-32" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Surveyinfo;
