import React from 'react'

import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <StartGameContainer>
        <div>
            <img src="images/dices.png" alt="" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
      
    </StartGameContainer>
  )
}

export default StartGame

const StartGameContainer = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    align-items: center;
    height: 100vh;
    .content h1{
        font-size: 108px;
        white-space: nowrap;
    }
`
const Button = styled.button`
    padding: 21px 26px;
    border: 1px solid transparent;
    color: wheat;
    font-size: x-large;
    background: black;
    min-width: 220px;
    border-radius: 3px;
    font-weight: 500;
    font-family: cursive;
    transition: 0.5s background ease-in;

    &:hover{
        background: whitesmoke;
        color: #f4a209;
        border: 2px double #f4a209 ;
        text-decoration: underline;
        transition: 0.5s background ease-in-out;
    }
`