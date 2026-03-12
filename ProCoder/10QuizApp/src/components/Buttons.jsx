import React from 'react'

const Buttons = ({label, color}) => {

  console.log(label);
  
  return (
    <div>
      <button  style={{ backgroundColor: color }} className="flex p-5 w-35 text-center rounded-2xl hover:opacity-70 font-mono border-3 hover:border-teal-700 text-2xl duration-500 ease-out" >{label}</button>
    </div>
  )
}

export default Buttons
