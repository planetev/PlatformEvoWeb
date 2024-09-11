"use client";
import React, { use, useEffect, useState } from "react";

import * as Yup from "yup";
import { Formik } from "formik";
import { EditsurveyProps } from "./editsolar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Woi from "./form/woi";
import { useAuth } from "@/app/context/AuthContext";
import { getSolarSurveyById, updateSolarSurvey } from "@/service/Solar/solarSurveyCallAPI";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

import Boq from "./form/boq";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Images from "./form/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addDays, format } from "date-fns";
import { StatusSolarSurvey } from "@/app/inteface/solar";
import Size from "./form/size";
import Elemore from "./form/elemore";
import Lgn from "./form/lgn";
import Miter from "./form/miter";
import Sif from "./form/sif";
import { toast } from "@/components/ui/use-toast";

const Formedit = ({ id }: EditsurveyProps) => {
  const { token, session } = useAuth();
  const router = useRouter();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    isPending,
    error,
    data: listData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["get-id-survey-solar-update"],
    queryFn: async () => {
      try {
        const res: any = await getSolarSurveyById({ id, token });
        return res;
      } catch (err) {
        throw err;
      }
    },
  });
  useEffect(() => {}, [listData]);
  console.log('listData', listData)
  const [rows, setRows] = useState([
    {
      id: 1,
      no: "",
      description: "",
      brand: "",
      model: "",
      qty: "",
      unit: "",
    },
  ]);

  const addRow = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        no: "",
        description: "",
        brand: "",
        model: "",
        qty: "",
        unit: "",
      },
    ]);
  };

  const handleInputChange = (index: any, event: any) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [event.target.name]: event.target.value } : row
    );
    setRows(updatedRows);
  };

  const removeRow = (index: any) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  console.log("listData", listData);
  const [date, setDate] = useState<Date>();
  const [date1, setDate1] = useState<Date>();
  const [date2, setDate2] = useState<Date>();
  const initialData: any = {
    datebook: listData?.datebook,
    wno: listData?.wno,
    status: listData?.status,
    customer_name: listData?.customer_name,
    tel: listData?.tel,
    date_Installation: listData?.date_Installation,
    collection_date: listData?.collection_date,
    production_targets: listData?.production_targets,
    servey_name: listData?.servey_name,
    longlat: listData?.longlat,
    location: listData?.location,

    building_type: listData?.building_type,
    material_type: listData?.material_type,
    roof_condition: listData?.roof_condition,
    slope: listData?.slope,
    direction: listData?.direction,
    size_roof: listData?.size_roof,
    frame_made: listData?.frame_made,
    grounding: listData?.grounding,
    internet: listData?.internet,
    wifi: listData?.wifi,
    results: listData?.results,
    remarks: listData?.remarks,
    solar_type: listData?.solar_type,
    p1: listData?.p1,
    p2: listData?.p2,
    p3: listData?.p3,
    p4: listData?.p4,
    pp1: listData?.pp1,
    pp2: listData?.pp2,
    ele: listData?.ele,
    ln: listData?.ln,
    lg: listData?.lg,
    ng: listData?.ng,
    miter_size: listData?.miter_size,
    miter_id: listData?.miter_id,
    total_rs: listData?.total_rs,
    inverter: listData?.inverter,
    panel: listData?.panel,

    mounting: listData?.mounting,
    boq: listData?.boq,
    imagehome: listData?.imagehome  ,
    imagesmiter: listData?.imagesmiter,
    imagesout: listData?.imagesout,
    imagesin: listData?.imagesin,
    imagessolar: listData?.imagessolar,
    imagesins: listData?.imagesins,
  };
  console.log("initialData", initialData);

  const validationSchema = Yup.object({
    customer_name: Yup.string().required("customer_name is required"),
  });

  const navigateToSolarTab = (tabValue: string) => {
    const searchParams = new URLSearchParams({ tab: "2" });
    router.push(`/platform/solar?${searchParams.toString()}`);
  };
  const updateSolarSurveys = useMutation({
    mutationFn: async ({ id,token, payload }: any) => {
      return await updateSolarSurvey({ id,token, payload });
    },
    onSuccess: (res) => {
      if (res) {
        toast({
          title: "แก้ไขข้อมูลสำเร็จ",
          className: "bg-green-500 text-white font-semibold",
          description: "ดำเนินการแก้ไขข้อมูลสำเร็จ",
        });
      // router.push("/platform/solar",);
         navigateToSolarTab("2");
      }
    },
    onError: (err) => {
      console.log(err);
      toast({
        title: "แก้ไขข้อมูลไม่สำเร็จ",
        className: "bg-red-500 text-white font-semibold",
        description: "ตรวจพบความผิดปกติ",
      });
    },
  });

  const convertDate = (date: any) => {
    if (!date) {
      return ""; // รีเทิร์นค่าว่างถ้าไม่มีค่า
    }

    try {
      return format(date, "yyyy-MM-dd"); // คอนเวิร์ตวันที่ถ้ามีค่า
    } catch (error) {
      console.error("Invalid date", error);
      return ""; // รีเทิร์นค่าว่างถ้าคอนเวิร์ตไม่สำเร็จ
    }
  };
  return (
    <>
      <div className="w-full ">
        <main className="grid w-full  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-white overflow-hidden hide-scrollbar">
          <Formik
            initialValues={initialData}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={async (values) => {

              const payload = {
                wno: values.wno,
                status: values.status,
                 datebook: convertDate(date) || values.datebook,
                customer_name: values.customer_name,
                tel: values.tel,
                date_Installation: convertDate(date1) || values.date_Installation,
                collection_date: convertDate(date2) || values.collection_date,
                production_targets: values.production_targets || '',
                servey_name: values.servey_name,
                longlat: values.longlat,
                location: values.location,

                building_type: values.building_type,
                material_type: values.material_type,
                roof_condition: values.roof_condition || '',
                slope: values.slope || '',
                direction: values.direction,
                size_roof: values.size_roof || '',
                frame_made: values.frame_made,
                grounding: values.grounding,
                internet: values.internet,
                wifi: values.wifi || '',
                results: values.results,
                remarks: values.remarks,
                solar_type: values.solar_type,
                p1: values.p1 || '',
                p2: values.p2 || '',
                p3: values.p3 || '',
                p4: values.p4 || '',
                pp1: values.pp1 || '',
                pp2: values.pp2 || '',
                ele: values.ele,

                ln: values.ln || '',
                lg: values.lg || '',
                ng: values.ng || '',
                miter_size: values.miter_size,
                miter_id: values.miter_id,

                total_rs: values.total_rs,
                inverter: values.inverter,
                panel: values.panel,
                mounting: values.mounting,
                imagehome: values.imagehome,
                imagesmiter: values.imagesmiter || [],
                imagesout: values.imagesout || [],
                imagesin: values.imagesin || [],
                imagessolar: values.imagessolar || [],
                imagesins: values.imagesins || [],

                boq: values.boq,
              };
              console.log("payload-update", payload);
              updateSolarSurveys.mutate({ id, token, payload });


            }}
          >
            {({
              values,
              setFieldValue,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <>
                  <form onSubmit={handleSubmit}>
                  <div className="flex items-center gap-4 p-2">
                    <Button variant="outline" size="icon" className="h-7 w-7">
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Back</span>
                    </Button>
                    <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                      Solar Controller
                    </h1>
                    <Badge variant="outline" className="ml-auto sm:ml-0">
                      In Solar
                    </Badge>
                    <div className="hidden items-center gap-2 md:ml-auto md:flex">
                      <Button
                        variant="outline"
                        size="sm"
                        type="button"
                        onClick={() => router.back()}
                      >
                        cancel
                      </Button>
                      <Button type="submit" size="sm">
                        Edit Survey
                      </Button>
                    </div>
                  </div>
                  <div className="grid gap-4 p-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8 overflow-auto ">
                    <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                      <Woi
                        values={values}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                        date={date}
                        setDate={setDate}
                        date1={date1}
                        setDate1={setDate1}
                        date2={date2}
                        setDate2={setDate2}
                      />
                      <Sif
                        values={values}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                      />
                      <Boq
                        values={values}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                        setIsDialogOpen={setIsDialogOpen}
                        rows={rows}
                        handleInputChange={handleInputChange}
                        addRow={addRow}
                        removeRow={removeRow}
                      />
                      <Images
                        values={values}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                      />
                    </div>
                    <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
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
                                value={values.status}
                                onValueChange={(value) =>
                                  setFieldValue("status", value)
                                }
                              >
                                <SelectTrigger
                                  id="category"
                                  aria-label="Select category"
                                >
                                  <SelectValue placeholder="เลือกสถานะ" />
                                </SelectTrigger>
                                <SelectContent>
                                  {StatusSolarSurvey.map(
                                    (i, x: number) =>
                                      (!values.status ||
                                        i.name !== values.status ||
                                        x ===
                                          StatusSolarSurvey.findIndex(
                                            (item) =>
                                              item.name === values.status
                                          )) && (
                                        <SelectItem key={x} value={i.name}>
                                          {i.name}
                                        </SelectItem>
                                      )
                                  )}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Size
                        values={values}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                      />

                      <Elemore
                        values={values}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                      />

                      <Lgn
                        values={values}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                      />

                      <Miter
                        values={values}
                        setFieldValue={setFieldValue}
                        handleChange={handleChange}
                      />
                    </div>
                  </div>
                  </form>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogContent className="rounded-lg shadow-lg max-w-lg bg-white p-6">
                      <DialogHeader>
                        <DialogTitle className="text-xl font-semibold text-gray-800">
                          BOQ
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-500">
                          เป็นการแสดงผลรายการวัสดุที่ใช้ในงาน
                        </DialogDescription>
                      </DialogHeader>

                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>NO</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Brand</TableHead>
                            <TableHead>Model</TableHead>
                            <TableHead>Qty</TableHead>
                            <TableHead>Unit</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {values?.boq?.map((row:any, index:number) => (
                            <>
                              <TableRow>
                                <TableCell>
                                  <span>{row.no}</span>
                                </TableCell>
                                <TableCell>
                                  <span>{row.description}</span>
                                </TableCell>
                                <TableCell>
                                  <span>{row.brand}</span>
                                </TableCell>
                                <TableCell>
                                  <span>{row.model}</span>
                                </TableCell>
                                <TableCell>
                                  <span>{row.qty}</span>
                                </TableCell>
                                <TableCell>
                                  <span>{row.unit}</span>
                                </TableCell>
                              </TableRow>
                            </>
                          ))}
                        </TableBody>
                      </Table>
                    </DialogContent>
                  </Dialog>
                </>
              );
            }}
          </Formik>
        </main>
      </div>
    </>
  );
};

export default Formedit;
