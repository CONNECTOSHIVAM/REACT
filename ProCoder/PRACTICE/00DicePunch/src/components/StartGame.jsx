
import styled from 'styled-components'

const StartGame = ({toggle}) => {
  return (
    <MainContainer>
       <div>
        <img src="images/dices.png" alt="" />
       </div>
       <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
       </div>
    </MainContainer>
  )
}

export default StartGame

const MainContainer = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    display: flex;
    height: 100vh;
    align-items: center;

    .content h1{
        font-size: 96px;
        line-height: 108px;
        white-space: nowrap;
    }

`
const Button = styled.button`
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
