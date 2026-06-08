import React from 'react'
import { createPortal } from 'react-dom'
import { IoMdClose } from 'react-icons/io'

const Modal = ({showModal, onClose, children}) => {
  return createPortal(
    <>
      {showModal && 
      <div className='inset-0 z-50 fixed flex justify-center items-center backdrop-blur-sm bg-black/20'>
        <div className='min-h-[250px] w-[430px] max-w-[90%] bg-[#EAE0CF] rounded-xl shadow-2xl shadow-amber-200 outline-1 outline-amber-700'>
          <div className='flex justify-end p-4'>
            <IoMdClose onClick={onClose} className='text-3xl text-amber-800 opacity-75 transition-opacity ease-in-out hover:opacity-95 cursor-pointer'/>
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
