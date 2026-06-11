import React from 'react'
import { RiTodoFill } from "react-icons/ri";



const NotFoundTodo = () => {
  return (
    <div className='flex flex-col items-center justify-center m-auto h-[70vh]'>
      <RiTodoFill className='text-amber-900 text-3xl'/>
      <h1 className='text-2xl font-medium text-amber-700'>todo not found</h1>
    </div>
  )
}

export default NotFoundTodo
