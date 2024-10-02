"use client";
import { useAuth } from "@/app/context/AuthContext";
import Head from "@/components/custom/Head";
import Main from "@/components/main";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getSolarSurveyById } from "@/service/Solar/solarSurveyCallAPI";
import { useQuery } from "@tanstack/react-query";
import { CirclePlus } from "lucide-react";
import React from "react";
import SolarCus from "./solar.cus";

interface ViewsurveyProps {
  id: string;
}

const Viewsurvey = ({ id }: ViewsurveyProps) => {
    const { token, session } = useAuth();
    const tabsDashboard: any[] = [
        { value: "1", label: "Information", component: "1" },
        { value: "2", label: "Survey", component: "2" },
        { value: "3", label: "other", component: "other" },
      ];


      const {
        isPending,
        error,
        data: listGetID,
        isLoading,
        refetch,
      } = useQuery({
        queryKey: ["get-id-survey-solar"],
        queryFn: async () => {
          try {
            const res: any = await getSolarSurveyById({ id ,token });
            return res;
          } catch (err) {
            throw err;
          }
        },
      });

  return (
    <>
      <Main>
        <Head ltext={"ข้อมูลสำรวจโซลาเซล์" }  icc="view-solar"/>

        <div className="w-full">
        <main className="grid w-full   bg-white overflow-hidden hide-scrollbar">
        <SolarCus listGetID={listGetID} />
        </main>
        </div>
      </Main>
    </>
  );
};

export default Viewsurvey;
