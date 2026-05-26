import React from 'react'
import TotalScore from './TotalScore'
import NumberSeelector from './NumberSeelector'
import styled from 'styled-components'
import RollDice from './RollDice'

const PlayGame = () => {
  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSeelector/>
      </div>
      <RollDice />
    </MainContainer>
  )
}

export default PlayGame

const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`
