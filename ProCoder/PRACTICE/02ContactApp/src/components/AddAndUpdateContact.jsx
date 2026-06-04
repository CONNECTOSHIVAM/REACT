import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";

const AddAndUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const addContact = async (contact) => {
    try {

        const contactRef = collection(db, "contacts");
        await addDoc(contactRef, contact);
        toast.success("Contact added successfully");
        onClose()
    } catch (error) {
        console.log(error);
        
    }
  };

  const updateContact = async (contact, id) => {

    try {
        const contactRef = doc(db, "contacts", id);
        await updateDoc(contactRef, contact);
        toast.success("Contact updated successfully");
        onClose();
        
    } catch (error) {
        console.log(error);
        
    }
  }


  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={
            isUpdate ? {
              name: contact.name,
              email: contact.email
            }:
            {
            name: "",
            email: "",
            }
        }
          onSubmit={async(values) => {
            if(isUpdate)
            {
                await updateContact(values, contact.id);
            }else{
                await addContact(values);
            }
          }}
        >
          <Form className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="name">Name</label>
              <Field
                name="name"
                className="border border-amber-700 h-10 focus:outline-amber-900 rounded-sm p-3 text-amber-600"
              />
            </div>
            <div className="flex flex-col gap-2 p-4">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                name="email"
                className="border border-amber-700 h-10 focus:outline-amber-900 rounded-sm p-3 text-amber-600"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-800 px-5 py-3 text-amber-50 rounded-2xl self-end mr-5 mb-5 opacity-80 hover:opacity-90 cursor-pointer font-medium"
            >
              {isUpdate ? "Update Contact" : "Add Contact"}
            </button>
          </Form>
        </Formik>
      </Modal>
    </div>
  );
};

export default AddAndUpdateContact;
