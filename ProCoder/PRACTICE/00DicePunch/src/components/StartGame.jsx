
import styled from 'styled-components'

import { Button } from '../styled/Button'

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
