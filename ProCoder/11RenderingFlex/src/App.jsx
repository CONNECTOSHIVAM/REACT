import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex items-center justify-center h-screen'>
        <button className='w-55 p-4 bg-amber-400 text-2xl border-3 font-mono font-bold text-gray-900 border-[#d97706] rounded-3xl'>punch me</button>
    </div>
    </>
  )
}

export default App
