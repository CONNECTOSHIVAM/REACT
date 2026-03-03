import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='w-full max-w-md mx-auto my-4 shadow-lg rounded-2xl p-7 my-6 bg-orange-500 text-amber-100 hover:bg-orange-600'>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Radha_Krishna_at_Iskcon_Vrindavan.jpg/960px-Radha_Krishna_at_Iskcon_Vrindavan.jpg" alt="radhe radhe" />
         <h1 className='text-3xl p-5 '>radhe radhe</h1>
      </div>
    </>
  )
}

export default App
