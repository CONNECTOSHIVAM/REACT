import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSeelector from './NumberSeelector'
import styled from 'styled-components'
import RollDice from './RollDice'

const PlayGame = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  

  const rollDice = () => {
    if(!selectedNumber){
      setError("You have not selected any number.");
      return;
    }
    
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);

    

    if(selectedNumber === randomNumber)
    {
      setScore((prev)=>prev+randomNumber  )
    }else{
      setScore((prev)=>prev-2)
    }

    setSelectedNumber(undefined);
  };


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSeelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber}/>
      </div>
      <RollDice  currentDice={currentDice} rollDice={rollDice}/>
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
