
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


        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
          ข้อมูลไฟฟ้าเพื่มเติม
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
          รายละเอียดข้อมูลไฟฟ้าเพื่มเติม
          </CardDescription>
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
