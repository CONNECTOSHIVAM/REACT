import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore/>
        <NumberSelector/>
      </div>
        <RollDice/>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
margin-top: 70px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
`
