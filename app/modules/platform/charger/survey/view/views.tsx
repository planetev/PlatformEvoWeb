"use client";
import { useAuth } from '@/app/context/AuthContext';
import Head from '@/components/custom/Head'
import Main from '@/components/main'
import { getChargerSurveyById } from '@/service/charger/chargerSurveyCallAPI';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import Viewf from './viewf';

const Views = ({id}:any) => {
 const { token, session } = useAuth();

 const {
  isPending,
  error,
  data: listGetId,
  isLoading,
  refetch,
} = useQuery({
  queryKey: ["get-id-survey-charger"],
  queryFn: async () => {
    try {
      const res: any = await getChargerSurveyById({ id ,token });
      return res;
    } catch (err) {
      throw err;
    }
  },
});
  return (
    <>

    <Main>
        <Head ltext={"ข้อมูลสำรวจ" } icc="view-Charger" />

        <div className="w-full">
        <main className="grid w-full   bg-white overflow-hidden hide-scrollbar">
        <Viewf dataS={listGetId} />
        </main>
        </div>
      </Main>

    </>
  )
}

export default Views