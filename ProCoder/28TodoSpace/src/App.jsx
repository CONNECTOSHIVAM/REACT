import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import { db } from './config/firebase'
import Navbar from './compenents/Navbar';
import useTodos from './hooks/useTodos';
import useDisclosure from './hooks/useDisclosure';

const App = () => {

  const {todos, loading } = useTodos();
  const {isOpen, onClose, onOpen} = useDisclosure();
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("todo");


  const stats = useMemo(()=>{

    const total = todos.length;

    const completed = todos.filter((todo) =>
    ( todo.stats === "completed")).length;

    const pending = total - completed;

    return {total, completed, pending}
  },[todos]);


  
  return (
    <div className='max-w-[710px] mx-auto px-4'>
      <Navbar totalTodos={stats.total}/>

      {/* stats card */}
      <section className='grid grid-cols-3 gap-3'>
        <div className='border border-amber-200 text-center bg-white p-4 shadow-sm rounded-xl'>
          <p className='text-xs text-gray-500'>Total</p>
          <h3 className='text-2xl font-bold text-amber-800'>{stats.total}</h3>
        </div>
        <div className='border border-green-200 rounded-xl bg-white text-center p-4 shadow-sm'>
          <p className='text-xs text-gray-500'>Completed</p>
          <h3 className='text-2xl font-bold text-green-600'>{stats.completed}</h3>
        </div>
        <div className='border border-orange-300 rounded-xl text-center p-4 bg-white shadow-sm '>
          <p className='text-xs text-gray-500'>Pending</p>
          <h3 className='text-2xl font-bold text-orange-500'>{stats.pending}</h3>
        </div>
      </section>
    </div>
  )
}

export default App
