import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-amber-200 py-5 rounded-3xl'>
      <header className='flex justify-between max-w-[60rem] m-auto items-center p-4 text-2xl '>
         <h1><span className='font-extrabold text-[tomato]'>B</span>rand</h1>
         <div className='flex gap-10'>
           <a href="">Features</a>
           <a href="">Use Case</a>
           <a href="">Integration</a>
           <a href="">About us</a>
         </div>
         <button className='bg-[tomato] px-4 py-3 rounded-2xl'>Join US</button>
      </header>
    </div>
  )
}

export default App
