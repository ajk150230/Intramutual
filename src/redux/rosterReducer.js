import axios from 'axios'

const initialState={
    rosters: []
}
const JOINWAITLIST = "JOINWAITLIST"
const GETTEAMLIST = "GETTEAMLIST"

export function joinWaitlist(event_id){
    console.log(event_id)
    return{
        type: JOINWAITLIST,
        payload: axios.post("/api/waitlist", {event_id})
    }
}

export function getTeamList(event_id){
    console.log(event_id)
    return{
        type: GETTEAMLIST,
        payload: axios.get("/api/allroster", {event_id})
    }
}

export default function reducer (state=initialState, action){
    switch(action.type){
        case JOINWAITLIST + '_FULFILLED':
            return{
                ...state
            }
        case JOINWAITLIST + '_PENDING':
            return{
                ...state
            }
        case GETTEAMLIST + "_FULFILLED":
        console.log(action.payload)
            return{
                ...state,
                rosters: action.payload.data
            }
        default:
            return state
    }
}