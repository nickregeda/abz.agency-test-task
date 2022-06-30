import header from "./Header.module.css";
import button from '../common css/button.module.css'

import logo from "../../../img/Logo.svg";
import {Link} from "react-scroll";

const Header = (props) => {
    return (
        <div className={header.header}>
            <div><img className={header.logo} src={logo} alt=""/></div>
            <div className={header.header_buttons}>
                <Link to="users" spy={true} smooth={true} duration={500}>
                    <button className={button.header_users_button}>Users</button>
                </Link>
                <Link to="signup" spy={true} smooth={true} duration={500}>
                    <button className={button.header_signup_button}>Sign up</button>
                </Link>
            </div>
        </div>
    )
}

export default Header;