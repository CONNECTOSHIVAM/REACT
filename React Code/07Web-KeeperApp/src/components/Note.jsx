import React from "react";

const Note = (props) => {
  return (
    <div className="Note">
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default Note
