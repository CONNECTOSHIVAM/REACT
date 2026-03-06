import React from 'react'

const Button = ({color, label, setColor}) => {

  console.log({color, label, setColor});

  function colorChange(){
    setColor(color);
  }
  
  


  return (
    <>
    <div className="flex justify-center items-center gap-4 m-5 text-amber-50 border-2 border-amber-500 rounded-2xl p-2 bg-amber-600 outline-amber-500 hover:bg-amber-700">
      <button style={{backgroundColor: color}} className="px-5 py-3 rounded-2xl" onClick={colorChange}>{label}</button>
    </div>
    </>

    
  )
}

export default Button