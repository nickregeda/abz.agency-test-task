import style from './MainPage.module.css';
import {useEffect, useState} from "react";
import {Field} from "formik";
import {Element} from 'react-scroll'
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import Signup from "./Signup/Signup";
import UsersContainer from "./Users/UsersContainer";

const MainPage = (props) => {
    useEffect(() => {
        props.getUsers(1, 6);
        props.getPositions();
    }, [props.users])

    let positionsElements = props.positions.map(p =>
        <div className={style.position_radio} key={p.id}><Field style={{outline: 'none', width: '20px', height: '20px'}}
                                                                name={'position'} type={'radio'}
                                                                value={p.id.toString()}/>
            <div className={style.position_name}>{p.name}</div>
        </div>);


    let onSignUpSubmit = (values) => {
        props.signUp(values.name, values.email, values.phone, Number(values.position), values.photo)
    }

    return (
        <div className={style.container}>
            <Header/>
            <Intro/>

            <Element name="users">
                <UsersContainer/>
            </Element>

            <Element name='signup'>
                <Signup registered={props.registered} onSignUpSubmit={onSignUpSubmit}
                        positionsElements={positionsElements}/>
            </Element>
        </div>
    )
}

export default MainPage;