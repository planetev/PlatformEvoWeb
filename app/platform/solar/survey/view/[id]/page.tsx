"use client";
import { useAuth } from '@/app/context/AuthContext';
import Viewsurvey from '@/app/modules/platform/solar/survey/view/view-survey'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'


const Page = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { token, session, status } = useAuth();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
  return (
    <>
    <Viewsurvey id={params.id} />
    </>
  )
}

export default Page