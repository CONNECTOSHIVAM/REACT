import React from 'react'

const Result = ({score}) => {
  return (
    <div className='flex justify-center items-center'>
      <h2 className='w-[20%] p-17 rounded-b-3xl mt-15 bg-green-950 text-4xl text-amber-100 text-center hover:opacity-70 duration-500 ease-in-out cursor-pointer' >Your score: {score}</h2>
    </div>
  )
}

export default Result
