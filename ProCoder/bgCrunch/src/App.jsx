import React, { useState } from 'react'
import Timer from './components/Timer'
import Questions from './components/Questions'

const App = () => {

  const [isOver, setIsOver] = useState(false);
  return (
    <div>
      <h1 className='text-amber-700 underline text-orange-500 text-5xl text-center p-5 font-mono w-full m-auto'>Quiz App</h1>
      <Timer />
      {isOver ? (<Result />) : (<Questions setIsOver={setIsOver}/>)}
    </div>
  )
}

export default App
