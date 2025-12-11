import React from 'react'
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3  '>
      <div className='p-7'>
        <h3 className='mb-7 leading-[1.4] text-6xl font-bold'>Prespective <br /> <span className='bg-gray-100 rounded-full px-5'>Customer</span> <br /> Segmentation</h3>
        <p className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eaque tempore facilis maiores quibusdam sequi nesciunt. Nesciunt placeat repellendus sed?</p>
      </div>
      <div className='text-9xl'>
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  )
}

export default LeftContent
