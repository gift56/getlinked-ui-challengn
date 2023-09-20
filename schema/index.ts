import * as yup from "yup";

export const registerSchema = yup.object().shape({
  team_name: yup.string().required("Required"),
  phone_number: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Address").required("Required"),
  project_topic: yup.string().required("Required"),
  category: yup.string().required("Required"),
  group_size: yup.string().required("Required"),
  privacy_poclicy_accepted: yup
    .boolean()
    .oneOf([true], "Terms and condition is Required!")
    .required("Terms and condition is Required!"),
});

export const contactSchema = yup.object().shape({
  first_name: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Address").required("Required"),
  phone_number: yup
    .string()
    .matches(
      /^(?:\+?\d{1,4}[-.\s]?)?(?:\(\d{1,4}\)[-.\s]?)?\d{1,15}$/g,
      "Invalid phone number"
    )
    .required("Required"),
  message: yup.string().required("Required"),
});
