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
import { empoyee_survey, imageChager, ins, typeele } from "@/app/inteface/charger";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon, ChevronLeft, ImageIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { imagesArray } from "@/app/inteface/solar";
const Viewf = ({ dataS }: any) => {
  const items = ["ALL", "PVC", "EMT", "HDPE", "IMC"];
  console.log("dataS", dataS);
  const router = useRouter();
  return (
    <>
      <div className="flex items-center gap-4 p-2">
        <Button variant="outline" size="icon" className="h-7 w-7">
          <ChevronLeft className="h-4 w-4" onClick={() => router.back()} />
          <span className="sr-only">Back</span>
        </Button>
        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
          Information
        </h1>
        <Badge variant="outline" className="ml-auto sm:ml-0">
          In Charger
        </Badge>

        <div className="hidden items-center gap-2 md:ml-auto md:flex">
          <Button
            variant="outline"
            size="sm"
            type="button"
            className="uppercase"
            onClick={() => router.back()}
          >
            pdf
          </Button>
          <Button
            variant="outline"
            size="sm"
            type="button"
            className="uppercase"
            onClick={() => router.back()}
          >
            edit
          </Button>
        </div>
      </div>
      <div className="grid gap-4 p-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8 overflow-auto ">
        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
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
                      ชื่อโครงการ (ชื่อภาษาอังกฤษ): {dataS?.pgen}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ชื่อโครงการ (ชื่อภาษาไทย): {dataS?.pjth}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      วันที่บันทึก: {dataS?.day}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      Lat , Long: {dataS?.latlong}
                    </Label>
                    <div className="relative w-full"></div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ชื่อ - นามสกุล (เจ้าหน้าที่โครงการ): {dataS?.name_po}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      เบอร์ติดต่อ (เจ้าหน้าที่โครงการ): {dataS?.tel_po}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      LineID (เจ้าหน้าที่โครงการ): {dataS?.line_po}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      e-mail (เจ้าหน้าที่โครงการ): {dataS?.email_po}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      เจ้าหน้าที่สำรวจ (ชื่อ - นามสกุล): {dataS?.staff_survey}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      เบอร์เจ้าหน้าที่สำรวจ (เจ้าหน้าที่โครงการ):{" "}
                      {dataS?.tel_survey}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ประเภทของระบบไฟฟ้า ที่สามารถใช้งานได้ (ระบบไฟฟ้า):{" "}
                      {dataS?.type_ele}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      Main ควบคุม (ระบบไฟฟ้า): {dataS?.main_ele}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      การยึดเครื่องประจุไฟฟ้า (รูปแบบการติดตั้ง) (ระบบไฟฟ้า):{" "}
                      {dataS?.install_ele}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      งานที่จอดรถยนต์ไฟฟ้า (ระบบไฟฟ้า): {dataS?.parking_ele}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      หมายเหตุ (ระบบไฟฟ้า): {dataS?.remark}
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-0">
            <CardHeader>
              <CardTitle>MOU Info</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ที่ตั้ง : {dataS?.mou_address}
                    </Label>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ธนาคาร : {dataS?.mou_bank}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      สาขา : {dataS?.mou_major}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ประเภทบัญชี : {dataS?.mou_type_bank}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      เลขที่บัญชี : {dataS?.mou_no}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ชื่อบัญชี : {dataS?.mou_acc_name}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      เลขประจำตัวผู้เสียภาษี : {dataS?.mou_taxt_no}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      อัตราส่วนแบ่ง : {dataS?.mou_rate}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      วันที่เริ่มสัญญา - วันที่สิ้นสุดสัญญา : {dataS?.mou_date}
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
              <CardTitle>รูปถ่ายภาพบ้าน</CardTitle>
              <CardDescription>บริเวณบ้าน (ทั้งหลัง)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                {imageChager.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <Label
                      htmlFor={`picture-house-${index}`}
                           className="block h-12 text-sm leading-tight"
                    >
                      {image.name}
                    </Label>
                    <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
                      {/* <Input
                        id={`picture-house-${index}`}
                        type="file"
                        accept="image/*"
                        className="sr-only"
                      /> */}
                      {dataS?.image_mou && dataS?.image_mou[index] ? (
                        <div className="relative w-full h-48">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}${dataS?.image_mou[index].path}`}
                            alt={`Preview ${image.id}`}
                            className="w-full  object-cover h-full rounded-md"
                            width={800}
                            height={800}
                          />
                        </div>
                      ) : (
                        <label
                          htmlFor={`picture-house-${index}`}
                          className="flex flex-col items-center justify-center w-full h-48 cursor-pointer"
                        >
                          <ImageIcon className="h-10 w-10 text-gray-400" />
                          <span className="mt-2 text-sm text-gray-500">
                            ไม่มีรูปภาพ
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
          <Card x-chunk="dashboard-07-chunk-3">
            <CardHeader>
              <CardTitle>Survey Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="status">สถานะ: {dataS?.status}</Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>งานเดินท่อร้อยสาย</CardTitle>
              <CardDescription>
                หากเลือก ALL จะเป็นการเลือกทุกอย่าง
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <ToggleGroup
                  size="lg"
                  type="multiple"
                  value={dataS?.work_tor_ele} // Bind selected items to the ToggleGroup
                  variant="outline"
                  // onValueChange={handleChangeAll} // Handle the value change
                >
                  {items.map((item) => (
                    <ToggleGroupItem key={item} value={item}>
                      {item}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-07-chunk-5">
            <CardHeader>
              <CardTitle>งานเดินสายไฟฟ้า</CardTitle>
              <CardDescription>
                ระยะเดินสายไฟฟ้าพร้อมงานท่อ (ระยะจริงทั้งหมด)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ระยะเดินทั้งหมด : {dataS?.work_ele}
                </Label>
              </div>
              <div>
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ระยะเดินฟรี : {dataS?.work_free_ele}
                </Label>
              </div>
              <div>
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ระยะ : {dataS?.work_true_ele}
                </Label>{" "}
              </div>

              {/* <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ระยะทั้งหมด</TableHead>
                <TableHead>ระยะเดินฟรี</TableHead>
                <TableHead>ระยะเดินจริง</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Label htmlFor="stock-1" className="sr-only">
                    Stock
                  </Label>
                  <Input
                    id="stock-1"
                    type="number"
                    value={values.work_ele}
                    name="work_ele"
                    onChange={handleWork}
                  />
                </TableCell>
                <TableCell>
                  <Label htmlFor="stock-1" className="sr-only">
                    Stock
                  </Label>
                  <Input
                    id="stock-1"
                    type="number"
                    disabled
                    defaultValue="40"
                  />
                </TableCell>
                <TableCell>
                  <Label htmlFor="price-1" className="sr-only">
                    Price
                  </Label>
                  <Input id="price-1" type="number" value={values.work_ele - 40} disabled />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table> */}
            </CardContent>
          </Card>
        </div>



      </div>
      <div className="grid gap-4 p-4  overflow-auto ">
        <Card x-chunk="dashboard-07-chunk-0">
          <CardHeader>
            <CardTitle>Installation Detail</CardTitle>
            <CardDescription>รายละเอียดการติดตั้ง</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    วันที่ทำการติดตั้งระบบ Charger:
                  </Label>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    บริษัทติดตั้งระบบ Charger:
                  </Label>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    แนบเอกสารใบเสนอราคา (Extra Work):
                  </Label>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    SerialNumber 1 (AC 7kW):
                  </Label>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    Pincode:
                  </Label>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    RFID Card No.1-1:
                  </Label>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    RFID Card No.1-2:
                  </Label>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    SIM Card Number:
                  </Label>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    SIM PUK:
                  </Label>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    วันเปิดใช้บริการ SIM Card:
                  </Label>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    SerialNumber 2 (AC 7kW):
                  </Label>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    Pincode:
                  </Label>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    RFID Card No.2-1:
                  </Label>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    RFID Card No.2-2:
                  </Label>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    SIM Card Number:
                  </Label>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    SIM PUK:
                  </Label>
                </div>

                <div className="flex flex-col gap-2">
                  <Label htmlFor="date" className="font-medium text-gray-500">
                    วันเปิดใช้บริการ SIM Card:
                  </Label>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Viewf;
