import signup from './Signup.module.css'
import label from '../common css/label.module.css'

import signup_success from "../../../img/success-image.svg";
import {Formik} from "formik";
import signupFormScheme from "../../../form validation/signupFormScheme";
import SignupForm from "./SignupForm/SignupForm";

const Signup = (props) => {
    let onSignUpSubmit = (values) => {
        props.signUp(values.name, values.email, values.phone, Number(values.position), values.photo, props.token)
    }

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
                        onSubmit={onSignUpSubmit}
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
                            if (!values.photo) {
                                errors.photo = 'Required'
                            } else if (!['image/jpeg'].includes(values.photo.type) && !['image/jpg'].includes(values.photo.type)) {
                                errors.photo = 'jpg/jpeg only'
                            } else if (values.photo.size > 5000000) {
                                errors.photo = 'size < 5 MB'
                            }
                            return errors;
                        }}
                        validationSchema={signupFormScheme}
                    >
                        {({values, errors, touched, setFieldValue}) => (
                            <SignupForm values={values} errors={errors} touched={touched}
                                        setFieldValue={setFieldValue} positions={props.positions}/>
                        )}
                    </Formik>
                </div>
            }
        </>
    )
}

export default Signup;