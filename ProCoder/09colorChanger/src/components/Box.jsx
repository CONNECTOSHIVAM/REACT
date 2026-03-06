import React from 'react'

const Box = ({color}) => {
  return (
    <div style={{backgroundColor: color}} className="m-auto flex justify-center items-center size-124 rounded-3xl border-2 hover:outline-amber-800 ">
       <h1 className="text-5xl text-gray-100 content-center p-5 border-amber-300 outline-amber-500">Crunch Box</h1>
    </div>
  )
}

export default Box
