module.exports={
    postEvent: function (req, res){
        const db = req.app.get('db')        
        const users_id = req.session.currentUser.users_id
        const {event_name, address, dateofevent, starttime, endtime} = req.body
        console.log(dateofevent)
        db.events.postEvents([users_id, event_name, address, dateofevent, starttime, endtime])
            .then(post =>{
                res.sendStatus(200)
            })
            .catch(error => {
                console.log(error)
                res.status(500).json("internal server error")
            })
    },
    editEvent: function (req, res){
        const db = req.app.get('db')
        const {event_name, address, date_OfEvent, startTime, endTime} = req.body
        const {event_id}=req.params
        db.events.edit_Events([id, event_name, address, date_OfEvent, startTime, endTime])
            .then(()=>res.sendStatus(200))
            .catch(error =>{
                console.log(error)
                res.status(500).json("Don't forget to push ")
            })
    },
    deleteEvent: function (req, res){
        const db = req.app.get('db')
        const event_id = req.params.id
        db.events.deleteEvents(event_id)
            .then(response =>{
                res.sendStatus(200)
            })
            .catch(error=>{
                res.status(409).json("you messed up")
            })
    },
    getEvents: function (req, res){
        const db = req.app.get('db')
        const users_id = req.session.currentUser.users_id
        db.events.getEvents(users_id)
            .then((event) => {
                res.status(200).send(event)
            })
            .catch(error=>{
                console.error(error)
                res.sendStatus(500)
            })
    }
}