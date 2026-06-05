import React from 'react'
import Modal from './Modal'
import { Field, Form, Formik } from 'formik'
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore'
import { db } from '../config/firebase'
import { toast } from 'react-toastify'

const AddAndUpdateContact = ({isOpen, onClose, contact, isUpdate}) => {

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
            onClose()
            
        } catch (error) {
            console.log(error)
        }
    }

    const updateContact = async(contact, id) => {

        try {
            const contactRef = doc(db, "contacts", id);
            await updateDoc(contactRef, contact);
            toast("Contact updated successfully",{
                style: {
                    background: "#facc15",
                    color: "#000"
                }
            });
            onClose();
            
        } catch (error) {
            
        }
    }


  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} >
        <Formik
         initialValues={
            isUpdate?
            {
              name: contact.name,
              email: contact.email,
            }:
            {
            name: "",
            email: ""
           }
        }
         onSubmit={ async(values)=>{

            if(isUpdate)
            {
                await updateContact(values, contact.id)
            }else{
                await addContact(values)
            }
         }

         }
        >
            <Form className='flex flex-col'>
                <div className='flex flex-col gap-2 p-4'>
                    <label htmlFor="name">Name</label>
                    <Field name="name" className="border border-amber-700 h-10 rounded-sm p-3 text-amber-600" />
                </div>
                <div className='flex flex-col gap-2 p-4'>
                    <label htmlFor="email">Email</label>
                    <Field type="email" name="email" className="border border-amber-700 h-10 rounded-sm p-3 text-amber-600" />
                </div>
                <button className='self-end px-3 bg-amber-800 px-5 py-3 font-medium text-amber-50 opacity-80 transition-opacity duration-500 ease-in-out hover:opacity-95 cursor-pointer rounded-xl mr-6 mb-6'>{isUpdate ? "Update " : "Add "} Contact</button>
            </Form>
        </Formik>
      </Modal>
    </>
  )
}

export default AddAndUpdateContact
