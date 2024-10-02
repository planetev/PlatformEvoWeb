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
import { Input } from "@/components/ui/input";
import { ImageIcon, X, ZoomIn } from "lucide-react";
import { imageChager } from "@/app/inteface/charger";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
const Pictureinfo = ({
  values,
  setFieldValue,
  handleChange,
  touched,
  errors,
}: any) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [previewImages, setPreviewImages] = useState<string[]>(
    new Array(imageChager.length).fill("")
  );
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + "...";
  };

  const resizeImage = (
    file: File,
    maxWidth: number,
    maxHeight: number
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new (window as any).Image() as HTMLImageElement;
        img.src = e.target?.result as string;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const ctx = canvas.getContext("2d");

          let width = img.width;
          let height = img.height;

          // Calculate new dimensions while maintaining aspect ratio
          if (width > height) {
            if (width > maxWidth) {
              height = Math.round((height *= maxWidth / width));
              width = maxWidth;
            }
          } else {
            if (height > maxHeight) {
              width = Math.round((width *= maxHeight / height));
              height = maxHeight;
            }
          }

          canvas.width = width;
          canvas.height = height;

          ctx?.drawImage(img, 0, 0, width, height);

          // Convert canvas to base64 string
          const dataUrl = canvas.toDataURL(file.type);
          resolve(dataUrl);
        };
        img.onerror = (err: any) => reject(err);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const resizedBase64String = await resizeImage(file, 800, 800);

      const newPreviewImages = [...previewImages];
      newPreviewImages[index] = resizedBase64String;

      setPreviewImages(newPreviewImages);

      setFieldValue("image_mou", newPreviewImages);
    }
  };
  const handleRemoveImage = (index: number) => {
    const newPreviewImages = [...previewImages];
    newPreviewImages[index] = "";
    setPreviewImages(newPreviewImages);
    const fileInput = document.getElementById(
      `picture-house-${index}`
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };
  return (
    <>
      <Card x-chunk="dashboard-07-chunk-0">
        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
            Picture Info
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
            รายละเอียดและข้อมูลสำหรับรูปภาพ
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6">
            <div className="grid  grid-cols-1 md:grid-cols-2 gap-4">
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
                      onChange={(e) => handleImageChange(e, x)}
                      className="sr-only"
                    />
                    {previewImages[x] ? (
                      <div className="relative w-full h-48">
                        <Image
                          src={previewImages[x]}
                          alt={`Preview ${i.name}`}
                          className="w-full  object-cover h-full rounded-md"
                          width={800}
                          height={800}
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="icon"
                          className="absolute top-2 right-2"
                          onClick={() => handleRemoveImage(x)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              type="button"
                              variant="secondary"
                              size="icon"
                              className="absolute bottom-2 right-2"
                              onClick={() => setSelectedImage(previewImages[x])}
                            >
                              <ZoomIn className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <Image
                              src={selectedImage || ""}
                              alt="Full size preview"
                              className="w-full   rounded-md"
                              width={800}
                              height={400}
                            />
                          </DialogContent>
                        </Dialog>
                      </div>
                    ) : (
                      <label
                        htmlFor={`picture-${x}`}
                        className="flex flex-col items-center justify-center w-full h-48 cursor-pointer"
                      >
                        <ImageIcon className="h-10 w-10 text-gray-400" />
                        <span className="mt-2 text-sm text-gray-500">
                          คลิกเพื่อเลือกรูปภาพ
                        </span>
                      </label>
                    )}
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
