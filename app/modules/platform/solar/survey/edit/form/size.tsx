import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
const Size = ({ values, setFieldValue, handleChange }: any) => {
  return (
    <>
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
                  แป (นิ้ว)
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="p1"
                  onChange={handleChange}
                  value={values.p1}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  แปหนา (มม.)
                </Label>
                <Input id="name" type="text" className="w-full"    name="p2"
                  onChange={handleChange}
                  value={values.p2} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  จันทึก (นิ้ว)
                </Label>
                <Input id="name" type="text" className="w-full"name="p3"
                  onChange={handleChange}
                  value={values.p3} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  จันทึกหนา (มม.)
                </Label>
                <Input id="name" type="text" className="w-full" name="p4"
                  onChange={handleChange}
                  value={values.p4} />
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
                  ระยะห่างแป (ม.)
                </Label>
                <Input id="name" type="text" className="w-full" name="pp1"
                  onChange={handleChange}
                  value={values.pp1} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  ระยะห่างจันทึก (ม.)
                </Label>
                <Input id="name" type="text" className="w-full" name="pp2"
                  onChange={handleChange}
                  value={values.pp2} />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Size;
