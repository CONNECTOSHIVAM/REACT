import React from "react";
import { RiTodoFill } from "react-icons/ri";

const NotFoundTodo = () => {
  return( 
  <div className="flex flex-col justify-center items-center m-auto h-[50vh]">
      <RiTodoFill className="text-3xl text-amber-900"/>
      <h1 className="text-2xl font-medium text-amber-600" >todo not found!</h1>
  </div>);
};

export default NotFoundTodo;
