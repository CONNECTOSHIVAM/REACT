import React, { useState } from 'react'
import StartGame from './components/StartGame'
import GamePlay from './components/GamePlay';
// import GamePlay from './components/GamePlay';

const App = () => {

  const [gameStatus, setGameStatus] = useState(false);

  const toggleGamePlay = () => {
    setGameStatus((prev)=>(!prev))
  }
 
  return (
    <div>
      {gameStatus ? <GamePlay/> : <StartGame toggle={toggleGamePlay}/>}
    </div>
  )
}

export default App
