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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { bank_type, banks, rate_type } from "@/app/inteface/charger";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { addDays, format } from "date-fns";
import { cn } from "@/lib/utils";
const Mouinfo = ({
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
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
            ข้อมูลการสำรวจ MOU
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
            รายละเอียดและข้อมูลสำคัญสำหรับการ MOU
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ที่ตั้ง
                </Label>
                <Textarea
                  id="description"
                  className="min-h-32"
                  onChange={(e) => setFieldValue("mou_address", e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2  gap-2 md:gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ธนาคาร
                </Label>
                <Select
                  name="mou_bank"
                  onValueChange={(value) => setFieldValue("mou_bank", value)}
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกธนาคาร" />
                  </SelectTrigger>
                  <SelectContent>
                    {banks.map((bank) => (
                      <>
                        <SelectItem value={bank.name}>{bank.name}</SelectItem>
                      </>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  สาขา
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="mou_major"
                  value={values.mou_major}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ประเภทบัญชี
                </Label>
                <Select
                  name="mou_type_bank"
                  onValueChange={(value) =>
                    setFieldValue("mou_type_bank", value)
                  }
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกประเภทบัญชี" />
                  </SelectTrigger>
                  <SelectContent>
                    {bank_type.map((bank) => (
                      <>
                        <SelectItem value={bank.name}>{bank.name}</SelectItem>
                      </>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  เลขที่บัญชี
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="mou_no"
                  value={values.mou_no}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ชื่อบัญชี
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="mou_acc_name"
                  value={values.mou_acc_name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  เลขประจำตัวผู้เสียภาษี
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="mou_taxt_no"
                  value={values.mou_taxt_no}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  อัตราส่วนแบ่ง
                </Label>
                <Select
                  name="mou_rate"
                  onValueChange={(value) => setFieldValue("mou_rate", value)}
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกอัตราส่วนแบ่ง" />
                  </SelectTrigger>
                  <SelectContent>
                    {rate_type.map((bank) => (
                      <>
                        <SelectItem value={bank.name}>{bank.name}</SelectItem>
                      </>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  วันที่เริ่มสัญญา - วันที่สิ้นสุดสัญญา
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date2 && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date2?.from ? (
                        date2.to ? (
                          <>
                            {format(date2.from, "MM/dd/yyyy")} -{" "}
                            {format(date2.to, "MM/dd/yyyy")}
                          </>
                        ) : (
                          format(date2.from, "MM/dd/yyyy")
                        )
                      ) : (
                        <span className="text-gray-300">โปรดเลือกวันที่</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date2?.from}
                      selected={date2}
                      onSelect={setDate2}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Mouinfo;
