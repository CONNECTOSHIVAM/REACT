import React, { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(0)

  function counterI() {
    if (count >= 0) {
      count = count + 1;
      setCount(count)
    }
  }

  function counterD() {
    if (count > 0) {
      count = count - 1
      setCount(count)
    }
  }

  function reset() {
    setCount(0);
  }
  return (


    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-4 py-10 my-8 bg-gray-900 text-amber-100'>
        <div className='text-center bg-orange-500 shadow-amber-300 p-1 rounded-lg hover:bg-orange-800'>
          <h1 className='text-2xl '>Counter App</h1>
          <p className=' p-3  '>count: {count}</p>
        </div>
        <div className='flex justify-center gap-4 mt-4 '>
          <button className='text-center bg-gray-800 outline-sky-300   p-3 w-18 shadow-amber-600 active:outline-amber-700 text-2xl hover:bg-amber-600 rounded-4xl' onClick={counterI}>+</button>
          <button className='text-center bg-gray-800 outline-sky-300  p-3 w-18 shadow-amber-600 active:outline-amber-700 text-2xl hover:bg-amber-600 rounded-4xl' onClick={counterD}>-</button>
          <button className='text-center bg-gray-800 outline-sky-300  p-3 w-18 shadow-amber-600 active:outline-amber-700 text-2xl hover:bg-amber-600 rounded-4xl' onClick={reset} >⟳</button>
        </div>

      </div>
    </div>
  )
}

export default App
