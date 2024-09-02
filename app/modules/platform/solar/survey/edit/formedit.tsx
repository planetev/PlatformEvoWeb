import React from "react";
import { EditsurveyProps } from "./editsolar";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Woi from "./form/woi";


const Formedit = ({ id }: EditsurveyProps) => {
  return (
    <>
      <div className="w-full ">
        <main className="grid w-full  gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-white overflow-hidden hide-scrollbar">
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
              <Button variant="outline" size="sm" type="button">
                cancel
              </Button>
              <Button type="submit" size="sm">
                Edit Survey
              </Button>
            </div>
          </div>
          <div className="grid gap-4 p-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8 overflow-auto ">
          <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
           <Woi />
           </div>
           </div>
        </main>
      </div>
    </>
  );
};

export default Formedit;
