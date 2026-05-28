import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RollDice from './RollDice'
import { Button, OutlineButton } from '../styled/Button'
import Rules from './Rules'

const GamePlay = () => {

    const [score, setScore] = useState(0);
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState(1);
    const [error, setError] = useState("");
    const [visible, setVisible] = useState(false);

    const rollDice = () => {

      if(!selectedNumber)
      {
        setError("You have not selected any number.");
        return;
      }

      const randomNumber = Math.floor(Math.random()*6)+1;
      setCurrentDice(randomNumber)

      if(randomNumber === selectedNumber)
      {
          setScore((prev)=>(prev+randomNumber));
      }else{
        setScore((prev)=>(prev-2));
      }

      setSelectedNumber(undefined);

    }

    const reset = () => {
      setScore(0);
    }



  return (
    <GameContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice}/>
      <div className="btns">
        <OutlineButton onClick={()=>(reset())} >Reset</OutlineButton>
        <Button onClick={()=>setVisible((prev)=>!prev)}>{visible ? "Hide" : "Show"} rules</Button>
      </div>
      {visible && <Rules/>}
    </GameContainer>
  )
}

export default GamePlay

const GameContainer = styled.div`
    
    margin-top: 70px;

    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 25px;
    }
`
