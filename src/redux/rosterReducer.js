import axios from 'axios'

const initialState={
    rosters: [],
    allmyrosters: [],
    attendees: []
}
const JOINWAITLIST = "JOINWAITLIST"
const GETTEAMLIST = "GETTEAMLIST"
const CREATEROSTER = "CREATEROSTER"
const MYROSTERS = "MYROSTERS"
const GETALLROSTERSINFO = "GETALLROSTERSINFO"
const EDITROSTER ="EDITROSTER"

export function joinWaitlist(id){
    console.log(id)
    return{
        type: JOINWAITLIST,
        payload: axios.post("/api/waitlist", {...id})
    }
}

export function getTeamList(event_id){
    console.log(event_id)
    return{
        type: GETTEAMLIST,
        payload: axios.get(`/api/allroster/${event_id}`)
    }
}

export function createRoster(team){
    console.log(team)
    return{
        type: CREATEROSTER,
        payload: axios.post("/api/roster", {...team})
    }
}

export function rostersManager(){
    return{
        type: MYROSTERS,
        payload: axios.get("/api/roster")
    }
}

export function getAllRostersInfo(rosters_id){
    console.log(rosters_id)
    return{
        type: GETALLROSTERSINFO,
        payload: axios.get(`/api/roster/${rosters_id}`)
    }
}

export function editRoster(p1, p2, p3, p4, p5, rosters_id){
    return{
        type: editRoster,
        payload: axios.put(`/api/roster/${rosters_id}`, {p1, p2, p3, p4, p5})
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
        case GETTEAMLIST + "_PENDING":
        console.log(action.payload)
            return{
                ...state
            }
        case CREATEROSTER + "_FULFILLED":
            return{
                ...state
            }
        case MYROSTERS + "_FULFILLED":
            return{
                ...state,
                allmyrosters: action.payload.data
            }
        case GETALLROSTERSINFO +"_FULFILLED":
            console.log(action.payload)
            return{
                ...state,
                attendees: action.payload.data
            }
        case EDITROSTER +"_FULFILLED":
            return{
                ...state,

            }
        default:
            return state
    }
}