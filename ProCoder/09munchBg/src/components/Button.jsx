import React from 'react'

const Button = ({label, color, setColor}) => {

  function colorHandler(){
    setColor(color)
  }
  return (
    <button style={{backgroundColor: color}} className='w-40 h-20 rounded-2xl hover:opacity-75 mt-7 border-4 hover:border-amber-300 duration-500 ease-out shadow-2xl' onClick={colorHandler}>
     {label}
    </button>
  )
}

export default Button
