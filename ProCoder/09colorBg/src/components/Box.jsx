import React from 'react'

const Box = ({color}) => {
  return (
    <div>
      <div style={{backgroundColor: color}} className='m-auto flex justify-center items-center size-124 rounded-3xl mt-15 border-4 shadow-2xl text-5xl font-sans text-shadow-2xs  transition duration-500'>
        <h1>Punch me</h1>
      </div>
    </div>
  )
}

export default Box
