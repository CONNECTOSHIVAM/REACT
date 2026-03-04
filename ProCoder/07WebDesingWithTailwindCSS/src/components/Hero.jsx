import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <>
        <div className='max-w-[57rem] m-auto text-center py-[8rem]'>
         <h1 className='text-7xl  font-bold font-serif text-[#b92e16]'>The Best Way To <span className='px-3 bg-amber-200 rounded-2xl'>Review</span> Creative Assets.</h1>
         <p className='text-lg text-amber-50 max-w-[45rem] m-auto text-center py-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis exercitationem in quia accusamus 10x quos.</p>
         <Button text="feel experience"/>
       </div>
    </>
  )
}

export default Hero
