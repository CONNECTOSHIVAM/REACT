import { useCallback, useState } from 'react'

import './App.css'

function App() {
  
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowd, setCharcterAllowed] = useState(false);
  const [password, setPassword] = useState("");


  const passwordGenerator = useCallback(()=>{

     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

     if(numberAllowed) str += "0123456789"
     if(characterAllowd) str += "@#$%&*_-`~"


     for(let i=1;i<=length;i++)
     {
       let char = Math.floor(Math.random()*str.length+1);
       pass += str[char]  // ya use the pass = str.charAt(char)
     }

     setPassword(pass)
  },[length,numberAllowed,characterAllowd,setPassword])

  return (
     <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-600 bg-gray-900 p-5'>
        
          <h1 className='text-2xl text-center'>Password Generator</h1>
          <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-amber-50 m-3'>
            <input type="text" placeholder='password' value={password} readOnly className='outline-none w-full py-1 px-3'/>
            <button className='bg-amber-100 text-xl p-2 py-1.5 shrink-0 bg-amber-600 text-white outline-none'>copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
              <div className='flex items-center gap-x-1'>
                 <input type="range" min={6} max={100} value={length} className='outline-none cursor-pointer w-23 h-2 accent-amber-600' onChange={(e)=> {setLength(e.target.value)}} />
                 <label htmlFor=""> Length: {length}</label>
              </div>
              <div className="flex items-center gap-x-1">
                 <input 
                    type="checkbox"
                    defaultChecked = {numberAllowed} 
                    id='numberInput'
                    className='accent-amber-600'
                    onChange={()=>{
                      setNumberAllowed((prev)=> !prev);
                    }}
                    />
                    <label htmlFor="numberInput">Number</label>
              </div>
          </div>
      </div>
     </>
  )
}

export default App
