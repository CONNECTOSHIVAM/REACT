import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { FiSearch } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { RiTodoFill, RiTodoLine } from "react-icons/ri";
import { LuListTodo } from "react-icons/lu";
import { db } from "./config/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import NotFoundTodo from "./components/NotFoundTodo";
import TodoCard from "./components/TodoCard";
import Modal from "./components/Modal";
import AddAndUpdateTodo from "./components/AddAndUpdateTodo";
import { ToastContainer, toast } from "react-toastify";
import useDisclouse from "./hooks/useDisclouse";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, onClose, onOpen] = useDisclouse();
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [tab, setTab] = useState("todo");

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTodos(data);
    });

    return unsubscribe;
  }, []);

  const filteredTodos = todos.filter(
    (todo) =>
      todo.status === tab &&
      todo.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-[712px]  mx-auto px-4">
      <Navbar />
      <div className="outline-1 outline-amber-500 p-3 rounded-sm flex flex-col gap-3">
        <div className="flex justify-between gap-4">
          <div className="flex flex-grow relative items-center">
            <FiSearch className="absolute text-5xl text-amber-400 ml-2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="look your todos..."
              className="h-16 p-3 flex-grow rounded-sm border-none outline-2 outline-amber-500 text-[21px] pl-16 text-amber-600  shadow-2xl shadow-amber-100"
            />
          </div>
          <GoPlusCircle
            onClick={onOpen}
            className="text-7xl text-amber-400 bg-amber-100 rounded-2xl opacity-70 transition-opacity ease-in duration-500 hover:opacity-100 cursor-pointer"
          />
        </div>
        <div className="flex justify-between shadow-2xl shadow-amber-200">
          <div
            onClick={() => setTab("todo")}
            className={`flex items-center justify-center gap-2 w-[50%]  h-12 outline-2  cursor-pointer opacity-85 box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; transition-opacity ease-in-out duration-500 hover:opacity-100 ${tab === "todo" ? "bg-amber-900 outline-4 text-amber-50 outline-amber-400" : "outline-4 outline-amber-300 text-amber-50"}`}
          >
            <div
              className={`font-medium ${tab == "completed" ? "text-amber-800" : ""}`}
            >
              Todos{" "}
            </div>
            <RiTodoLine
              className={`text-2xl/tight  ${tab == "completed" ? "text-amber-800" : ""}`}
            />
          </div>
          <div
            onClick={() => setTab("completed")}
            className={`flex items-center justify-center w-[50%] gap-2 bg-amber-50 h-12 outline-2 outline-amber-300 cursor-pointer opacity-85 box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset; transition-opacity ease-in-out duration-500 hover:opacity-100 ${tab === "completed" ? "bg-amber-900 outline-4 text-amber-50 outline-amber-400" : "outline-4 outline-amber-300 text-amber-50"}`}
          >
            <div
              className={`font-medium ${tab == "todo" ? "text-amber-800" : ""}`}
            >
              Completed
            </div>
            <LuListTodo
              className={`text-2xl/tight  ${tab == "todo" ? "text-amber-800" : ""}`}
            />
          </div>
        </div>
      </div>

      <div>
        {filteredTodos.length === 0 ? (
  <NotFoundTodo />
) : (
  filteredTodos.map((todo) => (
    <TodoCard
      key={todo.id}
      todo={todo}
    />
  ))
)}
      </div>

      <AddAndUpdateTodo showModal={showModal} onClose={onClose} />

      <ToastContainer position="bottom-center" />
    </div>
  );
};

export default App;
