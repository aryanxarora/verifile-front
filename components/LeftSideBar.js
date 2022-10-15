import React from 'react'
import Image from 'next/image'

function LeftSideBar() {
  return (
    <div>
      <div className='flex justify-center image-div'>
        <Image src="/logo.svg" className='object-contain' width={150} height={50}/>
      </div>
      <h1></h1>
    </div>
  )
}

export default LeftSideBar