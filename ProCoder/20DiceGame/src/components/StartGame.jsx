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

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;

  .content{
    h1{
      font-size: 96px;
      white-space: nowrap;
    }

  }
`

const Button = styled.button`
  color: white;
  padding: 21px 25px;
  min-width: 220px;
  border: none;
  font-size: larger;
  background: black;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.5s background ease-out;

  &:hover{
    background: white;
    color: black;
    border: 1px solid black;
    transition: 0.5s background ease-out;
  }
`

export default StartGame
