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

const Lgn = ({ values, setFieldValue, handleChange }: any) => {
  return (
    <>
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
        <CardHeader>
          <CardTitle>ค่าความต่างศักย์</CardTitle>
          <CardDescription>หากเลือก ALL จะเป็นการเลือกทุกอย่าง</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  L-N (V)
                </Label>
                <Input id="name" type="text" className="w-full"  name="ln"
                  onChange={handleChange}
                  value={values.ln} />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  L-G (V)
                </Label>
                <Input id="name" type="text" className="w-full"
                name="lg"
                onChange={handleChange}
                value={values.lg}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  N-G (V)
                </Label>
                <Input id="name" type="text" className="w-full"
                  name="ng"
                  onChange={handleChange}
                  value={values.ng}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Lgn;
