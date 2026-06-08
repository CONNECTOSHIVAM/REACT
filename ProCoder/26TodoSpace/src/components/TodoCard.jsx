import React from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";


const TodoCard = ({todo}) => {
  console.log(todo)
  return (
  <div className="bg-amber-50 p-5 flex justify-between items-center mt-5 rounded-xl opacity-80 outline-1 outline-amber-400">
    <div className="w-[60%]">
      <h1 className="text-2xl font-semibold mb-2 text-amber-400">{todo.title}</h1>
      <p className="text-sm mb-5 text-amber-700">{todo.description}</p>
      <p className="text-sm opacity-45 text-gray-900 shadow-2xl shadow-black">📅 Created on{" "} {todo.createdAt?.toDate().toLocaleString("en-US",{
         dateStyle: "medium",
         timeStyle: "short"
      })}</p>
    </div>
    <div className="flex flex-col gap-3 text-4xl">
      <MdOutlineTipsAndUpdates className="text-amber-400 opacity-70 transition-opacity ease-in-out duration-500 text-[46px] hover:opacity-100 cursor-pointer active:text-amber-800"/>
      <IoShieldCheckmarkOutline className="text-amber-400 opacity-70 transition-opacity ease-in-out duration-500 hover:opacity-100 cursor-pointer active:text-green-900"/>
      <RiDeleteBin4Fill className="text-amber-800 opacity-70 transition-opacity ease-in-out duration-500 hover:opacity-100 cursor-pointer active:text-red-900"/>
    </div>
  </div>);
};

export default TodoCard;
