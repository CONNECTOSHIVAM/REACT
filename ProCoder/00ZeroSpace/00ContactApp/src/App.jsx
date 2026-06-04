import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import {collection, onSnapshot} from "firebase/firestore"
import { db } from './config/firebase'
// react icons
import { FiSearch } from "react-icons/fi"
import { GoPlusCircle } from "react-icons/go"
import { RiMapPinUserFill } from "react-icons/ri"
import { MdOutlineTipsAndUpdates } from "react-icons/md"
import { RiDeleteBin4Fill } from 'react-icons/ri'
import Modal from './components/Modal'

const App = () => {

  const [contacts, setContacts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  }

  const onClose = () => {
    setOpen(false);
  }

  useEffect(()=>{

    const getContacts = async() => {

      try {
        const contactsRef = collection(db, "contacts");
        
        onSnapshot(contactsRef, (snapshot)=>{
          const contactLists = snapshot.docs.map((doc)=>{
            return{
              id: doc.id,
              ...doc.data(),
            }
          });
          setContacts(contactLists);
          return contactLists
        })
      } catch (error) {
        console.log(error);
        
      }
    }

    getContacts();

  },[])


  return (
    <div className='max-w-[700px] mx-auto px-4'>
      <Navbar />
      <div className='flex justify-between gap-2'>
        <div className='relative flex flex-grow items-center'>
          <FiSearch className='absolute text-5xl ml-2 text-amber-300'/>
          <input type="text" placeholder='search anyone to connect...' className='h-17 bg-amber-50 flex-grow border-none rounded-md text-amber-800 text-[23px] outline-2 outline-amber-200 pl-15'  />
        </div>
        <GoPlusCircle onClick={onOpen} className='text-7xl text-amber-300 bg-amber-50 rounded-2xl opacity-80 cursor-pointer hover:opacity-100 transition-all duration-500 ease-in'/>
      </div>

      <div className='mt-4 flex flex-col gap-3'>
        {
          contacts.map((contact)=>(
            <div key={contact.id} className='bg-amber-50 flex justify-between items-center rounded-2xl shadow-xl p-4 transition-all duration-500 ease-in '>
               <div className='flex gap-2'>
                 <RiMapPinUserFill className='text-5xl text-amber-300 '/>
                 <div>
                 <h2 className='font-medium '>{contact.name}</h2>
                 <p className='text-sm'>{contact.email}</p>
                 </div>
               </div>
               <div className='flex text-4xl gap-5'>
                <MdOutlineTipsAndUpdates  className="text-amber-200 cursor-pointer opacity-80 hover:opacity-100"/>
                <RiDeleteBin4Fill className="text-amber-900 cursor-pointer opacity-80 hover:opacity-100" />
               </div>
            </div>
          ))
        }
      </div>

    <Modal isOpen={isOpen} onClose={onClose} ></Modal>
   

    </div>
  )
}

export default App
