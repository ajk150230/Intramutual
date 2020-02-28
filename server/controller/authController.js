const bcrypt = require('bcryptjs')

module.exports = {
    register: function (req, res){
        const {email, password, firstname, lastname, company, sport, city} = req.body
        console.log(req.body)
        console.log('hit')
        const db = req.app.get('db')
        bcrypt.hash(password, 12).then(hashed => {
            db.registerUser( email, hashed, firstname, lastname, company, sport, city)
                .then((user)=>{
                    console.log(user)
                    const currentUser = user[0]
                    req.session.currentUser = {
                        users_id: user.users_id,
                        email: currentUser.email,
                        firstname: currentUser.firstname,
                        lastname: currentUser.lastname,
                        company: currentUser.company,
                        sport: currentUser.sport,
                        city: currentUser.city
                    }
                    res.status(200).json(
                        req.session.currentUser
                    )
                })
                .catch(err => {
                    console.log(err)
                    res.status(500).json(err)
                })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json(err)
        })
    },

    login: async (req, res) => {
        const {email, password} = req.body
        const loggedUser = await req.app.get('db').get_user(email)
        const user = loggedUser[0]
        if(loggedUser.length === 0){
            return res.status(401).send('This email is not registered or found')
        }
        const cleared = bcrypt.compare(password, user.password)
        if(!cleared){
            return res.status(403).json('Incorrect password')
        }
        req.session.currentUser = {
            users_id: user.users_id,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname,
            company: user.company,
            sport: user.sport,
            city: user.city
        }
        return res.status(200).json(req.session.currentUser)
    },
    getSession: async (req, res) => {
        if(req.session.currentUser){
        res.status(200).json(req.session.currentUser)
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.sendStatus(200)
    }
}