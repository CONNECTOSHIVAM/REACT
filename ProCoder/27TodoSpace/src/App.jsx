import React, { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import useTodos from './hooks/useTodos';
import useDisclosure from './hooks/useDisclosure';
import { collection } from 'firebase/firestore';
import { db } from './config/firebase';
import Navbar from './components/Navbar';



const App = () => {

  const {todos, loading} = useTodos();

  const [tab, setTab] = useState("todo");
  const [search, setSearch] = useState("");

  const {isOpen, onClose, OnOpen} = useDisclosure();


  const status = useMemo(()=>{

    const total = todos.length;

    const completed = todos.filter((todo)=>{
      todo.status === "completed"
    }).length;

    const pending = total - completed;

    return {total, completed, pending};
  },[todos])



  
  


  return (
    <div className='max-w-[710px] mx-auto px-4 pb-10'>
      {/* <h1 className='bg-amber-100 h-21 text-5xl text-center'>radhe radhe</h1> */}
      <Navbar totalTodos={status.total}/>
    </div>
  )
}

export default App
