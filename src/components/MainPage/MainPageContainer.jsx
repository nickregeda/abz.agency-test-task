import MainPage from "./MainPage";
import {connect} from "react-redux";
import {getUsers, setUsers} from "../../bll/usersReducer";
import {getPositions, signUp} from "../../bll/signupReducer";

let mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    positions: state.signupReducer.positions,
    total_pages: state.usersReducer.total_pages,
    token: state.signupReducer.token
});

export default connect(mapStateToProps, {getUsers, getPositions, signUp, setUsers})(MainPage) // функция connect()() передает заданные данные из redux компоненте в виде props
