import { useState } from 'react'

function App() {
  const [flash, setFlash] = useState(false);

  return (
    <>

    <div className='flex justify-center items-center h-screen gap-8'>
       <button onClick={()=>{setFlash(true)}} className='w-65 p-4 bg-blue-500 text-3xl text-center font-bold font-mono border-2 rounded-4xl hover:border-amber-50 duration-500 ease-out hover:shadow-2xs'>punch me</button>
       <button onClick={()=>{setFlash(true)}} className='w-65 p-4 bg-blue-500 text-3xl text-center font-bold font-mono border-2 rounded-4xl hover:border-amber-50 duration-500 ease-out hover:shadow-2xs'> hit me</button>
    </div>

    
     {flash && (
      <div className='absolute top-0 left-0 w-screen h-screen bg-[#232323] flex justify-center items-center transition-opacity duration-500 ease-out ${visible ? "opacity-100" : "opacity-0"}'>
         <button onClick={()=>{setFlash(false)}}  className='absolute text-center p-4 border-2 text-orange-700 rounded-2xl top-[1rem] right-[1rem] hover:opacity-70 duration-500 ease-out'>❌</button>
      </div>
      
     )}

    </>
    
  )
}

export default App
