import React, { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import useTodos from './hooks/useTodos';
import useDisclosure from './hooks/useDisclosure';
import { collection } from 'firebase/firestore';
import { db } from './config/firebase';



const App = () => {

  const {todos, loading} = useTodos();

  const [tab, setTab] = useState("todo");
  const [search, setSearch] = useState("");

  const {isOpen, onClose, OnOpen} = useDisclosure();



  const filteredTodos = useMemo(()=>{

    const searchTerm = search.trim().toLowerCase();

    return todos.filter(
      (todo) => 
        todo.status === tab &&   tab.title.toLowerCase().includes(searchTerm)
    );
  },[todos, tab, search])
  


  return (
    <div>
      <h1 className='bg-amber-100 h-21 text-5xl text-center'>radhe radhe</h1>
    </div>
  )
}

export default App
