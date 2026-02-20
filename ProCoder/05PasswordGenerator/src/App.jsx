import { useCallback, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (characterAllowed) str += "!@#$%^&*()_-+{}[]~`"

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numberAllowed, characterAllowed, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-800 bg-gray-800'>
        <h1 className="text-white text-center my-2">Password Generator</h1>
        <div className="flex shadow rounded-lg  overflow-hidden mb-4">
          <input type="text"
                 value={password}
                 className='outline-none bg-amber-50 w-full py-1 px-3 m-2 rounded-b-sm'
                 placeholder='password'
                 readOnly
           />
           <button className='outline-none bg-sky-200 text-wheat  px-3 py-0.7 shrink-0 m-2 rounded-b-sm' >copy</button>
        </div>
         <div className="flex text-sm gap-x-2">
           <div className="flex items-center gap-x-1">
              <input type="range"
                     min = {6}
                     max = {100}
               />
           </div>
         </div>
      </div>
    </>
  )
}

export default App;
