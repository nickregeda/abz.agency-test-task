import {connect} from "react-redux";
import Users from "./Users";
import {getUsers} from "../../../bll/usersReducer";

let mapStateToProps = (state) => ({
    users: state.usersReducer.users,
    total_pages: state.usersReducer.total_pages,
})

export default connect(mapStateToProps, {getUsers})(Users)