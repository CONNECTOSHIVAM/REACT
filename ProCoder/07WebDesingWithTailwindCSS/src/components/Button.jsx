import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-[tomato]  p-4 rounded-lg text-3xl text-amber-50'>{props.text}</button>
    </div>
  )
}

export default Button
