import { createStore, combineReducers, applyMiddleware } from "redux"
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from "./userReducer"
import eventReducer from "./eventReducer"
import rosterReducer from "./rosterReducer"

const rootReducer = combineReducers({
    user: userReducer,
    event: eventReducer,
    roster: rosterReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))