import Editsolar from '@/app/modules/platform/solar/survey/edit/editsolar'
import React from 'react'

const Page = ({ params }: { params: { id: string } }) => {
  return (
    <>

    <Editsolar id={params.id} />
    </>

  )
}

export default Page