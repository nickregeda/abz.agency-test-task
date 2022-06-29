import {getToken} from "./bll/signupReducer";
import App from "./App";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {getToken})(App);