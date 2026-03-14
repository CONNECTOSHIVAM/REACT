import { useState } from 'react'

function App() {
  const [flash, setFlash] = useState(false)

  return (
    <div className='flex justify-center items-center h-screen gap-8'>
       <button className='w-65 p-4 bg-blue-500 text-3xl text-center font-bold font-mono border-2 rounded-4xl hover:border-amber-50 duration-500 ease-out hover:shadow-2xs'>punch me</button>
       <button className='w-65 p-4 bg-blue-500 text-3xl text-center font-bold font-mono border-2 rounded-4xl hover:border-amber-50 duration-500 ease-out hover:shadow-2xs'> hit me</button>

    </div>
    
  )
}

export default App
