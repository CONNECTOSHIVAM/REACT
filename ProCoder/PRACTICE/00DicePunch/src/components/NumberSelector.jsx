import React, { useState } from 'react'

import styled from 'styled-components'

const NumberSelector = () => {

    const [selectedNumber, setSelectedNumber] = useState(1);

    const arrNumber = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
        <div className="flex">
            {arrNumber.map((value, i)=>(<Box isSelected={value === selectedNumber} key={i} onClick={()=>{setSelectedNumber(value)}}>{value}</Box>))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  )
}

export default NumberSelector


const NumberSelectorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 25px;
    }
    p{
        font-size: 25px;
        font-weight: 500;
    }
`

const Box = styled.button`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    border-radius: 5px;
    display: grid;
    place-items: center;
    font-size: 25px;
    font-weight: 800;
    background: ${(props)=>(props.isSelected? "black" : "white")};
    color: ${(props)=>(props.isSelected? "white" : "black")};
    transition: 0.5s background ease-in-out;
    transition: 0.5s color ease-in;
`