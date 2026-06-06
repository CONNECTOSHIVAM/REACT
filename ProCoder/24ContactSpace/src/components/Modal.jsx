import { log } from 'firebase/firestore/pipelines'
import React from 'react'
import { createPortal } from 'react-dom';
import { IoMdClose } from 'react-icons/io';

const Modal = ({isOpen, onClose, children}) => {

    if(!isOpen) return null;
    
  return createPortal(
    <>
      {isOpen &&
       <div className='inset-0 fixed z-50 flex justify-center items-center backdrop-blur-2xl '>
         <div className='min-h-[210px] w-[400px] max-w-[90%] bg-amber-50 rounded-lg shadow-2xl shadow-amber-200 outline-2 outline-amber-400'>
           <div className='flex justify-end p-4'>
             <IoMdClose onClick={onClose} className='text-3xl text-amber-900 opacity-80 transition-opacity ease-in-out duration-500 cursor-pointer hover:opacity-95'/>
           </div>
           {children}
         </div>
      </div>
      }
    </>,
    document.getElementById("modal-root")
  )
}

export default Modal
