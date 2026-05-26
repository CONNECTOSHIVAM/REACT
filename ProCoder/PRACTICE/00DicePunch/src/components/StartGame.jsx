import React from 'react'

import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="images/dices.png" alt="" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
      
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    align-items: center;
    height: 100vh;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }



`
const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 21px 26px;
    min-width: 220px;
    background: black;
    border-radius: 10px;
    color: wheat;
    border: 1px solid transparent;
    font-size: x-large;
    transition: 0.5s background ease-in;

    &:hover{
        border: 1px solid black;
        color: #e19508;
        background: white;
        text-decoration: underline;
        transition: 0.5s background ease-in;
    }
`