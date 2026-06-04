import React from 'react'
import { createPortal } from 'react-dom'
import { IoMdClose } from "react-icons/io"

const Modal = ({isOpen, onClose, children}) => {
  return createPortal(
    <>
      {isOpen && (
        <div className='fixed inset-0 z-50 flex justify-center items-center backdrop-blur-sm bg-black/20'>
            <div className='min-h-[200px] w-[400px] max-w-[90%] bg-amber-50 rounded-lg shadow-lg'>
               <div className='flex justify-end p-3'>
                  <IoMdClose onClick={onClose} className='text-3xl text-amber-900 opacity-80 hover:opacity-100 cursor-pointer'/>
               </div>
               {children}
            </div>
        </div>
      )}
    </>,
    document.getElementById("modal-root")
  )
}

export default Modal
