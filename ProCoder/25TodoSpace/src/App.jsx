import { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { GoPlusCircle } from "react-icons/go";
import { LuListTodo } from "react-icons/lu";
import { RiTodoLine } from "react-icons/ri";
import { ToastContainer, toast } from 'react-toastify';

import Navbar from "./components/Navbar"
import TodoCard from "./components/TodoCard";
import NotFoundTodo from "./components/NotFoundTodo";
import AddAndUpdateTodo from "./components/AddUpdateTodo";

import useDisclosure from "./hooks/useDisclosure";
import useTodos from "./hooks/useTodos";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { todos, loading } = useTodos();

  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("todo");

  const { isOpen, open, close } = useDisclosure();

  const stats = useMemo(() => {
    const total = todos.length;

    const completed = todos.filter(
      (todo) => todo.status === "completed"
    ).length;

    const pending = total - completed;

    return {
      total,
      completed,
      pending,
    };
  }, [todos]);

  const filteredTodos = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return todos.filter(
      (todo) =>
        todo.status === tab &&
        todo.title
          .toLowerCase()
          .includes(searchTerm)
    );
  }, [todos, tab, search]);

  return (
    <main className="max-w-[720px] mx-auto px-4 pb-10">
      <Navbar totalTodos={stats.total} />

      {/* Stats Cards */}
      <section className="grid grid-cols-3 gap-3 mb-5">
        <div className="rounded-xl border border-amber-200 bg-white p-4 text-center shadow-sm">
          <p className="text-xs text-gray-500">
            Total
          </p>

          <h3 className="text-2xl font-bold text-amber-900">
            {stats.total}
          </h3>
        </div>

        <div className="rounded-xl border border-green-200 bg-white p-4 text-center shadow-sm">
          <p className="text-xs text-gray-500">
            Completed
          </p>

          <h3 className="text-2xl font-bold text-green-600">
            {stats.completed}
          </h3>
        </div>

        <div className="rounded-xl border border-orange-200 bg-white p-4 text-center shadow-sm">
          <p className="text-xs text-gray-500">
            Pending
          </p>

          <h3 className="text-2xl font-bold text-orange-500">
            {stats.pending}
          </h3>
        </div>
      </section>

      {/* Search + Add */}
      <section className="glass-card rounded-2xl p-4 space-y-4">
        <div className="flex gap-3">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-amber-500 text-xl" />

            <input
              type="text"
              value={search}
              placeholder="Search your todos..."
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="w-full h-14 rounded-xl border border-amber-200 bg-white pl-12 pr-4 focus:ring-2 focus:ring-amber-400"
            />
          </div>

          <button
            onClick={open}
            aria-label="Add Todo"
            className="rounded-xl bg-amber-100 p-2 hover:bg-amber-200 transition"
          >
            <GoPlusCircle className="text-5xl text-amber-700" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex overflow-hidden rounded-xl border border-amber-200">
          <button
            onClick={() => setTab("todo")}
            className={`flex-1 h-12 flex items-center justify-center gap-2 transition ${
              tab === "todo"
                ? "bg-amber-900 text-white"
                : "bg-white text-amber-800 hover:bg-amber-50"
            }`}
          >
            <RiTodoLine />
            Todos
          </button>

          <button
            onClick={() =>
              setTab("completed")
            }
            className={`flex-1 h-12 flex items-center justify-center gap-2 transition ${
              tab === "completed"
                ? "bg-amber-900 text-white"
                : "bg-white text-amber-800 hover:bg-amber-50"
            }`}
          >
            <LuListTodo />
            Completed
          </button>
        </div>

        {/* Result Count */}
        <p className="text-sm text-gray-500">
          Showing {filteredTodos.length}{" "}
          {filteredTodos.length === 1
            ? "task"
            : "tasks"}
        </p>
      </section>

      {/* Todo List */}
      <section className="mt-6">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-amber-300 border-t-amber-700"></div>
          </div>
        ) : filteredTodos.length === 0 ? (
          <NotFoundTodo />
        ) : (
          filteredTodos.map((todo) => (
            <TodoCard
              key={todo.id}
              todo={todo}
            />
          ))
        )}
      </section>

      {/* Add Todo Modal */}
      <AddAndUpdateTodo
        showModal={isOpen}
        onClose={close}
      />

      <ToastContainer
        position="bottom-center"
        autoClose={2500}
        theme="light"
      />
    </main>
  );
};

export default App;