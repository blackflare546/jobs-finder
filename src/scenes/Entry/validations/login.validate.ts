import * as Yup from "yup";

export const loginValidateSchema = Yup.object()
  .shape({
    email: Yup.string().email().required("Email is required"),
    password: Yup.string().required("Password is required").min(1),
  })
  .required();
