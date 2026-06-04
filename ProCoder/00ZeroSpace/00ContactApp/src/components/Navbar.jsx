import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[60px] bg-amber-50   my-3 flex justify-center items-center rounded-xl opacity-90  font-medium text-2xl transition-all duration-500 ease-out shadow-xl'>
      <div className='flex gap-2'>
        <img src="/firebase.svg" alt="" />
        <h1 className='text-yellow-500 '>Firebase CMA</h1>
      </div>
    </div>
  )
}

export default Navbar
