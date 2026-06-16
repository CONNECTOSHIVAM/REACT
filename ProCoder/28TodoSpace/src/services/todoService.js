import { collection, deleteDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";

const todoRef = collection(db, "todos");

export const createTodo = async(data) => {
    return createTodo(todoRef,{
       ...data,
       status: "todo",
       createdAt: serverTimestamp(),
       completedAt: null
    })
}

export const updateTodoById = async(data, id) => {
    return updateDoc(doc(db, "todos", id) ,data);
}

export const deleteTodoById = async(id) => {
    return deleteDoc(doc(db, "todos", id));
}

export const completedTodoById = async(id) => {
    return updateDoc(doc(db, "todos", id),{
        status: "completed",
        completedAt: serverTimestamp(),
    });
};