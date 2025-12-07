import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src=".\src\assets\image.png" alt="" />
            <h1>{props.user}</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button>View Profile {props.age}</button>
        </div>
    )
}

export default Card
