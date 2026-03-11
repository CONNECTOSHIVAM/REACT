import React from 'react'
import Timer from './components/Timer'
import Questions from './components/Questions'

const App = () => {
  return (
    <div>
      <h1 className='text-amber-700 underline text-orange-500 text-5xl text-center p-5 font-mono w-full m-auto'>Quiz App</h1>
      <Timer />
      <Questions />
    </div>
  )
}

export default App
