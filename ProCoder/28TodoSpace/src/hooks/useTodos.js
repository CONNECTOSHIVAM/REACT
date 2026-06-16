import { collection, onSnapshot } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

const useTodos = () => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{

        const todoRef = collection(db, "todos");

        const unsubscribe = onSnapshot(todoRef, (snapshot) => {

            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))

            const sortedtodos = data.sort((a, b)=> {
                const aTime = a.createdAt?.seconds || 0;
                const bTime = b.createdAt?.seconds || 0;

                return bTime - aTime;
            })

            setTodos(sortedtodos);
            setLoading(false);
            setError(null)
        },
    (err)=>{

        console.error(err);
        setError(err);
        setLoading(false);

        toast.error("Failed to load tabs, Please refresh.");
    });

      return () => unsubscribe();
    }, [])

  return {todos, loading, error}
}

export default useTodos
