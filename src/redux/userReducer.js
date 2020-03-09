import axios from 'axios'
const initialState = {
    users_id: '',
    email: "",
    firstname: "",
    lastname: "",
    company: "",
    sport: "",
    city: "",
    profile_img: "",
    shouldRedirect: false
}

const REGISTER_PROFILE = "REGISTER_PROFILE";
const LOGIN_USER = "LOGIN_USER"
const GET_SESSION = "GET_SESSION"
const UPDATE_STATE = "UPDATE_STATE"
const RESET_STATE = "RESET_STATE"
const EDITPICTURE = "EDITPICTURE"

export function resetState() {
    return {
        type: RESET_STATE
    }
}

export function registerProfile(user) {
    return {
        type: REGISTER_PROFILE,
        payload: axios.post('/auth/register', { ...user })
    }
}
export function loginUser(email, password) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', { email, password })
    }
}
export function getSession() {
    return {
        type: GET_SESSION,
        payload: axios.get('/auth/user')
    }
}
export function updateState(e) {
    return {
        type: UPDATE_STATE,
        payload: e
    }
}
export function editPicture(profile_img){
    console.log(profile_img)
    return{
        type: EDITPICTURE,
        payload: axios.put("/auth/picture",{profile_img})
    }
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_PROFILE + '_FULFILLED':
            return {
                ...state,
                users_id: action.payload.data.users_id,
                email: action.payload.data.email,
                firstname: action.payload.data.firstname,
                lastname: action.payload.data.lastname,
                company: action.payload.data.company,
                sport: action.payload.data.sport,
                city: action.payload.data.city,
                profile_img: action.payload.data.profile_img,
                shouldRedirect: false
            }
        case LOGIN_USER + '_FULFILLED':
            // const {email, password, firstname, lastname, company, sport, city, profile} = action.payload
            console.log("payload: ", action.payload);
            return {
                ...state,
                users_id: action.payload.data.users_id,
                email: action.payload.data.email,
                firstname: action.payload.data.firstname,
                lastname: action.payload.data.lastname,
                company: action.payload.data.company,
                sport: action.payload.data.sport,
                city: action.payload.data.city,
                profile_img: action.payload.data.profile_img,
                shouldRedirect: false
            }
        case GET_SESSION + '_FULFILLED':
            return {
                ...state,
                users_id: action.payload.data.users_id,
                email: action.payload.data.email,
                firstname: action.payload.data.firstname,
                lastname: action.payload.data.lastname,
                company: action.payload.data.company,
                sport: action.payload.data.sport,
                city: action.payload.data.city,
                profile_img: action.payload.data.profile_img
            }
        case UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        case RESET_STATE:
            return {
                ...state,
                users_id: '',
                email: "",
                firstname: "",
                lastname: "",
                company: "",
                sport: "",
                city: ""
            }
        case EDITPICTURE:
            return{
                ...state,
                profile_img: action.payload.data.imgURL
            }
        default:
            return state;
    }
}