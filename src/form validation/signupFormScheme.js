import * as Yup from "yup";

const signupFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "user name, should be 2-60 characters")
        .max(60, "user name, should be 2-60 characters")
        .required("Required"),
});
export default signupFormSchema;