module.exports = {
    //1 post
    createRoster: function (req, res) {
        const db = req.app.get('db')
        const manager = req.session.currentUser.users_id
        const { event_id, sport, team_name } = req.body
        console.log(req.body)
        db.attend.createRoster([manager, event_id, sport, team_name])
            .then(roster => {
                res.status(200).json(roster)
            })
            .catch(error => {
                console.error(error)
                res.status(500).json('sike')
            })
    },
    //4 put
    editRoster: function (req, res) {
        const db = req.app.get('db')
        const users_id = req.session.currentUser_id
        const { rosters_id } = req.params
        const { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11 } = req.body
        db.attend.editRoster([p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, rosters_id])
            .then(newRoster => {
                res.status(200).json(newRoster)
            })
            .catch(error => {
                console.error(error)
                res.status(500).json('sike')
            })
    },
    //7 get
    showAllRoster: function (req, res) {
        const db = req.app.get('db')
        console.log('hit')
        
        const { event_id } = req.body
        db.attend.showAllRoster(event_id)
            .then(currentRoster => {
                console.log(currentRoster)
                res.status(200).json(currentRoster)
            })
            .catch(error => {
                res.status(500).json('sike')
            })
    },
    //8 get
    getOneRoster: function (req, res) {
        const db = req.app.get('db')
        const {rosters_id} = req.body
        console.log(rosters_id)
        db.attend.getRoster(rosters_id)
            .then(oneroster => {
                res.status(200).json(oneroster)
            })
            .catch(error => {
                console.error(error)
                res.status(500).json('sike')
            })
    },
    //3 get
    attendees: function (req, res) {
        const db = req.app.get('db')
        const { event_id } = req.body
        db.attend.attendees(event_id)
            .then(attendees => {
                res.status(200).json(attendees)
            })
            .catch(error => {
                console.error(error)
                res.status(500).json('sike')
            })
    },
    //6 post
    joinWaitlist: function (req, res) {
        const db = req.app.get('db')
        const users_id = req.session.currentUser.users_id
        const { event_id } = req.body
        db.attend.joinWaitlist(event_id, users_id)
            .then(post =>{
                res.status(200).json(post)
            })
            .catch(error =>{
                console.error(error)
                res.status(500).json('Whats the point if you cant even get in')
            })
    },
}