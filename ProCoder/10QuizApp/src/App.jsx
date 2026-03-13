import { useState } from 'react'
import Timer from './components/Timer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className='text-5xl font-mono text-center text-sky-500 mt-7 border-double shadow-amber-50 border-4 m-auto w-[30%] rounded-xl p-5 hover:border-sky-300 duration-300 ease-out'>Quiz App</h1>
     <Timer />
    </>
  )
}

export default App
