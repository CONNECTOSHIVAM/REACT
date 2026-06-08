import { useState } from "react";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

const AddUpdateTodo = ({ todo, onClose }) => {
  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(
    todo?.description || ""
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (todo) {
      await updateDoc(doc(db, "todos", todo.id), {
        title,
        description,
      });
    } else {
      await addDoc(collection(db, "todos"), {
        title,
        description,
        status: "todo",
        createdAt: serverTimestamp(),
        completedAt: null,
      });
    }

    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-3">
        {todo ? "Update Todo" : "Add Todo"}
      </h2>

      <input
        type="text"
        placeholder="Title"
        className="border p-2 w-full mb-3"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        className="border p-2 w-full mb-3"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save
      </button>
    </form>
  );
};

export default AddUpdateTodo;