import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircle, SearchIcon, Trash2 } from "lucide-react";
import React from "react";

const Boq = ({
  values,
  setFieldValue,
  handleChange,
  setIsDialogOpen,
  rows,
  handleInputChange,
  addRow,
  removeRow,
}: any) => {
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-1">
        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
            สรุปชุดที่ใช้งาน
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
            ข้อมูลที่ได้รับจากการสำรวจ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  สรุปชุดที่ใช้งาน
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="total_rs"
                  onChange={handleChange}
                  value={values.total_rs}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  inverter ที่กำลังผลิต
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="inverter"
                  onChange={handleChange}
                  value={values.inverter}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  PV panal (แผ่น)
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="panel"
                  onChange={handleChange}
                  value={values.panel}
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name" className="font-medium text-gray-500">
                  Mounting Type
                </Label>
                <Input
                  id="name"
                  type="text"
                  className="w-full"
                  name="mounting"
                  onChange={handleChange}
                  value={values.mounting}
                />
              </div>
            </div>

            <div className="grid ggrid-cols-1 md:grid-cols-1 gap-4">
              <div className="grid gap-3">
                <Label
                  htmlFor="name"
                  className="font-medium text-gray-500 flex"
                >
                  BBQ
                  <SearchIcon
                    className=" h-5 w-5 text-gray-400 cursor-pointer"
                    onClick={() => setIsDialogOpen(true)}
                  />
                </Label>
              </div>
            </div>
            {rows.map((row: any, index: any) => (
              <div key={row.id} className="grid grid-cols-1 md:grid-cols-7 gap-3 mb-2">
                <div className="grid gap-2">
                  <Input
                    id="name"
                    type="text"
                    name="no"
                    value={row.no}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full"
                    placeholder="NO"
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="name"
                    type="text"
                    name="description"
                    value={row.description}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full"
                    placeholder="Description"
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="name"
                    type="text"
                    name="brand"
                    value={row.brand}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full"
                    placeholder="Brand"
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="name"
                    type="text"
                    name="model"
                    value={row.model}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full"
                    placeholder="Model"
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="name"
                    type="text"
                    name="qty"
                    value={row.qty}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full"
                    placeholder="Qty"
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="name"
                    type="text"
                    name="unit"
                    value={row.unit}
                    onChange={(e) => handleInputChange(index, e)}
                    className="w-full"
                    placeholder="Unit"
                  />
                </div>
                <div className="flex items-center justify-center md:justify-end gap-4">
                  {/* <Pencil className="h-4 w-4 cursor-pointer" /> */}
                  <Trash2
                    className="h-4 w-4 cursor-pointer"
                    onClick={() => removeRow(index)}
                  />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
        <CardFooter className="justify-center border-t p-4">
          <Button
            type="button"
            size="sm"
            variant="ghost"
            className="gap-1"
            onClick={addRow}
          >
            <PlusCircle className="h-3.5 w-3.5" />
            เพื่มรายการ
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default Boq;
