import React from 'react'

import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    align-items: center;
    height: 100vh;

    .content h1{
        font-size: 96px;
        white-space: nowrap;
    }
`

const Button = styled.button`
    padding: 16px 18px;
    min-width: 220px;
    height: 64px;
    background-color: black;
    color: wheat;
    border-radius: 5px;
    border: none;
    font-size: larger;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.3s background-color ease-out;

    &:hover{
        background-color: whitesmoke;
        color: #df9408;
        border: 1px solid black;
        transition: 0.3s background-color ease-out;
    }
`
