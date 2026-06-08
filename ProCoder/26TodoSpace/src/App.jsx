import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { GoPlusCircle } from 'react-icons/go'
import { RiTodoFill, RiTodoLine } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { db } from './config/firebase';
import { collection, onSnapshot } from 'firebase/firestore'
import NotFoundTodo from './components/NotFoundTodo';
import TodoCard from './components/TodoCard';



const App = () => {

  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [tab, setTab] = useState("todo");

  useEffect(()=>{

    const unsubscribe = onSnapshot(collection(db, "todos"),(snapshot)=>{
      const data = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(data);
    })

    return unsubscribe;
  },[])



  return (
    <div className='max-w-[712px]  mx-auto px-4'>
      <Navbar/>
      <div className='outline-1 outline-amber-500 p-3 rounded-sm flex flex-col gap-3'>
        <div className='flex justify-between gap-4'>
          <div className='flex flex-grow relative items-center'>
            <FiSearch className='absolute text-5xl text-amber-400 ml-2'/>
            <input type="text" placeholder='look your todos...' className='h-16 p-3 flex-grow rounded-sm border-none outline-2 outline-amber-500 text-[21px] pl-16 text-amber-600 bg-amber-50 shadow-2xl shadow-amber-100' />
          </div>
          <GoPlusCircle className='text-7xl text-amber-400 bg-amber-100 rounded-2xl opacity-70 transition-opacity ease-in duration-500 hover:opacity-100 cursor-pointer'/>
        </div>
        <div className='flex justify-between shadow-2xl shadow-amber-200'>
            <div className='flex items-center justify-center gap-2 w-[50%] bg-amber-50 h-12 outline-2 outline-amber-300 cursor-pointer opacity-70 box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; transition-opacity ease-in-out duration-500 hover:opacity-95'>
              <div className=' font-medium text-amber-700 '>Todos </div>
              <RiTodoLine className='text-2xl/tight text-amber-700'/>
            </div>
            <div className= 'flex items-center justify-center w-[50%] gap-2 bg-amber-50 h-12 outline-2 outline-amber-300 cursor-pointer opacity-70 box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; transition-opacity ease-in-out duration-500 hover:opacity-95'>
               <div className='font-medium text-amber-700 '>Completed</div>
               <LuListTodo className='text-2xl/tight text-amber-700 '/>
            </div>
        </div>
      </div>

      <div>
        {
          todos.length === 0 ? (<NotFoundTodo/>) :
          (todos.map((todo)=> (
               <TodoCard key={todo.id} todo={todo}/>
          )))
        }
      </div>



    </div>
  )
}

export default App
