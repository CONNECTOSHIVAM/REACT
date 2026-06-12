import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase';
import { onSnapshot, collection } from 'firebase/firestore';
import { toast } from 'react-toastify';

const useTodos = () => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const todosRef = collection(db, "todos");

        const unsubscribe = onSnapshot(todosRef, (snapshot)=>{

            const data = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data(),
            }));

            const sortedTodos = data.sort((a, b) => {
                const aTime = a.createdAt?.seconds || 0;
                const bTime = b.createdAt?.seconds || 0;

                return bTime - aTime;
            });

            setTodos(sortedTodos);
            setLoading(false);
            setError(null);
        },
        (err) => 
        {
            console.error(err);

            setError(err);
            setLoading(true);

            toast.error("Failed to load todos. Please refresh.");
        }
    );

    return () => unsubscribe();

    },[])
  return {todos, loading, error};
}

export default useTodos
