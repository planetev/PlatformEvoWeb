"use client";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Head from "@/components/custom/Head";
import Main from "@/components/main";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Surveyinfo from "./form/surveyinfo";
import Pictureinfo from "./form/pictureinfo";
import Mouinfo from "./form/mouinfo";
import { Label } from "@/components/ui/label";
import Statusinfo from "./form/statusinfo";
import Crw from "./form/crw";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { useMutation } from "@tanstack/react-query";
import { toast } from "@/components/ui/use-toast";
import { createChargerSurvey } from "@/service/charger/chargerSurveyCallAPI";
import { useAuth } from "@/app/context/AuthContext";
const Create = () => {
  const { token, session } = useAuth();
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const today = new Date();
  const [date2, setDate2] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });

  const validationSchema = Yup.object({
    pgen: Yup.string().required("กรุณากรอกชื่อโครงการ"),
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

  const initialData: any = {
    status: "",
    pjth: "",
    pgen: "",
    day: "",
    latlong: "",
    name_po: "",
    tel_po: "",
    line_po: "",
    email_po: "",
    staff_survey: "",
    tel_survey: "",

    type_ele: "",
    main_ele: "",
    install_ele: "",
    parking_ele: "",
    work_ele: "",
    work_tor_ele: "",
    remark: "",

    mou_address: "",
    mou_bank: "",
    mou_major: "",
    mou_type_bank: "",
    mou_no: "",
    mou_acc_name: "",
    mou_taxt_no: "",
    mou_rate: "",
    mou_date: "",
    image_mou: [],
  };
  const navigateToSolarTab = (tabValue: string) => {
    // ใช้ URLSearchParams เพื่อสร้าง query string
    const searchParams = new URLSearchParams({ tab: "2" });
    router.push(`/platform/charger?${searchParams.toString()}`);
  };

  const createChargerSurveys = useMutation({
    mutationFn: async ({ token, payload }: any) => {
      return await createChargerSurvey({ token, payload });
    },
    onSuccess: (res) => {
      if (res) {
        toast({
          title: "Create Successful",
          className: "bg-green-500 text-white font-semibold",
          description: "สร้างข้อมูลสำเร็จ",
        });
      // router.push("/platform/solar",);
      navigateToSolarTab("2");
      }
    },
    onError: (err) => {
      console.log(err);
      toast({
        title: "Create Unsuccessful",
        className: "bg-red-500 text-white font-semibold",
        description: "ตรวจพบความผิดปกติ",
      });
    },
  });
  return (
    <>
      <Main>
        <Head ltext={"Create-survey"} />

        <div className="w-full ">
          <main className="grid w-full  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-white overflow-hidden hide-scrollbar">
            <Formik
              initialValues={initialData}
              validationSchema={validationSchema}
              onSubmit={async (values) => {

                const payload = {
                  status: values.status,
                  pjth: values.pjth,
                  pgen: values.pgen,
                  day: convertDate(date),
                  latlong: values.latlong,
                  name_po: values.name_po,
                  tel_po: values.tel_po,
                  line_po: values.line_po,
                  email_po: values.email_po,
                  staff_survey: values.staff_survey,
                  tel_survey: values.tel_survey,

                  type_ele: values.type_ele,
                  main_ele: values.main_ele,
                  install_ele: values.install_ele,
                  parking_ele: values.parking_ele,
                  work_ele:   values.work_ele,
                  work_free_ele: 40,
                  work_true_ele: values.work_ele - 40,
                  work_tor_ele:   values.work_tor_ele  || [],
                  remark: values.remark,

                  mou_address: values.mou_address,
                  mou_bank: values.mou_bank,
                  mou_major: values.mou_major,
                  mou_type_bank: values.mou_type_bank,
                  mou_no: values.mou_no,
                  mou_acc_name: values.mou_acc_name,
                  mou_taxt_no: values.mou_taxt_no,
                  mou_rate: values.mou_rate,
                  mou_date: convertDate(date2?.from ) + " - " + convertDate(date2?.to),
                  image_mou:  values.image_mou || [],


                };
                console.log("payload-charger", payload);
                createChargerSurveys.mutate({ token, payload });
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
                        <Button
                          variant="outline"
                          size="icon"
                          type="button"
                          onClick={() => router.back()}
                          className="h-7 w-7"
                        >
                          <ChevronLeft className="h-4 w-4" />
                          <span className="sr-only">Back</span>
                        </Button>
                        <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                          Charger Controller
                        </h1>
                        <Badge variant="outline" className="ml-auto sm:ml-0">
                          In Charger
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
                            Create Survey
                          </Button>
                        </div>
                      </div>
                      <div className="grid gap-4 p-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8 overflow-auto ">
                        <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                          <Surveyinfo date={date} setDate={setDate} setFieldValue={setFieldValue} values={values} handleChange={handleChange} touched={touched} errors={errors}  />
                          <Mouinfo date2={date2} setDate2={setDate2} setFieldValue={setFieldValue} values={values} handleChange={handleChange} touched={touched} errors={errors}  />
                          <Pictureinfo setFieldValue={setFieldValue} values={values} handleChange={handleChange} touched={touched} errors={errors}  />
                        </div>
                        <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                          <Statusinfo setFieldValue={setFieldValue} values={values} handleChange={handleChange} touched={touched} errors={errors}  />
                          <Crw  setFieldValue={setFieldValue} values={values} handleChange={handleChange} touched={touched} errors={errors}/>
                        </div>
                      </div>
                    </form>
                  </>
                );
              }}
            </Formik>
          </main>
        </div>
      </Main>
    </>
  );
};

export default Create;
