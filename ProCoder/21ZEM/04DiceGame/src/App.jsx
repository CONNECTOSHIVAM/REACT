import React from 'react'

import { useState } from 'react'
import StartGame from './components/StartGame'
import PlayGame from './components/PlayGame';

const App = () => {

  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setIsGameStarted((prev) => !prev)
  }


  return (
    <div>
      {isGameStarted ? <PlayGame/> : <StartGame toggle={toggleGamePlay}/>}
    </div>
  )
}

export default App
