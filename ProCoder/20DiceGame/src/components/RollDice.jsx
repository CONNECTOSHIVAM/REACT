import React, { useState } from 'react'
import styled from 'styled-components';

const RollDice = () => {

    const [currentDice, setCurrentDice] = useState(1);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const rollDice = () => {
        const randomNumber = generateRandomNumber(1,7);
        setCurrentDice((prev)=> randomNumber)
    }
  return (
    <DiceContainer>
        <div className='dice' onClick={rollDice}>
            <img src={`/images/dice/dice_${currentDice}.png`} alt="" />
        </div>
        <p>Click on Dice to roll</p>
    </DiceContainer>
  )
}

export default RollDice;

const DiceContainer = styled.div`
    margin-top: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .dice{
        cursor: pointer;
    }
`;
