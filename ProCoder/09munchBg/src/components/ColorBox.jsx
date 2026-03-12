import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div style={{backgroundColor: color}} className='flex justify-center items-center size-145 mt-15 m-auto border-4 text-4xl duration-500 ease-linear'>
      <h1>color code: {color}</h1>
    </div>
  )
}

export default ColorBox
