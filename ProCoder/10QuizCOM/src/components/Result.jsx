import React from 'react'

const Result = ({score}) => {
  return (
    <div className='flex justify-center items-center'>
      <h2 className='w-[20%] p-17 rounded-b-3xl mt-15 bg-[tomato] text-4xl text-amber-100 text-center hover:opacity-70 duration-500 ease-in-out cursor-pointer'>Quiz Result: {score}/10</h2>
    </div>
  )
}

export default Result
