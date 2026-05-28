import React, { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({selectedNumber, setSelectedNumber, error, setError}) => {
  const arrNum = [1, 2, 3, 4, 5, 6];

  const numberSelector = (value) => {
      setSelectedNumber(value);
      setError("");
  }

  
  return (
    <NumberContainer>
        <p className="error">{error}</p>
      <div className="dice">
        {arrNum.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={()=>numberSelector(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .dice {
    display: flex;
    gap: 25px;
  }
  p {
    font-size: 25px;
    font-weight: 500;
  }
  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  border-radius: 2px;
  display: grid;
  place-items: center;
  font-size: 28px;
  font-weight: 700;
  background: ${(props)=>(props.isSelected ? "black" : "white")};
  color: ${(props)=>(props.isSelected ? "white" : "black")};
  transition: 0.5s background ease-in-out;
  transition: 0.5s color ease-in;
`;
