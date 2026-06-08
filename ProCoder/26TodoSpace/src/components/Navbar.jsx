import React from 'react'
import { SiTodoist } from "react-icons/si";


const Navbar = () => {
  return (
    <div className='h-[60px] my-3 bg-amber-50 flex justify-center items-center font-medium text-2xl rounded-xl opacity-85
     transition-all duration-500 ease-in box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;'>
      <div className='flex gap-2 text-amber-400'>
        <SiTodoist className='text-3xl'/>
        <h1>TodoSpace</h1>
      </div>
    </div>
  )
}

export default Navbar
