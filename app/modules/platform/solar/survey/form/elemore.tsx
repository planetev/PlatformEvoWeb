
import { additionalElectricalInfo } from "@/app/inteface/solar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const Elemore = ({ values, setFieldValue, handleChange }: any) => {
  return (
    <>
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
        <CardHeader>
          <CardTitle>ข้อมูลไฟฟ้าเพื่มเติม</CardTitle>

        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Label htmlFor="location" className="font-medium text-gray-500">
              ข้อมูลไฟฟ้าเพื่มเติม
            </Label>
            <Select
             name="ele"
              value={values.ele}
             onValueChange={(value) =>
               setFieldValue("ele", value)
             }
            >
              <SelectTrigger id="category" aria-label="Select category">
                <SelectValue placeholder="ประเภทไฟฟ้า" />
              </SelectTrigger>

              <SelectContent>
                {additionalElectricalInfo.map((i, x: number) => (
                  <>
                    <SelectItem key={x} value={i.name}>
                      {i.name}
                    </SelectItem>
                  </>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Elemore;
