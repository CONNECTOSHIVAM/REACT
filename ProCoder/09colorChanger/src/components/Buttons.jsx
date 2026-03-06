import React from 'react'

const Buttons = (props) => {
  return (
    <div>
      <button className="bg-amber-200 p-5 rounded-3xl">{props.label}</button>
    </div>
  )
}

export default Buttons
