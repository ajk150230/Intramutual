const express = require('express')
const massive = require('massive')
const session = require('express-session')
const dotenv = require('dotenv')
const path = require('path')
const {register, login, getSession, logout, editPicture} = require('./controller/authController')
const {postEvent, editEvent, deleteEvent, getEvents, getAllEvents } = require('./controller/eventController')
const {createRoster, editRoster, showAllRoster, attendees, joinWaitlist, getMyRosters, getAllRostersInfo} = require('./controller/rosterController')
dotenv.config()
const app = express()

app.use(express.json())

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set('db', db)
        console.log('db is connected')
    })

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET
    })
)

app.post("/auth/register", register)
app.post("/auth/login", login)
app.put("/auth/picture", editPicture)
app.get("/auth/user", getSession)
app.get('/auth/logout', logout)

app.post("/api/event", postEvent)
app.put("/api/event/:event_id", editEvent)
app.delete(`/api/event/:event_id`, deleteEvent)
app.get("/api/event", getEvents)
app.get("/api/discover", getAllEvents)

app.post("/api/roster", createRoster)
app.put("/api/roster/:rosters_id", editRoster)
app.get("/api/roster", getMyRosters)
app.get("/api/roster/:rosters_id", getAllRostersInfo)
app.get("/api/allroster/:event_id", showAllRoster)
app.post("/api/waitlist", joinWaitlist)
app.get("/api/waitlist", attendees)

app.use(express.static(__dirname + '/../build'))

app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, '../build/index.html'))
})
app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT} `)) 