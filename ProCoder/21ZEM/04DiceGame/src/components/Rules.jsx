import React from 'react'
import styled from 'styled-components'

const Rules = () => {
  return (
    <RulesContainer>
      <h1>How to play Dice game</h1>
      <div className="text">
        <p>select any number</p>
        <p>click on dice image</p>
        <p>After click on dice if selected number is equal to dice number you will get same point as dice</p>
        <p>If you get wrong guess than 2 point will be deducted.</p>
      </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
   display: flex;
   flex-direction: column;
   margin: 0 auto;
   margin-top: 25px;
   background: #fbf1f1;
   max-width: 800px;
   padding: 35px;
   margin-bottom: 35px;
   border-radius: 0% 0% 20% 20%;
    h2{
        font-weight: 800;
    }
    .text{
        margin-top: 15px;
    }
`
