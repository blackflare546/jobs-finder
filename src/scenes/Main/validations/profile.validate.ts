import * as Yup from "yup";

export const profileValidateSchema = Yup.object()
  .shape({
    name: Yup.string().required("Name is required").min(1),
    age: Yup.string().required("Age is required").min(1),
    address: Yup.string().required("Address is required").min(3),
  })
  .required();
