  import React, { useState } from 'react'

  import styled from 'styled-components';
  import StartGame from './components/StartGame';
  import GamePlay from './components/GamePlay';



  const App = () => {

    const [isGameStarted, setIsGameStarted] = useState(false);

    const toggleGamePlay = () => {
      setIsGameStarted((prev)=> !prev)
    }
    return (
      <div>
        {isGameStarted ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
      </div>
    )
  }

  export default App
