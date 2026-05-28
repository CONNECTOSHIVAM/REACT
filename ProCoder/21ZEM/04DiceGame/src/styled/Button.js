import styled from "styled-components";

export const Button = styled.button`
    padding: 21px 26px;
    border: 1px solid transparent;
    color: wheat;
    font-size: x-large;
    background: black;
    min-width: 220px;
    border-radius: 3px;
    font-weight: 500;
    font-family: cursive;
    transition: 0.5s background ease-in;

    &:hover{
        background: whitesmoke;
        color: #f4a209;
        border: 2px double #f4a209 ;
        text-decoration: underline;
        transition: 0.5s background ease-in-out;
    }
`

export const OutlineButton = styled(Button)`
   background-color: white;
   border: 1px solid #f9a404;
   color: #f4a209;

   &:hover{
    background-color: black;
    color: wheat;
    border: 1px solid transparent;
   }

`