import users from "./Users.module.css";
import button from '../common css/button.module.css'
import label from '../common css/label.module.css'


import avatar_cover from "../../../img/photo-cover.svg";
import {useState} from "react";

const Users = (props) => {
    const [page, setPage] = useState(1);

    let usersElements = props.users.map(u => <div key={u.id} className={users.user_item}>
        <img className={users.user_photo} src={u.photo ? u.photo : avatar_cover} alt=""/>
        <div className={users.user_name}>{u.name}</div>
        <div>{u.position}</div>
        <div>{u.email}</div>
        <div>{u.phone}</div>
    </div>)

    let onShowMore = () => {
        props.getUsers(page + 1, 6)
        setPage(page + 1)
    }

    return (
        <div className={users.users_section}>
            <div className={label.users_label}>Working with GET request</div>
            <div className={users.users_block}>{usersElements}</div>
            {page === props.total_pages ?
                <></>
                :
                <button className={button.show_more_button}
                        onClick={onShowMore}>Show more
                </button>}
        </div>
    )
}

export default Users;