import { createStore, combineReducers, applyMiddleware } from "redux"
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from "./userReducer"
import eventReducer from "./eventReducer"

const rootReducer = combineReducers({
    user: userReducer,
    event: eventReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))