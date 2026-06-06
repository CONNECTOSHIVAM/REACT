import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { FiSearch } from 'react-icons/fi'
import { GoPlusCircle } from 'react-icons/go'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase'
import useDisclouse from './hooks/useDisclouse'
import Modal from './components/Modal'
import AddAndUpdateContact from './components/AddAndUpdateContact'
import ContactCard from './components/ContactCard'
import { ToastContainer, toast } from 'react-toastify';
import NotFoundContact from './components/NotFoundContact'

const App = () => {

  const [isOpen, onClose, onOpen] = useDisclouse();

  const [contacts, setContacts] = useState([]);
  const [allContacts, setAllContacts] = useState([]);

  useEffect(()=>{

    const contactsRef = collection(db, "contacts");

    const unsubscribe = onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc)=>({
        id: doc.id,
        ...doc.data()

      }));
      setContacts(contactLists);
      setAllContacts(contactLists);
    })

    return () => unsubscribe();
  },[])


  const filterContacts = (e) => {
    const value = e.target.value.toLowerCase();

    if(!value)
    {
      setContacts(allContacts);
      return
    }

    const filteredContacts = allContacts.filter((contacts)=>(contacts.name.toLowerCase().includes(value)));

    setContacts(filteredContacts);

  }



  return (
    <div className='max-w-[710px] mx-auto px-4'>
      {/* <h1 className='bg-red-500 text-orange-300 h-12 text-center text-3xl'>radhe radhe</h1> */}
      <Navbar/>
      <div className='flex justify-between gap-3'>
        <div className='relative flex flex-grow items-center'>
          <FiSearch className='absolute text-5xl text-amber-400 ml-2'/>
          <input onChange={filterContacts} type="text" placeholder='search anyone to connect...' className='h-17 bg-amber-50 flex-grow border-none  rounded-md pl-17 text-[25px] text-amber-800 outline-2 outline-amber-400 shadow-2xl shadow-amber-100' />
        </div>
        <GoPlusCircle onClick={onOpen} className='text-7xl text-amber-400 bg-amber-50 rounded-xl shadow-2xl shadow-amber-50 opacity-80 hover:opacity-100 transition-opacity ease-in-out duration-500 cursor-pointer'/>
      </div>

      <div className='flex flex-col gap-3 mt-9'>
        {
          contacts.length === 0 ? (<NotFoundContact/>):
          (contacts.map((contact)=> (
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
