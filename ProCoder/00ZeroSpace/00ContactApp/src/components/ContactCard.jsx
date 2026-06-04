import React from 'react'
import { RiMapPinUserFill } from "react-icons/ri"
import { MdOutlineTipsAndUpdates } from "react-icons/md"
import { RiDeleteBin4Fill } from 'react-icons/ri'

const ContactCard = ({contact}) => {
  return (
    <>
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
    </>
  )
}

export default ContactCard
