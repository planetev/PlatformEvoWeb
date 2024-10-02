"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
const Crw = ({ values, setFieldValue, handleChange, touched, errors }: any) => {
  const items = ["ALL", "PVC", "EMT", "HDPE", "IMC"];
  const [selectedItems, setSelectedItems] = useState([]);
  const handleChangeAll = (newSelectedItems: any) => {
    if (newSelectedItems.includes("ALL")) {
      newSelectedItems = ["PVC", "EMT", "HDPE", "IMC"];
      setSelectedItems(newSelectedItems);
      setFieldValue("work_tor_ele", newSelectedItems);
    }

    setSelectedItems(newSelectedItems);
    setFieldValue("work_tor_ele", newSelectedItems);
  };
  const [work, setWork] = useState(0);
  const handleWork = (e: any) => {
    const { value } = e.target;
    const total = value - 40;
    setWork(total);
    setFieldValue("work_ele", Number(value));
    setFieldValue("work_free_ele", 40);
    setFieldValue("work_true_ele", work);
  };
  return (
    <>
      <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
            งานเดินท่อร้อยสาย
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
            หากเลือก ALL จะเป็นการเลือกทุกอย่าง
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <ToggleGroup
              size="lg"
              type="multiple"
              value={selectedItems} // Bind selected items to the ToggleGroup
              variant="outline"
              onValueChange={handleChangeAll} // Handle the value change
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
          <Table>
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
                    defaultValue="100"
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
                  <Input id="price-1" type="number" value={work} disabled />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
};

export default Crw;
