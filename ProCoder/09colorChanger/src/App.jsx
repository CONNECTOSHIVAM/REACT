import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './components/Buttons'

function App() {
  const [count, setCount] = useState(0)

  return (
       <>
       <h1>Color Crunch 🎨</h1>
       <Buttons label="orange"/>
       <Buttons label="Gold"/>
       <Buttons label="sky"/>
       </>
  )
}

export default App
