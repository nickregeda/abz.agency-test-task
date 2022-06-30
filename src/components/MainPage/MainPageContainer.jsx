import MainPage from "./MainPage";
import {connect} from "react-redux";
import {getUsers} from "../../bll/usersReducer";
import {getPositions} from "../../bll/signupReducer";

let mapStateToProps = (state) => ({
});

export default connect(mapStateToProps, {getPositions, getUsers})(MainPage) // функция connect()() передает заданные данные из redux компоненте в виде props
