import styled from "styled-components"

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 21px 26px;
    border: 1px solid transparent;
    min-width: 220px;
    background: black;
    color: wheat;
    font-size: x-large;
    border-radius: 7px;
    transition: 0.5s background ease-in;

    &:hover{
        background: whitesmoke;
        color: #ec9c07;
        border: 2px double #ec9c07;
        text-decoration: underline;
        transition: 0.5s background ease-in-out;
    }
`
