import style from './MainPage.module.css';
import logo from '../../img/Logo.svg'
import {useEffect, useState} from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import signupFormScheme from "../../form validation/signupFormScheme";

const MainPage = (props) => {
    const [page, setPage] = useState(1);
    // const [signedUp, setSignedUp] = useState(false);

    useEffect(() => {
        debugger
        if (page === 1) {
            props.getUsers(page, 6);
        }
        props.getPositions();
    }, [props.users])

    let usersElements = props.users.map(u => <div key={u.id} className={style.user_item}>
        <img className={style.user_photo} src={u.photo} alt=""/>
        <div className={style.user_name}>{u.name}</div>
        <div>{u.position}</div>
        <div>{u.email}</div>
        <div>{u.phone}</div>
    </div>)

    let positionsElements = props.positions.map(p =>
        <div className={style.position_radio} key={p.id}><Field style={{outline: 'none', width: '20px', height: '20px'}}
                                                                name={'position'} type={'radio'}
                                                                value={p.id.toString()}/>
            <div className={style.position_name}>{p.name}</div>
        </div>);

    let onShowMore = () => {
        props.getUsers(page + 1, 6)
        setPage(page + 1)
        console.log(page, props.total_pages)
    }

    let onSignUpSubmit = (values) => {
        debugger
        // console.log(values);
        props.signUp(values.name, values.email, values.phone, Number(values.position), values.photo)
        // setSignedUp(true)
        // setPage(1);
        // if (signedUp) {
        //     props.setUsers([]);
        // }
    }

    return (
        <div className={style.container}>
            <div className={style.header}>
                <div><img className={style.logo} src={logo} alt=""/></div>
                <div className={style.header_buttons}>
                    <button className={style.header_users_button}>Users</button>
                    <button className={style.header_signup_button}>Sign up</button>
                </div>
            </div>
            <div className={style.intro_section}>
                <div className={style.intro_label}>
                    Test assignment for front-end developer
                </div>
                <div className={style.intro_text}>
                    What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a
                    vast understanding of User design thinking as they'll be building web interfaces with accessibility
                    in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                </div>
                <button className={style.intro_signup_button}>Sign up</button>
            </div>
            <div className={style.users_section}>
                <div className={style.users_label}>Working with GET request</div>
                <div className={style.users_block}>{usersElements}</div>
                {page === props.total_pages ?
                    <></>
                    :
                    <button className={style.show_more_button}
                            onClick={onShowMore}>Show more
                    </button>}
            </div>
            <div className={style.signup_section}>
                <div className={style.signup_label}>Working with POST request</div>
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
                        return errors;
                    }}
                    validationSchema={signupFormScheme}
                >
                    {({values, errors, touched, setFieldValue}) => (
                        <Form className={style.signup_form}>
                            <Field className={errors.name && touched.name ? style.incorrect_input : style.correct_input}
                                   name={'name'} type={'text'}
                                   placeholder={'Your name'}
                                   autoComplete={'off'}/>
                            <ErrorMessage className={style.error} name={'name'} component={'div'}/>
                            <Field
                                className={errors.email && touched.email ? style.incorrect_input : style.correct_input}
                                name={'email'} type={'text'}
                                placeholder={'Email'}
                                autoComplete={'off'}/>
                            <ErrorMessage className={style.error} name={'email'} component={'div'}/>

                            <Field
                                className={errors.phone && touched.phone ? style.incorrect_input : style.correct_input}
                                name={'phone'} type={'text'}
                                placeholder={'Phone'}
                                autoComplete={'off'}/>
                            {errors.phone ? <ErrorMessage className={style.error} name={'phone'} component={'div'}/>
                                :
                                <div className={style.phone_example}>+38 (XXX) XXX - XX - XX</div>}

                            <div>
                                <label className={style.positions_select_label}>Select your position</label>
                                {positionsElements}
                                <ErrorMessage className={style.error} name={'position'} component={'div'}/>
                            </div>
                            <div>
                                <input type={'file'} name={'photo'}
                                       onChange={(event) => {
                                           setFieldValue("photo", event.currentTarget.files[0]);
                                       }}/>
                            </div>
                            <button className={style.intro_signup_button} type={'submit'}>Sign up</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default MainPage;