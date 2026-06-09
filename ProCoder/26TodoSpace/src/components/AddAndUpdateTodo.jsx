import React from "react";
import Modal from "./Modal";
import { Field, Form, Formik } from "formik";
const AddAndUpdateTodo = ({showModal, onClose}) => {
  return (
  <Modal showModal={showModal} onClose={onClose}>
    <Formik>
      <Form className="flex flex-col ">
        <div className="flex flex-col gap-4 p-4">
          <label htmlFor="title" className="font-medium text-amber-700 text-2xl">Title</label>
          <Field name="title" placeholder="drop karo todo wala title..." className="h-12 font-medium outline-2 outline-amber-600 rounded-sm p-4 text-amber-600"/>
        </div>
        <div className="flex flex-col gap-4 p-4">
          <label htmlFor="description" className="font-medium text-amber-700">Description</label>
          <Field name="description" as="textarea" rows='3' placeholder="write karo todo description..." className=" outline-2 outline-amber-600 rounded-sm p-4  text-amber-600"/>
        </div>
        <button className="px-5 py-3 bg-amber-950 self-end mt-5 mr-5 mb-7 font-medium text-amber-50 rounded-2xl opacity-75 transition-opacity ease-in-out duration-700 hover:opacity-95 cursor-pointer">Add Todo</button>
      </Form>
    </Formik>
  </Modal>
  );
};

export default AddAndUpdateTodo;
