import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import AddUpdateTodo from "./components/AddUpdateTodo";
import TodoCard from "./components/TodoCard";

import {
  collection,
  onSnapshot,
} from "firebase/firestore";

import { db } from "./config/firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [tab, setTab] = useState("todo");

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "todos"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setTodos(data);
      }
    );

    return unsubscribe;
  }, []);

  const filteredTodos = todos.filter(
    (todo) =>
      todo.status === tab &&
      todo.title
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="max-w-3xl mx-auto p-4">

        <div className="flex gap-2 mb-4">
          <input
            placeholder="Search Todo"
            className="border p-2 flex-1"
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <button
            onClick={() => {
              setSelectedTodo(null);
              setShowModal(true);
            }}
            className="bg-blue-600 text-white px-4"
          >
            Add
          </button>
        </div>

        <div className="flex gap-3 mb-5">
          <button
            onClick={() => setTab("todo")}
            className={`px-4 py-2 rounded ${
              tab === "todo"
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Todo
          </button>

          <button
            onClick={() => setTab("completed")}
            className={`px-4 py-2 rounded ${
              tab === "completed"
                ? "bg-green-600 text-white"
                : "bg-gray-200"
            }`}
          >
            Completed
          </button>
        </div>

        {filteredTodos.map((todo) => (
          <TodoCard
            key={todo.id}
            todo={todo}
            onEdit={(todo) => {
              setSelectedTodo(todo);
              setShowModal(true);
            }}
          />
        ))}
      </div>

      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
        >
          <AddUpdateTodo
            todo={selectedTodo}
            onClose={() =>
              setShowModal(false)
            }
          />
        </Modal>
      )}
    </>
  );
}

export default App;