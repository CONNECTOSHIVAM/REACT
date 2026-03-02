import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Password Generator
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#$%^&*()_+<>?";

    for (let i = 0; i < length; i++) {   // fixed loop
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  // Copy to clipboard
  const copyPassword = useCallback(() => {
    navigator.clipboard.writeText(password);
    alert("Password Copied!");
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-950'>
        <h1 className='text-3xl text-orange-600 text-center m-5'>
          Password Generator
        </h1>

        <div className='flex shadow rounded-lg overflow-hidden bg-amber-50 mb-5'>
          <input
            type='text'
            value={password}
            className='outline-none w-full py-2 px-3 text-black'
            placeholder='password'
            readOnly
          />
          <button
            onClick={copyPassword}
            className='bg-orange-600 outline-none px-3 py-1 shrink-0 text-amber-50'
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2 flex-wrap'>
          {/* Length */}
          <div className='flex items-center gap-x-1 m-2'>
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer accent-orange-600'
              onChange={(e) => setLength(Number(e.target.value))} // fixed
            />
            <label>Length: {length}</label>
          </div>

          {/* Numbers */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              className='accent-orange-600'
              checked={numberAllowed}
              id="numberInput"
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          {/* Characters */}
          <div className="flex items-center gap-x-1">
            <input
              type='checkbox'
              checked={charAllowed}
              className='accent-orange-600'
              id="charInput"
              onChange={() => setCharAllowed((prev) => !prev)}  // fixed
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;