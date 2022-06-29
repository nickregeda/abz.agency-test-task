import {usersAPI} from "../dal/api";

const SET_USERS = 'SET_USERS';
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

const initialState = {
    users: [],
    total_pages: 0,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: state.users.length === 0 ? action.users : state.users.some(su => action.users.some(au => au.id === su.id)) ? state.users : action.users.length === 0 ? action.users : [...state.users, ...action.users]
            }
        case
        SET_TOTAL_PAGES:
            return {
                ...state,
                total_pages: action.total_pages,
            }
        default:
            return state;
    }
}

export default usersReducer;

//Action creators
export const setUsers = (users) => {
    debugger
    return {type: SET_USERS, users}
};
export const setTotalPages = (total_pages) => ({type: SET_TOTAL_PAGES, total_pages});

//Thunk creators
export const getUsers = (page, count, offset) => {
    return (dispatch) => {
        usersAPI.getUsers(page, count, offset).then(response => {
            debugger
            dispatch(setUsers(response.data.users));
            dispatch(setTotalPages(response.data.total_pages));
        })
    }
}