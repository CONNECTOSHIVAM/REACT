import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  return (
     <>
       <h1 className='text-6xl text-center text-white'>Password Generator</h1>
     </>
  )
}

export default App
