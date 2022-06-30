import MainPage from "./MainPage";
import {connect} from "react-redux";
import {getUsers, setUsers} from "../../bll/usersReducer";
import {getPositions, signUp} from "../../bll/signupReducer";

let mapStateToProps = (state) => ({
    positions: state.signupReducer.positions,
    token: state.signupReducer.token,
    registered: state.signupReducer.registered,
});

export default connect(mapStateToProps, {getUsers, getPositions, signUp, setUsers})(MainPage) // функция connect()() передает заданные данные из redux компоненте в виде props
