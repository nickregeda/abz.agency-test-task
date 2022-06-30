import {connect} from "react-redux";
import {signUp} from "../../../bll/signupReducer";
import Signup from "./Signup";

let mapStateToProps = (state) => ({
    positions: state.signupReducer.positions,
    registered: state.signupReducer.registered,
})

export default connect(mapStateToProps, {signUp})(Signup)
