import axios from 'axios'
const initialState = {
    event_name: "",
    address: "",
    dateofevent: "",
    sport: "",
    starttime: "",
    endtime: "",
    profileEvents: []
}

const POSTEVENT = "POSTEVENT"
const GETUSEREVENTS = "GETUSEREVENTS"
const DELETEEVENT = "DELETEEVENT"
const EDITEVENT = "EDITEVENT"

export function postEvent(event_name, address, sport, dateofevent, starttime, endtime) {
    return {
        type: POSTEVENT,
        payload: axios.post("/api/event",
            { event_name, address, sport, dateofevent, starttime, endtime })
    }
}

export function getUserEvents() {
    return {
        type: GETUSEREVENTS,
        payload: axios.get("/api/event")
    }
}

export function deleteEvent(event_id) {
    return {
        type: DELETEEVENT,
        payload: axios.delete(`/api/event/${event_id}`)
    }
}

export function editEvent(event_id, event_name, address, sport, dateofevent, starttime, endtime) {
    console.log(event_id, event_name, address, sport, dateofevent, starttime, endtime)
    return {
        type: EDITEVENT,
        payload: axios.put(`/api/event/${event_id}`,
            {event_name, address, sport, dateofevent, starttime, endtime })
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case POSTEVENT + '_FULFILLED':
            return {
                ...state,
                event_name: action.payload.data.event_name,
                address: action.payload.data.address,
                dateofevent: action.payload.data.dateofevent,
                starttime: action.payload.data.starttime,
                endtime: action.payload.data.endtime
            }
        case EDITEVENT + '_FULFILLED':
            console.log(action.payload)
            return {
                ...state,
                event_name: action.payload.data.event_name,
                address: action.payload.data.address,
                sport: action.payload.data.sport,
                dateofevent: action.payload.data.dateofevent,
                starttime: action.payload.data.starttime,
                endtime: action.payload.data.endtime
            }
        case GETUSEREVENTS + '_FULFILLED':
            return {
                ...state,
                profileEvents: action.payload.data
            }
        case DELETEEVENT + '_FULFILLED':
            return {
                ...state,
            }
        default:
            return state
    }
}