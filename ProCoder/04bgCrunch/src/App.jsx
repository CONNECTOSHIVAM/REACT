import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('pink')

  return (
     <div className='w-screen h-screen duration-200' style={{backgroundColor: color}}>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  '> 
         <div className='flex flex-wrap justify-center gap-3 shadow-2xl bg-amber-50 px-2 py-3 rounded-2xl'> 
            <button className='outline-none px-5 py-2 rounded-xl text-white shadow-2xl' style={{backgroundColor: "red"}}  onClick={()=>setColor('red')}> red </button>            
            <button className='outline-none px-5 py-2 rounded-xl text-white shadow-2xl' style={{backgroundColor: "orange"}}  onClick={()=>setColor('orange')}> orange </button>
            <button className='outline-none px-5 py-2 rounded-xl text-white shadow-2xl' style={{backgroundColor: "yellow"}}  onClick={()=>setColor('yellow')}> yellowgold </button>
            <button className='outline-none px-5 py-2 rounded-xl text-white shadow-2xl' style={{backgroundColor: "olive"}}  onClick={()=>setColor('olive')}> olive </button>
            <button className='outline-none px-5 py-2 rounded-xl text-white shadow-2xl' style={{backgroundColor: "teal"}}  onClick={()=>setColor('teal')}> teal </button>
            <button className='outline-none px-5 py-2 rounded-xl text-white shadow-2xl' style={{backgroundColor: "skyblue"}}  onClick={()=>setColor('skyblue')}> sky </button>
            <button className='outline-none px-5 py-2 rounded-xl text-white shadow-2xl' style={{backgroundColor: "purple"}}  onClick={()=>setColor('purple')}> purple </button>            
         </div>
       </div>
     </div>
  )
}

export default App
