import * as yup from "yup";

export const registerSchema = yup.object().shape({
  team_name: yup.string().required("Required"),
  phone_number: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Address").required("Required"),
  project_topic: yup.string().required("Required"),
  category: yup.string().required("Required"),
  group_size: yup.string().required("Required"),
});
