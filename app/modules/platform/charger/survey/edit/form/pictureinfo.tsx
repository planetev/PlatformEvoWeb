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
import { ImageIcon } from "lucide-react";
import { imageChager } from "@/app/inteface/charger";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
const Pictureinfo = () => {
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-0">
        <CardHeader>
          <CardTitle>Picture Info</CardTitle>
          <CardDescription>
            Lipsum dolor sit amet, consectetur adipiscing elit
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-4">
              {imageChager.map((i, x) => (
                <div key={i.id} className="space-y-2">
                  <Label
                    htmlFor={`picture-${i.id}`}
                    className="block h-12 text-sm leading-tight"
                  >
                    {i.name}
                  </Label>

                  <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <Input
                      id={`picture-${i.id}`}
                      type="file"
                      accept="image/*"
                      // onChange={(e) => handleImageChange(e, index)}
                      className="sr-only"
                    />
                    <label
                      htmlFor={`picture-${i.id}`}
                      className="flex flex-col items-center justify-center w-full h-48 cursor-pointer"
                    >
                      <ImageIcon className="h-10 w-10 text-gray-400" />
                      <span className="mt-2 text-sm text-gray-500">
                        คลิกเพื่อเลือกรูปภาพ
                      </span>
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default Pictureinfo;
