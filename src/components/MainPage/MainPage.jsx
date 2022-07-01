import style from './MainPage.module.css';
import {useEffect, useState} from "react";
import {Element} from 'react-scroll'
import Header from "./Header/Header";
import Intro from "./Intro/Intro";
import UsersContainer from "./Users/UsersContainer";
import SignupContainer from "./Signup/SignupContainer";

const MainPage = (props) => {
    useEffect(() => {
        props.getUsers(1, 6);
        props.getPositions();
        props.getToken();
    }, [props.users])

    return (
        <div className={style.container}>
            <Header/>
            <Intro/>

            <Element name="users">
                <UsersContainer/>
            </Element>

            <Element name='signup'>
                <SignupContainer/>
            </Element>
        </div>
    )
}

export default MainPage;