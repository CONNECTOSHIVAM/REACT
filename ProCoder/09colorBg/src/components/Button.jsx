import React from 'react'

const Button = ({label, color}) => {
  return (
    <div className='flex items-center justify-center gap-5 m-5 text-gray-900 text-center font-mono font-bold hover:opacity-[0.6]'>
       <button style={{backgroundColor: color}} className='p-5 rounded-2xl w-25 hover:underline decoration-amber-100 decoration-wavy transition duration-700 cursor-pointer'>{label}</button>
    </div>
  )
}

export default Button
