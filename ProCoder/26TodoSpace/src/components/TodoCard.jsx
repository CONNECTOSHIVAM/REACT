import React from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import AddAndUpdateTodo from "./AddAndUpdateTodo";
import useDisclouse from "../hooks/useDisclouse";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

const TodoCard = ({ todo }) => {
  const [showModal, onClose, onOpen] = useDisclouse();

  const deleteTodo = async (id) => {
    try {
      await deleteDoc(doc(db, "todos", id));
      toast("todo deleted sucessfully", {
        style: {
          background: "#9B0F06",
          color: "#F1E2D1",
        },
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className=" p-5 flex justify-between items-center mt-5 mb-7 rounded-xl opacity-80 outline-1 outline-amber-400">
        <div className="w-[60%]">
          <h1 className="text-2xl font-semibold mb-2 text-amber-900">
            {todo.title}
          </h1>
          <p className="text-sm mb-5 text-amber-700">{todo.description}</p>
          <p className="text-sm opacity-45 text-gray-900 shadow-2xl shadow-black">
            📅 Created on{" "}
            {todo.createdAt?.toDate().toLocaleString("en-US", {
              dateStyle: "medium",
              timeStyle: "short",
            })}
          </p>
        </div>
        <div className="flex flex-col gap-3 text-4xl">
          <MdOutlineTipsAndUpdates
            onClick={onOpen}
            className="text-amber-400 opacity-70 transition-opacity ease-in-out duration-500 text-[46px]  hover:opacity-100 cursor-pointer active:text-amber-800"
          />
          <IoShieldCheckmarkOutline className="text-amber-400 opacity-70 transition-opacity ease-in-out duration-500 hover:opacity-100 cursor-pointer active:text-green-900" />
          <RiDeleteBin4Fill
            onClick={()=>(deleteTodo(todo.id))}
            className="text-amber-800 opacity-70 transition-opacity ease-in-out duration-500 hover:opacity-100 cursor-pointer active:text-red-900"
          />
        </div>
      </div>
      <AddAndUpdateTodo
        showModal={showModal}
        onClose={onClose}
        isUpdate
        todo={todo}
      />
    </>
  );
};

export default TodoCard;
