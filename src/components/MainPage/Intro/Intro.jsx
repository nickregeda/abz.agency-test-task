import intro from "./Intro.module.css";
import button from '../common css/button.module.css'
import label from '../common css/label.module.css'

import {Link} from "react-scroll";

const Intro = (props) => {
    return (
        <div className={intro.intro_section}>
            <div className={label.intro_label}>
                Test assignment for front-end developer
            </div>
            <div className={intro.intro_text}>
                What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a
                vast understanding of User design thinking as they'll be building web interfaces with accessibility
                in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
            </div>
            <Link to="signup" spy={true} smooth={true} duration={500}>
                <button className={button.intro_signup_button}>Sign up</button>
            </Link>
        </div>
    )
}

export default Intro;