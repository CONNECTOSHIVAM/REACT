import {
  deleteDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

const TodoCard = ({ todo, onEdit }) => {
  const deleteTodo = async () => {
    await deleteDoc(doc(db, "todos", todo.id));
  };

  const completeTodo = async () => {
    await updateDoc(doc(db, "todos", todo.id), {
      status: "completed",
      completedAt: serverTimestamp(),
    });
  };

  return (
    <div className="border p-4 rounded mb-3 shadow">
      <h2 className="font-bold">{todo.title}</h2>

      <p>{todo.description}</p>

      <div className="flex gap-2 mt-3">
        {todo.status === "todo" && (
          <>
            <button
              onClick={() => onEdit(todo)}
              className="bg-blue-500 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={completeTodo}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              Complete
            </button>
          </>
        )}

        <button
          onClick={deleteTodo}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>

      {todo.completedAt && (
        <p className="text-sm text-green-700 mt-2">
          Completed
        </p>
      )}
    </div>
  );
};

export default TodoCard;