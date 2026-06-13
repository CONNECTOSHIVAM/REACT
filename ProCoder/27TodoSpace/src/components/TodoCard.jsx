import React, { useState } from "react";
import {  IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdOutlineLink, MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiDeleteBin4Fill } from "react-icons/ri";
import useDisclosure from "../hooks/useDisclosure";
import { completeTodoById, deleteTodoById } from "../services/todoService";
import { toast } from "react-toastify";
import AddAndUpdateTodo from "./AddAndUpdateTodo";

const TodoCard = ({todo}) => {

  const {isOpen, onClose, onOpen} = useDisclosure();
  const {actionLoading, setActionLoading} = useState(false);

  const handleDelete = async () => {

    const confirmed = window.confirm(`Delete "${todo.title}" ?`);

    if(!confirmed) return;

    try {
      setActionLoading(true);
      await deleteTodoById(todo.id);
      toast.success("Todo deleted successfully");
      
    } catch (error) {

      console.error(error);
      toast.error("Failed to delete todo. please try again.")
    }finally{
      setActionLoading(false);
    }
  };

  const handleComplete = async () => {

    if(todo.status === "completed") return;

    try {

      setActionLoading(true)
      await completeTodoById(todo.id);
      toast.success("Todo marked as completed🎉")
      
    } catch (error) {
      console.error(error);
      toast.error("Failed to complete todo.")
    }finally{
      setActionLoading(false)
    }
  };

  return (
  <>
   <div className="mt-5 rounded-xl border border-amber-200 bg-white p-5 shadow-sm hover:shadow-md transition-all duration-300">
     <div className="flex flex-col md:justify-between md:flex-row gap-5">
      {/* content */}
      <div className="flex-1">
         <div className="flex items-center gap-2">
           <h2 className="text-xl font-bold text-amber-900 break-words">{todo.title}</h2>
         

         { todo.status === "completed" && (
              <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">Completed</span>
         )}
         </div>

         {todo.description && (
          <p className="mt-3 text-amber-700 break-words">{todo.description}</p>
         )}

         <div className="mt-4 space-y-1 text-sm text-gray-500">
          {todo.status === "completed" ? (
             <p>✅ Completed: {todo.completedAt?.toDate?.().toLocaleString()}</p>
          ) : (<p>📅 Created: {todo.createdAt?.toDate?.().toLocaleString()}</p>)}
         </div>
      </div>

      {/* Actions */}
      <div className="flex md:flex-col justify-end gap-4 text-3xl" >
        {/* Update */}
         <button
          title="Update Todo"
          className="text-amber-500 hover:text-amber-700 transition disabled:opacity-50"
         >
          <MdOutlineTipsAndUpdates/>
         </button>
         {/* Complete */}
         <button title="Mark Completed" className={`transition ${ todo.status === "completed" ? "text-green-600 cursor-not-allowed opacity-70" : "text-amber-500 hover:text-green-600"}`}>
          <IoShieldCheckmarkOutline/>
         </button>
         {/* Delete */}
         <button title="Delete Todo" className="text-amber-800 hover:text-red-600 transition disabled:opacity-50">
          <RiDeleteBin4Fill/>
         </button>
      </div>
     </div>
   </div>

   <AddAndUpdateTodo showModal={isOpen} onClose={onClose} isUpdate todo={todo}/>
  </>);
};

export default TodoCard;
