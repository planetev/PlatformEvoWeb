"use client";
import React, { useState } from "react";
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
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
const Create = () => {
  const router = useRouter();
  const [date, setDate] = useState<Date>();
  const today = new Date();
  const [date2, setDate2] = useState<DateRange | undefined>({
    from: undefined,
    to: undefined,
  });
  return (
    <>
      <Main>
        <Head ltext={"Create-survey"} />

        <div className="w-full ">
          <main className="grid w-full  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-white overflow-hidden hide-scrollbar">
            <form>
              <div className="flex items-center gap-4 p-2">
                <Button variant="outline" size="icon" className="h-7 w-7">
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
                  <Surveyinfo date={date} setDate={setDate} />
                  <Mouinfo date2={date2} setDate2={setDate2} />
                  <Pictureinfo />
                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Statusinfo />
                  <Crw />
                </div>
              </div>
            </form>
          </main>
        </div>
      </Main>
    </>
  );
};

export default Create;
