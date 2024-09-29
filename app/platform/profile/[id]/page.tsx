import MainProfile from '@/app/modules/platform/profile/main'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
    <MainProfile id={params.id} />
    </>
  )
}

export default Page