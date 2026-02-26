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
      <h1 className='bg-orange-500 p-5 m-5 text-black text-5xl rounded-2xl'>Namsete</h1>
     </>
  )
}

export default App
