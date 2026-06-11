import * as Yup from "yup";

export const todoSchema = Yup.object({
  title: Yup.string()
    .min(3, "Minimum 3 characters")
    .max(50, "Maximum 50 characters")
    .required("Title is required"),

  description: Yup.string().max(
    300,
    "Maximum 300 characters"
  ),
});