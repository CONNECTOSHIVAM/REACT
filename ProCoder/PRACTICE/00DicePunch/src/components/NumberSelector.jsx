import React, { useState } from "react";

import styled from "styled-components";

const NumberSelector = () => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const numArr = [1, 2, 3, 4, 5, 6];
  return (
    <NumberContainer>
      <div className="flex">
        {numArr.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => setSelectedNumber(value)}
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
  display: grid;
  place-items: center;
  font-size: 26px;
  font-weight: 700;
  border-radius: 3px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
`;
