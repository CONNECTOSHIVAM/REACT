import React from 'react'
import styled from 'styled-components'

const TotalScore = ({score}) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  )
}

export default TotalScore

const ScoreContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 220px;
    text-align: center;

    h1{
        font-size: 96px;
        line-height: 100px;
    }
    p{
        font-size: 25px;
        font-weight: 500;
    }
`
