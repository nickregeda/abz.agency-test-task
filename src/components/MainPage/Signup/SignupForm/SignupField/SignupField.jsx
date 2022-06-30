import {Field} from "formik";
import signup_field from "./SignupField.module.css";

const SignupField = (props) => {
    return (
        <>
            <Field
                className={props.errors && props.touched ? signup_field.incorrect_input : signup_field.correct_input}
                name={props.name} type={'text'}
                placeholder={props.placeholder}
                autoComplete={'off'}/>
        </>
    )
}

export default SignupField;