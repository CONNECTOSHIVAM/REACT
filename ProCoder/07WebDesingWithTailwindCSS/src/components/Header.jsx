import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <div className='bg-amber-200 py-5 rounded-3xl'>
      <header className='flex justify-between items-center max-w-[60rem] m-auto p-4 text-2xl '>
         <h1 className='text-4xl'><span className='font-extrabold text-[tomato] '>B</span>rand</h1>
         <div className='flex gap-10 items-center'>
           <a href="">Features</a>
           <a href="">Use Case</a>
           <a href="">Integration</a>
           <a href="">About us</a>
         </div>
         <Button text="Join Us"/>
         {/* <button className='bg-[tomato] px-4 py-3 rounded-2xl'>Join US</button> */}
      </header>
    </div>

  )
}

export default Header
