import MainPage from "./MainPage";
import {connect} from "react-redux";
import {getUsers} from "../../bll/usersReducer";
import {getPositions, getToken} from "../../bll/signupReducer";

let mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {getPositions, getUsers, getToken})(MainPage) // функция connect()() передает заданные данные из redux компоненте в виде props
