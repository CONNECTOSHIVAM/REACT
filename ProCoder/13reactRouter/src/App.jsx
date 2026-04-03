import { useState } from 'react'
import Header from './components/Header/Header'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1>Welcome to my App</h1>
     <Header/>
    </>
  )
}

export default App
