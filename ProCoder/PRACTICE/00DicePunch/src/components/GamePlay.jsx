import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import styled from "styled-components";
import RollDice from "./RollDice";
import { Button } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState("");
  const [visible, setVisible] = useState(false);

  const rollDice = () => {
    if(!selectedNumber){
      setError("You have not selected any number.");
      return;
    }
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setCurrentDice(randomNumber);
    if(selectedNumber === randomNumber)
    {
        setScore((prev)=>prev+randomNumber)
    }else{
      setScore((prev)=> prev - 2)
    }

    setSelectedNumber(undefined)
  };

  const resetScore = () => {
    setScore(0);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score}/>
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RollDice currentDice={currentDice} rollDice={rollDice} />
      <div className="btns">
        <OutlineButton onClick={resetScore} >Reset</OutlineButton>
        <Button onClick={()=> setVisible((prev)=>!prev)}>{visible ? "Hide" : "Show"}  Rules</Button>
      </div>
      <div style={{transition: "all 0.3s ease-in" }}>
        {visible && <Rules/>}
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.div`
  margin-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

export const OutlineButton = styled(Button)`
  background: white;
  border: 1px solid black;
  color: black;

  &:hover{
    background: black;
    border: 1px solid transparent;
    color: white;
  }
`
