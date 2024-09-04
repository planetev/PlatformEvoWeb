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
  imagesSolarE ,
  Inverter
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

const Images = ({ values,
  setFieldValue,
  handleChange}:any) => {
console.log('values-iamge', values)

  const [previewImages, setPreviewImages] = useState<string[]>(new Array(imagesArray.length).fill(''))
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [previewImages2, setPreviewImages2] = useState<string[]>(new Array(imagesMiter.length).fill(''))
  const [selectedImage2, setSelectedImage2] = useState<string | null>(null)
  const [previewImagesOut, setPreviewImagesOut] = useState<string[]>(new Array(imagesOut.length).fill(''))
  const [selectedImageOut, setSelectedImageOut] = useState<string | null>(null)

  const [previewImagesIN,setPreviewImagesIN] = useState<string[]>(new Array(imagesIN.length).fill(''))
  const [selectedImageIN, setSelectedImageIN] = useState<string | null>(null)

  const [previewImagesSolar,setPreviewImagesSolar] = useState<string[]>(new Array(imagesSolarE.length).fill(''))
  const [selectedImageSolar, setSelectedImageSolar] = useState<string | null>(null)

  const [previewImagesIns,setPreviewImagesIns] = useState<string[]>(new Array(Inverter.length).fill(''))
  const [selectedImageIns, setSelectedImageIns] = useState<string | null>(null)


  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        const newPreviewImages = [...previewImages];
        newPreviewImages[index] = base64String;
        setPreviewImages(newPreviewImages.filter((image) => image));
        setFieldValue('imagehome', newPreviewImages.filter((image) => image));

      };
      reader.readAsDataURL(file);
    }
  };


const handleImageChange2 = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const file = e.target.files?.[0]


  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const newPreviewImages2 = [...previewImages2]
      newPreviewImages2[index] = base64String;

      setPreviewImages2(newPreviewImages2.filter((image) => image));
      setFieldValue('imagesmiter', newPreviewImages2.filter((image) => image));

    };
    reader.readAsDataURL(file);
  }
}

const handleImageChangeOut = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const file = e.target.files?.[0]


  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const newPreviewImages2 = [...previewImagesOut]
      newPreviewImages2[index] = base64String;
      setPreviewImagesOut(newPreviewImages2.filter((image) => image));
      setFieldValue('imagesout', newPreviewImages2.filter((image) => image));
    };
    reader.readAsDataURL(file);
  }
}

const handleImageChangeIN = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const file = e.target.files?.[0]
  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const newPreviewImages2 = [...previewImagesIN]
      newPreviewImages2[index] = base64String;
      setPreviewImagesIN(newPreviewImages2.filter((image) => image));
      setFieldValue('imagesin', newPreviewImages2.filter((image) => image));
    };
    reader.readAsDataURL(file);
  }
}

const handleImageChangeSolar = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const file = e.target.files?.[0]

  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const newPreviewImages2 = [...previewImagesSolar]
      newPreviewImages2[index] = base64String;
      setPreviewImagesSolar(newPreviewImages2.filter((image) => image));
      setFieldValue('imagessolar', newPreviewImages2.filter((image) => image));
    };
    reader.readAsDataURL(file);
  }
}

const handleImageChangeIns = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
  const file = e.target.files?.[0]


  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const newPreviewImages2 = [...previewImagesIns]
      newPreviewImages2[index] = base64String;
      setPreviewImagesIns(newPreviewImages2.filter((image) => image));
      setFieldValue('imagesins', newPreviewImages2.filter((image) => image));
    };
    reader.readAsDataURL(file);
  }
}


  const handleRemoveImage = (index: number) => {
    const newPreviewImages = [...previewImages]
    newPreviewImages[index] = ''
    setPreviewImages(newPreviewImages)
    const fileInput = document.getElementById(`picture-house-${index}`) as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  const handleRemoveImageMiret = (index: number) => {
    const newPreviewImages = [...previewImages2]
    newPreviewImages[index] = ''
    setPreviewImages2(newPreviewImages)
    const fileInput = document.getElementById(`picture-miter-${index}`) as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }
  const handleRemoveImageOut = (index: number) => {
    const newPreviewImages = [...previewImagesOut]
    newPreviewImages[index] = ''
    setPreviewImagesOut(newPreviewImages)
    const fileInput = document.getElementById(`picture-out-${index}`) as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  const handleRemoveImageIN = (index: number) => {
    const newPreviewImages = [...previewImagesIN]
    newPreviewImages[index] = ''
    setPreviewImagesIN(newPreviewImages)
    const fileInput = document.getElementById(`picture-in-${index}`) as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  const handleRemoveImageSola = (index: number) => {
    const newPreviewImages = [...previewImagesSolar]
    newPreviewImages[index] = ''
    setPreviewImagesSolar(newPreviewImages)
    const fileInput = document.getElementById(`picture-solar-${index}`) as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }

  const handleRemoveImageIns = (index: number) => {
    const newPreviewImages = [...previewImagesIns]
    newPreviewImages[index] = ''
    setPreviewImagesIns(newPreviewImages)
    const fileInput = document.getElementById(`picture-ins-${index}`) as HTMLInputElement
    if (fileInput) fileInput.value = ''
  }







  return (
    <>
    <Card x-chunk="dashboard-07-chunk-2">
      <CardHeader>
        <CardTitle>รูปถ่ายภาพบ้าน</CardTitle>
        <CardDescription>บริเวณบ้าน (ทั้งหลัง)


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
                        className="sr-only"
                      />
                      {values?.imagehome?.[index] ? (
                        <div className="relative w-full h-48">
                          <Image
                            src={`${process.env.NEXT_PUBLIC_IMG}${values?.imagehome?.[index]?.path}`}
                            alt={`Preview ${image.id}`}
                            className="w-full  object-cover h-full rounded-md"

                            width={800}
                            height={800}
                          />
                        </div>
                      ) : (
                        <label
                          htmlFor={`picture-house-${index}`}
                          className="flex flex-col items-center justify-center w-full h-48 cursor-pointer"
                        >
                          <ImageIcon className="h-10 w-10 text-gray-400" />
                          <span className="mt-2 text-sm text-gray-500">
                            ไม่มีรูปภาพ
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
        <CardHeader>
          <CardTitle>รูปถ่ายมิเตอร์ไฟฟ้า</CardTitle>
          <CardDescription>
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
                    <img
                      src={previewImages2[index]}
                      alt={`Preview ${image.name}`}
                      className="w-full h-full object-cover rounded-md"
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
                          onClick={() => setSelectedImage2(previewImages2[index])}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <img
                          src={selectedImage2 || ''}
                          alt="Full size preview"
                          className="w-full h-auto object-contain"
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                ) : (
                  <label
                    htmlFor={`picture-miter-${index}`}
                    className="flex flex-col items-center justify-center w-full h-48 cursor-pointer"
                  >
                    <ImageIcon className="h-10 w-10 text-gray-400" />
                    <span className="mt-2 text-sm text-gray-500">คลิกเพื่อเลือกรูปภาพ</span>
                  </label>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>


      </Card>

      <Card x-chunk="dashboard-07-chunk-2">
        <CardHeader>
          <CardTitle>รูปถ่ายภายนอกอาคาร</CardTitle>
          <CardDescription> บริเวณจุดติดตั้งแผงโซล่าเซลล์</CardDescription>
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
                    <img
                      src={previewImagesOut[index]}
                      alt={`Preview ${image.name}`}
                      className="w-full h-full object-cover rounded-md"
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
                          onClick={() => setSelectedImageOut(previewImagesOut[index])}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <img
                          src={selectedImageOut || ''}
                          alt="Full size preview"
                          className="w-full h-auto object-contain"
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
                    <span className="mt-2 text-sm text-gray-500">คลิกเพื่อเลือกรูปภาพ</span>
                  </label>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>


      </Card>

      <Card x-chunk="dashboard-07-chunk-2">
        <CardHeader>
          <CardTitle>การเชือมระบบไฟฟ้า และการเดินสายติดตั้งภายใน</CardTitle>
          <CardDescription>
            {" "}
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
                    <img
                      src={previewImagesIN[index]}
                      alt={`Preview ${image.name}`}
                      className="w-full h-full object-cover rounded-md"
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
                          onClick={() => setSelectedImageIN(previewImagesIN[index])}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <img
                          src={selectedImageIN || ''}
                          alt="Full size preview"
                          className="w-full h-auto object-contain"
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
                    <span className="mt-2 text-sm text-gray-500">คลิกเพื่อเลือกรูปภาพ</span>
                  </label>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>


      </Card>

      <Card x-chunk="dashboard-07-chunk-2">
        <CardHeader>
          <CardTitle>Solar Edge</CardTitle>
          <CardDescription>
            {" "}
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
                    <img
                      src={previewImagesSolar[index]}
                      alt={`Preview ${image.name}`}
                      className="w-full h-full object-cover rounded-md"
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
                          onClick={() => setSelectedImageSolar(previewImages[index])}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <img
                          src={selectedImageSolar || ''}
                          alt="Full size preview"
                          className="w-full h-auto object-contain"
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
                    <span className="mt-2 text-sm text-gray-500">คลิกเพื่อเลือกรูปภาพ</span>
                  </label>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      </Card>

      <Card x-chunk="dashboard-07-chunk-2">
        <CardHeader>
          <CardTitle>Installation model Inverter Room</CardTitle>
          <CardDescription>
            {" "}
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
                    <img
                      src={previewImagesIns[index]}
                      alt={`Preview ${image.name}`}
                      className="w-full h-full object-cover rounded-md"
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
                          onClick={() => setSelectedImageIns(previewImagesIns[index])}
                        >
                          <ZoomIn className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl">
                        <img
                          src={selectedImageIns || ''}
                          alt="Full size preview"
                          className="w-full h-auto object-contain"
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
                    <span className="mt-2 text-sm text-gray-500">คลิกเพื่อเลือกรูปภาพ</span>
                  </label>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>


      </Card>

      {/* <Card x-chunk="dashboard-07-chunk-2">
        <CardHeader>
          <CardTitle>รูปอุปกรณ์ในการติดตั้ง</CardTitle>
          <CardDescription>

            ----------------
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="grid gap-6 sm:grid-cols-2">
            {Tool.map((image, x: any) => (
              <>
                <div className="grid gap-3" key={x}>
                  <Label
                    htmlFor="picture-condo"
                    className="text-lg font-semibold text-gray-700 leading-6"
                  >
                    {image.name}
                  </Label>
                  <Input
                    id="picture-condo"
                    type="file"
                    multiple
                    className="file-input rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="border  border-dashed h-40 flex justify-center items-center rounded-md bg-muted-foreground/5">
                    <p className="text-muted-foreground">Image Preview</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </CardContent>
      </Card> */}
    </>
  );
};

export default Images;
