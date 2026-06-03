import React from 'react'

const Navbar = () => {
  return (
    <div className='h-[60px] flex bg-white rounded-xl my-3 items-center justify-center font-medium text-2xl'>
      <div className='flex gap-3'>
        <img src="/firebase.svg" alt="" />
        <h1>Firebase CMA</h1>
      </div>
    </div>
  )
}

export default Navbar
