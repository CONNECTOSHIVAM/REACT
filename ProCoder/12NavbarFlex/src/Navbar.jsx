import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-[2rem] w-full'>
      <h1 className='text-5xl font-extrabold font-mono text-amber-50 relative cursor-pointer group hover:opacity-85'>Logo <span className='absolute left-0 -bottom-1 h-[5px] w-0 bg-pink-500 rounded-full transition-all duration-500 ease-out group-hover:w-full '></span></h1>

      <div className=' flex text-3xl relative text-amber-50 text-center gap-10 cursor-pointer group'>
        <a href="">Home <span className='absolute left-0 -bottom-1 h-[3px] w-0 bg-pink-500 rounded-full transition-all duration-500 ease-out group-hover:w-full'></span></a>
        <a href="">About <span className='absolute left-0 -bottom-1 h-[3px] w-0 bg-pink-500 rounded-full transition-all duration-500 ease-out group-hover:w-full'></span></a>
        <a href="">Services <span className='absolute left-0 -bottom-1 h-[3px] w-0 bg-pink-500 rounded-full transition-all duration-500 ease-out group-hover:w-full'></span></a>
        <a href="">Contact</a>
        <a href="">Login</a>
      </div>

      <div className='flex text-3xl gap-8 '>
        <span className='hover:opacity-80'>🔍</span>
        <span className='hover:opacity-80'>📄 </span>
      </div>
    </div>
  )
}

export default Navbar
