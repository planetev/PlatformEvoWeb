import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { breakerSizes } from "@/app/inteface/solar";

const Miter = ({ values, setFieldValue, handleChange }: any) => {
  const [customMiterSize, setCustomMiterSize] = useState("");
  const [isCustomInput, setIsCustomInput] = useState(false);
  return (
    <>
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">


        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
          ขนาดมิเตอร์ไฟฟ้า (พร้อมเลขทีมิเตอร์)
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
          รายละเอียดของขนาดมิเตอร์ไฟฟ้า
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="flex flex-col gap-2">
              <Label htmlFor="location" className="font-medium text-gray-500">
                ขนาดมิเตอร์ไฟฟ้า
              </Label>



              {!isCustomInput ? (
                  <Select
                    name="buimiter_sizelding_type"
                    onValueChange={(value) => {
                      if (value === "custom") {
                        setIsCustomInput(true); // เปลี่ยนเป็น input
                        setCustomMiterSize(""); // รีเซ็ตค่า input
                      } else {
                        setFieldValue("miter_size", value);
                      }
                    }}
                  >
                    <SelectTrigger id="category" aria-label="Select category">
                      <SelectValue placeholder="ประเภทอาคาร" />
                    </SelectTrigger>
                    <SelectContent>
                      {breakerSizes.map((i, x: number) => (
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
                    name="miter_size"
                    placeholder="กรอกขนาดมิเตอร์"
                    value={customMiterSize}
                    onChange={(e) => {
                      setCustomMiterSize(e.target.value);
                      setFieldValue("miter_size", e.target.value);
                    }}
                  />
                )}
            </div>

            <div className="grid gap-3">
              <Label htmlFor="name" className="font-medium text-gray-500">
                เลขที่มิเตอร
              </Label>
              <Input
                id="name"
                type="text"
                className="w-full"
                name="miter_id"
                onChange={handleChange}
                value={values.miter_id}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Miter;
