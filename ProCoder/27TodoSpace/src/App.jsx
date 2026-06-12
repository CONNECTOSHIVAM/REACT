import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import useTodos from './hooks/useTodos';


const App = () => {

  const [todos, loading] = useTodos();

  const [tab, setTab] = useState("todo");
  const [search, setSearch] = useState("");


  return (
    <div>
      <h1 className='bg-amber-100 h-21 text-5xl text-center'>radhe radhe</h1>
    </div>
  )
}

export default App
