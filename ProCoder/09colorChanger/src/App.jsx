import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button'
import Box from './components/Box'

function App() {
  const colors = ['red', 'olive', 'green', 'yellow', 'orange', 'purple', 'pink'];

  const [color, setColor] = useState('transparent');

  return (
    <>
      <h1 className="text-5xl text-orange-500 text-center m-10 font-bold text-shadow-blue-200">Color Crunch 🎨</h1>
      
      <div className="flex justify-center items-center gap-4 m-5 text-amber-100">
          {colors.map((items) =>(
            <Button label = {items} color={items} setColor={setColor} />
          ))}
      </div>

      <Box color={color} />

    </>
  )
}

export default App
