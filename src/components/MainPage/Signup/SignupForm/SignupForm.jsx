import signup_form from "./SignupForm.module.css";
import button from '../../common css/button.module.css'
import label from '../../common css/label.module.css'

import {ErrorMessage, Field, Form} from "formik";
import SignupField from "./SignupField/SignupField";
import CustomFileButton from "./CustomFileButton/CustomFileButton";

const SignupForm = (props) => {
    return (
        <Form className={signup_form.signup_form}>
            <SignupField errors={props.errors.name} touched={props.touched.name} name={'name'}
                         placeholder={'Your name'}/>
            <ErrorMessage className={signup_form.error} name={'name'} component={'div'}/>

            <SignupField errors={props.errors.email} touched={props.touched.email} name={'email'}
                         placeholder={'Email'}/>
            <ErrorMessage className={signup_form.error} name={'email'} component={'div'}/>

            <SignupField errors={props.errors.phone} touched={props.touched.phone} name={'phone'}
                         placeholder={'Phone'}/>
            {props.errors.phone && props.touched.phone ?
                <ErrorMessage className={signup_form.error} name={'phone'} component={'div'}/>
                :
                <div className={signup_form.phone_example}>+38 (XXX) XXX - XX - XX</div>}

            <div>
                <label className={label.positions_select_label}>Select your position</label>
                {props.positionsElements}
                <ErrorMessage className={signup_form.error} name={'position'} component={'div'}/>
            </div>

            <CustomFileButton values={props.values} setFieldValue={props.setFieldValue}/>

            <button
                disabled={!props.values.name || !props.values.email || !props.values.phone || !props.values.position || !props.values.photo}
                className={button.intro_signup_button} type={'submit'}>Sign up
            </button>
        </Form>
    )
}

export default SignupForm;