import React from 'react'

function Navbar() {
  return (
    <div className='h-[60px] my-3 bg-amber-50 flex items-center justify-center font-medium text-2xl rounded-xl opacity-85 transition-all duration-500 ease-in box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;'>
      <div className='flex gap-2'>
        <img src="/firebase.svg" alt="" />
        <h1 className='text-amber-400'>Firebase CMA</h1>
      </div>
    </div>
  )
}

export default Navbar
