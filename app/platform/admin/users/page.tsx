"use client";
import { useAuth } from '@/app/context/AuthContext';
import { useSession } from 'next-auth/react';
import React from 'react'
import Pp from './pp';

const Page = () => {
  const { data: session, status } = useSession();

  return (
    <>

    <div> fron useSession:{session?.user.role}</div>
    <Pp />
    </>
  )
}

export default Page