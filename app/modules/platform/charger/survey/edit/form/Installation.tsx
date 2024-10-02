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

const Installation = ({dateIns,setDateIns,dateSim1,setDateSim1,dateSim2,setDateSim2}:any) => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-0">
      <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
          Installation Detail
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
          รายละเอียดการติดตั้ง
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6">
            <div className="grid  grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  วันที่ทำการติดตั้งระบบ Charger
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateIns && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="text-gray-300 mr-2 h-4 w-4" />

                      {dateIns ? (
                        format(dateIns, "MM/dd/yyyy")
                      ) : (
                        <span className="text-gray-300">โปรดเลือกวันที่</span>
                      )}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateIns}
                      onSelect={setDateIns}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  บริษัทติดตั้งระบบ Charger
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  แนบเอกสารใบเสนอราคา (Extra Work)
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  SerialNumber 1 (AC 7kW)
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  Pincode
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                RFID Card No.1-1
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                RFID Card No.1-2
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                SIM Card Number
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                SIM PUK
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                วันเปิดใช้บริการ SIM Card
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateSim1 && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="text-gray-300 mr-2 h-4 w-4" />

                      {dateSim1 ? (
                        format(dateSim1, "MM/dd/yyyy")
                      ) : (
                        <span className="text-gray-300">โปรดเลือกวันที่</span>
                      )}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateSim1}
                      onSelect={setDateSim1}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  SerialNumber 2 (AC 7kW)
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  Pincode
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                RFID Card No.2-1
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                RFID Card No.2-2
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                SIM Card Number
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                SIM PUK
                </Label>
                <Input id="name" type="text" className="w-full" name="pjth" />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                วันเปิดใช้บริการ SIM Card
                </Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !dateSim2 && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="text-gray-300 mr-2 h-4 w-4" />

                      {dateSim2 ? (
                        format(dateSim2, "MM/dd/yyyy")
                      ) : (
                        <span className="text-gray-300">โปรดเลือกวันที่</span>
                      )}
                    </Button>
                  </PopoverTrigger>

                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={dateSim2}
                      onSelect={setDateSim2}
                      initialFocus
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

export default Installation;
