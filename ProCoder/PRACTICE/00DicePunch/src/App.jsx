import React, { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';

const App = () => {

  const [gameStatus, setGameStatus] = useState(false);

  const gameToggle = () => {
    setGameStatus((prev)=>!prev)
  }
  return (
    <div>
      {gameStatus ? <GamePlay/> : <StartGame toggle={gameToggle}/>}
    </div>
  )
}

export default App
