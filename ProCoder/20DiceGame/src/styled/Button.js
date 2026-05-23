import styled from "styled-components"

export const Button = styled.button`
  color: white;
  padding: 21px 25px;
  min-width: 220px;
  border: none;
  font-size: larger;
  background: black;
  border-radius: 5px;
  border: 1px solid transparent;
  transition: 0.5s background ease-out;

  &:hover{
    background: white;
    color: black;
    border: 1px solid black;
    transition: 0.5s background ease-out;
  }
`

export const OutlineButton = styled(Button)`
  background: black;
  border: 1px solid black;
  color: black;
  &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;
  