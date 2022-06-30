import {signupAPI} from "../dal/api";
import {getUsers, setUsers} from "./usersReducer";

const SET_POSITIONS = 'SET_POSITIONS';
const SET_TOKEN = 'SET_TOKEN';
const SET_REGISTERED = 'SET_REGISTERED';

const initialState = {
    positions: [],
    token: '',
    registered: false,
}

const signupReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSITIONS:
            return {
                ...state,
                positions: action.positions,
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token,
            }
        case SET_REGISTERED:
            return {
                ...state,
                registered: action.registered
            }
        default:
            return state;
    }
}

export default signupReducer;

//Action creators
export const setPositions = (positions) => ({type: SET_POSITIONS, positions});
export const setToken = (token) => ({type: SET_TOKEN, token});
export const setRegistered = (registered) => ({type: SET_REGISTERED, registered});

//Thunk creators
export const getToken = () => {
    return (dispatch) => {
        signupAPI.getToken().then(response => {
            dispatch(setToken(response.data.token));
        })
    }
}
export const getPositions = () => {
    return (dispatch) => {
        signupAPI.getPositions().then(response => {
            dispatch(setPositions(response.data.positions))
        })
    }
}
export const signUp = (name, email, phone, position_id, photo) => {
    return (dispatch) => {
        signupAPI.signUp(name, email, phone, position_id, photo).then(response => {
            if (response.data.success) {
                dispatch(setRegistered(true)).then(
                    dispatch(setUsers([])).then(
                        dispatch(getUsers(1, 6))
                    )
                )
            }
        })
    }
}