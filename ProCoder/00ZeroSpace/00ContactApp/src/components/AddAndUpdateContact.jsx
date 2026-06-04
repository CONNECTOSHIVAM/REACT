import React from 'react'
import Modal from './Modal'
import { Field, Form, Formik } from 'formik'

const AddAndUpdateContact = ({isOpen, onClose}) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} >
        <Formik>
            <Form className='flex flex-col'>
                <div className='flex flex-col gap-2 p-4'>
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="border border-amber-700 h-10 rounded-sm p-3 text-amber-600" />
                </div>
                <div className='flex flex-col gap-2 p-4'>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" className="border border-amber-700 h-10 rounded-sm p-3 text-amber-600" />
                </div>
                <button className='self-end px-3 bg-amber-800 px-5 py-3 font-medium text-amber-50 opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-95 cursor-pointer rounded-xl mr-6 mb-6'>Add Contact</button>
            </Form>
        </Formik>
      </Modal>
    </>
  )
}

export default AddAndUpdateContact
