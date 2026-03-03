import React, { useState } from 'react'

const App = () => {

  let [count, setCount] = useState(0)

  function counterI(){
    if(count>=0)
    {
      count = count + 1;
      setCount(count)
    }
  }

  function counterD()
  {
    if(count>0)
    {
      count = count - 1
      setCount(count)
    }
  }

  function reset(){
    setCount(0);
  }
  return (

    
    <div>
       <h1>Counter App</h1>
       <p>current count: {count}</p>
       <button onClick={counterI}>+</button>
       <button onClick={counterD}>-</button>
       <button onClick={reset} >reset</button>
    </div>
  )
}

export default App
