import axios from 'axios'
const initialState = {
    users_id: '',
    email: "",
    firstname: "",
    lastname: "",
    company: "",
    sport: "",
    city: "",
    shouldRedirect: false
}

const REGISTER_PROFILE = "REGISTER_PROFILE";
const LOGIN_USER = "LOGIN_USER"
const GET_SESSION = "GET_SESSION"
const UPDATE_STATE = "UPDATE_STATE"
const RESET_STATE = "RESET_STATE"

export function resetState() {
    return{
        type:RESET_STATE
    }
}

export function registerProfile(user){
    // console.log(email, firstname, lastname, company, sport, city)
    //  axios.post('/auth/register', {email, firstname, lastname, company, sport, city})
    return{
        type: REGISTER_PROFILE,
        payload: axios.post('/auth/register', {...user} )
    }
}
export function loginUser(email, password){
    return{
        type: LOGIN_USER,
        payload: axios.post('/auth/login', {email, password})
    }
}
export function getSession(){
    return{
        type: GET_SESSION,
        payload: axios.get('/auth/user')
    }
}
export function updateState(e){
    return{
        type: UPDATE_STATE,
        payload: e
    }
}


export default function reducer(state=initialState, action){
    switch (action.type){
        case REGISTER_PROFILE + '_FULFILLED':
        return{
            ...state,
            users_id: action.payload.data.users_id,
            email: action.payload.data.email,
            firstname: action.payload.data.firstname,
            lastname: action.payload.data.lastname,
            company: action.payload.data.company,
            sport: action.payload.data.sport,
            city: action.payload.data.city,
            shouldRedirect: false            
        }
        case LOGIN_USER + '_FULFILLED':
        // const {email, password, firstname, lastname, company, sport, city, profile} = action.payload
        console.log("payload: ",action.payload);
        return{
            ...state,
            users_id: action.payload.data.users_id,
            email: action.payload.data.email,
            firstname: action.payload.data.firstname,
            lastname: action.payload.data.lastname,
            company: action.payload.data.company,
            sport: action.payload.data.sport,
            city: action.payload.data.city,
            shouldRedirect: false
        }
        case GET_SESSION + '_FULFILLED':
        return{
            ...state,
            users_id: action.payload.data.users_id,
            email: action.payload.data.email,
            firstname: action.payload.data.firstname,
            lastname: action.payload.data.lastname,
            company: action.payload.data.company,
            sport: action.payload.data.sport,
            city: action.payload.data.city,
        }
        case UPDATE_STATE:
        return{
            ...state,
            ...action.payload      
         }
         case RESET_STATE:
         return{
             ...state,
             users_id: '',
             email: "",
             firstname: "",
             lastname: "",
             company: "",
             sport: "",
             city: ""
         }
        default:
            return state;
    }
}