import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('blue')

  return (

    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-amber-50 px-2 py-3 rounded-2xl">
          <button className='outline-none px-5 py-1 rounded-2xl text-white shadow-2xl' style={{ backgroundColor: "red" }} onClick={() => setColor("red")}> red</button>
          <button className='outline-none px-5 py-1 rounded-2xl text-white shadow-2xl' style={{ backgroundColor: "wheat" }} onClick={() => setColor("wheat")}> wheat</button>
          <button className='outline-none px-5 py-1 rounded-2xl text-white shadow-2xl' style={{ backgroundColor: "goldenrod" }} onClick={() => setColor("goldenrod")}> goldenrod</button>
          <button className='outline-none px-5 py-1 rounded-2xl text-white shadow-2xl' style={{ backgroundColor: "black" }} onClick={() => setColor("black")}> red</button>
          <button className='outline-none px-5 py-1 rounded-2xl text-white shadow-2xl' style={{ backgroundColor: "olive" }} onClick={() => setColor("olive")}> red</button>
          <button className='outline-none px-5 py-1 rounded-2xl text-white shadow-2xl' style={{ backgroundColor: "teal" }} onClick={() => setColor("teal")}> red</button>
          <button className='outline-none px-5 py-1 rounded-2xl text-white shadow-2xl' style={{ backgroundColor: "orange" }} onClick={() => setColor("orange")}> red</button>

        </div>
      </div>
    </div>

  )
}

export default App;
