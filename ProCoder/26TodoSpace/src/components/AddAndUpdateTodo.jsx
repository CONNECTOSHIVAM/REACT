import React from "react";
import Modal from "./Modal";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  addDoc,
  collection,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { toast } from "react-toastify";
import * as Yup from "yup";

const contactSchemaValidation = Yup.object({
  title: Yup.string().required("Title is required."),
})

const AddAndUpdateTodo = ({ showModal, onClose, isUpdate, todo }) => {
  const addTodo = async (todo) => {
    try {
      const todosRef = collection(db, "todos");
      await addDoc(todosRef, {
        title: todo.title,
        description: todo.description,
        status: "todo",
        createdAt: serverTimestamp(),
        completedAt: null,
      });
      toast("todo added sucessfully", {
        style: {
          background: "#0D530E",
          color: "#cecdcd",
        },
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  const updateTodo = async (todo, id) => {
    try {
      const todosRef = doc(db, "todos", id);
      await updateDoc(todosRef, {
        title: todo.title,
        description: todo.description,
      });
      toast("todo updated sucessfully", {
        style: {
          background: "#d7b108",
          color: "#121212",
        },
      });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal showModal={showModal} onClose={onClose}>
      <Formik
        enableReinitialize
        validationSchema={contactSchemaValidation}
        initialValues={{
          title: todo?.title || "",
          description: todo?.description || "",
        }}
        onSubmit={async (values) => {
          if (isUpdate) {
            await updateTodo(values, todo.id);
          } else {
            await addTodo(values);
          }
        }}
      >
        <Form className="flex flex-col ">
          <div className="flex flex-col gap-4 p-4">
            <label
              htmlFor="title"
              className="font-medium text-amber-700 text-2xl"
            >
              Title
            </label>
            <Field
              name="title"
              placeholder="drop karo todo wala title..."
              className="h-12 font-medium outline-2 outline-amber-600 rounded-sm p-4 text-amber-600"
            />
            <div className="text-red-600 text-sm">
              <ErrorMessage name="title"/>
            </div>
          </div>
          <div className="flex flex-col gap-4 p-4">
            <label htmlFor="description" className="font-medium text-amber-700">
              Description
            </label>
            <Field
              name="description"
              as="textarea"
              rows="3"
              placeholder="write karo todo description..."
              className=" outline-2 outline-amber-600 rounded-sm p-4  text-amber-600"
            />
          </div>
          <button className="px-5 py-3 bg-amber-950 self-end mt-5 mr-5 mb-7 font-medium text-amber-50 rounded-2xl opacity-75 transition-opacity ease-in-out duration-700 hover:opacity-95 cursor-pointer">
            {isUpdate ? "Update " : "Add "} Todo
          </button>
        </Form>
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateTodo;
