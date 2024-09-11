import Views from "@/app/modules/platform/charger/survey/view/views";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <Views id={params.id} />
    </>
  );
};

export default Page;
