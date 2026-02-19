import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] =useState(15)

  const addValue = () => {
       
      setCounter(counter+1)
  }

  const decreaseValue = () =>{
     if(counter>0)
     {
       setCounter(counter-1);
     }
     
  }

  return (
   <>
     <h1>Chai or Code</h1>
     <h2>Counter value: {counter}</h2>

     <button onClick={addValue}>Add value</button>
     <button onClick={decreaseValue}>Decrease Value</button>
   </>
  )
}

export default App
