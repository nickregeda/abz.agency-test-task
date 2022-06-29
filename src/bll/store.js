import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import usersReducer from "./usersReducer";
import signupReducer from "./signupReducer";

let reducers = combineReducers({usersReducer, signupReducer});

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store;
export default store;