import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="text-5xl text-orange-500 text-center m-10 font-bold text-shadow-blue-200">Color Crunch 🎨</h1>
      <div className="flex justify-center items-center gap-4">
        <Buttons label="orange" />
        <Buttons label="Gold" />
        <Buttons label="sky" />
      </div>

    </>
  )
}

export default App
