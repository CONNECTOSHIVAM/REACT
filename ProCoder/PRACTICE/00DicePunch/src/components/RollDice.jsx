import styled from "styled-components";

const RollDice = ({ currentDice, rollDice }) => {

    console.log(currentDice);
    
  return (
    <DiceContainer>
      <div className="dice" onClick={rollDice}>
        <img src={`images/dice/dice_${currentDice}.png`} alt="" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p{
    font-size: 26px;
  }
`;
