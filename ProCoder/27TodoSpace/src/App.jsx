import React, { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import useTodos from './hooks/useTodos';
import useDisclosure from './hooks/useDisclosure';
import { collection } from 'firebase/firestore';
import { db } from './config/firebase';
import Navbar from './components/Navbar';
import { FiSearch } from 'react-icons/fi';
import { GoPlusCircle } from 'react-icons/go';
import { RiTodoLine } from 'react-icons/ri';
import { LuListTodo } from 'react-icons/lu';



const App = () => {

  const {todos, loading} = useTodos();

  const [tab, setTab] = useState("todo");
  const [search, setSearch] = useState("");

  const {isOpen, onClose, onOpen} = useDisclosure();


  const status = useMemo(()=>{

    const total = todos.length;

    const completed = todos.filter((todo)=>{
      todo.status === "completed"
    }).length;

    const pending = total - completed;

    return {total, completed, pending};
  },[todos])

  const filteredTodos = useMemo(()=>{

    const searchTerm = search.trim().toLowerCase();

    return todos.filter((todo)=>{
      todo.status === tab && todo.title.toLowerCase().includes(searchTerm);
    });
  },[todos, tab, search])



  
  


  return (
    <div className='max-w-[720px] mx-auto px-4 pb-10 '>
      {/* <h1 className='bg-amber-100 h-21 text-5xl text-center'>radhe radhe</h1> */}
      <Navbar totalTodos={status.total}/>

      {/* stats card */}
      <section className='grid grid-cols-3 gap-3'>
        <div className='rounded-xl border border-amber-200 bg-white p-4 text-center shadow-sm'>
          <p className='text-xs text-gray-500'>Total</p>
          <h3 className='text-2xl font-bold text-amber-900'>{status.total}</h3>
        </div>
        <div className='rounded-xl border border-green-200 bg-white p-4 text-center shadow-sm'>
          <p className='text-xs text-gray-500'>Completed</p>
          <h3 className='font-bold text-2xl text-green-600'>{status.completed}</h3>
        </div>
        <div className='rounded-xl border border-orange-200 bg-white p-4 text-center shadow-sm'>
          <p className='text-xs text-gray-500'>Pending</p>
          <h3 className='font-bold text-2xl text-orange-500'>{status.pending}</h3>
        </div>
      </section>

     {/* search + add */}
     <section className='glass-card rounded-2xl p-4 space-y-4'>
       <div className='flex gap-3'>
          <div className='relative flex-1 flex items-center'>
            <FiSearch className='absolute left-4 text-3xl top-1/2 -translate-y-1/2 text-amber-500 '/>
            <input 
              type="text" 
              value={search}
              placeholder='Search your todos...'
              onChange={(e)=>setSearch(e.target.value)}
              className='w-full h-14 rounded-xl border border-amber-200 bg-white pl-12 pr-4 focus:ring-2 focus:ring-amber-400'
              
            />
          </div>

          <button onClick={onOpen} aria-label='Add Todo' className='rounded-xl bg-amber-100 p-2 hover:bg-amber-200 transition'>
            <GoPlusCircle className='text-5xl text-amber-700'/>
          </button>
       </div>

       {/* Tabs */}
       <div className='flex overflow-hidden rounded-xl border border-amber-200'>
        <button
         onClick={()=> setTab("todo")}
         className={`flex-1 h-12 flex items-center justify-center gap-2 transition ${ tab === "todo" ? "bg-amber-900 text-white":"bg-white text-amber-800 hover:bg-amber-50"}`}
        >
          <RiTodoLine/>
          Todos
        </button>
        <button
        onClick={()=>setTab("completed")}
        className={`flex-1 h-12 flex items-center justify-center gap-2 transition ${tab == "completed" ? "bg-amber-900 text-white":"bg-white text-amber-800 hover:bg-amber-50"}`}
        
        >
          <LuListTodo/>
          Completed
        </button>
       </div>

       {/* Result count */}
       <p className='text-sm text-gray-500'>
        Showing {filteredTodos.length}{" "}
        {filteredTodos.length === 1 ? "task" : "tasks"}
       </p>

     </section>




    </div>
  )
}

export default App
