const express = require('express')
const massive = require('massive')
const session = require('express-session')
const dotenv = require('dotenv')
const {register, login, getSession, logout} = require('./controller/authController')
const {postEvent, editEvent, deleteEvent, getEvents, getAllEvents } = require('./controller/eventController')
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
app.get("/auth/user", getSession)
app.get('/auth/logout', logout)

app.post("/api/event", postEvent)
app.put("/api/event/:event_id", editEvent)
app.delete(`/api/event/:event_id`, deleteEvent)
app.get("/api/event", getEvents)
app.get("/api/discover", getAllEvents)

app.listen(process.env.SERVER_PORT, () => console.log(`Listening on port ${process.env.SERVER_PORT} `)) 