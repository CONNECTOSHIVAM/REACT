import { useState } from 'react'
import Header from './components/Header'
import Timer from './components/Timer'
import Question from './components/Question'
import Result from './components/Result'


function App() {
  const [score, setScore] = useState(0);
  const [isOver, setIsOver] = useState(false);

  return (
    <>
    <Header />

    {isOver ? <Result score={score}/> : (<><Timer setIsOver={setIsOver} /> <Question setScore={setScore} setIsOver={setIsOver} /></>)}
  
    </>
  )
}

export default App
