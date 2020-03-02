import axios from 'axios'
const initialState={
    event_name: "",
    address: "",
    dateofevent: "",
    starttime: "",
    endtime: "",
    profileEvents: []
}

const POSTEVENT = "POSTEVENT"
const GETUSEREVENTS = "GETUSEREVENTS"
const DELETEEVENT = "DELETEEVENT"

export function postEvent(event_name, address, sport, dateofevent, starttime, endtime){
    return{
        type: POSTEVENT,
        payload: axios.post("/api/event", 
        {event_name, address, sport, dateofevent, starttime, endtime})
    }
}

export function getUserEvents(){
    return{
        type: GETUSEREVENTS,
        payload: axios.get("/api/event")
    }
}

export function deleteEvent(event_id){
    return{
        type: DELETEEVENT,
        payload: axios.delete(`/api/event/${event_id}`)
    }
}

export default function reducer(state=initialState, action){
    switch(action.type){
        case POSTEVENT + '_FULFILLED':
        console.log(action.payload)
        return{
            ...state,
            event_name: action.payload.data.event_name,
            address: action.payload.data.address,
            dateofevent: action.payload.data.dateofevent,
            starttime: action.payload.data.starttime,
            endtime: action.payload.data.endtime
        }
        case GETUSEREVENTS + '_FULFILLED':
        return{
            ...state,
            profileEvents: action.payload.data
        }
        case DELETEEVENT + '_FULFILLED':
        return{
            ...state,
        }
        default:
            return state
    }
}