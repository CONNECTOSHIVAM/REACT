import React from 'react'
import { RiMapPinUserFill } from "react-icons/ri"
import { MdOutlineTipsAndUpdates } from "react-icons/md"
import { RiDeleteBin4Fill } from 'react-icons/ri'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'
import AddAndUpdateContact from './AddAndUpdateContact'
import useDisclouse from '../hooks/useDisclouse'
import { useState } from "react"

const ContactCard = ({contact}) => {

    const [isOpen, onClose, onOpen] = useDisclouse();

    const deleteContact = async(id) => {

        try {
            await deleteDoc(doc(db,"contacts",id));
            toast("Contact deleted successfully.",{
                style: {
                    background: "#9B0F06",
                    color: "#F1E2D1"
                    
                }
            })

        } catch (error) {
            console.log(error);
            
        }
    }


  return (
    <>
      <div className='bg-amber-50 flex justify-between items-center rounded-2xl shadow-xl p-4 transition-all duration-500 ease-in '>
               <div className='flex gap-2'>
                 <RiMapPinUserFill className='text-5xl text-amber-300 '/>
                 <div>
                 <h2 className='font-medium '>{contact.name}</h2>
                 <p className='text-sm'>{contact.email}</p>
                 </div>
               </div>
               <div className='flex text-4xl gap-5'>
                <MdOutlineTipsAndUpdates onClick={onOpen}  className="text-amber-200 cursor-pointer opacity-80 hover:opacity-100"/>
                <RiDeleteBin4Fill onClick={()=>deleteContact(contact.id)} className="text-amber-900 cursor-pointer opacity-80 hover:opacity-100" />
               </div>
            </div>
            <AddAndUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
    </>
  )
}

export default ContactCard
