import React from 'react'

const Colorbox = ({color}) => {
  return (
    <div style={{backgroundColor: color}} className='size-135 border-4 m-auto mt-15 text-6xl text-center font-mono flex justify-center items-center duration-500 ease-in-out'>
      <h1>Punch me</h1>
    </div>
  )
}

export default Colorbox
