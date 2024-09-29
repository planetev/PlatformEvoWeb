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
import { StatusChargerSurvey } from "@/app/inteface/charger";
const Statusinfo = ({
  values,
  setFieldValue,
  handleChange,
  touched,
  errors,
}: any) => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-3">
        <CardHeader>
          <CardTitle>Survey Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid gap-3">
              <Label htmlFor="status">สถานะ</Label>
              <Select
                name="status"
                required
                onValueChange={(value) =>
                  setFieldValue("status", value)
                }
              >
                <SelectTrigger id="category" aria-label="Select category">
                  <SelectValue placeholder="เลือกสถานะ" />
                </SelectTrigger>
                <SelectContent>
                  {StatusChargerSurvey.map((i, x: number) => (
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
        </CardContent>
      </Card>
    </>
  );
};

export default Statusinfo;
