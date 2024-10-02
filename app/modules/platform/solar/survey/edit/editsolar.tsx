"use client";
import React, { useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";
import Head from "@/components/custom/Head";
import Main from "@/components/main";

import Formedit from "./formedit";
import { useQuery } from "@tanstack/react-query";
import { getSolarSurveyById } from "@/service/Solar/solarSurveyCallAPI";

export interface EditsurveyProps {
  id: string;
}
const Editsolar = ({ id }: EditsurveyProps) => {
  useEffect(() => {}, [id]);

  return (
    <>
      <Main>
        <Head ltext={"ข้อมูลสำรวจโซลาเซล์"} icc="Edit-survey-solar" />
        <Formedit id={id} />
      </Main>
    </>
  );
};

export default Editsolar;
