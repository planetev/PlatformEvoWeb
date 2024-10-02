"use client";
import {
  building,
  cableSystem,
  electricalConnections,
  frameMaterials,
  imagesArray,
  imagesIN,
  imagesMiter,
  imagesOut,
  internetProviders,
  roofDirection,
  roofMaterials,
  surveyResults,
  imagesSolarE,
  Inverter,
} from "@/app/inteface/solar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ImageIcon, X, ZoomIn } from "lucide-react";
import Image from "next/image";
const Images = ({ values, setFieldValue, handleChange }: any) => {
  const [previewImages, setPreviewImages] = useState<string[]>(
    new Array(imagesArray.length).fill("")
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [previewImages2, setPreviewImages2] = useState<string[]>(
    new Array(imagesMiter.length).fill("")
  );
  const [selectedImage2, setSelectedImage2] = useState<string | null>(null);
  const [previewImagesOut, setPreviewImagesOut] = useState<string[]>(
    new Array(imagesOut.length).fill("")
  );
  const [selectedImageOut, setSelectedImageOut] = useState<string | null>(null);

  const [previewImagesIN, setPreviewImagesIN] = useState<string[]>(
    new Array(imagesIN.length).fill("")
  );
  const [selectedImageIN, setSelectedImageIN] = useState<string | null>(null);

  const [previewImagesSolar, setPreviewImagesSolar] = useState<string[]>(
    new Array(imagesSolarE.length).fill("")
  );
  const [selectedImageSolar, setSelectedImageSolar] = useState<string | null>(
    null
  );

  const [previewImagesIns, setPreviewImagesIns] = useState<string[]>(
    new Array(Inverter.length).fill("")
  );
  const [selectedImageIns, setSelectedImageIns] = useState<string | null>(null);

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

      setFieldValue("imagehome", newPreviewImages);
    }
  };

  // const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  //   const file = e.target.files?.[0];

  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const base64String = reader.result as string;
  //       const newPreviewImages = [...previewImages];
  //       newPreviewImages[index] = base64String;
  //       setPreviewImages(newPreviewImages.filter((image) => image));
  //       setFieldValue('imagehome', newPreviewImages.filter((image) => image));

  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleImageChange2 = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const resizedBase64String = await resizeImage(file, 800, 800);
      const newPreviewImages2 = [...previewImages2];
      newPreviewImages2[index] = resizedBase64String;

      setPreviewImages2(newPreviewImages2);

      setFieldValue("imagesmiter", newPreviewImages2);
    }
  };

  const handleImageChangeOut = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const resizedBase64String = await resizeImage(file, 800, 800);
      const newPreviewImages2 = [...previewImagesOut];
      newPreviewImages2[index] = resizedBase64String;
      setPreviewImagesOut(newPreviewImages2);
      setFieldValue("imagesout", newPreviewImages2);
    }
  };

  const handleImageChangeIN = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const resizedBase64String = await resizeImage(file, 800, 800);
      const newPreviewImages2 = [...previewImagesIN];
      newPreviewImages2[index] = resizedBase64String;
      setPreviewImagesIN(newPreviewImages2);
      setFieldValue("imagesin", newPreviewImages2);
    }
  };

  const handleImageChangeSolar = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const base64String = await resizeImage(file, 800, 800);
      const newPreviewImages2 = [...previewImagesSolar];
      newPreviewImages2[index] = base64String;
      setPreviewImagesSolar(newPreviewImages2);
      setFieldValue("imagessolar", newPreviewImages2);
    }
  };

  const handleImageChangeIns = async (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const file = e.target.files?.[0];

    if (file) {
      const base64String = await resizeImage(file, 800, 800);
      const newPreviewImages2 = [...previewImagesIns];
      newPreviewImages2[index] = base64String;
      setPreviewImagesIns(newPreviewImages2);
      setFieldValue("imagesins", newPreviewImages2);
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

  const handleRemoveImageMiret = (index: number) => {
    const newPreviewImages = [...previewImages2];
    newPreviewImages[index] = "";
    setPreviewImages2(newPreviewImages);
    const fileInput = document.getElementById(
      `picture-miter-${index}`
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };
  const handleRemoveImageOut = (index: number) => {
    const newPreviewImages = [...previewImagesOut];
    newPreviewImages[index] = "";
    setPreviewImagesOut(newPreviewImages);
    const fileInput = document.getElementById(
      `picture-out-${index}`
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const handleRemoveImageIN = (index: number) => {
    const newPreviewImages = [...previewImagesIN];
    newPreviewImages[index] = "";
    setPreviewImagesIN(newPreviewImages);
    const fileInput = document.getElementById(
      `picture-in-${index}`
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const handleRemoveImageSola = (index: number) => {
    const newPreviewImages = [...previewImagesSolar];
    newPreviewImages[index] = "";
    setPreviewImagesSolar(newPreviewImages);
    const fileInput = document.getElementById(
      `picture-solar-${index}`
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const handleRemoveImageIns = (index: number) => {
    const newPreviewImages = [...previewImagesIns];
    newPreviewImages[index] = "";
    setPreviewImagesIns(newPreviewImages);
    const fileInput = document.getElementById(
      `picture-ins-${index}`
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  return (
    <>
      <Card x-chunk="dashboard-07-chunk-2">
        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
            รูปถ่ายภาพบ้าน
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
            บริเวณบ้าน (ทั้งหลัง)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            {imagesArray.map((image, index) => (
              <div key={index} className="space-y-2">
                <Label
                  htmlFor={`picture-house-${index}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {image.name}
                </Label>
                <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Input
                    id={`picture-house-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange(e, index)}
                    className="sr-only"
                  />
                  {previewImages[index] ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={previewImages[index]}
                        alt={`Preview ${image.name}`}
                        className="w-full  object-cover h-full rounded-md"
                        width={800}
                        height={800}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleRemoveImage(index)}
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
                            onClick={() =>
                              setSelectedImage(previewImages[index])
                            }
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
                      htmlFor={`picture-house-${index}`}
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
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-07-chunk-2">


        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
          รูปถ่ายมิเตอร์ไฟฟ้า
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
          ขนาดมิเตอร์ไฟฟ้า (พร้อมเลขทีมิเตออร์)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            {imagesMiter.map((image, index) => (
              <div key={index} className="space-y-2">
                <Label
                  htmlFor={`picture-miter-${index}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {image.name}
                </Label>
                <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Input
                    id={`picture-miter-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChange2(e, index)}
                    className="sr-only"
                  />
                  {previewImages2[index] ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={previewImages2[index]}
                        alt={`Preview ${image.name}`}
                        className="w-full  object-contain h-full rounded-md"
                        width={800}
                        height={500}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleRemoveImageMiret(index)}
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
                            onClick={() =>
                              setSelectedImage2(previewImages2[index])
                            }
                          >
                            <ZoomIn className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl--">
                          <div className="w-full h-[500px]">
                            {" "}
                            {/* ปรับขนาดของคอนเทนเนอร์ให้มีขนาดแน่นอน */}
                            <Image
                              src={selectedImage2 || ""}
                              alt="Full size preview"
                              className="w-full h-full object-contain rounded-md" // เปลี่ยนจาก object-cover เป็น object-contain
                              width={800}
                              height={500} // ใช้ความสูงที่กำหนดในคอนเทนเนอร์
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : (
                    <label
                      htmlFor={`picture-miter-${index}`}
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
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-07-chunk-2">

        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
          รูปถ่ายภายนอกอาคาร
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
          บริเวณจุดติดตั้งแผงโซล่าเซลล์
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            {imagesOut.map((image, index) => (
              <div key={index} className="space-y-2">
                <Label
                  htmlFor={`picture-out-${index}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {image.name}
                </Label>
                <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Input
                    id={`picture-out-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChangeOut(e, index)}
                    className="sr-only"
                  />
                  {previewImagesOut[index] ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={previewImagesOut[index]}
                        alt={`Preview ${image.name}`}
                        className="w-full  object-cover h-full rounded-md"
                        width={800}
                        height={800}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleRemoveImageOut(index)}
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
                            onClick={() =>
                              setSelectedImageOut(previewImagesOut[index])
                            }
                          >
                            <ZoomIn className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <Image
                            src={selectedImageOut || ""}
                            alt="Full size preview"
                            className="w-full  object-cover h-full rounded-md"
                            width={800}
                            height={800}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : (
                    <label
                      htmlFor={`picture-out-${index}`}
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
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-07-chunk-2">


        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-md md:text-md font-bold">
          รูการเชือมระบบไฟฟ้า และการเดินสายติดตั้งภายใน
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
          จุดเชือมไฟฟ้าเข้ากบระบบไฟบ้านของลูกค้า (main breaker)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            {imagesIN.map((image, index) => (
              <div key={index} className="space-y-2">
                <Label
                  htmlFor={`picture-in-${index}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {image.name}
                </Label>
                <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Input
                    id={`picture-in-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChangeIN(e, index)}
                    className="sr-only"
                  />
                  {previewImagesIN[index] ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={previewImagesIN[index]}
                        alt={`Preview ${image.name}`}
                        className="w-full  object-cover h-full rounded-md"
                        width={800}
                        height={800}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleRemoveImageIN(index)}
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
                            onClick={() =>
                              setSelectedImageIN(previewImagesIN[index])
                            }
                          >
                            <ZoomIn className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <Image
                            src={selectedImageIN || ""}
                            alt="Full size preview"
                            className="w-full  object-cover h-full rounded-md"
                            width={800}
                            height={800}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : (
                    <label
                      htmlFor={`picture-in-${index}`}
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
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-07-chunk-2">

        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
          Solar Edg
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
          DESIGNER REPORT
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            {imagesSolarE.map((image, index) => (
              <div key={index} className="space-y-2">
                <Label
                  htmlFor={`picture-solar-${index}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {image.name}
                </Label>
                <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Input
                    id={`picture-solar-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChangeSolar(e, index)}
                    className="sr-only"
                  />
                  {previewImagesSolar[index] ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={previewImagesSolar[index]}
                        alt={`Preview ${image.name}`}
                        className="w-full  object-cover h-full rounded-md"
                        width={800}
                        height={800}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleRemoveImageSola(index)}
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
                            onClick={() =>
                              setSelectedImageSolar(previewImages[index])
                            }
                          >
                            <ZoomIn className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <Image
                            src={selectedImageSolar || ""}
                            alt="Full size preview"
                            className="w-full  object-cover h-full rounded-md"
                            width={800}
                            height={800}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : (
                    <label
                      htmlFor={`picture-solar-${index}`}
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
        </CardContent>
      </Card>

      <Card x-chunk="dashboard-07-chunk-2">

        <CardHeader className="space-y-1 text-center sm:text-left sm:space-y-2 md:space-y-2">
          <CardTitle className="text-xl sm:text-2xl md:text-md font-bold">
          Installation model Inverter Room
          </CardTitle>
          <CardDescription className="text-sm sm:text-base md:text-sm">
          Installation model Inverter Room
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            {Inverter.map((image, index) => (
              <div key={index} className="space-y-2">
                <Label
                  htmlFor={`picture-ins-${index}`}
                  className="text-sm font-medium text-gray-700"
                >
                  {image.name}
                </Label>
                <div className="relative border-2 border-dashed rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <Input
                    id={`picture-ins-${index}`}
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImageChangeIns(e, index)}
                    className="sr-only"
                  />
                  {previewImagesIns[index] ? (
                    <div className="relative w-full h-48">
                      <Image
                        src={previewImagesIns[index]}
                        alt={`Preview ${image.name}`}
                        className="w-full  object-cover h-full rounded-md"
                        width={800}
                        height={800}
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2"
                        onClick={() => handleRemoveImageIns(index)}
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
                            onClick={() =>
                              setSelectedImageIns(previewImagesIns[index])
                            }
                          >
                            <ZoomIn className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <Image
                            src={selectedImageIns || ""}
                            alt="Full size preview"
                            className="w-full  object-cover h-full rounded-md"
                            width={800}
                            height={800}
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : (
                    <label
                      htmlFor={`picture-ins-${index}`}
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
        </CardContent>
      </Card>
    </>
  );
};

export default Images;
