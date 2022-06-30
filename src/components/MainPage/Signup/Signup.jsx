import signup from './Signup.module.css'
import label from '../common css/label.module.css'

import signup_success from "../../../img/success-image.svg";
import {Formik} from "formik";
import signupFormScheme from "../../../form validation/signupFormScheme";
import SignupForm from "./SignupForm/SignupForm";

const Signup = (props) => {
    return (
        <>
            {props.registered ? <div>
                    <div className={label.registered_success_label}>User successfully registered</div>
                    <img className={signup.registered_success_image} src={signup_success} alt=""/></div>
                :
                <div className={signup.signup_section}>
                    <div className={label.signup_label}>Working with POST request</div>
                    <Formik
                        initialValues={{name: '', email: '', phone: '', position: '', photo: ''}}
                        onSubmit={props.onSignUpSubmit}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (
                                !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(values.email)
                            ) {
                                errors.email = 'Invalid email address';
                            }
                            if (!values.phone) {
                                errors.phone = 'Required'
                            } else if (values.phone.substr(0, 4) !== '+380') {
                                errors.phone = 'Code of Ukraine +380'
                            }
                            if (!values.position) {
                                errors.position = 'Required'
                            }
                            return errors;
                        }}
                        validationSchema={signupFormScheme}
                    >
                        {({values, errors, touched, setFieldValue}) => (
                            <SignupForm values={values} errors={errors} touched={touched}
                                        setFieldValue={setFieldValue}/>
                        )}
                    </Formik>
                </div>
            }
        </>
    )
}

export default Signup;