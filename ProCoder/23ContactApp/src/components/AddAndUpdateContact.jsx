import React from "react";
import Modal from "./Modal";
import { Field, Formik, Form, ErrorMessage } from "formik";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
});

const AddAndUpdateContact = ({
  isOpen,
  onClose,
  isUpdate,
  contact,
}) => {
  const addContact = async (data) => {
    try {
      const contactRef = collection(db, "contact");

      await addDoc(contactRef, data);

      toast.success("Contact added successfully");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateContact = async (data, id) => {
    try {
      const contactRef = doc(db, "contact", id);

      await updateDoc(contactRef, data);

      toast.success("Contact updated successfully");
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Formik
        enableReinitialize
        validationSchema={contactSchemaValidation}
        initialValues={{
          name: contact?.name || "",
          email: contact?.email || "",
        }}
        onSubmit={async (values, { resetForm }) => {
          if (isUpdate) {
            await updateContact(values, contact.id);
          } else {
            await addContact(values);
          }

          resetForm();
        }}
      >
        <Form className="flex flex-col gap-3">
          <div className="flex flex-col gap-1 p-4">
            <label htmlFor="name">Name</label>

            <Field
              name="name"
              className="border h-10 text-orange-600 p-2 rounded"
            />

            <div className="text-red-500 text-xs">
              <ErrorMessage name="name" />
            </div>
          </div>

          <div className="flex flex-col gap-1 p-4">
            <label htmlFor="email">Email</label>

            <Field
              type="email"
              name="email"
              className="h-10 border text-orange-600 p-2 rounded"
            />

            <div className="text-red-500 text-xs">
              <ErrorMessage name="email" />
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-3 bg-orange-500 text-white rounded-full self-end mr-5 mb-5"
          >
            {isUpdate ? "Update Contact" : "Add Contact"}
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateContact;