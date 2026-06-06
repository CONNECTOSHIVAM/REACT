import React from 'react'
import Modal from './Modal'
import { Field, Form, Formik } from 'formik'
import { db } from '../config/firebase'
import { updateDoc, addDoc, collection, doc } from 'firebase/firestore'
import { toast } from 'react-toastify'
import * as Yup from "yup"


const contactSchemaValidation = Yup.object({
    name: Yup.string().required("name is required"),
    email: Yup.string()
             .email("email is invalid ")
             .required("email is required"),
})

const AddAndUpdateContact = ({isOpen, onClose, isUpdate, contact}) => {

    const addContact = async (contact) => {

        try {

            const contactsRef = collection(db, "contacts");
            await addDoc(contactsRef, contact);
            toast("Contact added sucessfully",{
                style: {
                    background: "#0D530E",
                    color: "#cecdcd"
                }
            })
            onClose();
            
        } catch (error) {
            console.log(error)
        }
    }

    const updateContact = async (contact, id) => {

        try {
            const contactsRef = doc(db, "contacts", id);
            await updateDoc(contactsRef, contact);
            toast("Contact updated sucessfully",{
                style:{
                    background: "#d7b108",
                    color: "#121212"
                }
            })
            onClose();
            
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
        enableReinitialize
        validationSchema={contactSchemaValidation}
        initialValues={
        {
           name:  contact?.name || "",
           email: contact?.email || "",
        }}
        onSubmit={async(values)=>{

            if(isUpdate)
            {
                await updateContact(values, contact.id)
            }else{
                await addContact(values)
            }

        }}
        
        >
            <Form className='flex flex-col'>
                <div className='flex flex-col gap-2 p-4'>
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="border-none h-10 outline-2 outline-amber-500 rounded-sm p-3 text-amber-600"/>
                </div>
                <div className='flex flex-col gap-2 p-4'>
                    <label htmlFor="email">Email</label>
                    <Field name="email" className="border-none h-10 outline-2 outline-amber-500 rounded-sm p-3 text-amber-600"/>
                </div>
                <button className='px-5 py-3 bg-amber-800  rounded-xl font-medium self-end mr-5 mb-6 opacity-85 mt-4 transition-opacity ease-in-out duration-500 hover:opacity-95 cursor-pointer text-amber-50'>{isUpdate ? "Update " : "Add "} Contact</button>
            </Form>
        </Formik>
      
    </Modal>
  )
}

export default AddAndUpdateContact
