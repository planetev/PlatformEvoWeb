import React, { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Textarea } from "@/components/ui/textarea";
import {
  building,
  cableSystem,
  electricalConnections,
  frameMaterials,
  internetProviders,
  roofDirection,
  roofMaterials,
  surveyResults,
} from "@/app/inteface/solar";
const Sif = ({ values, setFieldValue, handleChange }: any) => {
  const [customBuildingType, setCustomBuildingType] = useState("");
  const [isCustomInput, setIsCustomInput] = useState(false);

  const [customMaterialtype, setCustomMaterialtype] = useState("");
  const [isCustomInput2, setIsCustomInput2] = useState(false);

  const [customFramemadee, setCustomFramemade] = useState("");
  const [isCustomInput3, setIsCustomInput3] = useState(false);

  const [customInternet, setCustomcustomInternet] = useState("");
  const [isCustomInput4, setIsCustomInput4] = useState(false);
  return (
    <>
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
                  ประเภทอาคาร
                </Label>
                {/* <Select
                  name="building_type"
                  onValueChange={(value) =>
                    setFieldValue("building_type", value)
                  }
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกประเภทอาคาร" />
                  </SelectTrigger>
                  <SelectContent>
                    {building.map((i, x: number) => (
                      <>
                        {x === building.length - 1 ? (
                          // ตัวเลือกสุดท้ายกลายเป็นช่องกรอก
                          <input
                            key={x}
                            type="text"
                            placeholder="กรอกประเภทอาคาร"
                            value={i.name}
                            // onChange={(e) => handleInputChange(e.target.value, x)}
                          />
                        ) : (
                          <SelectItem key={x} value={i.name}>
                            {i.name}
                          </SelectItem>
                        )}
                      </>
                    ))}
                  </SelectContent>
                </Select> */}
                {!isCustomInput ? (
                  <Select
                    name="building_type"
                    onValueChange={(value) => {
                      if (value === "custom") {
                        setIsCustomInput(true); // เปลี่ยนเป็น input
                        setCustomBuildingType(""); // รีเซ็ตค่า input
                      } else {
                        setFieldValue("building_type", value);
                      }
                    }}
                  >
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="เลือกประเภทอาคาร" />
                    </SelectTrigger>
                    <SelectContent>
                      {building.map((i, x: number) => (
                        <SelectItem key={x} value={i.name}>
                          {i.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="custom">ประเภทอื่น ๆ</SelectItem>{" "}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    type="text"
                    name="building_type"
                    placeholder="กรอกประเภทอาคาร"
                    value={customBuildingType}
                    onChange={(e) => {
                      setCustomBuildingType(e.target.value);
                      setFieldValue("building_type", e.target.value);
                    }}
                  />
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                  ชนิดวัสดุหลังคา
                </Label>
                {/* <Select
                  name="material_type"
                  onValueChange={(value) =>
                    setFieldValue("material_type", value)
                  }
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกชนิดวัสดุหลังคา" />
                  </SelectTrigger>
                  <SelectContent>
                    {roofMaterials.map((i, x: number) => (
                      <>
                        <SelectItem key={x} value={i.name}>
                          {i.name}
                        </SelectItem>
                      </>
                    ))}
                  </SelectContent>
                </Select> */}

                {!isCustomInput2 ? (
                  <Select
                    name="material_type"
                    onValueChange={(value) => {
                      if (value === "custom") {
                        setIsCustomInput2(true); // เปลี่ยนเป็น input
                        setCustomMaterialtype("");
                      } else {
                        setFieldValue("material_type", value);
                      }
                    }}
                  >
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="เลือกประเภทชนิดวัสดุหลังคา" />
                    </SelectTrigger>
                    <SelectContent>
                      {roofMaterials.map((i, x: number) => (
                        <SelectItem key={x} value={i.name}>
                          {i.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="custom">ประเภทอื่น ๆ</SelectItem>{" "}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    type="text"
                    name="material_type"
                    placeholder="กรอกชนิดวัสดุหลังคา"
                    value={customMaterialtype}
                    onChange={(e) => {
                      setCustomMaterialtype(e.target.value);
                      setFieldValue("material_type", e.target.value);
                    }}
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  สภาพอายุหลังคา (ปี)
                </Label>
                <Input
                  id="name"
                  type="text"
                  name="roof_condition"
                  value={values.roof_condition}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                  ความลาดเอียง (องศา)
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="slope"
                  value={values.slope}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ทิศของหลังคา
                </Label>
                <Select
                  name="direction"
                  onValueChange={(value) => setFieldValue("direction", value)}
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกทิศของหลังคา" />
                  </SelectTrigger>
                  <SelectContent>
                    {roofDirection.map((i, x: number) => (
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
                <Label htmlFor="location" className="font-medium text-gray-500">
                  ขนาดของพื้นที่หลังคา (ตร.ม.)
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="size_roof"
                  value={values.size_roof}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  โครงหลังคาทำจากวัสดุ
                </Label>

                {!isCustomInput3 ? (
                  <Select
                    name="frame_made"
                    onValueChange={(value) => {
                      if (value === "custom") {
                        setIsCustomInput3(true);
                        setCustomFramemade("");
                      } else {
                        setFieldValue("frame_made", value);
                      }
                    }}
                  >
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="เลือกโครงหลังคาทำจากวัสดุ" />
                    </SelectTrigger>
                    <SelectContent>
                      {frameMaterials.map((i, x: number) => (
                        <SelectItem key={x} value={i.name}>
                          {i.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="custom">ประเภทอื่น ๆ</SelectItem>{" "}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    type="text"
                    name="frame_made"
                    placeholder="กรอก โครงหลังคาทำจากวัสดุ"
                    value={customFramemadee}
                    onChange={(e) => {
                      setCustomFramemade(e.target.value);
                      setFieldValue("frame_made", e.target.value);
                    }}
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  ระบบสายดิน
                </Label>
                <Select
                  name="grounding"
                  onValueChange={(value) => setFieldValue("grounding", value)}
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกระบบสายดิน" />
                  </SelectTrigger>
                  <SelectContent>
                    {cableSystem.map((i, x: number) => (
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

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                  ข้อมูลอินเตอร์เน็ต
                </Label>

                {!isCustomInput4 ? (
                  <Select
                    name="internet"
                    onValueChange={(value) => {
                      if (value === "custom") {
                        setIsCustomInput4(true); // เปลี่ยนเป็น input
                        setCustomcustomInternet("");
                      } else {
                        setFieldValue("internet", value);
                      }
                    }}
                  >
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="เลือกผู้ให้บริการข้อมูลอินเตอร์เน็ต" />
                    </SelectTrigger>
                    <SelectContent>
                      {internetProviders.map((i, x: number) => (
                        <SelectItem key={x} value={i.name}>
                          {i.name}
                        </SelectItem>
                      ))}
                      <SelectItem value="custom">ประเภทอื่น ๆ</SelectItem>{" "}
                    </SelectContent>
                  </Select>
                ) : (
                  <Input
                    type="text"
                    name="internet"
                    placeholder="กรอกผู้ให้บริการข้อมูลอินเตอร์เน็ต"
                    value={customInternet}
                    onChange={(e) => {
                      setCustomcustomInternet(e.target.value);
                      setFieldValue("internet", e.target.value);
                    }}
                  />
                )}
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="location" className="font-medium text-gray-500">
                  ความเเรงสัญญา WIFI
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="wifi"
                  value={values.wifi}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  การเชื่อมต่อไฟฟ้า
                </Label>
                <Select
                  name="solar_type"
                  onValueChange={(value) => setFieldValue("solar_type", value)}
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="เลือกการเชื่อมต่อไฟฟ้า" />
                  </SelectTrigger>
                  <SelectContent>
                    {electricalConnections.map((i, x: number) => (
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
                <Label htmlFor="location" className="font-medium text-gray-500">
                  ผลการสำรวจ
                </Label>

                <Select
                  name="results"
                  onValueChange={(value) => setFieldValue("results", value)}
                >
                  <SelectTrigger id="category" aria-label="Select category">
                    <SelectValue placeholder="ผลการสำรวจ" />
                  </SelectTrigger>
                  <SelectContent>
                    {surveyResults.map((i, x: number) => (
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

            <div className="grid grid-cols-1 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date" className="font-medium text-gray-500">
                  หมายเหตุ
                </Label>
                <Textarea
                  id="description"
                  className="min-h-32"
                  onChange={(e) => setFieldValue("remarks", e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Sif;
