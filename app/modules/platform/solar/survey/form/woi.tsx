import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

import React from "react";
import { addDays, format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { empoyee_survey } from "@/app/inteface/charger";
const Woi = ({
  date,
  setDate,
  date1,
  setDate1,
  date2,
  setDate2,
  values,
  setFieldValue,
  handleChange,
  touched,
  errors,
}: any) => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
      <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">Work order information</CardTitle>
      <CardDescription className="text-sm sm:text-base md:text-sm">
          ข้อมูลเกี่ยวกับใบสั่งงาน
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  Wos NO:
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="wno"
                  onChange={handleChange}
                  value={values.wno}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                  วันที่นัดหมาย
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">

                  {touched.customer_name && errors.customer_name ? (
                    <div style={{ color: "red" }}>ชื่อลูกค้า:{errors.customer_name}</div>
                  ) : "ชื่อลูกค้า"}
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="customer_name"
                  onChange={handleChange}
                  value={values.customer_name}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                   {touched.tel && errors.tel ? (
                    <div style={{ color: "red" }}>{errors.tel}</div>
                  ) : "เบอร์ติดต่อ"}
                </Label>

                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="tel"
                  onChange={handleChange}
                  value={values.tel}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  วันที่ติดตั้ง
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date1 && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="text-gray-300 mr-2 h-4 w-4" />
                      {date1 ? (
                        format(date1, "MM/dd/yyyy")
                      ) : (
                        <span className="text-gray-300">โปรดเลือกวันที่</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date1}
                      onSelect={setDate1}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                  วันที่เก็บ
                </Label>

                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date2 && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="text-gray-300 mr-2 h-4 w-4" />
                      {date2 ? (
                        format(date2, "MM/dd/yyyy")
                      ) : (
                        <span className="text-gray-300">โปรดเลือกวันที่</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date2}
                      onSelect={setDate2}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="grid ggrid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  กำหนดผลิตเป้าหมาย
                </Label>
                <div className="relative">
                  <Input
                    id="name"
                    type="number"
                    className="w-full"
                    name="production_targets"
                    onChange={handleChange}
                    value={values.production_targets}
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    kw
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                  ผู้สำรวจ
                </Label>

                <Select
                  name="servey_name"
                  onValueChange={(value) => setFieldValue("servey_name", value)}
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                  Lat , Long
                </Label>
                <div className="relative w-full">
                  <Input
                    id="location"
                    type="text"
                    className="w-full h-10 pr-20" // Add padding to the right to avoid text overlapping the button
                    name="longlat"
                    onChange={handleChange}
                    value={values.longlat}
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
                <Label htmlFor="location" className="font-medium text-gray-500">
                  Location
                </Label>

                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="location"
                  onChange={handleChange}
                  value={values.location}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Woi;
