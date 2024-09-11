import Edit from '@/app/modules/platform/charger/survey/edit/edit'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>
  <Edit id={params.id} />

    </>
  )
}

export default Page