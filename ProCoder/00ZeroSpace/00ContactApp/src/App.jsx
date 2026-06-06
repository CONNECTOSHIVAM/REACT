import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {collection, doc, onSnapshot} from "firebase/firestore"
import { db } from './config/firebase'
import { ToastContainer, toast } from 'react-toastify';
// react icons
import { FiSearch } from "react-icons/fi"
import { GoPlusCircle } from "react-icons/go"

import Modal from './components/Modal'
import ContactCard from './components/ContactCard'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import useDisclouse from './hooks/useDisclouse';
import NotFoundContact from './components/NotFoundContact';

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);

  const [isOpen, onClose, onOpen] = useDisclouse()
  

  useEffect(()=>{

    const contactsRef = collection(db, "contacts");

    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data(),
      }));

      setContacts(contactLists);
      setAllContacts(contactLists);
    })

        return () => unsubscribe();
  },[])

  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();

    if(!value){
      setContacts(allContacts);
      return
    }

    const filteredContacts = allContacts.filter((contact) => contact.name.toLowerCase().includes(value));

    setContacts(filteredContacts);
  }


  return (
    <div className='max-w-[700px] mx-auto px-4'>
      <Navbar />
      <div className='flex justify-between gap-2'>
        <div className='relative flex flex-grow items-center'>
          <FiSearch className='absolute text-5xl ml-2 text-amber-300'/>
          <input onChange={filterContacts} type="text" placeholder='search anyone to connect...' className='h-17 bg-amber-50 flex-grow border-none rounded-md text-amber-800 text-[23px] outline-2 outline-amber-200 pl-15'  />
        </div>
        <GoPlusCircle onClick={onOpen} className='text-7xl text-amber-300 bg-amber-50 rounded-2xl opacity-80 cursor-pointer hover:opacity-100 transition-all duration-500 ease-in'/>
      </div>

      <div className='mt-4 flex flex-col gap-3'>
        {
          contacts.length === 0 ? (
          <NotFoundContact/> ) :
          ( contacts.map((contact)=>(
            <ContactCard key={contact.id} contact={contact}/>
          )))
        }
      </div>

    <AddAndUpdateContact isOpen={isOpen} onClose={onClose}/>

   
   <ToastContainer position='bottom-center'/>

    </div>
  )
}

export default App
