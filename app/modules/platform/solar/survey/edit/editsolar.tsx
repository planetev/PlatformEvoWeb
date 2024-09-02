import Head from "@/components/custom/Head";
import Main from "@/components/main";
import React from "react";
import Formedit from "./formedit";

export interface EditsurveyProps {
  id: string;
}
const Editsolar = ({ id }: EditsurveyProps) => {
  return (
    <>
      <Main>
        <Head ltext={"ข้อมูลสำรวจโซลาเซล์"} />
        <Formedit id={id} />
      </Main>
    </>
  );
};

export default Editsolar;
