import { useState } from 'react'
import Timer from './components/Timer'
import Questions from './components/Questions'
import Result from './components/Result'


function App() {
  const [score, setScore] = useState(0)
  const [isOver, setIsOver] = useState(false)



  return (
    <>
     <h1 className='text-5xl font-mono text-center text-sky-500 mt-7 border-double shadow-amber-50 border-4 m-auto w-[30%] rounded-xl p-5 hover:border-sky-300 duration-300 ease-out'>Quiz App</h1>
      { isOver ? <Result score={score} /> : (<> <Timer setIsOver={setIsOver} /> <Questions setIsOver={setIsOver} setScore={setScore}/></>)}
    </>
  )
}

export default App
