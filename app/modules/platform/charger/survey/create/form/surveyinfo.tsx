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
const Surveyinfo = ({
  date,
  setDate,
  values,
  setFieldValue,
  handleChange,
  touched,
  errors,
}: any) => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-0" >
        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">ข้อมูลการสำรวจ</CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
            รายละเอียดและข้อมูลสำคัญสำหรับการสำรวจ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid  grid-cols-1  md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  {touched.pgen && errors.pgen ? (
                    <div style={{ color: "red" }}>
                      ชื่อโครงการ (ชื่อภาษาอังกฤษ):{errors.pgen}
                    </div>
                  ) : (
                    "ชื่อโครงการ (ชื่อภาษาอังกฤษ)"
                  )}
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="pgen"
                  value={values.pgen}
                  placeholder=""
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ชื่อโครงการ (ชื่อภาษาไทย)
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="pjth"
                  value={values.pjth}
                  onChange={handleChange}
                />
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
                    name="latlong"
                    value={values.latlong}
                    onChange={handleChange}
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
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="name_po"
                  value={values.name_po}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  เบอร์ติดต่อ (เจ้าหน้าที่โครงการ)
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="tel_po"
                  value={values.tel_po}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  LineID (เจ้าหน้าที่โครงการ)
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="line_po"
                  value={values.line_po}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  e-mail (เจ้าหน้าที่โครงการ)
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="email_po"
                  value={values.email_po}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  เจ้าหน้าที่สำรวจ
                </Label>
                <Select
                  name="staff_survey"
                  onValueChange={(value) =>
                    setFieldValue("staff_survey", value)
                  }
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
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="tel_survey"
                  value={values.tel_survey}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ประเภทของระบบไฟฟ้า ที่สามารถใช้งานได้
                </Label>
                <Select
                  name="type_ele"
                  onValueChange={(value) => setFieldValue("type_ele", value)}
                >
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
                <Select
                  name="main_ele"
                  onValueChange={(value) => setFieldValue("main_ele", value)}
                >
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
                <Select
                  name="install_ele"
                  onValueChange={(value) => setFieldValue("install_ele", value)}
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกรูปแบบการติดตั้ง" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ยึดผนัง">ยึดผนัง</SelectItem>
                    <SelectItem value="ตั้งพื้นพร้อมขา">
                      ตั้งพื้นพร้อมขา
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  งานที่จอดรถยนต์ไฟฟ้า
                </Label>
                <Input
                  id="name"
                  type="number"
                  className="w-full"
                  name="parking_ele"
                  value={values.parking_ele}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  หมายเหตุ
                </Label>
                <Textarea
                  id="description"
                  className="min-h-32 w-full"
                  onChange={(e) => setFieldValue("remark", e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Surveyinfo;
