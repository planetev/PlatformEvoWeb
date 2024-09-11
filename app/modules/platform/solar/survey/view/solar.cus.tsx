"use client";
import {
  imagesArray,
  imagesIN,
  imagesMiter,
  imagesOut,
  imagesSolarE,
  Inverter,
} from "@/app/inteface/solar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ImageIcon, ZoomIn } from "lucide-react";
import React from "react";
import { useRouter } from "next/navigation";

const SolarCus = ({ listGetID }: any) => {
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
          In Solar
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
              <CardTitle>Work order information</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      Wos NO: {listGetID?.wno || "N/A"}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      วันที่นัดหมาย :{listGetID?.datebook || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ชื่อลูกค้า: {listGetID?.customer_name || "N/A"}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      เบอร์ติดต่อ: {listGetID?.tel || "N/A"}
                    </Label>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      วันที่ติดตั้ง : {listGetID?.date_Installation || "N/A"}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      วันที่เก็บ: {listGetID?.collection_date || "N/A"}
                    </Label>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      กำหนดผลิตเป้าหมาย:{" "}
                      {listGetID?.production_targets || "N/A"} kw
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      ผู้สำรวจ: {listGetID?.servey_name || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      Lat , Long: {listGetID?.longlat || "N/A"}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      Location: {listGetID?.location || "N/A"}
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
              <CardTitle>Survey information</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ประเภทอาคาร: {listGetID?.building_type || "N/A"}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      ชนิดวัสดุหลังคา: {listGetID?.material_type || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      สภาพอายุหลังคา (ปี) : {listGetID?.roof_condition || "N/A"}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      ความลาดเอียง (องศา): {listGetID?.slope || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ทิศของหลังคา: {listGetID?.direction || "N/A"}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      ขนาดของพื้นที่หลังคา (ตร.ม.):{" "}
                      {listGetID?.size_roof || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      โครงหลังคาทำจากวัสดุ: {listGetID?.frame_made || "N/A"}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      ระบบสายดิน: {listGetID?.grounding || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      ข้อมูลอินเตอร์เน็ต: {listGetID?.internet || "N/A"}
                    </Label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      ความเเรงสัญญา WIFI : {listGetID?.wifi || "N/A"} ขีด
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      การเชื่อมต่อไฟฟ้า: {listGetID?.solar_type || "N/A"}
                    </Label>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label
                      htmlFor="location"
                      className="font-medium text-gray-500"
                    >
                      ผลการสำรวจ : {listGetID?.results || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="date" className="font-medium text-gray-500">
                      หมายเหตุ : {listGetID?.note || "N/A"}
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-07-chunk-1">
            <CardHeader>
              <CardTitle>สรุปชุดที่ใช้งาน</CardTitle>
              <CardDescription>
                Lipsum dolor sit amet, consectetur adipiscing elit
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      สรุปชุดที่ใช้งาน: {listGetID?.total_rs || "N/A"}
                    </Label>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      inverter ที่กำลังผลิต: {listGetID?.inverter || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      PV panal (แผ่น): {listGetID?.panel || "N/A"}
                    </Label>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      Mounting Type: {listGetID?.mounting || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="grid gap-3">
                    <Label
                      htmlFor="name"
                      className="font-medium text-gray-500 flex"
                    >
                      BOQ
                    </Label>
                    <Table>
                      <TableCaption>A list of your recent boq.</TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">No</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Brand</TableHead>
                          <TableHead>Model</TableHead>
                          <TableHead>Qty</TableHead>
                          <TableHead>Unit</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {listGetID?.boq?.map((bq: any, x: number) => (
                          <TableRow key={x}>
                            <TableCell className="font-medium">
                              {bq.id}
                            </TableCell>
                            <TableCell>{bq.description}</TableCell>
                            <TableCell>{bq.brand}</TableCell>
                            <TableCell>{bq.model}</TableCell>
                            <TableCell>{bq.qty}</TableCell>
                            <TableCell>{bq.unit}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
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
                {imagesArray.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <Label
                      htmlFor={`picture-house-${index}`}
                      className="text-sm font-medium text-gray-700"
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
                      {listGetID?.imagehome && listGetID?.imagehome[index] ? (
                        <div className="relative w-full h-48">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}${listGetID?.imagehome[index].path}`}
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

          <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
              <CardTitle>รูปถ่ายมิเตอร์ไฟฟ้า</CardTitle>
              <CardDescription>
                ขนาดมิเตอร์ไฟฟ้า (พร้อมเลขทีมิเตออร์)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                {imagesMiter.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <Label
                      htmlFor={`picture-house-${index}`}
                      className="text-sm font-medium text-gray-700"
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
                      {listGetID?.imagesmiter &&
                      listGetID?.imagesmiter[index] ? (
                        <div className="relative w-full h-48">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}${listGetID?.imagesmiter[index].path}`}
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

          <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
              <CardTitle>รูปถ่ายภายนอกอาคาร</CardTitle>
              <CardDescription> บริเวณจุดติดตั้งแผงโซล่าเซลล์</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                {imagesOut.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <Label
                      htmlFor={`picture-house-${index}`}
                      className="text-sm font-medium text-gray-700"
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
                      {listGetID?.imagesout && listGetID?.imagesout[index] ? (
                        <div className="relative w-full h-48">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}${listGetID?.imagesout[index].path}`}
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

          <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
              <CardTitle>การเชือมระบบไฟฟ้า และการเดินสายติดตั้งภายใน</CardTitle>
              <CardDescription>
                {" "}
                จุดเชือมไฟฟ้าเข้ากบระบบไฟบ้านของลูกค้า (main breaker)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                {imagesIN.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <Label
                      htmlFor={`picture-house-${index}`}
                      className="text-sm font-medium text-gray-700"
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
                      {listGetID?.imagesin && listGetID?.imagesin[index] ? (
                        <div className="relative w-full h-48">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}${listGetID?.imagesout[index].path}`}
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

          <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
              <CardTitle>Solar Edge</CardTitle>
              <CardDescription> DESIGNER REPORT</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                {imagesSolarE.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <Label
                      htmlFor={`picture-house-${index}`}
                      className="text-sm font-medium text-gray-700"
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
                      {listGetID?.imagessolar &&
                      listGetID?.imagessolar[index] ? (
                        <div className="relative w-full h-48">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}${listGetID?.imagessolar[index].path}`}
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

          <Card x-chunk="dashboard-07-chunk-2">
            <CardHeader>
              <CardTitle>Installation model Inverter Room</CardTitle>
              <CardDescription>
                {" "}
                Installation model Inverter Room
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 sm:grid-cols-2">
                {Inverter.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <Label
                      htmlFor={`picture-house-${index}`}
                      className="text-sm font-medium text-gray-700"
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
                      {listGetID?.imagesins && listGetID?.imagesins[index] ? (
                        <div className="relative w-full h-48">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}${listGetID?.imagesins[index].path}`}
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
                  <Label htmlFor="status">
                    สถานะ : {listGetID?.status || "N/A"}
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card x-chunk="dashboard-07-chunk-5">
            <CardHeader>
              <CardTitle>ขนาดของโครงสร้าง</CardTitle>
              <CardDescription>ขนาดของโครงสร้าง</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      แป (นิ้ว): {listGetID?.pp1 || "N/A"}
                    </Label>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      แปหนา (มม.): {listGetID?.pp1 || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      จันทึก (นิ้ว): {listGetID?.pp1 || "N/A"}
                    </Label>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      จันทึกหนา (มม.): {listGetID?.pp2 || "N/A"}
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardHeader>
              <CardDescription>ระยะโคงสร้าง</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      ระยะห่างแป (ม.): {listGetID?.pp1 || "N/A"}
                    </Label>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      ระยะห่างจันทึก (ม.): {listGetID?.pp2 || "N/A"}
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>ข้อมูลไฟฟ้าเพื่มเติม</CardTitle>
              <CardDescription>
                หากเลือก ALL จะเป็นการเลือกทุกอย่าง
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                  ข้อมูลไฟฟ้าเพื่มเติม : {listGetID?.ele || "N/A"}
                </Label>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>ค่าความต่างศักย์</CardTitle>
              <CardDescription>
                หากเลือก ALL จะเป็นการเลือกทุกอย่าง
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      L-N (V): {listGetID?.ln || "N/A"}
                    </Label>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      L-G (V): {listGetID?.lg || "N/A"}
                    </Label>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="font-medium text-gray-500">
                      N-G (V) : {listGetID?.ng || "N/A"}
                    </Label>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
            <CardHeader>
              <CardTitle>ขนาดมิเตอร์ไฟฟ้า (พร้อมเลขทีมิเตอร์)</CardTitle>
              <CardDescription>
                หากเลือก ALL จะเป็นการเลือกทุกอย่าง
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <Label
                    htmlFor="location"
                    className="font-medium text-gray-500"
                  >
                    ขนาดมิเตอร์ไฟฟ้า: {listGetID?.miter_size || "N/A"}
                  </Label>
                </div>

                <div className="grid gap-3">
                  <Label htmlFor="name" className="font-medium text-gray-500">
                    เลขที่มิเตอร: {listGetID?.miter_id || "N/A"}
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default SolarCus;
