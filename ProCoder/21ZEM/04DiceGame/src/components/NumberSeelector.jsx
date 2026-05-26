import React from "react";
import { useState } from "react";

import styled from "styled-components";

const arrNumber = [1, 2, 3, 4, 5, 6];

const NumberSeelector = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  return (
    <NumberSelectorContainer>
      <div className="flex">
        {arrNumber.map((value, i) => (
          <Box  isSelected={value === selectedNumber} key={i} onClick={() => setSelectedNumber(value)}>
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

export default NumberSeelector;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 25px;
  }
  p {
    font-size: 25px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 700;
  background-color: ${(props)=> (props.isSelected ? "black" : "white")};
  color:  ${(props)=> (props.isSelected ? "white" : "black") };
`;
