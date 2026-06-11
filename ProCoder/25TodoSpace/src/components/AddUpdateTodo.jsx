import { useState } from "react";
import Modal from "./Modal";

import { ErrorMessage, Field, Form, Formik } from "formik";

import { toast } from "react-toastify";

import { todoSchema } from "../schemas/todoSchema";

import { createTodo, updateTodoById } from "../services/todoService";

const AddAndUpdateTodo = ({ showModal, onClose, isUpdate = false, todo }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);

      if (isUpdate) {
        await updateTodoById(todo.id, values);

        toast.success("Todo updated successfully ✨");
      } else {
        await createTodo(values);

        toast.success("Todo created successfully 🎉");
      }

      resetForm();

      onClose();
    } catch (error) {
      console.error(error);

      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal showModal={showModal} onClose={onClose}>
      <Formik
        enableReinitialize
        initialValues={{
          title: todo?.title || "",
          description: todo?.description || "",
        }}
        validationSchema={todoSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form className="pb-6">
            {/* Title */}
            <div className="px-6">
              <label
                htmlFor="title"
                className="block text-lg font-semibold text-amber-800 mb-2"
              >
                Title
              </label>

              <Field
                name="title"
                placeholder="Enter todo title..."
                className="w-full rounded-xl border border-amber-300 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
              />

              <div className="mt-1 text-sm text-red-500">
                <ErrorMessage name="title" />
              </div>
            </div>

            {/* Description */}
            <div className="px-6 mt-5">
              <label
                htmlFor="description"
                className="block text-lg font-semibold text-amber-800 mb-2"
              >
                Description
              </label>

              <Field
                as="textarea"
                rows="4"
                name="description"
                placeholder="Enter description..."
                className="w-full resize-none rounded-xl border border-amber-300 px-4 py-3 outline-none focus:ring-2 focus:ring-amber-400"
              />

              <div className="flex justify-between mt-1">
                <div className="text-sm text-red-500">
                  <ErrorMessage name="description" />
                </div>

                <span className="text-xs text-gray-400">
                  {values.description.length}
                  /300
                </span>
              </div>
            </div>

            {/* Submit */}
            <div className="flex justify-end px-6 mt-8">
              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-amber-900 px-6 py-3 text-white font-medium hover:bg-amber-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading
                  ? isUpdate
                    ? "Updating..."
                    : "Creating..."
                  : isUpdate
                    ? "Update Todo"
                    : "Add Todo"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddAndUpdateTodo;
