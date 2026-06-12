import React, { useMemo, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import useTodos from './hooks/useTodos';
import useDisclosure from './hooks/useDisclosure';
import { collection } from 'firebase/firestore';
import { db } from './config/firebase';
import Navbar from './components/Navbar';



const App = () => {

  const {todos, loading} = useTodos();

  const [tab, setTab] = useState("todo");
  const [search, setSearch] = useState("");

  const {isOpen, onClose, OnOpen} = useDisclosure();



  
  


  return (
    <div>
      {/* <h1 className='bg-amber-100 h-21 text-5xl text-center'>radhe radhe</h1> */}
      <Navbar/>
    </div>
  )
}

export default App
