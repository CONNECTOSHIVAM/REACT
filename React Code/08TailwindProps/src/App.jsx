import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-wheat-500 text-sky-600'>Tailwind Css</h1>
    <h1 className='text-red-500'>Hello Tailwind</h1>
    <h1 className='text-red-500'>Amazing</h1>
    </>
  )
}

export default App
