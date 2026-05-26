import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'

const GamePlay = () => {
  return (
    <MainContainer>
      <div className="top_btn">
        <TotalScore/>
        <NumberSelector/>
      </div>
    </MainContainer>
  )
}

export default GamePlay

const MainContainer = styled.div`
    padding-top: 70px;
    .top_btn{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`

