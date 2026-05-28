import React from 'react'

import styled from "styled-components"
import { Button } from '../styled/Button'

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
