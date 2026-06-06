import React from 'react'

const NotFoundContact = () => {
  return (
    <div className='flex flex-col m-auto gap-2 h-[80vh] justify-center items-center'>
        <img src="/contact.png" alt="" />
        <h3 className='text-2xl font-semibold  text-amber-800'>Contact not found</h3>
    </div>
  )
}

export default NotFoundContact
